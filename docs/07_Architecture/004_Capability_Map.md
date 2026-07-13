# ARC-004 — Capability Map

> **Document ID:** ARC-004
> **Knowledge ID:** PHX-ARCH-004
> **Category:** Architecture Foundation
> **Version:** 2.0.0
> **Status:** Ratified Foundation Specification
> **Maturity:** Level 2 — Specification
> **Owner:** Phoenix Architecture Council
> **Authority:** Phoenix Engineering Framework and Data Platform
> **Depends on:** PEF-001, PES-001, PES-002, DPL-010 through DPL-019
> **Review trigger:** Major domain change, deployment-model change, regulatory change, or material scale assumption change


## Executive Summary

The Capability Map organizes what Phoenix must be able to do independently of current screens, teams, or technologies. Capabilities are grouped into experience, trust/value, intelligence, platform, and operational layers. This map supports roadmap planning, ownership, architecture reviews, build-versus-buy decisions, and extraction priorities.

## Capability Classification

- **Core differentiating:** central to Phoenix product identity and should remain strategically controlled.
- **Core enabling:** essential platform capability that supports many products.
- **Commodity:** preferably acquired or implemented with standard technology unless differentiation is justified.
- **Regulated/high-risk:** requires stronger controls regardless of differentiation.

## Level 1 Capability Map

| Domain | Level 1 capability | Strategic class | Primary context |
|---|---|---|---|
| Identity | Identity and account security | Core enabling / high-risk | Identity & Access |
| Social | Social connection and relationship control | Core differentiating | Social Graph |
| Communication | Messaging | Core differentiating | Messaging |
| Communication | Live voice and rooms | Core differentiating | Live Rooms & Voice |
| Content | Content creation and media lifecycle | Core differentiating | Content & Media |
| Discovery | Search, feed, ranking, recommendation | Core differentiating | Discovery & Ranking |
| Trust | Reporting, moderation, enforcement, appeals | Core enabling / high-risk | Trust & Moderation |
| Economy | Wallet, gifts, settlement, withdrawals | Core differentiating / regulated | Economy & Ledger |
| Commerce | Products, receipts, subscriptions, entitlements | Core enabling / high-risk | Entitlements & Commerce |
| Intelligence | Model operations and governed inference | Core enabling | AI Platform |
| Data | Analytics, lineage, metrics, data products | Core enabling | Data & Analytics |
| Platform | Notifications and communication delivery | Core enabling | Notifications |
| Platform | Developer APIs and integrations | Future differentiating | Developer & Integration |
| Compliance | Audit, evidence, export, retention controls | High-risk | Audit & Compliance |
| Operations | Administration and operational control | Core enabling / high-risk | Administration |

## Level 2 Capability Inventory

### Identity and Account Security

- Registration and verification
- Authentication and session management
- Credential and device lifecycle
- Account recovery
- Risk-based challenge
- Authorization anchors and role assignment
- Consent and age/region policy hooks
- Account restriction and closure coordination

### Profile and Presence

- Public and private profile attributes
- Avatar and identity presentation
- Preference and privacy settings
- Presence and last-active policy
- Localization and accessibility preferences
- Profile completion and eligibility state

### Social Connection

- Follow/friend relationships
- Blocks, mutes, and interaction controls
- Relationship requests and lifecycle
- Contact discovery under consent
- Social graph queries and privacy filtering
- Community and group relationships in future phases

### Messaging

- One-to-one and group conversations
- Membership and role management
- Message submission and ordering
- Delivery and read state
- Attachments and media references
- Retention, deletion, and legal restriction
- Abuse controls and rate limits
- Offline synchronization

### Live Voice and Rooms

- Room creation and lifecycle
- Discovery eligibility
- Participant admission and roles
- Stage/speaker management
- Media-session credentialing
- Moderation controls
- Quality and capacity monitoring
- Live gifting integration
- Recording only under explicit policy

### Content and Media

- Post, comment, and reaction lifecycle
- Media upload, validation, processing, and delivery
- Draft, publication, edit, and deletion
- Audience and visibility controls
- Takedown and restriction state
- Content provenance and integrity metadata

### Discovery and Ranking

- Candidate generation
- Feed assembly
- Search indexing and retrieval
- Ranking and recommendation
- Personalization and exploration
- Experiment assignment
- Safety and eligibility filtering
- Explanation and transparency support
- Cold-start and fallback strategies

### Trust and Safety

- User and system reports
- Evidence collection and chain of custody
- Policy management and versioning
- Case management
- Automated and human review
- Enforcement and sanction lifecycle
- Appeals and reversals
- Reputation and safety signals
- Emergency and legal escalation

### Economy and Ledger

- Wallet/account creation
- Balance and ledger accounting
- Gift pricing and transfer
- Purchase funding and receipt linkage
- Withdrawal request and approval
- Fees, commissions, taxes, and settlement
- Limits, fraud checks, holds, and sanctions
- Refunds and reversals
- Reconciliation and financial reporting

### Commerce and Entitlements

- Product and offer configuration
- App-store and payment receipt verification
- Subscription lifecycle
- Entitlement grant and revocation
- Promotional rights
- Regional availability and pricing metadata

### AI Platform

- Model and prompt registry
- Inference routing
- Model/version rollout
- Offline and online evaluation
- Safety filters and policy controls
- Human review integration
- Feature and embedding governance
- Drift, quality, latency, and cost monitoring
- Fallback and kill switch

### Data and Analytics

- Event and contract governance
- Analytical ingestion
- Transformation and lineage
- Data quality and observability
- Metrics and semantic definitions
- Product analytics
- Experiment analysis
- Privacy-aware data access
- Retention, deletion, and legal hold propagation
- AI training and evaluation datasets under policy

### Notifications

- Notification request intake
- Preference and consent enforcement
- Channel selection
- Template and localization
- Scheduling and deduplication
- Delivery, retry, and suppression
- Provider abstraction and delivery analytics

### Developer and Integration

- API credentials and application registration
- External API gateway
- Webhooks and delivery management
- Quotas and abuse controls
- Sandbox and test environments
- Partner permissions and data contracts

### Administration and Compliance

- Restricted operational consoles
- Approval workflows
- Role and permission administration
- Audit search and export
- Legal requests and holds
- Policy-driven support actions
- Change and incident control

## Capability-to-Context Matrix

| Capability | Owner | Key dependencies | Read model consumers |
|---|---|---|---|
| Account security | Identity | Trust signals, Audit | All experience domains |
| Relationship eligibility | Social Graph | Identity, Trust | Messaging, Live, Discovery |
| Message delivery | Messaging | Identity, Social Graph, Notifications | Clients, Trust, Analytics |
| Live participation | Live | Identity, Social Graph, Trust | Clients, Discovery, Analytics |
| Content publication | Content | Identity, Trust, Media | Discovery, Search, Analytics |
| Ranking | Discovery | Content, Graph, Trust, AI | Experience Edge |
| Enforcement | Trust | Identity, Signals, AI, Audit | All controlled domains |
| Gift transfer | Economy | Identity, Trust, Commerce | Live, Notifications, Analytics |
| Entitlement | Commerce | Economy, external providers | Experience Edge |
| Governed inference | AI Platform | Data contracts, policy | Discovery, Trust, Support |

## Capability Maturity Priorities

| Priority | Capabilities | Required before core implementation? |
|---|---|---|
| P0 | Identity, authorization, audit, data contracts, secrets | Yes |
| P0 | Economy ledger invariants if economy is in first product | Yes |
| P0 | Trust enforcement boundaries | Yes |
| P1 | Profile, social graph, messaging, content | For corresponding MVP scope |
| P1 | Observability, deployment, incident ownership | Yes for production |
| P2 | Discovery optimization, live scale, developer platform | After baseline journeys |
| P2 | Advanced AI personalization | After evaluation and safety foundations |

## Build, Buy, or Partner Guidance

| Capability | Default stance |
|---|---|
| Core domain models and policy | Build and control |
| Authentication primitives | Use proven standards/providers where suitable; retain account authority |
| Media transcoding and CDN | Commodity/provider-backed with abstraction where justified |
| Payment acquisition | Partner with regulated providers; retain internal ledger truth |
| Push/email/SMS delivery | Provider-backed behind notification contracts |
| Search engine | Standard technology; Phoenix owns indexes, relevance policy, and contracts |
| Model hosting | Hybrid; Phoenix owns governance, routing, evaluation, and decision policy |
| Analytics storage | Standard platforms under Phoenix contracts and privacy controls |

## Security and Privacy Overlay

Every capability is assigned data classification, threat model, authorization model, audit requirement, retention rule, and operational owner before implementation. High-risk capabilities cannot rely solely on client enforcement.

## AI Overlay

Capabilities using AI must identify whether AI is assistive, ranking, generative, classificatory, or decision-support. The domain owner defines maximum authority and fallback behavior.

## Operational Overlay

Capabilities receive service tiers only after product criticality and dependencies are understood. Capability ownership persists even when implementation uses shared infrastructure.

## Anti-Patterns

- Organizing the roadmap only by screens or technologies.
- Treating a purchased vendor as the owner of Phoenix policy or data truth.
- Building duplicate capability implementations in multiple contexts.
- Assigning “platform” ownership without customers, contracts, or service expectations.
- Introducing AI without evaluation, fallback, or kill-switch capability.

## Future Evolution

The capability map will become the basis for product scope, team topology, architecture decision records, and service catalog entries. Later releases will assign quantitative targets and implementation sequencing.

## Architectural Integrity Check

- [x] Capabilities are technology-independent.
- [x] Ownership aligns with bounded contexts.
- [x] Critical and regulated capabilities are visible.
- [x] Build/buy guidance protects strategic truth.
- [ ] MVP product scope has not yet selected the exact capability subset.

## References

- ARC-001 Architecture Vision
- ARC-002 Bounded Contexts
- ARC-003 Domain Map
- PEF-001 Engineering Principles
- PES-002 Architecture Standard
