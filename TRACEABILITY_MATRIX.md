# Phoenix Traceability Matrix

| Requirement / Decision | Authoritative document | Downstream use |
|---|---|---|
| Data represents governed truth | DPL-010 | All persistent systems |
| Every data asset is classified | DPL-011 | Security, AI, retention, analytics |
| Every fact has one owner | DPL-012 | Bounded contexts and service boundaries |
| IDs are stable and opaque | DPL-013 | APIs, events, audit, storage |
| Retention and deletion are explicit | DPL-014 | Privacy, compliance, operations |
| Consistency follows business invariant | DPL-015 | Transactions, sagas, replicas, caches |
| Data evolves compatibly | DPL-016 | Migrations, APIs, events, AI features |
| Material actions are auditable | DPL-017 | Identity, economy, moderation, administration |
| Cross-boundary exchange is governed | DPL-018 | APIs, events, analytics, AI |
| Events are committed facts with at-least-once delivery | DPL-019 | Integration and projection design |
| Engineering decisions follow durable principles | PEF-001 | All designs and reviews |
| Normative documents meet a common standard | PES-001 | All future specifications |
| Architecture includes boundaries, failure, security, and operations | PES-002 | Architecture Foundation |
| AI remains governed and evaluated | PES-003 | AI Platform and product AI |
| Maturity requires evidence | PEF-005 | Release and implementation gates |
| `docs/04_Data_Platform` is canonical | DPL-000 / Architect Notes | Repository navigation and citations |
| Architecture Foundation Release 1 is ratified | ARC-001 through ARC-005 | v2.0.0 Release 1 |
| Phoenix begins with bounded-context modularity | ARC-001 | Initial implementation and extraction decisions |
| Every major business fact has one context owner | ARC-002 | Domain models, APIs, schemas, teams |
| Domain interaction follows explicit synchronous/asynchronous rules | ARC-003 | Workflows, events, degradation behavior |
| Product planning maps to technology-independent capabilities | ARC-004 | Roadmap, build/buy, team topology |
| Trust zones and platform blocks guide system placement | ARC-005 | Security, deployment, provider integration |

| Cross-context communication uses explicit sync, event, saga, and adapter patterns | ARC-006 | APIs, workflows, providers, real-time delivery |
| Deployable topology follows evidence and trust boundaries | ARC-007 | Cloud, environments, delivery and runtime isolation |
| Scale preserves invariants and uses governed partitioning/backpressure | ARC-008 | Capacity, performance and extraction decisions |
| Partial failure is bounded and recoverable | ARC-009 | Resilience, incident response and degraded modes |
| Architecture Foundation is assembled into an implementation reference | ARC-010 | Security Foundation and phoenix-core planning |
