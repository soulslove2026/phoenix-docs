# ID2-018 — Breached-password Screening

## Protocol

Phoenix checks new passwords during registration and password reset through the HIBP Pwned Passwords range protocol:

- calculate the SHA-1 digest locally;
- send only the first five hexadecimal characters;
- request response padding;
- set an explicit Phoenix user agent;
- compare suffixes locally;
- never send the plaintext password or full digest.

## Failure modes

- `required`: fail closed when screening is unavailable; mandatory production default.
- `best_effort`: suitable only for specifically reviewed non-production contexts.
- `disabled`: allowed for deterministic CI tests only.

Compromised passwords return a specific safe validation error without exposing the breach count.

## Data boundary

Screening results are not persisted with the user. Passwords remain subject to local length and context-word policy before hashing.
