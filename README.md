# Xinhang portfolio site

A static portfolio site for photography and videography. It uses [Astro](https://astro.build) 5, stores content as Markdown and MDX, and deploys to GitHub Pages.

The code comes from an earlier portfolio site that used the same Astro setup. All content is placeholder material, so the site builds and can be restyled before real work is added.

## What is placeholder

- Four galleries in `src/content/photography/`, all named `placeholder-*`, with generated images in `public/images/placeholders/`.
- Two sample posts in `src/content/content-work/`.
- Three sample testimonials in `src/content/testimonials/`.
- Generated service card images in `public/images/services/`.
- A featured film with no video ID, so the video page shows its poster without playback.
- Contact details, site copy, and rates in `src/lib/site.ts`.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Before publishing, run:

```bash
npm run validate
npm run build
```

`npm run build` imports galleries, generates optional copy, validates content, and writes the production site to `dist/`.

## Replace the placeholder details

1. Edit `src/lib/site.ts` to set the name, title, description, email, WhatsApp number, featured film, rates, and visible sections.
2. Add Xinhang’s Web3Forms access key in `src/pages/contact.astro`. Enquiries cannot send until that key is set.
3. Set the production URL in `astro.config.mjs`, or set the `SITE_URL` environment variable.
4. Replace the images in `public/images/services/` and the placeholder galleries.

The social media page and the data section stay in the code but are hidden by the `sections` switches in `src/lib/site.ts`. Set `content: true` to show the social media page after adding real posts.

To enable AI copy generation, copy `.env.example` to `.env` and add `OPENAI_API_KEY`. Without a key, the build skips generation.

## Add a photography gallery

1. Create `inbox/galleries/<folder>/` and add `.jpg`, `.jpeg`, `.png`, or `.webp` photos.
2. Add `gallery.md` with `guidedContext`, `featuredRank`, `categoryRank`, and a 1-based `coverImageIndex`.
3. Run `npm run import:magic`, or run `npm run build`.

The importer writes optimized WebP files and a manifest to `public/images/galleries/<slug>/`, and creates `src/content/photography/<slug>.md`. Commit the generated output and keep `inbox/` local.

Delete the placeholder galleries once real galleries exist.

## Add social work

Create an `.mdx` file in `src/content/content-work/`. Set `platform` to `instagram`, `tiktok`, or `linkedin`. Use `embedHtml` for a network embed, or set `coverImage` and `externalUrl` for a cover image link. Local playback uses `playback: local`, `videoSrc`, and `coverImage`, with the video in `public/videos/social/`.

## Deployment

The site deploys to `https://xhylowang.github.io/` from the
`XhyloWang/xhylowang.github.io` repository. Because this is a GitHub Pages user
site, it is served from the domain root and needs no `base` path.

The workflow in `.github/workflows/deploy-pages.yml` validates and builds the
site on every push to `main`, then deploys `dist/` to GitHub Pages. In the
repository settings, set **Pages → Build and deployment → Source** to
**GitHub Actions** once; pushes to `main` handle the rest. `public/.nojekyll`
keeps GitHub's Jekyll pipeline from touching the `_astro/` asset folder.

Keep `inbox/`, `.env`, `node_modules/`, `.astro/`, and `dist/` out of the repository.
