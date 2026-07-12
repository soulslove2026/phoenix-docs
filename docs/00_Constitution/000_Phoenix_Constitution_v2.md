# Phoenix Constitution v2.0

**Document ID:** PNX-CON-000  
**Version:** 2.0  
**Status:** Ratified Project Constitution  
**Authority:** Highest governing document of Phoenix  
**Applies to:** Business, product, design, engineering, security, data, AI, operations, and governance  
**Supersedes:** Phoenix Constitution v1.0

## Preamble

Phoenix is being built as a long-lived, global, AI-native social platform. Its purpose is not merely to attract attention, but to create meaningful connection, healthy communities, creative opportunity, trusted digital identity, and sustainable economic value.

This constitution exists to prevent the project from losing its character as it grows. It establishes the principles that no feature, deadline, investor request, technical shortcut, commercial pressure, or automated system may silently override.

Where this constitution conflicts with an ordinary specification, implementation, roadmap, or local decision, this constitution prevails unless it is formally amended.

# Part I — Purpose and Identity

## Article 1 — Human Purpose
Phoenix shall serve people before metrics. Features must strengthen meaningful connection, belonging, expression, creation, learning, collaboration, safe entertainment, or fair economic opportunity.

## Article 2 — Originality
Phoenix shall maintain an original brand, interface, interaction model, visual language, architecture, and product philosophy. It may study public market patterns but shall not copy proprietary code, protected assets, distinctive branding, private APIs, or confidential documentation.

## Article 3 — Long-Term Stewardship
Important decisions shall be evaluated for maintainability, reversibility, operational cost, safety, scalability, legal exposure, team impact, and user trust.

## Article 4 — Platform Coherence
Phoenix shall be built around approved pillars: Identity, Community, Communication, Creation, Monetization, Intelligence, Trust, and Extensibility.

# Part II — User Rights and Experience

## Article 5 — User Dignity
Users shall not be reduced to spenders, rankings, or behavioral targets. Deceptive urgency, hidden charges, fabricated scarcity, shame-based retention, confusing consent, and disguised advertising are prohibited.

## Article 6 — Comprehensible Experience
Every flow shall prioritize clarity, predictable navigation, recoverable mistakes, useful feedback, understandable terminology, and low cognitive burden.

## Article 7 — Accessibility
Accessibility is a release requirement. Core experiences shall support screen readers, dynamic text, sufficient contrast, focus states, motion reduction, and accessible error messages.

## Article 8 — Global Readiness
Arabic RTL and English LTR are mandatory from the first production release. Architecture shall support more languages, local formats, currencies, time zones, cultural adaptation, and regional feature controls.

## Article 9 — Age and Vulnerability
Features involving public communication, gifts, payments, discovery, or private contact must include age-appropriate controls, safer defaults, reporting, spending controls, and contact limits where required.

## Article 10 — Consent and Control
Users must be able to understand and control contact permissions, invites, presence, followers, notifications, personalization, public profile exposure, and lawful export or deletion rights.

# Part III — Community, Trust, and Safety

## Article 11 — Safety by Design
Safety shall be embedded in identity, messaging, voice, communities, discovery, payments, and recommendations—not added only after harm.

## Article 12 — Moderation System
Moderation shall support reporting, automated triage, human review, evidence preservation, proportional enforcement, appeals, policy versioning, and moderator accountability.

## Article 13 — Proportional Enforcement
Enforcement must distinguish accidental conduct, minor violations, repeated abuse, coordinated abuse, fraud, imminent threats, and illegal content.

## Article 14 — Appeals
Material moderation or financial decisions shall provide an appeal path where appropriate, with reasons, policy version, evidence reference, timestamps, and outcome.

## Article 15 — Moderator Integrity
Moderators and administrators operate under least privilege. Sensitive actions require explicit permission, reason codes, audit logs, and elevated review where necessary.

## Article 16 — Community Autonomy
Community owners may set local culture and rules, but platform-wide safety rules always prevail.

# Part IV — Economic and Financial Integrity

## Article 17 — Transparent Monetization
Users must understand what they purchase, what it provides, whether it expires, whether it is refundable, and whether it has withdrawal value.

## Article 18 — Currency Separation
Purchased units, promotional units, rewards, creator earnings, and withdrawable balances must remain distinct accounting concepts.

## Article 19 — Ledger Authority
The ledger is the authoritative source of financial truth. Value-bearing operations must be immutable, idempotent, traceable, reconcilable, attributable, timestamped, and reversible only by compensating entries.

## Article 20 — Payment Verification
Store purchases and external payments must be verified server-side. Client success messages are never sufficient proof.

## Article 21 — Withdrawals
Withdrawals require eligibility checks, identity verification where applicable, sanctions screening, fraud review, threshold validation, holds, and reconciliation.

## Article 22 — Refunds and Chargebacks
Refunds, chargebacks, reversals, failed payouts, and provider disputes create explicit accounting events; original transactions are never erased.

## Article 23 — Separation of Duties
No single role may create value, approve withdrawal, alter evidence, suppress audit records, and reconcile the same transaction without independent controls.

## Article 24 — Fair Creator and Agency Economics
Creator and agency compensation must be versioned and transparent, including fees, taxes, adjustments, holds, and payable balance.

# Part V — Data and Privacy

## Article 25 — Data Minimization
Collect only data required for a defined purpose.

## Article 26 — Data Classification
Every data category must be classified and assigned access, encryption, retention, logging, and incident-response rules.

## Article 27 — Purpose Limitation
Data collected for one purpose shall not be reused for materially different purposes without lawful basis and review.

## Article 28 — Retention
Each data class must define retention period, deletion method, archival policy, legal holds, and owner.

## Article 29 — User Data Rights
Architecture must support lawful access, correction, export, restriction, objection, and deletion requests.

## Article 30 — Production Data Protection
Production personal data shall not be copied casually into development, testing, demonstrations, prompts, or AI training.

## Article 31 — Logging Discipline
Logs shall not contain passwords, access tokens, full payment credentials, private message bodies by default, secret keys, or unnecessary personal data.

# Part VI — Artificial Intelligence

## Article 32 — Accountable AI
Every AI feature must have a documented purpose, owner, version, evaluation criteria, known failure modes, fallback, and monitoring.

## Article 33 — Human Oversight
High-impact AI decisions involving money, account removal, legal risk, or severe sanctions require meaningful human oversight unless a documented exception exists.

## Article 34 — Explainability
Material AI-assisted decisions must provide understandable reason categories and evidence references.

## Article 35 — Bias and Fairness
AI systems must be evaluated across relevant languages, regions, accents, cultures, and user groups. Arabic quality is a first-class requirement.

## Article 36 — Model Safety
Prompts, tools, retrieval sources, and providers must be protected against injection, data leakage, unauthorized tool use, and cross-user exposure.

## Article 37 — AI Data Boundaries
Private content may be processed by AI only under approved purpose, security, retention, provider, and consent rules.

## Article 38 — Model Evaluation
AI releases require tests for accuracy, false positives, false negatives, latency, cost, multilingual quality, adversarial behavior, privacy, and fallback quality.

## Article 39 — AI Versioning
Models, prompts, policies, and retrieval changes must be versioned, observable, and staged where high impact.

# Part VII — Engineering Architecture

## Article 40 — Domain Ownership
Each business rule belongs to one bounded context. Cross-domain direct database access is prohibited.

## Article 41 — Modular Monolith First
Phoenix begins as a modular monolith with strict boundaries. Service extraction requires evidence of scale, availability, release, ownership, regulatory, or performance need.

## Article 42 — API-First Contracts
Interfaces must define authentication, authorization, request, response, errors, idempotency, pagination, rate limits, versioning, and deprecation.

## Article 43 — Event Discipline
Events represent completed facts, use past-tense names, use versioned schemas, minimize sensitive data, and require idempotent consumers.

## Article 44 — Provider Abstraction
RTC, payments, payouts, AI, translation, notifications, email, SMS, storage, and analytics providers must be isolated behind internal adapters.

## Article 45 — Reliability
Critical flows must define timeout, retry, idempotency, circuit breaking, fallback, user-visible failure, alerting, and reconciliation.

## Article 46 — Graceful Degradation
Failure of noncritical systems shall not unnecessarily disable core communication.

## Article 47 — Observability
Production systems must emit structured logs, metrics, traces, health signals, business events, and security signals.

## Article 48 — Performance Budgets
Scalability claims require load models, tests, bottleneck analysis, cost estimates, and capacity assumptions.

## Article 49 — Reversibility
Features and migrations must define rollback, disablement, or compensating strategies.

## Article 50 — Dependency Discipline
Dependencies must be justified, maintained, licensed appropriately, scanned, and replaceable.

# Part VIII — Security

## Article 51 — Zero Trust
No request, device, service, administrator, or network location is trusted solely because it is internal.

## Article 52 — Least Privilege
Users, services, staff, and automation receive only the permissions required for their task and duration.

## Article 53 — Secure Defaults
New accounts, communities, integrations, APIs, and roles default to the safest practical configuration.

## Article 54 — Secrets
Secrets shall be stored only in approved systems and never in repositories, screenshots, logs, examples, clients, or issue trackers.

## Article 55 — Encryption
Restricted and highly sensitive data must be encrypted in transit and at rest with governed keys.

## Article 56 — Abuse Resistance
High-risk operations require appropriate rate limits, anti-automation, anomaly detection, replay protection, idempotency, and velocity limits.

## Article 57 — Supply Chain Security
Builds must use controlled dependencies, verified sources, automated scanning, and protected CI/CD credentials.

## Article 58 — Incident Response
Phoenix shall maintain detection, containment, investigation, recovery, notification, and post-incident learning procedures.

## Article 59 — Security Review
Identity, private content, payments, withdrawals, moderation, AI tools, and administrator access require security review before production.

# Part IX — Delivery and Quality

## Article 60 — Definition of Ready
A feature is ready only when it has an owner, problem statement, user outcome, scope, domain mapping, acceptance criteria, risk notes, analytics plan, and recorded open questions.

## Article 61 — Definition of Done
A feature is complete only when implementation, tests, documentation, telemetry, accessibility, localization, security, deployment, rollback, and operational ownership are complete.

## Article 62 — Testing
Testing shall include appropriate unit, component, integration, contract, authorization, end-to-end, performance, security, and recovery tests.

## Article 63 — No Silent Failure
Errors must be observable, classifiable, and actionable. Ignoring exceptions without justified handling is prohibited.

## Article 64 — Staged Delivery
Risky features shall progress through controlled environments and cohorts.

## Article 65 — Evidence over Confidence
Approvals rely on tests, measurements, threat models, research, and operational evidence rather than persuasive language or seniority.

# Part X — Governance

## Article 66 — Decision Records
Material architecture, security, data, product, and financial decisions must be documented.

## Article 67 — Named Ownership
Every domain, service, data class, dashboard, policy, and high-risk workflow must have an accountable owner.

## Article 68 — Conflict Priority
When priorities conflict, the order is: law, prevention of serious harm, financial and data integrity, constitutional compliance, reliability, user value, maintainability, speed, short-term revenue.

## Article 69 — Exception Process
Temporary exceptions must document the violated rule, reason, risk, owner, controls, expiration date, and remediation plan.

## Article 70 — Amendment
Amendments require written proposal, rationale, impact analysis, review, version increment, changelog, and approval.

# Part XI — AI-Assisted Development

## Article 71 — AI Is a Contributor
AI output must comply with approved documents, architecture, security rules, and tests. Eloquence is not evidence of correctness.

## Article 72 — Context Before Generation
Before coding, an AI agent must read AI context, the relevant domain bible, ADRs, contracts, coding rules, and acceptance criteria.

## Article 73 — No Invented Critical Rules
AI agents must not silently invent financial rates, permissions, legal requirements, retention, sanctions, ownership, API behavior, or data relationships.

## Article 74 — AI Output Contract
AI-generated changes must state changed files, governing requirements, assumptions, security impact, migrations, tests, rollback, and unresolved risks.

## Article 75 — Human Review
AI-generated code affecting finance, identity, security, moderation, privacy, or infrastructure requires qualified human review before production.

# Part XII — Sustainability

## Article 76 — Cost Awareness
High-volume features must estimate compute, storage, network, RTC, AI inference, notifications, observability, and support cost.

## Article 77 — Operational Simplicity
Operationally manageable designs are preferred over theoretically elegant but fragile complexity.

## Article 78 — Responsible Growth
Phoenix shall not enter a market or feature category without adequate safety, support, moderation, payment, localization, legal, and infrastructure readiness.

## Article 79 — Deprecation
Features, APIs, and data fields shall be retired through documented deprecation and migration.

## Article 80 — Learning Culture
Incidents, failed experiments, rejected designs, and complaints shall become documented learning.

# Ratification

Phoenix Constitution v2.0 is the supreme internal standard of the project. All product requirements, architecture decisions, database designs, APIs, interfaces, AI systems, security controls, and operations must be consistent with it.

**Next governing document:** Phoenix Engineering Constitution v1.0  
**Review cadence:** At least once per major platform phase or after a material legal, security, financial, or architectural change.
