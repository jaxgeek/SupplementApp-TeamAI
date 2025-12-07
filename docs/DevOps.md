# DevOps — CI/CD Feedback & Fixes

- **Current CI state:**
  - Workflow at `.github/workflows/ci.yml` builds/tests backend and frontend and (optionally) deploys frontend to GitHub Pages.
  - The CI file was cleaned to a single workflow that uses .NET 8 for the backend build and Node 18 for frontend build.
- **Immediate DevOps fixes performed / recommended:**
  - Consolidate workflow files to avoid duplicate `name`/`on` blocks. Use separate files only when logically splitting responsibilities.
  - Use `actions/cache` to cache NuGet and npm artifacts for faster runs.
  - For Playwright in CI: prefer building the frontend and serving `dist` before running Playwright, or use the Playwright GitHub Action which handles browser installation and server orchestration.
  - Ensure the `GITHUB_TOKEN` has permission to push to gh-pages (if using `peaceiris/actions-gh-pages`).
- **Security/ops notes:**
  - Before prod, tighten CORS and ensure secrets (API keys, connection strings) are stored in GitHub Secrets.
  - Add a health endpoint to the BFF for probes and readiness checks.
- **CI Next steps:**
  - Add caching to `ci.yml`, add an e2e job that runs after build and serves `dist`.
  - Consider provisioning an integration/staging environment for full-stack testing.
