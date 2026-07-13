---
Document ID: IMP-007
Knowledge ID: PHX-IMP-007
Category: Implementation Planning
Version: 2.4.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Delivery Architecture
Authority: Phoenix Implementation Planning
Depends On: IMP-001; IMP-002; SEC-005; ARC-007; ARC-009
Required By: phoenix-core repositories, delivery teams, platform engineering, security, data, QA, operations
Review Trigger: implementation topology change, major dependency change, release-model change, security incident, delivery evidence contradicts assumptions
Last Updated: 2026-07-13
---

# IMP-007 — Environments and Configuration Strategy

## Executive Summary

Phoenix environments support fast development, reliable integration, security validation, controlled rollout, and production recovery. Environments differ by scale and data, not by undocumented behavior.

## Environment Model

### Local

- reproducible setup;
- synthetic data;
- local or containerized dependencies;
- fast tests;
- no production credentials or data.

### CI

- isolated ephemeral execution;
- deterministic builds;
- unit, contract, security, and integration tests;
- generated artifacts and evidence.

### Development Integration

- shared integration environment;
- deployed contracts;
- synthetic or approved test data;
- feature integration;
- unstable by design but observable.

### Staging / Preproduction

- production-like configuration and topology;
- sanitized or synthetic data;
- migration rehearsal;
- load and failure testing;
- release candidate validation.

### Production

- controlled access;
- approved configuration;
- monitored rollout;
- backup, audit, incident, and recovery readiness.

Optional preview environments may be created for pull requests when cost and security are controlled.

## Configuration Classes

| Class | Examples | Management |
|---|---|---|
| Build-time | compiler flags, artifact version | versioned in repository |
| Runtime non-secret | feature limits, endpoint selection | versioned configuration |
| Secret | credentials, keys | approved secret manager |
| Dynamic product | feature flags, rollout cohorts | governed control plane |
| Policy | security, moderation, region rules | versioned and audited |
| Environment metadata | region, deployment, service identity | infrastructure automation |

## Configuration Rules

1. Validate configuration at startup.
2. Fail closed for missing security-critical values.
3. Separate configuration from code.
4. Never place secrets in source or images.
5. Record effective version for diagnostics.
6. Support safe rollback.
7. Audit privileged configuration changes.
8. Keep production changes reviewable and attributable.

## Data Rules

- No production personal data in local or CI.
- Staging uses synthetic or irreversibly sanitized datasets.
- Test accounts and providers are isolated.
- Environment identifiers prevent accidental cross-environment calls.
- Backups and exports remain environment-bound.

## Feature Flags

Feature flags require:

- owner;
- purpose;
- default;
- target population;
- expiry;
- metrics and guardrails;
- kill switch;
- cleanup plan.

Security-critical controls cannot be disabled casually through ordinary product flags.

## Third-Party Providers

Each environment uses separate provider credentials, callback URLs, quotas, and data. Provider sandbox limitations are documented.

## Anti-Patterns

- Staging as a permanent manual test environment with unknown state.
- Production-only configuration knowledge.
- Shared credentials across environments.
- Copying production data for convenience.
- Flags with no expiry.
- Manual production changes outside versioned systems.
- Environment-specific code branches.

## Operational Considerations

Environment drift must be detectable. Infrastructure and configuration changes require review, audit, and recovery.

## Implementation Notes

Start with local, CI, development integration, staging, and production definitions, even if only local/CI are initially active.

## Architectural Integrity Check

- Are environments behaviorally consistent?
- Are secrets and data isolated?
- Can configuration be validated and rolled back?
- Are feature flags governed?
- Is production access attributable?

## References

- ARC-007 Deployment Philosophy
- SEC-005 Secrets and Key Management
- ARC-009 Failure Isolation
