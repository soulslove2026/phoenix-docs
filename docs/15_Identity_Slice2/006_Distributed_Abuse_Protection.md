# ID2-006 — Distributed Abuse Protection

PostgreSQL provides atomic rate-limit buckets shared across application replicas. Each protected action consumes three pseudonymous buckets: network-and-subject, network-wide, and subject-wide. This reduces simple per-IP, botnet, and identifier-variation bypasses without creating a permanent account lock.

Dedicated edge protection, behavioral risk scoring, bot intelligence, adaptive challenges, and multi-region coordination remain later layered defenses.
