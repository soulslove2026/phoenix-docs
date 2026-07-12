# Enterprise System Architecture

**Document ID:** PNX-ARCH-007  
**Version:** 1.0  
**Status:** Architecture Baseline

## Layers
Clients → Edge/WAF/API Gateway → NestJS modular monolith → PostgreSQL/Redis/Object Storage → background workers and analytics → external providers.

## Realtime
WebSocket for presence, messaging signals, room state, gifts, and notifications. RTC provider abstraction for audio media. Clients must tolerate reconnects, duplicates, and ordering gaps.

## Reliability
Stateless application nodes, health checks, backup drills, idempotency keys, retry with backoff, dead-letter handling, circuit breakers, and graceful degradation.

## Initial Targets
- API availability: 99.9%
- critical finance: 99.95%
- standard API read p95: under 300 ms excluding provider latency
- crash-free sessions: at least 99.5%
- RPO: under 15 minutes initially
- RTO: under 60 minutes initially

## Deployment Evolution
Single-region multi-zone → isolated workers and read scaling → justified domain extraction → regional media/edge → carefully designed multi-region data.
