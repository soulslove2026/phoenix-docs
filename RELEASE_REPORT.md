# Release Report

## Phoenix v3.4.1 Dependency Governance Hotfix

**Status:** Candidate  
**Production ready:** No

## Incident

Dependabot created uncontrolled routine major-version pull requests. Those branches correctly failed constitutional checks because manifests and checksums were not regenerated. Dependency Review also reported `Null` license metadata for reviewed official GitHub Actions.

## Corrections

- disabled routine version-update pull requests;
- retained vulnerability alerts and security updates;
- migrated approved actions to Node.js 24 generations;
- disabled persisted checkout credentials;
- strengthened review to Moderate severity across all scopes;
- added narrow PURL license exceptions;
- added automated dependency-governance enforcement.

## Verification

CI, CodeQL, and both documentation workflows must pass.
