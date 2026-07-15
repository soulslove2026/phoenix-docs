# DEP-001 — Staging Deployment Runbook

## Deployment sequence

1. Obtain a verified immutable image digest.
2. Prepare a protected staging configuration outside source control.
3. Generate independent secret files with owner-only permissions.
4. Review the rendered deployment model for secret leakage and public database exposure.
5. Configure a real HTTPS domain and exactly one trusted proxy hop.
6. Deploy PostgreSQL and Phoenix Core on isolated networks.
7. Apply migrations through the application artifact.
8. Run health, readiness, security-header, deployment-identity, and operations smoke checks.
9. Rehearse rollback to the previous compatible image and configuration.
10. Open a time-bounded Passkey assurance window only after the baseline is healthy.

## Rollback

Rollback restores the previous immutable image and compatible configuration. Database rollback is not assumed; schema changes follow expand–migrate–contract and require a specific recovery decision.

## Production boundary

A successful staging deployment is not a production approval. It authorizes only controlled staging exercises and evidence collection.
