# Akshata Nalawade — Portfolio

Personal portfolio site, built with Next.js (App Router), React, TypeScript, and Tailwind CSS. Deployed on Vercel.

## Updating the content

All of the text on the site — projects, experience, skills, education, links — lives in one file:

```
src/content/profile.ts
```

Edit the values there and the page updates. You don't need to touch the components for content changes.

- **Add a project:** add an entry to `projects` (or `otherWork` for smaller GitHub builds). The first three projects appear as the "Inside" cover lines in the hero; the one with `featured: true` gets the large card.
- **Update the resume:** replace `public/Akshata_Nalawade_Resume.pdf` with the new file, keeping the same name. The "Download resume" buttons point to it.

## Where things are

| What | File |
| --- | --- |
| Site copy and data | `src/content/profile.ts` |
| Colours and fonts | `src/app/globals.css` (palette) and `src/app/layout.tsx` (fonts) |
| Hero (name + cover lines) | `src/components/Hero.tsx` |
| Projects | `src/components/Work.tsx` |
| About, Experience, Skills, Education, Contact | `src/components/Sections.tsx` |
| Top navigation | `src/components/Nav.tsx` |
| Page title and link-preview text | `metadata` in `src/app/layout.tsx` |
| Favicon | `src/app/icon.svg` |

## Running locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Before pushing, check that the production build passes:

```bash
npm run lint
npm run build
```

## Deploying

The repo is connected to Vercel, so every push to `main` deploys to production automatically, and every other branch or pull request gets its own preview URL.

### Taking over the project

1. **GitHub:** accept the collaborator invite, or ask for the repository to be transferred to your account (Settings → General → Transfer ownership).
2. **Vercel:** once the repo is in your account, go to [vercel.com/new](https://vercel.com/new), import the repository, and click Deploy. No environment variables are needed.
3. **Custom domain (optional):** in your Vercel project, open Settings → Domains and add your domain.
