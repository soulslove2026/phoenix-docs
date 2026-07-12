# PEH-010 — Testing Standards

**Document ID:** PEH-010  
**Knowledge ID:** KN-ENG-010  
**Version:** 1.0  
**Status:** Approved Baseline

## Principle

Tests must provide confidence about observable behavior, risk, and regression.

## Required Layers

- Unit tests for domain rules and calculations.
- Integration tests for databases, cache, queues, and providers.
- Contract tests for APIs and events.
- Authorization tests for every protected operation.
- End-to-end tests for critical journeys.
- Performance tests for high-volume paths.
- Security tests for abuse, replay, and permission boundaries.

## Financial Testing

Cover duplicate requests, provider retries, partial failure, refunds, chargebacks, reconciliation, compensating entries, and concurrency.

## Test Quality Rules

- deterministic;
- isolated data;
- behavior-focused names;
- negative paths included;
- no arbitrary sleeps;
- do not mock the unit under test.
