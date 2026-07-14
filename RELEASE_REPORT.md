# Release Report

## Phoenix v3.5.0 Identity Slice 2 Phase B — Release 1

**Status:** Candidate  
**Documentation version:** `3.5.0-identity-slice2-phase-b-r1`  
**Core version:** `3.5.0`  
**Production ready:** No

## Implemented

- Passkey registration and username-less authentication;
- required WebAuthn user verification and discoverable credentials;
- encrypted single-use WebAuthn challenges;
- TOTP enrollment, login, replay prevention, disablement, and recovery-code regeneration;
- ten one-time HMAC-hashed recovery codes;
- AAL1/AAL2 session assurance and recent-authentication gates;
- HIBP k-anonymity password screening;
- encrypted transactional notification outbox and delivery worker;
- migration 004, contracts, tests, documentation, and security gates.

## Candidate boundary

Local validation does not substitute for GitHub Node.js 24, PostgreSQL 18, Docker, CodeQL, or staging authenticator/provider evidence. Production readiness remains false.
