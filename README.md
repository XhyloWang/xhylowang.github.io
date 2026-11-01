# [Xhylo portfolio site](https://xhylowang.github.io/)

**Live site:** <https://xhylowang.github.io/>

This is the website for Xhylo's event photography and videography. The files in
this folder become the live site through GitHub Pages. Every time a change is
pushed to the `main` branch, GitHub rebuilds and publishes the site.

This guide assumes you have never worked with code before. Most updates only
need a text editor, the Terminal app, and a few commands.

## Before you start

You need two free tools on your computer:

- **Node.js** (version 24) — runs the website on your computer.
- **Git** — sends your changes to GitHub.

Open the **Terminal** app and go to the project folder:

```bash
cd /path/to/xinhang-site
```

The first time only, install the project's tools:

```bash
npm install
```

To look at the site while you work:

```bash
npm run dev
```

Open <http://localhost:4321> in your browser. Press `Ctrl + C` in Terminal when
you are done.

## Add a photography gallery

A gallery is one folder of photos plus a short text file that describes it.

### 1. Make a folder for the gallery

Inside `inbox/galleries/`, create a folder with a short name. The name becomes
the gallery's web address, so use lowercase letters, numbers, and hyphens.

```text
inbox/galleries/lynette-recital/
```

### 2. Add the photos

Copy the photos into that folder. JPG, PNG, and WebP files all work. The folder
should only contain the photos and the `gallery.md` file described next.

### 3. Add a `gallery.md` file

Create a file called `gallery.md` in the same folder and copy this example:

```yaml
title: Lynette's 70th Homecoming Recital
date: 2026-11-01
photographyType: corporate-private-events
featuredRank: 10
categoryRank: 1
coverImageIndex: 6
publishStatus: published
guidedContext: >
  A 70th birthday violin and piano recital for family and friends at a private
  venue. The gallery mixes candid guest moments with performance photos.
```

Change the values to match your gallery:

| Line | What it does |
| --- | --- |
| `title` | The heading shown on the gallery page. |
| `date` | The event date, written as year-month-day. |
| `photographyType` | One of `corporate-private-events`, `stage-work`, `photoshoot`, or `wedding-rom`. This decides which tab the gallery appears under. |
| `featuredRank` | Order in the **All** tab. Lower numbers appear first. |
| `categoryRank` | Order inside its own tab. Lower numbers appear first. |
| `coverImageIndex` | Which photo is the cover. `1` is the first photo, `2` is the second, and so on. |
| `publishStatus` | Use `published` to show the gallery, or `draft` to keep it hidden. |
| `guidedContext` | A description of the event, at least 100 characters long. It is used as background for the gallery summary. |

You can also add a one-line `cardSummary` if you want to control the text on the
gallery card:

```yaml
cardSummary: Violin, piano, drums, and vocals on stage.
```

### 4. Import and check the gallery

In Terminal, with the project folder open, run:

```bash
npm run build
```

This resizes the photos, creates the gallery images in
`public/images/galleries/`, writes the gallery's content file in
`src/content/photography/`, and then checks and builds the whole site. Like the
importer, it asks for any missing details such as the context, ranks, and cover
photo. The generated files are what the website uses; do not edit them by hand.

If you only want to import the photos without the full site check, run
`npm run import:magic` instead. Both commands ask for missing details.

`npm run build` also uses AI to fill in a title, summary, or card summary you
leave blank; any text you write yourself is kept.

### 5. Check the gallery

Run `npm run dev` and open <http://localhost:4321/photography/>. The gallery
should appear in the **All** tab and in its category tab.

### 6. Publish it

Send the changes to GitHub:

```bash
git add .
git commit -m "Add Lynette recital gallery"
git push
```

GitHub publishes the update automatically. It usually takes one or two minutes.

`inbox/` stays on your computer and is not uploaded. Only the optimized gallery
files are published.

## Add or change the video on the videography page

The videography page shows one featured YouTube film. The page and its poster
image are controlled by `src/lib/site.ts`.

### 1. Find the YouTube video ID

Open the video on YouTube and look at the address. The video ID is the part
after `youtu.be/` or after `watch?v=`. Stop at the first `&` if there is one.

```text
https://youtu.be/SndciZ1MDzE
                    ^^^^^^^^^^^
```

### 2. Add a poster image

Save a still image from the video as a JPG, PNG, or WebP file inside
`public/images/`. For example:

```text
public/images/jeremy-monteiro-soul-mates.jpg
```

### 3. Edit the film details

Open `src/lib/site.ts` and find the `featuredEventFilm` block:

```ts
export const featuredEventFilm = {
  videoId: "SndciZ1MDzE",
  posterUrl: "/images/jeremy-monteiro-soul-mates.jpg",
  linkedinUrl: "",
  label: "Featured film",
  title: "Jeremy Monteiro:",
  titleLineTwo: "Soul Mates.",
  description:
    "A music film of Jeremy Monteiro's Soul Mates, built around the performance and the interplay between the musicians."
} as const;
```

Change these five values:

- `videoId` — the YouTube ID from step 1.
- `posterUrl` — the image path from step 2, starting with `/images/`.
- `title` and `titleLineTwo` — the two lines of the film title.
- `description` — the paragraph under the title.

`linkedinUrl` can stay empty. When it is empty, the LinkedIn button is hidden.

### 4. Change the "My role" paragraph

Open `src/pages/videography/index.astro`. Near the top of the page, inside
`<div class="video-film-context">`, edit the paragraph between
`<h2>My role</h2>` and `</p>`.

### 5. Check and publish

Run `npm run dev`, open <http://localhost:4321/videography/>, and confirm the
film plays. Then publish with the same three commands:

```bash
git add .
git commit -m "Update featured film"
git push
```

The page shows one featured film at a time. Showing a list of several films
needs a small code change; ask a developer if you want that.

## Change other common details

| What you want to change | Where to change it |
| --- | --- |
| Site name, page title, description, email, WhatsApp number | `src/lib/site.ts` |
| Photography prices | `pricing` in `src/lib/site.ts` |
| Page headings and paragraphs | The matching file in `src/pages/` |
| Which sections appear in the menu | `sections` in `src/lib/site.ts` |
| Service card images | `public/images/services/` |
| Testimonials | `src/content/testimonials/` |

## Publishing and troubleshooting

Pushes to `main` run the GitHub Actions workflow in
`.github/workflows/deploy-pages.yml`, which validates the site, builds it, and
publishes it to GitHub Pages. You can watch the progress in the **Actions** tab
of the GitHub repository.

- **"command not found: npm"** — install Node.js, then open a new Terminal
  window.
- **The gallery does not appear** — check that the folder is inside
  `inbox/galleries/`, that `gallery.md` exists, and that `publishStatus` is
  `published`. Then run `npm run build` again.
- **The gallery is in the wrong order** — lower `featuredRank` or
  `categoryRank` numbers appear first.
- **The video does not play** — check that `videoId` is the 11-character ID
  from YouTube, with no extra text.
- **The site did not update** — wait a minute, then check the **Actions** tab
  for a failed run. A hard refresh (`Cmd + Shift + R` on a Mac) may be needed.

Do not edit anything in `dist/`. That folder is generated by the build.
