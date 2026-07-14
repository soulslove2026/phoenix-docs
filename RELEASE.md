# Current Release

## Phoenix Identity Slice 2 Phase C v3.6.1 — TypeScript Header Narrowing Hotfix Release 1

**Documentation version:** `3.6.1-identity-slice2-phase-c-typecheck-hotfix-r1`  
**Core version:** `3.6.1`  
**Status:** Candidate  
**Production ready:** No

## Confirmed failure

Core commit `7989ab9` passed CodeQL but failed `CI` at `Strict TypeScript checks`.

Diagnostic:

`test/passkey-harness.test.ts(12,16): TS2345`

`Production Assurance Evidence` invokes the same strict typecheck through `npm run check`, so the same source defect blocked both workflows.

## Correction

The Passkey harness test now explicitly narrows `x-robots-tag` to a string before checking `noindex`.

This retains the security expectation and rejects unexpected numeric, array-valued, or missing headers.

## Required verification

- CI
- CodeQL
- Production Assurance Evidence
- Documentation Check
- Documentation Integrity
