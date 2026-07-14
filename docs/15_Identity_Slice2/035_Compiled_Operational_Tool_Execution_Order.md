# ID2-035 — Compiled Operational Tool Execution Order

Any CI or assurance command that executes a file under `dist/` must run only after the production build succeeds.

Controls:

- build precedes `incident:snapshot`;
- CI proves the compiled file exists;
- compiled production execution remains mandatory;
- dependency governance enforces CI and assurance ordering;
- missing output fails closed.

Status: Candidate pending GitHub verification.
