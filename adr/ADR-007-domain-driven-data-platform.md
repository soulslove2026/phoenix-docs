# ADR-007 — Domain-Driven Data Platform

Status: Accepted  
Date: 2026-07-12

## Decision

Phoenix data architecture will be organized by bounded context and authoritative ownership rather than by one shared relational model.

PostgreSQL remains the default operational store. Additional technologies require evidence and documented tradeoffs.

## Consequences

- logical schemas by domain;
- no direct cross-domain mutation;
- explicit contracts and replicated read models;
- easier future service extraction;
- stronger ownership and governance;
- additional discipline required in integration design.
