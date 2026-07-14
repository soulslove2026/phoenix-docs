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


## Identity Slice 1 and Reconciliation Traceability

| ID | Requirement / decision | Authoritative specification | Implementation evidence | Test / verification evidence |
|---|---|---|---|---|
| IDN-001 | Deliver a complete bounded Identity vertical slice | `docs/14_Identity_Slice1/001_Identity_Slice_Charter.md` | `src/identity/`, `src/app.ts` | unit + PostgreSQL integration CI |
| IDN-002 | User and session invariants have one owner | `002_Identity_Domain_Model.md` | `types.ts`, repository, migrations | service and integration tests |
| IDN-003 | Registration/login/me/logout are governed contracts | `003_Registration_and_Login_Contract.md` | `routes.ts`, OpenAPI schemas | OpenAPI + integration tests |
| IDN-004 | Passwords and session tokens remain secret-safe | `004_Session_Security_Model.md` | `password.ts`, `session-token.ts` | service tests and DB inspection boundary |
| IDN-005 | Persistence is durable and migratable | `005_Persistence_and_Migration.md` | migrations 001/002, migration ledger | migration twice in CI + integration tests |
| IDN-006 | Threats and abuse are reviewed explicitly | `006_Threat_and_Abuse_Review.md` | generic login errors, rate limiter, constraints | unit/integration tests; REC-006 risks |
| IDN-007 | Verification is evidence-based | `007_Test_and_Verification_Plan.md` | `.github/workflows/ci.yml` | GitHub Actions gate |
| REC-001 | Repository authority must be coherent | `docs/15_Repository_Reconciliation/001_Reconciliation_Charter.md` | synchronized metadata and release files | repository integrity workflows |
| REC-002 | Findings must map to corrections | `002_Findings_and_Corrections.md` | code/docs paths listed in the finding table | local audit + CI |
| REC-003 | Constitutional compliance is explicit | `003_Constitution_Compliance.md` | governance and compliance reports | docs integrity workflow |
| REC-004 | Hardening decisions preserve scope | `004_Identity_Hardening_Decisions.md` | bounded code changes | typecheck/tests/review |
| REC-005 | Drift must fail automatically | `005_Repository_Integrity_and_CI_Gate.md` | repository-check scripts/workflows | both repository workflows |
| REC-006 | Residual risk blocks production claims | `006_Residual_Risks_and_Deferred_Controls.md` | `production_ready=false` and security docs | repository checks |

## Identity Slice 2 Traceability

| Requirement | Specification | Core implementation | Verification |
|---|---|---|---|
| ID2-001 | Security charter | `SECURITY.md / CI` | security review |
| ID2-002 | Email verification | `service.ts / repository.ts / migration 003` | integration test |
| ID2-003 | Password recovery | `service.ts / repository.ts` | integration test |
| ID2-004 | Password security | `password.ts` | password tests |
| ID2-005 | Session hardening | `service.ts / repository.ts` | integration test |
| ID2-006 | Distributed abuse protection | `distributed-rate-limit.ts` | PostgreSQL integration |
| ID2-007 | Audit and privacy | `identity_security_events / token-crypto.ts` | integration and static checks |
| ID2-008 | Secrets and crypto | `config.ts / token-crypto.ts` | config and crypto tests |
| ID2-009 | Threat model | `ID2-009` | security review |
| ID2-010 | ASVS traceability | `ID2-010` | external review pending |
| ID2-011 | Verification plan | `CI / CodeQL` | GitHub evidence pending |
| ID2-012 | Production blockers | `ID2-012` | must remain false |

| ID2-013 | Controlled dependency and workflow governance | `.github/dependabot.yml`, dependency review, governance check | Verified |

| ID2-014 | Isolate CI evidence from source authority | CI workflow and dependency governance check | Verified |

| ID2-015 | Deliver Phase B as a bounded, evidence-gated security slice | Phase B charter | `src/identity/`, migration 004 | Verified |
| ID2-016 | Passkeys require RP/origin validation and user verification | WebAuthn architecture | `passkeys.ts`, repository, routes | Verified |
| ID2-017 | TOTP and recovery codes resist replay and disclosure | MFA specification | `totp.ts`, service, migration 004 | Verified |
| ID2-018 | New passwords are screened without disclosing them | Breached-password specification | `password-breach.ts` | Verified |
| ID2-019 | Notifications are encrypted, idempotent, retryable, and dead-lettered | Notification delivery specification | worker, outbox repository | Verified |
| ID2-020 | Sensitive actions require recent appropriate assurance | Reauthentication specification | session assurance/service gates | Verified |
| ID2-021 | Phase B threats and residual risks are explicit | Threat model | controls and production blockers | Verified |
| ID2-022 | ASVS requirements map to implementation evidence | ASVS traceability | security/check scripts and tests | Verified |
| ID2-023 | Verification is layered and reproducible | Test plan | CI, CodeQL, PostgreSQL, Docker, docs | Verified |
| ID2-024 | Residual controls block production claims | Production blockers | `production_ready=false` | Verified |

| ID2-025 | Govern Phase C as a bounded candidate | charter, release authority, project board | Candidate |
| ID2-026 | Validate Passkeys in real browsers and authenticators | browser harness and validation plan | Candidate |
| ID2-027 | Validate a real production notification provider | provider smoke command and runbook | Candidate |
| ID2-028 | Provide protected aggregate operations monitoring | operations routes, metrics, alert plan | Candidate |
| ID2-029 | Rotate encrypted identity payload keys transactionally | key rotation helper and runbook | Candidate |
| ID2-030 | Prove backup, isolated restore, and recovery integrity | assurance workflow and restore verifier | Candidate |
| ID2-031 | Produce privacy-preserving incident evidence | snapshot utility and incident runbook | Candidate |
| ID2-032 | Produce build provenance and SBOM attestations | attestation workflow and evidence bundle | Candidate |
| ID2-033 | Map Phase C to ASVS and NIST assurance | traceability document | Candidate |
| ID2-034 | Keep external evidence and exit gates explicit | evidence and exit-gate document | Candidate |
| ID2-035 | Build compiled operational tools before executing them | CI, assurance, dependency governance | Candidate |

| ID2-036 | Verify all automated internal Phase C gates | GitHub Actions evidence for core and docs | Verified internal gate |
