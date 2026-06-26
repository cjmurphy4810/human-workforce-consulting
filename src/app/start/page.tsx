export const metadata = { title: 'Start | The Human Workforce Consulting' }

export default function StartPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Assessment</p>
      <h1 className="text-4xl font-bold text-white mb-6">Start the Assessment</h1>
      <p className="text-slate-400 mb-4">
        The intake form is being built. In the meantime, reach out directly.
      </p>
      <a
        href="mailto:cj@thehumanworkforce.com"
        className="inline-block px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
      >
        Email Us
      </a>
    </main>
  )
}
