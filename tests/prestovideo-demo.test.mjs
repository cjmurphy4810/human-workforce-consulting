import assert from 'node:assert/strict'
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
