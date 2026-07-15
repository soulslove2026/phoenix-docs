# AI Context Entry Point

You are working on Phoenix, an AI-native social platform designed for phased growth from an MVP to a multi-region global ecosystem.

## Non-Negotiable Constraints
- Preserve bounded-context ownership.
- No domain may directly modify another domain's database.
- Financial balances must be ledger-derived and auditable.
- The first production architecture is a modular monolith, not premature microservices.
- External integrations must be wrapped behind internal interfaces.
- All user-facing features must support RTL and LTR.
- Security, privacy, accessibility, observability, and localization are mandatory.
- Do not copy copyrighted assets, branding, layouts, or proprietary code from third-party applications.

## Required Workflow
1. Read the relevant specification.
2. Identify impacted domains.
3. Check ADRs.
4. Propose a change plan.
5. Define acceptance criteria.
6. Implement the smallest coherent unit.
7. Add tests, migrations, observability, and documentation.
8. Report conflicts rather than silently inventing rules.

## Technology Baseline
- Runtime: Node.js 24 LTS
- Language: TypeScript 5.9
- Backend framework: Fastify 5
- Primary database: PostgreSQL 18
- API: REST, JSON Schema, OpenAPI
- Async baseline: PostgreSQL transactional outbox and idempotent worker
- Delivery: OCI containers and GitHub Actions
- Observability: OpenTelemetry-compatible structured telemetry
- Architecture: bounded-context modular monolith with selective future extraction

## Current Milestone
Phoenix v3.8.0 Staging Assurance Foundation is Candidate. The next evidence-bearing action is a real HTTPS staging deployment followed by a real-device Passkey ceremony. Do not claim staging, external-assurance completion, or production readiness from templates or CI alone.
