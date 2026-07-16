import { NextResponse } from 'next/server'

type LeadPayload = {
  name?: unknown
  email?: unknown
  businessName?: unknown
  consent?: unknown
  updates?: unknown
  companySize?: unknown
  painPoint?: unknown
  website?: unknown
}

const reportUrl = '/reports/ai-tools-assessment-sample-report.pdf'

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  let payload: LeadPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: 'Please check the form and try again.' }, { status: 400 })
  }

  if (clean(payload.website)) {
    return NextResponse.json({ ok: true, reportUrl })
  }

  const name = clean(payload.name)
  const email = clean(payload.email)
  const businessName = clean(payload.businessName)
  const companySize = clean(payload.companySize)
  const painPoint = clean(payload.painPoint)

  if (!name || !businessName || !isEmail(email) || payload.consent !== true) {
    return NextResponse.json(
      { error: 'Please provide your name, business name, email, and consent.' },
      { status: 422 },
    )
  }

  const lead = {
    name,
    email,
    businessName,
    companySize,
    painPoint,
    consent: true,
    updates: payload.updates === true,
    source: 'ai-tools-assessment',
    createdAt: new Date().toISOString(),
  }

  if (process.env.LEAD_WEBHOOK_URL) {
    try {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(lead),
      })
    } catch (error) {
      console.error('Lead webhook failed', error)
    }
  }

  return NextResponse.json({ ok: true, reportUrl })
}
