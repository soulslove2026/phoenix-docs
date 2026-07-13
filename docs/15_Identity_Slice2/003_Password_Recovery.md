# ID2-003 — Password Recovery

Recovery request responses are generic. Reset tokens expire after 15 minutes by default, are single-use, and are never stored raw. Successful recovery increments the user auth version, consumes outstanding action tokens, and revokes all sessions.
