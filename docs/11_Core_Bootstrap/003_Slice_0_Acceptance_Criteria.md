---
Document ID: CORE-003
Category: Core Bootstrap
Version: 3.0.0
Status: Ratified
Maturity: Level 2 — Bootstrap Specification
Owner: Phoenix Core Engineering
Authority: Phoenix Core Bootstrap
Depends On: IMP-004; IMP-008; IMP-009; IMP-010; PRD-008
Last Updated: 2026-07-13
---
# CORE-003 — Slice 0 Acceptance Criteria

## Functional

- `GET /health` returns process health.
- `GET /ready` returns readiness.
- Unknown routes return structured 404.
- Responses contain request IDs.
- Termination signals trigger graceful shutdown.

## Configuration

- Environment identity is required.
- Invalid ports and limits fail startup.
- Secrets are never printed.

## Security

- Safe bind defaults.
- Security headers.
- Request-size limit.
- Non-root container.
- Secret scanning and dependency-audit hooks.

## Operational

- JSON logs include time, level, service, version, environment, event, and request ID.
- Container health check exists.
- Runbook covers run, test, build, stop, and rollback.

## Required Evidence

```bash
npm run check
npm test
PHOENIX_ENV=local npm start
docker build -t phoenix-core:3.0.0 .
```

Slice 0 stays Candidate until these pass in the actual repository and CI.
