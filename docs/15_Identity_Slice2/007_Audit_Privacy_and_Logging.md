# ID2-007 — Audit, Privacy, and Logging

Security events contain event type, outcome, user reference where known, and HMAC-pseudonymized signals. Passwords, bearer tokens, action tokens, encryption keys, raw email subjects, and raw IP addresses must never enter logs.

The database rejects update or delete operations on identity security events. Retention or legally required deletion must use a separately reviewed privileged migration procedure.
