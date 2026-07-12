# DPL-010 — Phoenix Data Philosophy

**Document ID:** DPL-010
**Knowledge ID:** KN-DPL-010
**Category:** Data Platform
**Version:** 1.0.0
**Status:** Ratified

## Purpose

Phoenix does not organize databases.

Phoenix organizes truth.

Data represents reality. Databases are implementation details.

## Core Principles

- Facts before derived values.
- Single Source of Truth.
- Explicit ownership.
- Immutable events where practical.
- Auditability by default.
- Replaceable storage technologies.
- Data contracts before implementation.

## Fact vs Derived

Facts are authoritative.
Derived values are rebuildable.

## Data Ownership

Each business fact has exactly one owning domain.

## Data Lifecycle

Created → Validated → Stored → Observed → Archived → Expired (where applicable)

## Integrity Rules

- No duplicate truth.
- No hidden ownership.
- No silent mutation.
- No undocumented migrations.

## Architectural Integrity Check

- Is this a fact?
- Who owns it?
- Can it be rebuilt?
- Does it preserve truth?
- Does it strengthen Phoenix in ten years?

## Closing Statement

Phoenix protects truth before performance.
