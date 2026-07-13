# ID2-004 — Password Security

Single-factor passwords require at least 15 Unicode code points and accept long passphrases without composition rules. Context and common-password checks apply. scrypt uses N=131072, r=8, p=1. Legacy hashes upgrade after successful login. Production still requires a breached-password screening provider.
