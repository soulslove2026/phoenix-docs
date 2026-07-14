# ID2-019 — Production Notification Delivery

## Architecture

Identity actions and security notices enter PostgreSQL in the same transactional boundary as the security state they support. Payloads are encrypted before storage. A separate worker claims rows using locking with `SKIP LOCKED` and sends them through a provider adapter.

## Delivery controls

- HTTPS provider endpoint;
- bearer credential supplied only to the worker;
- verified sender configuration;
- provider idempotency key equal to the outbox identifier;
- request timeout and redirect rejection;
- bounded batch size;
- exponential retry delay with a one-hour ceiling;
- stale-lock recovery;
- maximum-attempt dead-lettering;
- no plaintext action token in application logs.

## Operations

Production deployment must monitor queue age, failure rate, dead-letter count, delivery latency, and provider availability. A real provider contract, verified sender, alerting, and delivery exercises remain release-environment requirements.
