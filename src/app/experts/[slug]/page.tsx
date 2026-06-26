import expertsData from '@/content/experts.json'
import type { Expert } from '@/types'

const experts = expertsData as Expert[]

export function generateStaticParams() {
  return experts.map((e) => ({ slug: e.id }))
}

export default function ExpertPage({ params }: { params: { slug: string } }) {
  const expert = experts.find((e) => e.id === params.slug)

  if (!expert) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-slate-400">Expert not found.</p>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center text-3xl font-bold text-slate-400 mb-6">
        {expert.name.charAt(0)}
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
        {expert.title}
      </p>
      <h1 className="text-4xl font-bold text-white mb-6">{expert.name}</h1>
      <p className="text-slate-400 leading-relaxed mb-6">{expert.bio}</p>
      <div className="flex flex-wrap gap-2">
        {expert.credentials.map((cred) => (
          <span key={cred} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {cred}
          </span>
        ))}
      </div>
      <p className="text-slate-600 text-sm mt-12">Full profile coming in Phase 2.</p>
    </main>
  )
}
