# Phoenix Engineering Handbook

**Current repository version:** `3.8.4-program-rebaseline-and-delivery-roadmap-r1`
**Current milestone:** Program Rebaseline and Delivery Roadmap — Candidate
**Previous verified milestone:** v3.8.3 staging-roadmap reconciliation
**Next platform milestone:** Phoenix Core 3.9.0 Assurance Operator
**Next product milestone:** Frontend technology/repository ratification, then `phoenix-app 0.1.0`
**Production-ready:** No

Phoenix is an AI-native social platform and platform ecosystem. This repository remains the authoritative source for governance, architecture, security, product, implementation, data, release evidence, and traceability.

The program now advances through concurrent Product, Platform Automation, and External Assurance workstreams. Passkey R1/R2 remain non-qualifying diagnostic attempts; manual R3 is blocked until the assurance operator is verified.

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

## v3.6.3 Internal Workflow Verification

- Core `d5ef049`: CI, CodeQL, and Production Assurance Evidence passed.
- Docs `f2b9d07`: Documentation Check and Documentation Integrity passed.
- Phase C remains Candidate pending external evidence.


## v3.7.0 External Assurance Evidence Kit

The remaining Phase C blockers now have governed sanitized schemas and tooling. This release does not claim that the real exercises have passed.


## v3.7.1 Evidence Provenance Reconciliation

The first real-device Windows Hello exercise succeeded in `local-compose`. Phoenix now records that result truthfully as local passed engineering evidence while preventing it from closing the staging/production assurance gate. The assessment exposes environment mismatches through `nonQualifyingKinds`.


## v3.8.1 Staging Foundation Verification

Phoenix now defines a fail-closed staging contract, independent secret-file inputs, immutable deployment identity, a provider-neutral deployment model, sanitized preflight and smoke tooling, and governed Passkey evidence procedure. The release prepares staging; it does not claim that staging has been deployed or that any new external-assurance record has passed.


## Verified core authority

All five required core workflows passed at `4893cd36a7c42bdfd375908b2cfd905de1ff4c9b`. This verifies the staging foundation internally but does not claim a real staging deployment or production readiness.

## Verified staging deployment — v3.8.2

Phoenix Core `3.8.0` commit `de76fc518e489344e68fc74aff3944254cff9855` is deployed to the governed staging environment using immutable OCI digest `sha256:c9b9911778411d5fb2e84ce3ec33349ef29e26cc83db8cb89f2340339969cf8b`.

The service is running and healthy, readiness reports the database available, runtime identity is non-root, and application migration files are read-only.

This is a verified staging deployment, not a production-readiness declaration. See [DEP-002](docs/17_Deployment/002_Staging_Deployment_Verification.md).
