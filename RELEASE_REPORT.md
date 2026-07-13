# Release Report

## Phoenix v3.3.2 Constitutional Reconciliation and Identity Hardening — Release 2

**Documentation version:** `3.3.2-constitutional-reconciliation-hardening-r2`  
**Core version:** `3.3.2`  
**Status:** Candidate  
**Production ready:** No

## Incident

Release 1 failed at `Repository constitutional consistency` because repository files did not exactly match `FILE_MANIFEST.json`.

## Root Cause

Overlay copying did not remove obsolete Slice 0 files. The documentation snapshot also omitted valid historical files already present in the repository.

## Correction

- clean full core snapshot;
- full cumulative documentation snapshot;
- exact manifest and checksum regeneration;
- improved mismatch diagnostics;
- mandatory full replacement while preserving `.git`.

## Verification Required

Both repository workflows must pass before this hardening release can be marked Verified.
