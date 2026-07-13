---
Document ID: PRD-006
Knowledge ID: PHX-PRD-006
Category: Product Foundation
Version: 2.3.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Product Architecture
Authority: Phoenix Product Foundation
Depends On: PRD-001; PRD-002; PRD-003; SEC-001; SEC-006; GOV User Rights
Required By: product design, engineering, data, trust and safety, operations, growth, AI engineering
Review Trigger: strategy change, MVP scope change, major market learning, material safety incident, architecture constraint change
Last Updated: 2026-07-13
---

# PRD-006 — Experience and Trust Principles

## Executive Summary

Phoenix experience quality is defined by value, comprehension, agency, safety, accessibility, reliability, and emotional respect. A polished interface that confuses, coerces, excludes, or endangers users is not a high-quality experience.

## Experience Principles

### 1. State Must Be Understandable

Users should know whether they are public or private, listening or speaking, recorded or not, connected or reconnecting, following or messaging, purchasing or merely previewing.

### 2. Consequences Must Be Visible

Before material actions, Phoenix communicates cost, audience, permanence, permission, and likely consequence.

### 3. Control Must Be Near the Moment

Mute, leave, block, report, privacy, notification, and audience controls must be accessible where the need occurs.

### 4. Trust Must Be Earned, Not Decorated

Badges, ranks, counts, and labels must reflect defined evidence and must not imply safety, endorsement, wealth, or authority beyond their actual meaning.

### 5. Friction Is Sometimes Protective

Phoenix minimizes unnecessary friction but deliberately adds verification, confirmation, cooling-off, review, or limits where harm or irreversible impact is material.

### 6. Accessibility Is Foundational

Voice, text, visual, motor, cognitive, language, and connectivity diversity must be considered in core journeys.

### 7. Failure Must Be Honest and Recoverable

The interface must distinguish pending, failed, partial, degraded, and completed states. It must not show success before authoritative confirmation.

### 8. Personalization Must Preserve Agency

Users need meaningful controls over discovery, notifications, privacy, and AI-assisted behavior.

## Trust-Sensitive Surfaces

| Surface | Required trust cues |
|---|---|
| Account recovery | Current state, notifications, delay, support path |
| Live room | Audience, role, host, recording, moderation, exit |
| Messaging | Sender context, privacy, block/report, delivery state |
| Gift/payment | Price, recipient, balance, confirmation, receipt |
| Recommendation | Reason, feedback, hide/report, sensitive-category controls |
| Moderation | Rule, outcome, duration, evidence summary, appeal |
| AI assistance | AI involvement, limitations, controls, correction path |

## Dark Patterns Prohibited

- hidden recurring charges;
- confusing cancellation;
- forced consent;
- fake urgency;
- manipulative notification defaults;
- disguising ads or paid promotion;
- making privacy weaker easier than making it stronger;
- shame-based retention;
- ambiguous gift or currency values;
- obstructive account deletion or appeal;
- hiding AI involvement where it materially affects user understanding.

## Safety by Experience

Safety is supported through:

- contextual reporting;
- frictionless exit;
- audience and permission clarity;
- default limits for new or risky accounts;
- progressive exposure;
- rate and interaction controls;
- content warnings where justified;
- support and emergency guidance;
- visible enforcement boundaries;
- anti-retaliation design.

## Accessibility Requirements

- keyboard and assistive-technology support;
- screen-reader semantics;
- sufficient contrast and scalable text;
- captions/transcripts where feasible and consent-compatible;
- non-audio alternatives to voice-only information;
- localized language and understandable wording;
- low-bandwidth and reconnect behavior;
- avoidance of sensory overload;
- accessible moderation and reporting.

## AI Experience Rules

1. AI output must be distinguishable where material.
2. Users need correction, retry, disable, or human-support paths.
3. AI must not imitate a person deceptively.
4. Translation must communicate uncertainty where meaning is unclear.
5. Recommendation controls must influence future behavior.
6. Safety AI must not expose sensitive internal reasoning.
7. AI failure must degrade gracefully.

## Decision Matrix

| Tension | Preferred decision |
|---|---|
| Speed vs comprehension | Comprehension for material action |
| Engagement vs user control | User control |
| Personalization vs privacy | Minimum necessary data and meaningful choice |
| Creator freedom vs participant safety | Defined rights, boundaries, and proportionate enforcement |
| Simplicity vs accurate state | Accurate state |
| Automation vs appeal | Reviewable and correctable process |

## Anti-Patterns

- Success animations before server confirmation.
- Safety controls hidden in settings.
- Reputation scores without explanation or correction.
- Infinite notification growth.
- Using vulnerable users as engagement inventory.
- Accessibility postponed until after launch.
- AI-generated text presented as verified fact.

## Operational Considerations

Experience principles require design review, content design, localization, accessibility testing, support feedback, safety monitoring, and incident learning.

## Implementation Notes

Every MVP journey should receive an experience-and-trust review using concrete screens, states, error cases, abuse cases, and assistive-technology checks.

## Future Evolution

Phoenix can develop a design system containing trust states, safety patterns, accessibility components, AI disclosure patterns, and reusable financial confirmation patterns.

## Architectural Integrity Check

- Can users understand current state and consequence?
- Are controls available at the moment of need?
- Are authoritative and pending states distinct?
- Does the experience respect accessibility and language diversity?
- Are trust signals accurate and governed?

## References

- SEC-001 Security Principles
- SEC-006 Data Protection
- PRD-003 Core User Journeys
