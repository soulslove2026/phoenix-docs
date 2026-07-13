---
Document ID: CORE-006
Category: Core Bootstrap
Version: 3.0.0
Status: Ratified
Maturity: Level 2 — Bootstrap Specification
Owner: Phoenix Core Engineering
Authority: Phoenix Core Bootstrap
Depends On: IMP-008; IMP-009; PEF/PES standards
Last Updated: 2026-07-13
---
# CORE-006 — CI and Quality Automation

The CI workflow checks out source, selects the runtime, validates repository metadata, runs checks and tests, and builds the container.

## Required Checks

- repository check
- automated tests
- container build

`main` must remain releasable. Failed or flaky checks are defects. Pipeline permissions remain minimal. A passing GitHub Actions run is required to mark Slice 0 Verified.
