# Phoenix Project Board

## Verified / ratified

- Governance through Production Stack
- Identity Slice 1
- Identity Slice 2 Security Foundation
- Identity Slice 2 Phase B
- Phase C internal automated workflow gates
- Local real-device Windows Hello Passkey engineering validation
- v3.7.1 evidence provenance reconciliation workflows

## Current milestone

**v3.8.0 Phase C Staging Assurance Foundation — Candidate**

## Current conclusion

The repository now contains the governed staging contract and deployment tooling. No real staging deployment or staging-qualified Passkey evidence is claimed.

## Next work

Verify v3.8.0 workflows, select a controlled HTTPS staging domain and host, deploy the immutable artifact, run preflight/smoke checks, and repeat Passkey registration/authentication.

## Production readiness

Blocked.

## v3.8.1 Staging Foundation Verification — Verified internal gate

All five required core workflows passed at `4893cd36a7c42bdfd375908b2cfd905de1ff4c9b`. Real HTTPS staging deployment and qualifying evidence remain pending.

## Staging deployment verification — 2026-07-22

- [x] Publish immutable Phoenix Core image to GHCR.
- [x] Record immutable digest and artifact attestation.
- [x] Deploy the immutable image to governed staging.
- [x] Verify runtime user and migration immutability.
- [x] Verify Docker health, readiness, and database availability.
- [x] Record deployment identity and rollback authority.
- [ ] Run qualifying staging Passkey registration and authentication.
- [ ] Close the remaining Phase C external-assurance gates.
- [ ] Issue an explicit production-readiness decision.
