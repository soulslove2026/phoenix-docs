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
| Identity Slice 2 Security Foundation | Verified | Core `9ca9dc8`; docs `ffcdf23` |
| Identity Slice 2 Phase B | Next | Passkeys, MFA, breached-password screening, notification delivery |
| Public production readiness | Blocked | Remaining identity, abuse, operations, privacy, and external assurance controls |

## Current Gate

Identity Slice 2 Phase B may begin. It must remain Candidate until its code, migrations, security review, tests, documentation, CI, CodeQL, and dependency evidence pass.

## Architecture Direction

Preserve the bounded-context modular monolith, PostgreSQL transactional truth, schema-first contracts, explicit ownership, additive durable migrations, least privilege, evidence isolation, and exact repository authority.
