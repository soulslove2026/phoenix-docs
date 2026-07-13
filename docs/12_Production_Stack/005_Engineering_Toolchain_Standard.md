---
Category: Production Stack Ratification
Version: 3.1.0
Status: Ratified
Maturity: Level 3 — Engineering Standard
Owner: Phoenix Architecture Authority
Last Updated: 2026-07-13
---
# STACK-005 — Engineering Toolchain Standard

## Build and package

- npm with committed lockfile;
- reproducible clean install;
- TypeScript compiler pinned;
- OCI container artifact;
- multi-stage build and non-root runtime;
- minimal runtime image;
- source maps stored securely for diagnostics.

## Quality

- strict compiler checks;
- formatting and linting;
- unit, component, contract, integration, migration, and security tests;
- architecture-boundary checks;
- dependency, license, and secret scanning;
- container scan;
- SBOM and provenance when production delivery begins.

## CI/CD

GitHub Actions remains the initial automation platform. `main` is protected, pull requests are reviewed, and the same immutable artifact is promoted through environments.

## Version policy

Dependencies are pinned through the lockfile. Automated updates create reviewed pull requests. Major upgrades require compatibility, security, and rollback evidence.
