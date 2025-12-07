# Planner — Status & Next Steps

- **Scope:** Deliver lightweight scaffold: C# BFF, React (Vite) frontend, unit tests (xUnit), E2E tests (Playwright), CI workflow.
- **What’s done:** Branch pushed; PR opened (`jaxgeek/issue1` → `master`); BFF scaffolded and adjusted for local SDK; frontend scaffolded; backend unit test added and passed locally; Playwright configured and browsers installed.
- **Remaining / Risks:**
  - Frontend E2E failed to connect to the dev server in an automated run — requires stable dev-server orchestration in CI or build-and-serve approach.
  - CI workflow file contained duplicate/overlapping blocks; recommend cleaning to a single coherent workflow.
  - Local environment mismatch: repo initially targeted .NET 7 but local machine had .NET 3.1; we temporarily changed to `netcoreapp3.1` to run locally. Decide final target framework for the project (recommended: .NET 7 or 8).
- **Next actions (Planner):**
  - Decide target frameworks (BFF: .NET 7/8 vs .NET Core 3.1).
  - Choose CI strategy: run Playwright against static `dist` (build & serve) or spin up backend + frontend services in CI (docker-compose or matrix).
  - Add milestones: merge PR, align target SDK, stabilize E2E pipeline.
