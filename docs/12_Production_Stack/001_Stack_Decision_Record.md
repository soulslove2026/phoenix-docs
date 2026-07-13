---
Category: Production Stack Ratification
Version: 3.1.0
Status: Ratified
Maturity: Level 3 — Engineering Standard
Owner: Phoenix Architecture Authority
Last Updated: 2026-07-13
---
# STACK-001 — Production Stack Decision Record

## Decision

Phoenix adopts a TypeScript/Fastify/PostgreSQL production baseline on Node.js LTS. The first deployable remains a modular monolith. Business contexts are isolated by modules, contracts, ownership, and persistence boundaries rather than premature network distribution.

## Why this stack

The platform needs rapid product iteration, strong types, efficient JSON APIs, mature asynchronous I/O, reliable PostgreSQL transactions, accessible hiring, and a path to realtime and service extraction. Fastify provides schema-first validation/serialization and encapsulated plugins, which align with bounded contexts. PostgreSQL provides authoritative transactional truth for identity and later economy workflows.

## Ratified versions

| Component | Decision | Upgrade rule |
|---|---|---|
| Node.js | 24 LTS | latest security patch in the 24 LTS line; reassess before EOL |
| TypeScript | 5.9 | pin exact compiler; evaluate 6.x after toolchain compatibility |
| Fastify | 5.x | current supported minor/patch with compatibility tests |
| PostgreSQL | 18 | current supported minor; never run an outdated minor in production |
| npm | lockfile required | update through reviewed dependency PRs |

## Constraints

1. No framework may own domain rules.
2. JSON Schema is the transport contract source for HTTP validation and serialization.
3. PostgreSQL is authoritative; caches and projections are disposable.
4. Cross-context table access is prohibited.
5. Async delivery is at-least-once with idempotent consumers.
6. A broker is not introduced until evidence justifies operational cost.
7. Voice media transport stays behind a provider adapter; Phoenix owns room truth and authorization.

## Rejected defaults

- NestJS as the initial framework: useful structure but heavier abstraction and decorator coupling than required.
- Go as the primary product backend: strong runtime characteristics, but slower initial product iteration and reduced shared typing with clients for the founding phase.
- PostgreSQL plus many specialized stores on day one: unnecessary operational complexity.
- Kafka as a default event backbone: premature for the first slices.
- Serverless-only deployment: poor fit as the sole model for long-lived realtime and predictable lifecycle control.

## Review triggers

Measured latency or throughput limits, team growth, Node LTS lifecycle, sustained context isolation needs, regional requirements, or operational incidents.
