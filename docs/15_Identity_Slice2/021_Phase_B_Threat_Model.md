# ID2-021 — Phase B Threat Model

| Threat | Primary controls | Residual risk |
|---|---|---|
| Credential phishing | Passkeys with RP/origin validation and required user verification | users may retain password fallback |
| TOTP replay | monotonic time-step storage and atomic update | real-time adversary relay remains possible |
| Recovery-code theft | one-time HMAC hashes, restricted sessions, security notice | offline theft before use remains possible |
| WebAuthn challenge replay | encrypted, short-lived, single-use challenge bound to request context | device/browser compromise |
| Compromised password selection | HIBP k-anonymity and fail-closed production mode | provider outage blocks password changes by design |
| Notification token disclosure | AES-GCM outbox, worker-only provider credential, no token logging | endpoint compromise or mailbox compromise |
| Notification duplication | idempotency keys and transactional claims | provider must honor idempotency contract |
| MFA brute force | transaction/enrollment attempt limits plus distributed rate limits | edge-distributed abuse defense remains needed |
| Session downgrade | assurance records and recent-authentication checks | advanced risk scoring remains pending |
| Supply-chain compromise | exact pins, audits, SBOM, CodeQL, dependency review | external action pinning by immutable SHA remains pending |

## Trust boundaries

Browser/authenticator, Phoenix API, PostgreSQL, password-breach provider, notification provider, CI/CD, and secret manager are distinct trust zones. Production approval requires a deployment-specific data-flow and threat-model review.
