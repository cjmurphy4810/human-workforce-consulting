import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Start the Assessment | The Human Workforce Consulting' }

export default function StartPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Free AI Tools Assessment
      </p>
      <h1 className="text-4xl font-bold text-white mb-6">
        Discover Where AI Can Give Your Business Time Back
      </h1>
      <p className="text-slate-400 mb-4 leading-relaxed">
        Complete a guided business assessment and receive a practical report identifying
        repetitive work, potential quick wins, recommended tools, and a four-day starting plan.
      </p>
      <p className="text-slate-500 text-sm mb-10">
        Designed for small businesses. No technical background or payment required.
      </p>
      <Link
        href="/ai-tools-assessment"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
      >
        Get the Free Report
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
