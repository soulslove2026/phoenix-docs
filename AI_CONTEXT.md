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
Phoenix documentation release v3.8.3 reconciles the live roadmap with the verified governed HTTPS staging deployment. The next evidence-bearing action is an approved real-browser and real-device Passkey ceremony in that verified staging environment. Do not claim Passkey closure, external-assurance completion, or production readiness from deployment health, templates, or CI alone.

## Current staging deployment checkpoint

The governed staging environment is verified on Phoenix Core `3.8.0` commit `de76fc518e489344e68fc74aff3944254cff9855` using immutable OCI digest `sha256:c9b9911778411d5fb2e84ce3ec33349ef29e26cc83db8cb89f2340339969cf8b`.

Deployment ID is `staging-20260722-001` in `nl-ams-1`. The service is healthy and ready, PostgreSQL is available, runtime is non-root, and migrations are read-only.

Documentation release is `3.8.3-identity-slice2-phase-c-staging-roadmap-reconciliation-r1`. The roadmap authorities are reconciled with the verified staging deployment. Phase C remains Candidate and production readiness remains false.


## v3.8.4 Program Rebaseline Authority

Phoenix Docs `3.8.4-program-rebaseline-and-delivery-roadmap-r1` is the current program authority. Preserve Phoenix Core 3.8.0 and the verified staging deployment. Phase C remains Candidate and production readiness remains false.

Do not run a manual Passkey R3. The next platform release is Phoenix Core 3.9.0 Assurance Operator and Staging Automation. In parallel, prepare an explicit frontend technology and repository decision followed by `phoenix-app 0.1.0` Frontend Foundation and Product Shell.

Before implementation, read PDR-001 through PDR-004. Prefer the smallest coherent vertical slice, one-command governed operations, RTL/LTR and accessibility from the first frontend release, and observable outcomes over documentation volume.
