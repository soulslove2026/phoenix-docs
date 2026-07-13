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

## Security Foundation Release 1 — 2026-07-13

### Ratified Decisions

1. Security is an architectural property and release gate, not a final testing phase.
2. Phoenix applies explicit trust, least privilege, defense in depth, secure defaults, and recoverability.
3. Threat modeling includes platform abuse, fraud, insider risk, third-party compromise, and AI-specific attack paths.
4. Authentication is separate from authorization; account recovery is a privileged security workflow.
5. Authorization is deny-by-default and enforced by the bounded context that owns the protected resource.
6. Production access uses named human or workload identity; shared administrator accounts are prohibited.
7. Secrets and cryptographic keys are centrally governed, scoped, rotatable, revocable, and absent from source artifacts.
8. Data protection follows classification, purpose, minimization, lifecycle, and region requirements.
9. Security audit, operational telemetry, integration events, and financial ledger truth remain distinct.
10. AI can assist security decisions but receives bounded data, tools, permissions, evidence requirements, and human accountability.

### Rejected Alternatives

- Trusting requests because they originate on an internal network.
- Treating encryption as a substitute for authorization.
- Long-lived shared service or administrator credentials.
- Client-side-only access control.
- Logging full sensitive payloads for convenience.
- Sending restricted data to external AI systems without explicit governance.
- Building incident response only after a production breach.

### Next Milestone

**Phoenix Product Foundation v2.3.0 — Release 1**, defining MVP scope, user journeys, product capabilities, acceptance principles, and measurable outcomes.

## Product Foundation Release 1 — 2026-07-13

### Ratified Decisions

1. Phoenix optimizes for meaningful, safe participation and durable connection rather than raw engagement.
2. Product segments are defined by jobs and context, not permanent demographic stereotypes.
3. The MVP must prove a coherent loop: trusted onboarding, relevant discovery, safe participation, relationship continuation, and voluntary return.
4. Live voice is a core presence capability; gifting, AI, and broad public discovery remain conditional on explicit readiness gates.
5. Complete user journeys govern delivery across product, architecture, data, security, safety, reliability, and operations.
6. Capabilities require accountable owners, sources of truth, contracts, metrics, operational shutdown paths, and maturity evidence.
7. Experience quality includes comprehension, agency, accessibility, reliability, safety, and emotional respect.
8. Metrics must balance user value with harm, quality, reliability, cost, and operational sustainability.
9. Experiments cannot override critical safety, privacy, security, financial, accessibility, or vulnerable-user guardrails.
10. Release readiness is demonstrated by evidence and rollback, not by code completion alone.

### Rejected Alternatives

- Replicating every competitor capability in the MVP.
- Treating time spent as the universal success metric.
- Launching economy features before ledger, fraud, reconciliation, and support readiness.
- Using AI as an unbounded product authority.
- Shipping user-facing capability without operator workflows.
- Hiding material state, uncertainty, cost, or automated involvement.
- Allowing experiments on critical protections without heightened governance.

### Next Milestone

**Phoenix Implementation Planning v2.4.0 — Release 1**, translating foundations into delivery topology, epics, vertical slices, environments, quality gates, ownership, and implementation sequencing.

## Implementation Planning Release 1 — 2026-07-13

### Ratified Decisions

1. Phoenix implementation proceeds through complete vertical slices rather than disconnected technical layers.
2. The first codebase uses explicit bounded-context modules and limited deployable units before selective service extraction.
3. `phoenix-docs` remains the architecture and product source of truth; `phoenix-core` becomes its executable implementation.
4. The initial repository set is intentionally small and expands only with real ownership or lifecycle evidence.
5. Trunk-based development, protected main, short-lived branches, and feature flags are the default delivery model.
6. User-facing epics include security, data, observability, operations, support, and rollback.
7. The executable sequence begins with repository/CI/environment skeleton, then identity, room truth, discovery, participation, continuity, and safety.
8. Quality is verified through layered test evidence, contract compatibility, failure testing, and continuous document-to-code reconciliation.
9. CI/CD promotes attributable immutable artifacts with risk-weighted approval.
10. Production rollout is progressive, observable, stoppable, and data-aware in rollback design.

### Rejected Alternatives

- Premature microservice fragmentation.
- Infrastructure-first development with no active product slice.
- Long-lived branches and late integration.
- Direct cross-context database access.
- Production deployment from developer machines.
- Testing only happy paths or only user interfaces.
- Rollback plans that ignore data state.
- Global first exposure without controlled cohorts.

### Next Milestone

**Phoenix Core Bootstrap v3.0.0 — Release 1**, creating the initial executable repositories, skeleton, contracts, quality automation, environments, and Slice 0 evidence.

## Core Bootstrap Release 1 — 2026-07-13

1. Slice 0 contains no product capability.
2. The bootstrap is one replaceable stateless process.
3. Node.js standard-library HTTP is provisional.
4. Configuration validation, health, readiness, structured logging, tests, CI, containerization, and graceful shutdown are mandatory.
5. Runtime dependencies are zero for Slice 0.
6. The container runs non-root.
7. `phoenix-core` is separate from `phoenix-docs`.
8. Slice 1 is blocked until CI and runtime evidence verifies Slice 0.
9. Production stack selection is the next architecture decision.
10. Product context boundaries remain authoritative.

## Core Bootstrap Verification — 2026-07-13

### Evidence

- Repository: `soulslove2026/phoenix-core`
- Commit: `be213f8`
- Workflow: `CI`
- Result: Success
- Duration: 24 seconds

### Decision

Slice 0 is now **Verified**.

This closes the bootstrap evidence gate and authorizes Production Stack Ratification. It does not establish production readiness and does not authorize Identity Slice 1 before the stack decision is ratified.

## Production Stack Ratification — 2026-07-13

Ratified Node.js 24 LTS, TypeScript 5.9, Fastify 5, PostgreSQL 18, schema-first REST/OpenAPI, SQL-first repositories, transactional outbox, OpenTelemetry-compatible observability, OCI containers, and GitHub Actions. Redis, an event broker, and specialized search stores remain deferred until evidence. The next action is bootstrap migration, then Identity Slice 1.


## Stack Migration Release 1 — 2026-07-13

1. Slice 0 moved to the ratified Node.js 24, TypeScript 5.9, Fastify 5 stack.
2. PostgreSQL 18 is available but no domain schema is introduced.
3. JSON Schema/OpenAPI is active from the first framework-based API.
4. The migration preserves health, readiness, security headers, request IDs, safe errors, logging, tests, CI, and container controls.
5. Identity Slice 1 remains blocked until repository CI succeeds.

## Stack Migration CI Registry Hotfix — 2026-07-13

The initial migration workflow stalled because the lockfile contained 126 artifact-environment registry URLs. The release pipeline now enforces public registry portability and bounded dependency-install behavior.

**Rule added:** generated lockfiles must be checked for private or environment-specific registries before packaging.

## Stack Migration Verification — 2026-07-13

The corrected migration workflow passed on commit `bdae87a` in 45 seconds.

Verified evidence includes public-registry integrity, dependency installation, TypeScript checks, automated tests, production build, and Docker build.

**Decision:** Stack Migration is Verified. Identity Slice 1 is authorized.

## Identity Slice 1 Verification — 2026-07-13

Identity Slice 1 passed the GitHub Actions quality gate.

Verified evidence includes PostgreSQL migration, strict TypeScript checks, unit tests, integration tests, production build, and Docker build.

**Decision:** Identity Slice 1 is Verified. Identity Slice 2 is authorized.

## Constitutional Reconciliation and Identity Hardening — 2026-07-13

Repository drift and hidden test-discovery weakness were treated as release-blocking defects. v3.3.2 synchronizes authority, adds executable drift checks, and corrects bounded Identity Slice 1 defects without importing Identity Slice 2 scope.

**Decision:** v3.3.2 is Candidate until both repository workflows pass. v3.3.1 remains the verified baseline.


## v3.3.3 Verification Decision

The clean-snapshot strategy resolved manifest drift without weakening the exact-manifest constitutional gate.

Core CI and both documentation workflows passed.

**Decision:** v3.3.2 Release 2 is Verified. Identity Slice 2 is authorized.


## Identity Slice 2 Release 1

Version `3.4.1-dependency-governance-hotfix-r1` is Candidate. Security controls are implemented but require GitHub and security verification. Production readiness remains false.

## v3.4.1 Dependency Governance

Routine version updates are controlled, security updates remain enabled, and approved workflow actions use Node.js 24 generations. Verification is pending.
