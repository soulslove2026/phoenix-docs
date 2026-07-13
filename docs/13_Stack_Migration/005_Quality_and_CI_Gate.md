---
Category: Stack Migration
Version: 3.2.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Last Updated: 2026-07-13
---
# MIG-005 — Quality and CI Gate

CI uses Node.js 24 and PostgreSQL 18, then executes `npm ci`, strict type checking, repository checks, automated tests, production build, and OCI container build.

The migration is Candidate until the real repository workflow succeeds. Failed type, test, database, build, or container evidence blocks Identity Slice 1.
