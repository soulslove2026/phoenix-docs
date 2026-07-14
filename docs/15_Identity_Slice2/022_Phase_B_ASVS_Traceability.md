# ID2-022 — Phase B ASVS Traceability

Phoenix uses OWASP ASVS 5.0 Level 2 as the minimum application-security baseline, with stronger identity controls where practical.

| Security area | Phase B evidence | Status |
|---|---|---|
| Authentication architecture | explicit assurance methods, factor ownership, secure fallback | Candidate |
| Password security | scrypt, length policy, breached-password screening | Candidate |
| Multifactor authentication | TOTP, recovery codes, recent AAL2 gates | Candidate |
| Passwordless authentication | Passkeys/WebAuthn with UV required | Candidate |
| Session management | absolute/idle expiry, rotation, assurance, revocation | Candidate |
| Cryptography | purpose-separated AES-GCM and HMAC keys | Candidate |
| Communications | HTTPS-required external providers and production TLS | Candidate |
| Error handling and logging | generic auth errors, pseudonymized events, secret-log scanning | Candidate |
| Data protection | encrypted tokens/seeds/challenges and minimal Passkey metadata | Candidate |
| Malicious input and abuse | schemas, attempt limits, PostgreSQL distributed limiting | Candidate |
| Supply chain | exact pins, audits, SBOM, CodeQL, dependency review | Candidate |

This matrix is an internal engineering traceability aid, not an external ASVS certification.
