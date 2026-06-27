import Assessment from '@/components/Assessment'

export const metadata = {
  title: 'Operational Certainty Assessment | The Human Workforce Consulting',
  description:
    '12 questions across AI governance, risk, workforce readiness, and implementation maturity. Receive a scored diagnosis and service recommendation.',
}

export default function AssessmentPage() {
  return (
    <main>
      <Assessment />
    </main>
  )
}
