# Governance Checklist

- [x] Phase C charter and production boundary documented.
- [x] Browser validation harness is opt-in and forbidden in production.
- [x] Operations endpoints require a dedicated secret and expose aggregates only.
- [x] Key rotation requires dry run, explicit confirmation, transaction, and maintenance window.
- [x] Backup/restore verification uses isolated PostgreSQL restoration.
- [x] Incident snapshot excludes direct identifiers and secrets.
- [x] Artifact provenance and SBOM attestations are configured.
- [x] Exact manifests and SHA-256 checksums are regenerated.
- [x] Production readiness remains false.
- [x] Compiled operational tools are built before CI or assurance execution.

External browser, provider, deployment, monitoring, recovery, privacy/legal, and penetration-test evidence are release exit gates, not completed claims.
