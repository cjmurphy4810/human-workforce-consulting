import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BarChart3,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Filter,
  LayoutDashboard,
  Search,
  Sparkles,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'PrestoVideo Jira Dashboard Demo | The Human Workforce',
  description:
    'A public, read-only recreation of the Jira dashboard used to document the human and Codex collaboration that created PrestoVideo.',
}

const deliveryRows = [
  ['PV1-1', 'PrestoVideo User Experiences', 'Epic', 'Done', 'Program', '89'],
  ['PV1-2', 'Shape the product idea, boundaries, and owner decisions', 'Story', 'Done', 'Discovery and approved design', '5'],
  ['PV1-7', 'Task 1: Scaffold the verified application foundation', 'Story', 'Done', 'Verified product foundation', '5'],
  ['PV1-10', 'Task 2: Create database schema, RLS, and typed clients', 'Story', 'Done', 'Verified product foundation', '8'],
  ['PV1-19', 'Task 5: Build the secure customer order experience', 'Story', 'Done', 'Storefront and secure intake', '8'],
]

const featureGroups = [
  ['Launch readiness and deployment', 25, '#0C66E4'],
  ['Admin operations and secure delivery', 18, '#22A06B'],
  ['Payments and reliable communications', 18, '#F5CD47'],
  ['Storefront and secure customer intake', 12, '#9F8FEF'],
  ['Verified product and domain foundation', 12, '#579DFF'],
  ['Security hardening and verification', 9, '#E2483D'],
  ['Discovery and approved design', 5, '#B65C02'],
  ['Program', 2, '#6B778C'],
] as const

const months = [
  { label: 'Aug 26', created: 59, resolved: 59 },
  { label: 'Aug 27', created: 0, resolved: 0 },
  { label: 'Aug 28', created: 0, resolved: 0 },
  { label: 'Aug 29', created: 35, resolved: 30 },
  { label: 'Aug 30', created: 7, resolved: 7 },
]

const summaryCards = [
  { value: '101', label: 'Project records', icon: CircleDot },
  { value: '73', label: 'Completed', icon: CheckCircle2 },
  { value: '28', label: 'Remaining work', icon: Filter },
  { value: '7', label: 'Human decisions', icon: Users },
]

function Gadget({
  title,
  children,
  className = '',
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`overflow-hidden rounded border border-[#dcdfe4] bg-white shadow-sm ${className}`}>
      <header className="flex min-h-12 items-center justify-between border-b border-[#dcdfe4] px-4 py-2">
        <h2 className="text-sm font-semibold text-[#172b4d]">{title}</h2>
        <span className="text-lg tracking-widest text-[#6b778c]" aria-hidden="true">•••</span>
      </header>
      <div className="p-4">{children}</div>
      <footer className="border-t border-[#ebecf0] px-4 py-2 text-[11px] text-[#6b778c]">
        Read-only demonstration data
      </footer>
    </section>
  )
}

function DonutChart() {
  const total = featureGroups.reduce((sum, [, value]) => sum + value, 0)
  let offset = 0

  return (
    <div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:items-center">
      <div className="relative mx-auto h-40 w-40">
        <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90" role="img" aria-label="Feature groups across 101 Jira records">
          <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#ebecf0" strokeWidth="7" />
          {featureGroups.map(([label, value, color]) => {
            const length = (value / total) * 100
            const currentOffset = offset
            offset += length
            return (
              <circle
                key={label}
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke={color}
                strokeWidth="7"
                strokeDasharray={`${length} ${100 - length}`}
                strokeDashoffset={-currentOffset}
              />
            )
          })}
        </svg>
        <div className="absolute inset-0 grid place-content-center text-center">
          <strong className="text-3xl text-[#172b4d]">101</strong>
          <span className="text-[10px] uppercase tracking-wider text-[#6b778c]">records</span>
        </div>
      </div>
      <ul className="grid gap-2 text-xs text-[#42526e]">
        {featureGroups.map(([label, value, color]) => (
          <li key={label} className="grid grid-cols-[10px_1fr_auto] items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: color }} />
            <span>{label}</span>
            <strong>{value}</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function PrestoVideoJiraDashboardDemo() {
  return (
    <main className="min-h-screen bg-[#f4f5f7] text-[#172b4d]">
      <div className="border-b border-[#dcdfe4] bg-white px-4 py-2.5 sm:px-6">
        <div className="mx-auto flex max-w-[1500px] items-center gap-4">
          <div className="grid h-8 w-8 place-content-center rounded bg-[#0c66e4] text-sm font-bold text-white">J</div>
          <span className="font-semibold">Jira</span>
          <div className="ml-auto hidden w-full max-w-md items-center gap-2 rounded border border-[#b3b9c4] px-3 py-1.5 text-sm text-[#6b778c] sm:flex">
            <Search size={15} /> Search this demonstration
          </div>
          <Link href="/demos" className="rounded bg-[#0c66e4] px-3 py-2 text-xs font-semibold text-white hover:bg-[#0055cc]">
            Back to demos
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1500px] md:grid-cols-[220px_1fr]">
        <aside className="hidden min-h-screen border-r border-[#dcdfe4] bg-white p-4 md:block">
          <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#6b778c]">PrestoVideo project</p>
          <nav className="space-y-1 text-sm">
            <div className="flex items-center gap-3 rounded bg-[#e9f2ff] px-3 py-2 font-semibold text-[#0c66e4]"><LayoutDashboard size={17} /> Dashboard</div>
            <div className="flex items-center gap-3 rounded px-3 py-2 text-[#42526e]"><Filter size={17} /> Filters</div>
            <div className="flex items-center gap-3 rounded px-3 py-2 text-[#42526e]"><Users size={17} /> Human decisions</div>
            <div className="flex items-center gap-3 rounded px-3 py-2 text-[#42526e]"><BarChart3 size={17} /> Delivery record</div>
          </nav>
          <div className="mt-8 rounded border border-[#9fadbc] bg-[#f7f8f9] p-3 text-xs leading-5 text-[#42526e]">
            <strong className="block text-[#172b4d]">Demonstration snapshot</strong>
            This public page recreates the approved Jira dashboard. It is not connected to Atlassian and cannot modify project data.
          </div>
        </aside>

        <div className="min-w-0 p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-medium text-[#6b778c]">
                Project record <ChevronRight size={13} /> Dashboard 10101
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-[#172b4d] sm:text-3xl">PrestoVideo User Experiences</h1>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-[#42526e]">
                How human direction, approvals, and Codex-supported implementation became the working PrestoVideo service.
              </p>
            </div>
            <span className="rounded-full border border-[#85b8ff] bg-[#e9f2ff] px-3 py-1.5 text-xs font-semibold text-[#0055cc]">Public read-only demo</span>
          </div>

          <div className="mb-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map(({ value, label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-3 rounded border border-[#dcdfe4] bg-white p-4 shadow-sm">
                <div className="grid h-10 w-10 place-content-center rounded bg-[#e9f2ff] text-[#0c66e4]"><Icon size={19} /></div>
                <div><strong className="block text-2xl">{value}</strong><span className="text-xs text-[#6b778c]">{label}</span></div>
              </div>
            ))}
          </div>

          <div className="grid items-start gap-5 xl:grid-cols-[1.35fr_.9fr]">
            <div className="grid gap-5">
              <Gadget title="Filter Results: PV1 — Stories and Features">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] border-collapse text-left text-xs">
                    <thead className="border-b-2 border-[#dcdfe4] text-[#42526e]">
                      <tr>{['Key', 'Summary', 'Type', 'Status', 'Feature Group', 'Points'].map((item) => <th key={item} className="px-2 py-2 font-semibold">{item}</th>)}</tr>
                    </thead>
                    <tbody>
                      {deliveryRows.map((row) => (
                        <tr key={row[0]} className="border-b border-[#ebecf0] last:border-0">
                          <td className="px-2 py-2.5 font-semibold text-[#0c66e4]">{row[0]}</td>
                          <td className="max-w-sm px-2 py-2.5">{row[1]}</td>
                          <td className="px-2 py-2.5">{row[2]}</td>
                          <td className="px-2 py-2.5"><span className="rounded bg-[#d7f5e5] px-2 py-1 font-semibold text-[#164b35]">{row[3]}</span></td>
                          <td className="px-2 py-2.5">{row[4]}</td>
                          <td className="px-2 py-2.5">{row[5]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-3 text-xs text-[#6b778c]">Showing 5 representative records from 101 total project records.</p>
              </Gadget>

              <Gadget title="Created vs. Resolved Chart: PV1 — Stories and Features">
                <div className="mb-3 flex gap-4 text-xs text-[#42526e]"><span><i className="mr-1.5 inline-block h-2.5 w-2.5 bg-[#0c66e4]" />Created</span><span><i className="mr-1.5 inline-block h-2.5 w-2.5 bg-[#22a06b]" />Resolved</span></div>
                <div className="flex h-48 items-end justify-around gap-2 border-b border-l border-[#b3b9c4] px-3 pt-3">
                  {months.map((month) => (
                    <div key={month.label} className="flex h-full flex-1 flex-col justify-end text-center">
                      <div className="mx-auto flex h-[150px] items-end gap-1">
                        <div className="w-4 bg-[#0c66e4]" style={{ height: `${Math.max(2, month.created * 2.3)}px` }} title={`${month.created} created`} />
                        <div className="w-4 bg-[#22a06b]" style={{ height: `${Math.max(2, month.resolved * 2.3)}px` }} title={`${month.resolved} resolved`} />
                      </div>
                      <span className="mt-2 whitespace-nowrap text-[10px] text-[#6b778c]">{month.label}</span>
                    </div>
                  ))}
                </div>
              </Gadget>
            </div>

            <div className="grid gap-5">
              <Gadget title="AI Cost Savings">
                <div className="rounded bg-[#172b4d] p-5 text-white">
                  <div className="mb-5 flex items-center gap-2 text-[#85b8ff]"><Sparkles size={18} /><span className="text-xs font-semibold uppercase tracking-widest">Human + Codex delivery</span></div>
                  <div className="grid grid-cols-2 gap-4 border-b border-white/20 pb-5">
                    <div><span className="block text-xs text-white/60">Actual estimate</span><strong className="text-3xl">$545</strong></div>
                    <div><span className="block text-xs text-white/60">All-human estimate</span><strong className="text-3xl">$5,200</strong></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-5">
                    <div><span className="block text-xs text-white/60">Estimated savings</span><strong className="text-2xl text-[#7ee2b8]">$4,655</strong></div>
                    <div><span className="block text-xs text-white/60">Cost advantage</span><strong className="text-2xl text-[#7ee2b8]">9.54×</strong></div>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-5 text-[#6b778c]">52 hours total: 49 Codex-supported hours at $5/hour and 3 human decision hours at $100/hour. Illustrative estimate, not an audited invoice.</p>
              </Gadget>

              <Gadget title="Pie Chart: PV1 — Stories and Features">
                <DonutChart />
              </Gadget>

              <Gadget title="Workload: Human Decisions and Approvals">
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between"><span>Zachary Djimas — owner decisions</span><strong>7</strong></div>
                  <div className="h-3 overflow-hidden rounded-full bg-[#ebecf0]"><div className="h-full w-[7%] min-w-8 rounded-full bg-[#9f8fef]" /></div>
                  <div className="flex items-center justify-between"><span>Codex-supported delivery records</span><strong>94</strong></div>
                  <div className="h-3 overflow-hidden rounded-full bg-[#ebecf0]"><div className="h-full w-[93%] rounded-full bg-[#0c66e4]" /></div>
                </div>
              </Gadget>
            </div>
          </div>

          <div className="mt-7 rounded border border-[#9fadbc] bg-white p-5 text-sm leading-6 text-[#42526e]">
            <strong className="block text-[#172b4d]">About this demonstration</strong>
            The original dashboard was assembled in Jira from project records exported from the human–Codex build dialogue. This public recreation preserves the approved presentation without exposing Jira accounts, permissions, or editable project data.
          </div>
        </div>
      </div>
    </main>
  )
}
