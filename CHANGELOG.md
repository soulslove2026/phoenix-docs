# Changelog

## 3.7.1-identity-slice2-phase-c-evidence-provenance-reconciliation-r1 — 2026-07-15

### Corrected

- Added truthful `local` provenance for controlled developer-machine evidence.
- Added environment-qualified closure assessment through `nonQualifyingKinds`.
- Corrected recovery-drill templates to use the `recovery` environment.
- Added ID2-042 and synchronized release authority, indexes, traceability, manifests, and checksums.

### Status

- Local Windows Hello Passkey registration and authentication: passed engineering evidence.
- External Passkey gate: still open pending staging or production evidence.
- Candidate; production readiness remains false.

## 3.7.0-identity-slice2-phase-c-external-assurance-kit-r1 — 2026-07-14

### Added

- Eight external-assurance evidence kinds.
- Sanitized validation and repository quarantine.
- Approval, artifact-hash, and completion rules.
- Dedicated control-validation workflow.
- ID2-037 through ID2-041.

### Status

- Candidate; real evidence remains uncollected.


## 3.6.3-identity-slice2-phase-c-internal-workflow-verification — 2026-07-14

### Verified

- Core CI passed on commit `d5ef049` in 56 seconds.
- Core CodeQL passed on commit `d5ef049` in 1 minute 12 seconds.
- Production Assurance Evidence passed on commit `d5ef049` in 57 seconds.
- Documentation Check passed on commit `f2b9d07` in 8 seconds.
- Documentation Integrity passed on commit `f2b9d07` in 12 seconds.

### Boundary

- Phase C remains Candidate.
- Production readiness remains false.
- External production-assurance evidence remains mandatory.


## 3.6.2-identity-slice2-phase-c-compiled-tool-ordering-hotfix-r1 — 2026-07-14

### Fixed

- Moved production build before compiled incident-snapshot execution.
- Added a fail-closed compiled-file existence assertion.
- Added CI and Production Assurance ordering governance.
- Reconciled Phase C traceability and Phase B verification status.

### Status

- Candidate pending all workflow gates.


## 3.6.1-identity-slice2-phase-c-typecheck-hotfix-r1 — 2026-07-14

### Fixed

- Narrowed the Fastify Inject `x-robots-tag` header to `string` before `assert.match`.
- Preserved the Passkey harness `noindex` security assertion.
- Recorded the shared CI and Production Assurance typecheck root cause.

### Status

- Candidate pending all GitHub workflow gates.


## 3.6.0-identity-slice2-phase-c-r1 — 2026-07-14

### Added

- Staging-only real-browser Passkey validation harness.
- Protected identity operational health and Prometheus metrics.
- Transactional identity encryption-key rotation tooling.
- Notification-provider smoke testing.
- Privacy-preserving incident snapshots.
- PostgreSQL backup and isolated restore verification.
- Artifact provenance and SBOM attestations.
- Phase C documents ID2-025 through ID2-034.

### Status

- Candidate; production readiness remains false.


## 3.5.1-identity-slice2-phase-b-verification — 2026-07-14

### Verified

- Core CI passed on commit `b3e7cb4` in 1 minute 1 second.
- Core CodeQL passed on commit `b3e7cb4` in 1 minute 21 seconds.
- Documentation Check passed on commit `8914a47` in 10 seconds.
- Documentation Integrity passed on commit `8914a47` in 14 seconds.
- Identity Slice 2 Phase B changed from Candidate to Verified.

### Next

- Identity Slice 2 Phase C and production assurance.


## 3.5.0-identity-slice2-phase-b-r1 — 2026-07-14

### Added

- Passkeys/WebAuthn with required user verification.
- TOTP MFA and one-time recovery codes.
- Compromised-password screening through HIBP k-anonymity.
- Session assurance and recent-authentication gates.
- Transactional notification-delivery worker.
- Migration 004, security tests, threat model, and traceability.

### Status

- Candidate pending all GitHub and staging security evidence.


## 3.4.3-identity-slice2-security-foundation-verification — 2026-07-13

### Verified

- Core CI passed on commit `9ca9dc8` in 56 seconds.
- Core CodeQL passed on commit `9ca9dc8` in 1 minute 21 seconds.
- Documentation Check passed on commit `ffcdf23` in 7 seconds.
- Documentation Integrity passed on commit `ffcdf23` in 10 seconds.
- Identity Slice 2 Security Foundation changed from Candidate to Verified.

### Next

- Identity Slice 2 Phase B — Passkeys, MFA, breached-password screening, and production notification delivery.


## 3.4.2-ci-artifact-isolation-hotfix-r1 — 2026-07-13

### Fixed

- Isolated generated SBOM evidence from governed repository state.
- Moved constitutional consistency before evidence generation.
- Added SBOM JSON validation and post-generation clean-tree enforcement.
- Added regression protection.

### Status

- Candidate pending GitHub verification.


## 3.4.1-dependency-governance-hotfix-r1 — 2026-07-13

### Security

- Disabled uncontrolled routine Dependabot version updates.
- Preserved vulnerability alerts and security updates.
- Migrated approved GitHub Actions to Node.js 24 generations.
- Strengthened Dependency Review and added narrow reviewed license exceptions.
- Added automated dependency-governance enforcement.

### Status

- Candidate pending GitHub verification.


## 3.4.0-identity-slice2-r1 — 2026-07-13

### Added

- Email verification and password recovery specifications.
- Session hardening, distributed rate limiting, security events, encrypted outbox, and security CI gates.
- Identity Slice 2 ASVS-oriented traceability and production blockers.

### Status

- Candidate pending all workflows.


## 3.3.3-constitutional-reconciliation-verification — 2026-07-13

### Verified

- Core CI passed on commit `ce38991` in 1 minute 4 seconds.
- Documentation Check passed on commit `a59dc0f` in 10 seconds.
- Documentation Integrity passed on commit `a59dc0f` in 13 seconds.
- v3.3.2 Release 2 changed from Candidate to Verified.

### Next

- Identity Slice 2 — Verification, Recovery, and Session Hardening.


## 3.3.2-constitutional-reconciliation-hardening-r2 — 2026-07-13

### Fixed

- Corrected overlay-installation manifest drift.
- Restored the complete historical documentation corpus.
- Removed obsolete Slice 0 `.mjs` files from the clean core snapshot.
- Added exact missing/extra path diagnostics.
- Regenerated manifests and SHA-256 checksums.

### Status

- Candidate pending both workflows.


## 3.3.2-constitutional-reconciliation-hardening-r1 — 2026-07-13

### Reconciled

- synchronized core/docs metadata, release authority, README files, indexes, roadmap, manifests, checksums, traceability, and governance;
- added executable repository-integrity workflows;
- corrected explicit discovery of top-level unit tests.

### Hardened

- strict email validation;
- race-safe duplicate registration conflicts;
- bounded configurable session lifetime;
- checksummed transactional migration history and advisory locking;
- `updated_at` and database constraints;
- per-process authentication throttling baseline.

### State

Candidate pending both GitHub workflows. Production readiness remains false.


## 3.3.1-identity-slice1-verification — 2026-07-13

### Verified

- Identity Slice 1 passed GitHub Actions.
- PostgreSQL migration passed.
- TypeScript and repository checks passed.
- Unit tests passed.
- PostgreSQL integration tests passed.
- Production build passed.
- Docker build passed.
- Slice status changed from Candidate to Verified.

### Next

- Identity Slice 2 — Verification, Recovery, and Session Hardening.


## 3.2.2-stack-migration-verification — 2026-07-13

### Verified

- Stack Migration passed GitHub Actions.
- Public npm registry integrity validation passed.
- Dependency installation passed.
- TypeScript and repository checks passed.
- Automated tests passed.
- Production build passed.
- Docker build passed.
- Migration status changed from Candidate to Verified.

### Next

- Phoenix Identity Slice 1.


## 3.2.1-stack-migration-ci-hotfix — 2026-07-13

### Fixed

- Replaced 126 private npm registry URLs in the Stack Migration lockfile.
- Added CI registry-integrity validation.
- Added bounded `npm ci` timeout, retry settings, and verbose diagnostics.
- Kept Stack Migration status at Candidate pending a successful corrected workflow.


## 3.2.0-stack-migration-r1 — 2026-07-13

### Added
- MIG-001 through MIG-006 stack-migration specifications.
- Node.js 24, TypeScript 5.9, Fastify 5, PostgreSQL 18 readiness, JSON Schema/OpenAPI migration bundle for phoenix-core.

### Changed
- Replaced provisional Slice 0 runtime with the ratified stack baseline.
- Kept Identity Slice 1 blocked pending real GitHub Actions evidence.


## 3.1.0-stack-ratification-r1 — 2026-07-13

### Ratified
- Node.js 24 LTS, TypeScript 5.9, Fastify 5, and PostgreSQL 18.
- Modular-monolith delivery with schema-first APIs and SQL-first persistence.
- Transactional outbox as the initial async baseline.
- OpenTelemetry-compatible observability and OCI/GitHub Actions delivery.

### Deferred
- Redis, external event broker, and specialized search infrastructure until measured need.

### Next
- Migrate the verified bootstrap to the ratified stack.
- Begin Identity Slice 1 after the readiness gate passes.


## 3.0.1-core-bootstrap-verification — 2026-07-13

### Verified

- Phoenix Core Slice 0 passed GitHub Actions.
- Repository checks passed.
- Automated tests passed.
- Docker image build passed.
- Bootstrap status changed from Candidate to Verified.

### Next

- Production Stack Ratification.
- Identity Slice 1 after stack approval.


## 3.0.0-core-bootstrap-r1 — 2026-07-13

### Added
- CORE-001 through CORE-009.
- Standalone `phoenix-core` Slice 0 repository.
- Health/readiness, configuration validation, logging, tests, CI, container, security policy, and runbook.

### Changed
- Synchronized indexes, traceability, roadmap, release records, and version metadata.
- Opened executable implementation while preserving the Slice 0 gate.


## 2.4.0-implementation-r1 — 2026-07-13

### Added
- IMP-001 Implementation Strategy.
- IMP-002 Repository and Codebase Topology.
- IMP-003 Delivery Epics and Workstreams.
- IMP-004 Vertical Slice Plan.
- IMP-005 Sequencing and Dependency Model.
- IMP-006 Ownership and Team Topology.
- IMP-007 Environments and Configuration Strategy.
- IMP-008 Quality Engineering and Test Strategy.
- IMP-009 CI/CD and Release Governance.
- IMP-010 Rollout, Rollback, and Operational Readiness.

### Changed
- Synchronized repository indexes, traceability, roadmap, project board, release records, and version metadata.
- Established the implementation gate required before creation of phoenix-core.
- Set Phoenix Core Bootstrap v3.0.0 Release 1 as the next milestone.


## 2.3.0-product-r1 — 2026-07-13

### Added
- PRD-001 Product Vision and Value Proposition.
- PRD-002 Users, Segments, and Jobs to Be Done.
- PRD-003 Core User Journeys.
- PRD-004 MVP Scope and Prioritization.
- PRD-005 Product Capability Model.
- PRD-006 Experience and Trust Principles.
- PRD-007 Success Metrics and Experimentation.
- PRD-008 Product Acceptance and Release Criteria.

### Changed
- Synchronized repository indexes, traceability, roadmap, project board, release records, and version metadata.
- Established the product gate required before implementation planning.
- Set Phoenix Implementation Planning v2.4.0 Release 1 as the next milestone.


## 2.2.0-security-r1 — 2026-07-13

### Added
- SEC-001 Security Vision and Principles.
- SEC-002 Threat Model.
- SEC-003 Identity and Authentication.
- SEC-004 Authorization and Access Control.
- SEC-005 Secrets and Key Management.
- SEC-006 Data Protection and Privacy Security.
- SEC-007 Security Audit and Incident Readiness.

### Changed
- Synchronized repository indexes, roadmap, project board, traceability, release metadata, and architect notes.
- Completed the security gate required before material phoenix-core implementation.
- Set Phoenix Product Foundation v2.3.0 Release 1 as the next milestone.


## 2.1.0-architecture-r2 — 2026-07-13

### Added
- ARC-006 Communication Patterns.
- ARC-007 Deployment Philosophy.
- ARC-008 Scalability Strategy.
- ARC-009 Failure Isolation.
- ARC-010 Reference Architecture.

### Changed
- Completed the Architecture Foundation and synchronized repository indexes, roadmap, traceability, release metadata, and architect notes.
- Set Security Foundation v2.2.0 Release 1 as the next milestone.


## 2.0.0-architecture-r1 — 2026-07-13

### Added
- Architecture Foundation Read First.
- ARC-001 Architecture Vision.
- ARC-002 Bounded Contexts.
- ARC-003 Domain Map.
- ARC-004 Capability Map.
- ARC-005 System Landscape.

### Changed
- Synchronized indexes, traceability, roadmap, project board, release metadata, and architect notes.
- Marked legacy enterprise architecture content as subordinate to the new foundation where applicable.


## 1.7.0-reconciliation-r1 — 2026-07-13

### Added

- Full engineering specifications for DPL-015 through DPL-019.
- Canonical Data Platform entry point and legacy-path notice.
- Expanded Phoenix Engineering Framework documents.
- Missing release records for v1.5.0 and v1.6.0.
- Repository Integrity Report and Update Manifest.

### Changed

- Synchronized README, indexes, roadmap, project board, traceability, manifest, version, release, and architect notes.
- Declared `docs/04_Data_Platform/` the authoritative Data Platform path.
- Set Architecture Foundation v2.0.0 Release 1 as the next milestone.

### Preserved

- `docs/05_Data_Platform/` remains temporarily for lossless historical review and is explicitly non-authoritative.

## 1.6.0-engineering-framework-r1

- Added Phoenix Engineering Framework bootstrap foundation.

## 1.5.0-data-platform-r3

- Added initial placeholder files for consistency, versioning, audit, contracts, and events.

## 1.4.0-data-r2 — 2026-07-12

- Added Data Classification, Data Ownership, Global Identifiers, Data Lifecycle, and Engineering Roadmap.

## 1.3.0-data-r1

- Added DPL-010 Data Philosophy.
