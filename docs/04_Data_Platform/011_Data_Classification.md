# DPL-011 — Data Classification

**Document ID:** DPL-011  
**Knowledge ID:** KN-DPL-011  
**Category:** Data Platform  
**Version:** 1.0.0  
**Status:** Ratified  
**Owner:** Data Governance  
**Authority:** DPL-010 Data Philosophy, Phoenix Constitution  
**Depends On:** DPL-010  
**Required By:** Security, AI, Analytics, Search, Compliance, Operations  
**Review Trigger:** New legal regime, new sensitive capability, new AI use case  

## Purpose

Define a complete classification system for every data asset in Phoenix.

No data may be created, stored, processed, indexed, exported, or used by AI without an explicit classification.

## Classification Dimensions

Every data asset must be classified across all dimensions below.

### 1. Business Category

- Identity Data
- Social Data
- Communication Data
- Financial Data
- Moderation Data
- AI Data
- Analytics Data
- Security Data
- Operational Data
- Configuration Data

### 2. Sensitivity

- Public
- Internal
- Confidential
- Restricted
- Highly Restricted

### 3. Origin

- User Generated
- System Generated
- AI Generated
- Third Party
- Imported
- Derived

### 4. Retention Class

- Permanent
- Long Term
- Medium Term
- Temporary
- Ephemeral

### 5. Mutability

- Immutable
- Append Only
- Mutable
- Derived Only

### 6. Processing Purpose

- Transactional
- Analytical
- Search
- Cache
- Audit
- AI Training
- AI Inference
- Security Detection
- Compliance

## Mandatory Classification Attributes

Each classified asset must define:

- owner;
- purpose;
- sensitivity;
- retention;
- encryption;
- access policy;
- audit policy;
- deletion policy;
- backup policy;
- export policy;
- AI usage policy;
- lawful or business basis.

## Default Rule

Unclassified data is treated as Highly Restricted until formally classified.

## AI Usage Rules

Data may not be used for model training or external model inference unless classification explicitly permits it.

## Impact on Other Domains

- Security uses classification to determine controls.
- AI uses classification to determine allowed processing.
- Analytics uses classification to determine aggregation and masking.
- Search uses classification to determine index eligibility.
- Compliance uses classification to determine retention and deletion.
- Infrastructure uses classification to determine encryption and isolation.

## Engineering Implementation Notes

- Store classifications in a governed catalog.
- Validate classifications in schema review.
- Enforce policy through application and infrastructure controls.
- Monitor for unclassified fields and assets.
- Include classification in data contracts.

## Architectural Integrity Check

- Is the data classified across every dimension?
- Is the owner known?
- Is AI usage explicit?
- Is retention justified?
- Are access and audit policies defined?
- Does this classification make Phoenix stronger in ten years?
