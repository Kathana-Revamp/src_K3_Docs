---
sidebar_position: 2
title: Genesis M Web App
---

# Genesis M Web Application

The old legacy `Flight PHP` website for the game has been officially retired and replaced with **Genesis M**. This new web application is a complete rewrite using modern web standards.

## Tech Stack

*   **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Theming:** Custom Light/Dark mode via `next-themes`

## Directory Structure

The new source code resides in `src/K3_WebApp/new/`. The old PHP codebase has been preserved for reference inside `src/K3_WebApp/_old/`.

The Next.js App Router organizes features into route folders:

*   **`src/app/page.tsx`**: The main public landing page (Hero, Features).
*   **`src/app/auth/`**: The unified Login and Registration interface.
*   **`src/app/user/`**: The player dashboard (Profile, Characters, Premium Balance).
*   **`src/app/pages/`**: The news, patch notes, and public game information feed.
*   **`src/app/admin/`**: The secure admin control panel.
    *   `/admin/accounts`: Player account and ban management.
    *   `/admin/taneys`: Premium currency issuance and logging.
    *   `/admin/logs`: System and security event logs.

## Admin Architecture

The `/admin` routes are nested under a specialized `AdminLayout` (`src/app/admin/layout.tsx`). This layout overrides the standard public view, injecting a responsive sidebar navigation menu designed specifically for Game Masters and Administrators.

## Running the Web App Locally

To spin up the local development server:

1. Open a terminal.
2. Navigate to the web app directory: `cd src/K3_WebApp/new`
3. Install dependencies: `npm install`
4. Start the dev server: `npm run dev`

You can then view the site in your browser at `http://localhost:3000`.

:::tip Database Connection
By default, the UI components are scaffolded with placeholder data for layout testing. You will need to configure your database driver (e.g., Prisma or standard SQL clients) to connect the UI to the `K3_DBSRV` databases.
:::
