# PDP-005 — UUID and Identifier Standard

**Document ID:** PDP-005  
**Knowledge ID:** KN-DATA-005  
**Version:** 1.0  
**Status:** Approved Baseline

## 1. Default Identifier

Phoenix prefers time-ordered UUIDs such as UUIDv7 for new distributed entities when supported by the implementation stack.

## 2. Rationale

Time-ordered UUIDs provide:

- decentralized generation;
- lower index fragmentation than fully random UUIDs;
- opaque public identifiers;
- sortable creation tendency without using timestamp as authority.

## 3. Rules

- identifiers are generated in trusted backend or approved infrastructure;
- client-generated IDs are accepted only for explicitly designed offline/idempotent workflows;
- external IDs are stored separately;
- IDs are never reused;
- IDs are not treated as proof of authorization.

## 4. Human-Friendly IDs

Public room codes, agency codes, or usernames require separate fields with validation and collision handling.

## 5. Logging

Identifiers may appear in logs when necessary, but sensitive correlations must be minimized.

## 6. AI Implementation Context

AI agents must not use sequential public IDs by default and must not infer authorization from identifier possession.
