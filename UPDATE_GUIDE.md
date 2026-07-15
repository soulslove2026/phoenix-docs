# Update Guide — v3.8.0

This is a clean snapshot for both repositories.

Core commit:

`feat(staging): add governed assurance foundation`

Documentation commit:

`docs(staging): add assurance foundation and deployment runbooks`

Preserve `.git`, replace every other file, push Core first, and verify CI, CodeQL, Production Assurance Evidence, External Assurance Control Validation, and Staging Foundation Validation. Then update Docs and verify Documentation Check and Documentation Integrity.

Do not alter the saved local Passkey checkpoint. No external-assurance record changes until a real HTTPS staging ceremony is complete.
