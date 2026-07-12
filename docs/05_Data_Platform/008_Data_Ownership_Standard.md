# PDP-008 — Data Ownership Standard

**Document ID:** PDP-008  
**Knowledge ID:** KN-DATA-008  
**Version:** 1.0  
**Status:** Approved Baseline

## 1. Ownership Model

Each data set has:

- business owner;
- technical owner;
- authoritative domain;
- data steward;
- security classification;
- retention owner.

## 2. Owner Responsibilities

The owner defines:

- meaning;
- quality;
- allowed use;
- access;
- lifecycle;
- publication contracts;
- incident response;
- migration.

## 3. Access

Access is granted through least privilege and approved interfaces.

## 4. Shared Data

Shared data must be published as:

- API contract;
- event contract;
- governed read model;
- analytics data product.

A shared table without ownership is prohibited.

## 5. Quality

Owners must define quality expectations such as:

- completeness;
- uniqueness;
- freshness;
- validity;
- consistency;
- timeliness.

## 6. Ownership Transfer

Ownership transfer requires:

- documented scope;
- contract review;
- migration plan;
- support handover;
- updated index and ADR if architectural.

## 7. AI Implementation Context

AI agents must state the owner of every new table, event, index, or derived model.
