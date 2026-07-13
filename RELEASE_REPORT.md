# Release Report — v3.3.2

## Decision

The prior Identity Slice 1 implementation remains verified at v3.3.1. The v3.3.2 reconciliation and hardening changes are Candidate until new CI evidence is available.

## Reconciliation result

The release aligns repository metadata, release authority, indexes, roadmap, traceability, governance, manifests, and checksums. Automated checks now fail when these sources drift.

## Engineering corrections

The release fixes explicit unit-test discovery, malformed email acceptance, duplicate-account race handling, hard-coded session lifetime, absent migration history, stale `updated_at`, and missing authentication throttling baseline.

## Deferred production controls

Email ownership verification, recovery, MFA/passkeys, breached-password screening, distributed throttling, device/session management, risk signals, and operational alerting remain required in Identity Slice 2 or later. Their deferral is explicit and blocks production readiness.
