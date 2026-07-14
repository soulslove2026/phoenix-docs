# Release Report

## Phoenix v3.6.0 Identity Slice 2 Phase C Release 1

**Status:** Candidate  
**Documentation version:** `3.6.0-identity-slice2-phase-c-r1`  
**Core version:** `3.6.0`  
**Production ready:** No

## Implemented

- browser Passkey validation harness that cannot be enabled in production;
- protected aggregate health and Prometheus metrics;
- transactional encrypted-payload key-rotation tooling;
- explicit provider smoke test;
- privacy-preserving incident snapshot;
- PostgreSQL 18 backup and isolated restore drill;
- provenance and SBOM attestations;
- exact authority, dependency governance, static security, audits, and clean-workspace enforcement.

## Pending verification

CI, CodeQL, Production Assurance Evidence, Documentation Check, and Documentation Integrity.

## External exit gates

Real-browser/device testing, actual notification provider delivery, deployment secret rotation, alert delivery, production recovery exercise, privacy/legal review, and independent penetration testing.
