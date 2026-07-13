# REC-006 — Residual Risks and Deferred Controls

## Production blockers

- no email ownership verification;
- no recovery or password reset;
- no MFA/passkeys;
- no breached-password screening;
- rate limiting is process-local rather than distributed;
- no device/session inventory or global logout;
- no risk-based authentication or anomaly detection;
- operational alerts and production secret/transport evidence are not yet complete.

## Decision

These controls are not hidden defects. They are explicit, owned future scope and keep `production_ready=false`. Identity Slice 2 must address them before public deployment consideration.
