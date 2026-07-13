# Repository Integrity Report — v3.3.2

## State

- Documentation version: `3.3.2-constitutional-reconciliation-hardening-r1`
- Core version: `3.3.2`
- Previous verified baseline: Identity Slice 1 v3.3.1
- Current release: Candidate
- Production-ready: No

## Reconciled authorities

VERSION, package metadata, README files, current release, release report, master/document indexes, project board, roadmap, traceability, governance, architecture/security/runbook documents, manifests, and checksums.

## Automated prevention

- `phoenix-core/scripts/repository-check.mjs`
- `phoenix-core/.github/workflows/ci.yml`
- `phoenix-docs/scripts/check-repository.mjs`
- `phoenix-docs/.github/workflows/documentation-integrity.yml`

## Remaining verification

Upload both overlays and require green workflows. Then record exact commit identifiers and workflow duration in a separate verification release.
