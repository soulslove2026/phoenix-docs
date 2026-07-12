# PEH-006 — Branching Strategy

**Document ID:** PEH-006  
**Knowledge ID:** KN-ENG-006  
**Version:** 1.0  
**Status:** Approved Baseline

## Strategy

Phoenix uses lightweight trunk-based development with short-lived branches.

## Branches

### Permanent
- `main`: approved and releasable state.

### Temporary
- `feat/<scope>`
- `fix/<scope>`
- `docs/<scope>`
- `refactor/<scope>`
- `test/<scope>`
- `chore/<scope>`
- `hotfix/<scope>`

Examples:
- `feat/voice-room-seats`
- `fix/wallet-idempotency`
- `docs/engineering-workflow`

## Rules

- branches should live for hours or a few days, not weeks;
- keep branches narrowly scoped;
- merge behind feature flags when functionality is incomplete;
- do not create long-lived environment branches;
- release branches are allowed only when operational needs justify them.
