# PEF-005 — Engineering Maturity Model

**Document ID:** PEF-005  
**Version:** 1.1.0  
**Status:** Ratified  
**Maturity:** Level 3 — Engineering Standard  
**Owner:** Engineering Enablement  

## Purpose

Provide a common language for the maturity of Phoenix documents, designs, and capabilities. Maturity measures evidence, not optimism.

## Levels

### Level 1 — Concept

The problem, opportunity, and owner are identified. Assumptions and open questions may remain. No implementation commitment is implied.

**Exit criteria:** defined scope, owner, users, problem statement, major risks, and next decision.

### Level 2 — Engineering Specification

The design is detailed enough for implementation planning. Invariants, boundaries, contracts, security, operations, migration, and alternatives are explicit.

**Exit criteria:** reviewed specification, traceability, acceptance criteria, risk owners, and implementation plan.

### Level 3 — Engineering Standard

The guidance is reusable and normative across Phoenix. Exceptions require approval.

**Exit criteria:** broad review, enforcement or review mechanism, examples, exception process, and versioning owner.

### Level 4 — Reference Architecture

A validated reusable design combines standards, components, interactions, deployment, security, operations, and implementation guidance.

**Exit criteria:** working reference implementation or validated prototype, performance assumptions, failure tests, and migration guidance.

### Level 5 — Production Proven

The capability has sustained production evidence under representative load and incidents.

**Exit criteria:** SLO history, incident learning, recovery evidence, security review, capacity data, user/business outcomes, and updated documentation.

## Promotion Rules

- Promotion requires evidence for every exit criterion or an explicit approved exception.
- Code existence does not promote maturity automatically.
- A document may be demoted when assumptions are invalidated or ownership disappears.
- Production proof is capability-specific and time-bounded; major redesign may reset maturity.
- Maturity applies separately to documentation, implementation, operations, and organizational ownership when useful.

## Decision Matrix

| Intended action | Minimum maturity |
|---|---|
| Explore idea | Level 1 |
| Plan implementation | Level 2 |
| Enforce organization-wide rule | Level 3 |
| Reuse as default architecture | Level 4 |
| Claim operational proof | Level 5 |

## Anti-Patterns

- Promoting by calendar date.
- Treating a polished document as production evidence.
- Keeping Level 3 authority after the owner leaves.
- Calling a one-off design a reference architecture.
- Hiding unresolved risks to obtain promotion.

## Review Cadence

Level 1 and 2 items are reviewed at milestones. Level 3 standards have scheduled review triggers. Level 4 and 5 items are reviewed after incidents, major scale changes, security findings, and material platform changes.
