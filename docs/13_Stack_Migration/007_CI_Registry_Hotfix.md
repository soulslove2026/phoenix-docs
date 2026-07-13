---
Document ID: MIG-007
Category: Stack Migration
Version: 3.2.1
Status: Candidate Hotfix
Owner: Phoenix Core Engineering
Last Updated: 2026-07-13
---

# MIG-007 — CI Registry Hotfix

## Incident

The first Stack Migration CI run stalled at `npm ci`.

## Root Cause

The generated lockfile contained 126 package URLs referencing a private package registry from the file-generation environment. GitHub-hosted runners could not access that registry.

## Corrective Action

- Replace all private registry URLs with `https://registry.npmjs.org/`.
- Pin the CI installation registry explicitly.
- Fail CI immediately if a private registry URL appears.
- Limit dependency installation to ten minutes.
- Add bounded network retry and verbose diagnostics.

## Integrity Decision

The migration remains **Candidate** until the corrected GitHub Actions run passes:

- lockfile registry verification;
- `npm ci`;
- type and repository checks;
- automated tests;
- production build;
- Docker build.

## Prevention

Future generated lockfiles must be scanned for environment-specific registries before release packaging.
