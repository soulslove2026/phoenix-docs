# REC-005 — Repository Integrity and CI Gate

## phoenix-core gate

Checks version synchronization, lockfile provenance, README/security freshness, exact manifest coverage, checksums, explicit test discovery, strict TypeScript, migration idempotency, unit tests, PostgreSQL integration tests, production build, and Docker build.

## phoenix-docs gate

Checks version authority, current release references, Identity document status, traceability IDs, completed governance review, exact manifest coverage, and checksums.

Both gates are required before v3.3.2 verification.
