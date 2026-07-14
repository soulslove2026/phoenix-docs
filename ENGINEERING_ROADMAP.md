# Phoenix Engineering Roadmap

| Phase | Status | Evidence / next decision |
|---|---|---|
| Governance | Ratified | Continuous review |
| Data Platform | Reconciled | Canonical DPL authority |
| Engineering Framework | Ratified | Standards active |
| Architecture Foundation | Ratified | Modular monolith |
| Security Foundation | Ratified | Security-first constitution |
| Product Foundation | Ratified | Product governance active |
| Implementation Planning | Ratified | Slices and gates defined |
| Core Bootstrap | Verified | CI evidence recorded |
| Production Stack | Ratified and migrated | Node 24, TypeScript, Fastify, PostgreSQL |
| Identity Slice 1 | Verified | Registration, login, sessions, logout |
| Identity Slice 2 Security Foundation | Verified | Verification, recovery, sessions, throttling |
| Identity Slice 2 Phase B | Verified | Core `b3e7cb4`; docs `8914a47` |
| Identity Slice 2 Phase C | Next | Browser/device validation, production delivery, operations, external assurance |
| Public production readiness | Blocked | Remaining deployment and external-assurance gates |

## Current gate

Identity Slice 2 Phase C may begin. It must remain Candidate until real-browser, provider, secret-management, monitoring, recovery-drill, privacy, and independent-security evidence is complete.

## Architecture direction

Preserve the bounded-context modular monolith, PostgreSQL transactional truth, schema-first contracts, additive durable migrations, least privilege, cryptographic token handling, evidence isolation, and exact repository authority.
