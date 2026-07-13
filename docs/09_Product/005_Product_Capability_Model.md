---
Document ID: PRD-005
Knowledge ID: PHX-PRD-005
Category: Product Foundation
Version: 2.3.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Product Architecture
Authority: Phoenix Product Foundation
Depends On: PRD-003; PRD-004; ARC-002; ARC-004; DPL-012; SEC-004
Required By: product design, engineering, data, trust and safety, operations, growth, AI engineering
Review Trigger: strategy change, MVP scope change, major market learning, material safety incident, architecture constraint change
Last Updated: 2026-07-13
---

# PRD-005 — Product Capability Model

## Executive Summary

The Product Capability Model connects user value to bounded contexts, data ownership, security authority, operations, and measurable outcomes. Capabilities are durable abilities; features are particular expressions of those abilities.

## Capability Layers

### Experience Capabilities

- onboarding and account access;
- profile and self-expression;
- discovery and recommendation;
- live voice participation;
- messaging and relationship continuity;
- community participation;
- creator and host experience;
- gifting and value exchange;
- reporting, blocking, and appeal;
- notification and preference control.

### Trust Capabilities

- identity assurance;
- session and account protection;
- policy enforcement;
- abuse detection and case management;
- moderation and appeal;
- fraud and transaction risk;
- privacy controls;
- user safety education;
- audit and investigation.

### Platform Capabilities

- experimentation and feature control;
- product analytics;
- localization and translation;
- search and indexing;
- media handling;
- notification delivery;
- eventing and data contracts;
- observability and incident response;
- configuration and policy management.

### Operator Capabilities

- support case handling;
- moderation operations;
- creator support;
- payment reconciliation;
- security operations;
- reliability operations;
- market and policy configuration;
- audit review.

## Capability-to-Context Mapping

| Capability | Primary owner | Supporting contexts |
|---|---|---|
| Account access | Identity | Security, Notification, Audit |
| Profile | Account/Profile | Media, Trust, Search |
| Discovery | Discovery | Social Graph, Content/Room, Trust, Analytics |
| Live voice | Voice Rooms | Identity, Social, Trust, Notification |
| Messaging | Messaging | Identity, Social, Trust, Notification |
| Relationship continuity | Social Graph | Messaging, Discovery, Notification |
| Gifting | Economy | Identity, Fraud/Risk, Provider Integration, Audit |
| Reporting | Trust and Safety | Identity, Content/Room, Messaging, Audit |
| Experimentation | Product Platform | Analytics, Configuration, owning domain |
| AI assistance | Owning domain | AI Platform, Security, Trust, Data Platform |

## Capability Record

Every capability requires:

- capability ID and name;
- user problem and segment;
- owner;
- bounded contexts;
- source of truth;
- permissions;
- data classification;
- events and contracts;
- security and abuse model;
- operational owner;
- metrics and guardrails;
- lifecycle state;
- dependencies;
- release gate.

## Capability Maturity

| Level | Meaning |
|---|---|
| C0 Proposed | Problem and hypothesis identified |
| C1 Defined | Journey, owner, and boundaries documented |
| C2 Ready | Acceptance, risks, data, operations, and metrics approved |
| C3 Launched | Controlled production rollout |
| C4 Validated | Outcome and guardrail evidence supports continuation |
| C5 Scaled | Proven operation across intended scale or markets |
| C6 Retired | Safely removed with migration and historical record |

## Cross-Capability Invariants

1. Identity is never inferred solely from client claims.
2. Authorization belongs to the protected resource owner.
3. Financial truth remains in the authoritative ledger.
4. Reporting and blocking are available at relevant harm surfaces.
5. User preference and consent are not silently overridden by experiments.
6. AI actions remain attributable and bounded.
7. Derived discovery state never becomes authoritative account or financial truth.
8. Every material capability has an operational shutdown path.

## Decision Matrix

| Question | Decision rule |
|---|---|
| Is this a new capability or feature? | New durable ability or ownership boundary indicates capability |
| Where should it live? | Context owning invariant and source of truth |
| Can a shared platform own it? | Only if domain semantics remain with owning context |
| Can it launch globally? | Only when market, safety, operations, localization, and provider dependencies are ready |
| Can it use shared data? | Through governed contract, minimum fields, explicit purpose |
| Can AI execute it? | Only with bounded authority and reversible impact |

## Anti-Patterns

- A “miscellaneous” service owning unrelated capabilities.
- Shared databases used as integration.
- Product teams bypassing domain invariants for speed.
- Capabilities without operational owners.
- Platform teams absorbing business policy.
- Metrics that cannot be attributed to a capability.
- Permanent experimental infrastructure inside user-critical paths without ownership.

## AI Context

AI is not one universal capability. Translation, ranking, moderation assistance, creation, and support each belong to the domain whose outcome they affect, while shared AI infrastructure provides model access, evaluation, safety, observability, and cost governance.

## Operational Considerations

Capability health includes user outcomes, quality, latency, availability, abuse, support demand, cost, and reversibility.

## Implementation Notes

Represent capabilities in a machine-readable registry in a future release so roadmap, ownership, APIs, data contracts, security controls, and metrics can be validated automatically.

## Future Evolution

The model can expand into a product architecture catalog linked to code repositories, service ownership, APIs, events, dashboards, incidents, and deprecation plans.

## Architectural Integrity Check

- Does every capability have one accountable owner?
- Is the source of truth explicit?
- Are supporting contexts integrated through contracts?
- Are operations and shutdown paths defined?
- Is capability maturity evidence-based?

## References

- ARC-002 Bounded Contexts
- ARC-004 Capability Map
- DPL-012 Data Ownership
- SEC-004 Authorization
