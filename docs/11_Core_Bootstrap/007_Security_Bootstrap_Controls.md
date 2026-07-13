---
Document ID: CORE-007
Category: Core Bootstrap
Version: 3.0.0
Status: Ratified
Maturity: Level 2 — Bootstrap Specification
Owner: Phoenix Core Engineering
Authority: Phoenix Core Bootstrap
Depends On: SEC-001 through SEC-007; IMP-008; IMP-009
Last Updated: 2026-07-13
---
# CORE-007 — Security Bootstrap Controls

## Included

- no runtime third-party packages;
- validated configuration;
- safe request size;
- request correlation;
- baseline security headers;
- secret-safe logging;
- graceful shutdown;
- non-root container;
- dependency and secret scanning hooks.

## Deferred

Authentication, authorization, databases, KMS, WAF, rate limiting infrastructure, workload identity, production TLS, and SIEM are introduced by the slice that creates the relevant attack surface.

Any new dependency or externally reachable capability requires an updated threat review.
