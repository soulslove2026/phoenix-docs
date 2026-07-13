# ID2-002 — Email Verification

Accounts do not receive authenticated sessions until email ownership is verified. Tokens are 256-bit random values, single-use, expiring, HMAC-hashed in the token table, and delivered only through an AES-256-GCM encrypted outbox.
