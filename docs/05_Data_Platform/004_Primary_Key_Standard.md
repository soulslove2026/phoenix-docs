# PDP-004 — Primary Key Standard

**Document ID:** PDP-004  
**Knowledge ID:** KN-DATA-004  
**Version:** 1.0  
**Status:** Approved Baseline

## 1. Default

Primary keys are opaque, immutable, and application-independent.

## 2. Requirements

A primary key must:

- never encode mutable business meaning;
- remain stable for the entity lifetime;
- be safe for distributed generation where required;
- avoid exposing sequence volume when public.

## 3. Public vs Internal IDs

A domain may maintain:

- internal primary key;
- public identifier;
- human-friendly code.

These are distinct concepts and must not be conflated.

## 4. Natural Keys

Natural keys may receive unique constraints but are rarely primary keys.

Examples:

- email address;
- phone number;
- external provider receipt;
- username.

## 5. Composite Keys

Use composite keys only when the relationship itself is the entity and the access pattern benefits from it. Otherwise prefer a surrogate key plus a unique constraint.

## 6. AI Implementation Context

AI agents must justify any nonstandard primary key choice and document migration implications.
