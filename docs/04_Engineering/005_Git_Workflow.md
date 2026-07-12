# PEH-005 — Git Workflow

**Document ID:** PEH-005  
**Knowledge ID:** KN-ENG-005  
**Version:** 1.0  
**Status:** Approved Baseline

## Purpose

Define a predictable workflow for changing Phoenix repositories safely and traceably.

## Standard Flow

1. synchronize local repository;
2. create a focused branch when team size requires it;
3. make one coherent change;
4. run required checks;
5. review the diff;
6. commit with a structured message;
7. open a pull request when branch protection is enabled;
8. merge only after required reviews and checks;
9. delete merged branches;
10. update release notes when user-visible or architectural behavior changes.

## Rules

- `main` represents the latest approved state;
- force-pushing to protected branches is prohibited;
- commits must not include secrets, generated junk, or unrelated files;
- each change must be small enough to review;
- repository history must explain why changes happened;
- emergency fixes require a follow-up review and documentation.

## Local Safety Checklist

Before commit:

- inspect changed files;
- remove accidental files;
- verify no secrets;
- run tests and linters;
- confirm documentation updates;
- confirm migration and rollback notes where applicable.

## Sync Discipline

```bash
git fetch origin
git pull --ff-only
```

Use revert commits for published history. Rewriting shared history requires explicit approval.
