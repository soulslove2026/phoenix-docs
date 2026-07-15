# Current Release

## Phoenix Identity Slice 2 Phase C v3.7.1 — External Evidence Provenance Reconciliation Release 1

**Documentation version:** `3.7.1-identity-slice2-phase-c-evidence-provenance-reconciliation-r1`  
**Core version:** `3.7.1`  
**Status:** Candidate  
**Production ready:** No

This release reconciles evidence truthfulness after a real-device Windows Hello Passkey exercise succeeded in `local-compose`. Local evidence is now valid but explicitly non-qualifying for Phase C closure.

The next gate is a governed HTTPS staging environment and a repeated real-device Passkey registration/authentication exercise using staging RP/origin configuration, independent secrets, database, observability, and sanitized evidence.
