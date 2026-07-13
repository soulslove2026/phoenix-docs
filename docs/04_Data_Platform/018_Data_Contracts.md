# DPL-018 — Data Contracts

**Document ID:** DPL-018  
**Knowledge ID:** KN-DPL-018  
**Category:** Data Platform  
**Version:** 1.0.0  
**Status:** Ratified  
**Maturity:** Level 2 — Engineering Specification  
**Owner:** Data Architecture  
**Authority:** DPL-011, DPL-012, DPL-016  
**Depends On:** DPL-010 through DPL-017  
**Required By:** APIs, Events, Analytics, AI, Search, Replication, Operations  
**Review Trigger:** New producer/consumer, breaking schema change, data-quality incident, external integration  

## Executive Summary

A Phoenix data contract is a governed agreement between a producer and its consumers. It defines meaning, ownership, schema, classification, quality, compatibility, availability, retention, and failure behavior. A schema without ownership and operational expectations is not a complete contract.

Direct database integration between bounded contexts is prohibited. Cross-boundary data moves through approved APIs, events, replicated read models, governed files, or analytics data products.

## Design Goals

- Give every cross-boundary dataset an owner and stable meaning.
- Preserve compatibility as producers and consumers evolve independently.
- Make classification, quality, freshness, and failure behavior explicit.
- Prevent direct database coupling between bounded contexts.
- Enable automated validation without reducing contracts to schema shape alone.
- Provide a governed path for deprecation, replay, and consumer migration.

## Contract Types

- Synchronous API data contract
- Integration event contract
- Replicated read-model contract
- Analytics or data-product contract
- Batch/file exchange contract
- AI feature or inference-output contract

## Mandatory Contract Metadata

Every contract defines:

- contract ID, name, and version;
- producer and accountable owner;
- known consumer classes;
- business purpose and semantic definitions;
- schema and field descriptions;
- identifiers and ordering scope;
- classification, privacy purpose, and allowed AI use;
- freshness, availability, and latency objectives;
- data-quality rules and acceptable nullability;
- retention and deletion propagation;
- compatibility and deprecation policy;
- failure, retry, quarantine, and replay behavior;
- support channel and incident owner;
- test artifacts and change history.

## Contract Decision Matrix

| Exchange need | Preferred contract | Reason |
|---|---|---|
| Immediate command/result | Synchronous API | Caller needs bounded response |
| Durable business fact | Integration event | Decoupled consumers and replay |
| High-volume read optimization | Replicated read model | Protect owner and localize reads |
| Cross-domain analysis | Governed data product | Semantic and quality ownership |
| External bulk delivery | Versioned encrypted file/batch | Operationally bounded transfer |
| Online model feature | Versioned feature contract | Reproducible inference semantics |

## Compatibility Policy

- Additive optional fields are normally backward compatible.
- Removing, renaming, narrowing, or reinterpreting a field is breaking.
- A field's meaning must not change while retaining the same contract version.
- Consumers must ignore unknown optional fields unless the contract states otherwise.
- Breaking changes require a new major or event version, migration window, and consumer evidence.
- Contracts may not remain permanently in dual-version mode without an owner and sunset date.

## Data Quality

Contracts specify measurable quality rules such as completeness, uniqueness, validity, referential expectations, timeliness, and reconciliation tolerance. Quality failures are routed to an explicit outcome:

- reject at producer boundary;
- accept with warning and metric;
- quarantine for investigation;
- dead-letter for controlled replay;
- compensate or correct at the authoritative owner.

Consumers must not silently repair authoritative facts without owner approval.

## Ownership and Boundaries

The producer owns the contract and the meaning of emitted fields. Consumers own their use of the data. Ownership does not transfer through replication. A read model may transform data, but it must preserve lineage to source contracts.

Database credentials, tables, and internal ORM models are not contracts. A consumer must not depend on an owner's private schema.

## Contract Testing

- Schema validation in CI and at runtime boundaries.
- Backward-compatibility checks against registered prior versions.
- Producer tests for required semantics and quality rules.
- Consumer-driven contract tests for critical synchronous integrations where appropriate.
- Replay tests for event consumers.
- Security tests for classification and field exposure.
- Synthetic examples and negative cases.

## Architecture Patterns

- Schema registry or contract catalog
- Producer-owned contract repository
- Consumer compatibility test
- Quarantine and dead-letter channel
- Data-product service-level objective
- Contract adapter at external boundaries
- Lineage metadata

## Anti-Patterns

- Sharing a database as an integration interface.
- Publishing undocumented payloads.
- Treating JSON shape as sufficient semantics.
- Allowing every consumer to interpret a status code differently.
- Breaking a contract because all known consumers were assumed upgraded.
- Copying restricted fields into analytics by default.
- Hiding quality failures by coercing invalid values.

## Engineering Rules

1. Every cross-domain data exchange has a registered contract and owner.
2. Contracts include classification and allowed processing purpose.
3. Breaking changes use governed versioning and deprecation.
4. Contract validation is automated where feasible.
5. Failures are observable and replayable where the exchange is durable.
6. Data products publish freshness and quality objectives.
7. Unknown consumers do not remove producer responsibility for compatibility.
8. Direct cross-domain database reads and writes are prohibited.

## AI Context

AI feature contracts define source lineage, transformation version, freshness, missing-value policy, classification, bias-sensitive attributes, training permission, online/offline parity expectations, and monitoring. Model outputs are contracts too: they require meaning, confidence interpretation, intended use, prohibited use, and policy version.

## Security Considerations

Contracts expose only required fields. Restricted data requires explicit authorization, encryption, masking, and audit policy. A contract review must prevent accidental privilege escalation through replicated attributes or stale permission data.

## Operational Considerations

Monitor contract rejection, schema drift, quality violations, freshness, consumer lag, dead-letter volume, deprecated-version usage, and unowned contracts. Critical contract incidents must identify the authoritative owner and affected consumers.

## Implementation Notes

- Keep machine-readable schema beside human-readable semantics.
- Generate examples that contain no real personal data.
- Use stable reason codes.
- Register consumers when feasible, but design for unknown future consumers.
- Separate contract compatibility from internal implementation compatibility.

## Future Evolution

Phoenix may automate contract registration, lineage graphs, compatibility gates, consumer impact analysis, and policy enforcement. Contracts remain accountable human agreements even when tooling is automated.

## Architectural Integrity Check

- Who owns the meaning and quality?
- Is the data classification explicit?
- Can an old consumer survive the change?
- What happens to invalid or delayed data?
- Can the exchange be replayed safely?
- Is a private database schema being mistaken for a contract?

## References

- DPL-011 — Data Classification
- DPL-012 — Data Ownership
- DPL-016 — Data Versioning
- DPL-017 — Audit Strategy
- DPL-019 — Event Modeling
