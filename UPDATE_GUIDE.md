# Update Guide — v1.7.0 Reconciliation R1

## Safe Overlay Procedure

1. Extract the ZIP file.
2. Open the `phoenix-docs` folder inside the extracted package.
3. Copy everything inside that folder into the root of your local `phoenix-docs` repository.
4. Choose **Replace files in the destination** when prompted.
5. Do **not** delete unrelated repository files.
6. Keep `docs/05_Data_Platform/` for now; the included deprecation notice makes `docs/04_Data_Platform/` authoritative.
7. Review changes in GitHub Desktop.
8. Commit and push to `main`.

## Commit Message

`docs(repo): reconcile data platform framework indexes and release metadata`

## Commit Description

`Completes DPL-015 through DPL-019, expands the Phoenix Engineering Framework, reconciles canonical paths, restores release records, and synchronizes repository indexes, roadmap, traceability, and version metadata.`

## Post-push Check

Confirm that:

- README shows `1.7.0-reconciliation-r1`;
- DPL-015 through DPL-019 contain full specifications;
- `docs/04_Data_Platform/000_READ_FIRST.md` exists;
- Engineering Framework files contain expanded standards;
- release records for 1.5.0, 1.6.0, and 1.7.0 exist;
- Architecture Foundation is listed as the next milestone.
