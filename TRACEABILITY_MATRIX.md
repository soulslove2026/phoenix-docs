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

| Security uses explicit trust, least privilege, and recoverability | SEC-001 | All implementations and operations |
| Threat models cover cyber threats and platform abuse | SEC-002 | Capability design and release review |
| Authentication assurance follows transaction risk | SEC-003 | Identity, sessions, recovery, privileged access |
| Authorization is deny-by-default and resource-owned | SEC-004 | APIs, services, admin, AI tools |
| Secrets and keys are centrally governed and rotatable | SEC-005 | Infrastructure, services, providers, CI/CD |
| Data protection follows classification and lifecycle | SEC-006 | Storage, APIs, events, analytics, AI |
| Security incidents require auditable readiness and recovery | SEC-007 | Monitoring, response, investigation, learning |

| Product strengthens meaningful connection, trust, and progression | PRD-001 | Strategy, roadmap, product decisions |
| Segments are defined by context and jobs, not stereotypes | PRD-002 | Research, onboarding, personalization |
| Complete journeys govern feature delivery | PRD-003 | Product, engineering, operations |
| MVP proves one coherent safe loop | PRD-004 | Prioritization and release planning |
| Capabilities map to owners, contexts, data, and operations | PRD-005 | Architecture and implementation planning |
| Experience preserves comprehension, agency, accessibility, and trust | PRD-006 | Design system and product review |
| Metrics balance value, safety, quality, reliability, and sustainability | PRD-007 | Analytics and experimentation |
| Releases require cross-domain evidence and rollback | PRD-008 | Release governance |

| Implementation delivers complete vertical slices | IMP-001, IMP-004 | Delivery planning and execution |
| Repository boundaries reflect real ownership | IMP-002 | Codebase and repository creation |
| Epics complete user and operator outcomes | IMP-003 | Backlog and roadmap |
| Dependencies are explicit and directional | IMP-005 | Sequencing and integration |
| Every asset has one accountable owner | IMP-006 | Team and operational governance |
| Environments isolate secrets, data, and configuration | IMP-007 | Platform and deployment |
| Quality is verified through layered evidence | IMP-008 | Testing and release gates |
| CI/CD promotes attributable immutable artifacts | IMP-009 | Software supply chain |
| Rollout is controlled, observable, and reversible | IMP-010 | Production operations |
| Core begins with an executable replaceable Slice 0 | CORE-001, CORE-003 | phoenix-core bootstrap |
| Technology remains provisional before Slice 1 | CORE-002 | Stack ratification |
| Repository preserves future context boundaries | CORE-004 | Code organization |
| Configuration is validated and secret-safe | CORE-005, CORE-007 | Runtime controls |
| CI provides reproducible quality evidence | CORE-006 | Branch protection |
| Observability begins before product logic | CORE-008 | Runtime evidence |
| Slice 0 verification is evidence-based | CORE-009 | Gate to Slice 1 |
| Production runtime uses supported Node.js LTS | STACK-001, STACK-003 | phoenix-core runtime |
| API boundaries use Fastify and JSON Schema | STACK-003 | HTTP adapters and contracts |
| PostgreSQL is authoritative transactional truth | STACK-004 | Identity and future domains |
| Infrastructure is introduced only with evidence | STACK-001, STACK-004 | Architecture evolution |
| Identity cannot begin before stack migration evidence | STACK-007, STACK-008 | Identity Slice 1 gate |

| Stack migration preserves Slice 0 controls | MIG-001, MIG-002 | phoenix-core runtime |
| PostgreSQL enters without premature domain schema | MIG-003 | Identity readiness |
| APIs are schema-first and OpenAPI-visible | MIG-004 | API delivery |
| CI verification blocks Identity Slice 1 | MIG-005, MIG-006 | Release governance |
