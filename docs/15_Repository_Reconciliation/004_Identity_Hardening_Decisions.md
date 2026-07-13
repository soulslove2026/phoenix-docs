# REC-004 — Identity Hardening Decisions

## Decisions

- Normalize and structurally validate ASCII Internet email addresses; ownership verification remains separate.
- Keep PostgreSQL as uniqueness authority and map unique-conflict races deterministically.
- Configure session TTL with a 90-day hard ceiling.
- Store only opaque-token hashes.
- Add per-process throttling as a replaceable baseline, not a distributed-scale claim.
- Preserve additive migrations and application rollback compatibility.
- Keep verification, recovery, MFA/passkeys, breached-password screening, and advanced session controls in Slice 2.
