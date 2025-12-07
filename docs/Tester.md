# Tester — Test Status & Suggested Tests

- **What exists now:**
  - Unit: xUnit test for `SupplementService.GetAll()` — passed locally.
  - E2E: Playwright configured and a minimal test exists (`home.spec.ts`) that verifies the app loads and shows an `<h1>`.
- **Observed issues:**
  - Playwright E2E run failed with `ERR_CONNECTION_REFUSED` to `http://localhost:3000` during the automated run. The dev server did start but the test command may have been invoked before the server was ready or different terminal contexts caused the run to fail.
- **Testing recommendations:**
  - Add a CI-friendly E2E flow:
    - `npm run build`
    - `npx http-server ./dist -p 3000` or `npx serve ./dist -l 3000` (or use `start-server-and-test`)
    - `npx playwright test --config=tests/playwright.config.ts`
  - Add assertions for the API contract (verify `/api/supplements` returns JSON array and expected properties).
  - Add basic accessibility checks (Playwright accessibility snapshot).
  - Use headless browser in CI and keep Chromium-only runs unless cross-browser coverage is required.
- **Acceptance criteria for Tester:**
  - Backend unit tests pass.
  - E2E tests run reliably in CI against a built and served artifact.
  - Basic accessibility checks are included.
