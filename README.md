# Phoenix Engineering Handbook

**Current repository version:** `2.3.0-product-r1`  
**Current milestone:** Phoenix Product Foundation — Release 1  
**Next milestone:** Phoenix Implementation Planning v2.4.0 — Release 1

Phoenix is an AI-native social platform and platform ecosystem. This repository is the source of truth for its governance, data, architecture, engineering standards, security foundations, and release history.

## Start Here

- [Master Index](MASTER_INDEX.md)
- [Document Index](DOCUMENT_INDEX.md)
- [Engineering Roadmap](ENGINEERING_ROADMAP.md)
- [Phoenix Engineering Framework](ENGINEERING_FRAMEWORK.md)
- [Architecture Foundation](docs/07_Architecture/000_READ_FIRST.md)
- [Security Foundation](docs/08_Security/000_READ_FIRST.md)
- [Product Foundation](docs/09_Product/000_READ_FIRST.md)
- [Canonical Data Platform](docs/04_Data_Platform/000_READ_FIRST.md)
- [Repository Integrity Report](REPOSITORY_INTEGRITY_REPORT.md)

## Current Status

- Governance: foundational releases present; future maturity review remains.
- Data Platform: DPL-010 through DPL-019 canonical and reconciled.
- Engineering Framework: foundation standards ratified.
- Architecture Foundation Release 1: ARC-001 through ARC-005 ratified at Level 2.
- Architecture Foundation Release 2: ARC-006 through ARC-010 ratified at Level 2.
- Security Foundation Release 1: SEC-001 through SEC-007 ratified at Level 2.

## Architecture Position

Phoenix uses bounded-context modularity, explicit data ownership, governed contracts, risk-weighted isolation, and evidence-based service extraction. Logical boundaries are authoritative even when multiple modules initially share a deployment unit.

## Canonical Path Notice

`docs/04_Data_Platform/` is authoritative. `docs/05_Data_Platform/` remains a legacy path pending lossless historical cleanup.
