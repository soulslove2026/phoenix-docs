---
Document ID: PRD-008
Knowledge ID: PHX-PRD-008
Category: Product Foundation
Version: 2.3.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Product Architecture
Authority: Phoenix Product Foundation
Depends On: PRD-001 through PRD-007; ARC-010; SEC-001 through SEC-007; PEF/PES standards
Required By: product design, engineering, data, trust and safety, operations, growth, AI engineering
Review Trigger: strategy change, MVP scope change, major market learning, material safety incident, architecture constraint change
Last Updated: 2026-07-13
---

# PRD-008 — Product Acceptance and Release Criteria

## Executive Summary

A Phoenix capability is release-ready only when user value, experience, architecture, data, security, safety, reliability, observability, operations, accessibility, and rollback are collectively ready.

Feature completion is not release readiness.

## Acceptance Domains

### Product Value

- target segment and job are explicit;
- user journey and expected progress are defined;
- evidence justifies priority;
- success and guardrail metrics are approved.

### Experience

- state, consequence, and control are understandable;
- happy, alternative, error, and recovery states are designed;
- accessibility and localization requirements are met;
- trust-sensitive interaction has been reviewed.

### Architecture

- owning bounded context is explicit;
- source of truth and invariants are defined;
- APIs and events use governed contracts;
- failure isolation and scaling assumptions are documented;
- no unapproved shared-database dependency exists.

### Data

- fields are classified and minimized;
- retention and deletion are defined;
- identifiers, consistency, and versioning are correct;
- analytics events have contracts and owners;
- derived data cannot override authoritative truth.

### Security and Safety

- threat and abuse cases are reviewed;
- authentication and authorization are correct;
- secrets and keys follow policy;
- reporting, blocking, and enforcement paths exist;
- privileged actions are audited;
- unresolved critical or high risks follow approved rules.

### Reliability

- service objectives are defined;
- load, failure, retry, timeout, and recovery behavior are tested;
- degraded mode is understood;
- monitoring and alerts are actionable;
- backup or reconciliation is tested where relevant.

### Operations

- support and operator workflows exist;
- runbooks, escalation, and ownership are assigned;
- creator, payment, moderation, or provider operations are ready;
- incident and rollback authority is clear.

### Rollout

- feature flag or controlled release path exists;
- eligibility and market scope are defined;
- dashboards are live;
- kill switch and rollback are tested;
- communication and migration are prepared.

## Release Gate Matrix

| Gate | Block release when |
|---|---|
| Product | No clear user problem or measurable outcome |
| Experience | Material state or consequence is ambiguous |
| Architecture | Ownership or source of truth is unclear |
| Data | Sensitive data lacks classification or lifecycle |
| Security | Critical risk unresolved; authorization or secret handling unsafe |
| Safety | Harm cannot be reported, escaped, or operationally addressed |
| Reliability | Failure can create silent corruption or unrecoverable state |
| Operations | No accountable team can support the capability |
| Measurement | Exposure and outcome cannot be measured reliably |
| Rollback | Unsafe behavior cannot be contained or reversed |

## Definition of Ready

Before implementation:

- problem and segment approved;
- journey and scope approved;
- capability owner named;
- dependencies mapped;
- security/safety/data review complete;
- acceptance scenarios written;
- instrumentation planned;
- operational owner committed.

## Definition of Done

Before controlled rollout:

- implementation and peer review complete;
- automated and manual tests pass;
- threat controls verified;
- accessibility review complete;
- dashboards and alerts active;
- runbooks and support content available;
- migration and rollback tested;
- release owner signs evidence.

## Release Evidence Package

Every material release should link:

- product specification;
- architecture decision or reference;
- API/event/data contracts;
- threat model and control verification;
- test evidence;
- accessibility and localization evidence;
- dashboard and guardrail definitions;
- runbooks;
- rollout plan;
- rollback plan;
- approvals and exceptions.

## Exception Process

An exception requires:

- affected gate;
- rationale;
- impact and users;
- risk owner;
- expiry date;
- compensating controls;
- monitoring;
- remediation commitment;
- approval authority.

Critical security, safety, privacy, or financial-integrity failures are not ordinary exceptions.

## Post-Release Review

After controlled rollout:

1. validate instrumentation;
2. compare outcomes and guardrails;
3. review incidents and support;
4. inspect segment differences;
5. confirm operational load;
6. decide expand, hold, redesign, or rollback;
7. update documentation and threat model;
8. remove obsolete flags or code.

## AI Release Criteria

AI capabilities additionally require:

- defined model and use case;
- evaluation dataset and limitations;
- correctness and safety thresholds;
- prompt-injection and data-leakage testing;
- human review boundaries;
- user disclosure and correction;
- fallback behavior;
- cost and latency limits;
- model/version audit;
- rollback or disable path.

## Anti-Patterns

- Releasing because code is merged.
- Treating documentation as evidence without verification.
- Waiving safety because rollout is “small.”
- Launching without operator access or training.
- Assuming feature flags are sufficient rollback for data changes.
- Keeping temporary exceptions indefinitely.
- Measuring only aggregate engagement after release.

## Operational Considerations

Release governance should be lightweight for low-risk changes and rigorous for high-impact capabilities. The gate is risk-weighted, not bureaucracy-weighted.

## Implementation Notes

Create a reusable release checklist and evidence template linked to the capability registry. Automate checks for contracts, ownership, security scanning, migrations, feature flags, dashboards, and manifests where possible.

## Future Evolution

This standard can mature into policy-as-code release gates, automated evidence collection, risk-based approvals, and production-proven capability certification.

## Architectural Integrity Check

- Is readiness demonstrated by evidence?
- Can the release be observed, contained, and reversed?
- Are user value and harm both measured?
- Are exceptions temporary and owned?
- Does post-release learning update the system of record?

## References

- ARC-010 Reference Architecture
- SEC-001 through SEC-007
- PEF/PES Engineering Standards
- PRD-007 Success Metrics and Experimentation
