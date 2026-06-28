import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

export const metadata = {
  title: 'Pricing | The Human Workforce Consulting',
  description:
    'Transparent pricing for executive advisory, expert consulting, project engagements, and enterprise retainers.',
}

const SCHEDULE_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Schedule%20Executive%20Consultation'
const PROJECT_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Fixed-Price%20Project%20Proposal%20Request'
const RETAINER_EMAIL =
  'mailto:info@thehumanworkforce.com?subject=Enterprise%20Retainer%20Inquiry'

export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        eyebrow="Pricing"
        headline="Transparent. Outcome-Based."
        sub="We believe in clear scope, fixed deliverables, and pricing that reflects the value of moving your organization forward."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">

        {/* Executive Strategy Session */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
              Advisory Consultation
            </p>
            <h2 className="text-2xl font-bold text-white mb-1">Executive Strategy Session</h2>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-4xl font-bold text-white">$175</span>
              <span className="text-slate-400 text-sm">/ 60 minutes</span>
            </div>
          </div>

          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            A focused, structured session with a senior advisor. Designed for executives who need
            a trusted second opinion before making a technology or operational decision.
          </p>

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Perfect for
            </p>
            <ul className="space-y-2">
              {[
                'AI strategy and roadmap review',
                'Workflow automation planning',
                'Governance and compliance questions',
                'Technology architecture decisions',
                'Executive leadership coaching',
                'Operational risk discussions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Includes
            </p>
            <ul className="space-y-2">
              {[
                'Video consultation (recorded on request)',
                'Follow-up written notes',
                'Recommended next steps',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <a
              href={SCHEDULE_EMAIL}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Schedule Consultation
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Expert Advisory */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
              Expert Advisory
            </p>
            <h2 className="text-2xl font-bold text-white mb-1">Hourly Consulting</h2>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-4xl font-bold text-white">$375</span>
              <span className="text-slate-400 text-sm">/ hour</span>
            </div>
          </div>

          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Ongoing expert access for organizations that need specialized advisory capacity
            without a long-term retainer. Billed in one-hour increments with no minimums.
          </p>

          <div className="mb-8 flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Best for
            </p>
            <ul className="space-y-2">
              {[
                'AI Governance framework development',
                'Operational risk and resilience reviews',
                'Business continuity planning',
                'Workflow design and optimization',
                'Architecture reviews and assessments',
                'Technical leadership support',
                'Executive advisory and decision support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <a
              href={SCHEDULE_EMAIL}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold text-sm hover:border-slate-400 hover:text-white transition-colors"
            >
              Schedule a Session
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Project Engagements */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
              Project Engagements
            </p>
            <h2 className="text-2xl font-bold text-white mb-1">Fixed-Price Proposals</h2>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-2xl font-bold text-white">Starting at a fixed price</span>
            </div>
          </div>

          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Every project engagement is scoped and priced before work begins. No open-ended
            billing. You receive a clear proposal with discovery, scope, deliverables,
            timeline, and acceptance criteria.
          </p>

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Example projects
            </p>
            <ul className="space-y-2">
              {[
                'AI Readiness Assessment',
                'Enterprise Workflow Automation',
                'AI Governance Framework',
                'Agentic Workflow Design',
                'Operational Resilience Review',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Every proposal includes
            </p>
            <ul className="space-y-2">
              {[
                'Discovery and scoping session',
                'Defined deliverables and timeline',
                'Acceptance criteria',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <a
              href={PROJECT_EMAIL}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Request a Proposal
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Enterprise Retainers */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
              Enterprise Retainers
            </p>
            <h2 className="text-2xl font-bold text-white mb-1">Ongoing Advisory</h2>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-2xl font-bold text-white">Custom monthly engagement</span>
            </div>
          </div>

          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Designed for organizations that need a trusted advisor embedded in their operations
            on an ongoing basis. Structured for strategic continuity, not ad-hoc availability.
          </p>

          <div className="mb-8 flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Includes
            </p>
            <ul className="space-y-2">
              {[
                'Monthly executive office hours',
                'Architecture and design reviews',
                'AI governance advisory',
                'Roadmap and prioritization sessions',
                'Workflow optimization guidance',
                'Quarterly strategy sessions',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <a
              href={RETAINER_EMAIL}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold text-sm hover:border-slate-400 hover:text-white transition-colors"
            >
              Discuss a Retainer
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="mt-20 border-t border-slate-800 pt-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Let&apos;s Solve a Real Business Problem
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you&apos;re exploring AI, modernizing workflows, or strengthening governance,
          we help organizations move from ideas to production with measurable results.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SCHEDULE_EMAIL}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
          >
            Start with a $175 Consultation
            <ArrowRight size={18} />
          </a>
          <a
            href={PROJECT_EMAIL}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:border-slate-400 hover:text-white transition-colors"
          >
            Request a Project Proposal
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </main>
  )
}
