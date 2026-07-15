# ID2-044 — Staging Passkey Assurance Procedure

## Objective

Produce closure-qualified `passkey_real_device` evidence from a governed HTTPS staging origin.

## Preconditions

- verified immutable Phoenix Core artifact;
- real HTTPS staging domain;
- independent staging database and secrets;
- correct RP ID and allowed origin;
- protected operations monitoring;
- synthetic or approved test account;
- approved evidence directory outside source control.

## Procedure

1. Deploy with the Passkey harness disabled.
2. Run staging preflight and remote smoke validation.
3. Open an approved assurance window and enable the harness.
4. Register a Passkey with a supported platform authenticator or security key.
5. Authenticate with that Passkey.
6. Verify both server-side verification requests return HTTP 200.
7. Capture sanitized evidence with no session token, email, user ID, credential ID, PIN, or raw WebAuthn response.
8. Set the evidence environment to `staging`, add the artifact digest and approval, and validate it with the external-assurance CLI.
9. Disable the harness and repeat smoke validation.

## Stop conditions

Stop when the origin, RP ID, deployment identity, TLS path, readiness, monitoring, or evidence sanitation cannot be proven.

## Exit condition

`passkey_real_device` is passed, closure-qualified, absent from `notPassedKinds`, and absent from `nonQualifyingKinds`.
