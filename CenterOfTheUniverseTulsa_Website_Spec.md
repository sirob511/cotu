# CenterOfTheUniverseTulsa.org — Build Specification

**Project type:** Front-end-only informational / visitor guide  
**Primary domain:** `CenterOfTheUniverseTulsa.org`  
**Working brand:** **Center of the Universe - Tulsa, Oklahoma**  
**Publisher positioning:** Independent visitor guide; not the official City of Tulsa / Downtown Tulsa Partnership site  
**Primary goals:** SEO, Google entity clarity, exceptional visitor utility, premium storytelling, and a rich guide to the Center of the Universe plus the immediately surrounding Downtown Tulsa / Arts District / Greenwood area  
**No commerce:** No merchandise, bookings, memberships, accounts, or payments  
**Last research pass:** August 25, 2026

---

## 1. Product vision

Build the best single resource on the internet for someone who:

1. Just heard about the Center of the Universe in Tulsa.
2. Saw it on Google Maps, TikTok, YouTube, Atlas Obscura, or *Tulsa King*.
3. Wants to know what it is, why the echo happens, whether it is open, how to find it, where to park, and what else to do nearby.
4. Is planning a short Downtown Tulsa stop and wants the visit to feel worthwhile.

The site should not feel like a generic tourism template or an SEO content farm. It should feel like a small premium editorial experience dedicated to one strange, specific, beloved place.

The core emotional arc:

> **What is this place? → Wait, it actually does that? → How did this happen? → Is there a scientific explanation? → What is that giant steel cloud? → The whole area has a bigger story → I want to go.**

The site should make a 10-minute attraction feel like the center point of a 1–3 hour Downtown Tulsa micro-adventure.

---

# 2. Verified research facts to anchor the site

Use these as the factual backbone. Re-write in original language; do not copy source prose.

## 2.1 What it is

- Center of the Universe is a tourist attraction / civic space on the Boston Avenue pedestrian bridge in Downtown Tulsa.
- Current commonly published address: **1 S Boston Ave, Tulsa, OK 74103**.
- Useful coordinates: **36.15689, -95.99153**.
- The center marker has been described by Tulsa City-County Library as a worn concrete circle roughly **30 inches in diameter**, surrounded by **13 rows of brick** forming a larger circle about **8 feet in diameter**.
- When a person stands at the center and speaks or claps, the sound returns with a strange echo / metallic / amplified quality.
- People outside the center hear the sound differently; popular retellings exaggerate this into “nobody outside can hear you.” The site should distinguish the fun legend from the more accurate acoustic description.

## 2.2 History

- The original Boston Avenue bridge dates to the **1930s** and once carried vehicles across the railroad tracks.
- A fire in the 1980s damaged a section of the bridge.
- The rebuilt pedestrian span and plaza opened in the **early 1980s**.
- The acoustic effect appears to have been an accidental by-product of the architecture rather than a deliberately engineered “mystery spot.”
- A local architecture explanation attributes much of the effect to sound focusing / reverberating off curved concrete walls around the central plaza.

## 2.3 Artificial Cloud

- Immediately adjacent is **Artificial Cloud**, a major steel sculpture by Native American artist **Robert Haozous**.
- Tulsa City-County Library lists it at approximately **72.5 feet tall**.
- It dates to **1991** and is intentionally allowed to weather / rust as part of its concept.
- Official redevelopment plans say Artificial Cloud is to be preserved.
- Do not casually call it a “spire” or “totem pole” in site copy; use the artwork’s proper name and artist attribution.

## 2.4 Renovation / current status

This needs prominent treatment because it is the most time-sensitive visitor information.

- Google’s current place listing shows the attraction as **Temporarily Closed**.
- The City of Tulsa began structural rehabilitation of the Boston Avenue Bridge in December 2024.
- Work includes bridge structural supports, deck, parapet walls, joints, and surface elements.
- The City explicitly said the critical inner concrete walls responsible for the acoustic phenomenon would be protected and preserved.
- Downtown Tulsa Partnership is leading the above-deck public-space renovation.
- Planned improvements include new paths, lighting, landscaping, green space, public art, seating / amenities, and improved pedestrian experience.
- Downtown Tulsa Partnership reported that the reimagined public space was anticipated for **Fall 2026** completion.
- Because schedules can slip, the public site must say **“Expected Fall 2026 — verify before visiting”**, never a hard reopening date unless an authoritative 2026 announcement confirms it.
- Add a small **“Status last checked”** date near the closure message.

## 2.5 Visibility / demand signal

- The Google place result has roughly **4,950+ reviews** and a rating around **4.3**, which is unusually large for such a small attraction.
- An older local report said the attraction drew close to **10,000 visitors per year**; treat this as an historical estimate rather than current measured attendance.
- It has appeared as a filming location in **Tulsa King**, giving it an additional pop-culture discovery path.

---

# 3. Editorial and brand positioning

## 3.1 Primary name

Use the full name everywhere that matters:

**Center of the Universe**  
**Tulsa, Oklahoma**

Do not require users to know “COTU.” COTU can appear as an occasional shorthand in body copy or subtle graphic treatment, but the primary user- and SEO-facing entity should always be **Center of the Universe Tulsa**.

## 3.2 Site descriptor

Recommended:

> **The independent guide to Tulsa’s strangest landmark.**

Alternative:

> **The complete visitor guide to Tulsa’s famous acoustic anomaly.**

## 3.3 Tone

The tone should be:
- Curious
- Smart
- Slightly playful
- Local-feeling
- Visually cinematic
- Factually careful
- Never woo-woo unless explicitly labeled as legend / myth

Avoid:
- Overclaiming “scientists are baffled”
- Pretending the anomaly has no plausible explanation
- Calling it an actual cosmic center
- Generic tourism fluff
- Overuse of “hidden gem”
- Fake “official” language
- Long one-line marketing copy everywhere

## 3.4 Visual concept

**“Cosmic mystery meets Tulsa Art Deco / industrial rail history.”**

Do not make it a cheesy galaxy website.

Recommended palette:
- Midnight / ink: `#0A0D12`
- Warm bone / parchment: `#F2EEE6`
- Brick / rust: `#A84F32`
- Steel gray: `#89939A`
- Electric sky accent: `#8ED6E8`
- Gold accent used sparingly: `#D6A64B`

Typography direction:
- Display serif or condensed editorial face for cinematic headlines
- Clean geometric sans for body/UI
- If using Google Fonts: pair something like **DM Serif Display / Cormorant Garamond** with **Inter / Manrope / Space Grotesk**
- Keep performance in mind; self-host or subset if possible.

Graphic motifs:
- Concentric rings based on the acoustic circle
- Sound-wave lines
- Rail-line geometry
- Coordinates
- Tiny “You are here” markers
- Sparse star-field / cosmic references only in transitions, not as the core aesthetic
- Thin Art Deco borders and geometric framing

---

# 4. Recommended tech stack

## 4.1 Framework

**Next.js (App Router) + TypeScript + Tailwind CSS**

Why:
- Static-first rendering
- Excellent metadata control
- Image optimization
- Easy sitemap / robots generation
- Server-rendered HTML even though the product has no backend
- Easy deployment on Vercel
- Straightforward JSON-LD injection

Use static generation for nearly everything.

## 4.2 Content model

For v1, keep all content in the repo:
- `src/content/pages/*.ts` or `.mdx`
- `src/data/attractions.ts`
- `src/data/facts.ts`
- `src/data/sources.ts`
- `src/data/site-status.ts`

No CMS required.

Use MDX only if it materially simplifies long editorial pages. Plain TS/JSON + React sections is also fine.

## 4.3 No backend

No database.  
No auth.  
No user-generated reviews.  
No contact forms in v1.  
No server API routes required.

Client-side calls allowed only for:
- tiny weather widget
- optional map interaction if needed

---

# 5. Information architecture

## Primary nav

**Visit**  
**The Echo**  
**Story**  
**Explore Nearby**  
**Renovation**

Secondary / More menu:
- Artificial Cloud
- Fun Facts
- Map
- FAQ
- Tulsa King
- About

---

# 6. Page inventory

Build enough pages to cover distinct user intent, but do not create thin keyword-doorway pages. Every page below must contain original, useful content.

## Tier 1 — essential launch pages

### 1. `/`
**Homepage / narrative landing page**

SEO title:
> Center of the Universe Tulsa | Visitor Guide

Meta description:
> Visit Tulsa’s Center of the Universe, the downtown acoustic anomaly where your voice echoes back in a strange new way. Get current access status, directions, parking, history, maps and nearby attractions.

Primary keyword:
- center of the universe tulsa

Secondary:
- center of universe tulsa
- center of the universe oklahoma
- tulsa center of the universe
- center of the universe attraction

Purpose:
- Story-first overview
- Immediate current access status
- Convince visitor the site is useful within 5 seconds

### 2. `/visit`
SEO title:
> Visit the Center of the Universe Tulsa | Hours, Access & Tips

Intent:
- “Is it open?”
- “Can I visit?”
- “How long does it take?”
- “What should I do when I get there?”

Content:
- Current renovation/access banner
- Address
- Map
- Suggested visit length: attraction itself is a short stop; pair with nearby district
- What to do at the circle
- Best conditions for hearing the effect
- Accessibility caveat: verify current construction access
- Free attraction historically; do not claim current open hours while closed

### 3. `/directions`
SEO title:
> Center of the Universe Tulsa Directions | How to Find It

Content:
- Coordinates
- “It is on the bridge, not at street level”
- Approaches from Archer / Boston
- Nearby visual landmarks
- Walking from Guthrie Green / Arts District / Greenwood
- Open-in-Google-Maps button
- OpenStreetMap embed

### 4. `/parking`
SEO title:
> Parking Near Center of the Universe Tulsa

Content:
- Explain that parking varies by event and construction
- Point to official Downtown Tulsa parking resources
- Map nearby public garages / lots as data is verified
- “Do not hard-code rates unless sourced and recently verified”
- Link to official parking resources
- Event-night caution

### 5. `/how-it-works`
SEO title:
> Why Does the Center of the Universe in Tulsa Echo?

Primary keyword:
- why does center of the universe tulsa echo
- center of the universe tulsa acoustic anomaly

This should be one of the best pages on the site.

Sections:
1. What you hear
2. What someone outside hears
3. The likely acoustic mechanism
4. Curved walls and focusing
5. Why trains / ambient noise can affect perception
6. Myth vs. physics
7. What engineers studied during the redesign
8. “Try the experiment” instructions

Include an interactive, CSS-only or SVG diagram:
- Person in center
- Circular wall
- Sound waves reflecting inward
- Observer outside

Do not claim a definitive single explanation if sources do not support one.

### 6. `/history`
SEO title:
> History of the Center of the Universe in Tulsa

Narrative:
- 1930s vehicular bridge
- Fire
- 1980s reconstruction / pedestrian plaza
- Accidental acoustic discovery
- Rise as a Tulsa curiosity
- Artificial Cloud arrives
- Festivals / local culture
- Deterioration
- 2019+ reimagining effort
- 2024–2026 rehabilitation

Use a vertical timeline.

### 7. `/renovation`
SEO title:
> Center of the Universe Tulsa Renovation & Reopening Updates

This is a very important SEO page while work is active.

At top:
> **Current status: Temporarily closed / under renovation**  
> Expected public-space completion: **Fall 2026** (subject to project schedule)  
> Last verified: [DATE]

Sections:
- Why the bridge needed work
- Structural repair phase
- Above-deck redesign
- What will stay
- What will change
- Acoustic anomaly preservation
- Artificial Cloud preservation
- Concept renderings
- Official-source links

Design this page so status can be updated by editing a single `site-status.ts` file.

### 8. `/artificial-cloud`
SEO title:
> Artificial Cloud Tulsa | The Sculpture Beside Center of the Universe

Content:
- Robert Haozous
- 1991
- 72.5-foot scale per Tulsa Library
- Weathering / rust concept
- Relationship to plaza
- Preservation in renovation
- Image gallery / detail crops
- “Look up after you test the echo.”

### 9. `/things-to-do-nearby`
SEO title:
> Things to Do Near Center of the Universe Tulsa

This page transforms a tiny attraction into an itinerary.

Primary nearby anchors:
- Guthrie Green
- Bob Dylan Center
- Woody Guthrie Center
- Cain’s Ballroom
- Greenwood Rising / Black Wall Street
- Tulsa Arts District
- Blue Dome District
- Downtown Art Deco architecture
- BOK Center if relevant
- Oklahoma Jazz Hall of Fame / Tulsa Union Depot — clearly display temporary closure if still closed

Use attraction cards with:
- image
- why it pairs with COTU
- approximate walking context
- external official website link
- map marker

Do not display stale hours as evergreen static content unless a “last verified” date exists.

### 10. `/map`
SEO title:
> Center of the Universe Tulsa Map | Attractions & Walking Guide

Interactive Leaflet + OpenStreetMap map.

Layers/toggles:
- Center of the Universe
- Parking
- Arts & museums
- Music
- Parks
- History

Initial center:
- `36.15689, -95.99153`

Include walking loops:
- **30-minute orbit** — COTU + Artificial Cloud + Guthrie Green
- **90-minute orbit** — add Bob Dylan Center / Woody Guthrie Center
- **Half-day orbit** — add Greenwood Rising + lunch / Arts District

### 11. `/faq`
SEO title:
> Center of the Universe Tulsa FAQ

Questions:
- What is the Center of the Universe in Tulsa?
- Where is it?
- Is it currently open?
- Is it free?
- Why does it echo?
- Can people outside the circle hear you?
- How long should I spend there?
- Where should I park?
- Is it kid-friendly?
- Is it wheelchair accessible?
- What is the tall sculpture beside it?
- Was the Center of the Universe in Tulsa King?
- Is it really the center of the universe?
- When will renovation be complete?

Avoid inventing definitive answers for current access / ADA conditions. Link to status page.

### 12. `/fun-facts`
SEO title:
> Center of the Universe Tulsa Fun Facts

Make this fun and highly shareable.

Potential facts:
- It sits above railroad tracks.
- The original bridge was for cars.
- The echo appears to have been a happy accident.
- The small center marker is only around 30 inches wide.
- The surrounding brick ring is around 8 feet across.
- Artificial Cloud is about 72.5 feet tall.
- Engineers specifically studied how to preserve the echo during redevelopment.
- The old illuminated brick artwork “Trace” is being removed as part of redevelopment.
- Bricks have reportedly been stolen from the old plaza — a detail Downtown Tulsa Partnership itself joked about.
- The location appeared in *Tulsa King*.
- Cosmologically speaking, modern astronomy does not define Tulsa — or anywhere else — as the literal center of an expanding universe. Use this as the final tongue-in-cheek fact.

### 13. `/tulsa-king`
SEO title:
> Center of the Universe in Tulsa King | Filming Location Guide

Content:
- Center of the Universe was used as a Tulsa filming location.
- The *Tulsa King* episode titled “Center of the Universe” increased pop-culture familiarity with the attraction.
- Explain what visitors recognize without reproducing copyrighted dialogue, screenshots, or video.
- Link back to Visit and Map pages.
- Include a copyright/trademark note: this guide is not affiliated with Paramount or the show.

### 14. `/about`
SEO title:
> About CenterOfTheUniverseTulsa.org

State clearly:
- Independent informational visitor guide
- Not operated by City of Tulsa or Downtown Tulsa Partnership
- Goal: make the landmark easier to understand and visit
- Corrections / source policy
- Link to Sources

### 15. `/sources`
SEO title:
> Sources & Research | Center of the Universe Tulsa

A clean bibliography with:
- City of Tulsa
- Downtown Tulsa Partnership
- Tulsa City-County Library
- Oklahoma Film + Music Office
- Visit Tulsa
- relevant engineering / feasibility study
- additional reporting

This builds trust and makes updating easier.

---

# 7. Optional phase-two SEO pages

Add only if each can be genuinely substantial.

- `/best-time-to-visit`
- `/center-of-the-universe-tulsa-with-kids`
- `/one-hour-near-center-of-the-universe`
- `/arts-district`
- `/greenwood`
- `/downtown-tulsa-walking-guide`
- `/photo-spots`
- `/route-66-side-trip` — only if you can make the relationship useful rather than forcing a Route 66 keyword
- `/acoustic-anomalies` — educational comparison with other “mystery spots,” without claiming equivalence
- `/center-of-the-universe-festival` — historical page if research supports enough unique material; make clear the festival is a separate historical event, not the attraction itself

Do not launch 40 near-duplicate pages just for keywords.

---

# 8. Homepage build spec

The homepage should be a rich scrolling story.

## Section A — utility strip

Very top, compact:
- Status dot
- `Temporarily closed for renovation`
- `Expected Fall 2026`
- `View update →`

This should be visible without dominating the design.

## Section B — hero

Full viewport-ish hero image/video-quality still of the circle + skyline / Artificial Cloud.

Overlay:

**CENTER OF THE UNIVERSE**  
**TULSA, OKLAHOMA**

Subhead:
> Stand on one small circle in downtown Tulsa and your own voice comes back strangely changed.

Buttons:
- **Plan your visit**
- **Why does it echo?**

Small coordinates:
`36.15689° N · 95.99153° W`

Avoid calling it “official.”

## Section C — “Say something.”

Visually dramatic section that explains the experience in ~100 words.

Interactive micro-animation:
- button: `CLAP`
- animate concentric rings
- optional short synthetic sound effect generated locally (not a recording copied from elsewhere)

Three steps:
1. Stand in the center.
2. Speak or clap.
3. Listen to your voice come back.

CTA: `Explore the acoustics →`

## Section D — “A happy accident above the railroad tracks”

Split-screen history section.

Left:
- vintage / bridge image or stylized timeline

Right:
- concise history
- 1930s bridge
- 1980s fire / rebuild
- anomaly emerges

CTA: `Read the full story`

## Section E — Artificial Cloud

Large vertical visual with oversized 72.5 FT typography.

Copy:
> The echo is only half the strangeness.

Introduce Robert Haozous and the sculpture.

CTA: `Meet Artificial Cloud`

## Section F — renovation

Use before/after or concept renderings.

Title:
> **The Center is changing. The echo is staying.**

Include:
- current status
- expected timeline
- paths
- landscaping
- lighting
- public art
- preserved acoustic walls

CTA: `See the renovation`

## Section G — “Orbit the Center”

Interactive map / nearby cards.

Suggested visual copy:
> The attraction takes minutes. The neighborhood can take the afternoon.

Cards:
- Guthrie Green
- Bob Dylan Center
- Woody Guthrie Center
- Greenwood Rising
- Cain’s Ballroom

CTA:
`Explore what’s nearby`

## Section H — Fun facts carousel

5–7 cards, e.g.:
- 30-inch center
- 8-foot brick circle
- 72.5-foot Artificial Cloud
- 1930s bridge origin
- 4,900+ Google reviews
- engineers studied the echo to preserve it

Do not pull Google review text without permission.

## Section I — visit card

Compact practical block:
- Address
- Coordinates
- Current access status
- Map
- Parking link
- Weather chip
- `Open in Google Maps`

## Section J — footer

Columns:
- Visit
- Discover
- Nearby
- About

---

# 9. Weather widget — front-end only

Yes, this can be tiny and backend-free.

## Recommended UX

A single chip inside the Visit card or header utility:

`☀ 84°F · Tulsa`

Tap / click:
- small popover:
  - now
  - today high / low
  - rain chance
  - `Full forecast ↗`

No large weather block.

## API options

### Option A — Open-Meteo for launch/prototype

Client-side fetch using coordinates:
`36.15689, -95.99153`

Advantages:
- no API key
- simple JSON
- no backend
- current + forecast data

Important:
- Open-Meteo’s free endpoint is for non-commercial use and requires attribution.
- If this site later adds ads, subscriptions, paid promotions, or becomes commercial, switch to a commercial Open-Meteo plan or another source.

Attribution in tiny popover/footer:
`Weather: Open-Meteo`

### Option B — NWS / weather.gov

NWS data is public and free to use for lawful purposes. The NWS API uses:
1. `/points/{lat},{lon}`
2. follow `forecast` or `forecastHourly`

It is excellent long-term, but the two-request flow and API headers make it slightly more work than Open-Meteo.

Recommendation:
- v1: Open-Meteo client-only
- keep weather provider behind a tiny adapter so it can be replaced later

Weather failure behavior:
- never show broken UI
- if API fails, hide temperature and show `Tulsa weather ↗`

---

# 10. Map implementation

## Preferred

**Leaflet + OpenStreetMap**

Why:
- no Google Maps API key
- no backend
- full styling / markers
- easy category filters
- coordinates are known
- excellent for “things nearby”

Requirements:
- include OpenStreetMap attribution
- lazy-load map JS below the fold
- map should not block LCP
- render a static map-like fallback / placeholder before hydration

## Google Maps integration without API complexity

Use ordinary outbound links, not the paid Maps JS API:
- `Open in Google Maps`
- `Directions`

Build URLs from the verified coordinates / place name.

Do not attempt to manipulate or scrape Google Maps.

---

# 11. SEO architecture

## 11.1 Technical baseline

Every public route:
- server-rendered / statically generated HTML
- 200 response
- unique title
- unique meta description
- one clear H1
- canonical URL
- OG title / description / image
- Twitter card metadata
- descriptive image alt text
- breadcrumb UI on article pages
- BreadcrumbList JSON-LD

Root:
- `robots.txt`
- `sitemap.xml`
- favicon
- web manifest
- `humans.txt` optional
- `llms.txt` optional, but do not prioritize over standard SEO

## 11.2 Canonical host

Canonical:
`https://centeroftheuniversetulsa.org`

Force:
- HTTPS
- one host only
- choose `www` or apex; recommend apex
- 301 all variants to canonical

If `COTUTulsa.com` is also purchased:
- 301 every request to the equivalent path on the `.org`
- never serve duplicate content on both domains

## 11.3 Structured data

### Site level
Use:
- `WebSite`
- `Organization` for the independent publisher

Do **not** represent the publisher as the owner/operator of the attraction.

### Attraction pages
Use Schema.org:
- `TouristAttraction`
- nested `PostalAddress`
- `GeoCoordinates`
- `mainEntityOfPage`
- `image`
- `description`
- `sameAs` for authoritative third-party entity references when appropriate

Important separation:
- The **TouristAttraction** entity is the physical Center of the Universe.
- The **publisher / Organization** is the independent guide.
- Do not falsely make the attraction’s address the publisher’s business address.
- Do not use `LocalBusiness` for the website publisher just to try to influence Maps.

### Editorial pages
Use:
- `Article` / `BlogPosting` where appropriate
- `BreadcrumbList`
- `ImageObject` metadata where useful

FAQ:
- Can mark semantic FAQ content, but do not build the strategy around FAQ rich-result visibility. Google limits FAQ rich-result use in many contexts.

## 11.4 Internal linking

Every page should link naturally to 2–5 relevant pages.

Examples:
- `/how-it-works` → `/history`, `/visit`, `/renovation`
- `/artificial-cloud` → `/history`, `/map`, `/things-to-do-nearby`
- `/parking` → `/directions`, `/visit`, `/map`
- `/tulsa-king` → `/visit`, `/history`
- nearby attraction sections → `/map`

Avoid footer-only internal linking as the main strategy.

## 11.5 Image SEO

For every meaningful image:
- descriptive filename
- width / height
- responsive `srcset`
- real alt text
- caption when context adds value
- image near relevant text
- avoid CSS background images for key content
- include images in sitemap if implementation allows / is useful

Example:
`center-of-the-universe-tulsa-acoustic-circle.jpg`

Alt:
> Brick acoustic circle at the Center of the Universe on Tulsa’s Boston Avenue pedestrian bridge.

Not:
> center universe tulsa center universe tulsa SEO keyword

## 11.6 Search Console launch

After launch:
1. Verify domain property.
2. Submit sitemap.
3. Inspect homepage.
4. Request indexing for Tier 1 pages.
5. Monitor indexing / canonical selection.
6. Track queries weekly.
7. Do not repeatedly submit the same unchanged URLs.

## 11.7 Google Maps / place entity readiness

The site should be built so Google can clearly understand its relationship to the landmark, but it must not misrepresent ownership.

Use:
- exact attraction name
- consistent address
- coordinates
- authoritative factual citations
- `TouristAttraction` schema
- map
- original photos once available
- clear current status
- strong About / Sources pages

If suggesting the website as an edit to the existing Google place listing, present it truthfully as an independent informational resource. Do not claim the place or call the site “official” unless formally authorized by the operator.

---

# 12. Keyword / intent cluster

Do not obsess over exact-match domains; build pages that satisfy actual search intent.

## Core entity
- center of the universe tulsa
- center of universe tulsa
- center of the universe oklahoma
- tulsa center of the universe

## Visit
- center of the universe tulsa hours
- is center of the universe tulsa open
- center of the universe tulsa closed
- center of the universe tulsa reopening
- center of the universe tulsa directions
- center of the universe tulsa parking
- center of the universe tulsa address
- center of the universe tulsa map

## Curiosity
- why does center of the universe tulsa echo
- center of the universe tulsa explained
- center of the universe acoustic anomaly
- center of the universe tulsa mystery
- how does center of the universe tulsa work

## History / culture
- center of the universe tulsa history
- artificial cloud tulsa
- Robert Haozous Artificial Cloud
- center of the universe tulsa renovation

## Pop culture
- center of the universe tulsa king
- tulsa king filming locations center of the universe

## Nearby / itinerary
- things to do near center of the universe tulsa
- tulsa arts district attractions
- things to do downtown tulsa
- center of the universe tulsa nearby attractions

---

# 13. Content quality rules

This is crucial.

- Do not write pages to a word-count target.
- Do not repeat the same intro across every page.
- Every page must answer its primary intent above the fold or very early.
- Cite sources where factual claims are non-obvious or time-sensitive.
- Clearly label legend vs. established fact.
- Current status must include an update date.
- Use original writing.
- Avoid copied tourism-site descriptions.
- Do not generate fake testimonials or fake quotes.
- Do not republish Google review text.
- If showing review count, phrase it as an approximate public signal and periodically re-check it.

---

# 14. Image plan

The user intends to replace photography later. The initial build should still feel complete.

## 14.1 Development image policy

For the first implementation:
- Use remote placeholder/reference photography only where rights are understood.
- Prefer public-domain / CC0 / Creative Commons sources for any image that might accidentally survive to production.
- Clearly tag any press/editorial images as `DEV ONLY — REPLACE BEFORE PUBLIC LAUNCH`.
- Store image attribution metadata in one file.

Suggested structure:

```ts
type SiteImage = {
  id: string
  src: string
  alt: string
  credit?: string
  sourceUrl?: string
  license?: string
  productionApproved: boolean
}
```

Build a dev warning if `productionApproved === false`.

## 14.2 Image slots needed

1. Homepage hero — COTU circle / Artificial Cloud
2. Close-up of center circle
3. Wide pedestrian bridge
4. Artificial Cloud portrait orientation
5. Tulsa skyline
6. Old / pre-renovation plaza
7. Renovation rendering — north approach
8. Renovation rendering — COTU plaza
9. Renovation concept plan
10. Rail tracks / bridge context
11. Guthrie Green
12. Bob Dylan Center
13. Woody Guthrie Center
14. Cain’s Ballroom
15. Greenwood / Black Wall Street
16. Downtown Tulsa Art Deco
17. Map / aerial
18. Tulsa King page: use an original photo of the location, not show screenshots

## 14.3 Good currently located visual references

### Center of the Universe / plaza
- La Brújula Verde image result: good wide circle/plaza reference. Treat as copyrighted editorial reference unless license is confirmed.
- MapQuest / Tripadvisor image result: good Artificial Cloud / plaza reference. Development only unless permission is established.
- Atlas Obscura gallery: strong reference set. Do not hotlink for production without permission.
- Silly America: clear modern circle close-up. Development reference only unless licensed.

### Renovation
- Downtown Tulsa Partnership’s project page contains official renderings.
- KJRH published a north-approach rendering from the redevelopment presentation.
- The OU “Bridges for All” PDF reproduces the concept plan and concept view.

### Tulsa skyline
Wikimedia Commons has several usable choices:
- `Downtown Tulsa Skyline.jpg` by Jordan Michael Winn is **CC0 / public domain dedication** and is a good safe temporary skyline visual.
- `Tulsa skyline pan.jpg` is public domain.
- Verify each file page before shipping.

### Nearby
Use official attraction press assets or Wikimedia / CC images where licenses permit. For development-only placeholders, image search references are acceptable, but replace them before launch.

---

# 15. Renovation image / document integration

Create a special “The next Center” visual story using official public planning material.

Potential module:
- existing condition
- concept plan
- north approach
- center plaza
- event lawn / paths
- preserved Artificial Cloud
- preserved acoustic walls

Every rendering should be captioned:
> Concept rendering from the Center of the Universe redevelopment planning process. Final built conditions may differ.

Link to the authoritative Downtown Tulsa Partnership project page.

Do not imply the independent site created the plans.

---

# 16. Surrounding-area strategy

The site should treat COTU as a **portal into a compact piece of Downtown Tulsa**, not an isolated pin.

The place sits in an unusually rich overlap:
- Tulsa Arts District
- Downtown core
- historic rail infrastructure
- Greenwood / Black Wall Street nearby
- music history
- public art
- Art Deco architecture

## Nearby priority hierarchy

### Very close / natural pairing
- Artificial Cloud
- Tulsa Union Depot / Oklahoma Jazz Hall of Fame building
- Guthrie Green
- Bob Dylan Center
- Woody Guthrie Center

### Short walk
- Cain’s Ballroom
- Greenwood Rising
- Black Wall Street / Greenwood District
- BOK Center
- Tulsa Arts District galleries

### Broader Downtown
- Blue Dome District
- Art Deco buildings along Boston Avenue
- Tulsa Performing Arts Center

### Broader Tulsa — mention sparingly
- Gathering Place
- Philbrook Museum
- Route 66 attractions

Do not let the site turn into a generic “50 things to do in Tulsa” site. The center of gravity should remain COTU and walkable surroundings.

---

# 17. Premium interactive ideas that require no backend

Use 3–5 of these, not all if they make the site busy.

## 17.1 Acoustic ring animation
SVG concentric circles that pulse on click / scroll.

## 17.2 “Stand here” micro-experiment
Interactive illustrated diagram:
- drag a person into center
- sound reflection animation changes
- purely educational / illustrative

## 17.3 Coordinates cursor
Subtle coordinate readout in hero.

## 17.4 Before / after renovation slider
Existing photo vs. concept rendering.

## 17.5 “Orbit the Center” walking map
Choose 30 min / 90 min / half-day.

## 17.6 Timeline scrubber
1930s → 1980s → 1991 → 2019 → 2022 → 2024 → 2026.

## 17.7 Myth / Reality cards
Examples:
- “Nobody outside can hear you.” → more complicated.
- “It was designed as an acoustic trick.” → likely accidental.
- “The echo is being destroyed by renovation.” → official plans explicitly preserve the critical walls.

## 17.8 Tiny weather chip
As described above.

## 17.9 “Is Tulsa really the center?”
A playful 2–3 paragraph astronomy aside, not a full science page.

---

# 18. Performance requirements

Target:
- Lighthouse Performance 90+
- Accessibility 95+
- SEO 100 where practical
- Core Web Vitals green

Requirements:
- Static HTML first
- Minimal client JS
- only interactive components hydrate
- hero image preloaded / priority
- below-fold images lazy
- no autoplay background video on mobile
- use `next/image`
- map lazy-loads on intersection
- weather fetch occurs after initial paint
- font subset / preload carefully
- avoid huge third-party scripts
- no ad scripts
- no cookie banner unless analytics / tooling actually requires consent in applicable jurisdictions

---

# 19. Accessibility

- Full keyboard navigation
- Visible focus state
- `prefers-reduced-motion` disables acoustic / parallax animation
- Proper heading hierarchy
- Map has text equivalent
- Color contrast AA minimum
- Alt text for meaningful images
- Decorative cosmic / sound SVGs `aria-hidden`
- Do not rely on sound to explain the acoustic effect
- “Play sound” interactions are opt-in and have captions / text explanation

---

# 20. Analytics

Frontend-only analytics is fine.

Recommended minimal event plan:
- page_view
- click_directions
- click_google_maps
- click_parking
- click_nearby_attraction
- click_status_update
- acoustic_demo_interaction
- map_itinerary_selected
- weather_opened

Track search performance separately in Google Search Console.

Do not over-instrument.

---

# 21. Legal / trust requirements

On Tulsa King page:
> *Tulsa King* is a trademark / copyrighted property of its respective owners. This site is not affiliated with or endorsed by the series or its producers.

## Photography
- Do not launch copyrighted press / Tripadvisor / Atlas Obscura photography as if it belongs to the site.
- Replace development-only images or obtain permission.
- Preserve required Creative Commons attribution.
- Keep attribution metadata with the image record.

## Official-looking design
Premium is good; impersonation is not.
Avoid:
- city seals
- Downtown Tulsa Partnership logo
- “Official Site”
- “Official Visitor Center”
- language implying the website manages the attraction

---

# 22. Google Maps strategy

The website should be eligible to be evaluated as a useful destination resource, but no implementation should attempt to deceive Google about ownership.

Before suggesting the URL to the Google Maps listing:
1. Site is live and indexable.
2. Homepage clearly names the attraction.
3. Address and coordinates are correct.
4. Visitor status is accurate.
5. About page discloses independence.
6. Sources are authoritative.
7. No fake business contact address is used.
8. TouristAttraction schema describes the place.
9. Organization schema describes the publisher separately.

If Google refuses the website edit, do not repeatedly spam edits or attempt to claim the attraction without authorization.

---

# 23. Suggested repository structure

```text
src/
  app/
    page.tsx
    visit/page.tsx
    directions/page.tsx
    parking/page.tsx
    how-it-works/page.tsx
    history/page.tsx
    renovation/page.tsx
    artificial-cloud/page.tsx
    things-to-do-nearby/page.tsx
    map/page.tsx
    faq/page.tsx
    fun-facts/page.tsx
    tulsa-king/page.tsx
    about/page.tsx
    sources/page.tsx
    sitemap.ts
    robots.ts

  components/
    layout/
    hero/
    status/
    acoustic/
    timeline/
    map/
    nearby/
    renovation/
    weather/
    seo/

  content/
    pages/
    facts.ts
    sources.ts

  data/
    site.ts
    site-status.ts
    attractions.ts
    images.ts
    coordinates.ts

  lib/
    seo.ts
    schema.ts
    weather.ts
    maps.ts

public/
  images/
    cotu/
    renovation/
    nearby/
    skyline/
  icons/
```

---

# 24. Shared data objects

## Site status

```ts
export const siteStatus = {
  status: "temporarily-closed",
  label: "Temporarily closed for renovation",
  shortLabel: "Under renovation",
  expected: "Fall 2026",
  lastVerified: "2026-08-25",
  source: "https://downtowntulsa.com/about/programs-and-initiatives/urban-planning/centeroftheuniverse"
}
```

## Coordinates

```ts
export const cotu = {
  name: "Center of the Universe",
  address: "1 S Boston Ave, Tulsa, OK 74103",
  latitude: 36.15689,
  longitude: -95.99153
}
```

One source of truth only.

---

# 25. Content update system

Because the site is static, make time-sensitive content impossible to forget.

Add comments / fields:
- `lastVerified`
- `source`
- `expiresAfter`

For renovation status, build a dev console / build warning if `lastVerified` is older than e.g. 45 days.

Example:
> `WARNING: Center of the Universe access status was last verified 68 days ago.`

No backend needed.

---

# 26. Launch order

## Phase 1 — site ready to index
Launch:
1. Home
2. Visit
3. Directions
4. Parking
5. How It Works
6. History
7. Renovation
8. Artificial Cloud
9. Things to Do Nearby
10. Map
11. FAQ
12. About
13. Sources

## Phase 1.1
Add:
- Fun Facts
- Tulsa King
- richer map loops
- photo gallery

## Phase 2
Only after Search Console shows query impressions:
- create additional pages around actual query demand
- expand pages Google already surfaces
- avoid guessing endlessly at keyword variants

---

# 27. Homepage copy direction

Do not ship this verbatim without editorial pass, but this is the intended feel.

Hero:
> **CENTER OF THE UNIVERSE**  
> **Tulsa, Oklahoma**  
> A small circle. A very strange echo. One of downtown Tulsa’s most wonderfully odd landmarks.

Story transition:
> You do not see the trick first. You hear it.

History:
> Long before anyone called this the Center of the Universe, this was a bridge over Tulsa’s railroad tracks. A fire, a rebuild and one remarkably lucky piece of geometry changed what happened next.

Renovation:
> **The Center is changing. The echo is staying.**

Nearby:
> **The attraction takes minutes. The neighborhood can take the afternoon.**

Artificial Cloud:
> **Then look up.**

These lines should be surrounded by real paragraphs and useful information; do not turn the entire site into one-liner cards.

---

# 28. Research / source index

Use these as primary sources where possible.

## Official / high-authority

### Downtown Tulsa Partnership — Center of the Universe project
https://downtowntulsa.com/about/programs-and-initiatives/urban-planning/centeroftheuniverse

Key facts:
- public-private renovation
- early-1980s pedestrian bridge
- MKSK Studios
- acoustic engineers / preservation
- Artificial Cloud preserved
- Trace removal
- concept renderings

### Downtown Tulsa Partnership — Center of the Universe place page
https://downtowntulsa.com/go/center-of-the-universe

Key fact:
- address: 1 S Boston Avenue

### City of Tulsa — bridge repair project
https://www.cityoftulsa.org/press-room/bridge-repair-project-on-boston-avenue-bridge-to-begin-december-16/

Key facts:
- December 2024 start
- structural work
- inner acoustic walls protected
- above-deck rehabilitation follows
- green space / lighting / paths / landscaping

### City of Tulsa — April 2025 update
https://www.cityoftulsa.org/press-room/boston-avenue-bridge-rehabilitation-update-on-deck-work-underway-access-changes-expected/

Key facts:
- deck work
- expected late-2025 bridge phase
- aesthetic renovation afterward

### Downtown Tulsa Partnership annual-meeting update
https://downtowntulsa.com/release/dtp-annual-meeting-and-announcement-of-safer-together-coalition

Key fact:
- renovated public space anticipated Fall 2026

### Tulsa City-County Library FAQ
https://www.tulsalibrary.org/research/government/tulsa-area-faqs

Key facts:
- 30-inch center
- 13 rows of brick / 8-foot circle
- 1930s original bridge
- Artificial Cloud / Robert Haozous / 72.5 feet

### Oklahoma Film + Music Office
https://www.okfilmmusic.org/location-of-the-month/location-of-the-month-for-november-2022-center-of-the-universe

Key facts:
- Tulsa landmark
- acoustic effect
- Artificial Cloud by Robert Haozous in 1991
- Tulsa King filming reference

## Useful secondary / context

### KJRH — creation / acoustic explanation
https://www.kjrh.com/news/local-news/how-was-the-center-of-the-universe-spot-in-downtown-tulsa-created

### Atlas Obscura
https://www.atlasobscura.com/places/the-center-of-the-universe

### Roadside America
https://www.roadsideamerica.com/tip/1832

### Map / coordinates
OpenStreetMap-based reference:
https://mapcarta.com/28447658

### Downtown Tulsa illustrated map / orientation reference
https://www.tulsa.tours/map

Do not reuse the illustrated map image without permission; use it as research / orientation only.

---

# 29. SEO reference sources

Google Search Central:
- SEO docs: https://developers.google.com/search/docs
- Developer SEO: https://developers.google.com/search/docs/fundamentals/get-started-developers
- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Title links: https://developers.google.com/search/docs/appearance/title-link
- Breadcrumb structured data: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- General structured data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

---

# 30. Weather references

Open-Meteo:
- Docs: https://open-meteo.com/en/docs
- Terms: https://open-meteo.com/en/terms
- Pricing: https://open-meteo.com/en/pricing

National Weather Service:
- API docs: https://www.weather.gov/documentation/services-web-api
- Disclaimer / data use: https://www.weather.gov/disclaimer

---

# 31. Acceptance criteria

The site is launch-ready when:

- [ ] Homepage communicates what COTU is within 5 seconds.
- [ ] Current renovation status is visible and sourced.
- [ ] No page falsely says the attraction is open.
- [ ] Address and coordinates are consistent everywhere.
- [ ] Full mobile experience is excellent.
- [ ] Map works without a paid Maps API key.
- [ ] Weather chip works with graceful failure.
- [ ] Every route has unique metadata.
- [ ] Sitemap and robots are correct.
- [ ] JSON-LD validates.
- [ ] TouristAttraction and publisher Organization are not conflated.
- [ ] Every major page has substantial original content.
- [ ] No thin doorway pages.
- [ ] No copied review text.
- [ ] All production images have rights / attribution documented.
- [ ] Development-only images are removed or explicitly approved.
- [ ] Search Console property is verified.
- [ ] Sitemap submitted.
- [ ] Tier 1 URLs inspected.
- [ ] Lighthouse / Core Web Vitals targets are met.
- [ ] 404 page exists and keeps the same visual language.
- [ ] Analytics only tracks useful interactions.
- [ ] Site remains useful even if JavaScript fails, except map/weather enhancements.

---

# 32. Final design principle

The project should feel larger than a page about a weird echo, but never lose the weird echo.

A visitor should leave the site thinking:

> “I understand what this place is, I know how to find it, I know what is happening with the renovation, and now I want to walk around that part of Tulsa.”

That is the product.
