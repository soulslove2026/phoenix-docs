# Phoenix Data Platform Bible

**Knowledge Area:** Data Architecture  
**Release:** v0.4.0 — Part 1  
**Status:** Active Foundation  
**Parent:** Phoenix Constitution v2.0  
**Related:** PEH-002 Architecture Principles, PEH-003 Coding Standards

This directory defines how Phoenix owns, stores, secures, evolves, and serves data across transactional databases, cache, search, analytics, event streams, object storage, and future machine-learning systems.

## Read Order

1. [PDP-000 — Data Platform Philosophy](000_Data_Platform_Philosophy.md)
2. [PDP-001 — Domain Data Model](001_Domain_Data_Model.md)
3. [PDP-002 — Entity Standards](002_Entity_Standards.md)
4. [PDP-003 — Relationship Standards](003_Relationship_Standards.md)
5. [PDP-004 — Primary Key Standard](004_Primary_Key_Standard.md)
6. [PDP-005 — UUID and Identifier Standard](005_UUID_and_Identifier_Standard.md)
7. [PDP-006 — Audit Standard](006_Audit_Standard.md)
8. [PDP-007 — Soft Delete and Deletion Standard](007_Soft_Delete_and_Deletion_Standard.md)
9. [PDP-008 — Data Ownership Standard](008_Data_Ownership_Standard.md)

## Non-Negotiable Rules

- every data set has one accountable owner;
- one bounded context is authoritative for each business entity;
- no domain may directly mutate another domain's persistence;
- financial data is ledger-derived and append-oriented;
- personal data requires purpose, classification, retention, and deletion rules;
- cache and search are derived stores, never the unquestioned source of truth;
- production data is not copied casually into non-production environments;
- schema evolution must be versioned, reviewable, and reversible where practical.
