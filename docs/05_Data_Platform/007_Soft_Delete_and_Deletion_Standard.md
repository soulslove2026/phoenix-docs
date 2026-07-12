# PDP-007 — Soft Delete and Deletion Standard

**Document ID:** PDP-007  
**Knowledge ID:** KN-DATA-007  
**Version:** 1.0  
**Status:** Approved Baseline

## 1. Principle

Soft deletion is not a universal default. It is a domain decision.

## 2. Use Soft Delete When

- restoration is a product requirement;
- references must remain temporarily resolvable;
- legal or audit obligations require history;
- staged deletion is necessary.

## 3. Avoid Soft Delete When

- the data can be safely recreated;
- privacy requires prompt erasure;
- hidden accumulation creates operational risk;
- archive tables or immutable history are more appropriate.

## 4. Required Fields

Where soft delete is approved:

- `deleted_at`
- `deleted_by` when applicable
- `deletion_reason`
- lifecycle status if behavior differs from deletion marker

## 5. Queries

Repositories must explicitly define whether deleted records are included. Hidden global filters must not conceal critical behavior.

## 6. User Deletion

Account deletion may involve:

- access revocation;
- content handling;
- anonymization;
- financial retention;
- fraud holds;
- delayed purge;
- downstream deletion events.

## 7. Hard Deletion

Hard deletion requires authorization, audit, dependency handling, and verification.

## 8. AI Implementation Context

AI agents must not add `deleted_at` to every table automatically. They must follow domain lifecycle requirements.
