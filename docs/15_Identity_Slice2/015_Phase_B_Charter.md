# ID2-015 — Phase B Charter

## Objective

Add phishing-resistant Passkeys, TOTP multifactor authentication, one-time recovery codes, compromised-password screening, recent-authentication gates, and a production-shaped notification-delivery path without weakening the verified Identity foundation.

## Included

- discoverable WebAuthn credentials with required user verification;
- username-less Passkey authentication;
- encrypted one-time WebAuthn challenges bound to network and user-agent signals;
- encrypted TOTP seeds, replay prevention, and bounded clock skew;
- ten single-use recovery codes stored only as keyed hashes;
- session assurance levels and recent-authentication checks;
- HIBP k-anonymity password screening;
- encrypted transactional notification outbox and separate delivery worker;
- migration 004, contracts, unit tests, PostgreSQL integration tests, CI, CodeQL, SBOM, and traceability.

## Non-goals

This release does not introduce administrator identity, social login, SMS MFA, behavioral risk scoring, account portability, or public production readiness.

## Acceptance

Phase B becomes Verified only after Node.js 24 CI, four-migration ledger validation, PostgreSQL integration, audits, SBOM, CodeQL, Docker build, exact repository checks, and both documentation workflows pass.
