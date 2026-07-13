---
Category: Production Stack Ratification
Version: 3.1.0
Status: Ratified
Maturity: Level 3 — Engineering Standard
Owner: Phoenix Architecture Authority
Last Updated: 2026-07-13
---
# STACK-002 — Comparative Decision Matrix

Scores use 1–5 and are directional, not a substitute for engineering judgment.

| Criterion | Weight | Node/TS + Fastify | Node/TS + NestJS | Go | Java/Kotlin |
|---|---:|---:|---:|---:|---:|
| Product iteration | 5 | 5 | 4 | 3 | 3 |
| Type safety/tooling | 5 | 4 | 4 | 5 | 5 |
| JSON API ergonomics | 4 | 5 | 4 | 4 | 4 |
| Realtime I/O fit | 4 | 5 | 4 | 5 | 4 |
| Runtime efficiency | 3 | 4 | 3 | 5 | 4 |
| Framework transparency | 4 | 5 | 3 | 5 | 3 |
| Hiring/ecosystem | 4 | 5 | 5 | 4 | 4 |
| Operational simplicity | 4 | 4 | 3 | 5 | 3 |
| Shared language with clients/tools | 3 | 5 | 5 | 2 | 2 |
| Bounded-context modularity | 5 | 5 | 4 | 5 | 5 |

## Result

Node.js LTS, TypeScript, and Fastify provide the strongest balance for Phoenix's founding phase. This decision does not prohibit specialized Go/Rust services later for measured media, streaming, cryptographic, or high-throughput workloads.
