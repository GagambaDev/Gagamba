This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Product tour assets

The homepage tour reads its frame range and chapter timings from `public/images/tour/gagamba-tour-manifest.json`. The desktop and mobile WebP sequences are served directly from `public/images/tour/`, without the Next.js image optimizer. To serve them from a CDN, set `NEXT_PUBLIC_TOUR_ASSET_BASE` at build time to the public URL containing the `desktop/` and `mobile/` folders (for example, `https://cdn.example.com/tour`). The CDN must allow cross-origin frame requests and serve the files as WebP. Rebuild the application after changing this variable.

Both sequences are 16:9, including the mobile sequence. On portrait screens the full drone is contained, so it can appear smaller; a portrait-rendered sequence would be needed for a closer composition. The tour is client-side and does not add a server requirement. The existing application uses API routes and Clerk middleware and is not configured for static export; changing hosting or enabling static export requires addressing those existing server features separately.
