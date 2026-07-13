# Phoenix Engineering Roadmap

| Phase | Status | Evidence / next decision |
|---|---|---|
| Governance | Foundation ratified | Continuous release review |
| Data Platform | Reconciled | DPL-010–019 canonical |
| Engineering Framework | Ratified | Standards active |
| Architecture Foundation | Ratified | ARC-001–010 |
| Security Foundation | Ratified | SEC-001–007 |
| Product Foundation | Ratified | PRD-001–008 |
| Implementation Planning | Ratified | IMP-001–010 |
| Core Bootstrap | Verified | Slice 0 CI evidence |
| Production Stack | Ratified and migrated | Node 24, TypeScript, Fastify, PostgreSQL |
| Identity Slice 1 | Verified at v3.3.1 | Registration, login, sessions, logout |
| Reconciliation and Hardening | Candidate v3.3.2 | Both repository workflows required |
| Identity Slice 2 | Next after verification | Email verification, recovery, MFA/passkeys, advanced sessions |
| Public production readiness | Blocked | Requires residual security/operations controls |

## Current gate

Do not advance the roadmap until v3.3.2 passes both `phoenix-core` CI and `phoenix-docs` Documentation Integrity. Then create a verification-only release with exact commit and workflow evidence.

## Architecture direction

Continue as a bounded-context modular monolith. Introduce new infrastructure only when evidence justifies it. Preserve PostgreSQL transactional truth, schema-first APIs, explicit ownership, reversible application delivery, additive durable migrations, and automated repository authority.
