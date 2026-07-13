---
Document ID: CORE-005
Category: Core Bootstrap
Version: 3.0.0
Status: Ratified
Maturity: Level 2 — Bootstrap Specification
Owner: Phoenix Core Engineering
Authority: Phoenix Core Bootstrap
Depends On: IMP-007; SEC-005
Last Updated: 2026-07-13
---
# CORE-005 — Local Development and Configuration

## Commands

```bash
npm run check
npm test
PHOENIX_ENV=local npm start
```

## Variables

| Variable | Required | Default |
|---|---:|---|
| `PHOENIX_ENV` | Yes | none |
| `PHOENIX_HOST` | No | `127.0.0.1` |
| `PHOENIX_PORT` | No | `3000` |
| `PHOENIX_LOG_LEVEL` | No | `info` |
| `PHOENIX_REQUEST_LIMIT_BYTES` | No | `1048576` |

No production secrets or production data may be used locally or in CI. Configuration is validated at startup and security-critical failures stop startup.
