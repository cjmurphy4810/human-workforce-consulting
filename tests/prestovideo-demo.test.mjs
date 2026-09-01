import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import demos from '../src/content/demos.json' with { type: 'json' }

test('PrestoVideo appears as a text-only live demo linked to the application', () => {
  const demo = demos.find((item) => item.id === 'prestovideo')

  assert.ok(demo)
  assert.equal(demo.name, 'PrestoVideo')
  assert.equal(demo.status, 'live')
  assert.equal(demo.category, 'Workforce')
  assert.equal(demo.live_url, 'https://prestovideo-thwf.fly.dev')
  assert.equal(demo.live_label, 'Open PrestoVideo')
  assert.equal(demo.github_url, '')
  assert.equal('screenshot_url' in demo, false)
  assert.match(demo.description, /GPT-supported product design and software development/)
  assert.deepEqual(demo.tech_stack, ['GPT-assisted build', 'Next.js', 'Supabase', 'Stripe', 'Fly.io'])
})

test('PrestoVideo Jira project record explains the human and Codex build history', () => {
  const demo = demos.find((item) => item.id === 'prestovideo-jira-project')

  assert.ok(demo)
  assert.equal(demo.name, 'PrestoVideo Jira Project Record')
  assert.equal(demo.status, 'live')
  assert.equal(demo.category, 'Workforce')
  assert.equal(demo.live_url, 'https://zdjimas.atlassian.net/jira/dashboards/10101')
  assert.equal(demo.live_label, 'View Jira Project Record')
  assert.equal(demo.github_url, '')
  assert.equal('screenshot_url' in demo, false)
  assert.match(demo.description, /human decisions and approvals/i)
  assert.match(demo.description, /Codex-supported implementation/i)
  assert.match(demo.description, /estimated/i)
  assert.match(demo.description, /human-only development/i)
  assert.deepEqual(demo.tech_stack, ['Jira', 'Human–AI collaboration', 'Codex', 'Cost comparison'])
})

test('ChatGPT Jira browser build is the third PrestoVideo demo and opens the hosted video', () => {
  const demo = demos.find((item) => item.id === 'prestovideo-chatgpt-jira-build')
  const sequence = demos.filter((item) => item.id.startsWith('prestovideo')).map((item) => item.id)

  assert.ok(demo)
  assert.deepEqual(sequence, ['prestovideo', 'prestovideo-jira-project', 'prestovideo-chatgpt-jira-build'])
  assert.equal(demo.name, 'ChatGPT Browser-Driven Jira Build')
  assert.equal(demo.status, 'live')
  assert.equal(demo.category, 'Workforce')
  assert.equal(demo.live_url, '/videos/demos/prestovideo-chatgpt-jira-dashboard.mp4')
  assert.equal(demo.live_label, 'Watch Video Demo')
  assert.equal(demo.github_url, '')
  assert.equal('screenshot_url' in demo, false)
  assert.match(demo.description, /human provides the objective, prompts, and approvals/i)
  assert.match(demo.description, /browser-control capabilities through Chrome/i)
  assert.match(demo.description, /Jira gadgets/i)
  assert.deepEqual(demo.tech_stack, ['ChatGPT', 'Chrome browser control', 'Jira', 'Human-directed automation'])
})

test('text-only live demo cards render their configured action label', () => {
  const source = readFileSync(new URL('../src/components/DemoCard.tsx', import.meta.url), 'utf8')

  assert.match(source, /demo\.live_label \|\| 'Open Demo'/)
})
