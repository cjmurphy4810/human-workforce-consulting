import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Start the Assessment | The Human Workforce Consulting' }

export default function StartPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Operational Certainty Assessment
      </p>
      <h1 className="text-4xl font-bold text-white mb-6">
        Let&apos;s Find Your Stuck Point
      </h1>
      <p className="text-slate-400 mb-4 leading-relaxed">
        12 questions across AI governance, risk, workforce readiness, and implementation
        maturity. You&apos;ll receive a scored diagnosis and a service recommendation tailored
        to where your organization stands today.
      </p>
      <p className="text-slate-500 text-sm mb-10">
        No account required. Results are immediate.
      </p>
      <Link
        href="/assessment"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
      >
        Begin the Assessment
        <ArrowRight size={18} />
      </Link>
      <p className="text-slate-600 text-xs mt-8">
        Prefer to speak directly?{' '}
        <a href="mailto:info@thehumanworkforce.com" className="hover:text-slate-400 transition-colors">
          info@thehumanworkforce.com
        </a>
      </p>
    </main>
  )
}
