# ID2-023 — Phase B Test and Verification Plan

## Local mandatory checks

- strict TypeScript over source, scripts, and tests;
- TOTP RFC vectors and clock-window tests;
- TOTP enrollment-step replay prevention;
- Passkey options requiring resident keys and user verification;
- HIBP k-anonymity, padding, user-agent, timeout, and fail-closed behavior;
- notification decrypt, idempotency, acknowledgement, retry, and dead-letter behavior;
- repository/security/dependency-governance checks;
- production and full dependency audits;
- production build and SBOM validation.

## GitHub mandatory checks

- Node.js 24 installation;
- PostgreSQL 18 migrations 001–004 and idempotency;
- email verification, TOTP enrollment, TOTP login, replay rejection, recovery-code one-time use, password-recovery session invalidation, and OpenAPI integration flow;
- Docker build;
- CodeQL;
- dependency review on pull requests;
- exact documentation integrity.

## Passkey verification boundary

Protocol option policy is tested locally. A real-browser and hardware/platform authenticator ceremony must be exercised in a controlled staging environment before production approval.
