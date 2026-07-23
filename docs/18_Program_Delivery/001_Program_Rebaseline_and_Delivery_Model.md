# PDR-001 — Program Rebaseline and Delivery Model

## Decision

Phoenix remains constitutionally aligned and technically sound. The verified foundation is preserved. Delivery now proceeds through three concurrent workstreams so external assurance cannot consume the entire program.

## Current verified baseline

- Governance through Identity Slice 2 Phase B: verified or ratified.
- Phase C internal workflows: verified.
- Governed HTTPS staging: verified on Phoenix Core 3.8.0.
- Phase C external assurance: incomplete.
- Production readiness: false.
- User-facing application delivery: not yet established as a governed repository and release stream.

## Concurrent workstreams

| Workstream | Planning share | Purpose |
|---|---:|---|
| Product and frontend delivery | 50% | Deliver visible, end-to-end user value |
| Platform and operational automation | 30% | Remove fragile manual operations and improve repeatability |
| External assurance | 20% | Close evidence gates without blocking product construction |

Planning shares are prioritization guidance, not accounting commitments. Security incidents or legal blockers may temporarily override them under the constitutional conflict order.

## Release outcome rule

Every release must produce at least one observable outcome:

1. a user-visible capability;
2. a complete end-to-end journey;
3. a repeated operation reduced to one governed command;
4. a material security or reliability risk closed; or
5. an external assurance gate closed with qualifying evidence.

Documentation remains mandatory, but documentation volume alone is not a delivery outcome.

## Program progress model

Progress is weighted across governance, platform, product, operations, assurance, and launch readiness. Percentages are management estimates and must not be represented as automated evidence.

## Boundary

This rebaseline does not authorize production, relax Phase C gates, amend the Constitution, change Phoenix Core, or claim that Passkey assurance succeeded.
