# PDR-002 — Operational Simplicity Policy

## Purpose

Reduce operator error, secret exposure, waiting, and repeated manual command sequences while preserving fail-closed controls.

## Mandatory rules

1. A repeated multi-step operation must become a versioned repository tool.
2. Routine operator procedures should require one local command and at most one remote command.
3. Secrets and bearer tokens must not be copied through chat, logs, screenshots, or the clipboard.
4. Tools must support preflight validation, bounded execution, automatic rollback, sanitized output, and non-zero failure exit codes.
5. Time-bounded controls must close automatically and prove the closed state.
6. Destructive or state-changing tools require explicit confirmation and an accountable owner.
7. Every operational tool must document inputs, outputs, security impact, rollback, and residual risk.
8. A failed exercise must be recorded as learning evidence without being promoted to a qualifying success.

## Automation target

The next Phoenix Core operational release should provide a governed Passkey assurance operator that performs preflight, session preparation, window control, browser handoff, evidence validation, cleanup, and final smoke checks without manual token transfer.

## Prohibited pattern

Long ad-hoc scripts pasted directly into production-like shells are not the default delivery mechanism. Emergency use requires a documented exception and post-event conversion into a governed tool.
