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

- [x] Real external evidence is forbidden from source control.
- [x] Passed evidence requires redacted artifacts and approvals.
- [x] Phase C requires exactly one passed record for each of eight evidence kinds.
- [x] Staging is an explicit fail-closed environment identity.
- [x] Staging requires HTTPS posture, deployment identity, database, operations monitoring, non-local RP ID, and HTTPS origins.
- [x] Secret-file inputs are separated from source control and direct values.
- [x] The provider-neutral deployment model does not expose PostgreSQL publicly.
- [x] Preflight and smoke reports are sanitized and do not claim a real Passkey ceremony.
- [x] Cloud-provider selection remains a separate reviewed decision.
- [x] v3.8.0 remains Candidate and production readiness remains false.
