# Server-only code

This directory is the backend boundary for the application. Code here may use
secrets, databases, authentication providers and privileged external APIs.

Do not import modules from this directory into Client Components. New server
entry points should call a service rather than importing database or provider
clients directly.
