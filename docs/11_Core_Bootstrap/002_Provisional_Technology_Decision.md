---
Document ID: CORE-002
Category: Core Bootstrap
Version: 3.0.0
Status: Ratified
Maturity: Level 2 — Bootstrap Specification
Owner: Phoenix Core Engineering
Authority: Phoenix Core Bootstrap
Depends On: IMP-001; IMP-002; IMP-008; IMP-009
Last Updated: 2026-07-13
---
# CORE-002 — Provisional Technology Decision

## Decision

Slice 0 uses Node.js ECMAScript modules with no runtime framework dependencies.

## Rationale

The bootstrap proves engineering mechanics, not the final backend stack. The standard library is enough for HTTP lifecycle, configuration, logging, tests, and container execution.

## Status

This decision is provisional. Before Identity Slice 1, Phoenix must ratify the production stack against team skill, realtime suitability, type safety, performance, ecosystem maturity, security, observability, testing, cost, and long-term evolution.

## Constraints

- Zero runtime dependencies in Slice 0.
- Product logic cannot depend on bootstrap-specific details.
- The service must remain easy to replace.

## Deferred Alternatives

TypeScript frameworks, Go, Java/Kotlin, Rust, Python, and serverless-only designs remain open.
