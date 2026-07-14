# ID2-017 — TOTP MFA and Recovery Codes

## TOTP profile

- RFC 6238 TOTP;
- HMAC-SHA-1 for broad authenticator interoperability;
- six digits;
- thirty-second period;
- one-step clock window;
- 256-bit random Base32 seed;
- AES-256-GCM seed encryption;
- monotonic accepted-step counter to prevent code replay.

## Enrollment

Enrollment requires recent authentication. Enrollment records are short-lived, request-context-bound, attempt-limited, and single-use. The code used to confirm enrollment is recorded as already consumed and cannot be replayed for login.

## Recovery codes

Ten random recovery codes are displayed once, HMAC-hashed at rest, and consumed atomically. Regeneration invalidates every prior code. Recovery-code authentication is AAL2 for account access but is explicitly prohibited from managing factors or authenticators.

## Disablement

Disabling TOTP requires recent AAL2 plus a fresh TOTP code, removes recovery codes, increments the authentication version, and revokes every active session.
