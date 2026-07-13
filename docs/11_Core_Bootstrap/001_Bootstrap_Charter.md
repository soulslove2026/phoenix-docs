---
Document ID: CORE-001
Category: Core Bootstrap
Version: 3.0.0
Status: Ratified
Maturity: Level 2 — Bootstrap Specification
Owner: Phoenix Core Engineering
Authority: Phoenix Core Bootstrap
Depends On: IMP-001 through IMP-010; ARC-010; SEC-001 through SEC-007; PRD-008
Last Updated: 2026-07-13
---
# CORE-001 — Bootstrap Charter

## Executive Summary

Slice 0 establishes the minimum executable foundation for `phoenix-core` before product logic exists.

## Objectives

1. Clean standalone repository.
2. Deterministic local run path.
3. Health and readiness endpoints.
4. Validated runtime configuration.
5. Structured logs and request correlation.
6. Automated tests and CI.
7. Non-root container artifact.
8. Reproducible release metadata.
9. Security and operational ownership.
10. Documentation-to-code traceability.

## Non-Goals

No authentication, database, voice room, discovery, messaging, economy, cloud deployment, microservice split, or production-readiness claim.

## Completion Rule

A clean checkout must pass checks and tests, start successfully, answer health/readiness, reject invalid configuration, build a container, and expose release metadata.

## Anti-Patterns

- Adding product features before Slice 0 verification.
- Premature service fragmentation.
- Hidden manual release steps.
- Calling generated files proof without executing them.

## Integrity Check

The bootstrap must remain minimal, executable, verifiable, replaceable, and consistent with ratified bounded contexts.
