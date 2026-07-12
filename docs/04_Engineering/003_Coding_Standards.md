# PEH-003 — Coding Standards

**Document ID:** PEH-003  
**Knowledge ID:** KN-ENG-003  
**Version:** 1.0  
**Status:** Approved Baseline  

## 1. Purpose

These standards keep Phoenix code readable, testable, secure, and consistent across human and AI contributors.

## 2. Universal Rules

- use explicit types at public boundaries;
- keep functions focused on one purpose;
- prefer composition over inheritance;
- avoid global mutable state;
- make dependencies injectable;
- keep business logic outside frameworks;
- handle errors deliberately;
- avoid hidden side effects;
- document non-obvious tradeoffs, not obvious syntax;
- delete dead code rather than commenting it out.

## 3. File and Function Size

No absolute line limit replaces judgment, but large units are a warning.

Review is required when:

- a function exceeds roughly 40 logical lines;
- a class has multiple unrelated responsibilities;
- a UI component becomes difficult to test in isolation;
- a file mixes domain, persistence, transport, and presentation concerns.

## 4. Error Handling

Errors must be:

- typed or categorized;
- mapped to stable public error codes;
- logged safely;
- observable;
- translated into actionable user feedback where appropriate.

Prohibited:

- empty catch blocks;
- returning success after partial failure;
- exposing stack traces or sensitive internals;
- using generic exceptions for expected domain outcomes.

## 5. Nullability and Defaults

Nullability must express real absence.

Do not use empty strings, zero, or magic values to represent unknown state unless the domain explicitly defines them.

## 6. Security Rules

- never embed secrets;
- validate all untrusted input;
- authorize on the server;
- use parameterized persistence APIs;
- minimize sensitive logs;
- verify external callbacks;
- enforce idempotency for value-bearing operations.

## 7. Comments and Documentation

Write comments for:

- why a non-obvious decision exists;
- constraints;
- security assumptions;
- algorithmic tradeoffs;
- temporary exceptions with expiry.

Do not narrate simple code.

## 8. Dependency Rules

A dependency must have:

- clear purpose;
- acceptable license;
- maintenance activity;
- security review;
- replacement strategy;
- bounded use behind internal interfaces when critical.

## 9. Testing Expectations

Every business rule requires unit coverage.

Every persistence or provider integration requires integration coverage.

Every protected endpoint requires authorization tests.

Every financial workflow requires idempotency, refund, failure, and reconciliation tests.

## 10. Code Review Questions

- Is the intent obvious?
- Is the ownership correct?
- Are failure paths handled?
- Are permissions correct?
- Are logs safe?
- Are tests meaningful?
- Is the change reversible?
- Does the code duplicate an existing capability?
