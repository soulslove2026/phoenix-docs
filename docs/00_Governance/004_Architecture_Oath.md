# GOV-005 — Architecture Oath

**Document ID:** GOV-005  
**Knowledge ID:** KN-GOV-005  
**Version:** 1.0  
**Status:** Ratified  
**Owner:** Architecture Governance

## Oath

As a contributor to Phoenix architecture, I commit that:

- I will not add complexity without measurable value.
- I will not hide critical logic.
- I will not couple Phoenix unnecessarily to a vendor.
- I will document material tradeoffs.
- I will design for failure, recovery, and replacement.
- I will preserve domain ownership.
- I will protect user safety, privacy, and financial integrity.
- I will require evidence before claiming scale or performance.
- I will prefer reversible decisions where possible.
- I will leave the system more understandable than I found it.
- I will not approve a design I cannot defend after ten years.
- I will raise conflicts rather than conceal them.
- I will treat operational responsibility as part of architecture.
- I will ensure AI-assisted work remains accountable and testable.

## Architecture Test

Before approval, every major design must answer:

1. What does it own?
2. What does it depend on?
3. What happens when it fails?
4. How is it observed?
5. How is it replaced?
6. How is data protected?
7. How does it scale?
8. How is it rolled back?
9. Who operates it?
10. Does it make Phoenix stronger in ten years?

## Future Review Trigger

Review this oath when Phoenix creates a formal Architecture Review Board or reaches more than 50 active engineers.
