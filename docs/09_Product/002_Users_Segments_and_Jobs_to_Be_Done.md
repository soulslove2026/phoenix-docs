---
Document ID: PRD-002
Knowledge ID: PHX-PRD-002
Category: Product Foundation
Version: 2.3.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Product Architecture
Authority: Phoenix Product Foundation
Depends On: PRD-001; GOV User Dignity and Rights; SEC-002; ARC-003
Required By: product design, engineering, data, trust and safety, operations, growth, AI engineering
Review Trigger: strategy change, MVP scope change, major market learning, material safety incident, architecture constraint change
Last Updated: 2026-07-13
---

# PRD-002 — Users, Segments, and Jobs to Be Done

## Executive Summary

Phoenix defines users by the value they seek and the context in which they act, not only by demographics. Segments guide research, prioritization, onboarding, safety, operations, and measurement without becoming permanent stereotypes.

## Core Segments

### 1. Explorer

A person seeking relevant people, rooms, or communities.

**Jobs to be done**
- Help me find spaces where I can belong.
- Let me understand a room or community before entering.
- Protect me from overwhelming, unsafe, or irrelevant discovery.
- Help me return to places and people I value.

### 2. Participant

A person who joins conversations, rooms, or communities.

**Jobs to be done**
- Let me participate with clear controls and social context.
- Help me express myself across language and accessibility needs.
- Let me manage privacy, boundaries, and unwanted interaction.
- Make it easy to continue relationships after a live moment.

### 3. Host or Creator

A person who organizes experiences, develops an audience, or earns value.

**Jobs to be done**
- Help me create a compelling and well-run experience.
- Give me clear moderation and audience-management tools.
- Help me understand what creates durable value.
- Make rules, earnings, fees, and enforcement predictable.
- Protect my identity, account, and community from abuse.

### 4. Community Steward

A person responsible for culture, continuity, or governance.

**Jobs to be done**
- Help me establish norms, roles, and boundaries.
- Let me identify risk without turning the community into surveillance.
- Give me transparent, appealable moderation tools.
- Help healthy communities grow without losing their character.

### 5. Trust and Safety Operator

A trained person who reviews reports, risk, and enforcement.

**Jobs to be done**
- Show me sufficient evidence and policy context.
- Help me act consistently, quickly, and proportionately.
- Preserve user rights, privacy, auditability, and appeal.
- Protect me from excessive exposure to harmful content.

### 6. Platform Operator

A person responsible for reliability, security, payments, support, or policy.

**Jobs to be done**
- Give me clear ownership and operational evidence.
- Let me contain incidents and reverse unsafe changes.
- Help me understand user impact, not only system metrics.
- Make privileged actions minimal and accountable.

## Contextual Segmentation

A single person may move among segments. A participant can become a host, a creator can be a community steward, and an operator may also be a user. Product permissions and experiences must be based on context and authority, not simplistic permanent labels.

## Underserved and High-Risk Contexts

Research and design must explicitly consider:

- new users with no social graph;
- people with limited digital literacy;
- language minorities and cross-language communities;
- users with disabilities;
- users in low-bandwidth or high-cost connectivity environments;
- people exposed to harassment or identity-based abuse;
- minors or age-uncertain users where applicable;
- creators vulnerable to fraud, coercion, or account takeover;
- regions with unreliable identity, payment, or communications infrastructure.

## Jobs-to-Be-Done Framework

Each prioritized job must record:

- triggering situation;
- desired progress;
- current workaround;
- emotional and social dimensions;
- barriers and risks;
- success evidence;
- segment variations;
- safety and privacy implications.

## Example Job Record

**Situation:** I discover a live voice room through a recommendation.  
**Desired progress:** I want to understand whether the room is relevant and safe before joining.  
**Barriers:** unfamiliar host, unclear language, unknown rules, fear of harassment.  
**Required product support:** clear room context, host/community signals, language indicators, audience state, reporting and exit controls.  
**Success evidence:** qualified join, meaningful participation, low immediate exit, low harm report, optional follow or return.

## Research Principles

1. Observe behavior and context, not only stated preference.
2. Recruit beyond highly engaged or technically confident users.
3. Separate universal human needs from market-specific assumptions.
4. Record counter-evidence and unmet needs.
5. Protect research participants and sensitive data.
6. Revalidate segments as product and markets evolve.
7. Do not use personas to justify unsupported stereotypes.

## Decision Matrix

| Product question | Evidence required |
|---|---|
| Who is the primary MVP user? | Repeated high-value job, reachable segment, operationally supportable |
| Should a segment receive a distinct flow? | Material difference in need, risk, or capability |
| Should a capability be creator-only? | Clear value, authority, and abuse-control rationale |
| Should anonymous use be allowed? | Benefit exceeds abuse and privacy risk with bounded capability |
| Should a market launch? | Research, safety, localization, operations, and technical readiness |

## AI Context

AI-generated segmentation can support pattern discovery but may encode bias or invent certainty. Segments and recommendations require human research, representative evidence, explainability, and ongoing outcome monitoring.

## Anti-Patterns

- Designing for an imaginary “average user.”
- Treating high spenders as the only valuable users.
- Defining segments only by age, country, or gender.
- Ignoring operators and safety teams as product users.
- Assuming creator and community needs are identical.
- Using personas as permanent truth.
- Collecting sensitive attributes without necessity.

## Operational Considerations

Each MVP segment requires support ownership, safety pathways, localization, accessibility, and measurable service expectations.

## Implementation Notes

Initial discovery should focus on one or two primary participation segments and one host/creator segment, while preserving safe paths for operators and future expansion.

## Future Evolution

Segments should evolve through research, behavior, retention, safety outcomes, creator economics, and market learning.

## Architectural Integrity Check

- Is the segment tied to a real job and context?
- Can Phoenix support the segment safely and operationally?
- Are underserved users represented?
- Are permissions based on authority, not persona labels?
- Is the segment measurable without excessive personal data?

## References

- PRD-001 Product Vision
- SEC-002 Threat Model
- ARC-003 Domain Map
