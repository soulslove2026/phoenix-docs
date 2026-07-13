---
Document ID: IMP-002
Knowledge ID: PHX-IMP-002
Category: Implementation Planning
Version: 2.4.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Delivery Architecture
Authority: Phoenix Implementation Planning
Depends On: IMP-001; ARC-002; ARC-010; PEF/PES standards
Required By: phoenix-core repositories, delivery teams, platform engineering, security, data, QA, operations
Review Trigger: implementation topology change, major dependency change, release-model change, security incident, delivery evidence contradicts assumptions
Last Updated: 2026-07-13
---

# IMP-002 — Repository and Codebase Topology

## Executive Summary

Phoenix uses a repository topology that keeps architecture, contracts, application code, infrastructure, and operations explicit without fragmenting ownership prematurely.

## Repository Model

### 1. `phoenix-docs`

Authoritative knowledge, architecture, product, security, data, decisions, standards, release plans, and traceability.

### 2. `phoenix-core`

Primary application code for the first implementation. It contains bounded-context modules and deployable applications.

### 3. `phoenix-contracts`

Versioned API, event, schema, and compatibility artifacts when the first executable contracts exist.

### 4. `phoenix-infrastructure`

Infrastructure-as-code, environment definitions, deployment configuration, policy checks, and operational baselines.

### 5. `phoenix-mobile`

Mobile clients when client implementation begins.

### 6. `phoenix-web`

Web and operator surfaces when required.

Additional repositories are created only when ownership, release independence, security isolation, or lifecycle differences justify them.

## Recommended `phoenix-core` Structure

```text
phoenix-core/
├── apps/
│   ├── api/
│   ├── worker/
│   └── realtime/
├── contexts/
│   ├── identity/
│   ├── profile/
│   ├── discovery/
│   ├── voice_rooms/
│   ├── social_graph/
│   ├── messaging/
│   ├── trust_safety/
│   ├── notification/
│   └── economy/
├── platform/
│   ├── database/
│   ├── eventing/
│   ├── observability/
│   ├── security/
│   ├── feature_flags/
│   └── testing/
├── contracts/
├── migrations/
├── tests/
├── tools/
└── docs/
```

## Module Rules

1. Each context owns its domain model and persistence.
2. Cross-context integration uses public application interfaces, APIs, or events.
3. Shared code must not contain domain policy from multiple contexts.
4. Platform modules provide technical capabilities, not business ownership.
5. Circular context dependencies are prohibited.
6. Every deployable application declares required contexts and platform capabilities.
7. Tests must be able to validate context boundaries.

## Contract Placement

Contracts may initially live in `phoenix-core/contracts` for speed, but once independently consumed they move to `phoenix-contracts` with:

- owner;
- version;
- compatibility policy;
- schema validation;
- change review;
- generated artifacts where appropriate.

## Branch Strategy

Use trunk-based development with short-lived branches.

- `main` remains releasable.
- Changes enter through reviewed pull requests.
- Feature flags isolate incomplete user-visible behavior.
- Long-lived feature branches are avoided.
- Release tags identify immutable versions.
- Hotfixes follow the same review and evidence rules with expedited governance.

## Decision Matrix

| Question | Default |
|---|---|
| New repository? | No, unless ownership or lifecycle justifies it |
| Shared package? | Only stable technical abstraction |
| Cross-context import? | Through defined interface, never internals |
| Contract duplication? | Generate or publish from one source |
| Client-specific business rule? | Keep authoritative rule server-side |
| Infrastructure code with app code? | Separate repository after first stable bootstrap if ownership differs |

## Anti-Patterns

- One repository per microservice before teams exist.
- One giant shared utilities package.
- Direct imports into another context’s internals.
- Duplicated schemas maintained manually.
- Environment secrets in repositories.
- Client code as source of authorization truth.
- Unversioned generated contracts.
- Repository boundaries chosen only by language.

## Security Considerations

Repository access follows least privilege. Protected branches, signed or attributable commits, secret scanning, dependency scanning, and artifact provenance are required for production-bound repositories.

## Operational Considerations

Every repository must define owner, build, test, release, support, lifecycle, and deprecation. Orphaned repositories are prohibited.

## Implementation Notes

Start with `phoenix-docs` and `phoenix-core`. Create `phoenix-contracts` and `phoenix-infrastructure` when actual executable artifacts justify them.

## Future Evolution

Contexts may be extracted into independent services or repositories when scale, isolation, team ownership, or release independence provide evidence.

## Architectural Integrity Check

- Do repository boundaries reflect real ownership?
- Can context internals remain private?
- Are contracts authoritative and versioned?
- Is `main` continuously releasable?
- Are repositories few enough to remain governable?

## References

- ARC-002 Bounded Contexts
- ARC-010 Reference Architecture
- PEF/PES Engineering Standards
