# ID2-008 — Secrets and Cryptography

Token pepper, notification encryption key, and privacy key are independent secrets. Notification payloads use AES-256-GCM with authenticated associated data. Secret management, access separation, rotation, and emergency revocation are mandatory operations gates.
