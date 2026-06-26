'use client'

import { useState } from 'react'
import DemoCard from '@/components/DemoCard'
import type { Demo } from '@/types'

interface DemoFilterProps {
  demos: Demo[]
  categories: string[]
}

export default function DemoFilter({ demos, categories }: DemoFilterProps) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? demos
    : demos.filter((d) => d.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-10">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === cat
                ? 'bg-white text-slate-950'
                : 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((demo) => (
          <DemoCard key={demo.id} demo={demo} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-slate-500 text-center py-12">No demos in this category yet.</p>
      )}
    </div>
  )
}
