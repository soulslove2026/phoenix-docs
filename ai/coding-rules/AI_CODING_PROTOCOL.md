# AI Coding Protocol

## Before Coding
Cite the governing document and ADR, state impacted domains, list assumptions, provide a plan, and define acceptance criteria.

## Rules
- no business logic in controllers or UI widgets
- no direct cross-domain repository access
- no untyped API payloads
- no hidden global mutable state
- no financial update without ledger entries and idempotency
- no endpoint without authorization analysis
- no external provider call without an adapter, timeout, retry, and failure handling
- no hardcoded user-facing strings outside localization resources
- no sensitive data in logs
- no migration without rollback or compensating strategy

## Required Output
Changed files, rationale, migration notes, test evidence, security impact, and unresolved risks.
