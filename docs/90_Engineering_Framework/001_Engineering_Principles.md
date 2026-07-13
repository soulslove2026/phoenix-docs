# PEF-001 — Phoenix Engineering Principles

**Document ID:** PEF-001  
**Version:** 1.1.0  
**Status:** Ratified  
**Maturity:** Level 3 — Engineering Standard  
**Owner:** Phoenix Architecture Council  

## Executive Summary

Phoenix engineering optimizes for durable truth, explicit ownership, safe evolution, user trust, and operational learning. Speed matters, but speed that creates hidden coupling or unowned risk is treated as delayed failure.

## Principles

1. **Truth before convenience.** Authoritative facts and invariants are explicit.
2. **One owner per decision and data fact.** Shared access does not mean shared authority.
3. **Boundaries before distribution.** A modular monolith is preferable to premature microservices.
4. **Strongest consistency needed, not strongest possible.** Correctness is selected by invariant.
5. **Compatibility is a feature.** Systems evolve without coordinated global deployment.
6. **Security and privacy by default.** Least privilege and minimization begin at design time.
7. **Observability is part of implementation.** An unobservable critical workflow is incomplete.
8. **Failures are designed.** Timeout, retry, compensation, and reconciliation are first-class states.
9. **Derived data is rebuildable.** Search, analytics, ranking, and caches do not become hidden truth.
10. **AI remains governed.** Models do not own policy or accountability.
11. **Simple systems earn complexity.** Complexity requires evidence and ownership.
12. **Production evidence closes the loop.** Documents, tests, and architecture evolve from real outcomes.

## Decision Matrix

| Decision pressure | Preferred response | Escalation trigger |
|---|---|---|
| Faster launch vs missing invariant | Define invariant first | Financial, security, or irreversible impact |
| New service vs module | Start with module | Independent scaling, ownership, or failure isolation proven |
| Shared database access | Publish contract/read model | Any cross-domain mutation request |
| New technology | Use existing default | Measurable gap and migration plan |
| AI automation | Human-supervised first | High-impact decision or uncertain evaluation |
| Availability vs consistency | Classify invariant | Money, permissions, identity, enforcement |

## Engineering Rules

- Every critical component has an owner, SLO, runbook, and deprecation plan.
- Every architecture decision records alternatives and rejected options.
- Every external boundary has validation, authorization, observability, and failure behavior.
- Every irreversible action has confirmation, audit, or compensation appropriate to risk.
- Every dependency must have timeout, retry policy, and fallback or failure state.
- Every experiment has a stop condition and data-use policy.

## Anti-Patterns

- Resume-driven architecture.
- Shared ownership with no final accountable person.
- “Temporary” bypasses without expiry.
- Hidden business logic in database triggers or clients.
- Scaling by adding distributed systems before measuring bottlenecks.
- Treating a model score as a policy decision.
- Declaring success because a deployment completed.

## Review Questions

- Which user or business invariant does this protect?
- Which team owns failure at 03:00?
- What is the rollback or compensation path?
- What data is authoritative and what is derived?
- What happens when dependencies are slow, duplicated, or unavailable?
- Can the design be explained and tested without private tribal knowledge?

## Architectural Integrity Check

A proposal passes only when ownership, invariants, boundaries, failure modes, security, observability, migration, and long-term cost are explicit.
