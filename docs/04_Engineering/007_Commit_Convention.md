# PEH-007 — Commit Convention

**Document ID:** PEH-007  
**Knowledge ID:** KN-ENG-007  
**Version:** 1.0  
**Status:** Approved Baseline

## Format

Phoenix follows Conventional Commits:

```text
<type>(<scope>): <summary>
```

## Types

`feat`, `fix`, `docs`, `refactor`, `test`, `perf`, `build`, `ci`, `chore`, `revert`.

## Examples

```text
feat(voice): add speaker seat reservation
fix(wallet): prevent duplicate ledger posting
docs(engineering): add review standards
```

## Rules

- use imperative mood;
- keep the summary concise;
- do not end with a period;
- describe the outcome, not merely the file operation;
- declare breaking changes explicitly.

## Prohibited Messages

- `update`
- `changes`
- `fix stuff`
- `final`
- `new file`
