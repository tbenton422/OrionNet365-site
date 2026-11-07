# OrionNet365 Website v2 — staging package

Six standalone pages: index.html, development.html, operations.html, partnerships.html, about.html, contact.html. Shared assets in assets/.

## Preview locally
Open index.html in a browser. Or from this folder run `python -m http.server 8000` and open http://localhost:8000. Test all navigation links and mobile menu.

## GitHub deployment
1. Back up or create a branch from the existing production repository before changing files.
2. Inspect the existing `.github/workflows/` deployment file and determine its configured `app_location` and build settings. Do not delete existing workflow or Azure configuration.
3. Upload these files to the directory that the workflow deploys (often repository root), preserving the `assets/` folder. The new index.html replaces the old homepage only when you are ready.
4. Commit to a staging branch first; if existing Azure Static Web Apps workflow supports pull request previews, review that preview before merging. Otherwise test locally or on a separate staging site.
5. Merge after approval and check GitHub Actions deployment status and live pages.

## Before publishing
- Verify `info@orionnet365.com` is an active mailbox or change the email link in contact.html.
- Confirm the exact public claims and legal entity details.
- Replace the placeholder geometric wordmark with approved company logo if desired.
- Check if the existing site has custom DNS, analytics, redirects, privacy policy, or other files to preserve.
- The site intentionally contains no inquiry form or visitor tracking.
- Fonts are loaded from Google Fonts; local fallbacks are included.

This is a new static site package, not an in-place edit of the existing GitHub source. The production deployment configuration has not been verified.


## Net-Bridge revision

This revision adds the OrionNet365 Net-Bridge Services brand and planned Standard, Connected, Protected and Resilient service framework. It highlights metropolitan connectivity, geographic diversity, incremental expansion and coordinated operations. These are planned offerings, not claims of live services or guaranteed failover. Internal cluster architecture, capacity reserve economics, pricing, and partner identities are intentionally excluded.

**Deployment:** Upload the six HTML files and the entire `assets/` directory to the root of your existing GitHub repository. Preserve `.github/workflows/` and the Azure Static Web Apps deployment configuration. Remove old public HTML pages if you do not want them accessible by direct URL.


## v1.1 changes
- Improved contrast for dark sections, light cards and the Net-Bridge service framework.
- Four Net-Bridge service levels now have individual bullet lists.
- Facility Operations describes OrionNet365 as the managed-services coordinator without asserting named or executed partner agreements.
- Upload the six HTML pages and the contents of `assets/` to the corresponding GitHub locations; preserve `.github/workflows`.


## v1.2 changes (2026-11-07)
- Improved contrast for light and dark backgrounds across all six pages.
- Facility Operations: added second graphic depicting repeatable metro-area facility groups across markets.
- Partnerships: added high-level joint-venture and co-development language.
- About: Sacramento headquarters with opportunity-driven reach to other U.S. metropolitan markets; added multi-MSA illustration.
- Kept existing Net-Bridge service levels and managed-operations positioning.
- Upload HTML files to repository root and the contents of assets/ to the existing assets/ directory; preserve .github/workflows.
