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
      "That's fine — many authors start there. That's the Create package: structured interviews and a full ghostwriting process turn your expertise into a manuscript before the editorial pass begins.",
  },
  {
    question: 'Which book package is right for me?',
    answer:
      "If you already have a complete manuscript, start with Publish. If you have the expertise but haven't written the book yet, Create is built for that — we extract and structure it with you through interviews. Authority adds a full launch and content package on top of Create, tied into Creator Services. Not sure? Ask a question and we'll point you to the right one.",
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
      'eBook is included with Create and Authority; hardcover is included with Authority. Books longer than 300 pages are outside this fixed-fee scope and quoted separately.',
  },
  {
    question: 'What platform will my website be built on?',
    answer:
      'We select the platform based on the project, business needs, and complexity. Most professional sites can be built using modern managed platforms that are fast, secure, easy to maintain, and do not require a custom development team.',
  },
  {
    question: 'Do I own my website?',
    answer:
      'Yes. The website is built for you. Domain ownership, business content, branding, and client-facing assets remain yours. Any third-party hosting, platform, domain, or subscription fees are disclosed before launch.',
  },
  {
    question: 'Are hosting and domain fees included?',
    answer:
      'The website-development price covers the design, setup, configuration, and launch work described in your package. Domain registration, premium platform subscriptions, paid plugins, or third-party hosting fees are separate unless specifically included in your proposal.',
  },
  {
    question: 'How long does a website take to build?',
    answer:
      'A typical Launch or Business website can usually be completed within approximately 1–3 weeks once required content, branding, and approvals are available. Larger Authority or custom sites may take longer depending on complexity and integrations.',
  },
  {
    question: 'Can you connect my website to my YouTube channel or book?',
    answer:
      'Yes. That is one of the primary reasons Website Services exists. We can integrate YouTube videos, podcasts, Amazon book listings, lead-generation forms, downloadable resources, blog content, and other Creator Services assets into the website.',
  },
  {
    question: 'Can I use Website Services without subscribing to Creator Services?',
    answer:
      'Yes. Website development and Website Care can be purchased independently. Active Professional and Premium Creator Services clients receive basic Website Care as an included benefit.',
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
