import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import servicesData from '@/content/services.json'
import type { Service } from '@/types'

const services = servicesData as Service[]

export const metadata = {
  title: 'Services | The Human Workforce Consulting',
}

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader eyebrow="Services" headline="What We Build" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors"
          >
            <h3 className="text-white font-semibold mb-2">{service.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{service.executive_problem_solved}</p>
            <p className="text-emerald-400 text-xs font-semibold">{service.roi_metric}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
