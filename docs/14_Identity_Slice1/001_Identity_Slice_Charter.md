# IDN-001 — Identity Slice Charter

## Outcome

A person can create an account, log in, retrieve the authenticated account, and log out through a durable PostgreSQL-backed identity path.

## Included

Registration, login, opaque sessions, current-user lookup, logout, migration, audit-safe logs, unit tests, integration tests, OpenAPI contracts.

## Deferred

Verification, recovery, MFA, passkeys, federation, device management, session rotation, administrative identity, and production rate limiting.

## Acceptance

The slice must pass schema validation, migration, unit tests, PostgreSQL integration tests, strict TypeScript checks, production build, and Docker build.
