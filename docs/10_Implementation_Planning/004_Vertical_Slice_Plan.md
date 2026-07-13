---
Document ID: IMP-004
Knowledge ID: PHX-IMP-004
Category: Implementation Planning
Version: 2.4.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Delivery Architecture
Authority: Phoenix Implementation Planning
Depends On: IMP-003; PRD-003; PRD-008; ARC-010; SEC-001 through SEC-007
Required By: phoenix-core repositories, delivery teams, platform engineering, security, data, QA, operations
Review Trigger: implementation topology change, major dependency change, release-model change, security incident, delivery evidence contradicts assumptions
Last Updated: 2026-07-13
---

# IMP-004 — Vertical Slice Plan

## Executive Summary

Vertical slices are the primary delivery unit. Each slice crosses client, API, domain, data, security, observability, testing, and operations to prove a real outcome.

## Slice Template

A slice includes:

- outcome and actor;
- entry and completion states;
- user interface or API;
- owning context;
- data changes;
- contracts and events;
- authorization;
- abuse and failure cases;
- telemetry;
- test evidence;
- rollout and rollback;
- documentation updates.

## Slice 0 — Executable Skeleton

**Outcome:** A developer can run, test, build, and deploy a minimal Phoenix system.

Includes:
- repository skeleton;
- local environment;
- health endpoint;
- structured logging;
- tracing;
- configuration validation;
- CI;
- container or deployable artifact;
- test harness;
- secure secret injection;
- first migration;
- release metadata.

**Exit evidence:** reproducible local setup, green pipeline, deployed test environment, observable request, rollback test.

## Slice 1 — Create and Authenticate Account

**Outcome:** A user can create and access an account securely.

Includes:
- identity record;
- authentication method;
- session issuance;
- rate limiting;
- audit;
- basic profile;
- error and recovery states;
- metrics.

## Slice 2 — Create and Publish a Voice Room

**Outcome:** An authorized host can create a room with topic, language, visibility, and initial rules.

Includes:
- room aggregate;
- authorization;
- database transaction;
- domain/integration event;
- discovery projection;
- audit;
- feature flag.

## Slice 3 — Discover a Room

**Outcome:** An authenticated user can view a relevant list of available rooms and understand basic context.

Includes:
- simple curated/rules-based ranking;
- room projection;
- privacy and safety filtering;
- reason/context;
- impression and click events;
- empty and degraded states.

## Slice 4 — Join, Listen, and Leave

**Outcome:** A user can join a room as listener, observe accurate state, and leave safely.

Includes:
- participant membership;
- realtime session;
- authorization;
- connection state;
- join/leave events;
- quality metrics;
- timeout and retry;
- user exit controls.

## Slice 5 — Request and Grant Speaking

**Outcome:** A listener can request speaking and a host can grant or revoke it.

Includes:
- role transition invariant;
- race and stale-state handling;
- audit;
- realtime propagation;
- denial reason;
- abuse limits;
- tests for concurrent updates.

## Slice 6 — Follow Host and Return

**Outcome:** A participant can follow a host and receive a safe path back to future activity.

Includes:
- social graph edge;
- notification preference;
- discovery signal;
- privacy control;
- unfollow;
- metrics.

## Slice 7 — Block and Report

**Outcome:** A user can block another user and report harmful room behavior.

Includes:
- immediate protective effect;
- report record;
- evidence references;
- operator queue;
- status acknowledgment;
- audit;
- appeal-ready case structure.

## Slice 8 — Host Moderation

**Outcome:** A host or moderator can mute, remove, or restrict a participant under explicit policy.

Includes:
- scoped role;
- authorization;
- reason;
- participant state;
- audit;
- notification;
- abuse prevention;
- emergency override rules.

## Slice Quality Gate

A slice is accepted only when:

- functional acceptance passes;
- contract and migration compatibility pass;
- authorization and abuse cases pass;
- observability is live;
- error and recovery behavior is verified;
- rollout and rollback are tested;
- documentation is synchronized;
- no unresolved critical defect exists.

## Anti-Patterns

- “Frontend slice” or “database slice” with no user outcome.
- Large slice spanning multiple months without evidence.
- Deferring operator capability.
- Fake integration through mocks only.
- Treating happy-path tests as completion.
- Shipping irreversible schema or state changes without migration and rollback.

## Architectural Integrity Check

- Does the slice prove a complete outcome?
- Are all layers represented?
- Are security and operations included?
- Is failure observable and recoverable?
- Can the slice be rolled back safely?

## References

- PRD-003 Core User Journeys
- PRD-008 Product Acceptance
- ARC-010 Reference Architecture
