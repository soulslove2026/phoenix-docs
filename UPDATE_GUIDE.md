# Update Guide

This bundle contains two repository overlays.

## phoenix-docs
Copy the contents of `phoenix-docs` into the existing documentation repository.

Commit: `docs(core): add production stack migration release 1`

## phoenix-core
Copy the contents of `phoenix-core` into the existing core repository and replace matching files. Delete obsolete `.mjs` source/test files if your file manager does not remove them automatically.

Commit: `refactor(core): migrate Slice 0 to ratified production stack`

Push `phoenix-core` and verify GitHub Actions before beginning Identity Slice 1.
