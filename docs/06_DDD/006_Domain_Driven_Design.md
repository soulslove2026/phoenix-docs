# Domain-Driven Design and Business Domains

**Document ID:** PNX-DDD-006  
**Version:** 1.0  
**Status:** Master Domain Baseline

## Style
Phoenix begins as a modular monolith with bounded contexts, explicit interfaces, domain events, and separately owned persistence models.

## Core Domains
Identity; Social Graph; Voice; Messaging; Communities; Economy; Payments; Gifts and Assets; Trust and Safety; Notifications; Discovery; Analytics; Administration; AI; Developer Platform.

## Rules
- one domain owns each entity and invariant
- other domains reference stable identifiers, not shared ORM models
- synchronous calls are used only when an immediate answer is required
- asynchronous events communicate completed facts
- consumers are idempotent
- financial and enforcement events retain immutable audit data

## Initial Aggregates
Account, UserProfile, SocialRelationship, VoiceRoom, Conversation, Community, LedgerAccount, Purchase, GiftCatalogItem, ModerationCase, and NotificationPreference.
