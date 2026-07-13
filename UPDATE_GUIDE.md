# Update Guide — v3.3.2

This bundle contains complete overlays for both repositories.

## 1. phoenix-core

Copy all contents of `phoenix-core/` into the existing local repository and replace matching files.

Commit:

`fix(identity): reconcile and harden Identity Slice 1`

Push first and verify the `CI` workflow.

## 2. phoenix-docs

Copy all contents of `phoenix-docs/` into the existing local repository and replace matching files.

Commit:

`docs(governance): reconcile Identity Slice 1 and add integrity gates`

Push and verify the `Documentation Integrity` workflow.

## Required result

Do not mark v3.3.2 Verified until both workflows are green. The next documentation-only release will record exact commit and workflow evidence.
