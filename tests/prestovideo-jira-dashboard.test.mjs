import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

test('the PrestoVideo Jira demo opens a public dashboard snapshot', () => {
  const demos = JSON.parse(
    readFileSync(new URL('../src/content/demos.json', import.meta.url), 'utf8'),
  )
  const demo = demos.find((item) => item.id === 'prestovideo-jira-project')

  assert.equal(demo.live_url, '/demos/prestovideo-jira-dashboard')
  assert.equal(demo.live_label, 'Explore Dashboard Demo')
})

test('the public snapshot contains the approved project and cost evidence', () => {
  const pageUrl = new URL(
    '../src/app/demos/prestovideo-jira-dashboard/page.tsx',
    import.meta.url,
  )

  assert.ok(existsSync(pageUrl), 'the public dashboard route must exist')
  const page = readFileSync(pageUrl, 'utf8')

  for (const requiredText of [
    'PrestoVideo User Experiences',
    'Demonstration snapshot',
    'PV1 — Stories and Features',
    'AI Cost Savings',
    '$4,655',
    '101',
  ]) {
    assert.ok(page.includes(requiredText), `dashboard must include ${requiredText}`)
  }
})
