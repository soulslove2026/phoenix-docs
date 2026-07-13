# IDN-003 — Registration and Login Contract

## Endpoints

- `POST /v1/identity/register`
- `POST /v1/identity/login`
- `GET /v1/identity/me`
- `POST /v1/identity/logout`

Registration requires email, display name, and a password of at least 12 characters. Login returns a new opaque session token. Authenticated endpoints use `Authorization: Bearer <token>`.

Errors are intentionally generic for invalid credentials. Duplicate registration returns a conflict without revealing secret state.
