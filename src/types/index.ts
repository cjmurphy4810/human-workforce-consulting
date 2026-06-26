export interface Demo {
  id: string
  name: string
  tagline: string
  description: string
  live_url: string
  github_url: string
  tech_stack: string[]
  status: 'live' | 'beta' | 'coming_soon'
  category: string
}

export interface Expert {
  id: string
  name: string
  title: string
  bio: string
  credentials: string[]
  photo_url: string
  linked_research_ids: string[]
  contact_email?: string
}

export interface Service {
  id: string
  title: string
  executive_problem_solved: string
  technical_stack: string[]
  roi_metric: string
  github_link?: string
  slug: string
}

export interface CaseStudy {
  id: string
  client_name: string
  industry: string
  metric_delivered: string
  duration_weeks: number
  slug: string
}
