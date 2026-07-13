---
Category: Production Stack Ratification
Version: 3.1.0
Status: Ratified
Maturity: Level 3 — Engineering Standard
Owner: Phoenix Architecture Authority
Last Updated: 2026-07-13
---
# STACK-008 — Identity Slice 1 Readiness Gate

Identity Slice 1 begins only after all items below are evidenced.

## Stack evidence

- Node.js 24 LTS runtime active;
- TypeScript strict build passes;
- Fastify health/readiness parity passes;
- PostgreSQL 18 development integration passes;
- migration harness passes;
- OpenAPI artifact generated;
- structured logs and trace context verified;
- container runs non-root;
- CI and scans pass.

## Identity design evidence

- account, credential, session, device-risk, and recovery boundaries defined;
- authentication separated from authorization;
- account enumeration controls;
- passwordless-first strategy and password fallback decision;
- session rotation and revocation model;
- rate-limit and abuse model;
- audit events and retention;
- privacy classification;
- API and event contracts;
- migration and rollback plan.

## First Identity vertical slice

The first identity slice should create an account identifier and a secure development-only authentication path, issue a revocable session, expose current-session status, and support logout—without claiming complete recovery, MFA, federation, or production readiness.
