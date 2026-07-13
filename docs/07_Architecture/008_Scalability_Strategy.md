# ARC-008 — Scalability Strategy

| Field | Value |
|---|---|
| Document ID | ARC-008 |
| Category | Architecture |
| Version | 2.1.0 |
| Status | Ratified Specification |
| Maturity | Level 2 — Specification |
| Owner | Phoenix Architecture Council |
| Authority | Normative |
| Depends On | ARC-001 through ARC-007; DPL-013, DPL-015, DPL-019 |
| Required By | Capacity planning, partitioning, performance and service extraction |
| Review Trigger | Material topology, SLO, provider, residency, or scale change |

## Executive Summary

Phoenix scales by protecting authoritative writes, partitioning high-volume workloads on stable keys, separating derived reads from transactional truth, and isolating resource classes. Scaling is evidence-driven. Capacity, latency, queue age, cost, and failure indicators determine when to cache, replicate, partition, or extract a service.

## Scaling Principles

- Scale the bottleneck, not the diagram.
- Keep authoritative write paths small and deterministic.
- Prefer horizontal stateless scaling where practical.
- Partition by access pattern and ownership, not arbitrary table size.
- Make derived systems rebuildable.
- Apply backpressure before overload becomes failure.
- Preserve fairness so one user, room, tenant, model, or provider cannot exhaust the platform.

## Workload Classes

| Workload | Characteristics | Primary strategy |
|---|---|---|
| Identity/profile | Moderate writes, high reads | Cache safe public views; strong ownership |
| Messaging | High write/read, conversation locality | Partition by conversation/thread; ordered per partition |
| Live rooms | Bursty, real-time, ephemeral + durable control | Partition by room; separate media plane from control plane |
| Feed/recommendation | Read-heavy, computation-heavy | Precomputed candidates, caches, asynchronous projections |
| Economy/ledger | Lower volume, highest correctness | Partition carefully by account/ledger domain; no unsafe cache authority |
| Notifications | Burst fan-out | Queues, batching, provider throttling, preference filtering |
| Search | Derived and query-heavy | Dedicated index; rebuild from source events/snapshots |
| AI inference | Variable latency and expensive compute | Quotas, batching, model routing, degradation and caching where safe |

## Partitioning Guidance

- Messaging: stable conversation ID; avoid global ordering.
- Live room control: room ID; hot-room detection and adaptive placement.
- User-centric projections: user ID; protect celebrity/high-fanout users with asynchronous fanout strategies.
- Economy: account or ledger partition chosen only after invariants and cross-account transaction patterns are modeled.
- Events: aggregate ID or domain-specific key to preserve required local order.
- Object/media storage: content ID with region and lifecycle metadata.

Partition keys must be opaque, stable, evenly distributable where possible, and included in operational diagnostics.

## Read Scaling

Use caches for data with explicit freshness and invalidation rules. Read replicas serve tolerant queries and never authorize operations using stale security, balance, or enforcement data. Materialized views and search indexes are asynchronous projections. Cache stampede controls, TTL jitter, request coalescing, and negative caching may be used where appropriate.

## Write Scaling

Keep transactions local to the owner. Batch safe writes, use asynchronous fanout, avoid global counters on critical paths, and replace exact real-time aggregate counts with approximate or delayed projections where product semantics allow. Idempotency keys protect repeated commands.

## Backpressure and Admission Control

Every queue and dependency has capacity limits. The system may reject, defer, sample, degrade, or shed non-critical work. Priority order generally protects authentication, safety, economy, core messaging, and room control before analytics, recommendations, decorative effects, or background enrichment.

## Decision Matrix

| Signal | Response |
|---|---|
| CPU/memory saturation in stateless runtime | Horizontal scale, profile hot path |
| Database lock/transaction contention | Reduce transaction scope, inspect invariant and partitioning |
| Read pressure on source DB | Cache, replica, or projection after freshness review |
| Queue age growth | Add consumers, reduce producer rate, shed low priority, inspect downstream |
| One partition dominates | Hot-key mitigation, adaptive sharding, domain redesign |
| Provider quota exhaustion | Throttle, batch, alternate provider, user-visible degradation |
| Cost grows faster than usage | Optimize data movement, retention, model routing, and fanout |
| Team/release contention | Consider deployable extraction after architectural evidence |

## Performance Budgets

Each critical journey defines a latency budget distributed across edge, application, data, and provider work. Budgets include tail latency, not only averages. Suggested initial classes—not final SLO commitments—are:

- Interactive local API: target low hundreds of milliseconds at p95.
- Messaging acknowledgement: fast authoritative acceptance; delivery may follow asynchronously.
- Economy command: correctness before visual speed, with explicit pending state if provider confirmation is delayed.
- Feed/search: degrade to cached or simpler results under pressure.
- AI enrichment: asynchronous or optional unless product explicitly requires synchronous inference.

Quantitative SLOs require measurement and are ratified in operational specifications.

## Engineering Rules

1. No unbounded list, fanout, queue, retry, or payload.
2. Every high-volume path has a partition key and hot-key strategy.
3. Autoscaling uses meaningful signals and has safe minimum/maximum bounds.
4. Caches declare owner, key, TTL, invalidation, and stale behavior.
5. Derived stores are rebuildable from governed sources.
6. Load tests model bursts, skew, fanout, retries, and dependency slowdown.
7. Capacity plans include storage growth, egress, provider quotas, and operational cost.
8. Rate limits apply at user, device, IP, context, provider, and global levels as appropriate.
9. Performance optimization may not weaken authorization, audit, or ledger integrity.
10. Service extraction requires measurable benefit and migration plan.

## Anti-Patterns

- Global ordering for unrelated events.
- Global mutable counters on every request.
- Cache-as-database without recovery source.
- Infinite retry during dependency outage.
- Uniform scaling for CPU, media, AI, and I/O workloads.
- Premature sharding with no access-pattern evidence.
- Measuring only average latency.

## Security Considerations

Rate limiting and abuse controls are part of capacity protection. Attack traffic must not force expensive database or AI work before cheap validation. Resource quotas prevent denial of wallet, moderation, or administration capabilities by noisy workloads.

## Operational Considerations

Track throughput, p50/p95/p99 latency, error rate, saturation, queue age, partition skew, cache hit ratio, replica lag, database wait events, provider quotas, cost per active user, and cost per key product action.

## AI Context

Model routing considers latency, cost, safety, language, and capability. Expensive inference may use batching, caching with privacy-safe keys, smaller fallback models, or deferred enrichment. Training and feature pipelines must not compete with transactional production workloads.

## Future Evolution

Regionalization, cell architecture, dedicated high-scale messaging/room systems, and specialized ledger partitioning are future options. They are adopted through ADRs after real traffic and failure data exist.

## Architectural Integrity Check

The design passes when scaling preserves invariants, partitioning matches access patterns, overload behavior is deliberate, derived systems remain non-authoritative, and operational cost is measurable.

## References

- DPL-013 Global Identifiers
- DPL-015 Data Consistency Model
- DPL-019 Event Modeling
- ARC-007 Deployment Philosophy
