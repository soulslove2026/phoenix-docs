---
Category: Stack Migration
Version: 3.2.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Last Updated: 2026-07-13
---
# MIG-001 — Migration Charter

## Goal

Move Slice 0 to Node.js 24 LTS, TypeScript 5.9, Fastify 5, PostgreSQL 18 readiness, JSON Schema/OpenAPI, and the approved CI/container baseline without introducing product-domain logic.

## Completion Evidence

- package lock committed;
- TypeScript strict compilation succeeds;
- Fastify injection tests pass;
- OpenAPI document is generated;
- PostgreSQL service is available in CI;
- OCI container builds;
- rollback remains possible because no domain migration exists.

## Gate

Identity Slice 1 remains blocked until GitHub Actions passes in `phoenix-core`.
