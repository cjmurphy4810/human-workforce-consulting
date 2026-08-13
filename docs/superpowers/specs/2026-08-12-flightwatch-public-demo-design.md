# FlightWatch Public Demo Design

**Date:** 2026-08-12
**Status:** Approved

## Goal

Publish a lightweight, repeatable FlightWatch simulator on a separate Fly.io URL and link it from The Human Workforce consulting demo catalog. The simulator demonstrates the travel-agent experience without live fares, API credentials, accounts, collected email addresses, or persistent visitor data.

## Product boundary

The demo is a guided product simulation, not a flight-search service. It must never call Duffel, Anthropic, Gmail, FlightWatch, or another external API. It must not collect, transmit, or persist visitor input. Every fare, schedule, recommendation, and email shown is deterministic sample data and must be visibly labelled as such.

The private FlightWatch application and its history database remain separate. The demo receives no private source data or secrets and exposes no route into the private application.

## Deployment architecture

Create a standalone project at `/Users/zdjimas/VS Code Projects/flightwatch-demo`. It is a static HTML/CSS/JavaScript application served by a minimal Nginx container on Fly.io. The intended Fly app name and initial URL are `flightwatch-demo-thwf` and `https://flightwatch-demo-thwf.fly.dev`.

There is no application server, database, session store, cookie, local storage, analytics beacon, or service worker. All state lives in the current page's JavaScript memory. Multiple visitors are isolated by their browser processes and can use the simulator concurrently without shared state. Reloading, closing, or reopening the page resets it to the initial screen.

The consulting site remains a separate Next.js project. Its `src/content/demos.json` receives one live demo entry pointing to the Fly URL. No embedding or cross-origin messaging is required.

## Guided scenario

The fixed sample scenario demonstrates two adults seeking strong-value Premium Economy or Business Class travel from Phoenix to Europe in September 2026, with flexible dates, positioning airports, and open-jaw/separate-one-way strategies.

The visitor progresses through five deterministic stages:

1. **Trip brief** — a prewritten traveler request and a `Start guided demo` action.
2. **Agent clarification** — sample agent questions and selectable answers for origin, duration, cabin comparison, and routing flexibility.
3. **Search review** — a criteria summary and a `Run sample search` action. Copy explicitly says that no live search or API call will occur.
4. **Simulated progress** — a short client-side sequence through planning, comparing cabins, analyzing routes, and ranking results. It completes consistently and supports reduced-motion preferences.
5. **Recommendations and email preview** — ranked sample options, complete itinerary facts, cabin/price comparisons, the agent's route reasoning, and a preview of the email a subscriber would receive.

Buttons may change the visible selection or advance/backtrack through the guided flow, but they do not change the underlying sample result set. A `Restart demo` action clears in-memory state and returns to stage one.

## Sample results

Use three internally consistent fictional examples rather than claims of current inventory:

- Best overall: Premium Economy open jaw, PHX to FCO and VIE to PHX.
- Lowest price: Economy round trip, PHX to FCO and FCO to PHX.
- Comfort upgrade: Business Class using a positioning airport and separate tickets.

Each recommendation includes sample total/per-person price, airports, dates, flight numbers clearly marked illustrative, stops, elapsed duration, cabin, baggage, and a concise explanation. The recommended regional sequence explains a sample Rome → Venice → Croatia → Vienna ground itinerary, while stating that trains and ferries are illustrative planning context and not booked by FlightWatch.

Every results surface includes `Sample demonstration — not live inventory or a bookable fare.` No airline logo, Duffel offer ID, booking link, or false availability indicator is shown.

## Email preview and commercial CTA

The demo renders an on-screen email preview only. It does not request an email address or send mail. The preview summarizes the recommended options, sample prices, why the best option fits the criteria, and next steps a paid subscriber would receive.

Persistent result and final-screen calls to action use:

`mailto:info@thehumanworkforce.com?subject=FlightWatch%20Subscription%20Access`

CTA copy: `Interested in live subscription access? Contact The Human Workforce.`

## Visual design

Carry forward FlightWatch's professional teal, amber, white, and blue-gray palette, Manrope-style display typography, DM Sans-style body typography, large controls, rounded panels, and calm information density. Package web fonts locally or use system fallbacks; do not depend on third-party font requests.

The desktop layout uses a guided-step rail beside the active workspace. Mobile collapses to a compact progress indicator and single-column cards. Results use recommendation cards first and a compact comparison table second. The email preview resembles a clean inbox message without imitating a specific provider.

## Accessibility and behavior

- Semantic headings, forms, buttons, lists, tables, and progress elements.
- Full keyboard operation with visible focus.
- Live progress announcements use `aria-live="polite"`.
- Color is never the sole signal for price direction or recommendation status.
- `prefers-reduced-motion` completes simulated progress without animated transitions.
- No page-level horizontal overflow at 390px.
- Buttons cannot advance twice during simulated progress.
- Back and restart actions are predictable and do not use browser history hacks.

## Consulting-site integration

Add a live `flightwatch-demo` entry to `src/content/demos.json`:

- Name: `FlightWatch Travel Agent Demo`
- Tagline: `See how flexible flight planning can surface better vacation options.`
- Description: clearly calls it an interactive sample using fictional fare data and presents live subscription access as a prospective service.
- URL: `https://flightwatch-demo-thwf.fly.dev`
- Technology labels: `HTML`, `JavaScript`, `Stateless`, `Fly.io`
- Category: `Workforce`
- Status: `live`

The standard `Open Demo` action opens the separate app in a new tab. A locally created screenshot may be added to the consulting site's public demo screenshots after visual QA; the demo card must not link to a nonexistent image.

## Fly.io operations

The static app uses an Nginx Alpine image, listens on Fly's internal port 8080, forces HTTPS, and permits scale-to-zero with one maximum machine unless traffic requires adjustment. No secrets are set. Health checks request `/` and expect HTTP 200. Static assets receive cache headers; `index.html` remains revalidatable so updates appear promptly.

Deployment must verify the exact public URL, TLS, cold start, desktop/mobile rendering, and absence of outbound API calls. The consulting-site link is changed to the confirmed deployed URL, not an assumed app name, if Fly assigns or requires another name.

## Testing and verification

The demo project includes automated tests that verify:

- every stage and navigation action;
- fixed sample-data consistency and required disclaimers;
- progress completion and double-submit protection;
- restart removes all visible session progress;
- mailto address and subject;
- no network primitives or persistence APIs are used;
- accessible labels and semantic progress;
- production container serves `/` and static assets.

Browser QA covers desktop and 390x844 layouts, keyboard navigation, reduced motion, no console errors, no horizontal overflow, and a full start-to-results-to-restart journey.

The consulting site must pass its lint/build checks and render the new demo card with the deployed URL. Both repositories must be clean and committed before deployment handoff.

## Non-goals

- Live Duffel fares or availability.
- Personalized freeform trip interpretation.
- Collecting or sending visitor email.
- Authentication, subscriber lists, payments, or trials.
- Server-side sessions or saved history.
- Booking, ticketing, train, ferry, or hotel transactions.
- Sharing databases, tokens, or code execution with private FlightWatch.
