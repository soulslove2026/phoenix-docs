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
