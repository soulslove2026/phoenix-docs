# PES-003 — AI Engineering Standard

**Document ID:** PES-003  
**Version:** 1.1.0  
**Status:** Ratified Foundation  
**Maturity:** Level 3 — Engineering Standard  
**Owner:** AI Platform and Responsible AI Governance  

## Executive Summary

Phoenix treats AI as a governed subsystem, not an oracle. Models may generate, rank, classify, summarize, recommend, or assist decisions, but policy authority and accountability remain with Phoenix owners. AI capability must be evaluated for quality, safety, privacy, fairness, abuse resistance, cost, latency, and failure behavior.

## Mandatory Controls

- Named product, technical, data, and policy owners.
- Defined intended use and prohibited use.
- Approved training and inference data purpose.
- Versioned model, prompt, feature set, policy, and evaluation suite.
- Offline evaluation before launch and online monitoring after launch.
- Human review or appeal path for high-impact outcomes.
- Fallback behavior when models or providers fail.
- Auditability appropriate to impact.
- Vendor and model exit strategy.

## Risk Tiers

| Tier | Example | Minimum control |
|---|---|---|
| Low | Text formatting or non-sensitive assistance | Quality tests, privacy review, fallback |
| Medium | Recommendations or content ranking | Bias/abuse evaluation, monitoring, user controls |
| High | Moderation recommendation, fraud risk score | Human oversight, audit, appeal, calibrated thresholds |
| Prohibited without special approval | Fully autonomous irreversible financial or identity action | Governance exception and formal safety case |

## Data Rules

Data classification controls whether data may be used for external inference, internal training, evaluation, retention, or human review. Training permission is not inferred from data availability. Restricted attributes require explicit purpose and access controls.

## Evaluation

Evaluation covers task quality, false positive/negative impact, subgroup behavior where lawful and meaningful, prompt injection, data leakage, toxicity, abuse, adversarial inputs, latency, cost, drift, and fallback quality. Test sets are versioned and protected from contamination.

## Model and Prompt Lifecycle

Every production change references model/version, provider, prompt/template version, feature-set version, policy version, evaluation result, rollout plan, rollback criteria, and owner. Silent provider upgrades must be prevented or detected where possible.

## Architecture Patterns

- Model gateway with policy enforcement
- Versioned prompt and model registry
- Human-in-the-loop review queue
- Shadow evaluation and canary rollout
- Retrieval with access-controlled source filtering
- Safety filter with independent observability
- Deterministic fallback path

## Anti-Patterns

- Sending unrestricted user data to a model by default.
- Using a model output as final policy authority.
- Evaluating only average accuracy.
- Logging full prompts and responses without classification.
- Depending permanently on one provider-specific format.
- Treating model confidence as calibrated probability without evidence.
- Training on user content without explicit governance.

## Security and Abuse

Threat models include prompt injection, data exfiltration, model extraction, poisoned content, unsafe tool use, impersonation, coordinated manipulation, and cost abuse. Tool-using models receive least privilege, allowlisted actions, confirmation gates, and auditable execution.

## Operational Requirements

Monitor latency, cost, refusal/error rate, safety-filter rate, drift, quality signals, appeals, overrides, provider incidents, and fallback activation. Define kill switches and manual operating modes.

## AI Definition of Done

An AI feature is not complete until intended/prohibited use, data permission, evaluations, controls, observability, rollback, user recourse, and ownership are documented and tested.
