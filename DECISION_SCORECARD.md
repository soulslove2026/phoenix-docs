# Phoenix Decision Scorecard — Provider-Neutral Staging Foundation

| Category | Score | Evidence |
|---|---:|---|
| Longevity | 9 | Environment contract and immutable artifacts survive provider changes |
| Scalability | 7 | Single staging runtime is sufficient now; extraction remains possible |
| Replaceability | 9 | No cloud-specific application dependency is introduced |
| Security | 9 | TLS, secret separation, private database, operations, and fail-closed config |
| Privacy | 9 | Synthetic/approved data and external sanitized evidence |
| Maintainability | 8 | One deployment model, preflight, smoke, and runbooks |
| Operational Simplicity | 8 | Docker Compose baseline without premature orchestration |
| Cost Efficiency | 9 | Small staging footprint with no unnecessary platform estate |
| User Value | 7 | Enables trustworthy authentication evidence before wider product work |
| Observability | 9 | Protected operations health plus deployment identity |
| Reversibility | 9 | Immutable image rollback and no destructive schema change |

## Decision

**Approved with Conditions**

Cloud provider, domain, certificate authority, backup service, and alert destination remain separate decisions. Production deployment is not approved.
