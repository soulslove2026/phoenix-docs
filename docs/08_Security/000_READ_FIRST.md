# Phoenix Security Foundation

The Phoenix Security Foundation defines the minimum security architecture required before material implementation of `phoenix-core`.

## Authority

This directory is authoritative for security principles, threat modeling, identity, authentication, authorization, secrets, key management, data protection, security audit, incident readiness, and AI-security boundaries.

## Specifications

- [SEC-001 — Security Vision and Principles](001_Security_Vision_and_Principles.md)
- [SEC-002 — Threat Model](002_Threat_Model.md)
- [SEC-003 — Identity and Authentication](003_Identity_and_Authentication.md)
- [SEC-004 — Authorization and Access Control](004_Authorization_and_Access_Control.md)
- [SEC-005 — Secrets and Key Management](005_Secrets_and_Key_Management.md)
- [SEC-006 — Data Protection and Privacy Security](006_Data_Protection_and_Privacy_Security.md)
- [SEC-007 — Security Audit and Incident Readiness](007_Security_Audit_and_Incident_Readiness.md)

## Foundation Position

Phoenix applies defense in depth, least privilege, explicit trust boundaries, secure defaults, auditable high-risk actions, privacy-aware data minimization, and risk-weighted controls.

Security is not a late testing phase. It is an architectural property validated through design reviews, automated controls, operational evidence, and incident learning.

## Implementation Gate

Material `phoenix-core` implementation must not begin until the controls relevant to the selected MVP capabilities are mapped to owners, acceptance criteria, and verification evidence.
