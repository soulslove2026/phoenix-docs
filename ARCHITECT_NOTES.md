# Architect Notes

## Reconciliation Decision — 2026-07-13

Phoenix had reached version `1.6.0-engineering-framework-r1`, but repository metadata, indexes, and release records were not synchronized. Data Platform Release 3 files existed as placeholders, and two Data Platform directory paths coexisted.

## Ratified Decisions

1. `docs/04_Data_Platform/` is the canonical Data Platform path.
2. `docs/05_Data_Platform/` is legacy and non-authoritative until a lossless historical cleanup is completed.
3. DPL-015 through DPL-019 are now full Level 2 Engineering Specifications.
4. Phoenix does not adopt global event sourcing as a default.
5. PostgreSQL remains the default authoritative transactional store unless an ADR approves another technology.
6. Durable integration events assume at-least-once delivery and idempotent consumers.
7. Cross-domain consistency uses local transactions, outbox/inbox, sagas, compensation, and reconciliation rather than distributed two-phase commit by default.
8. Audit records remain distinct from telemetry, integration events, and financial ledger truth.
9. Data contracts govern every cross-domain exchange; direct database integration is prohibited.
10. Engineering Framework documents are promoted from bootstrap notes to ratified foundation standards.

## Rejected Alternatives

- Deleting the legacy Data Platform folder without a content-diff review.
- Starting Architecture Foundation while core indexes and data specifications remained contradictory.
- Claiming exactly-once event processing.
- Using last-write-wins for financial, permission, identity, or enforcement state.
- Treating AI model output as final policy authority.

## Open Questions for Architecture Foundation

- Initial modular-monolith boundaries and extraction criteria.
- Region and data-residency strategy.
- Economy/ledger isolation model.
- Messaging and live-voice scalability boundaries.
- Identity, trust, moderation, and AI policy boundaries.
- Initial deployment topology and failure domains.

## Next Milestone

**Phoenix Architecture Foundation v2.0.0 — Release 1** with ARC-001 through ARC-005.

## Architecture Foundation Release 1 — 2026-07-13

### Ratified Decisions

1. Phoenix begins with bounded-context modularity rather than an uncontrolled microservice estate.
2. Logical ownership boundaries remain authoritative even when modules share a deployment unit.
3. Service extraction requires evidence from scale, risk, availability, regulation, technology, or team autonomy.
4. Identity, Trust, Economy, Audit, and Administration are critical contexts requiring stronger isolation.
5. Search, feeds, rankings, caches, analytics, and projections remain derived and rebuildable.
6. Media transport is separated conceptually from live-room control state.
7. External providers are integrated through Phoenix-owned adapters and reconciliation.
8. AI Platform owns governed model operations; domain contexts own business decisions.
9. Architecture Release 1 is logical and does not prematurely freeze final deployment or multi-region topology.
10. Architecture Release 2 will define communication, deployment, scalability, failure isolation, and reference topology.

### Rejected Alternatives

- Starting with one service per bounded context regardless of evidence.
- Allowing shared database tables to become cross-domain APIs.
- Treating the API edge, event bus, search index, or warehouse as business owner.
- Making visual live-gift effects authoritative financial truth.
- Allowing administrative tools to mutate production tables directly.
- Declaring global active-active writes before conflict and residency rules exist.

### Open Questions for Release 2

- Which synchronous calls are permitted on critical user journeys?
- What initial deployable-unit boundaries minimize risk and operational burden?
- What service tiers and quantitative SLOs apply to each capability?
- What partitioning keys support messaging, live rooms, feeds, and economy?
- How will regional routing, residency, and failover evolve?

## Architecture Foundation Release 2 — 2026-07-13

### Ratified Decisions

1. Cross-context integration uses explicit synchronous contracts, durable events, sagas, and provider adapters; direct database integration remains prohibited.
2. Phoenix begins with a limited set of deployable units and extracts services only through evidence and ADRs.
3. Economy, Trust and Safety, Administration, AI workloads, and asynchronous workers receive risk- or workload-based isolation.
4. Messaging partitions by conversation and live-room control by room; global ordering is not required.
5. Durable events use outbox/inbox and at-least-once semantics; ambiguous outcomes use idempotency and reconciliation.
6. Failure policy protects integrity-critical capabilities before derived and decorative work.
7. Search, cache, analytics, feed projections, and visual effects remain rebuildable and non-authoritative.
8. Multi-region and active-active writes are deferred until residency, conflict, routing, and recovery rules are proven.
9. PostgreSQL remains the default transactional source; other technologies require ADRs.
10. ARC-010 is the reference architecture for Security Foundation and initial phoenix-core planning.

### Rejected Alternatives

- One microservice per bounded context from day one.
- Long synchronous chains for ordinary user journeys.
- Infinite retries or exactly-once claims without proof.
- Caches, search indexes, event streams, or AI outputs as silent authority.
- Automatic failover that can violate residency or create split brain.

### Next Milestone

**Phoenix Security Foundation v2.2.0 — Release 1**.
