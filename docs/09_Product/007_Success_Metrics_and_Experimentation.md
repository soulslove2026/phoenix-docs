---
Document ID: PRD-007
Knowledge ID: PHX-PRD-007
Category: Product Foundation
Version: 2.3.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Product Architecture
Authority: Phoenix Product Foundation
Depends On: PRD-001 through PRD-006; DPL-010 through DPL-019; SEC-006; SEC-007
Required By: product design, engineering, data, trust and safety, operations, growth, AI engineering
Review Trigger: strategy change, MVP scope change, major market learning, material safety incident, architecture constraint change
Last Updated: 2026-07-13
---

# PRD-007 — Success Metrics and Experimentation

## Executive Summary

Phoenix measures durable user value, trust, safety, quality, and operational sustainability. Raw engagement is insufficient and can be actively harmful when detached from user outcomes.

Metrics guide decisions; they do not replace judgment, research, or accountability.

## North-Star Direction

The initial north-star family should reflect:

> Meaningful, safe participation that leads to voluntary return.

A final single north-star metric must be selected only after instrumentation quality and user research can distinguish meaningful participation from passive or harmful engagement.

## Metric Hierarchy

### User Value

- qualified onboarding completion;
- first meaningful participation;
- relationship continuation;
- voluntary return;
- successful host experience;
- user-reported value or belonging;
- successful recovery from failure.

### Quality

- relevant discovery rate;
- room join-to-participation conversion;
- immediate exit;
- reconnect success;
- message delivery quality;
- translation quality where used;
- host control success.

### Trust and Safety

- exposure to harmful interaction;
- report rate with context;
- substantiated harm rate;
- block/mute usage;
- time to safety action;
- appeal and reversal rate;
- repeat offender rate;
- false-positive and false-negative estimates;
- operator well-being and workload.

### Reliability

- journey success rate;
- latency by key interaction;
- crash-free sessions;
- audio quality and drop rate;
- authoritative transaction completion;
- incident frequency and recovery.

### Sustainability

- cost per meaningful participation;
- creator and host retention;
- support contacts per active user;
- moderation workload;
- infrastructure efficiency;
- economy reconciliation quality.

## Metric Contract

Every metric must define:

- exact name and purpose;
- owner;
- population and exclusions;
- numerator and denominator;
- time window;
- source events and contracts;
- identity and deduplication rules;
- segmentation policy;
- privacy classification;
- quality checks;
- known limitations;
- change history.

## Guardrails

No experiment is successful if it materially worsens:

- severe harm exposure;
- account compromise;
- privacy violation;
- financial integrity;
- accessibility;
- reliability;
- complaint or appeal quality;
- vulnerable-user outcomes;
- operator overload.

## Experiment Lifecycle

1. define user problem and hypothesis;
2. identify primary outcome and guardrails;
3. confirm eligibility, privacy, and safety;
4. verify instrumentation;
5. predefine decision thresholds and duration;
6. conduct technical and operational readiness review;
7. roll out gradually;
8. monitor and stop when guardrails fail;
9. analyze with uncertainty and segment effects;
10. document decision and follow-up;
11. remove stale flags and variants.

## Experiment Eligibility

The following are restricted or require heightened review:

- account recovery;
- security controls;
- moderation penalties;
- crisis or emergency messaging;
- payment, payout, or price ambiguity;
- consent and privacy defaults;
- vulnerable-user protections;
- irreversible deletion;
- legal notices;
- deceptive social proof.

## Decision Matrix

| Result | Decision |
|---|---|
| Outcome improves, guardrails stable | Consider broader rollout |
| Outcome improves, important guardrail worsens | Reject or redesign |
| Aggregate improves, vulnerable segment worsens | Pause and investigate |
| No clear result, low cost | Extend only with justified evidence plan |
| No clear result, high cost or risk | Stop |
| Instrumentation unreliable | Do not make product conclusion |
| Novel harm appears | Stop, contain, review threat model |

## Statistical and Analytical Integrity

- Define analysis before seeing results where practical.
- Report uncertainty, not only point estimates.
- Avoid repeated peeking without correction.
- Examine practical significance, not only statistical significance.
- Investigate novelty and seasonality.
- Analyze heterogeneous effects.
- Preserve experiment assignment and exposure truth.
- Do not alter definitions silently after launch.

## AI Context

AI experiments require evaluation beyond click or usage rates: correctness, hallucination, bias, safety, privacy, latency, cost, user understanding, correction, and fallback.

## Anti-Patterns

- Optimizing time spent as universal success.
- Choosing metrics after results are known.
- Ignoring users who cannot complete a journey.
- Hiding safety harm in aggregate averages.
- Permanent experiments with no decision.
- Running tests without operational readiness.
- Using proxy metrics after the proxy stops representing value.
- Treating correlation as causal proof.

## Operational Considerations

Experiment systems require identity-safe assignment, feature flags, exposure logging, kill switches, dashboards, owner alerts, and cleanup.

## Implementation Notes

Begin with a small governed metric dictionary and event set linked to core journeys. Do not instrument every possible action before purpose and retention are defined.

## Future Evolution

Later releases can define causal inference standards, long-term holdouts, creator-economy experimentation, market launch evaluation, and AI evaluation suites.

## Architectural Integrity Check

- Does every metric represent a user or operational outcome?
- Are guardrails able to stop rollout?
- Are data contracts and definitions stable?
- Are segment harms visible?
- Is the experiment reversible and owned?

## References

- DPL-018 Data Contracts
- DPL-019 Event Modeling
- SEC-006 Data Protection
- SEC-007 Security Audit and Incident Readiness
