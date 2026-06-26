import SectionHeader from '@/components/SectionHeader'
import TrustBar from '@/components/TrustBar'

export default function Home() {
  return (
    <main className="min-h-screen p-12 space-y-12">
      <SectionHeader
        eyebrow="Test"
        headline="Components render correctly"
        sub="If you see this, TrustBar and SectionHeader work."
      />
      <TrustBar />
    </main>
  )
}
