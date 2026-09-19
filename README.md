# MineGuard 360

MineGuard 360 is a mine safety complaint, risk analysis, corrective action,
authority verification, and compliance reporting platform prototype.

## Features

- Role-based demo login for Admin, Worker, and Officer flows
- Admin dashboard with issue, mine, task, report, analytics, and settings views
- Searchable and filterable issue list
- Mine overview and mine-specific details for issues, workers, officers, sensors, and safety
- Task details and action workflow screens
- Reports & ATR prototype with automatic ATR, compliance, and analytics views
- Responsive Expo Web output using the existing Expo Router navigation

## Technology Stack

- Expo SDK 57
- Expo Router
- React Native 0.86
- React Native Web
- TypeScript
- npm

## Project Structure

```text
src/app/                 Expo Router screens and file-based routes
src/components/          Shared UI components, including the admin layout
src/data/                Centralized local demo data
assets/                  App icons, splash assets, and images
app.json                 Expo configuration and static web output settings
```

## Installation

```bash
npm install
```

## Development

Start the Expo development server:

```bash
npx expo start
```

Start the web development server:

```bash
npm run web
```

Demo accounts:

| Role | Employee ID | Password |
| --- | --- | --- |
| Admin | `ADMIN001` | `admin123` |
| Worker | `WORKER001` | `worker123` |
| Officer | `OFFICER001` | `officer123` |

These credentials are intentionally demo-only and are not production authentication.

## Production Build

Create the static web export:

```bash
npm run web:build
```

The generated website is written to `dist/`. The Expo configuration uses
`web.output: "static"`, so the exported files can be hosted by a static hosting
provider. The `dist/` directory is generated output and is excluded from Git.

Type-check the project:

```bash
npx tsc --noEmit
```

## Environment Variables

The current prototype does not require environment variables or a backend.
Its issue, mine, task, worker, officer, sensor, report, and settings data is
local mock data in `src/data/mineguard-data.ts`.

If a backend is added later, keep real credentials in local environment files
and configure the hosting provider's environment settings. Never commit
`.env` or other secret-bearing files.

## Deployment

This project is suitable for static hosting such as GitHub Pages, Netlify, or
Vercel:

1. Install dependencies with `npm install`.
2. Run `npm run web:build`.
3. Publish the generated `dist/` directory.
4. Configure the host to serve `index.html` for client-side route fallback if
   direct refreshes of nested routes are required.

The project contains no server-side API and does not claim to connect to real
AI services, mine sensors, databases, or production APIs. Reports and file
actions are prototype confirmations unless a backend is implemented.
