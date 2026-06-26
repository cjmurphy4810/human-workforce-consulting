import caseStudiesData from '@/content/case_studies.json'
import type { CaseStudy } from '@/types'

const caseStudies = caseStudiesData as CaseStudy[]

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export default function CaseStoryPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((c) => c.slug === params.slug)

  if (!study) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-slate-400">Case story not found.</p>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
        {study.industry}
      </p>
      <h1 className="text-4xl font-bold text-white mb-6">{study.client_name}</h1>
      <p className="text-emerald-400 font-semibold text-lg mb-4">{study.metric_delivered}</p>
      <p className="text-slate-400">Duration: {study.duration_weeks} weeks</p>
      <p className="text-slate-600 text-sm mt-12">Full case story coming in Phase 2.</p>
    </main>
  )
}
