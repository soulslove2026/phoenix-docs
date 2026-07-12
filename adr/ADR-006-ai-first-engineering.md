# ADR-006 — AI-First Engineering

Status: Accepted  
Date: 2026-07-11

## Decision

Phoenix documentation, contracts, naming, tests, and change procedures will be designed to support both human engineers and AI coding agents.

## Rules

- AI output is never self-authorizing;
- context must be read before generation;
- assumptions must be explicit;
- sensitive and high-impact changes require qualified human review;
- tests and documentation are mandatory;
- AI agents may not invent critical business rules.
