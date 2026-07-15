# CLOUD-001 — Governed Staging Baseline

## Position

Phoenix staging is provider-neutral and begins with one immutable application artifact, one worker artifact, PostgreSQL 18, a reviewed HTTPS edge, and isolated secrets and data. Provider-specific services may replace components only through an ADR and equivalent controls.

## Required zones

- public HTTPS edge;
- loopback or private application ingress;
- internal-only database network;
- separate operations access path;
- external encrypted evidence storage;
- independent staging secret namespace.

## Non-goals

This baseline does not mandate Kubernetes, multi-region deployment, public database access, production data copies, or a specific cloud vendor.

## Promotion rule

The same verified image is promoted. It is not rebuilt for staging. Every deployment records deployment ID, region, source commit, image digest, configuration version, and rollback target.
