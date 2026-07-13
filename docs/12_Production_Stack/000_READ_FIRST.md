# Phoenix Production Stack Ratification

This directory records the production technology decisions required before Identity Slice 1.

## Ratified baseline

- Runtime: Node.js 24 LTS
- Language: TypeScript 5.9 initially; TypeScript 6 adoption requires compatibility review
- HTTP framework: Fastify 5
- API contracts: JSON Schema and OpenAPI
- Primary database: PostgreSQL 18 on the current supported minor
- Database access: SQL-first repository adapters using the PostgreSQL driver; no domain-wide ORM
- Migration pattern: versioned SQL with expand–migrate–contract
- Initial async processing: PostgreSQL transactional outbox plus worker
- Cache: no cache by default; Redis only when measured need exists
- Event broker: deferred until cross-context throughput or isolation justifies it
- Observability: OpenTelemetry-compatible traces, metrics, and structured logs
- Delivery: OCI containers, GitHub Actions, npm lockfile, trunk-based development
- Architecture: modular monolith with explicit bounded-context modules

## Next gate

Identity Slice 1 may begin only after `phoenix-core` is migrated from the provisional Slice 0 server to this ratified stack with green CI and no regression in health, readiness, logging, security headers, graceful shutdown, or container execution.
