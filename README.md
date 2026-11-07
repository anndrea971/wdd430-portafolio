# WDD 430 Portfolio

A simple portfolio site built for the W01 assignment with the Next.js App Router, TypeScript, and Tailwind CSS.

## Live Site

- **Vercel deployment:** https://portfolio-username.vercel.app <!-- TODO: replace with your real Vercel URL -->
- **GitHub repository:** https://github.com/your-username/wdd430-portfolio <!-- TODO: replace with your real repo URL -->

## Pages

| Route | Description |
| --- | --- |
| `/` | Home page with a list of portfolio projects |
| `/about` | About page with technical skill cards |
| `/api/hello` | Simple API route that returns JSON |

## Project Structure

```
wdd430-portfolio/
├── app/
│   ├── about/page.tsx        (About page)
│   ├── api/hello/route.ts    (API route)
│   ├── globals.css           (Tailwind CSS import and global styles)
│   ├── layout.tsx            (Root layout with Header and Footer)
│   └── page.tsx              (Home page)
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectList.tsx
│   └── SkillCard.tsx         (Custom component used on the About page)
└── public/
```

All components are Server Components (no `'use client'`).

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run start` runs the production build
- `npm run lint` runs ESLint
