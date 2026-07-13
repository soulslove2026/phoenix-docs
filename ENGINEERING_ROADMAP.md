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
| Identity Slice 1 | Verified | Registration, login, sessions, logout |
| Reconciliation and Hardening | Verified at v3.3.3 | Core `ce38991`; docs `a59dc0f` |
| Identity Slice 2 | Next | Email verification, recovery, MFA/passkeys, advanced sessions |
| Public production readiness | Blocked | Residual security and operations controls required |

## Current Gate

Identity Slice 2 may begin. It must remain Candidate until implementation, migration, security, test, documentation, and CI evidence are complete.

## Architecture Direction

Continue as a bounded-context modular monolith. Preserve PostgreSQL transactional truth, schema-first APIs, explicit ownership, reversible application delivery, additive durable migrations, and automated repository authority.


## Identity Slice 2 Release 1

Version `3.4.1-dependency-governance-hotfix-r1` is Candidate. Security controls are implemented but require GitHub and security verification. Production readiness remains false.

## v3.4.1 Dependency Governance

Routine version updates are controlled, security updates remain enabled, and approved workflow actions use Node.js 24 generations. Verification is pending.
