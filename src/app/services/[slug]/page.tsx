import servicesData from '@/content/services.json'
import type { Service } from '@/types'

const services = servicesData as Service[]

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-slate-400">Service not found.</p>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">Service</p>
      <h1 className="text-4xl font-bold text-white mb-6">{service.title}</h1>
      <p className="text-slate-400 mb-8">{service.executive_problem_solved}</p>
      <p className="text-emerald-400 font-semibold">{service.roi_metric}</p>
      <p className="text-slate-600 text-sm mt-12">Full detail page coming in Phase 2.</p>
    </main>
  )
}
