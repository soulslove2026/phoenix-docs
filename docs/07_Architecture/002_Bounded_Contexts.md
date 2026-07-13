# ARC-002 — Bounded Contexts

> **Document ID:** ARC-002
> **Knowledge ID:** PHX-ARCH-002
> **Category:** Architecture Foundation
> **Version:** 2.0.0
> **Status:** Ratified Foundation Specification
> **Maturity:** Level 2 — Specification
> **Owner:** Phoenix Architecture Council
> **Authority:** Phoenix Engineering Framework and Data Platform
> **Depends on:** PEF-001, PES-001, PES-002, DPL-010 through DPL-019
> **Review trigger:** Major domain change, deployment-model change, regulatory change, or material scale assumption change


## Executive Summary

This specification defines the initial bounded contexts of Phoenix. A bounded context is an ownership boundary for language, policies, invariants, data, and change. It is not automatically a microservice. Multiple contexts may initially share a deployable unit while preserving separate modules, schemas, interfaces, and owners.

## Context Design Rules

- One context owns each business fact.
- Contexts may consume copies, projections, or references but cannot silently co-own truth.
- Shared concepts use explicit translation at boundaries.
- Contexts expose capabilities through contracts, never direct table access.
- High-risk contexts receive stronger consistency and access controls.
- A context can be split only after its subdomains and invariants are understood.

## Initial Context Catalog

| Context | Primary responsibility | Authoritative facts | Risk tier | Likely initial runtime |
|---|---|---|---|---|
| Identity & Access | Accounts, authentication, credentials, sessions, authorization anchors | Account identity, credential state, sessions, security posture | Critical | Isolated module/service-ready |
| Profile & Presence | Public profile, preferences, presence, settings | Profile attributes, visibility, presence state | Medium | Modular core |
| Social Graph | Follows, friendships, blocks, relationship state | Relationship edges and block policy | High | Modular core |
| Messaging | Conversations, membership, messages, delivery/read state | Conversation and message truth | High | Dedicated module; extractable |
| Live Rooms & Voice | Room lifecycle, membership, speaking roles, live state | Room and participation state | High | Dedicated real-time system |
| Content & Media | Posts, comments, media metadata, publication lifecycle | Content metadata and lifecycle | High | Modular core + media pipeline |
| Discovery & Ranking | Candidate generation, feeds, search, recommendations | Derived rankings, experiments, model decisions | Medium | Dedicated read/AI systems |
| Trust & Moderation | Reports, enforcement, policy decisions, appeals | Cases, decisions, sanctions, policy versions | Critical | Strongly isolated |
| Safety Signals | Abuse signals, reputation inputs, anomaly evidence | Signal records and confidence metadata | High | Controlled platform service |
| Economy & Ledger | Wallets, balances, gifts, purchases, withdrawals, ledger | Financial entries and settlement state | Critical | Strongly isolated service-ready |
| Entitlements & Commerce | Products, offers, receipts, benefits, subscriptions | Entitlements and purchase verification | Critical | Isolated module/service-ready |
| Notifications | Delivery preferences, notification orchestration | Notification requests and delivery state | Medium | Asynchronous platform capability |
| Audit & Compliance | Material action history, evidence, export controls | Append-only audit records | Critical | Isolated storage and access |
| Data & Analytics | Governed data products, metrics, lineage | Derived analytical datasets | High | Platform domain |
| AI Platform | Model registry, prompt versions, inference routing, evaluations | Model configuration and evaluation evidence | High | Platform domain |
| Administration | Admin workflows and operational control surfaces | Administrative cases and approvals | Critical | Restricted surface over domain APIs |
| Developer & Integration | External APIs, webhooks, app credentials | Integration registrations and delivery state | High | Platform edge/domain |

## Detailed Context Definitions

### Identity & Access

**Owns:** account identifier, authentication methods, credential lifecycle, sessions, security challenges, recovery state, authorization anchors.

**Does not own:** profile presentation, relationship state, content, balances, moderation cases.

**Key invariants:**

- A credential belongs to one account.
- Security-critical state changes are strongly consistent and audited.
- Session revocation is authoritative even when downstream caches lag.
- Recovery workflows cannot bypass risk controls.

### Profile & Presence

**Owns:** display name, avatar reference, biography, preference state, visibility settings, presence signals.

**Key boundary:** legal identity and authentication remain in Identity & Access. Public presentation is not identity proof.

### Social Graph

**Owns:** follow, friend, block, mute, and relationship eligibility state.

**Key invariants:**

- Block state overrides ordinary interaction eligibility.
- Relationship transitions are idempotent.
- Privacy and moderation constraints are checked before exposing graph data.

### Messaging

**Owns:** conversation membership, message identifiers, sequence within a conversation, delivery/read state, retention policies.

**Key boundary:** media payload storage may be delegated, but message references and policy remain owned by Messaging.

### Live Rooms & Voice

**Owns:** room lifecycle, participants, roles, stage control, live moderation hooks, session quality metadata.

**Key boundary:** long-term social relationships remain in Social Graph; enforcement decisions remain in Trust & Moderation.

### Content & Media

**Owns:** post/comment lifecycle, publication state, media metadata, edits, takedown status, distribution eligibility.

**Key boundary:** ranking is owned by Discovery; moderation cases by Trust & Moderation; binary media processing by media infrastructure.

### Discovery & Ranking

**Owns:** candidate sets, scoring decisions, experiment assignments, recommendation explanations where required, derived feed/search indexes.

**Key invariant:** ranking is derived and rebuildable. It cannot become the authoritative source for identity, relationships, content existence, or financial state.

### Trust & Moderation

**Owns:** reports, investigations, evidence references, policy decisions, sanctions, appeals, review state.

**Key invariants:**

- Every enforcement action references a policy version and decision actor/model.
- Material automated actions have review and appeal behavior.
- Moderation cannot rewrite source facts owned by another context; it changes eligibility or enforcement state through contracts.

### Economy & Ledger

**Owns:** immutable ledger entries, account balances as derived controlled state, gift transfer state, purchase settlement, withdrawal lifecycle.

**Key invariants:**

- Every financial mutation is idempotent and balanced where double-entry applies.
- Ledger truth is append-oriented and reconciled.
- No other context writes balances directly.

### Entitlements & Commerce

**Owns:** product catalog references, receipt verification, subscriptions, entitlements, revocation state.

**Key boundary:** money movement belongs to Economy; access rights from purchases belong here.

### Audit & Compliance

**Owns:** append-only material action records, evidence hashes, export logs, retention and legal hold metadata.

**Key boundary:** audit is not a replacement for domain events, telemetry, or ledger truth.

### AI Platform

**Owns:** model registry, prompt templates, policy-linked model configuration, routing, evaluation suites, rollout state, cost and quality metadata.

**Key boundary:** domain contexts own business decisions. AI Platform provides governed inference and evidence.

## Context Boundary Matrix

| Interaction | Owner of truth | Consumer | Preferred mechanism | Consistency |
|---|---|---|---|---|
| Account created → profile bootstrap | Identity | Profile | Integration event | Eventual with reconciliation |
| User blocks another user | Social Graph | Messaging, Live, Discovery | API for decision + event for propagation | Strong decision, eventual projections |
| Message sent | Messaging | Notifications, Trust, Analytics | Local transaction + events | Ordered per conversation |
| Gift sent | Economy | Live, Notifications, Analytics | Command to Economy + result event | Strong ledger, eventual experience |
| Content published | Content | Discovery, Trust, Analytics | Integration event | Eventual indexing |
| Enforcement applied | Trust | Identity, Content, Messaging, Live | Governed command/event pair | Strong in Trust; fast propagation |
| Entitlement granted | Commerce | Experience surfaces | API/read model + event | Read-your-writes where required |
| Model version changed | AI Platform | Discovery, Trust | Versioned configuration contract | Controlled rollout |

## Context Mapping Patterns

- **Customer/Supplier:** Identity supplies stable account references to most contexts.
- **Conformist only by contract:** low-risk consumers may conform to published event schemas.
- **Anti-Corruption Layer:** external payment, app-store, identity-provider, and moderation-vendor models are translated into Phoenix language.
- **Open Host Service:** platform contexts expose stable APIs/events for approved consumers.
- **Published Language:** shared envelopes, identifiers, classifications, and audit metadata follow Data Platform standards.

## Extraction Criteria

A bounded context becomes a separate deployable service only when evidence supports at least one driver and the team can operate it independently. Evidence includes sustained load, distinct availability, security isolation, regulatory placement, release contention, or technology specialization.

## Anti-Patterns

- Context names that mirror database tables or UI screens.
- “Shared” contexts that own unrelated data.
- Direct writes into another context’s schema.
- Event payloads containing complete foreign aggregates.
- Central orchestration for every interaction.
- Splitting a context before its invariants are understood.

## Security Considerations

- Identity, Trust, Economy, Audit, and Administration are restricted contexts.
- Authorization decisions must consider both user rights and context-specific policy.
- Sensitive data copies require explicit purpose, retention, and deletion behavior.
- Administrative access routes through domain APIs and is fully audited.

## AI Context

AI Platform is a provider, not a business owner. Discovery may own ranking decisions, Trust may own enforcement recommendations, and Support may own assistant workflows. Each domain records model version, input classification, decision role, confidence, and fallback.

## Operational Considerations

Every context must define owner, service tier, on-call responsibility, dependencies, data recovery, and health signals. Shared runtime deployment does not remove individual context ownership.

## Future Evolution

Release 2 will add communication and failure-isolation rules. Later domain foundations may split contexts, but changes require migration plans, contract evolution, and traceability updates.

## Architectural Integrity Check

- [x] Every major business capability has a proposed owner.
- [x] Critical domains are identified for stronger isolation.
- [x] Contexts are logical boundaries, not automatic microservices.
- [x] Cross-context data ownership is explicit.
- [ ] Product journey validation remains required.
- [ ] Team topology validation remains required before implementation.

## References

- ARC-001 Architecture Vision
- DPL-012 Data Ownership
- DPL-015 Data Consistency Model
- DPL-018 Data Contracts
- DPL-019 Event Modeling
