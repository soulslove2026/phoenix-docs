---
Category: Production Stack Ratification
Version: 3.1.0
Status: Ratified
Maturity: Level 3 — Engineering Standard
Owner: Phoenix Architecture Authority
Last Updated: 2026-07-13
---
# STACK-003 — Runtime, Framework, and API Standard

## Runtime

Production uses an Active or Maintenance LTS Node.js release only. The ratified initial line is Node.js 24 LTS. Runtime patches are security maintenance, not feature projects.

## TypeScript

- strict mode enabled;
- no implicit `any`;
- ESM modules;
- explicit public return types at boundaries;
- generated types do not replace runtime validation;
- domain values use constrained types and constructors.

TypeScript 5.9 is selected for initial stability. TypeScript 6.0 is a planned upgrade only after Fastify, test, lint, build, and declaration compatibility pass.

## Fastify

- one root application factory;
- each bounded context registers an encapsulated plugin/module;
- JSON Schema validates input and serializes output;
- hooks implement technical controls, not hidden business policy;
- dependency injection remains explicit;
- handlers call application use cases and do not contain domain rules.

## HTTP API

- REST/JSON for the first slices;
- OpenAPI generated from reviewed schemas;
- RFC 9457-style problem details for errors;
- idempotency keys for retriable state-changing operations where needed;
- versioning through compatibility first, URI version only when necessary;
- request IDs and correlation IDs propagated.

## Realtime

WebSocket or provider callbacks are adapters. Authoritative room membership and roles remain in the owning context. Media transport is not embedded into domain logic.
