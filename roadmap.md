# Logo update
- [x] Bring existing GitHub website pages into the supported project framework, preserving content and appearance.
- [x] Apply uploaded circular logo to navigation, footer, legal pages, and favicon.
- [x] Verify all pages and logo sizing in the browser.

# Home video section
- [x] Add three side-by-side vertical (9:16) video cards to the home landing page, first frame as poster.
- [x] Verify the section in the browser on desktop and mobile.

# Legal audit
- [x] Audit site data collection, third-party services, and Italian legal requirements.
- [x] Correct all three legal documents without changing other sections.
- [x] Add mandatory corporate info (art. 2250 c.c.) to legal pages: REA/PEC/capitale sociale as user-approved placeholders; user fills real values before go-live.
- [x] Verify legal pages and sample-request flow; report business details requiring confirmation.

# Corporate data placeholders
- [x] Keep [Inserire ...] placeholders for CF/REA/PEC/capitale in legal pages and footer (single source: src/lib/company.ts) until real data is supplied.
- [ ] Replace placeholders with real CF, REA, PEC and capitale sociale in src/lib/company.ts before go-live — waiting on the user to provide the values.