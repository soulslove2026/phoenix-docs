---
Category: Production Stack Ratification
Version: 3.1.0
Status: Ratified
Maturity: Level 3 — Engineering Standard
Owner: Phoenix Architecture Authority
Last Updated: 2026-07-13
---
# STACK-007 — Bootstrap Migration Plan

## Objective

Migrate the verified Node standard-library Slice 0 into the ratified TypeScript/Fastify stack without introducing Identity business logic.

## Steps

1. Move runtime target to Node.js 24 LTS.
2. Add pinned TypeScript 5.9 compiler and strict configuration.
3. Add Fastify 5 and schema-first health/readiness routes.
4. Preserve request IDs, security headers, structured logging, configuration validation, graceful shutdown, non-root container, and CI.
5. Add OpenAPI generation and problem-details errors.
6. Add architecture-boundary test scaffolding.
7. Add PostgreSQL 18 development service and migration harness, but no identity tables until Slice 1.
8. Add OpenTelemetry interfaces with local no-op or console-safe configuration.
9. Execute tests and container build.
10. Record migration evidence and tag the stack baseline.

## Acceptance

The migrated bootstrap must be behaviorally compatible with v3.0.1, have green CI, and introduce no user-facing endpoint beyond bootstrap diagnostics.

## Rollback

The verified v3.0.1 bootstrap commit remains the rollback point until the new stack baseline is verified.
