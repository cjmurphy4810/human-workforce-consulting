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

const pricingTiers = [
  {
    name: 'Core',
    tagline: 'One defined process. One working AI system.',
    detail: 'Discovery → Build → Deploy in 6 weeks.',
  },
  {
    name: 'Advanced',
    tagline: 'Multi-process implementation with governance layer.',
    detail: 'Ongoing agentic workflow development + monthly review.',
  },
  {
    name: 'Advanced Plus',
    tagline: 'Embedded AI implementation partner.',
    detail: 'Dedicated capacity, quarterly strategy, full-stack delivery.',
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
          Executive AI Implementation
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
          From AI Opportunity<br />to Operational Certainty
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          For CAIOs, CROs, and COOs who need AI to deliver measurable outcomes —
          not more pilots.
        </p>
        <Link
          href="/start"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold text-base hover:bg-slate-100 transition-colors"
        >
          Start the Assessment
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Demo Grid */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="Live Tools"
          headline="Proof, Not Promises"
          sub="Every engagement is backed by working software. These are the tools we've built and deployed."
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
      </section>

      {/* Services */}
      <section className="border-y border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Services"
            headline="What We Build"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{service.executive_problem_solved}</p>
                <p className="text-emerald-400 text-xs font-semibold">{service.roi_metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="The Team"
          headline="Who You're Working With"
          sub="Practitioners, not theorists. Every engagement involves people who have shipped the work."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="border-y border-slate-800 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            eyebrow="Pricing"
            headline="Valuemaxxing Subscriptions"
            sub="Outcome-based tiers. You pay for what ships, not for hours logged."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-slate-800 border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-white font-bold text-xl mb-2">{tier.name}</h3>
                <p className="text-slate-300 text-sm mb-3">{tier.tagline}</p>
                <p className="text-slate-500 text-xs">{tier.detail}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="text-slate-400 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
            >
              See full pricing <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to move from strategy to system?
        </h2>
        <p className="text-slate-400 mb-8">
          Tell us your role, your existing stack, and what&apos;s stuck. We&apos;ll tell you what&apos;s possible in 6 weeks.
        </p>
        <Link
          href="/start"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
        >
          Start the Assessment
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  )
}
