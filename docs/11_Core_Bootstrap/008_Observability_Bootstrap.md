---
Document ID: CORE-008
Category: Core Bootstrap
Version: 3.0.0
Status: Ratified
Maturity: Level 2 — Bootstrap Specification
Owner: Phoenix Core Engineering
Authority: Phoenix Core Bootstrap
Depends On: ARC-009; SEC-007; IMP-010
Last Updated: 2026-07-13
---
# CORE-008 — Observability Bootstrap

Structured logs include timestamp, level, service, version, environment, event, message, and request ID when relevant.

Core events: `service.starting`, `service.started`, `request.completed`, `service.shutdown_requested`, `service.stopped`, and `configuration.invalid`.

`/health` represents process liveness. `/ready` represents traffic readiness. Metrics and distributed tracing are deferred until stack ratification, but correlation and event vocabulary begin now.
