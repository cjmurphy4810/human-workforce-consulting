# FlightWatch Public Demo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a stateless guided FlightWatch simulator on its own Fly.io URL and add the verified demo link to The Human Workforce consulting catalog.

**Architecture:** Create `/Users/zdjimas/VS Code Projects/flightwatch-demo` as a dependency-free static application served by Nginx. JavaScript owns only ephemeral page state, deterministic sample data, and progress timing; the consulting site consumes the deployed URL through its existing JSON demo catalog.

**Tech Stack:** Semantic HTML5, CSS, vanilla JavaScript, Node built-in test runner, Nginx Alpine, Docker, Fly.io, Next.js 14 consulting site.

**Spec:** `docs/superpowers/specs/2026-08-12-flightwatch-public-demo-design.md`

## Global Constraints

- No Duffel, Anthropic, Gmail, FlightWatch, or external API calls.
- No database, cookies, local/session storage, analytics, service worker, or collected visitor email.
- Every fare and schedule is visibly labelled fictional sample data and is not bookable.
- Reloading or closing resets the demo; concurrent visitors share no state.
- CTA email is `info@thehumanworkforce.com` with subject `FlightWatch Subscription Access`.
- The demo must work at desktop and 390x844, with keyboard focus, reduced motion, semantic progress, and no page overflow.
- Deploy as a separate Fly app and update the consulting card only with the verified public URL.

---

### Task 1: Create the static demo contract and tests

**Files:**
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/package.json`
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/tests/demo.test.mjs`
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/src/demo-data.js`
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/src/demo-state.js`

**Interfaces:**
- `DEMO_SCENARIO` is an immutable object containing criteria, three internally consistent recommendations, route narrative, and email preview facts.
- `createDemoState()` returns `{stage, answers, progress, running}`.
- `advanceState(state, action)` returns a new ephemeral state and never accesses persistence or network APIs.

- [ ] Write failing Node tests that import `DEMO_SCENARIO`, `createDemoState`, and `advanceState`; assert three cabin results, exact totals/per-person arithmetic, required disclaimer, guided stages, restart behavior, and refusal to advance twice while running.
- [ ] Run `npm test` and verify RED because the modules do not exist.
- [ ] Implement the minimal immutable data/state modules using ES modules and pure functions.
- [ ] Run `npm test` and verify PASS.
- [ ] Commit `test: define stateless FlightWatch demo contract`.

### Task 2: Build the guided route-desk interface

**Files:**
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/index.html`
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/src/styles.css`
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/src/app.js`
- Modify: `/Users/zdjimas/VS Code Projects/flightwatch-demo/tests/demo.test.mjs`

**Interfaces:**
- `app.js` renders five stages into `#demo-workspace`, binds semantic buttons/forms, simulates progress without external requests, and exposes no global visitor data.
- CSS tokens: `--cockpit #073F46`, `--route #0A6972`, `--runway #F2AE37`, `--paper #F4F7F8`, `--ink #12333A`, `--muted #60777D`.

- [ ] Extend tests to assert the HTML contains the sample disclaimer, semantic navigation/main/progress/table landmarks, subscription mailto, and no external scripts/forms; statically scan JS for forbidden `fetch`, `XMLHttpRequest`, `WebSocket`, storage, cookie, and beacon APIs.
- [ ] Run `npm test` and verify RED against missing files.
- [ ] Build the five-stage HTML/CSS/JS experience. Use the route-line/airport-node signature to connect brief, clarification, search, and recommendation. Render recommendation cards, comparison table, ground-route explanation, and email preview from `DEMO_SCENARIO` only.
- [ ] Implement reduced-motion progress completion, double-click protection, back navigation, and restart.
- [ ] Run `npm test` and verify PASS.
- [ ] Commit `feat: build guided FlightWatch simulator`.

### Task 3: Containerize and validate the standalone app

**Files:**
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/Dockerfile`
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/nginx.conf`
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/fly.toml`
- Create: `/Users/zdjimas/VS Code Projects/flightwatch-demo/.dockerignore`
- Modify: `/Users/zdjimas/VS Code Projects/flightwatch-demo/tests/demo.test.mjs`

**Interfaces:**
- Nginx listens on 8080, serves `index.html` revalidatably and versioned/static assets with cache headers, and returns `/` as the health-check target.
- Fly app configuration uses `flightwatch-demo-thwf`, HTTPS enforcement, scale-to-zero, and maximum one machine.

- [ ] Add tests that inspect container/Fly configuration for port 8080, `/` health check, HTTPS enforcement, and absence of secrets.
- [ ] Run `npm test` and verify RED.
- [ ] Implement the container and Fly files with non-root-friendly Nginx runtime paths.
- [ ] Run `npm test`, `docker build` when Docker is available, and a local HTTP smoke test.
- [ ] Commit `chore: package FlightWatch demo for Fly`.

### Task 4: Browser QA and visual refinement

**Files:**
- Modify only demo HTML/CSS/JS and tests for defects found.

**Interfaces:**
- Complete journey: brief → clarification → criteria → simulated progress → results/email → restart.

- [ ] Serve the demo locally and inspect initial, criteria, progress, results, email preview, and restart states at desktop.
- [ ] Repeat at 390x844 and with reduced motion; assert no page-level overflow, no console errors, and a keyboard-operable flow.
- [ ] Critique the implementation against the route-desk direction; remove any decorative element that does not communicate route, status, or comparison, and correct contrast/spacing defects.
- [ ] Re-run `npm test` and commit `fix: refine FlightWatch demo experience` if files changed.

### Task 5: Deploy the separate Fly app

**Files:**
- Modify `/Users/zdjimas/VS Code Projects/flightwatch-demo/fly.toml` only if Fly requires a different available app name.

**Interfaces:**
- Produces a verified HTTPS public demo URL.

- [ ] Run `fly status -a flightwatch-demo-thwf`; create the app through `fly launch --no-deploy` only if it does not exist.
- [ ] Run `fly deploy` from the demo project.
- [ ] Verify HTTPS `/` returns 200 after cold start, assets load, the browser journey completes, and no outbound API traffic appears.
- [ ] Record the exact verified URL for Task 6.

### Task 6: Add and verify the consulting-site demo card

**Files:**
- Modify: `/Users/zdjimas/VS Code Projects/human-workforce-consulting/src/content/demos.json`
- Test: `/Users/zdjimas/VS Code Projects/human-workforce-consulting/src/content/demos.test.mjs`
- Modify: consulting-site deployment files only if needed to publish the catalog change.

**Interfaces:**
- Adds demo id `flightwatch-demo`, status `live`, category `Workforce`, and the exact verified Fly URL from Task 5.

- [ ] Write a failing Node test that loads `demos.json` and asserts the exact card name, fictional-sample disclosure, live status, verified HTTPS URL, and no private FlightWatch URL.
- [ ] Run the test and verify RED because the entry is absent.
- [ ] Add the catalog entry using existing `DemoCard` behavior; omit `screenshot_url` unless a verified asset is added.
- [ ] Run the catalog test, `npm run lint`, and `npm run build`.
- [ ] Browser-check `/demos`, the new card, and its target URL.
- [ ] Commit `feat: add FlightWatch public demo`.

### Task 7: Final verification and handoff

**Files:**
- Modify only files required by final defects.

**Interfaces:**
- Both repositories finish committed and clean; Fly serves the demo.

- [ ] Re-read the approved spec and map every requirement to implementation/tests.
- [ ] Run demo tests, consulting tests/lint/build, `git diff --check`, and clean-status checks in both repositories.
- [ ] Verify the deployed URL and subscription mailto one final time.
- [ ] Report commits, live URL, consulting integration status, tests, and any publishing step still needed for the consulting site.
