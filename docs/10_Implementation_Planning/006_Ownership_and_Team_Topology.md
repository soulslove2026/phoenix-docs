---
Document ID: IMP-006
Knowledge ID: PHX-IMP-006
Category: Implementation Planning
Version: 2.4.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Delivery Architecture
Authority: Phoenix Implementation Planning
Depends On: IMP-003; ARC-002; DPL-012; SEC-004; PEF/PES standards
Required By: phoenix-core repositories, delivery teams, platform engineering, security, data, QA, operations
Review Trigger: implementation topology change, major dependency change, release-model change, security incident, delivery evidence contradicts assumptions
Last Updated: 2026-07-13
---

# IMP-006 — Ownership and Team Topology

## Executive Summary

Phoenix ownership follows bounded contexts and product outcomes. Every capability, repository, contract, service, dataset, dashboard, alert, and runbook has one accountable owner.

Team topology must remain realistic for available staffing. The architecture must not assume many independent teams before they exist.

## Initial Ownership Model

A small founding team may use virtual ownership groups:

### Product and Experience

Owns:
- product vision;
- user research;
- journey acceptance;
- design;
- accessibility;
- localization;
- metrics.

### Core Application

Owns:
- identity;
- profile;
- room lifecycle;
- social graph;
- discovery;
- application APIs.

### Realtime and Client

Owns:
- voice integration;
- realtime state;
- mobile/web client behavior;
- quality telemetry.

### Trust, Security, and Operations

Owns:
- authentication security;
- authorization standards;
- reports and moderation;
- audit;
- incident response;
- production access;
- operational readiness.

### Data and Platform

Owns:
- database platform;
- contracts;
- eventing;
- analytics infrastructure;
- CI/CD;
- environments;
- observability;
- developer experience.

One person may hold several roles initially, but the ownership records must remain distinct.

## Responsibility Model

For each material item:

- **Accountable:** one owner with final responsibility.
- **Responsible:** implementers/operators.
- **Consulted:** required reviewers.
- **Informed:** affected stakeholders.

Avoid multiple accountable owners.

## Ownership Registry Fields

- item ID and type;
- accountable owner;
- backup owner;
- repository/path;
- lifecycle state;
- support channel;
- operational tier;
- on-call or escalation;
- review date;
- dependencies;
- documentation links.

## Decision Rights

| Decision | Primary authority |
|---|---|
| Product scope | Product authority with foundation constraints |
| Domain invariant | Owning bounded-context authority |
| Security exception | Security authority and risk owner |
| Data contract | Producer owner with consumer review |
| Production rollout | Release owner plus operational approval |
| Incident containment | Incident commander |
| Architecture boundary | Architecture authority with domain owners |
| Metric definition | Product/data owner with governance review |

## Separation of Duties

Critical actions should separate:

- code author and reviewer;
- payout request and approval;
- policy author and critical override;
- production access request and approval;
- secret creation and broad use;
- incident action and post-incident review where feasible.

## Anti-Patterns

- “Everyone owns it.”
- Ownership by job title only with no operational responsibility.
- Architecture that assumes teams not yet staffed.
- Platform team owning all business rules.
- Security as an external approval queue.
- No backup owner.
- Alerts routed to unstaffed channels.
- Ownership records that never update.

## Operational Considerations

Ownership is reviewed at each release and after organizational changes. Orphaned assets block production rollout.

## Implementation Notes

Create a simple ownership registry in the repository before creating services. Later automate links to code owners, alerts, dashboards, runbooks, and repositories.

## Future Evolution

As teams grow, contexts may gain dedicated product-engineering teams. Team boundaries should follow cohesive ownership and cognitive load, not arbitrary organizational charts.

## Architectural Integrity Check

- Is one owner accountable for each item?
- Does ownership match the bounded context?
- Are critical duties separated?
- Is backup and escalation real?
- Can the current team operate the proposed topology?

## References

- ARC-002 Bounded Contexts
- DPL-012 Data Ownership
- SEC-004 Authorization
