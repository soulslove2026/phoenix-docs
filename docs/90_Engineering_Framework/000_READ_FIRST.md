# Phoenix Engineering Framework — Read First

**Framework ID:** PEF-000  
**Version:** 1.1.0  
**Status:** Ratified Foundation  
**Owner:** Phoenix Architecture Council  

## Purpose

The Phoenix Engineering Framework defines how Phoenix engineering knowledge is created, reviewed, implemented, measured, and evolved. It governs architecture, documentation, code, data, AI, security, testing, operations, and production learning.

## Framework Documents

- PEF-001 — Engineering Principles
- PES-001 — Documentation Standard
- PES-002 — Architecture Standard
- PES-003 — AI Engineering Standard
- PEF-005 — Engineering Maturity Model

## Authority

The framework does not replace domain specifications. It defines the quality and decision rules those specifications must satisfy. Conflicts are resolved by the Phoenix Constitution, ratified governance decisions, and explicit ADRs.

## Required Workflow

1. Define the problem and owner.
2. Identify affected invariants and data.
3. Record alternatives and trade-offs.
4. Produce a reviewable specification.
5. Approve architecture and security implications.
6. Implement with tests and observability.
7. Validate in production.
8. Feed evidence back into documentation.

## Implementation Gate

`phoenix-core` implementation may begin for a capability only when the relevant governance, data, architecture, and security foundations have reached at least Level 2 — Engineering Specification and the implementation risks are accepted.

## Living Architecture

Documents are versioned knowledge assets. They must be updated when production evidence invalidates an assumption. A document is not promoted to “Production Proven” merely because code exists.
