# PDR-003 — Frontend Entry and Product Delivery Plan

## Decision

Phoenix frontend delivery may begin before all Phase C external-assurance records are complete. External assurance continues in parallel and still blocks production authorization.

## Required entry decision

Before implementation, Phoenix must ratify the frontend technology, repository ownership, design-system boundary, secure session model, API contract generation approach, localization strategy, accessibility baseline, and supported platforms. No technology is silently ratified by this document.

## Proposed release sequence

| Release | Outcome |
|---|---|
| `phoenix-app 0.1.0` | Frontend Foundation and Product Shell |
| `phoenix-app 0.2.0` | Identity Experience end-to-end |
| `phoenix-app 0.3.0` | Profile and Onboarding |
| `phoenix-app 0.4.0` | Social Graph and Contact Controls |
| `phoenix-app 0.5.0` | Direct Messaging |
| `phoenix-app 0.6.0` | Communities |
| `phoenix-app 0.7.0` | Voice Foundation |

## Foundation requirements

- original Phoenix visual language;
- Arabic RTL and English LTR from the first release;
- accessibility, light/dark appearance, loading, error, empty, and offline states;
- typed API integration and environment separation;
- secure session storage and explicit logout/session management;
- tests, CI, observability, and rollback;
- no copying of protected competitor assets or proprietary interaction designs.

## First visible vertical slice

The first end-to-end product slice is account registration, verification, login, current-user retrieval, session management, and logout against governed staging.

## Boundary

Frontend construction is not production authorization. Any public launch remains blocked by applicable identity, safety, privacy, legal, operational, and penetration-assurance gates.
