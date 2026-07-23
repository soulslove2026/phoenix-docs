# PDR-004 — Passkey Assurance Lessons from R1 and R2

## Classification

The 2026-07-23 staging Passkey R1 and R2 attempts are non-qualifying diagnostic exercises. They do not close `passkey_real_device`.

## Verified observations

- governed HTTPS staging remained healthy and ready;
- the Passkey validation harness was disabled before and after each window;
- the public harness returned 404 after closure;
- the Windows browser environment reported secure context, WebAuthn support, a user-verifying platform authenticator, and conditional mediation;
- registration did not reach a successful authenticator ceremony because the request was rejected as `session_invalid`;
- the private canonical session probe later returned HTTP 200;
- the R2 closure verification passed with runtime harness false, public 404, health 200, and readiness 200.

## Lessons

1. Manual bearer-token transfer is operationally fragile even when the underlying session is valid.
2. Browser rate limits amplify operator mistakes and make repeated ad-hoc attempts inefficient.
3. Assurance windows and rollback worked as designed and prevented persistent exposure.
4. The next attempt must use a governed operator workflow with no manual clipboard token transfer.
5. Failed evidence must remain sanitized, external to source control, and explicitly non-qualifying.

## Decision

Do not run R3 with the previous manual procedure. Build and verify the assurance operator first, then repeat the ceremony under a new approved window.
