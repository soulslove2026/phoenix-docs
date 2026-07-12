# GOV-012 — Change Management

**Document ID:** GOV-012  
**Knowledge ID:** KN-GOV-012  
**Version:** 1.0  
**Status:** Approved  
**Owner:** Release Governance

## 1. Purpose

Ensure changes are controlled, reviewable, reversible, and observable.

## 2. Change Flow

Proposal → Impact Analysis → Review → Approval → Implementation → Validation → Release → Monitoring → Closure

## 3. Change Classes

- standard;
- normal;
- high-risk;
- emergency.

## 4. High-Risk Changes

High-risk changes include:

- authentication;
- permissions;
- financial logic;
- database migrations;
- moderation enforcement;
- AI tools;
- infrastructure;
- data retention;
- public API breaking changes.

## 5. Required Artifacts

- change description;
- affected systems;
- risk analysis;
- test evidence;
- migration plan;
- rollback plan;
- monitoring;
- owner;
- release window.

## 6. Emergency Changes

Emergency changes may use expedited approval, but require post-implementation review and documentation.

## 7. Future Review Trigger

Review when automated deployment and branch protection are fully established.
