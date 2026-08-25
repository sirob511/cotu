# Center of the Universe Tulsa

Independent visitor guide for Tulsa's Center of the Universe, built with
Next.js App Router, TypeScript and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run check
```

## Architecture

The current application is static-first. Its structure also reserves explicit
boundaries for a future backend:

```text
src/
  app/                 Pages, layouts, route handlers and server actions
    api/               Future HTTP APIs and third-party webhooks
  components/          UI components and isolated client interactions
  data/                Repository-owned static editorial data
  lib/                 Environment-neutral utilities safe to share
  server/              Server-only application and infrastructure code
    auth/              Authentication and authorization adapters
    db/                Database client and transaction setup
    http/              HTTP error and response contracts
    repositories/      Persistence interfaces and implementations
    services/          Business workflows and use cases
tests/
  integration/         Backend and persistence integration tests
```

See [docs/backend-architecture.md](docs/backend-architecture.md) before adding
an API, database, authentication or server-side mutation.

## Maps

All map surfaces use the shared Google Maps walking-route embed in
`src/components/MapClient.tsx`. The current integration uses Google Maps'
share embed and does not require an API key or backend service. Orbit controls
update both the embedded route and the direct Google Maps handoff URL.

## Content and status

Time-sensitive access information is centralized in
`src/data/site-status.ts`. Development artwork is registered in
`src/data/images.ts` and must remain visibly labeled until approved for public
launch.
