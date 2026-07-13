---
Category: Production Stack Ratification
Version: 3.1.0
Status: Ratified
Maturity: Level 3 — Engineering Standard
Owner: Phoenix Architecture Authority
Last Updated: 2026-07-13
---
# STACK-006 — Security and Observability Standard

## Security baseline

- secure headers and controlled proxy trust;
- schema validation for every external input;
- deny-by-default authorization at resource boundaries;
- secret manager in deployed environments;
- short-lived workload credentials where available;
- Argon2id for password hashing if passwords are enabled;
- session tokens designed for rotation and revocation;
- audit for authentication, recovery, privilege, and administrator action;
- rate limiting and abuse controls at relevant layers.

## Observability

- OpenTelemetry-compatible traces and metrics;
- structured JSON logs;
- W3C trace context propagation;
- request, correlation, and causation IDs;
- health and readiness separated;
- redaction before emission;
- service-level indicators mapped to user journeys.

## Failure rules

Timeouts, cancellation, bounded retries, circuit breaking where external dependencies exist, graceful shutdown, and backpressure are mandatory. Logs must not become the audit ledger.
