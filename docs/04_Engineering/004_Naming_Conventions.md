# PEH-004 — Naming Conventions

**Document ID:** PEH-004  
**Knowledge ID:** KN-ENG-004  
**Version:** 1.0  
**Status:** Approved Baseline  

## 1. Naming Principle

Names must reveal domain meaning, ownership, and behavior.

Avoid vague names such as:

- `data`;
- `manager`;
- `helper`;
- `utils`;
- `process`;
- `handle`;
- `thing`;
- `misc`.

## 2. Domain Vocabulary

Use the approved glossary consistently.

Examples:

- `VoiceRoom`, not `AudioChannel` in one module and `LiveRoom` in another;
- `CommunityMembership`, not generic `Member`;
- `LedgerEntry`, not `BalanceChange`;
- `WithdrawalRequest`, not `CashOut`;
- `ModerationCase`, not `ReportTicket`.

## 3. General Code Naming

- types and classes: `PascalCase`
- functions and variables: language-standard camel case
- constants: follow language ecosystem conventions
- booleans: use affirmative predicates such as `isActive`, `canWithdraw`, `hasPermission`
- collections: plural names
- commands: imperative names such as `CreateVoiceRoom`
- events: past-tense names such as `VoiceRoomCreated`

## 4. API Naming

- nouns identify resources;
- HTTP methods express actions;
- paths are lowercase and plural;
- avoid verbs in REST paths unless modeling a domain command;
- use stable versioning;
- use consistent identifiers.

Example:

`POST /v1/voice-rooms`  
`POST /v1/withdrawal-requests`  
`GET /v1/communities/{communityId}/members`

## 5. Database Naming

- table names: lowercase snake_case and plural;
- primary key: `id`;
- foreign keys: `<entity>_id`;
- timestamps: `created_at`, `updated_at`;
- soft deletion where approved: `deleted_at`;
- boolean fields: `is_*` or `has_*`;
- indexes: `idx_<table>__<columns>`;
- unique constraints: `uq_<table>__<columns>`;
- check constraints: `ck_<table>__<rule>`.

## 6. Events

Format:

`<Subject><PastTenseAction>`

Examples:

- `UserRegistered`
- `CommunityJoined`
- `GiftSent`
- `PurchaseVerified`
- `WithdrawalApproved`

Events must not be named after consumers.

## 7. DTOs and Contracts

Use intent-revealing names:

- `CreateVoiceRoomRequest`
- `VoiceRoomResponse`
- `ApproveWithdrawalCommand`
- `GiftSentEventV1`

Avoid generic suffixes unless they represent a real contract boundary.

## 8. Branches and Commits

Branch examples:

- `feat/voice-room-seats`
- `fix/payment-idempotency`
- `docs/engineering-handbook`
- `chore/dependency-audit`

Commit examples:

- `feat(voice): add speaker seat reservation`
- `fix(wallet): prevent duplicate ledger posting`
- `docs(engineering): add naming conventions`

## 9. Naming Review

Before introducing a new term:

1. search the glossary;
2. identify the owning domain;
3. verify it does not conflict with an existing concept;
4. add it to the glossary if it becomes canonical.
