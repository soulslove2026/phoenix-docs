# REC-002 — Findings and Corrections

| Finding | Correction | Evidence |
|---|---|---|
| Core README denied existing Identity logic | README rewritten | `phoenix-core/README.md` |
| Metadata could drift | Cross-file consistency checks | core/docs repository check scripts |
| Top-level unit tests were not explicitly discovered | Test scripts separated and explicit | `package.json`, CI |
| Email validation was only length-based | Structural normalized validation | `src/identity/email.ts` |
| Duplicate registration race could become 500 | PostgreSQL conflict mapped to controlled 409 | repository/service/tests |
| Session duration was hard-coded | Bounded configuration | `src/config.ts` |
| No migration history | Ordered checksum-backed migration ledger | `scripts/migrate.ts` |
| `updated_at` was stale | PostgreSQL trigger | migration 002 |
| No authentication throttling | Per-process baseline with 429/Retry-After | rate-limit module/routes/tests |
| Traceability and governance were incomplete | Matrices and checklist completed | docs root records |
