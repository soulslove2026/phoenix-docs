# Update Guide — v3.7.1

This is a clean snapshot for both repositories.

Core commit:

`fix(assurance): reconcile evidence provenance and closure eligibility`

Documentation commit:

`docs(assurance): reconcile local evidence provenance`

Preserve `.git`, replace every other file, push, and verify CI, CodeQL, Production Assurance Evidence, External Assurance Control Validation, Documentation Check, and Documentation Integrity.

After the update, change the existing local Passkey evidence record from `staging` to `local` and validate it with the v3.7.1 CLI. It should remain passed but appear in `nonQualifyingKinds`.
