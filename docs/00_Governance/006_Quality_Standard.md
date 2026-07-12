# GOV-007 — Phoenix Quality Standard

**Document ID:** GOV-007  
**Knowledge ID:** KN-GOV-007  
**Version:** 1.0  
**Status:** Ratified  
**Owner:** Quality Governance

## 1. Purpose

Define the minimum quality expected from every capability, service, document, algorithm, interface, and operational process in Phoenix.

## 2. Quality Dimensions

Phoenix quality includes:

- correctness;
- security;
- privacy;
- reliability;
- usability;
- accessibility;
- maintainability;
- observability;
- performance;
- scalability;
- replaceability;
- documentation;
- operational readiness.

## 3. Quality Gates

A change is not complete unless it has:

- approved requirements;
- acceptance criteria;
- tests;
- authorization review;
- failure behavior;
- telemetry;
- rollback or disablement;
- ownership;
- documentation;
- localization and accessibility review where applicable.

## 4. High-Risk Quality

Identity, finance, moderation, AI, privacy, and infrastructure require stronger evidence and independent review.

## 5. Quality Debt

Any accepted shortcut must be recorded with:

- debt owner;
- impact;
- expiry or review date;
- remediation plan.

Unrecorded quality debt is prohibited.

## 6. Quality Metrics

Relevant metrics may include:

- defect escape rate;
- change failure rate;
- recovery time;
- test effectiveness;
- crash-free sessions;
- API reliability;
- security findings;
- data quality;
- user task success;
- documentation freshness.

## 7. Rejected Standard

Phoenix rejects quality measured only by code coverage or delivery speed.

## 8. Future Review Trigger

Review when Phoenix enters production, exceeds 1 million active users, or changes its release governance.
