# IDN-005 — Persistence and Migration

Migration `001_identity.sql` creates `identity_users` and `identity_sessions`.

The schema uses PostgreSQL constraints and indexes for email uniqueness, status validity, session lookup, and referential integrity.

The migration is additive. No rollback is performed automatically because user identity facts require deliberate migration and preservation decisions.
