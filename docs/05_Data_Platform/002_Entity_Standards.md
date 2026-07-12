# PDP-002 — Entity Standards

**Document ID:** PDP-002  
**Knowledge ID:** KN-DATA-002  
**Version:** 1.0  
**Status:** Approved Baseline

## 1. Definition

An entity has identity and lifecycle. It is not defined only by its current attributes.

## 2. Required Entity Metadata

Most persistent entities include:

- `id`
- `created_at`
- `updated_at`
- version or concurrency field where needed
- ownership or tenant context where applicable
- deletion marker only when the domain requires soft deletion

## 3. Entity Design Rules

- use domain language;
- store only attributes owned by the domain;
- enforce invariants in domain logic and database constraints where appropriate;
- avoid giant entities containing unrelated features;
- avoid nullable fields that represent multiple incompatible states;
- use explicit status values;
- document state transitions.

## 4. Status Fields

Statuses must be represented by constrained values and documented transitions.

Example:

```text
draft → active → suspended → archived
```

Invalid transitions must be rejected.

## 5. Temporal Data

Use UTC timestamps in storage. Preserve timezone or locale separately when required for user intent.

## 6. Concurrency

Use optimistic concurrency for entities vulnerable to lost updates.

## 7. Sensitive Fields

Sensitive attributes must document:

- classification;
- encryption requirement;
- masking;
- access roles;
- retention;
- audit behavior.

## 8. AI Implementation Context

AI-generated entities must not add speculative fields. Every field requires purpose, owner, type, constraint, and lifecycle meaning.
