import DemoCard from '@/components/DemoCard'
import ExpertCard from '@/components/ExpertCard'
import demosData from '@/content/demos.json'
import expertsData from '@/content/experts.json'
import type { Demo, Expert } from '@/types'

const demos = demosData as Demo[]
const experts = expertsData as Expert[]

export default function Home() {
  return (
    <main className="min-h-screen p-12 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <DemoCard demo={demos[0]} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <ExpertCard expert={experts[0]} />
      </div>
    </main>
  )
}
