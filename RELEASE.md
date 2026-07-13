# Current Release

## Phoenix Constitutional Reconciliation and Identity Hardening v3.3.2 — Release 1

**Status:** Candidate  
**Previous verified baseline:** Identity Slice 1 v3.3.1  
**Production-ready:** No

This release repairs cross-repository metadata drift and hardens Identity Slice 1 without silently advancing into Identity Slice 2.

## Included

- synchronized versions, README files, release records, indexes, roadmaps, manifests, and checksums;
- complete Identity traceability and governance review;
- automated repository-integrity workflows;
- explicit unit-test discovery;
- strict email validation;
- race-safe duplicate registration handling;
- configurable bounded session lifetime;
- migration history, checksums, transactions, and advisory locking;
- `updated_at` and database integrity constraints;
- per-process authentication throttling baseline.

## Verification gate

Both repository workflows must pass after upload. A separate verification record will then change this release from Candidate to Verified.
