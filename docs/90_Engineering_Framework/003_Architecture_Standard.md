# PES-002 — Architecture Standard

**Document ID:** PES-002  
**Version:** 1.1.0  
**Status:** Ratified  
**Maturity:** Level 3 — Engineering Standard  
**Owner:** Phoenix Architecture Council  

## Purpose

Define how Phoenix architecture is described, decided, reviewed, and evolved.

## Required Architecture Views

A material subsystem design includes:

- context and user/business outcomes;
- capability and bounded-context ownership;
- system/container view;
- data ownership and flows;
- synchronous and asynchronous interactions;
- trust boundaries and threat considerations;
- deployment and failure-isolation model;
- scalability assumptions and limits;
- observability and operational ownership;
- migration and rollback strategy.

## Boundary Rules

- A bounded context owns its write model.
- Cross-context mutation occurs through commands/APIs owned by the target or through governed workflows.
- Data replication does not transfer ownership.
- Shared libraries contain technical primitives, not hidden domain authority.
- Service extraction requires evidence: ownership, independent scaling, security isolation, or failure isolation.

## Architecture Decision Records

An ADR is required for decisions that are difficult to reverse, cross multiple teams, introduce a major technology, change a data owner, alter a security boundary, or create material operational cost. ADRs include context, decision, alternatives, consequences, migration, and review trigger.

## Non-functional Requirements

Architecture specifications define measurable expectations for availability, latency, throughput, recovery, durability, consistency, privacy, security, cost, and regional behavior. “High availability” without a target and failure model is incomplete.

## Decision Matrix

| Question | Default | Exception evidence |
|---|---|---|
| Monolith or services | Modular monolith | Independent scale/ownership/isolation |
| Communication | Synchronous for immediate result; events for facts | Documented latency/coupling need |
| Storage | PostgreSQL for authoritative transactions | Workload evidence and migration plan |
| Cache | Derived and disposable | Never authority for permissions or money |
| Region model | Single primary region initially | Regulatory or latency requirement |
| Build or buy | Managed commodity where strategic value is low | Cost, control, or compliance case |

## Resilience Rules

Dependencies have timeouts, bounded retries with jitter, circuit or load-shedding behavior, capacity limits, and observable failure states. Critical workflows have idempotency and reconciliation. Bulkheads isolate unrelated failure domains.

## Security and Privacy

Every design identifies trust boundaries, data classification, authentication, authorization, secret handling, audit, retention, abuse cases, and external-provider risk.

## Operational Readiness

Before production, a component needs owner, SLOs, dashboards, alerts, runbooks, capacity assumptions, backup/recovery where relevant, deployment strategy, and rollback/compensation plan.

## Anti-Patterns

- Architecture by diagram with no invariants or ownership.
- Microservices as an organizational aspiration.
- Shared databases between domains.
- Unbounded queues or retries.
- Global consistency or global ordering claims without proof.
- Critical components with no operational owner.
- Technology selection before problem definition.

## Architecture Review Gate

A design passes when it is coherent with governance and data standards, alternatives were evaluated, security and operations are explicit, migration is safe, and unresolved risk has a named owner and acceptance decision.
