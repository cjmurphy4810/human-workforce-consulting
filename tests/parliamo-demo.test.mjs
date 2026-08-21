import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

const demos = JSON.parse(readFileSync(new URL('../src/content/demos.json', import.meta.url)))

test('catalog includes the public Parliamo in Italia application', () => {
  const demo = demos.find((item) => item.id === 'parliamo-in-italia')
  assert.ok(demo)
  assert.equal(demo.status, 'live')
  assert.equal(demo.category, 'Personal')
  assert.equal(demo.live_url, 'https://parliamo-in-italia.fly.dev')
  assert.match(demo.description, /Italian-first/)
  assert.match(demo.description, /browser-local custom phrases/)
  assert.ok(existsSync(new URL(`../public${demo.screenshot_url}`, import.meta.url)))
})
