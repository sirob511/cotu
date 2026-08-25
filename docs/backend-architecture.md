# Backend Architecture

The site does not need a backend today. This document defines where future
server behavior belongs so backend work can be added without coupling the UI
to a database, identity provider or external service.

## Dependency flow

```text
Browser
  -> Server Component, Server Action or Route Handler
  -> Service
  -> Repository or integration adapter
  -> Database or external API
```

Dependencies move inward through this flow. Repository and integration details
must not leak into React components, public API contracts or business services.

## Boundaries

### `src/app`

Keep HTTP and framework concerns here.

- Server Components perform internal reads by calling server services directly.
- Server Actions handle mutations initiated by this website's UI.
- Route Handlers under `src/app/api` are for public HTTP APIs, webhooks and
  external clients.
- Route Handlers validate and translate requests, call a service, and translate
  the result into an HTTP response. They should not contain database queries or
  business rules.

Do not create an internal API round trip when a Server Component can call the
service directly.

### `src/server`

Everything under this directory is server-only. Modules that contain secrets,
database access or privileged integrations must import `server-only` directly
or depend on a module that does.

- `services`: application use cases and business workflows.
- `repositories`: persistence interfaces and concrete adapters.
- `db`: database client initialization, transactions and migration notes.
- `auth`: session, identity and authorization adapters.
- `http`: shared API response and error contracts.
- `env.ts`: the only direct access point for new server environment variables.

### `src/lib` and `src/data`

`src/lib` is reserved for environment-neutral helpers that are safe to import
from either server or client code. `src/data` contains checked-in editorial data
and is not a substitute for a persistence layer once content becomes dynamic.

## Request rules

1. Parse untrusted input at the transport boundary.
2. Authorize before invoking a privileged service operation.
3. Keep business decisions in a service, not in a route or component.
4. Access storage through a repository or integration adapter.
5. Return stable, explicit response shapes from public APIs.
6. Log operational context without logging secrets or personal data.
7. Make webhook handling idempotent before accepting production traffic.

## Environment variables

Add server variables to `.env.example` without real values. Read them through
`src/server/env.ts`; never read secret variables from a Client Component or
prefix them with `NEXT_PUBLIC_`.

## Database and authentication

No ORM, database or authentication provider is selected yet. Choose them only
when concrete product requirements exist. When introduced:

- keep schema and migrations in a top-level provider directory such as
  `prisma/` or `drizzle/`;
- initialize the client in `src/server/db`;
- implement access behind `src/server/repositories`;
- keep provider-specific identity code in `src/server/auth`;
- test repository and authorization behavior in `tests/integration`.

## API evolution

Do not version internal Server Actions. Introduce `/api/v1` only when an API is
intended for external consumers and requires a compatibility contract.

Adding the first Route Handler or dynamic server read will change the affected
route from static output to a runtime-backed route. The rest of the site can
remain statically generated.
