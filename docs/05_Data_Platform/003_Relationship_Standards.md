# PDP-003 — Relationship Standards

**Document ID:** PDP-003  
**Knowledge ID:** KN-DATA-003  
**Version:** 1.0  
**Status:** Approved Baseline

## 1. Purpose

Define safe, scalable, and understandable relationships between data entities.

## 2. Relationship Rules

- relationships must reflect domain meaning;
- foreign keys are required within the same owned schema unless performance or lifecycle constraints justify otherwise;
- cross-domain references use stable identifiers and contracts;
- cascading deletes are prohibited by default;
- many-to-many relationships use explicit join entities when they carry behavior or metadata.

## 3. Join Entities

Use an explicit entity when the relationship has:

- role;
- status;
- timestamps;
- permissions;
- source;
- ordering;
- invitation state;
- audit requirements.

Example: `community_memberships`.

## 4. Delete Behavior

Default behavior is restrictive:

- prevent accidental cascade loss;
- use archival, anonymization, or compensating processes where required;
- document orphan handling.

## 5. Cardinality

Cardinality assumptions must be documented for performance planning.

Example:

- one community may have millions of memberships;
- one voice room may have thousands of concurrent participants;
- one conversation may have unbounded messages.

Unbounded collections must never be loaded as one aggregate.

## 6. Cross-Domain References

Do not create database foreign keys across independently owned bounded contexts if that blocks extraction or deployment independence.

## 7. AI Implementation Context

AI agents must not infer cascade behavior. They must document cardinality, lifecycle coupling, and deletion semantics.
