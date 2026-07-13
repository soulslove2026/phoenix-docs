# Current Release

## Phoenix CI Artifact Isolation Hotfix v3.4.2 — Release 1

**Status:** Candidate  
**Production ready:** No

This release fixes the CI ordering defect that generated an SBOM file inside the governed repository before the exact-manifest check.

Repository authority now runs first, generated evidence is stored in `${{ runner.temp }}`, and CI verifies a clean working tree afterward.
