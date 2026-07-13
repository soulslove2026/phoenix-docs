# Phoenix Data Platform — Canonical Entry Point

**Document ID:** DPL-000  
**Category:** Data Platform  
**Version:** 1.1.0  
**Status:** Ratified  
**Canonical Path:** `docs/04_Data_Platform/`  
**Owner:** Data Architecture and Data Governance  

## Purpose

This directory is the authoritative location for Phoenix Data Platform specifications. It defines how Phoenix identifies, owns, classifies, versions, exchanges, audits, and preserves data across product domains.

## Canonical Document Sequence

1. DPL-010 — Data Philosophy
2. DPL-011 — Data Classification
3. DPL-012 — Data Ownership
4. DPL-013 — Global Identifiers
5. DPL-014 — Data Lifecycle
6. DPL-015 — Data Consistency Model
7. DPL-016 — Data Versioning
8. DPL-017 — Audit Strategy
9. DPL-018 — Data Contracts
10. DPL-019 — Event Modeling

## Path Reconciliation

`docs/05_Data_Platform/` is a legacy path retained temporarily to avoid accidental loss of historical material. It is not authoritative. New references, designs, reviews, and implementations must use `docs/04_Data_Platform/`.

## Implementation Gate

A Phoenix service may not introduce a new persistent data asset until the asset has:

- an owning bounded context;
- a classification and retention class;
- a stable identifier strategy;
- an explicit consistency requirement;
- a versioning and migration plan;
- an audit decision;
- a governed data contract when data crosses a boundary.

## Current Maturity

DPL-010 through DPL-019 are classified as **Level 2 — Engineering Specification** or higher. Production evidence is required before any document may be promoted to Level 5.
