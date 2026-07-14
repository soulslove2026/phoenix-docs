# Phoenix Engineering Roadmap

| Phase | Status | Evidence / next decision |
|---|---|---|
| Governance through Product Foundation | Ratified | Continuous review |
| Core Bootstrap and Production Stack | Verified / ratified | Node 24, TypeScript, Fastify, PostgreSQL |
| Identity Slice 1 | Verified | Core account and session lifecycle |
| Identity Slice 2 Security Foundation | Verified | Verification, recovery, throttling, audit |
| Identity Slice 2 Phase B | Verified | Passkeys, TOTP, recovery codes, password screening, notification worker |
| Identity Slice 2 Phase C Release 1 | Candidate | Validation, operations, rotation, recovery, incident, provenance tooling |
| Production readiness | Blocked | External assurance evidence and independent review |

## Current decision

Run all repository workflows, then collect controlled real-environment evidence. Do not convert Phase C to Verified or Phoenix to production-ready from CI evidence alone.
