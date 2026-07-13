---
Document ID: SEC-004
Knowledge ID: PHX-SEC-004
Category: Security Foundation
Version: 2.2.0
Status: Ratified
Maturity: Level 2 — Engineering Specification
Owner: Phoenix Security Architecture
Authority: Phoenix Security Foundation
Depends On: SEC-001; SEC-003; ARC-002; ARC-003; DPL-012; DPL-018
Required By: phoenix-core, platform operations, product engineering, AI engineering
Review Trigger: material architecture change, new regulated market, major incident, identity/economy redesign
Last Updated: 2026-07-13
---

# SEC-004 — Authorization and Access Control

## Executive Summary

Phoenix authorization is deny-by-default and resource-oriented. Decisions use the authenticated subject, requested action, protected resource, ownership, relationship, role, policy, risk, jurisdiction, and current state.

Authentication claims identify the principal. The owning domain decides whether that principal may perform the requested action.

## Authorization Model

Phoenix combines:

- **RBAC** for stable organizational and administrative responsibilities;
- **ABAC** for context, resource sensitivity, risk, region, device, and transaction state;
- **relationship-based rules** for social graphs, rooms, teams, agencies, and creator management;
- **capability or scoped permissions** for narrow delegated access;
- **policy-based controls** for cross-cutting security and compliance requirements.

No single model is sufficient for every context.

## Decision Inputs

```text
subject + action + resource + relationship + context + policy version + risk
```

The decision result is:

```text
allow | deny | challenge | require-approval | defer
```

Material decisions should include a reason code and policy version.

## Ownership

| Context | Authorization owner |
|---|---|
| Identity and Account | Identity context |
| Messaging | Messaging context |
| Voice Rooms | Live Voice context |
| Social Graph | Social context |
| Gifts and Wallet | Economy context |
| Moderation actions | Trust and Safety context |
| Administrative tooling | Administration context |
| AI tools | Owning domain plus AI policy layer |

Shared gateways may enforce baseline controls but must not replace domain ownership.

## Privileged Access

Administrative and operational access requires:

- named individual identity;
- strong authentication;
- least privilege;
- time-bound or just-in-time elevation where feasible;
- separation of duties;
- approval for critical actions;
- session and action audit;
- periodic access review;
- rapid revocation.

Shared accounts are prohibited.

## Service-to-Service Authorization

Workload identity alone is insufficient. The receiving service validates audience, scope, action, resource, and context. Internal calls are not trusted merely because they originate inside the platform network.

## Decision Matrix

| Capability | Default policy |
|---|---|
| Read public profile | Allow subject to privacy and safety policy |
| Read private message | Conversation membership plus state and policy |
| Moderate content | Assigned role, scope, region, case, and policy version |
| Change wallet balance | Economy-owned invariant; no generic admin write |
| View sensitive user data | Purpose-bound, minimal fields, audited |
| Export data | User authority or approved operational/legal process |
| Invoke AI tool | Explicit tool scope, data scope, rate, and approval boundary |
| Emergency access | Break-glass, time-bound, justified, alerted, reviewed |

## Policy Lifecycle

1. propose policy change;
2. identify affected resources and subjects;
3. test with representative and adversarial cases;
4. review for security, privacy, fairness, and operational impact;
5. version and deploy;
6. monitor denials, overrides, and anomalies;
7. support rollback;
8. retain decision evidence.

## Authorization Caching

Caching is allowed only when revocation, policy versioning, resource state, and risk are respected. High-risk decisions should use fresh authoritative state. Cached permission must never outlive the underlying grant.

## Anti-Patterns

- Client-side-only authorization.
- Global `is_admin` flags granting unrelated powers.
- Shared database access used to bypass owning-domain policy.
- Role explosion without resource context.
- Wildcard service permissions.
- Authorization based only on network location.
- Unlogged emergency overrides.
- AI-generated permissions applied without deterministic policy enforcement.

## Engineering Rules

1. Deny when required decision inputs are missing.
2. Enforce policy at the protected resource or its authoritative boundary.
3. Never trust roles supplied by the client.
4. Separate viewing data from changing data.
5. Separate policy administration from policy enforcement.
6. Record material privileged decisions.
7. Provide deterministic reason codes for support and investigation.
8. Test horizontal and vertical privilege escalation.
9. Revocation must propagate within a defined maximum window.
10. Every cross-context administrative action requires a governed contract.

## AI Context

AI can recommend a policy outcome or surface evidence. Deterministic authorization enforcement remains authoritative. AI tools receive explicit scopes, limited datasets, bounded actions, and revocable workload identity.

## Operational Considerations

Monitor unexpected allow rates, repeated denials, privilege elevation, policy errors, emergency access, dormant privileges, and cross-region access anomalies.

## Implementation Notes

Implement a common decision interface and telemetry vocabulary, while keeping domain policy logic owned by each bounded context. Avoid centralizing every business rule into one unmanageable policy service.

## Future Evolution

Later work may introduce relationship-graph authorization, policy-as-code, formally tested critical invariants, delegated creator/agency access, and jurisdiction-specific controls.

## Architectural Integrity Check

- Does the resource owner enforce authorization?
- Is access deny-by-default?
- Are administrator and service privileges bounded?
- Can grants be revoked quickly?
- Are policy changes versioned and testable?

## References

- DPL-012 Data Ownership
- DPL-018 Data Contracts
- ARC-002 Bounded Contexts
- SEC-003 Identity and Authentication
