# DEP-002 — Staging Deployment Verification

## Status

**Verification status:** Verified staging deployment
**Phase status:** Candidate
**Production ready:** No
**Verification date:** 2026-07-22

## Verified artifact

| Attribute | Verified value |
|---|---|
| Core version | `3.8.0` |
| Core commit | `de76fc518e489344e68fc74aff3944254cff9855` |
| OCI digest | `sha256:c9b9911778411d5fb2e84ce3ec33349ef29e26cc83db8cb89f2340339969cf8b` |
| Immutable reference | `ghcr.io/soulslove2026/phoenix-core@sha256:c9b9911778411d5fb2e84ce3ec33349ef29e26cc83db8cb89f2340339969cf8b` |
| GitHub attestation | `https://github.com/soulslove2026/phoenix-core/attestations/36564638` |
| Deployment ID | `staging-20260722-001` |
| Region | `nl-ams-1` |
| Environment | `staging` |

## Deployment topology

The deployment used the governed staging Compose project and service:

- Compose project: `phoenix-staging`;
- application service: `phoenix-core`;
- PostgreSQL service: `postgres`;
- application bind: `127.0.0.1:3000`;
- application Compose authority:
  `/opt/phoenix/staging/app/phoenix-core/deploy/staging/compose.yaml`;
- Traefik Compose authority:
  `/opt/phoenix/staging/config/compose.traefik.yaml`;
- protected environment file:
  `/opt/phoenix/staging/config/staging.env`.

The Phoenix service was recreated independently with `--no-deps`. PostgreSQL remained running and healthy during the application-image transition.

## Verified controls

The staging host verified all of the following:

1. the container used the immutable GHCR digest above;
2. the image OCI revision matched `de76fc518e489344e68fc74aff3944254cff9855`;
3. the image OCI version matched `3.8.0`;
4. the container ran as the non-root `phoenix` user;
5. `/app/migrations` was owned by `root:root` with mode `0555`;
6. SQL migration files were read-only with mode `0444`;
7. the container state was `running` and Docker health was `healthy`;
8. the readiness endpoint returned `status: ready`;
9. the readiness endpoint returned `database: available`;
10. runtime `buildCommit` matched the verified OCI revision;
11. runtime `deploymentId` matched `staging-20260722-001`;
12. the published image had a GitHub artifact attestation.

## Release-image workflow result

The merged Release Image workflow built, validated, published, pulled, and verified the immutable OCI artifact. The workflow also generated the linked GitHub attestation.

The release workflow summary recorded:

- version `3.8.0`;
- commit `de76fc518e489344e68fc74aff3944254cff9855`;
- digest `sha256:c9b9911778411d5fb2e84ce3ec33349ef29e26cc83db8cb89f2340339969cf8b`;
- immutable GHCR reference;
- production readiness `false`.

## Rollback authority

The preserved pre-deployment environment backup is:

`/opt/phoenix/staging/config/staging.env.backup.20260722T140049Z`

The previous application image is:

`phoenix-core@sha256:dc52848f35d19c29ced3a0d01365b6cf9872382ad5f8c5f622eddb8ca34aa46a`

Rollback restores the previous compatible immutable application image and configuration, then recreates only `phoenix-core` with `--no-deps`.

Database rollback is not implied. PostgreSQL and schema recovery remain governed by the expand–migrate–contract rule and require an explicit recovery decision.

## Evidence handling

A sanitized host-side deployment record was created at:

`/opt/phoenix/staging/evidence/staging-3.8.0-de76fc5.txt`

The host-side evidence file is operational evidence and is not committed to this public repository. This document records only sanitized identifiers and verification outcomes.

## Governance result

The actual staging deployment gate is closed as **Verified**.

This result does not close the remaining Phase C external-assurance gates. In particular, this release does not claim completion of:

- qualifying real-browser and real-device Passkey evidence;
- real notification-provider delivery;
- approved key-rotation exercise;
- operational alert-delivery evidence;
- backup-and-restore exercise;
- incident-response exercise;
- privacy and legal approval;
- independent penetration testing.

## Production boundary

A healthy staging deployment is not production approval.

`Production ready` remains `false` until every applicable Phase C exit gate has qualifying evidence, approval, traceability, and an explicit production-readiness decision.
