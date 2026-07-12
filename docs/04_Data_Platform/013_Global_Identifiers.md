# DPL-013 — Global Identifiers

**Document ID:** DPL-013  
**Knowledge ID:** KN-DPL-013  
**Version:** 1.0.0  
**Status:** Ratified  
**Owner:** Data Architecture  
**Authority:** DPL-010, DPL-012  

## Purpose

Define stable, opaque, globally unique identifiers for Phoenix entities and events.

## Default

Phoenix prefers time-ordered UUIDs such as UUIDv7 for distributed entities where supported.

## Rules

- IDs are immutable.
- IDs contain no mutable business meaning.
- IDs are never reused.
- Public IDs must not reveal scale or sequence.
- External provider IDs are stored separately.
- Human-readable codes are separate from primary identifiers.
- Possession of an ID never implies authorization.

## Identifier Classes

- Entity ID
- Event ID
- Correlation ID
- Request ID
- Session ID
- External Provider ID
- Human-Friendly Code

## Generation

Trusted backend systems generate authoritative identifiers unless an offline workflow explicitly permits client generation.

## Indexing

Identifier format must support efficient indexing and operational scale.

## Security

Identifiers are not secrets. Authorization must be enforced independently.

## Impact on Other Domains

Identifiers affect APIs, events, audit, tracing, search, analytics, and data migration.

## Engineering Implementation Notes

- Use consistent serialization.
- Validate identifier type at boundaries.
- Store external IDs in namespaced fields.
- Avoid polymorphic IDs without explicit type.
- Include correlation IDs in critical workflows.

## Architectural Integrity Check

- Is the identifier stable?
- Is it opaque?
- Is its authority clear?
- Is authorization independent?
- Can it survive storage migration?
- Does this make Phoenix stronger in ten years?
