# ID2-014 — CI Evidence Isolation

Generated security evidence must not modify the governed repository workspace.

Required controls:

- repository integrity before evidence generation;
- runner-temporary storage;
- generated-evidence validation;
- post-generation clean-tree verification;
- no generated report inside `FILE_MANIFEST.json`.
