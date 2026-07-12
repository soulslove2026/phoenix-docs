# PDP-001 — Domain Data Model

**Document ID:** PDP-001  
**Knowledge ID:** KN-DATA-001  
**Version:** 1.0  
**Status:** Approved Baseline  
**Related ADRs:** ADR-003, ADR-004

## 1. Purpose

Define how business domains own and expose data.

## 2. Core Rule

Each business entity has one authoritative bounded context.

Examples:

- Account → Identity Domain
- SocialRelationship → Social Graph Domain
- VoiceRoom → Voice Domain
- Community → Community Domain
- Conversation → Messaging Domain
- LedgerEntry → Economy Domain
- Purchase → Payments Domain
- ModerationCase → Trust and Safety Domain

## 3. Cross-Domain Access

A domain may access another domain's information only through:

- application interface;
- versioned API;
- published event;
- approved replicated read model.

Direct SQL joins across domain-owned schemas are prohibited in production application logic.

## 4. Logical Schemas

Initial PostgreSQL logical schemas may include:

- `identity`
- `social`
- `voice`
- `messaging`
- `community`
- `economy`
- `payments`
- `gifts`
- `moderation`
- `notifications`
- `discovery`
- `analytics_ops`
- `admin`

Logical separation must exist even if one physical database is used initially.

## 5. Aggregate Guidance

An aggregate is a consistency boundary, not a folder name.

An aggregate should:

- protect invariants;
- have one root;
- be loaded and changed through approved behavior;
- avoid unbounded child collections;
- emit domain events after meaningful state change.

## 6. Replicated Read Models

Read models may duplicate selected data for:

- discovery;
- search;
- room lists;
- dashboards;
- notifications;
- analytics.

They must document:

- source;
- lag tolerance;
- rebuild strategy;
- failure handling;
- ownership.

## 7. Forbidden Patterns

- shared mutable ORM models across domains;
- one universal `users` object passed everywhere;
- direct balance updates;
- analytics queries against production hot tables;
- domain logic inside database triggers except narrowly approved integrity controls.

## 8. AI Implementation Context

Before generating an entity, an AI agent must identify:

- owning domain;
- aggregate root;
- invariants;
- lifecycle;
- authoritative store;
- published contracts.
