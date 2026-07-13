# Phoenix Implementation Planning

This directory translates the ratified Governance, Data Platform, Engineering Framework, Architecture, Security, and Product foundations into an executable delivery model.

## Authority

This directory is authoritative for delivery topology, repositories, epics, vertical slices, sequencing, ownership, environments, quality gates, testing, CI/CD, rollout, rollback, and implementation evidence.

## Specifications

- [IMP-001 — Implementation Strategy](001_Implementation_Strategy.md)
- [IMP-002 — Repository and Codebase Topology](002_Repository_and_Codebase_Topology.md)
- [IMP-003 — Delivery Epics and Workstreams](003_Delivery_Epics_and_Workstreams.md)
- [IMP-004 — Vertical Slice Plan](004_Vertical_Slice_Plan.md)
- [IMP-005 — Sequencing and Dependency Model](005_Sequencing_and_Dependency_Model.md)
- [IMP-006 — Ownership and Team Topology](006_Ownership_and_Team_Topology.md)
- [IMP-007 — Environments and Configuration Strategy](007_Environments_and_Configuration_Strategy.md)
- [IMP-008 — Quality Engineering and Test Strategy](008_Quality_Engineering_and_Test_Strategy.md)
- [IMP-009 — CI/CD and Release Governance](009_CI_CD_and_Release_Governance.md)
- [IMP-010 — Rollout, Rollback, and Operational Readiness](010_Rollout_Rollback_and_Operational_Readiness.md)

## Delivery Position

Phoenix will be implemented through small, end-to-end vertical slices that prove user value, architecture boundaries, security, data contracts, operability, and rollback together.

Infrastructure and frameworks are built only to support an approved slice or a demonstrable platform need. The plan rejects both feature-first shortcuts and infrastructure-first overbuilding.

## Implementation Gate

A delivery slice may enter implementation only when it has:

- a defined user and operational outcome;
- owning bounded context and accountable team;
- approved contracts and source of truth;
- security and abuse controls;
- measurable acceptance criteria;
- test strategy and observability;
- rollout and rollback design;
- documented dependencies and risks.
