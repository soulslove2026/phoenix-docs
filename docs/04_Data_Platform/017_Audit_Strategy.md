# DPL-017 — Audit Strategy

**Document ID:** DPL-017  
**Knowledge ID:** KN-DPL-017  
**Category:** Data Platform  
**Version:** 1.0.0  
**Status:** Ratified  
**Maturity:** Level 2 — Engineering Specification  
**Owner:** Security and Data Governance  
**Authority:** DPL-010, DPL-011, DPL-012, DPL-014  
**Depends On:** DPL-010 through DPL-016  
**Required By:** Identity, Economy, Moderation, Administration, AI, Compliance, Operations  
**Review Trigger:** Security incident, regulatory change, new administrator capability, financial launch  

## Executive Summary

Phoenix maintains an audit trail that explains who or what performed a material action, on which object, under which policy, with what result, and through which request chain. Audit data is distinct from operational logs, telemetry, domain events, and the financial ledger.

Auditability is mandatory for privileged, security-sensitive, financial, moderation, privacy, and high-impact AI actions. Audit capture must minimize sensitive content while preserving evidence.

## Design Goals

- Preserve trustworthy evidence for material actions.
- Separate audit evidence from business truth and operational telemetry.
- Minimize sensitive content while retaining accountability.
- Make privileged access and policy decisions traceable.
- Support tamper detection, retention, export, and investigation.
- Keep audit capture reliable under partial failure.

## Audit Record Classes

| Record class | Purpose | May be mutable? | Typical retention owner |
|---|---|---:|---|
| Operational log | Diagnose software behavior | Rotated/expired | Operations |
| Telemetry metric/trace | Observe health and performance | Aggregated | Operations |
| Domain event | Communicate a business fact | Append-oriented | Domain owner |
| Security audit event | Prove access or security action | Append-only | Security |
| Compliance audit event | Demonstrate governed processing | Append-only | Compliance/Data Governance |
| Financial ledger entry | Represent value movement | Immutable with compensating entries | Economy |

An audit event may reference a domain event or ledger entry, but it must not replace the authoritative business record.

## Mandatory Audit Envelope

Material audit events include:

- `audit_event_id`;
- `occurred_at` and ingestion timestamp;
- actor type and actor identifier;
- authenticated principal and delegated principal where applicable;
- action and result;
- target type and target identifier;
- reason or policy decision code;
- source service and environment;
- request, correlation, causation, session, and device identifiers when available;
- policy, rule, model, or workflow version;
- safe before/after diff, field names, or cryptographic hash where justified;
- data classification and retention class;
- structured metadata approved for the event type.

Passwords, tokens, private keys, full payment credentials, and unrestricted message bodies are prohibited in audit payloads.

## Audit Decision Matrix

| Domain/action | Audit level | Required evidence |
|---|---|---|
| Login, credential reset, account recovery | Security-critical | Actor, device, risk result, outcome, correlation |
| Role or permission change | Security-critical | Grantor, grantee, old/new role, reason, approval |
| Administrator data access | Privileged | Actor, target, purpose, fields/category accessed |
| Moderation decision | High | Case, evidence references, policy version, reviewer/AI role |
| Financial transfer or withdrawal decision | Critical | Workflow, ledger references, approvals, reason |
| Privacy export or deletion request | Compliance | Requester, scope, stages, completion evidence |
| AI-assisted enforcement recommendation | High | Model/policy version, confidence band, human decision |
| Profile edit | Standard | Actor, target, changed field names, outcome |
| Search query | Normally telemetry, not audit | Escalate only for privileged investigation tools |

## Integrity and Tamper Evidence

Audit storage is append-only at the application boundary. High-risk streams may use hash chaining, signed batches, immutable object storage, or retention lock when justified by threat model or legal requirement. No control should be described as tamper-proof; Phoenix uses layered controls that make unauthorized change difficult and detectable.

## Access Control

- Audit access follows least privilege and purpose limitation.
- Audit readers and exporters are themselves audited.
- Financial, security, moderation, and privacy audit domains may require separate roles.
- Production support access must be time-bound where practical.
- Bulk export requires approval and secure delivery.

## Retention and Privacy

Retention follows classification, legal obligation, fraud risk, and user expectation. Audit data must not become an uncontrolled duplicate of sensitive source data. Use identifiers, reason codes, field names, and hashes instead of full content whenever they provide sufficient evidence.

Deletion requests must account for audit integrity. Where records must be retained, Phoenix may pseudonymize or detach user-facing identifiers while preserving lawful evidence.

## Architecture Patterns

- Structured audit event envelope
- Append-only audit sink
- Privileged access gateway
- Policy-decision record
- Hash-linked batch for high-risk streams
- Export with chain-of-custody metadata
- Audit search index separated from authoritative archive

## Anti-Patterns

- Treating application logs as the audit trail.
- Logging full secrets or message bodies for convenience.
- Allowing administrators to disable their own audit capture.
- Using mutable database rows with no history.
- Omitting failed and denied actions.
- Recording only the final outcome without policy or reason.

## Engineering Rules

1. Every privileged action produces a structured audit event.
2. Denied and failed actions are captured where security relevance exists.
3. Audit writes must not be silently dropped; failure policy is explicit.
4. Audit schemas are versioned and governed as data contracts.
5. Audit access and exports are audited.
6. Sensitive content is minimized.
7. Time synchronization and source timestamps are monitored.
8. Critical audit gaps trigger incident handling.

## AI Context

AI-related audit records distinguish recommendation, automated action, and human decision. They record model identifier, model version, policy version, input-data references or safe hashes, confidence band where meaningful, explanation artifact reference, and override outcome. Raw prompts or user content are stored only when classification and purpose explicitly allow it.

## Security Considerations

Protect ingestion credentials, encrypt transport and storage, separate duties, alert on deletion attempts, and monitor gaps or unusual export activity. Audit systems must resist privilege escalation from the systems they observe.

## Operational Considerations

Measure event loss, ingestion lag, schema rejection, clock skew, archive success, search freshness, retention execution, and export activity. Reconcile expected critical actions against received audit events.

## Implementation Notes

- Use a stable event taxonomy and reason-code registry.
- Prefer asynchronous delivery with durable local buffering for non-blocking actions.
- For critical actions, define whether audit failure blocks the action or triggers a fail-safe state.
- Store evidence references rather than uncontrolled evidence copies.
- Validate event classification before ingestion.

## Future Evolution

Phoenix may add independent audit verification, signed release manifests, automated privileged-session capture, and policy-driven retention enforcement. These capabilities require separate threat and privacy reviews.

## Architectural Integrity Check

- Can Phoenix prove who acted and why?
- Are denied actions visible?
- Is the business source of truth separate from the audit record?
- Are secrets and unnecessary content excluded?
- Can unauthorized modification be detected?
- Is audit access itself governed?

## References

- DPL-011 — Data Classification
- DPL-014 — Data Lifecycle
- DPL-016 — Data Versioning
- DPL-018 — Data Contracts
- Phoenix Security and Governance documents
