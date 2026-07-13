---
Document ID: IMP-005
Knowledge ID: PHX-IMP-005
Category: Implementation Planning
Version: 2.4.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Delivery Architecture
Authority: Phoenix Implementation Planning
Depends On: IMP-003; IMP-004; ARC-006 through ARC-010; DPL-015 through DPL-019
Required By: phoenix-core repositories, delivery teams, platform engineering, security, data, QA, operations
Review Trigger: implementation topology change, major dependency change, release-model change, security incident, delivery evidence contradicts assumptions
Last Updated: 2026-07-13
---

# IMP-005 — Sequencing and Dependency Model

## Executive Summary

Phoenix sequencing minimizes dependency risk by delivering thin foundations immediately before the slices that need them. Dependencies are explicit, directional, owned, and validated.

## Sequence Principles

1. Establish executable skeleton before product complexity.
2. Implement identity before protected user journeys.
3. Build authoritative room state before discovery projections.
4. Build safety controls alongside participation.
5. Add async propagation after transactional truth exists.
6. Add optimization after correctness and measurement.
7. Add economy only after identity, audit, ledger, fraud, and operations.
8. Add AI only after deterministic fallback and evaluation.

## Recommended Sequence

```text
Phase 0: Repositories, CI, environments, observability
Phase 1: Identity, profile, sessions, audit
Phase 2: Room creation and authoritative room state
Phase 3: Discovery projection and simple ranking
Phase 4: Join/listen/leave realtime flow
Phase 5: Speaker roles and host moderation
Phase 6: Follow, notifications, return loop
Phase 7: Reports, cases, enforcement, appeal foundation
Phase 8: Reliability hardening and controlled MVP rollout
Phase 9: Conditional messaging, AI translation, creator/economy capabilities
```

## Dependency Classes

| Class | Meaning |
|---|---|
| Hard | Slice cannot function or remain safe without it |
| Soft | Improves quality but has an acceptable temporary fallback |
| Operational | Required for support, monitoring, or incident response |
| Regulatory/Market | Required for a specific launch scope |
| Evidence | Requires validated user or system learning |
| Conditional | Activated only after a named gate |

## Dependency Record

Each dependency has:

- provider and consumer;
- contract;
- owner;
- required version;
- failure behavior;
- fallback;
- readiness evidence;
- review date;
- removal or replacement plan.

## Critical Dependency Rules

- No direct dependency on another context’s database.
- No critical path on an unowned third-party integration.
- External provider dependencies require timeout, retry, circuit breaking, idempotency, and operational escalation as applicable.
- A slice may not silently depend on future moderation or support capability.
- Feature flags do not replace missing data compatibility.

## Parallelization

Parallel work is safe when:

- contracts are approved;
- ownership is separate;
- integration environments exist;
- test doubles match contracts;
- changes remain backward compatible;
- integration milestones are frequent.

Parallel work is unsafe when teams are independently inventing the same domain model or unresolved policy.

## Decision Matrix

| Situation | Action |
|---|---|
| Hard dependency not ready | Re-sequence or reduce slice |
| Soft dependency delayed | Use explicit fallback |
| External provider uncertain | Build adapter and simulator |
| Data contract unstable | Keep consumer behind compatibility layer |
| Security gate unresolved | Block implementation or rollout |
| Evidence gate unresolved | Run research/prototype, not production build |
| Team capacity constrained | Reduce concurrent slices |

## Anti-Patterns

- Gantt plans that hide architectural dependencies.
- Starting every epic simultaneously.
- Creating temporary direct database access.
- Depending on feature flags to solve incompatible contracts.
- Assuming third-party sandbox behavior matches production.
- Deferring integration until the end.
- Treating staffing as infinitely parallel.

## Operational Considerations

Dependency status must be visible in the project board and release review. Critical external dependencies need owner, escalation, and replacement strategy.

## Architectural Integrity Check

- Are hard dependencies explicit?
- Can delayed dependencies degrade safely?
- Is the sequence aligned with authoritative truth?
- Are external integrations isolated?
- Does parallelization preserve ownership?

## References

- ARC-006 Communication Patterns
- DPL-018 Data Contracts
- DPL-019 Event Modeling
