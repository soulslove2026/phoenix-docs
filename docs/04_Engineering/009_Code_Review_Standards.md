# PEH-009 — Code Review Standards

**Document ID:** PEH-009  
**Knowledge ID:** KN-ENG-009  
**Version:** 1.0  
**Status:** Approved Baseline

## Review Order

1. user and business correctness;
2. security and permissions;
3. data and financial integrity;
4. architecture boundaries;
5. failure and recovery;
6. tests;
7. readability;
8. performance;
9. style.

## Core Questions

- Does the change solve the specified problem?
- Is the owning domain correct?
- Are permissions enforced server-side?
- Can retries duplicate an effect?
- Is sensitive data exposed?
- What happens when dependencies fail?
- Are logs and metrics sufficient?
- Is the change reversible?

## Review Language

Use `BLOCKING:`, `QUESTION:`, `SUGGESTION:`, and `NIT:` consistently.

Approval means accepting shared responsibility for the change.
