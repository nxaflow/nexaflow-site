This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The route files in `src/app` are intentionally small. The two site areas live in separate folders:

- `src/sites/marketing` contains the public marketing site.
- `src/sites/dashboard` contains the internal dashboard app.

## Dashboard

The internal dashboard lives at [http://localhost:3000/dashboard](http://localhost:3000/dashboard).

To connect it to Supabase:

1. Copy `.env.example` to `.env.local` and fill in `NEXT_PUBLIC_SUPABASE_URL` plus `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
2. Run `supabase/dashboard_schema.sql` in the Supabase SQL editor.
3. Create Supabase Auth users for the boss/team.
4. Start the app with `npm run dev`, open `/dashboard`, and sign in.

The dashboard assistant can search clients, tasks, and appointments in natural language. It can also write availability rules, for example: `today I am busy, mark this day unavailable`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
