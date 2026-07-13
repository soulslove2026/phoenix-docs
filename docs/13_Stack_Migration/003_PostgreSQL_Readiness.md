---
Category: Stack Migration
Version: 3.2.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Last Updated: 2026-07-13
---
# MIG-003 — PostgreSQL Readiness

PostgreSQL 18 is introduced as an optional bootstrap dependency and as a required CI service. The application exposes database availability through readiness while preserving optional local startup.

No domain tables or migrations are created. Identity Slice 1 will introduce the first owned schema and migration after this migration is verified.
