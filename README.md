# Planet Zero — Next.js + Sanity + Vercel

## Stack
- **Next.js 14** (App Router, ISR)
- **Sanity v3** (embedded Studio at `/studio`)
- **Vercel** (deploy + rebuild webhooks)

---

## 1 — First-time setup

```bash
# Install dependencies
npm install

# Copy env file and fill in your values
cp .env.local.example .env.local
```

Open `.env.local` and set:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=   ← your Sanity project ID
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=                ← create a token with write access at sanity.io/manage
```

---

## 2 — Add your Sanity project's CORS origin

Go to **sanity.io/manage → your project → API → CORS Origins** and add:
- `http://localhost:3000`
- `https://your-vercel-url.vercel.app` (add after deploy)

---

## 3 — Seed content into Sanity

Run this **once** to populate all sections with the default Planet Zero content:

```bash
node scripts/seed-sanity.mjs
```

---

## 4 — Run locally

```bash
npm run dev
```

- **Landing page** → http://localhost:3000
- **Sanity Studio** → http://localhost:3000/studio

---

## 5 — Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (first time: follow prompts to link to your Vercel account)
vercel --prod
```

Then in the **Vercel dashboard → your project → Settings → Environment Variables**, add:
```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
SANITY_API_TOKEN
```

---

## 6 — Set up Sanity webhook (auto-rebuild on content change)

In **Vercel dashboard → your project → Settings → Git → Deploy Hooks**, create a hook and copy the URL.

Then in **sanity.io/manage → your project → API → Webhooks**, create a webhook:
- **URL**: paste the Vercel deploy hook URL
- **Trigger on**: Create, Update, Delete
- **Filter**: leave blank (all documents)

Now every time you save content in Studio, Vercel rebuilds the site automatically (within ~60 seconds via ISR).

---

## Content editing

All page content is editable at `/studio`. Each section maps to one document:

| Studio Document      | Page Section              |
|----------------------|---------------------------|
| Site Settings        | Nav links, footer tagline |
| Hero Section         | Headlines, stat, CTAs     |
| Problem Section      | The Challenge + stat cards|
| Product Section      | 4 Layer cards             |
| Vision Section       | Vision headline + CTA     |
| Why Planet Zero      | Messaging + 3 pillars     |
| Sectors Section      | 3 sector cards            |
| CTA / Contact        | Bottom CTA                |
| Ticker Bar           | Scrolling feature list    |
