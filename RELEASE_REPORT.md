# Release Report

## Phoenix v3.4.2 CI Artifact Isolation Hotfix

**Status:** Candidate  
**Production ready:** No

## Confirmed failure

The v3.4.1 main CI run generated and uploaded the SBOM, then failed at `Repository constitutional consistency`.

## Root cause

The generated file `phoenix-core-sbom.cdx.json` existed in the repository root but was intentionally absent from the exact source manifest.

## Correction

- run repository consistency before SBOM generation;
- generate the SBOM under `${{ runner.temp }}`;
- validate its JSON;
- upload it from temporary storage;
- enforce a clean repository after generation;
- prevent regression through the dependency-governance policy check.

## Verification required

CI, CodeQL, and both documentation workflows.
