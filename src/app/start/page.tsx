import { ArrowRight } from 'lucide-react'

export const metadata = { title: 'Start the Assessment | The Human Workforce Consulting' }

const ASSESSMENT_URL =
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
      <p className="text-slate-400 mb-4 leading-relaxed">
        8 questions. 10 minutes. A scored diagnosis that maps your current AI situation
        to the exact service tier that moves you from opportunity to outcome.
      </p>
      <p className="text-slate-500 text-sm mb-10">
        No pitch. No form to fill. An actual conversation about your specific problem.
      </p>
      <a
        href={ASSESSMENT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
      >
        Begin the Assessment
        <ArrowRight size={18} />
      </a>
      <p className="text-slate-600 text-xs mt-8">
        Prefer email?{' '}
        <a href="mailto:info@thehumanworkforce.com" className="hover:text-slate-400 transition-colors">
          info@thehumanworkforce.com
        </a>
      </p>
    </main>
  )
}
