# IDN-002 — Identity Domain Model

## Aggregates

### User

- opaque UUID;
- normalized unique email;
- display name;
- password hash;
- active/disabled status;
- created and updated timestamps.

### Session

- opaque UUID;
- user reference;
- SHA-256 token hash;
- creation and expiry;
- optional revocation timestamp.

## Invariants

- plaintext passwords and session tokens are never stored;
- email uniqueness is enforced in PostgreSQL;
- disabled accounts cannot authenticate;
- expired or revoked sessions cannot authenticate;
- public API responses exclude password hashes and token hashes.
