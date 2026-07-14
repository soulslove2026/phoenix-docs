# ID2-016 — Passkey and WebAuthn Architecture

## Security decisions

- Relying Party ID and accepted origins are explicit configuration.
- Registration requires discoverable credentials and user verification.
- Authentication requires user verification.
- Attestation is `none` to minimize unnecessary device-identifying data.
- Algorithms are restricted to reviewed WebAuthn algorithms.
- Challenges are random, encrypted with purpose-bound authenticated encryption, short-lived, single-use, and bound to pseudonymized request context.
- Credential public keys, counters, transports, device type, backup state, and usage timestamps are stored; authenticator private keys are never received.
- Credential counters are updated after successful assertions.

## Sensitive operations

Passkey registration requires a recent authenticated session. Successful registration upgrades the current session to AAL2. Deleting a Passkey requires recent AAL2 and cannot remove the authenticator used by the current session.

## Privacy

Phoenix stores only information necessary to verify credentials and operate account security. Device attestation and unnecessary authenticator metadata are not collected.
