# All Saints' Brigade Surulere Website

The public website for the 5th and 9th Surulere Companies of The Boys' Brigade Nigeria and The Girls' Brigade Nigeria at All Saints' Anglican Church, Surulere, Lagos.

The application presents the companies' history, programmes, articles, events, galleries, outreach work, leadership, registration, and contact information. Public content is managed through the Brigade Admin dashboard and delivered by the Brigade backend API.

## Table of Contents

- [Features](#features)
- [Technology](#technology)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Local Setup](#local-setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Backend and Dashboard Integration](#backend-and-dashboard-integration)
- [Routes](#routes)
- [Content and Media](#content-and-media)
- [Theme and Styling](#theme-and-styling)
- [Available Commands](#available-commands)
- [Production Build](#production-build)
- [Deployment](#deployment)
- [Verification Checklist](#verification-checklist)
- [Troubleshooting](#troubleshooting)
- [Security Notes](#security-notes)
- [Contributing](#contributing)

## Features

- Responsive public website for desktop, tablet, and mobile screens.
- Light and dark themes powered by semantic design tokens.
- Golden Jubilee introduction with a photo mosaic, timed dismissal, and skip control.
- Backend-powered articles, categories, related stories, and article detail pages.
- Backend-powered event listings, event calendar, deadlines, event details, media, and video playback.
- Backend-powered gallery categories, albums, years, images, lightboxes, and an all-images view.
- Shared outreach sponsor marquee used on outreach gallery and event pages.
- Company history, aims, objectives, achievements, leadership, officers, and member profiles.
- Registration and contact forms connected to the backend API.
- Embedded Google Map for All Saints' Anglican Church, Surulere.
- Shared loading, empty, error, 404, call-to-action, and scroll-to-top experiences.
- Basic browser-level image interaction protection for displayed gallery media.
- Accessible controls, reduced-motion support, keyboard-aware dialogs, and responsive navigation.

## Technology

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19 and TypeScript |
| Styling | Tailwind CSS 4 and CSS modules |
| Animation | Framer Motion |
| Forms | React Hook Form and Zod |
| Icons | Lucide React and React Icons |
| Theme | next-themes |
| Counters | react-countup |
| Package manager | pnpm |
| Deployment | Vercel |
| Content API | Brigade NestJS backend |
| Media delivery | ImageKit URLs returned by the backend |

## Project Structure

```text
bgb-web/
|-- data/                         # Gallery presentation defaults and metadata
|-- public/                       # Local images, logos, team photos, and static assets
|-- src/
|   |-- app/                      # App Router pages, layouts, loading, and 404 states
|   |   |-- about/
|   |   |-- articles/
|   |   |-- contact/
|   |   |-- events/
|   |   |-- gallery/
|   |   `-- register/
|   |-- components/
|   |   |-- anniversary-intro/    # Golden Jubilee opening experience
|   |   |-- cards/                # Reusable article and event cards
|   |   |-- layout/               # Footer, transitions, and theme provider
|   |   |-- navigation/           # Desktop and mobile navigation
|   |   |-- sections/             # Page and feature sections
|   |   `-- shared/               # Shared CTA, loading, map, sponsor, and utility UI
|   |-- constants/                # Typed frontend content models and defaults
|   |-- lib/
|   |   |-- api.ts                # Base API request and form submission helpers
|   |   `-- content-api.ts        # Backend response normalization for public pages
|   `-- styles/                   # Global styles and semantic theme tokens
|-- .env.example                  # Safe environment variable template
|-- next.config.ts                # Next.js and remote image configuration
|-- package.json                  # Scripts and dependencies
`-- pnpm-lock.yaml                # Reproducible dependency versions
```

## Requirements

Install the following before starting:

- Node.js 20.9 or newer.
- pnpm 9 or newer.
- Git.
- A running copy of the Brigade backend for live articles, events, galleries, registration, and contact submission.

Check the installed versions:

```bash
node --version
pnpm --version
git --version
```

## Local Setup

1. Clone the frontend repository and enter it:

   ```bash
   git clone <frontend-repository-url>
   cd bgb-web
   ```

2. Install dependencies from the lockfile:

   ```bash
   pnpm install --frozen-lockfile
   ```

3. Create the local environment file:

   PowerShell:

   ```powershell
   Copy-Item .env.example .env.local
   ```

   Git Bash, macOS, or Linux:

   ```bash
   cp .env.example .env.local
   ```

4. Start the backend on port `4000`, or update `NEXT_PUBLIC_API_URL` to the URL where it is running.

5. Start the frontend:

   ```bash
   pnpm dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Only one public environment variable is currently required by this frontend:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
```

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Yes | Full backend API base URL, including `/api/v1`. |

For a deployed Render backend, use a value similar to:

```env
NEXT_PUBLIC_API_URL=https://your-backend-service.onrender.com/api/v1
```

Important:

- Variables beginning with `NEXT_PUBLIC_` are included in browser-delivered JavaScript. Never place passwords, database URLs, ImageKit private keys, Resend keys, JWT secrets, or admin credentials in them.
- Restart `pnpm dev` after changing `.env.local`.
- Set the same variable in the Vercel project settings before deploying.
- Do not commit `.env.local`; it is intentionally ignored by Git.

## Running the Application

Use separate VS Code terminals for the backend and frontend.

Frontend terminal:

```bash
cd ~/Downloads/bgb-web
pnpm dev
```

Backend terminal, assuming the backend is in `Documents/bgb-backend`:

```bash
cd ~/Documents/bgb-backend
pnpm start:dev
```

Expected local addresses:

| Service | Address |
| --- | --- |
| Public frontend | `http://localhost:3000` |
| Backend API | `http://localhost:4000/api/v1` |
| Backend Swagger documentation | `http://localhost:4000/api/docs` |

The PostgreSQL database is not started from this frontend. For Neon, the backend connects directly through its own `DATABASE_URL` and `DIRECT_URL` environment variables.

## Backend and Dashboard Integration

The public website does not authenticate administrators. Content is created and maintained in the separate Brigade Admin dashboard, persisted by the backend, and read here through public API endpoints.

The main integration flow is:

```text
Admin Dashboard -> Backend API -> PostgreSQL / ImageKit -> Public Frontend
```

Frontend API responsibilities:

| Frontend area | Backend endpoint pattern |
| --- | --- |
| Articles | `/articles`, `/articles/:slug`, `/articles/categories` |
| Events | `/events`, `/events/:slug` |
| Gallery | `/gallery/categories`, `/gallery/albums/:slug` |
| Contact | `POST /contact` |
| Registration | `POST /registrations` |

`src/lib/api.ts` owns the base request behavior and API errors. `src/lib/content-api.ts` converts backend response objects into the view models consumed by the public components.

Public content requests currently use a 60-second Next.js revalidation interval. A dashboard change can therefore take up to about one minute to appear on a statically cached public page unless the route is revalidated another way.

When the backend is unavailable, request helpers fail gracefully so the page can render an empty or unavailable state instead of exposing a server exception. Dynamic backend content will still require a reachable API to appear.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page, latest events, gallery, articles, testimonials, and outreach sponsors |
| `/about` | Company story, aims, values, leadership, officers, and members |
| `/about/5th-surulere-company` | 5th Surulere Company profile |
| `/about/9th-surulere-company` | 9th Surulere Company profile |
| `/articles` | Article magazine and category browsing |
| `/articles/[slug]` | Individual article details |
| `/events` | Featured, upcoming, past, and calendar event views |
| `/events/[eventId]` | Individual event details, deadline, pictures, and video |
| `/gallery` | Gallery category landing page |
| `/gallery/all` | Combined gallery image stream |
| `/gallery/[category]` | Dynamic category albums and yearly galleries |
| `/contact` | Contact information, form, FAQ, and location map |
| `/register` | Brigade registration form |

Unknown routes use the shared App Router 404 page at `src/app/not-found.tsx`.

To force the Golden Jubilee introduction to appear during development or review, open:

```text
http://localhost:3000/?jubilee-preview=1
```

Without the preview query, the introduction is shown once per browser session and its timing is controlled in `src/components/anniversary-intro/useAnniversaryIntro.ts`.

## Content and Media

### Dashboard-managed content

Articles, article categories, events, gallery categories, albums, gallery images, category descriptions, and gallery overview copy should be managed through the dashboard. Changes are stored by the backend and consumed by this frontend.

### Local presentation data

The `data/gallery.ts` file contains gallery presentation defaults such as icons, hero treatments, layout patterns, statistics, and upcoming-year placeholders. It supplements backend records; it is not a replacement for dashboard-managed albums and images.

### Static assets

Place repository-owned assets under `public/` and reference them from the site root, for example:

```tsx
<Image src="/images/example.jpg" alt="Descriptive alternative text" />
```

Current asset groups include:

- `public/about`
- `public/events`
- `public/gallery`
- `public/images`
- `public/team`

### Remote images

`next.config.ts` currently allows optimized remote images from:

- `images.unsplash.com`
- `ik.imagekit.io`

If the production ImageKit account uses another hostname, add it to `images.remotePatterns` and rebuild the app.

Image protection in a browser can discourage right-clicking, dragging, and common save shortcuts, but no public website can guarantee prevention of screenshots or extraction of files already delivered to a visitor's device. Use appropriately sized or watermarked media when stronger protection is required.

## Theme and Styling

The project uses Tailwind CSS 4 with semantic color tokens in `src/styles/theme.css`:

- `text-heading` for headings that adapt between light and dark themes.
- `text-foreground` for standard body copy.
- `text-muted` for secondary text.
- `text-primary` and `bg-primary` for stable Brigade navy branding.
- `text-secondary` and `bg-secondary` for gold accents.
- `bg-background`, `bg-card`, and `border-border` for theme-aware surfaces.

Dark mode is applied through the `dark` class by `next-themes`. Prefer semantic tokens over hard-coded light or dark colors when building new components.

Shared compatibility rules for common `group-hover` interactions live in `src/styles/globals.css`. The sponsor marquee also has explicit hover and keyboard-focus styles so logo treatment behaves consistently across browsers.

## Available Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Next.js development server. |
| `pnpm build` | Create an optimized production build and run build-time type checks. |
| `pnpm start` | Serve the completed production build. |
| `pnpm lint` | Run the lint script configured in `package.json`. |
| `pnpm exec tsc --noEmit` | Run TypeScript validation without generating files. |

## Production Build

Verify the frontend before opening a pull request or deploying:

```bash
pnpm install --frozen-lockfile
pnpm exec tsc --noEmit
pnpm build
```

Test the production output locally:

```bash
pnpm start
```

The `start` command requires a successful `pnpm build` first.

## Deployment

### Vercel

1. Push the frontend repository to GitHub.
2. Import the repository into Vercel.
3. Keep the framework preset as **Next.js**.
4. Use `pnpm build` as the build command if Vercel does not detect it automatically.
5. Add `NEXT_PUBLIC_API_URL` under **Project Settings -> Environment Variables**.
6. Set it for Production, Preview, and Development as needed.
7. Deploy the project.
8. Add the deployed frontend origin to the backend CORS allowlist.

Example production value:

```env
NEXT_PUBLIC_API_URL=https://your-render-backend.onrender.com/api/v1
```

### Required backend CORS configuration

The backend must allow the exact frontend origin. Do not include a path or trailing slash in the allowed origin.

```env
FRONTEND_URL=https://allsaintsbrigadesurulere.vercel.app,https://adminasacsbrigade.vercel.app
```

After changing backend environment variables on Render, redeploy or restart the backend service. After changing `NEXT_PUBLIC_API_URL` on Vercel, redeploy the frontend because public environment values are embedded at build time.

## Verification Checklist

Before merging or launching, verify all of the following:

- The production build completes without TypeScript or Next.js errors.
- The home page loads at desktop, tablet, and mobile widths.
- Light and dark themes retain readable headings, body text, navigation, cards, and dialogs.
- Articles created in the dashboard appear on `/articles` and open by slug.
- Event edits do not create duplicate cards and event details show the correct deadline and media.
- Gallery categories and albums created in the dashboard appear under `/gallery` and `/gallery/all`.
- Gallery hover overlays, expand controls, lightboxes, and end-of-list navigation work.
- The outreach sponsor marquee pauses and reveals full-color logos on hover or focus.
- Contact messages are accepted by the backend and delivered to the configured mailbox.
- Registrations are accepted and visible to authorized dashboard users.
- The Google Map points to All Saints' Anglican Church, Surulere, Lagos.
- Footer links, navigation links, 404 handling, donate notice, and scroll-to-top behavior work.
- Browser console and network panels contain no unexpected CORS, image-host, hydration, or API errors.

## Troubleshooting

### Articles, events, or galleries do not appear

1. Confirm the backend is running.
2. Open the backend Swagger documentation and test the relevant public endpoint.
3. Confirm `.env.local` includes `/api/v1` in `NEXT_PUBLIC_API_URL`.
4. Restart the frontend after editing environment variables.
5. Check the browser Network panel for `401`, `404`, `500`, or CORS responses.
6. Allow up to 60 seconds for cached public content to revalidate.

### `TypeError: fetch failed` or `ECONNREFUSED`

The configured backend cannot be reached. Start the local backend on port `4000`, or replace `NEXT_PUBLIC_API_URL` with the reachable deployed API URL.

### CORS blocks requests

Add the exact frontend origin to the backend `FRONTEND_URL` allowlist, then restart the backend. Local origins commonly include:

```text
http://localhost:3000
http://localhost:3001
http://localhost:3002
```

### ImageKit images do not render

- Confirm that the backend record contains a valid public ImageKit URL.
- Confirm the URL hostname is allowed by `next.config.ts`.
- Confirm the ImageKit file has not been deleted or made inaccessible.
- Restart the frontend after changing `next.config.ts`.

### The Jubilee introduction does not reappear

It is intentionally remembered for the browser session. Use `?jubilee-preview=1`, open a new browser session, or clear the site's session storage.

### A deployed page still shows old content

Wait for the 60-second content revalidation window, confirm the dashboard update was published, and verify that the deployment points to the same backend and database used by the dashboard.

## Security Notes

- Never commit `.env.local`, database credentials, JWT secrets, Resend keys, ImageKit private keys, or seeded admin passwords.
- Rotate any secret that has been posted publicly, included in a commit, or shared in an issue or pull request.
- Keep all administrator authorization and role enforcement in the backend and dashboard; hiding a frontend control is not authorization.
- Validate and sanitize all submitted data on the backend even when frontend validation is present.
- Treat browser image-protection controls as a deterrent, not a security boundary.
- Keep dependencies updated and review production build warnings before deployment.

## Contributing

1. Create a focused feature branch:

   ```bash
   git checkout -b feat/descriptive-change
   ```

2. Make the change without committing environment files or generated output.
3. Run TypeScript validation and a production build.
4. Review the final diff:

   ```bash
   git status
   git diff --check
   git diff
   ```

5. Commit with a Conventional Commit message and open a pull request that explains the behavior, verification, responsive impact, and deployment requirements.

## Maintainer
The project’s maintainer should be updated to reflect the team responsible for managing, supporting and improving the platform as we advance.

Brigade Tech Team<br>
&<br>
Michelle Utomi
