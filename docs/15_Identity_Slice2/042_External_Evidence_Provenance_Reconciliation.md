# ID2-042 — External Evidence Provenance Reconciliation

## Requirement

Evidence metadata must describe the environment in which the exercise actually occurred. Structural validation must never encourage an operator to relabel local evidence as staging or production evidence.

## Model

Phoenix accepts these evidence environments:

- `local` — controlled developer-machine evidence;
- `staging` — governed pre-production environment;
- `production` — live production environment;
- `recovery` — isolated disaster-recovery exercise environment;
- `external` — independent third-party review or testing.

A passed record can be valid but non-qualifying for Phase C closure. The assessment exposes this through `nonQualifyingKinds`.

## Closure matrix

| Evidence kind | Closure-qualified environment |
|---|---|
| Passkey real device | staging or production |
| Notification provider delivery | staging or production |
| Key rotation exercise | staging or production |
| Alert delivery | staging or production |
| Recovery drill | recovery |
| Incident response exercise | staging, production, or recovery |
| Privacy/legal review | external |
| Penetration test | external |

## Current evidence

The July 2026 Windows Hello exercise is classified as local passed engineering evidence. It remains useful and immutable, but it does not close the Passkey external-assurance gate.

## Verification

- unit test proves local passed Passkey evidence validates;
- unit test proves it appears in `nonQualifyingKinds`;
- unit test proves a recovery drill in staging is non-qualifying;
- repository and documentation integrity gates preserve Candidate status.
