# Developer — Implementation Notes & Code Feedback

- **What was added/changed:**
  - `bff/`: `SupplementApp.Bff.csproj`, `Program.cs` → `Startup.cs` (migrated to Host pattern for .NET Core 3.1), `Controllers/SupplementsController.cs`, model/service.
  - `bff/tests/`: xUnit test verifying `SupplementService`.
  - `frontend/`: Vite project scaffolding `index.html`, `src/App.jsx`, `main.jsx`, `vite.config.js` (proxy to backend), `package.json`.
  - `frontend/tests/`: Playwright config and a basic test `home.spec.ts`.
  - `.github/workflows/ci.yml`, `.gitignore`, `README.md`.
- **Build/test results (local):**
  - Backend: `dotnet build` and `dotnet test` passed (xUnit 1 test).
  - Frontend: dependencies installed (used `--legacy-peer-deps` for compatibility). `npx playwright install` downloaded browsers. Vite dev server started but automated Playwright run saw connection refused — likely timing/terminal orchestration.
- **Developer action items:**
  - Decide and update `TargetFramework` (I can revert to `net7.0` after confirming SDK availability in CI/dev machines).
  - Add `package-lock.json` (commit lockfile) for reproducible frontend installs.
  - Add a `test:e2e:ci` script that runs `npm run build`, serves `dist` on a port, then runs `npx playwright test`.
  - Expand unit tests and add a simple integration test for the `/api/supplements` endpoint.
