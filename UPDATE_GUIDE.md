# Update Guide — v3.2.1 CI Registry Hotfix

This bundle contains updates for both repositories.

## phoenix-core

Copy all contents of the bundle’s `phoenix-core` folder into the existing local `phoenix-core` repository and replace matching files.

Commit:

`fix(ci): use public npm registry and bound dependency install`

Push and monitor GitHub Actions.

## phoenix-docs

Copy all contents of the bundle’s `phoenix-docs` folder into the existing local `phoenix-docs` repository and replace matching files.

Commit:

`docs(ci): record stack migration registry hotfix`

The Stack Migration must remain Candidate until the new CI run succeeds.
