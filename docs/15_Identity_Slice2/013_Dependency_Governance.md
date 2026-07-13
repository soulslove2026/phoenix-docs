# ID2-013 — Dependency and Workflow Governance

Routine dependency upgrades are handled through reviewed maintenance releases. Dependabot remains enabled for vulnerability alerts, security updates, dependency graph evidence, and pull-request dependency review.

Every accepted update must pass audits, SBOM review, license review, constitutional integrity, tests, production build, Docker build, CodeQL, and documentation integrity.

Only explicitly reviewed PURLs may bypass incomplete license metadata. Vulnerability checks remain mandatory.
