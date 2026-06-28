import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import TrustBar from '@/components/TrustBar'
import DemoCard from '@/components/DemoCard'
import ExpertCard from '@/components/ExpertCard'
import demosData from '@/content/demos.json'
import expertsData from '@/content/experts.json'
import servicesData from '@/content/services.json'
import type { Demo, Expert, Service } from '@/types'

const demos = (demosData as Demo[]).filter((d) => d.status === 'live').slice(0, 3)
const experts = expertsData as Expert[]
const services = servicesData as Service[]

const WHY_ITEMS = [
  'Reduce manual operational work',
  'Increase process consistency',
  'Improve governance and auditability',
  'Accelerate workflow execution',
  'Reduce operational risk',
  'Enable employees with AI instead of replacing them',
  'Build automation that survives audit and scales responsibly',
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
          Enterprise Advisory
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          From AI Opportunity<br />to Operational Certainty
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Workflow automation, AI integration, and enterprise governance for operational
          leaders who need outcomes — not pilots.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@thehumanworkforce.com?subject=Schedule%20Executive%20Consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold text-base hover:bg-slate-100 transition-colors"
          >
            Schedule a Consultation
            <ArrowRight size={18} />
          </a>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-slate-600 text-slate-300 font-semibold text-base hover:border-slate-400 hover:text-white transition-colors"
          >
            Take the Assessment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Services */}
      <section className="border-y border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Enterprise Consulting Services"
            headline="Operational Certainty Through Automation and Governance"
            sub="Practical implementation that improves productivity while maintaining compliance, resilience, and human oversight."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-500 transition-colors block"
              >
                <h3 className="text-white font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.executive_problem_solved}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
            >
              View all services and deliverables <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Organizations Work With Us */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="Why Organizations Work With Us"
          headline="We Don&apos;t Sell AI. We Solve Operational Problems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-12 max-w-3xl">
          {WHY_ITEMS.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 bg-slate-800/50 border border-slate-700/50 rounded-xl px-5 py-4"
            >
              <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
              <span className="text-slate-300 text-sm">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Grid */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Live Tools"
            headline="Proof, Not Promises"
            sub="Every engagement is backed by working software. These are operational systems we have built and deployed."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {demos.map((demo) => (
              <DemoCard key={demo.id} demo={demo} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/demos"
              className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
            >
              See all demos <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="The Team"
            headline="Senior Advisors. Practitioners."
            sub="Operational leaders and enterprise architects — not theorists. Every engagement is led by people who have shipped production systems under real organizational constraints."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl">
            {experts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-8 max-w-2xl leading-relaxed">
            Supported by a network of experienced technology, security, operational risk, and
            AI specialists engaged as required for client delivery.
          </p>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="border-y border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Pricing"
            headline="Transparent. Outcome-Based."
            sub="From executive consultation to enterprise retainer — clear scope, defined deliverables, no open-ended billing."
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: 'Executive Strategy Session', price: '$175', detail: '60-minute consultation' },
              { label: 'Expert Advisory', price: '$375', detail: 'Per hour, no minimums' },
              { label: 'Project Engagements', price: 'Fixed Price', detail: 'Defined scope and deliverables' },
              { label: 'Enterprise Retainers', price: 'Custom', detail: 'Monthly advisory access' },
            ].map((tier) => (
              <div
                key={tier.label}
                className="bg-slate-800 border border-slate-700 rounded-xl p-5 text-center"
              >
                <p className="text-slate-400 text-xs mb-2 leading-snug">{tier.label}</p>
                <p className="text-white font-bold text-xl mb-1">{tier.price}</p>
                <p className="text-slate-500 text-xs">{tier.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
            >
              View full pricing details <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
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
