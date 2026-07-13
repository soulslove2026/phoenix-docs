# DPL-016 — Data Versioning

**Document ID:** DPL-016  
**Knowledge ID:** KN-DPL-016  
**Category:** Data Platform  
**Version:** 1.0.0  
**Status:** Ratified  
**Maturity:** Level 2 — Engineering Specification  
**Owner:** Data Architecture  
**Authority:** DPL-010, DPL-014, DPL-015  
**Depends On:** DPL-010 through DPL-015  
**Required By:** Database, API, Events, Analytics, AI, Operations  
**Review Trigger:** Compatibility incident, migration failure, public-contract change, new regional topology  

## Executive Summary

Phoenix versions every durable representation that may evolve independently: database schemas, records when interpretation changes, API contracts, event schemas, analytics products, derived models, and AI feature definitions. Versioning exists to preserve meaning through change, not to decorate files with numbers.

No destructive schema change is permitted in a single deployment. Phoenix uses expand–migrate–contract, immutable event versions, governed deprecation, and verified backfills.

## Design Goals

- Enable zero-downtime evolution of critical data.
- Preserve old readers while new writers are deployed.
- Make compatibility expectations explicit.
- Support rollback where technically possible.
- Keep historical events interpretable.
- Prevent silent semantic changes to analytics or AI features.

## Versioned Assets

| Asset | Version mechanism | Compatibility expectation |
|---|---|---|
| Database schema | Ordered migration ID and checksum | Old and new application versions overlap safely |
| Public API | Explicit API/contract version | Backward compatible within supported major version |
| Integration event | Immutable event type and schema version | Existing consumers continue to interpret old events |
| Record semantics | `schema_version` or explicit discriminator when needed | Readers migrate or transform deliberately |
| Analytics data product | Contract version and publication date | Consumers receive deprecation notice |
| AI feature definition | Feature-set version and code/model reference | Training and inference are reproducible |
| Materialized view | Projection version and rebuild procedure | Derived state can be regenerated |

## Versioning Rules

### Database Migrations

Database migrations use ordered, immutable identifiers such as timestamps or monotonic sequence numbers. Each migration records owner, checksum, apply status, duration, and failure state. Applied migration files must not be edited; corrections use a new migration.

### Contract Versions

Semantic versioning is used for externally consumed contracts where major, minor, and patch meaning is useful. Internal database migration numbers are not semantic versions.

### Event Versions

An emitted event version is immutable. A breaking payload change creates a new event version or a new event type. Producers may dual-publish temporarily only when the retirement date, cost, and consumer migration plan are documented.

### Record Versions

A record-level version is required when stored fields cannot be interpreted correctly without knowing the schema or policy version. Not every table needs a `schema_version`; use it when semantics, encryption, serialization, or policy interpretation materially changes.

## Expand–Migrate–Contract

1. **Expand:** add nullable fields, new tables, new indexes, or compatible event fields.
2. **Deploy compatible code:** old and new application versions operate safely.
3. **Migrate:** backfill in bounded batches with checkpoints and metrics.
4. **Verify:** compare counts, hashes, invariants, and consumer health.
5. **Switch:** move reads and writes to the new representation.
6. **Observe:** maintain a stability window.
7. **Contract:** remove obsolete fields only after all readers and rollback windows are closed.

## Decision Matrix

| Change | Allowed approach | Prohibited shortcut |
|---|---|---|
| Add optional field | Expand with compatible default | Require every consumer to deploy simultaneously |
| Rename field | Add new field, copy, migrate, deprecate old | Rename in place |
| Change type | Add new typed field or representation | Destructive cast without validation |
| Split table | Build new model, backfill, compare, switch | One-step move during live traffic |
| Change event meaning | Publish new version | Reinterpret historical payload silently |
| Remove API field | Deprecation window and usage evidence | Immediate deletion |
| Change AI feature logic | New feature-set version | Reuse name with different semantics |

## Rollback Strategy

Rollback must be designed before migration. Code rollback is not always equivalent to data rollback. Irreversible transformations require backups, dual-read validation, or compensating migration. A migration that destroys information must not run until the rollback window has explicitly closed.

## Backfill Requirements

Backfills must be restartable, idempotent, rate-limited, observable, and separated from request latency. They must record progress and verify business invariants. Large backfills require capacity assessment and a kill switch.

## Architecture Patterns

- Expand–migrate–contract
- Parallel read and comparison
- Shadow writes with reconciliation
- Versioned event envelope
- Compatibility adapter
- Projection rebuild
- Feature registry for AI and analytics

## Anti-Patterns

- Editing an already-applied migration.
- Deploying a destructive schema change with the only compatible code version.
- Dual-writing indefinitely.
- Reusing an event version after changing meaning.
- Treating a successful migration command as proof of correct data.
- Backfilling through production request paths.

## Engineering Rules

1. Every migration has an owner and verification query.
2. Public and integration contracts define compatibility policy.
3. Breaking changes require a deprecation and consumer-migration plan.
4. Event history remains interpretable after producer upgrades.
5. Backfills are observable and restartable.
6. Contract removal requires usage evidence, not assumption.
7. AI and analytics semantics are versioned with code and source inputs.

## AI Context

Training datasets, prompt templates, model versions, feature transforms, policy filters, and evaluation suites require immutable version references. High-impact inference records must include the model and policy version used. A model upgrade must not silently reinterpret historical labels or features.

## Security Considerations

Version migrations must preserve encryption, access control, masking, and retention classification. New fields default to the strictest applicable classification until reviewed. Migration tooling must use least privilege and must not log sensitive values.

## Operational Considerations

Monitor migration lag, lock time, replication impact, backfill throughput, error rate, comparison mismatches, deprecated-field usage, and event-version consumer counts.

## Implementation Notes

- Store migration checksums and execution metadata.
- Prefer online index creation and bounded batches where supported.
- Keep compatibility adapters temporary and owned.
- Document a sunset date for every deprecated contract.
- Verify data quality before switching authoritative reads.

## Future Evolution

Phoenix may add automated compatibility checks, schema registries, migration policy enforcement, and contract-usage telemetry in CI/CD. Automation strengthens governance but does not replace owner approval for semantic changes.

## Architectural Integrity Check

- Can old and new versions run concurrently?
- Is meaning preserved for historical data?
- Is the migration restartable and observable?
- Is rollback genuinely possible?
- Are consumers known and notified?
- Has destructive removal waited for evidence?

## References

- DPL-014 — Data Lifecycle
- DPL-015 — Data Consistency Model
- DPL-018 — Data Contracts
- DPL-019 — Event Modeling
- Phoenix Engineering Framework documentation and architecture standards
