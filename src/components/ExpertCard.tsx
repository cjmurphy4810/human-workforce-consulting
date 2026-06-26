import Link from 'next/link'
import type { Expert } from '@/types'

interface ExpertCardProps {
  expert: Expert
}

export default function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <Link
      href={`/experts/${expert.id}`}
      className="flex flex-col items-center text-center p-6 bg-slate-800 border border-slate-700 rounded-xl hover:border-slate-600 hover:shadow-lg transition-all duration-200"
    >
      <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center mb-4 text-2xl font-bold text-slate-400">
        {expert.name.charAt(0)}
      </div>
      <h3 className="text-white font-semibold mb-1">{expert.name}</h3>
      <p className="text-slate-400 text-sm mb-3">{expert.title}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {expert.credentials.slice(0, 3).map((cred) => (
          <span
            key={cred}
            className="text-xs px-2 py-1 rounded bg-slate-700 text-slate-300"
          >
            {cred}
          </span>
        ))}
      </div>
    </Link>
  )
}
