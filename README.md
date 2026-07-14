# Phoenix Engineering Handbook

**Current repository version:** `3.6.2-identity-slice2-phase-c-compiled-tool-ordering-hotfix-r1`  
**Current milestone:** Identity Slice 2 Phase C — Compiled Tool Ordering Hotfix Candidate  
**Previous verified milestone:** Identity Slice 2 Phase B v3.5.1  
**Next gate:** All five GitHub workflows for v3.6.2  
**Next milestone after verification:** Production assurance and external security validation  
**Production-ready:** No

Phoenix is an AI-native social platform and platform ecosystem. This repository is the authoritative source for governance, architecture, security, product, implementation, data, release evidence, and traceability.

## Start here

- [Master Index](MASTER_INDEX.md)
- [Document Index](DOCUMENT_INDEX.md)
- [Current Release](RELEASE.md)
- [Engineering Roadmap](ENGINEERING_ROADMAP.md)
- [Project Board](PROJECT_BOARD.md)
- [Traceability Matrix](TRACEABILITY_MATRIX.md)
- [Governance Checklist](GOVERNANCE_CHECKLIST.md)
- [Constitution Compliance Report](CONSTITUTION_COMPLIANCE_REPORT.md)
- [Repository Integrity Report](REPOSITORY_INTEGRITY_REPORT.md)

## Current position

- Core Bootstrap Slice 0: Verified.
- Production Stack Ratification: Complete.
- Stack Migration: Verified on commit `bdae87a`.
- Identity Slice 1 v3.3.1: Verified by GitHub Actions.
- v3.3.2 reconciliation and hardening: Verified on core commit `ce38991` and docs commit `a59dc0f`.

The current hardening corrects documentation drift, test-discovery gaps, email validation, duplicate-account races, fixed session duration, migration history, `updated_at` behavior, and authentication throttling.

## Canonical path notice

`docs/04_Data_Platform/` is authoritative. `docs/05_Data_Platform/` remains a legacy path pending a separate lossless historical cleanup.

## Release 2 Clean Snapshot

Preserve `.git`, replace all other local repository contents, and then push the resulting changes.

## v3.3.3 Verification Evidence

- Core CI: Success on commit `ce38991` in 1 minute 4 seconds.
- Documentation Check: Success on commit `a59dc0f` in 10 seconds.
- Documentation Integrity: Success on commit `a59dc0f` in 13 seconds.

## Identity Slice 2

Security-first candidate covering verification, recovery, session hardening, distributed abuse protection, encrypted notification delivery records, and auditable security events.

## v3.4.1 Dependency Governance

Routine version updates are controlled, security updates remain enabled, and approved workflow actions use Node.js 24 generations. Verification is pending.

## v3.4.2 CI Artifact Isolation

Generated security evidence is isolated from governed source state. Verification is pending.

## v3.4.3 Verification Evidence

- Core CI: Success on commit `9ca9dc8` in 56 seconds.
- Core CodeQL: Success on commit `9ca9dc8` in 1 minute 21 seconds.
- Documentation Check: Success on commit `ffcdf23` in 7 seconds.
- Documentation Integrity: Success on commit `ffcdf23` in 10 seconds.

## Identity Slice 2 Phase B

Verified implementation of Passkeys, TOTP MFA, one-time recovery codes, breached-password screening, recent-authentication controls, and production-shaped notification delivery.

## v3.5.1 Phase B Verification Evidence

- Core CI: Success on commit `b3e7cb4` in 1 minute 1 second.
- Core CodeQL: Success on commit `b3e7cb4` in 1 minute 21 seconds.
- Documentation Check: Success on commit `8914a47` in 10 seconds.
- Documentation Integrity: Success on commit `8914a47` in 14 seconds.

## v3.6.0 Phase C Release 1

Phoenix now includes controlled browser validation, protected operational monitoring, key-rotation and recovery tooling, incident snapshots, and supply-chain attestations. Production readiness remains false until external evidence is complete.


## v3.6.1 TypeScript Header Hotfix

Commit `7989ab9` exposed a strict TypeScript error in the Passkey harness header assertion. The assertion now narrows `x-robots-tag` to a string before validating `noindex`, preserving the security requirement without coercion.


## v3.6.2 Compiled Tool Ordering Hotfix

Commit `c590f6e` showed that CI attempted to execute the compiled incident snapshot before the production build. The corrected workflow builds first and verifies the compiled file.
