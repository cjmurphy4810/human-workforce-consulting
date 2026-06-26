import SectionHeader from '@/components/SectionHeader'
import DemoFilter from '@/components/DemoFilter'
import demosData from '@/content/demos.json'
import type { Demo } from '@/types'

const demos = demosData as Demo[]
const categories = Array.from(new Set(demos.map((d) => d.category))).sort()

export const metadata = {
  title: 'Demos | The Human Workforce Consulting',
  description: 'Live AI tools built and deployed by The Human Workforce.',
}

export default function DemosPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        eyebrow="Live Tools"
        headline="The Demo Catalog"
        sub="Working software across risk, workforce, and finance. Every tool listed here is deployed and accessible."
      />
      <div className="mt-12">
        <DemoFilter demos={demos} categories={categories} />
      </div>
    </main>
  )
}
