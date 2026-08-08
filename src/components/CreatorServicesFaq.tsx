'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'Do I need to be on camera?',
    answer:
      'No — many clients use AI avatars, voice-only formats, or a mix.',
  },
  {
    question: "What if I don't like something before it publishes?",
    answer: 'Nothing publishes without approval.',
  },
  {
    question: 'How is this different from hiring a video editor?',
    answer:
      'We handle everything upstream and downstream of editing too — research, writing, metadata, distribution, and repurposing into five other formats from one idea.',
  },
  {
    question: 'Is this all AI, or are real people involved?',
    answer:
      'Both, deliberately — AI for speed, a human reviews everything before your audience sees it.',
  },
  {
    question: 'How much of my time does this take?',
    answer: 'About 10 minutes a week once set up.',
  },
  {
    question: "What if I only have an idea, not a finished manuscript, for my book?",
    answer:
      "That's fine — many authors start there. We'll work with you through structure and content development before the editorial pass begins.",
  },
  {
    question: 'Who owns the rights to my book?',
    answer:
      'You do. You retain all rights and ownership, and Amazon pays royalties directly to you — there is no rights assignment or revenue share with CTADMIN Publishing.',
  },
  {
    question: "What if I don't like the title or cover CTADMIN Publishing drafts?",
    answer:
      "You'll see options for both, and nothing goes to print or publishes without your final approval.",
  },
  {
    question: 'How many rounds of review do I get for my book?',
    answer:
      'A handful of interactive review conversations by chat, email, or Google Meet — enough to get it right, not an open-ended revision loop.',
  },
  {
    question: 'Do I need my own ISBN?',
    answer:
      'No — a free Amazon-issued ISBN is included. If you would rather use your own, that is a $49 add-on.',
  },
  {
    question: 'What if my book is longer than 300 pages, or I want hardcover or ebook formats?',
    answer:
      "That's outside this fixed-fee scope — longer manuscripts and additional formats are quoted separately.",
  },
]

export default function CreatorServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={faq.question}
            className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-white font-semibold text-sm md:text-base">
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <p className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
