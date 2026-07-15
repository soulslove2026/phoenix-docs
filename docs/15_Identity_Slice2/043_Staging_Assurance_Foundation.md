# ID2-043 — Staging Assurance Foundation

## Requirement

Phoenix shall provide a governed preproduction environment whose behavior is production-like, whose secrets and data are isolated, and whose evidence can be tied to an immutable release identity.

## Controls

- `staging` is an explicit, validated runtime environment.
- Database-backed operation, HTTPS enforcement, one trusted proxy hop, operations monitoring, and deployment metadata are mandatory.
- WebAuthn RP ID must be non-local and every origin must use HTTPS.
- Password-breach screening may not be disabled.
- Default local database credentials are rejected.
- Sensitive values may be loaded from absolute secret files; direct and file forms are mutually exclusive.
- Documentation is disabled by default.
- The Passkey harness is disabled by default and may be enabled only for an approved staging ceremony.

## Evidence

The preflight report proves configuration posture. The remote smoke report proves HTTPS routing, readiness, database availability, security headers, and deployment identity. Neither report proves a completed Passkey ceremony or production readiness.

## Status

Candidate pending GitHub workflow verification and real staging deployment.
