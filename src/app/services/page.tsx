import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import servicesData from '@/content/services.json'
import type { Service } from '@/types'

export const metadata = {
  title: 'Services | The Human Workforce Consulting',
  description:
    'Enterprise workflow automation, workforce risk assessment, and agentic workflow design for organizations that need AI to deliver operational outcomes.',
}

const services = servicesData as Service[]

const DELIVERABLE_MAP: Record<string, string[]> = {
  'enterprise-workflow-automation': [
    'Workflow Architecture',
    'AI Integration Design',
    'Governance Controls',
    'Human Approval Points',
    'Production Deployment Plan',
  ],
  'workforce-risk-assessment': [
    'Risk Assessment Report',
    'Automation Opportunity Map',
    'Governance Recommendations',
    'Executive Summary',
    'Prioritized Roadmap',
  ],
  'agentic-workflow-design': [
    'Workflow Blueprint',
    'Agent Architecture',
    'Governance Framework',
    'Working Prototype',
    'Deployment Recommendations',
  ],
}

const SCHEDULE_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Service%20Inquiry'

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <SectionHeader
          eyebrow="Enterprise Consulting Services"
          headline="Operational Certainty Through Workflow Automation, AI Integration, and Enterprise Governance"
          sub="Helping organizations implement practical automation that improves productivity while maintaining compliance, resilience, and human oversight."
        />
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const deliverables = DELIVERABLE_MAP[service.slug] ?? []
            return (
              <div
                key={service.id}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-6 flex flex-col"
              >
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.executive_problem_solved}
                </p>

                {deliverables.length > 0 && (
                  <div className="mb-6 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                      Deliverables
                    </p>
                    <ul className="space-y-2">
                      {deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  <a
                    href={SCHEDULE_EMAIL}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-600 text-slate-300 text-sm font-semibold hover:border-slate-400 hover:text-white transition-colors"
                  >
                    Discuss This Service
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Why Organizations Work With Us */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Why Organizations Work With Us"
            headline="We Don&apos;t Sell AI. We Solve Operational Problems."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 max-w-3xl">
            {[
              'Reduce manual operational work',
              'Increase process consistency',
              'Improve governance and auditability',
              'Accelerate workflow execution',
              'Reduce operational risk',
              'Enable employees with AI instead of replacing them',
              'Build automation that survives audit and scales responsibly',
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-slate-800/50 border border-slate-700/50 rounded-xl px-5 py-4"
              >
                <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                <span className="text-slate-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Let&apos;s Solve a Real Business Problem
        </h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          Whether you&apos;re exploring AI, modernizing workflows, or strengthening governance,
          we help organizations move from ideas to production with measurable results.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@thehumanworkforce.com?subject=Schedule%20Executive%20Consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
          >
            Start with a $175 Consultation
            <ArrowRight size={18} />
          </a>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:border-slate-400 hover:text-white transition-colors"
          >
            View Pricing
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
