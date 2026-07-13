# DPL-019 — Event Modeling

**Document ID:** DPL-019  
**Knowledge ID:** KN-DPL-019  
**Category:** Data Platform  
**Version:** 1.0.0  
**Status:** Ratified  
**Maturity:** Level 2 — Engineering Specification  
**Owner:** Domain and Data Architecture  
**Authority:** DPL-012, DPL-015, DPL-016, DPL-018  
**Depends On:** DPL-010 through DPL-018  
**Required By:** Domain Services, Messaging, Economy, Moderation, Search, Analytics, AI, Operations  
**Review Trigger:** New event platform, ordering incident, replay incident, breaking event change  

## Executive Summary

Phoenix models events as immutable statements that a meaningful fact occurred. Events are not remote procedure calls, database row dumps, or ungoverned telemetry. Domain events express facts inside a bounded context; integration events expose selected facts across boundaries; audit events prove actions; telemetry events observe technical behavior; commands request work.

Phoenix assumes at-least-once delivery for durable integration events and requires idempotent consumers. It does not claim exactly-once end-to-end processing.

## Design Goals

- Represent committed business facts with precise semantics.
- Keep commands, domain events, integration events, audit, and telemetry distinct.
- Support reliable at-least-once delivery with idempotent consumers.
- Define ordering only where a business invariant requires it.
- Enable safe evolution, replay, projection rebuild, and operational diagnosis.
- Minimize sensitive payloads and infrastructure leakage.

## Event Categories

| Category | Meaning | Example |
|---|---|---|
| Domain event | Fact meaningful inside one domain | `WithdrawalApproved` |
| Integration event | Governed fact published to other domains | `EntitlementActivatedV1` |
| Audit event | Evidence of a material action | `AdministratorRoleChanged` |
| Telemetry event | Technical observation | `ConsumerLagObserved` |
| Command | Request for an action; not an event | `ApproveWithdrawal` |

## Naming Rules

Events use past tense and describe facts: `UserRegisteredV1`, `GiftSentV1`, `WithdrawalApprovedV1`, `VoiceRoomStartedV1`. Commands use imperative intent. An event name must not imply a fact that has not committed at its authoritative owner.

## Standard Event Envelope

Durable integration events contain:

- `event_id`;
- `event_type` and `event_version`;
- `occurred_at` and `published_at`;
- producer service and owning domain;
- aggregate type and aggregate identifier;
- per-aggregate sequence where ordering is required;
- correlation and causation identifiers;
- tenant, region, or jurisdiction context when applicable;
- data classification and retention class;
- trace context where safe;
- payload governed by a registered data contract.

## Delivery Semantics

- Durable events are delivered at least once.
- Consumers must detect or safely tolerate duplicates.
- Ordering is guaranteed only within a documented partition or aggregate scope.
- Delivery and business processing are separate acknowledgements.
- Failed events move to retry and then quarantine/dead-letter handling according to policy.
- Replay must use the original event identity and version or a clearly identified replay envelope.

## Outbox and Inbox

A producer writes its authoritative state change and outbox record in the same local transaction. A publisher transfers the outbox event to the broker. A consumer records processed event IDs or an equivalent idempotency token in the same local transaction as its durable side effect where practical.

The outbox does not make the whole workflow exactly once. It makes publication recoverable. The inbox does not prevent every duplicate side effect unless the side effect itself is inside the protected transaction or independently idempotent.

## Ordering and Partitioning

Partition keys follow the invariant:

- conversation ID for message order;
- account or wallet ID for account-local economy order;
- room ID for voice-room lifecycle;
- moderation case ID for case progression.

A single global partition is prohibited unless an ADR proves the invariant and capacity requirement. Consumers must detect sequence gaps when ordered processing is required.

## Event Payload Design

Events contain the minimum stable facts consumers need. Prefer identifiers and meaningful business values over full entity snapshots. Restricted content should remain at the authoritative owner unless cross-boundary distribution is explicitly approved.

An integration event must not expose internal table names, ORM objects, or unstable implementation fields.

## Decision Matrix

| Need | Use | Do not use |
|---|---|---|
| Ask another domain to perform work | Command/API | Fake event named `DoSomething` |
| Announce committed business fact | Integration event | Direct database write |
| Rebuild search projection | Replayable integration events | Scrape owner tables |
| Record administrator evidence | Audit event | Generic debug log |
| Measure latency | Telemetry | Business event payload |
| Preserve full financial truth | Ledger + selected events | Event stream as an undocumented ledger substitute |

## Schema Evolution

Event versions are immutable. Additive optional fields may preserve compatibility when semantics remain unchanged. Breaking changes create a new version. Consumers must declare supported versions, and producers must monitor old-version usage before retirement.

## Replay and Retention

Replay eligibility, retention period, and source of truth are explicit. Consumers must separate live processing from replay controls and prevent replay from sending duplicate user notifications or external payments. Rebuildable projections should support reset and deterministic replay where possible.

## Architecture Patterns

- Transactional outbox
- Idempotent inbox/consumer
- Partitioned event stream
- Versioned event envelope
- Dead-letter quarantine with controlled replay
- Projection rebuild
- Saga state machine
- Correlation and causation tracing

## Anti-Patterns

- Events named as commands.
- Publishing before the authoritative transaction commits.
- Full database-row snapshots as public contracts.
- Assuming broker exactly-once equals business exactly-once.
- Depending on global event order.
- Infinite retries with no quarantine.
- Reusing an event name after changing meaning.
- Putting secrets or unrestricted content in event payloads.

## Engineering Rules

1. Every integration event has an owner and registered contract.
2. Consumers are idempotent.
3. Ordering scope is explicit.
4. Publication is coupled to local commit through an outbox or equivalent guarantee.
5. Event versions are immutable.
6. Replay side effects are controlled.
7. PII and restricted content are minimized.
8. Commands and events remain semantically distinct.
9. No architecture document may claim end-to-end exactly once without proof and defined boundaries.

## AI Context

Behavioral events used for recommendations or model training require purpose, consent or lawful basis where applicable, classification, retention, and sampling policy. Model-feature pipelines must distinguish user facts from inferred labels. AI training consumers must not broaden event use beyond the contract.

## Security Considerations

Authorize publishers, authenticate broker connections, encrypt transport, validate schemas, and isolate sensitive topics. Event possession does not imply permission to retrieve the referenced entity. Security-critical consumers must account for stale permissions and replay abuse.

## Operational Considerations

Monitor publish lag, consumer lag, duplicate rate, sequence gaps, schema rejection, dead-letter volume, replay activity, and outbox age. Every critical stream has an owner and runbook.

## Implementation Notes

- Use UUIDv7 or an approved opaque event identifier.
- Keep envelope fields stable across event types.
- Include test fixtures for every version.
- Store original failure reason in quarantine metadata.
- Apply backpressure rather than unbounded in-memory buffering.

## Future Evolution

Phoenix may add a schema registry, event catalog, automated lineage, regional routing, and policy-controlled replay. Event sourcing may be adopted for a specific aggregate only through an ADR; it is not the global default.

## Architectural Integrity Check

- Is this a committed fact or a request?
- Who owns the fact?
- What is the ordering scope?
- How are duplicates handled?
- Can replay create harmful side effects?
- Is the payload minimal and governed?
- Can old consumers interpret the event after evolution?

## References

- DPL-012 — Data Ownership
- DPL-015 — Data Consistency Model
- DPL-016 — Data Versioning
- DPL-017 — Audit Strategy
- DPL-018 — Data Contracts
