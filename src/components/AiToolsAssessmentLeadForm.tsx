'use client'

import { FormEvent, useMemo, useState } from 'react'
import {
  ArrowDownToLine,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  Loader2,
  Printer,
} from 'lucide-react'

type FormState = {
  name: string
  email: string
  businessName: string
  role: string
  industry: string
  website: string
  companySize: string
  revenueRange: string
  businessDescription: string
  currentTools: string
  workday: string
  dreadedTasks: string
  workPilesUp: string
  repeatedQuestions: string
  failedAutomations: string
  sensitiveSystems: string
  priorityAreas: string[]
  topTask: string
  taskFrequency: string
  taskHours: string
  taskOwner: string
  taskImpact: string
  desiredOutcome: string
  budgetComfort: string
  timeline: string
  implementationPreference: string
  consent: boolean
  updates: boolean
  botField: string
}

type Recommendation = {
  tool: string
  painPoint: string
  why: string
  cost: string
  setup: string
  hours: string
  lever: 'Efficiency' | 'Quality' | 'Effectiveness' | 'Risk control'
  effort: 'Low' | 'Medium'
  impact: 'High' | 'Medium'
}

const initialState: FormState = {
  name: '',
  email: '',
  businessName: '',
  role: '',
  industry: '',
  website: '',
  companySize: '',
  revenueRange: '',
  businessDescription: '',
  currentTools: '',
  workday: '',
  dreadedTasks: '',
  workPilesUp: '',
  repeatedQuestions: '',
  failedAutomations: '',
  sensitiveSystems: '',
  priorityAreas: [],
  topTask: '',
  taskFrequency: '',
  taskHours: '',
  taskOwner: '',
  taskImpact: '',
  desiredOutcome: '',
  budgetComfort: '',
  timeline: '',
  implementationPreference: '',
  consent: false,
  updates: false,
  botField: '',
}

const steps = [
  'Business profile',
  'How work happens',
  'Pain points',
  'Tools and constraints',
  'Review and report',
]

const priorityOptions = [
  { value: 'email', label: 'Email and repeat client questions' },
  { value: 'meetings', label: 'Meeting notes and follow-up' },
  { value: 'invoices', label: 'Invoices, reminders, or collections' },
  { value: 'proposals', label: 'Proposals, scopes, or contracts' },
  { value: 'scheduling', label: 'Scheduling and intake' },
  { value: 'knowledge', label: 'Finding internal answers or documents' },
  { value: 'crm', label: 'Lead follow-up or customer tracking' },
  { value: 'reporting', label: 'Reports, spreadsheets, or dashboards' },
]

const recommendationsByPriority: Record<string, Recommendation> = {
  email: {
    tool: 'Text Blaze or Help Scout Docs',
    painPoint: 'Repeated email responses and client questions',
    why: 'Turns your best existing answers into reusable snippets or help articles, so the team does not rewrite the same explanation every time.',
    cost: 'Free trial available; team plans commonly start under $10/user/month',
    setup: '30-60 minutes for the first 5-10 answers',
    hours: '2-5 hours/week',
    lever: 'Efficiency',
    effort: 'Low',
    impact: 'High',
  },
  meetings: {
    tool: 'Fathom, Fireflies, or Otter',
    painPoint: 'Manual note-taking during calls and missed follow-up details',
    why: 'Records, transcribes, summarizes, and extracts action items so the meeting owner can focus on the conversation.',
    cost: 'Free plans available; paid plans vary by user and summary needs',
    setup: '15-30 minutes to connect the calendar and video platform',
    hours: '1-4 hours/week',
    lever: 'Quality',
    effort: 'Low',
    impact: 'High',
  },
  invoices: {
    tool: 'QuickBooks automatic reminders or Stripe invoice reminders',
    painPoint: 'Manual overdue invoice follow-up',
    why: 'Uses the billing system you may already have to send consistent reminders before and after due dates.',
    cost: '$0 if included in the current accounting or payment plan',
    setup: '20-30 minutes to set reminder timing and message templates',
    hours: '1-3 hours/week',
    lever: 'Effectiveness',
    effort: 'Low',
    impact: 'High',
  },
  proposals: {
    tool: 'PandaDoc, Better Proposals, or reusable Google Docs templates',
    painPoint: 'Rewriting scopes, pricing tables, or proposal language from scratch',
    why: 'Creates reusable content blocks for common scopes, terms, pricing, and cover letters.',
    cost: 'Free or starter plans available; paid plans vary by seat',
    setup: '45-90 minutes to load the first reusable template',
    hours: '1-3 hours/week',
    lever: 'Efficiency',
    effort: 'Low',
    impact: 'Medium',
  },
  scheduling: {
    tool: 'Calendly, TidyCal, or Tally intake forms',
    painPoint: 'Back-and-forth scheduling and incomplete intake information',
    why: 'Lets clients book into approved windows and answer required intake questions before the first conversation.',
    cost: 'Free plans available; paid plans commonly start under $15/month',
    setup: '30-60 minutes for event types, rules, and questions',
    hours: '1-2 hours/week',
    lever: 'Efficiency',
    effort: 'Low',
    impact: 'Medium',
  },
  knowledge: {
    tool: 'Notion, Google Drive search cleanup, or a custom GPT/Claude Project',
    painPoint: 'Team members repeatedly asking where information lives',
    why: 'Centralizes reusable operating knowledge and gives the team a safer place to ask questions against approved material.',
    cost: 'Often starts with tools already in use; advanced AI workspace costs vary',
    setup: '1-3 hours for the first knowledge base pass',
    hours: '2-6 hours/week',
    lever: 'Quality',
    effort: 'Medium',
    impact: 'High',
  },
  crm: {
    tool: 'HubSpot Starter, Pipedrive, or Airtable CRM',
    painPoint: 'Lead follow-up living in memory, inboxes, or scattered notes',
    why: 'Creates one visible pipeline with owners, dates, next steps, and follow-up reminders.',
    cost: 'Free and starter plans available; pricing depends on users and features',
    setup: '1-2 hours for a simple pipeline and import',
    hours: '1-3 hours/week',
    lever: 'Effectiveness',
    effort: 'Medium',
    impact: 'High',
  },
  reporting: {
    tool: 'Airtable, Google Sheets templates, or Looker Studio',
    painPoint: 'Recurring spreadsheet cleanup and manual report assembly',
    why: 'Standardizes the source data and creates a repeatable view so reporting is not rebuilt every cycle.',
    cost: 'Often possible with existing Google Workspace or Microsoft 365 tools',
    setup: '1-3 hours depending on source data quality',
    hours: '2-5 hours/week',
    lever: 'Efficiency',
    effort: 'Medium',
    impact: 'High',
  },
}

function clean(value: string) {
  return value.trim()
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function splitWords(value: string) {
  return value.toLowerCase()
}

function getRecommendations(form: FormState) {
  const text = splitWords(
    [
      form.currentTools,
      form.workday,
      form.dreadedTasks,
      form.workPilesUp,
      form.repeatedQuestions,
      form.failedAutomations,
      form.topTask,
      form.taskImpact,
      form.desiredOutcome,
    ].join(' '),
  )

  const selected = new Set(form.priorityAreas)
  const keywordMatches: [string, string[]][] = [
    ['email', ['email', 'inbox', 'reply', 'responses', 'questions']],
    ['meetings', ['meeting', 'call', 'notes', 'transcript', 'zoom']],
    ['invoices', ['invoice', 'billing', 'collection', 'payment', 'overdue']],
    ['proposals', ['proposal', 'scope', 'contract', 'quote', 'estimate']],
    ['scheduling', ['schedule', 'booking', 'calendar', 'intake']],
    ['knowledge', ['document', 'knowledge', 'sop', 'training', 'where', 'policy']],
    ['crm', ['lead', 'prospect', 'follow-up', 'customer', 'crm']],
    ['reporting', ['spreadsheet', 'report', 'dashboard', 'excel', 'sheet']],
  ]

  keywordMatches.forEach(([key, words]) => {
    if (words.some((word) => text.includes(word))) selected.add(key)
  })

  if (selected.size < 3) {
    selected.add('email')
    selected.add('meetings')
    selected.add('scheduling')
  }

  return Array.from(selected)
    .map((key) => recommendationsByPriority[key])
    .filter(Boolean)
    .slice(0, 7)
}

function parseHours(value: string) {
  const numeric = Number.parseFloat(value)
  return Number.isFinite(numeric) && numeric > 0 ? numeric : 7
}

function getWeeklySavings(recommendations: Recommendation[], statedHours: string) {
  const baseline = parseHours(statedHours)
  const estimate = Math.max(5, Math.min(13, Math.round(baseline * 0.55 + recommendations.length * 0.8)))
  return estimate
}

function getPrimaryFocus(recommendations: Recommendation[]) {
  const counts = recommendations.reduce<Record<string, number>>((acc, rec) => {
    acc[rec.lever] = (acc[rec.lever] || 0) + 1
    return acc
  }, {})
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Efficiency'
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function makeReportHtml(form: FormState, recommendations: Recommendation[], weeklySavings: number) {
  const primaryFocus = getPrimaryFocus(recommendations)
  const monthlyValue = weeklySavings * 4.33 * 50
  const safe = (value: string) => escapeHtml(clean(value) || 'Not provided')
  const recommendationRows = recommendations
    .map(
      (rec) => `
        <tr>
          <td><strong>${escapeHtml(rec.tool)}</strong><br><span>${escapeHtml(rec.painPoint)}</span></td>
          <td>${escapeHtml(rec.cost)}</td>
          <td>${escapeHtml(rec.setup)}</td>
          <td>${escapeHtml(rec.hours)}</td>
          <td>${escapeHtml(rec.lever)}</td>
        </tr>
      `,
    )
    .join('')

  const quickWins = recommendations
    .slice(0, 4)
    .map((rec) => `<li><strong>${escapeHtml(rec.painPoint)}:</strong> ${escapeHtml(rec.tool)}</li>`)
    .join('')

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AI Tools Assessment Report - ${safe(form.businessName)}</title>
  <style>
    body { color: #111827; font-family: Arial, sans-serif; line-height: 1.5; margin: 40px; }
    h1, h2 { color: #0f172a; line-height: 1.15; }
    h1 { font-size: 30px; margin-bottom: 4px; }
    h2 { border-top: 1px solid #d1d5db; font-size: 20px; margin-top: 30px; padding-top: 18px; }
    .meta, .note { color: #4b5563; font-size: 13px; }
    .summary { background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 10px; padding: 18px; }
    .grid { display: grid; gap: 12px; grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .box { border: 1px solid #d1d5db; border-radius: 10px; padding: 14px; }
    table { border-collapse: collapse; margin-top: 10px; width: 100%; }
    th, td { border: 1px solid #d1d5db; font-size: 13px; padding: 10px; text-align: left; vertical-align: top; }
    th { background: #e2e8f0; }
    span { color: #475569; font-size: 12px; }
    @media print { body { margin: 24px; } }
  </style>
</head>
<body>
  <p class="meta">The Human Workforce - Free AI Tools Assessment</p>
  <h1>AI Tools Assessment Report</h1>
  <p class="meta">Prepared for ${safe(form.name)} - ${safe(form.businessName)} | Generated ${new Date().toLocaleDateString()}</p>

  <div class="summary">
    <h2 style="border:0;margin-top:0;padding-top:0;">1. Executive Summary</h2>
    <p><strong>Main time drain:</strong> ${safe(form.topTask || form.dreadedTasks)}</p>
    <p><strong>Where work piles up:</strong> ${safe(form.workPilesUp)}</p>
    <p><strong>Primary focus:</strong> ${escapeHtml(primaryFocus)}. The recommendations below prioritize high-impact, low-effort quick wins before larger custom projects.</p>
    <p><strong>Estimated hours reclaimed:</strong> ${weeklySavings}-${weeklySavings + 2} hours per week, pending human review and implementation quality.</p>
  </div>

  <h2>2. Business Context</h2>
  <div class="grid">
    <div class="box"><strong>Industry</strong><br>${safe(form.industry)}</div>
    <div class="box"><strong>Team size</strong><br>${safe(form.companySize)}</div>
    <div class="box"><strong>Current tools</strong><br>${safe(form.currentTools)}</div>
    <div class="box"><strong>Desired outcome</strong><br>${safe(form.desiredOutcome)}</div>
  </div>

  <h2>3. Effort vs. Impact Matrix</h2>
  <table>
    <tr><th></th><th>Low Effort</th><th>High Effort</th></tr>
    <tr><th>High Impact</th><td><strong>Quick wins</strong><ul>${quickWins}</ul></td><td><strong>Major projects</strong><br>Knowledge systems, custom workflows, CRM/process redesign, or reporting automation that require scoping.</td></tr>
    <tr><th>Low Impact</th><td>Nice-to-have cleanup after quick wins are active.</td><td>Avoid until the business case is clearer.</td></tr>
  </table>

  <h2>4. Recommended Solutions</h2>
  <table>
    <tr><th>Tool and pain point</th><th>Approx. cost</th><th>Setup time</th><th>Time saved</th><th>Lever</th></tr>
    ${recommendationRows}
  </table>

  <h2>5. Four-Day Quick Start Plan</h2>
  <ol>
    <li><strong>Day 1:</strong> Pick the highest-friction workflow and document the exact current steps, owner, tools, and handoffs.</li>
    <li><strong>Day 2:</strong> Set up the first low-effort tool or template and test it on one real example.</li>
    <li><strong>Day 3:</strong> Create the first reusable response, meeting summary workflow, reminder, or template library based on the recommendation.</li>
    <li><strong>Day 4:</strong> Review results with the team, assign an owner, and decide whether the next opportunity is a do-it-yourself quick win or an implementation project.</li>
  </ol>

  <h2>6. Financial Impact</h2>
  <p>Using a conservative blended value of $50/hour, ${weeklySavings} hours/week x 4.33 weeks x $50/hour is approximately <strong>$${Math.round(monthlyValue).toLocaleString()}/month</strong> in potential time value before tool costs.</p>
  <p class="note">This is a preliminary estimate. Tool pricing, fit, data access, security requirements, and actual adoption should be verified before purchase or implementation.</p>

  <h2>7. Human Review Needed</h2>
  <p>${safe(form.sensitiveSystems)}</p>
  <p class="note">Do not rely on this report as legal, financial, tax, cybersecurity, medical, or regulatory advice.</p>
</body>
</html>`
}

function downloadHtmlReport(form: FormState, recommendations: Recommendation[], weeklySavings: number) {
  const html = makeReportHtml(form, recommendations, weeklySavings)
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  const fileName = `${clean(form.businessName).toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'ai-tools'}-assessment-report.html`
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

function Input({
  label,
  value,
  onChange,
  required,
  placeholder,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  placeholder?: string
  type?: string
}) {
  return (
    <label className="grid gap-2 text-sm text-slate-300">
      {label}
      <input
        required={required}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-300"
        placeholder={placeholder}
      />
    </label>
  )
}

function TextArea({
  label,
  value,
  onChange,
  required,
  placeholder,
  rows = 4,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
  placeholder?: string
  rows?: number
}) {
  return (
    <label className="grid gap-2 text-sm text-slate-300">
      {label}
      <textarea
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={rows}
        className="resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors placeholder:text-slate-600 focus:border-cyan-300"
        placeholder={placeholder}
      />
    </label>
  )
}

function Select({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
  required?: boolean
}) {
  return (
    <label className="grid gap-2 text-sm text-slate-300">
      {label}
      <select
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition-colors focus:border-cyan-300"
      >
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function AiToolsAssessmentLeadForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const recommendations = useMemo(() => getRecommendations(form), [form])
  const weeklySavings = useMemo(
    () => getWeeklySavings(recommendations, form.taskHours),
    [form.taskHours, recommendations],
  )
  const progress = ((currentStep + 1) / steps.length) * 100

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function togglePriority(value: string) {
    setForm((current) => {
      const next = current.priorityAreas.includes(value)
        ? current.priorityAreas.filter((item) => item !== value)
        : [...current.priorityAreas, value]
      return { ...current, priorityAreas: next }
    })
  }

  function validateStep(step: number) {
    if (step === 0) {
      return Boolean(clean(form.name) && isEmail(form.email) && clean(form.businessName) && clean(form.companySize))
    }
    if (step === 1) {
      return Boolean(clean(form.workday) && clean(form.dreadedTasks) && clean(form.workPilesUp))
    }
    if (step === 2) {
      return Boolean(clean(form.topTask) && clean(form.taskHours) && clean(form.taskImpact))
    }
    if (step === 3) {
      return Boolean(clean(form.currentTools) && clean(form.failedAutomations) && clean(form.desiredOutcome))
    }
    return form.consent
  }

  function goNext() {
    setError('')
    if (!validateStep(currentStep)) {
      setError('Please complete the required fields on this step before continuing.')
      return
    }
    setCurrentStep((step) => Math.min(step + 1, steps.length - 1))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!validateStep(currentStep)) {
      setError('Please confirm consent before generating the report.')
      return
    }

    if (clean(form.botField)) {
      setSubmitted(true)
      return
    }

    setIsSubmitting(true)
    try {
      await fetch('/api/ai-tools-assessment/lead', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          businessName: form.businessName,
          companySize: form.companySize,
          painPoint: form.topTask || form.dreadedTasks,
          consent: form.consent,
          updates: form.updates,
        }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl shadow-slate-950/30">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
              Preliminary report ready
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white">
              {form.businessName} AI Tools Assessment
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              This local demo generated a report from the intake answers. It is preliminary and should
              be reviewed before any purchase or implementation decision.
            </p>
          </div>
          <CheckCircle2 className="mt-1 flex-shrink-0 text-emerald-300" size={28} />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">Estimated savings</p>
            <p className="mt-2 text-2xl font-bold text-white">{weeklySavings}-{weeklySavings + 2} hrs/week</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">Primary focus</p>
            <p className="mt-2 text-2xl font-bold text-white">{getPrimaryFocus(recommendations)}</p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
            <p className="text-xs uppercase tracking-widest text-slate-500">Tool picks</p>
            <p className="mt-2 text-2xl font-bold text-white">{recommendations.length}</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950 p-5">
          <h3 className="text-lg font-semibold text-white">Executive summary</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            The strongest opportunity appears to be <span className="font-semibold text-white">{form.topTask || form.dreadedTasks}</span>.
            Work piles up around <span className="font-semibold text-white">{form.workPilesUp || 'repeat administrative work'}</span>.
            The recommendations below focus on high-impact, low-effort quick wins first.
          </p>
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-lg font-semibold text-white">Recommended solutions</h3>
          <div className="grid gap-3">
            {recommendations.map((rec) => (
              <article key={rec.tool} className="rounded-xl border border-slate-700 bg-slate-950 p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="font-semibold text-white">{rec.tool}</h4>
                    <p className="mt-1 text-sm text-slate-400">{rec.painPoint}</p>
                  </div>
                  <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {rec.lever}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{rec.why}</p>
                <div className="mt-4 grid gap-2 text-xs text-slate-400 sm:grid-cols-3">
                  <span>Cost: {rec.cost}</span>
                  <span>Setup: {rec.setup}</span>
                  <span>Time saved: {rec.hours}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950 p-5">
          <h3 className="text-lg font-semibold text-white">Four-day quick-start plan</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            <li>Document the exact current workflow for the highest-friction task.</li>
            <li>Set up the first low-effort tool or template and test it on one real example.</li>
            <li>Create the first reusable response, reminder, summary, or template library.</li>
            <li>Review adoption with the team and decide what should become a larger project.</li>
          </ol>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => downloadHtmlReport(form, recommendations, weeklySavings)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
          >
            <ArrowDownToLine size={18} />
            Download Report
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
          >
            <Printer size={18} />
            Print or Save as PDF
          </button>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false)
              setCurrentStep(0)
            }}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-400 transition-colors hover:border-slate-500 hover:text-white"
          >
            Edit Answers
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-2xl shadow-slate-950/30">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
          Interactive assessment
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white">{steps[currentStep]}</h2>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full rounded-full bg-cyan-300 transition-all" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Step {currentStep + 1} of {steps.length}
        </p>
      </div>

      <div className="hidden">
        <label htmlFor="botField">Website</label>
        <input
          id="botField"
          tabIndex={-1}
          autoComplete="off"
          value={form.botField}
          onChange={(event) => update('botField', event.target.value)}
        />
      </div>

      {currentStep === 0 && (
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Your name" required value={form.name} onChange={(value) => update('name', value)} placeholder="Maria Lopez" />
            <Input label="Email address" required type="email" value={form.email} onChange={(value) => update('email', value)} placeholder="you@company.com" />
            <Input label="Business name" required value={form.businessName} onChange={(value) => update('businessName', value)} placeholder="Your company" />
            <Input label="Your role" value={form.role} onChange={(value) => update('role', value)} placeholder="Owner, operations lead, manager" />
            <Input label="Industry" value={form.industry} onChange={(value) => update('industry', value)} placeholder="Bookkeeping, legal, home services..." />
            <Select
              label="Team size"
              required
              value={form.companySize}
              onChange={(value) => update('companySize', value)}
              options={['1-5 people', '6-20 people', '21-50 people', '51+ people']}
            />
          </div>
          <Select
            label="Approximate annual revenue"
            value={form.revenueRange}
            onChange={(value) => update('revenueRange', value)}
            options={['Under $500K', '$500K-$1M', '$1M-$5M', '$5M-$10M', '$10M+']}
          />
          <TextArea
            label="What does your business do?"
            value={form.businessDescription}
            onChange={(value) => update('businessDescription', value)}
            placeholder="Who you serve, what you deliver, and how the team works today."
          />
        </div>
      )}

      {currentStep === 1 && (
        <div className="grid gap-4">
          <TextArea
            label="Walk through a typical business day or yesterday's work"
            required
            value={form.workday}
            onChange={(value) => update('workday', value)}
            placeholder="What happens from the first task of the day through the last handoff?"
          />
          <TextArea
            label="What tasks do you or your team dread doing?"
            required
            value={form.dreadedTasks}
            onChange={(value) => update('dreadedTasks', value)}
            placeholder="Examples: email replies, follow-up, updating spreadsheets, writing notes, chasing missing information."
          />
          <TextArea
            label="Where does work pile up or wait on someone?"
            required
            value={form.workPilesUp}
            onChange={(value) => update('workPilesUp', value)}
            placeholder="Name the bottleneck, queue, inbox, approval step, or system where work stalls."
          />
          <TextArea
            label="What questions do customers, clients, or employees ask repeatedly?"
            value={form.repeatedQuestions}
            onChange={(value) => update('repeatedQuestions', value)}
            placeholder="List common questions, requests, status checks, or explanations."
          />
        </div>
      )}

      {currentStep === 2 && (
        <div className="grid gap-5">
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Which areas feel most painful?</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {priorityOptions.map((option) => {
                const checked = form.priorityAreas.includes(option.value)
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => togglePriority(option.value)}
                    className={`rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                      checked
                        ? 'border-cyan-300 bg-cyan-300/10 text-white'
                        : 'border-slate-700 bg-slate-950 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                    }`}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>
          <Input label="If you could delete one process, what would it be?" required value={form.topTask} onChange={(value) => update('topTask', value)} placeholder="Manual invoice follow-up, client emails, weekly reporting..." />
          <div className="grid gap-4 md:grid-cols-3">
            <Select label="How often does it happen?" value={form.taskFrequency} onChange={(value) => update('taskFrequency', value)} options={['Daily', 'Several times a week', 'Weekly', 'Monthly', 'Only when things break']} />
            <Input label="Hours per week spent on it" required type="number" value={form.taskHours} onChange={(value) => update('taskHours', value)} placeholder="10" />
            <Input label="Who owns it today?" value={form.taskOwner} onChange={(value) => update('taskOwner', value)} placeholder="Owner, admin, operations..." />
          </div>
          <TextArea
            label="What happens if this process is late, missed, or done poorly?"
            required
            value={form.taskImpact}
            onChange={(value) => update('taskImpact', value)}
            placeholder="Lost revenue, errors, delayed clients, rework, owner evenings, team frustration..."
          />
        </div>
      )}

      {currentStep === 3 && (
        <div className="grid gap-4">
          <TextArea
            label="What tools do you use today?"
            required
            value={form.currentTools}
            onChange={(value) => update('currentTools', value)}
            placeholder="QuickBooks, Google Workspace, Microsoft 365, Zoom, CRM, project tools, spreadsheets..."
          />
          <TextArea
            label="What have you tried to automate or improve already, and why did it fail?"
            required
            value={form.failedAutomations}
            onChange={(value) => update('failedAutomations', value)}
            placeholder="ChatGPT did not sound like us, Zapier broke, no one used the CRM, data was messy..."
          />
          <TextArea
            label="What systems or information require extra care?"
            value={form.sensitiveSystems}
            onChange={(value) => update('sensitiveSystems', value)}
            placeholder="Client records, financial data, health data, legal documents, internal pricing, regulated data..."
          />
          <TextArea
            label="What would a useful outcome look like 30 days from now?"
            required
            value={form.desiredOutcome}
            onChange={(value) => update('desiredOutcome', value)}
            placeholder="Save owner time, reduce mistakes, answer clients faster, shorten collections, improve follow-up..."
          />
          <div className="grid gap-4 md:grid-cols-2">
            <Select label="Timeline" value={form.timeline} onChange={(value) => update('timeline', value)} options={['This week', 'This month', 'Next 60 days', 'Exploring only']} />
            <Select label="Implementation preference" value={form.implementationPreference} onChange={(value) => update('implementationPreference', value)} options={['We want to do it ourselves', 'We want coaching', 'We want someone to build it', 'Not sure yet']} />
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="grid gap-5">
          <div className="rounded-xl border border-slate-700 bg-slate-950 p-5">
            <div className="mb-4 flex items-center gap-3">
              <ClipboardList size={20} className="text-cyan-300" />
              <h3 className="font-semibold text-white">Assessment preview</h3>
            </div>
            <div className="grid gap-3 text-sm text-slate-300">
              <p><span className="text-slate-500">Company:</span> {form.businessName || 'Not provided'}</p>
              <p><span className="text-slate-500">Top process:</span> {form.topTask || 'Not provided'}</p>
              <p><span className="text-slate-500">Estimated recommendations:</span> {recommendations.length} tools</p>
              <p><span className="text-slate-500">Estimated hours reclaimed:</span> {weeklySavings}-{weeklySavings + 2} hours/week</p>
            </div>
          </div>
          <div className="rounded-xl border border-amber-300/30 bg-amber-300/10 p-5">
            <h3 className="font-semibold text-amber-100">Before generating the report</h3>
            <p className="mt-2 text-sm leading-relaxed text-amber-100/80">
              This is a local preliminary assessment. Tool pricing, feature availability, security,
              data access, and fit must be reviewed before purchase or implementation.
            </p>
          </div>
          <label className="flex gap-3 text-sm leading-relaxed text-slate-300">
            <input
              required
              type="checkbox"
              checked={form.consent}
              onChange={(event) => update('consent', event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-950 accent-cyan-300"
            />
            I understand this is a preliminary educational assessment. I should not enter passwords,
            credentials, regulated personal information, confidential client records, trade secrets,
            or payment data.
          </label>
          <label className="flex gap-3 text-sm leading-relaxed text-slate-400">
            <input
              type="checkbox"
              checked={form.updates}
              onChange={(event) => update('updates', event.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-950 accent-cyan-300"
            />
            The Human Workforce may contact me about the assessment and practical next steps.
          </label>
        </div>
      )}

      {error && (
        <p className="mt-5 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => {
            setError('')
            setCurrentStep((step) => Math.max(step - 1, 0))
          }}
          disabled={currentStep === 0}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-400 transition-colors hover:border-slate-500 hover:text-white disabled:pointer-events-none disabled:opacity-30"
        >
          <ArrowLeft size={16} />
          Back
        </button>
        {currentStep < steps.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
          >
            Continue
            <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <FileText size={18} />}
            {isSubmitting ? 'Generating' : 'Generate Report'}
          </button>
        )}
      </div>
    </form>
  )
}
