# Phoenix Engineering Handbook

**Current repository version:** `3.3.2-constitutional-reconciliation-hardening-r2`  
**Current milestone:** Constitutional Reconciliation and Identity Hardening — Candidate  
**Previous verified milestone:** Identity Slice 1 v3.3.1  
**Next gate:** GitHub Actions verification for `phoenix-core` and `phoenix-docs`  
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
- v3.3.2 reconciliation and hardening: Candidate pending fresh CI evidence.

The current hardening corrects documentation drift, test-discovery gaps, email validation, duplicate-account races, fixed session duration, migration history, `updated_at` behavior, and authentication throttling.

## Canonical path notice

`docs/04_Data_Platform/` is authoritative. `docs/05_Data_Platform/` remains a legacy path pending a separate lossless historical cleanup.

## Release 2 Clean Snapshot

Preserve `.git`, replace all other local repository contents, and then push the resulting changes.
