# Phoenix Project Board

## Verified / ratified

- Governance through Production Stack
- Identity Slice 1
- Identity Slice 2 Security Foundation
- Identity Slice 2 Phase B
- Phase C internal automated workflow gates
- Local real-device Windows Hello Passkey engineering validation
- v3.7.1 evidence provenance reconciliation workflows
- v3.8.1 staging-foundation workflow verification
- v3.8.2 governed HTTPS staging deployment verification

## Current milestone

**v3.8.3 Phase C Staging Roadmap Reconciliation — Candidate**

## Current conclusion

The governed HTTPS staging deployment is verified and is running the immutable Phoenix Core 3.8.0 artifact associated with commit `de76fc518e489344e68fc74aff3944254cff9855`.

The live roadmap, AI context, repository entry point, and project board are reconciled with that verified deployment.

No qualifying staging Passkey evidence or production authorization is claimed.

## Next work

Verify the Passkey-assurance preconditions, open an approved and time-bounded assurance window, execute real-browser and real-device registration and authentication, sanitize the evidence, validate its staging provenance, and close the harness window.

## Production readiness

Blocked.

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

## Staging roadmap reconciliation — 2026-07-23

- [x] Reconcile the engineering roadmap with DEP-002.
- [x] Reconcile the AI context with the verified staging state.
- [x] Reconcile the project board and repository entry point.
- [x] Preserve all historical release records.
- [x] Preserve Phase C Candidate status.
- [x] Preserve `production_ready=false`.
- [ ] Execute the governed Staging Passkey Assurance procedure.
