import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Start the Assessment | The Human Workforce Consulting' }

const NOTEBOOKLM_URL =
  'https://notebooklm.google.com/notebook/99dbc59d-f9ee-437c-943f-659fba82fde7/artifact/e6ff2cec-c358-45c9-82df-2f457adf327b?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_'

export default function StartPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Operational Certainty Assessment
      </p>
      <h1 className="text-4xl font-bold text-white mb-6">
        Let&apos;s Find Your Stuck Point
      </h1>
      <p className="text-slate-400 mb-10 leading-relaxed">
        A scored diagnosis that maps your current AI situation to the exact service tier
        that moves you from opportunity to outcome. Choose the format that works best for you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {/* Interactive */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-left hover:border-slate-500 transition-colors group">
          <p className="text-xs font-semibold uppercase tracking-widest text-white mb-2">
            Interactive
          </p>
          <h2 className="text-lg font-bold text-white mb-2">Scored Assessment</h2>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            12 questions · 8 minutes · Instant results with category scores, strengths,
            risks, and a service recommendation.
          </p>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-colors"
          >
            Start Here
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* AI-Guided */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-left hover:border-slate-500 transition-colors">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            AI-Guided
          </p>
          <h2 className="text-lg font-bold text-white mb-2">NotebookLM Quiz</h2>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            A conversational quiz powered by AI that explores your knowledge of AI governance
            and implementation concepts.
          </p>
          <a
            href={NOTEBOOKLM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-600 text-slate-300 font-semibold text-sm hover:border-slate-400 hover:text-white transition-colors"
          >
            Open Quiz
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <p className="text-slate-600 text-xs">
        Questions?{' '}
        <a href="mailto:info@thehumanworkforce.com" className="hover:text-slate-400 transition-colors">
          info@thehumanworkforce.com
        </a>
      </p>
    </main>
  )
}
