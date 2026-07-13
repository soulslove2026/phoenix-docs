---
Document ID: SEC-006
Knowledge ID: PHX-SEC-006
Category: Security Foundation
Version: 2.2.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Security Architecture
Authority: Phoenix Security Foundation
Depends On: SEC-001; SEC-002; DPL-011; DPL-014; DPL-018; ARC-005
Required By: phoenix-core, platform operations, product engineering, AI engineering
Review Trigger: material architecture change, new regulated market, major incident, identity/economy redesign
Last Updated: 2026-07-13
---

# SEC-006 — Data Protection and Privacy Security

## Executive Summary

Phoenix protects data according to classification, purpose, user expectation, business impact, jurisdiction, and lifecycle. Encryption is required but is only one control among minimization, authorization, isolation, retention, deletion, masking, audit, and safe processing.

## Protection Objectives

- Confidentiality: only authorized subjects can access data.
- Integrity: unauthorized or accidental modification is prevented or detectable.
- Availability: protected data remains recoverable and usable.
- Purpose limitation: data is used only for approved purposes.
- Minimization: collect and expose the least data necessary.
- Lifecycle control: retention, deletion, and legal holds are explicit.
- Transparency: material access and use can be explained.

## Classification Mapping

| Class | Examples | Baseline controls |
|---|---|---|
| Public | Public profiles and published content | Integrity, abuse prevention, controlled indexing |
| Internal | Operational metadata and non-public configurations | Authenticated access, logging, environment separation |
| Confidential | Private messages, contact details, unpublished content | Strong authorization, encryption, minimization, restricted support access |
| Restricted | Credentials, recovery evidence, payment data, sensitive moderation records | Strong isolation, field/envelope encryption, dual control where applicable, detailed audit |
| Regulated/region-bound | Data subject to specific residency or processing rules | Location-aware storage and processing, transfer controls, documented legal basis |

## Encryption

- TLS for external and internal network communication.
- Encryption at rest for authoritative stores, backups, and object storage.
- Field-level or envelope encryption for selected restricted fields.
- Managed key systems with versioning and rotation.
- Encryption context binding where appropriate.
- No custom cryptographic algorithms.

## Data Access

Access must be purpose-bound and filtered to required fields. Support, moderation, analytics, operations, and AI workloads receive separate access paths and policies.

## Privacy-Safe Architecture

- Use stable opaque identifiers instead of exposing sensitive natural identifiers.
- Separate identity contact data from broad product datasets.
- Tokenize or pseudonymize data used for analytics where feasible.
- Build deletion and retention into source systems and derived models.
- Prevent unrestricted replication of sensitive fields into logs, events, caches, warehouses, or model context.
- Make exports and internal investigations auditable.

## Backups and Recovery

Backups inherit the classification and protection requirements of source data. Retention, deletion limitations, access, encryption, restoration testing, and compromise response must be documented.

## Data in Events and Logs

Events and logs must carry the minimum required payload. Sensitive message bodies, credentials, payment details, and recovery evidence are prohibited unless a separately reviewed requirement justifies them.

## AI Data Security

Before data enters model prompts, retrieval systems, evaluation datasets, or training workflows, Phoenix must define:

- approved purpose;
- classification;
- minimization and redaction;
- retention;
- provider processing terms;
- region and transfer rules;
- model-output handling;
- access and audit;
- deletion feasibility.

Restricted data is denied by default.

## Decision Matrix

| Use case | Required design |
|---|---|
| Public search indexing | Public fields only, abuse and removal controls |
| Private message delivery | End-to-end path confidentiality, strict membership authorization |
| Analytics | Minimized event data, pseudonymous IDs, governed retention |
| Support investigation | Case-bound, field-limited, time-limited, audited access |
| AI moderation | Minimized content and context, policy version, access control, retention limit |
| Data export | Strong authentication, authorization, packaging security, audit |
| Deletion | Authoritative deletion plus governed propagation and tombstone strategy |

## Anti-Patterns

- Copying production databases for development.
- Full payload logging.
- Using encryption to justify broad access.
- Retaining data indefinitely because storage is inexpensive.
- Sending private data to external AI tools without governance.
- Building deletion only after launch.
- Storing sensitive fields in general-purpose search indexes.
- Assuming backups are outside privacy obligations.

## Operational Considerations

Monitor unusual data reads, bulk exports, failed deletion propagation, cross-region access, sensitive-field exposure, backup restoration, and policy exceptions.

## Implementation Notes

Build a field-level data inventory for MVP contexts. Map each sensitive field to owner, purpose, classification, storage, encryption, retention, access roles, derived copies, and deletion behavior.

## Future Evolution

Future work may define regional data zones, privacy-preserving analytics, advanced tokenization, confidential processing, and user-facing access transparency.

## Architectural Integrity Check

- Is every sensitive field classified and owned?
- Is data minimized across APIs, events, logs, and AI context?
- Are retention and deletion implemented end to end?
- Are backups and derived stores included?
- Can access be explained and audited?

## References

- DPL-011 Data Classification
- DPL-014 Data Lifecycle
- DPL-018 Data Contracts
- SEC-005 Secrets and Key Management
