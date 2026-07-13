# Phoenix Engineering Handbook

**Current repository version:** `3.4.3-identity-slice2-security-foundation-verification`  
**Current milestone:** Identity Slice 2 Security Foundation — Verified  
**Previous verified milestone:** Identity Slice 1 v3.3.1  
**Next gate:** Identity Slice 2 Phase B implementation and verification  
**Next milestone after verification:** Identity Slice 2 — Verification, Recovery, and Session Hardening  
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
