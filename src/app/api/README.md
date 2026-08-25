# API transport

Add Route Handlers here only for public APIs, webhooks or external clients.
Website reads should normally call `src/server/services` from Server Components,
and website mutations should normally use Server Actions.

Keep handlers thin:

1. Validate and authenticate the request.
2. Call one application service.
3. Translate the result into a stable HTTP response.

Do not query a database directly from a Route Handler.
