# PDP-000 — Data Platform Philosophy

**Document ID:** PDP-000  
**Knowledge ID:** KN-DATA-000  
**Version:** 1.0  
**Status:** Approved Baseline  
**Owner:** Data Architecture

## 1. Purpose

This document defines the philosophy governing every Phoenix data system.

Phoenix does not treat data as a collection of tables. Data is a governed product with ownership, lifecycle, quality, security, cost, and operational responsibility.

## 2. Data Platform Scope

The Phoenix Data Platform includes:

- PostgreSQL transactional stores;
- Redis cache and ephemeral state;
- event streams and queues;
- search indexes;
- object storage;
- analytics warehouse;
- time-series telemetry;
- vector retrieval;
- feature store;
- model registry metadata;
- backup and archive systems.

## 3. Core Principles

### 3.1 Ownership Before Storage

Every data set must have an owning domain and accountable team or role before a storage technology is chosen.

### 3.2 Source of Truth Is Explicit

For each business fact, documentation must identify the authoritative source.

Examples:

- ledger entries are authoritative for financial balances;
- identity domain is authoritative for account state;
- analytics warehouse is not authoritative for operational decisions;
- search indexes are derived and rebuildable.

### 3.3 Purpose Before Collection

No field is collected without a documented purpose.

### 3.4 Minimize Duplication

Duplication is allowed only when it serves performance, analytics, resilience, or integration needs and has a defined synchronization model.

### 3.5 Derived Stores Are Rebuildable

Caches, indexes, recommendation features, and read models should be reproducible from authoritative data or durable event history where practical.

### 3.6 Append-Oriented for Critical History

Financial, moderation, security, and audit history should prefer append-only or compensating records over destructive mutation.

### 3.7 Schema Evolution Is Continuous

Schema changes are expected. Every change must preserve compatibility or include a controlled migration plan.

### 3.8 Operational Simplicity Matters

A new database technology must solve a proven problem and justify operational cost.

## 4. Data Decision Test

Before introducing a data store, ask:

1. What problem cannot the current platform solve?
2. Which domain owns the data?
3. Is the data authoritative or derived?
4. What consistency is required?
5. What is the access pattern?
6. What is the expected volume and growth?
7. What are the privacy and retention obligations?
8. How is the data backed up and restored?
9. How is the store monitored?
10. How can it be replaced?

## 5. Rejected Default

Phoenix rejects polyglot persistence by fashion. PostgreSQL remains the default until evidence proves a different store is necessary.

## 6. AI Implementation Context

AI coding agents must not invent storage technology, retention periods, or consistency models. They must reference the relevant domain and ADR.
