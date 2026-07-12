# DPL-014 — Data Lifecycle

**Document ID:** DPL-014  
**Knowledge ID:** KN-DPL-014  
**Version:** 1.0.0  
**Status:** Ratified  
**Owner:** Data Governance  
**Authority:** DPL-010, DPL-011, DPL-012  

## Purpose

Govern data from creation through archival, expiration, anonymization, or deletion.

## Lifecycle Stages

Created → Validated → Active → Inactive → Archived → Expired → Deleted or Anonymized

Not every asset uses every stage.

## Required Lifecycle Policy

Each data asset must define:

- creation trigger;
- validation rules;
- active use;
- retention period;
- archival rules;
- legal or fraud holds;
- deletion or anonymization method;
- downstream propagation;
- verification of completion.

## Retention

Retention must be justified by:

- product need;
- security need;
- financial integrity;
- legal obligation;
- user expectation;
- operational necessity.

Indefinite retention without justification is prohibited.

## Deletion

Deletion may involve:

- hard deletion;
- anonymization;
- tombstoning;
- cryptographic erasure;
- archival separation;
- compensating records.

## Derived Data

Derived stores must receive deletion or anonymization signals and remain rebuildable.

## Financial and Audit Data

Financial and audit records may require longer retention and must not be destroyed in ways that break integrity.

## Impact on Other Domains

Lifecycle affects privacy, search, analytics, AI, backups, caches, exports, and legal compliance.

## Engineering Implementation Notes

- Encode lifecycle state explicitly.
- Automate retention jobs.
- Verify downstream deletion.
- Monitor failed deletion workflows.
- Preserve evidence of lawful completion.
- Document exceptions and holds.

## Architectural Integrity Check

- Is the lifecycle explicit?
- Is retention justified?
- Is deletion technically complete?
- Are derived systems included?
- Are holds governed?
- Does this make Phoenix stronger in ten years?
