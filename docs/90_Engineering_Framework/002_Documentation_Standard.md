# PES-001 — Documentation Standard

**Document ID:** PES-001  
**Version:** 1.1.0  
**Status:** Ratified  
**Maturity:** Level 3 — Engineering Standard  
**Owner:** Engineering Enablement  

## Purpose

Define the minimum structure, quality, traceability, and lifecycle for Phoenix engineering documents.

## Required Metadata

Normative documents include document ID, title, version, status, maturity level, owner, authority, dependencies, required-by relationships, and review triggers.

## Required Sections for Engineering Specifications

- Executive Summary
- Problem and Scope
- Design Goals and Non-goals
- Definitions and Invariants
- Decision Matrix or evaluated alternatives
- Architecture Patterns
- Anti-Patterns
- Engineering Rules
- Security and Privacy Considerations
- AI Context where relevant
- Operational Considerations
- Implementation and Migration Notes
- Future Evolution
- Architectural Integrity Check
- References

A section may be marked “Not Applicable” only with a reason.

## Document Classes

| Class | Purpose | Approval |
|---|---|---|
| Constitution/Governance | Foundational authority | Governance authority |
| Engineering Standard | Reusable mandatory rule | Architecture Council |
| Engineering Specification | Capability or subsystem design | Named owners/reviewers |
| ADR | One durable architecture decision | Architecture owner |
| Runbook | Operational response | Service owner and operations |
| Release Record | Immutable release summary | Release owner |
| Working Note | Exploration only | No normative authority |

## Quality Rules

- Use precise, testable language.
- Distinguish facts, decisions, assumptions, and proposals.
- Use “must” for mandatory rules and “may” for permitted options.
- Avoid unsupported claims such as “infinitely scalable” or “exactly once.”
- Link to authoritative documents rather than duplicating requirements.
- Include examples that contain no real secrets or personal data.
- Keep diagrams source-controlled in text form where practical.

## Versioning

A substantive decision or compatibility change increments the document version and changelog. Historical release records are immutable. Deprecated documents identify a canonical replacement and retirement plan.

## Review and Approval

Reviewers validate correctness, security, privacy, operability, migration, and consistency with existing standards. The author cannot self-approve a high-risk standard without an explicit governance exception.

## Traceability

Requirements map to documents, documents map to implementation work, and critical implementation work maps to tests and operational evidence. Traceability should illuminate decisions, not create ceremonial paperwork.

## Anti-Patterns

- One-line placeholder documents marked complete.
- Copying the same rule into many files.
- Undated diagrams detached from decisions.
- Marking a concept “production proven” before production evidence.
- Editing historical release records.
- Using documentation as a substitute for accountable ownership.

## Documentation Definition of Done

A document is complete for its maturity level when metadata is present, normative statements are testable, links resolve, contradictions are reviewed, known risks are explicit, and an owner accepts future maintenance.
