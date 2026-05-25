# VisitSriLanka.co

Production-ready Next.js (App Router) travel platform for curated Sri Lanka micro-trips, tours, and retreats.

## Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS**
- **lucide-react** icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description          |
| -------------- | -------------------- |
| `npm run dev`  | Local development    |
| `npm run build`| Production build     |
| `npm run start`| Run production server|
| `npm run lint` | ESLint               |

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Use the default Next.js framework preset (no extra build settings required).

## Routes

| Path | Description |
| ---- | ----------- |
| `/` | Home — hero search, regions, trending tours |
| `/destinations` | Destination hubs |
| `/tours` | Tour catalog (`?search=` supported) |
| `/tour/[id]` | Tour detail & booking |
| `/checkout` | Cart checkout |
| `/expert/[id]` | Local expert profile |
| `/guide` | Travel information |

## Project structure

See the architecture section in the repository root documentation or explore:

- `app/` — routes and layout
- `components/` — UI and feature components
- `hooks/` — client hooks
- `lib/` — data, currency, utilities
- `types/` — shared TypeScript types
- `providers/` — global app context (cart, currency)
