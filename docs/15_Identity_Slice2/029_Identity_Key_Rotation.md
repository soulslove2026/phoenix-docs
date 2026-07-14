# Identity Key Rotation

The maintenance-window rotation utility re-encrypts notification and MFA material inside one transaction. Dry-run evidence, backup restoration, dual approval, coordinated secret deployment, post-rotation tests, and destruction of old keys are required.


New encryption keys must be structurally valid, differ from their current effective keys, and remain independent from each other. Token-pepper and privacy-HMAC rotation are outside this in-place re-encryption utility and require a separate invalidation or dual-read migration design.
