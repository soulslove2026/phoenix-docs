# IDN-004 — Session Security Model

Sessions use 256-bit random opaque tokens. Only SHA-256 hashes are persisted. Tokens expire after 30 days and can be revoked through logout.

This first slice does not claim complete session security. Rotation, device inventory, global logout, risk-based reauthentication, anomaly detection, and compromised-token response remain mandatory future work.
