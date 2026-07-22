# Release Report

## Phoenix v3.8.2 Staging Deployment Verification

**Date:** 2026-07-22
**Documentation version:** `3.8.2-identity-slice2-phase-c-staging-deployment-verification-r1`
**Core version:** `3.8.0`
**Core commit:** `de76fc518e489344e68fc74aff3944254cff9855`
**OCI digest:** `sha256:c9b9911778411d5fb2e84ce3ec33349ef29e26cc83db8cb89f2340339969cf8b`
**Deployment ID:** `staging-20260722-001`
**Status:** Verified staging deployment / Candidate phase
**Production ready:** No

## Result

The governed staging host is running the immutable GHCR image associated with the exact verified commit.

The deployed service passed:

- Docker running and healthy checks;
- application readiness;
- PostgreSQL availability;
- runtime commit and deployment-identity reconciliation;
- non-root runtime verification;
- read-only migration-directory and SQL-file verification;
- OCI revision, version, digest, and attestation reconciliation.

PostgreSQL remained running during the application-service recreation.

## Provenance

- immutable reference: `ghcr.io/soulslove2026/phoenix-core@sha256:c9b9911778411d5fb2e84ce3ec33349ef29e26cc83db8cb89f2340339969cf8b`;
- attestation: `https://github.com/soulslove2026/phoenix-core/attestations/36564638`;
- deployment region: `nl-ams-1`.

## Rollback posture

A protected pre-deployment configuration backup and the previous immutable image remain available. Application rollback recreates only the Phoenix service and does not assume database rollback.

## Remaining boundary

This release does not claim production readiness or completion of the remaining Phase C external-assurance gates. Qualifying Passkey, notification, key-rotation, alert-delivery, recovery, incident, legal, privacy, and penetration evidence remain pending.
