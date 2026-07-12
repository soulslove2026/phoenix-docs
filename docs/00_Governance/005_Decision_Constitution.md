# GOV-006 — Decision Constitution

**Document ID:** GOV-006  
**Knowledge ID:** KN-GOV-006  
**Version:** 1.0  
**Status:** Ratified  
**Owner:** Governance Council  
**Authority:** Phoenix Charter and Constitution

## 1. Purpose

This document defines how Phoenix makes, records, reviews, and revises material decisions.

A decision is material when it affects architecture, security, data, finance, AI, product direction, operations, legal exposure, cost structure, or long-term maintainability.

## 2. Decision Principles

Every material decision must be:

- traceable;
- evidence-informed;
- owned;
- reviewable;
- reversible where practical;
- explicit about risk;
- aligned with Phoenix governance;
- documented before broad implementation.

## 3. Required Decision Questions

1. What problem are we solving?
2. Why now?
3. What domain owns the decision?
4. What alternatives were considered?
5. What are the consequences?
6. What can fail?
7. How will we observe failure?
8. How will we roll back?
9. How does this affect security, privacy, data, AI, cost, and operations?
10. Does it make Phoenix stronger in ten years?

## 4. Decision Classes

### Class A — Constitutional
Changes governance, core values, financial truth, or safety principles.

### Class B — Architectural
Changes system boundaries, providers, storage, integration, or deployment model.

### Class C — Product
Changes user behavior, monetization, eligibility, moderation, or capability scope.

### Class D — Operational
Changes release, incident, support, monitoring, or maintenance procedures.

## 5. Decision Records

Material decisions require one of:

- ADR;
- RFC;
- governance amendment;
- policy record;
- risk acceptance record.

## 6. Decision Scorecard

Each proposal must be scored from 1–10 on:

- longevity;
- scalability;
- replaceability;
- security;
- maintainability;
- operational simplicity;
- cost efficiency;
- user value;
- observability;
- reversibility.

No score automatically approves a decision. The scorecard makes tradeoffs visible.

## 7. Exception Process

Temporary exceptions require:

- violated rule;
- reason;
- owner;
- compensating controls;
- expiry date;
- remediation plan.

## 8. Future Review Trigger

Review this constitution when decision volume exceeds current governance capacity or when Phoenix creates a formal multi-team governance board.
