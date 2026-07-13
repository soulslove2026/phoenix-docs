---
Document ID: CORE-004
Category: Core Bootstrap
Version: 3.0.0
Status: Ratified
Maturity: Level 2 — Bootstrap Specification
Owner: Phoenix Core Engineering
Authority: Phoenix Core Bootstrap
Depends On: IMP-002; ARC-002; ARC-010
Last Updated: 2026-07-13
---
# CORE-004 — Repository Structure and Boundaries

## Structure

```text
phoenix-core/
├── .github/workflows/ci.yml
├── docs/
├── src/
├── test/
├── scripts/
├── Dockerfile
├── compose.yaml
├── package.json
├── SECURITY.md
└── VERSION.json
```

## Rules

1. Slice 0 contains runtime concerns only.
2. Product contexts begin only after their gate.
3. Future cross-context interaction uses explicit interfaces.
4. Shared helpers cannot hide business policy.
5. Every new top-level module requires ownership.
6. `phoenix-docs` is not a runtime dependency.
7. Protected `main`, required CI, review, scanning, and release tags are mandatory.
