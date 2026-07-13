# IDN-006 — Threat and Abuse Review

## Addressed

- plaintext credential storage;
- predictable session tokens;
- token storage exposure;
- duplicate accounts by email case;
- authentication error leakage;
- unauthorized current-user access;
- use of revoked sessions.

## Remaining Gates

- brute-force and credential-stuffing controls;
- email ownership verification;
- password reset and recovery;
- breached-password screening;
- MFA and passkeys;
- account enumeration review;
- device and risk signals;
- production secret and transport controls.

The slice must not be exposed publicly before the remaining production controls are ratified.
