---
Category: Production Stack Ratification
Version: 3.1.0
Status: Ratified
Maturity: Level 3 — Engineering Standard
Owner: Phoenix Architecture Authority
Last Updated: 2026-07-13
---
# STACK-004 — Data and Messaging Standard

## PostgreSQL

PostgreSQL 18 is the authoritative relational database. Deploy the current supported minor and apply security/bug-fix updates through controlled rollout.

## Access pattern

Phoenix uses explicit repositories and SQL-first adapters. A query builder may be introduced only if it preserves SQL visibility, migration ownership, transactions, and domain boundaries. A global active-record model is prohibited.

## Schema ownership

- each bounded context owns its tables and migrations;
- database roles limit access;
- cross-context reads use contracts or replicated projections;
- identifiers are opaque and globally unique;
- optimistic concurrency is used where state races matter.

## Migrations

- expand–migrate–contract;
- backward-compatible deploy ordering;
- no destructive change in one release;
- checksum and execution history;
- staging rehearsal;
- explicit rollback or compensation limits.

## Async baseline

The first asynchronous mechanism is a transactional outbox stored with authoritative state and processed by an idempotent worker. PostgreSQL is not treated as an unlimited message broker.

## Deferred infrastructure

- Redis: add only for measured cache, rate-limit, ephemeral coordination, or presence need.
- NATS JetStream or equivalent: evaluate when independent consumers, throughput, replay, or failure isolation justify it.
- Search engine: add after discovery/search requirements exceed PostgreSQL capabilities.

## Consistency

Identity, session, authorization grants, idempotency, and future ledger truth use strong transactional consistency. Search, analytics, and recommendations use derived eventual consistency.
