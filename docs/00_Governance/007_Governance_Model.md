# GOV-008 — Governance Model

**Document ID:** GOV-008  
**Knowledge ID:** KN-GOV-008  
**Version:** 1.0  
**Status:** Approved  
**Owner:** Project Governance

## 1. Purpose

Define how authority, accountability, review, and escalation operate across Phoenix.

## 2. Governance Layers

1. Phoenix Charter
2. Phoenix Constitution
3. Governance standards
4. ADRs and policies
5. Engineering standards
6. Product and domain specifications
7. Implementation and operations

Higher layers prevail over lower layers unless formally amended.

## 3. Current Roles

### Founder
Owns mission, product direction, strategic priorities, and final business approval.

### Chief Software Architect
Owns architectural integrity, technical coherence, and long-term engineering quality.

### Domain Owner
Owns a bounded context, data, contracts, and capability outcomes.

### Reviewer
Provides independent quality, security, or domain review.

## 4. Decision Rights

- product direction: Founder;
- architecture baseline: Chief Architect;
- domain implementation: Domain Owner;
- security acceptance: Security Owner;
- financial model: Founder + Finance/Compliance Owner;
- governance amendment: Founder + Chief Architect.

## 5. Escalation

Conflicts escalate through:

1. domain discussion;
2. written proposal;
3. risk and impact analysis;
4. governance review;
5. final recorded decision.

## 6. Transparency

All approved material decisions must be committed to the repository.

## 7. Future Review Trigger

Review when Phoenix has more than 20 active contributors or creates independent business units.
