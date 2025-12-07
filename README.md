# SupplementApp (shell project)

This repository contains a minimal scaffold for a supplement website:
- `bff` — a C# minimal API acting as a BFF (Backend-for-Frontend).
- `frontend` — a React (Vite) frontend with Playwright tests.

Quick start (Windows PowerShell):

1. Build and run the backend:

```powershell
cd .\bff
dotnet build
dotnet run --project .\SupplementApp.Bff.csproj --urls "http://localhost:5000"
```

2. Run the frontend (in a separate terminal):

```powershell
cd .\frontend
npm ci
npm run dev
```

3. Run backend unit tests:

```powershell
cd .\bff\tests
dotnet test
```

4. Run frontend Playwright tests (ensure the app is running at `http://localhost:3000`):

```powershell
cd .\frontend
npx playwright test
```

CI: A GitHub Actions workflow is provided at `.github/workflows/ci.yml` to build and test both projects and deploy the frontend to GitHub Pages.
