---
Document ID: PRD-004
Knowledge ID: PHX-PRD-004
Category: Product Foundation
Version: 2.3.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Product Architecture
Authority: Phoenix Product Foundation
Depends On: PRD-001 through PRD-003; ARC-010; SEC-001 through SEC-007
Required By: product design, engineering, data, trust and safety, operations, growth, AI engineering
Review Trigger: strategy change, MVP scope change, major market learning, material safety incident, architecture constraint change
Last Updated: 2026-07-13
---

# PRD-004 — MVP Scope and Prioritization

## Executive Summary

The Phoenix MVP is a learning system, not a miniature copy of the final platform. It must prove that users can safely discover, join, participate in, and continue meaningful social experiences.

Scope is constrained by user value, architectural readiness, safety, operational capacity, and measurable learning.

## MVP Product Hypothesis

> A person who receives relevant, trustworthy discovery and can participate safely in a live or conversational social experience is more likely to form a meaningful connection and return.

## MVP In Scope

### Account and Identity

- account creation and secure sign-in;
- basic recovery and session management;
- profile, language, and essential privacy settings;
- age or eligibility controls where required.

### Discovery

- curated and rules-based initial discovery;
- simple interest and language signals;
- transparent room/person/community context;
- hide, block, report, and recommendation feedback.

### Live Voice Foundation

- create and join a voice room;
- host, co-host/moderator, speaker, listener roles;
- microphone and participant controls;
- room visibility and access modes;
- leave, reconnect, and room closure;
- essential moderation controls.

### Relationship Continuity

- follow or connect;
- basic direct messaging where safety requirements are satisfied;
- notifications and preference controls;
- return to prior hosts, rooms, or relationships.

### Trust and Safety

- block, mute, report;
- basic enforcement workflow;
- safety audit;
- operator tooling sufficient for MVP risk;
- user outcome and appeal path for material action.

### Measurement and Operations

- privacy-aware product events;
- journey dashboards;
- reliability and quality telemetry;
- support and incident workflows;
- feature flags and rollback.

## Conditional Scope

The following require explicit readiness gates:

| Capability | Gate |
|---|---|
| Gifts or wallet | Authoritative ledger, fraud controls, provider verification, reconciliation, support |
| AI translation | Quality, latency, privacy, fallback, disclosure, regional evaluation |
| AI moderation assistance | Evidence, bias testing, human review, appeal, retention governance |
| Open public discovery | Abuse controls, ranking quality, cold-start protection |
| Creator monetization | Terms, identity, fraud, payout, tax/region operations |
| Recording or replay | Consent, privacy, storage, reporting, deletion, jurisdiction review |

## Out of Scope for MVP

- broad marketplace;
- full agency management;
- complex multi-tier subscriptions;
- unrestricted public APIs;
- advanced advertising system;
- global payout coverage;
- full community-governance suite;
- arbitrary user-created bots or agents;
- large-scale event replay;
- complete content studio;
- universal end-to-end encryption claim without a separately ratified design.

## Prioritization Model

Each capability is scored qualitatively across:

1. core user value;
2. evidence strength;
3. strategic differentiation;
4. architecture readiness;
5. safety and abuse risk;
6. operational burden;
7. reversibility;
8. measurement clarity;
9. dependency cost;
10. learning value.

No aggregate score may hide a critical safety, security, or legal blocker.

## Priority Classes

| Class | Meaning |
|---|---|
| P0 | Required for coherent, safe MVP journey |
| P1 | Strong value after P0 stability |
| P2 | Useful expansion with evidence |
| P3 | Future exploration |
| Blocked | Cannot proceed until a named gate is satisfied |

## Initial Priority Map

| Capability | Priority | Rationale |
|---|---|---|
| Secure onboarding | P0 | Entry to every journey |
| Relevant discovery | P0 | Core hypothesis |
| Voice room participation | P0 | Core presence value |
| Host and moderator controls | P0 | Safety and room quality |
| Follow/relationship continuity | P0 | Converts moment into durable value |
| Basic messaging | P1/P0 conditional | Valuable, but abuse and operational requirements are material |
| Reporting and blocking | P0 | Required safety foundation |
| Creator analytics | P1 | Supports quality progression |
| Gifts | Blocked until economy gate | High value and high integrity risk |
| AI translation | P1 conditional | Strong global value, quality/privacy dependent |
| Algorithmic feed expansion | P2 | Requires sufficient evidence and safety maturity |

## Scope Change Control

A scope addition requires:

- named user problem;
- segment and journey;
- evidence;
- owner;
- architecture/data/security impact;
- operational readiness;
- metrics and guardrails;
- opportunity cost;
- rollout and rollback;
- explicit approval.

## Anti-Patterns

- Calling every planned feature “MVP.”
- Adding scope because a competitor has it.
- Launching monetization to compensate for weak core value.
- Ignoring operator tools.
- Shipping a feature without support, safety, or rollback.
- Using a weighted score to override a critical blocker.
- Optimizing for launch date by removing trust controls.

## AI Context

AI capabilities are treated as product capabilities with normal scope gates plus model-specific quality, privacy, safety, latency, cost, fallback, and governance requirements.

## Operational Considerations

MVP scope must fit real staffing for support, moderation, security, reliability, creator operations, and incident response.

## Implementation Notes

Create a capability backlog linked to journey, bounded context, owner, dependencies, acceptance, metrics, and risk. P0 work should be sequenced by complete vertical journeys rather than horizontal infrastructure alone.

## Future Evolution

Scope expands only after evidence shows the core loop creates value and operational systems can support growth.

## Architectural Integrity Check

- Does every P0 item complete the core loop?
- Are conditional items blocked by explicit gates?
- Are operator and safety capabilities included?
- Is the MVP measurable and reversible?
- Is complexity proportional to learning value?

## References

- PRD-003 Core User Journeys
- ARC-010 Reference Architecture
- SEC-001 through SEC-007
