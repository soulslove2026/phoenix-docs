# Architecture Foundation — Read First

> **Document ID:** ARC-000
> **Category:** Architecture Foundation
> **Version:** 2.0.0
> **Status:** Ratified
> **Maturity:** Foundation

## Purpose

This directory defines the first authoritative architecture foundation for Phoenix. It translates governance, data, and engineering principles into system boundaries, capabilities, relationships, and an initial landscape.

## Reading Order

1. ARC-001 — Architecture Vision
2. ARC-002 — Bounded Contexts
3. ARC-003 — Domain Map
4. ARC-004 — Capability Map
5. ARC-005 — System Landscape

## Architectural Position

Phoenix begins as a **modular platform architecture** with strong bounded-context ownership. The initial implementation may use a modular monolith where operationally sensible, but boundaries, contracts, data ownership, and extraction criteria must be explicit from day one.

## Mandatory Rules

- Domain boundaries follow business invariants and ownership, not team fashion or database tables.
- Cross-context interaction uses governed APIs or integration events.
- Direct cross-context database access is prohibited.
- Economy, identity, trust, moderation, and audit receive stronger isolation than low-risk social features.
- AI assists decisions but does not silently become policy authority.
- Architecture must include failure, security, privacy, operability, and migration paths.
- Exactly-once delivery is not assumed; idempotency is designed.

## Scope of Release 1

Release 1 establishes the vision, initial contexts, domain relationships, capability map, and high-level landscape. Detailed communication, deployment, scalability, failure-isolation, and reference-architecture specifications are reserved for Architecture Foundation Release 2.

## Release 2 Specifications

- [ARC-006 — Communication Patterns](006_Communication_Patterns.md)
- [ARC-007 — Deployment Philosophy](007_Deployment_Philosophy.md)
- [ARC-008 — Scalability Strategy](008_Scalability_Strategy.md)
- [ARC-009 — Failure Isolation](009_Failure_Isolation.md)
- [ARC-010 — Reference Architecture](010_Reference_Architecture.md)
