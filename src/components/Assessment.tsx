'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle, TrendingUp, Zap } from 'lucide-react'
import {
  QUESTIONS,
  TIER_CONFIG,
  CATEGORY_LABELS,
  calculateResults,
  type CategoryKey,
} from '@/data/assessment-questions'

type Phase = 'intro' | 'quiz' | 'results'

// ── Score ring ────────────────────────────────────────────────────────────────
function ScoreRing({ score }: { score: number }) {
  const r = 54
  const circ = 2 * Math.PI * r
  const fill = circ - (score / 100) * circ
  const color = score < 40 ? '#f59e0b' : score < 70 ? '#60a5fa' : '#34d399'
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="140" height="140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} fill="none" stroke="#1e293b" strokeWidth="10" />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={circ}
          strokeDashoffset={fill}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s ease' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-4xl font-bold text-white">{score}</span>
        <span className="text-xs text-slate-400 uppercase tracking-widest">/ 100</span>
      </div>
    </div>
  )
}

// ── Category bar ──────────────────────────────────────────────────────────────
function CategoryBar({ label, score }: { label: string; score: number }) {
  const color =
    score >= 70
      ? 'bg-emerald-400'
      : score >= 40
        ? 'bg-blue-400'
        : 'bg-amber-400'
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-slate-300">{label}</span>
        <span className="text-sm font-semibold text-white">{score}</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}

// ── Intro screen ──────────────────────────────────────────────────────────────
function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
        Operational Certainty Assessment
      </p>
      <h1 className="text-4xl font-bold text-white mb-6">
        Find Your Stuck Point
      </h1>
      <p className="text-slate-400 mb-8 leading-relaxed text-lg">
        12 questions across AI governance, risk, workforce readiness, and
        implementation maturity. You&apos;ll receive a scored diagnosis that maps
        your organization&apos;s current position to the exact service tier that
        moves you from opportunity to outcome.
      </p>

      <div className="grid grid-cols-3 gap-4 mb-10 text-center">
        {[
          { num: '12', label: 'Questions' },
          { num: '8 min', label: 'Estimated time' },
          { num: '7', label: 'Dimensions scored' },
        ].map(({ num, label }) => (
          <div key={label} className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <div className="text-2xl font-bold text-white mb-1">{num}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
      >
        Begin Assessment
        <ArrowRight size={18} />
      </button>
      <p className="text-slate-600 text-xs mt-6">
        No account required. Results are displayed immediately.
      </p>
    </div>
  )
}

// ── Question screen ───────────────────────────────────────────────────────────
function QuizScreen({
  questionIndex,
  selectedScore,
  onSelect,
  onNext,
  onPrev,
}: {
  questionIndex: number
  selectedScore: number | undefined
  onSelect: (score: number) => void
  onNext: () => void
  onPrev: () => void
}) {
  const q = QUESTIONS[questionIndex]
  const progress = ((questionIndex + 1) / QUESTIONS.length) * 100
  const isFirst = questionIndex === 0
  const isLast = questionIndex === QUESTIONS.length - 1

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-slate-400 uppercase tracking-widest">
            Question {questionIndex + 1} of {QUESTIONS.length}
          </span>
          <span className="text-xs text-slate-500">{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1 bg-slate-800 rounded-full">
          <div
            className="h-full bg-white rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl font-semibold text-white mb-8 leading-snug">{q.question}</h2>

      {/* Options */}
      <div className="flex flex-col gap-3 mb-10">
        {q.options.map((opt, i) => {
          const isSelected = selectedScore === opt.score
          return (
            <button
              key={i}
              onClick={() => onSelect(opt.score)}
              className={`text-left p-4 rounded-xl border transition-all duration-150 ${
                isSelected
                  ? 'border-white bg-white/10 ring-1 ring-white/30'
                  : 'border-slate-700 bg-slate-800 hover:border-slate-500 hover:bg-slate-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    isSelected ? 'border-white bg-white' : 'border-slate-500'
                  }`}
                >
                  {isSelected && <div className="w-2 h-2 rounded-full bg-slate-950" />}
                </div>
                <div>
                  <p className={`text-sm leading-relaxed ${isSelected ? 'text-white font-medium' : 'text-slate-300'}`}>
                    {opt.text}
                  </p>
                  {isSelected && (
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed italic">
                      {opt.interpretation}
                    </p>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors disabled:opacity-20 disabled:pointer-events-none text-sm"
        >
          <ArrowLeft size={16} />
          Previous
        </button>
        <button
          onClick={onNext}
          disabled={selectedScore === undefined}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          {isLast ? 'See Results' : 'Next'}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

// ── Results screen ────────────────────────────────────────────────────────────
function ResultsScreen({ answers }: { answers: Record<number, number> }) {
  const { overall, categoryScores, strengths, risks, tier } = calculateResults(answers)
  const tierCfg = TIER_CONFIG[tier]

  const strengthLabels = strengths.map((k) => CATEGORY_LABELS[k as CategoryKey])
  const riskLabels = risks.map((k) => CATEGORY_LABELS[k as CategoryKey])

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
          Your Results
        </p>
        <h1 className="text-3xl font-bold text-white mb-2">Operational Certainty Score</h1>
        <p className="text-slate-400 text-sm">Based on {QUESTIONS.length} dimensions of AI readiness</p>
      </div>

      {/* Score + Tier */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-800 border border-slate-700 rounded-2xl p-8 mb-8">
        <div className="flex-shrink-0">
          <ScoreRing score={overall} />
        </div>
        <div className="text-center md:text-left">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 ${tierCfg.bgClass} ${tierCfg.colorClass}`}>
            {tierCfg.label}
          </div>
          <h2 className="text-xl font-bold text-white mb-2">{tierCfg.service}</h2>
          <p className="text-slate-400 text-sm leading-relaxed">{tierCfg.description}</p>
        </div>
      </div>

      {/* Category breakdown */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-6">
          Score by Dimension
        </h3>
        <div className="flex flex-col gap-4">
          {(Object.entries(categoryScores) as [CategoryKey, number][]).map(([key, score]) => (
            <CategoryBar key={key} label={CATEGORY_LABELS[key]} score={score} />
          ))}
        </div>
      </div>

      {/* Strengths / Risks / Opportunities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Strengths */}
        <div className="bg-emerald-400/5 border border-emerald-400/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 size={16} className="text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Strengths</span>
          </div>
          <ul className="space-y-2">
            {strengthLabels.map((label) => (
              <li key={label} className="text-sm text-slate-300">{label}</li>
            ))}
          </ul>
        </div>

        {/* Risks */}
        <div className="bg-red-400/5 border border-red-400/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={16} className="text-red-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-red-400">Priority Risks</span>
          </div>
          <ul className="space-y-2">
            {riskLabels.map((label) => (
              <li key={label} className="text-sm text-slate-300">{label}</li>
            ))}
          </ul>
        </div>

        {/* Next step */}
        <div className="bg-blue-400/5 border border-blue-400/20 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp size={16} className="text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">Where AI Fits</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {tier === 'discovery'
              ? 'Start with risk mapping and governance baseline before any implementation investment.'
              : tier === 'sprint'
                ? 'One defined workflow, fully implemented with governance and measurement built in.'
                : 'Cross-functional AI scale, governance frameworks, and embedded advisory capacity.'}
          </p>
        </div>
      </div>

      {/* Recommendation */}
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-3 mb-4">
          <Zap size={18} className={`flex-shrink-0 mt-0.5 ${tierCfg.colorClass}`} />
          <div>
            <h3 className="text-white font-semibold mb-1">Why {tierCfg.service} fits your organization</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{tierCfg.cta}</p>
          </div>
        </div>
      </div>

      {/* CTAs */}
      <div className="text-center space-y-4">
        <a
          href="mailto:info@thehumanworkforce.com?subject=Assessment%20Results%20%E2%80%94%20Let%27s%20Talk"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
        >
          Discuss My Results
          <ArrowRight size={18} />
        </a>
        <p className="text-slate-600 text-xs">
          Or{' '}
          <Link href="/demos" className="hover:text-slate-400 transition-colors">
            explore our live demos
          </Link>{' '}
          to see what we build.
        </p>
      </div>
    </div>
  )
}

// ── Main orchestrator ─────────────────────────────────────────────────────────
export default function Assessment() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})

  function handleSelect(score: number) {
    setAnswers((prev) => ({ ...prev, [currentQ]: score }))
  }

  function handleNext() {
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ((q) => q + 1)
    } else {
      setPhase('results')
    }
  }

  function handlePrev() {
    if (currentQ > 0) setCurrentQ((q) => q - 1)
  }

  if (phase === 'intro') return <IntroScreen onStart={() => setPhase('quiz')} />
  if (phase === 'results') return <ResultsScreen answers={answers} />

  return (
    <QuizScreen
      questionIndex={currentQ}
      selectedScore={answers[currentQ]}
      onSelect={handleSelect}
      onNext={handleNext}
      onPrev={handlePrev}
    />
  )
}
