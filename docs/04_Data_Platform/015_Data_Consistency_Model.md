# DPL-015 — Data Consistency Model

**Document ID:** DPL-015  
**Knowledge ID:** KN-DPL-015  
**Category:** Data Platform  
**Version:** 1.0.0  
**Status:** Ratified  
**Maturity:** Level 2 — Engineering Specification  
**Owner:** Data Architecture  
**Authority:** DPL-010, DPL-012, DPL-014  
**Depends On:** DPL-010 through DPL-014  
**Required By:** Identity, Messaging, Voice, Economy, Moderation, Search, Analytics, AI  
**Review Trigger:** New distributed workflow, new financial capability, region expansion, material incident  

## Executive Summary

Phoenix uses the strongest consistency required by a business invariant, not the strongest consistency technically possible. Strong consistency protects identity, money, permissions, and irreversible decisions. Session, causal, or eventual consistency is used where it improves availability and scale without corrupting truth.

Consistency is selected per invariant and per boundary. It is never selected only per database technology.

## Design Goals

- Preserve business invariants under concurrency and partial failure.
- Keep domain transactions local to one authoritative owner.
- Make cross-domain progress observable and recoverable.
- Avoid hidden distributed transactions and false exactly-once claims.
- Support global scale without weakening financial or security correctness.
- Make stale-read tolerance explicit and measurable.

## Consistency Classes

### Strong Consistency

Required when two successful operations cannot both be valid. Typical uses:

- ledger posting and balance-affecting entries;
- purchase verification and entitlement activation;
- credential changes and account recovery state;
- role, permission, and enforcement-state changes;
- withdrawal state transitions;
- idempotency-key registration for critical commands;
- uniqueness constraints that protect identity or value.

### Read-Your-Writes / Session Consistency

Appropriate when a user must immediately observe their own accepted change, while other users may receive the update later. Typical uses:

- profile edits;
- privacy and notification settings;
- room creation acknowledgement;
- device registration;
- user-generated draft state.

### Causal and Ordered Consistency

Required where related events must preserve cause or per-aggregate order:

- messages within one conversation;
- room lifecycle events;
- moderation decision followed by enforcement;
- economy workflow state changes.

Phoenix guarantees order only within a defined ordering scope, normally an aggregate or partition. Global ordering is prohibited unless a documented invariant requires it.

### Eventual Consistency

Preferred for rebuildable or derived views:

- search indexes;
- recommendations and ranking;
- analytics aggregates;
- counters and popularity metrics;
- notification fan-out;
- cached profile projections.

Eventual consistency must include a bounded staleness objective or an explicit statement that no bound is guaranteed.

## Decision Matrix

| Data or workflow | Default consistency | Reason | Recovery mechanism |
|---|---|---|---|
| Financial ledger | Strong, transactional | Prevent double posting and broken invariants | Reconciliation and compensating entries |
| Permission change | Strong | Security state must be authoritative | Retry with idempotency key |
| Message order in a conversation | Per-conversation ordered | Preserve user-visible causality | Sequence check and gap repair |
| Profile read after edit | Read-your-writes | User trust and UX | Session routing or authoritative read |
| Search index | Eventual | Derived and rebuildable | Replay or reindex |
| Recommendation model output | Eventual | Derived, probabilistic value | Regenerate from source facts |
| Cross-domain purchase flow | Saga + local transactions | No global transaction owner | Compensation, timeout, reconciliation |
| Global counters | Eventual or convergent | Availability and scale | Periodic correction from source facts |

## Transaction Boundaries

A transaction must remain inside one bounded context and one authoritative write model whenever possible. A local transaction may atomically change multiple tables owned by the same domain. It must not directly mutate another domain's database.

Cross-domain workflows use:

- transactional outbox for reliable publication;
- inbox or processed-message records for idempotent consumption;
- saga orchestration or choreography;
- explicit timeout and compensation states;
- reconciliation jobs for unresolved cases.

Distributed two-phase commit is prohibited by default. An exception requires an architecture decision record proving that ownership, availability, and operational risks are acceptable.

## Conflict Resolution

The default conflict strategy is optimistic concurrency using a version number, compare-and-set token, or database constraint. Domain rules decide whether to reject, merge, or compensate.

- Last-write-wins is allowed only for low-risk preferences where information loss is acceptable.
- CRDTs may be used for naturally mergeable state after a documented correctness review.
- Financial, authorization, and moderation decisions must never use blind last-write-wins.
- Conflicts must emit measurable outcomes, not disappear silently.

## Architecture Patterns

- Local ACID transaction
- Transactional outbox and idempotent inbox
- Saga with explicit state machine
- Optimistic concurrency control
- Materialized read model
- Reconciliation loop
- Monotonic state transition

## Anti-Patterns

- One transaction spanning multiple services.
- Treating message delivery as exactly once.
- Reading a replica for a security decision without a freshness guarantee.
- Updating derived counters as the only record of truth.
- Retrying non-idempotent commands blindly.
- Using eventual consistency to excuse an undefined invariant.

## Engineering Rules

1. Every write workflow must state its invariant and consistency class.
2. Critical commands require an idempotency key or equivalent deduplication strategy.
3. Consumers must tolerate duplicate delivery.
4. A cross-domain workflow must expose pending, completed, failed, and compensated states.
5. Derived stores must be rebuildable from authoritative facts.
6. Reconciliation must be designed before production launch for money and entitlement flows.
7. Consistency exceptions require an ADR and owner approval.

## AI Context

AI features may read eventually consistent feature stores, but they must not make irreversible financial, identity, or enforcement decisions from stale derived data alone. The model, policy, feature-set version, and source-data timestamp must be recorded for high-impact decisions.

## Security Considerations

Authorization checks must use an authoritative or freshness-bounded source. Credential revocation, account locks, and role changes require propagation objectives and fail-safe behavior. A cache miss or stale cache must never grant additional privilege.

## Operational Considerations

Monitor conflict rates, saga age, outbox lag, inbox duplication, replica lag, reconciliation discrepancies, and stale-read incidents. Alert thresholds must reflect business impact rather than infrastructure convenience.

## Implementation Notes

- PostgreSQL is the default authoritative transactional store unless an ADR selects another technology.
- Use unique constraints and conditional updates to encode invariants close to storage.
- Include correlation and causation IDs in distributed workflows.
- Store saga state durably.
- Make compensation commands idempotent.

## Future Evolution

Future regional deployment may introduce home-region ownership, globally replicated read models, and convergent data types. These changes must preserve the invariants defined here and must not imply global serializability.

## Architectural Integrity Check

- What invariant can be broken by concurrent operations?
- Who owns the authoritative transaction?
- What staleness is acceptable and measurable?
- How are duplicate delivery and retry handled?
- How is an incomplete cross-domain workflow repaired?
- Can derived state be rebuilt?

## References

- DPL-010 — Data Philosophy
- DPL-012 — Data Ownership
- DPL-014 — Data Lifecycle
- DPL-018 — Data Contracts
- DPL-019 — Event Modeling
- ADRs for domain-specific consistency exceptions
