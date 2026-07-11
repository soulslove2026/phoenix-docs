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
- Mobile: Flutter
- Web/Admin: Next.js
- Backend: NestJS
- Primary database: PostgreSQL
- Cache/presence/ranking: Redis
- Realtime: WebSocket
- Event transport: Kafka-compatible abstraction when justified
- Media: S3-compatible object storage
- Voice: provider abstraction supporting LiveKit, Agora, or equivalent
