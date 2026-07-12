# DPL-012 — Data Ownership

**Document ID:** DPL-012  
**Knowledge ID:** KN-DPL-012  
**Version:** 1.0.0  
**Status:** Ratified  
**Owner:** Data Governance  
**Authority:** DPL-010, DPL-011  

## Purpose

Ensure every data fact has one authoritative owner and one accountable domain.

## Ownership Model

Each data asset must define:

- Business Owner
- Technical Owner
- Authoritative Domain
- Data Steward
- Security Classification Owner
- Retention Owner

## Rules

- Ownership is singular.
- Access may be shared; ownership may not.
- Shared tables without authority are prohibited.
- Cross-domain mutation is prohibited.
- Other domains consume data through APIs, events, or approved read models.
- Ownership changes require migration and governance approval.

## Authoritative Examples

- Identity owns account identity and credential state.
- Messaging owns conversations and messages.
- Voice owns rooms and live participation state.
- Economy owns ledger facts and value movement.
- Moderation owns enforcement cases and decisions.
- Discovery owns recommendation outputs, not source facts.

## Ownership Responsibilities

Owners define:

- meaning;
- quality;
- access;
- lifecycle;
- contracts;
- incident response;
- migration;
- deprecation.

## Delegation

Operational duties may be delegated, but accountability remains with the owner.

## Impact on Other Domains

Ownership governs APIs, events, data contracts, retention, security, and service boundaries.

## Engineering Implementation Notes

- Represent ownership in the data catalog.
- Require owner metadata in schema proposals.
- Reject orphan data assets.
- Audit direct cross-domain writes.
- Link every data contract to an owning domain.

## Architectural Integrity Check

- Is one owner explicit?
- Is the source of truth clear?
- Are consumers using approved contracts?
- Can ownership change without data loss?
- Does this make Phoenix stronger in ten years?
