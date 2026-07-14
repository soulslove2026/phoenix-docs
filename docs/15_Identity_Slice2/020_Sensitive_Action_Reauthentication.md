# ID2-020 — Sensitive-action Reauthentication

## Assurance levels

- AAL1: verified-email bootstrap or password-only authentication.
- AAL2: password plus TOTP, Passkey, or recovery-code login.

## Recent-authentication gate

Sensitive actions require authentication within a bounded recent window. When TOTP is active, factor enrollment and management require AAL2. Recovery-code sessions are denied factor-management operations even though they allow emergency account access.

## Session controls

- factor enrollment upgrades the current session assurance;
- factor disablement revokes every session;
- password recovery increments authentication version and revokes every session;
- Passkey sessions record the authenticator identifier;
- the current Passkey cannot delete itself;
- session absolute lifetime is never extended by rotation.

## Future step-up

Risk-triggered reauthentication, administrator separation, transaction signing, and policy-driven AAL selection remain future controls.
