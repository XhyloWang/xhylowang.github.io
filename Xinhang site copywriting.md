# Master copy document

This file holds every line of front-facing copy on the portfolio site, grouped by page. Edit the text in a blockquote and ask an agent to apply it by ID. The agent finds the matching source file and changes only that string.

## How to use this file

- Each entry has a stable ID, a short note on where the copy appears, and the current copy in a blockquote.  
- Edit the text inside the blockquote. Leave the ID and the note alone.  
- To request a change, quote the ID and the new copy. For example, "change `home.hero.lede` to ...".  
- Text in braces is produced by code or content data, such as `{year}` or `{gallery title}`. Change the source value instead of this document.  
- Multi-line copy is shown in a fenced block. Change line breaks only on purpose.  
- Copy is reproduced as it renders, including typographic apostrophes and dashes.

## Scope

Pages covered are `/`, `/photography/`, every `/photography/gallery/<slug>/`, `/videography/`, `/content/`, `/data/` (hidden), every `/data/project/<slug>/` (hidden), `/contact/`, and `/preview/airwallex/` (design preview, not linked).

`/data/` and the project pages are hidden from navigation because `sections.data` is `false` in `src/lib/site.ts`. They still resolve if visited directly.

Draft content is excluded. Only published entries render, so only published entries appear here.

## Contents

- [Global](#global)  
- [Page: Home](#page-home)  
- [Page: Photography](#page-photography)  
- [Gallery pages](#gallery-pages)  
- [Page: Videography](#page-videography)  
- [Page: Social media](#page-social-media)  
- [Page: Data (hidden)](#page-data-hidden)  
- [Page: Contact](#page-contact)  
- [Shared sections](#shared-sections)  
- [Design preview](#design-preview-previewairwallex)  
- [Values that are not prose](#values-that-are-not-prose)

## Global

These strings appear on every page or in the browser chrome.

### Site identity

Source: `src/lib/site.ts`

**`global.site.name`** Site name. Used in the header brand, the footer heading, and the copyright line.

> Xhylo

**`global.site.title`** Default browser tab title and the suffix on most other page titles.

> Event Photography & Videography \| Xhylo

**`global.site.description`** Default meta description when a page does not set its own.

> Corporate event photography and videography for businesses and brands in Singapore. 

### Navigation

Source: `src/lib/site.ts`, `src/components/Nav.astro`

**`global.nav.photography`** Main navigation link.

> Photography

**`global.nav.video`** Main navigation link.

> Videography

**`global.nav.content`** Main navigation link. Hide 

> Music events \[change nav descriptor to music events\]

**`global.nav.contact`** Main navigation link.

> Contact

**`global.nav.menu_open`** Mobile navigation toggle label when the menu is closed.

> Menu

**`global.nav.menu_close`** Mobile navigation toggle label when the menu is open.

> Close

### Footer

Source: `src/components/Footer.astro`

**`global.footer.tagline`** One-line description under the site name.

> Photography, videography, and music events in Singapore.

**`global.footer.explore`** Label above the sitemap links.

> Explore

**`global.footer.home`** First sitemap link.

> Home

**`global.footer.contact_heading`** Label above the contact link.

> Get in touch

**`global.footer.contact_link`** Contact link in the footer.

> Contact me

**`global.footer.location`** Location line at the bottom of the footer.

> Singapore

**`global.footer.copyright`** Copyright line. `{year}` is the current year.

> © {year} Xhylo 

### Floating contact button

Source: `src/components/FloatingContactButton.astro`

**`global.floating.button`** Fixed button at the bottom right of every page except the contact page.

> Contact me

**`global.floating.title`** Heading in the popover opened by the floating button.

> Let’s talk about your project

**`global.floating.intro`** Line under the popover heading.

> Choose how you’d like to get in touch.

**`global.floating.whatsapp`** WhatsApp option in the popover. The arrow is decorative markup.

> WhatsApp

**`global.floating.whatsapp_hint`** Line under the WhatsApp option.

> Start a conversation with me.

**`global.floating.form`** Contact form option in the popover. The arrow is decorative markup.

> Contact form

**`global.floating.form_hint`** Line under the contact form option.

> Share your plans and request a quote.

### WhatsApp enquiry messages

Source: `src/lib/site.ts`, `src/lib/enquiries.ts`

These messages are prefilled when a visitor taps a WhatsApp link. Keep the line breaks, because they format the message in WhatsApp.

Phone number  
[https\://wa.me/6596952283](https://wa.me/6596952283)

**`global.whatsapp.general`** Prefilled message for the general WhatsApp link.

Hi Xhylo, I’d like to enquire about a project.

Service needed:

Date or timeframe:

Location:

Requirements:

Could you let me know your availability?

**`global.whatsapp.photography`** Prefilled message when the enquiry starts from a photography page.

Hi Xhylo, I’d like to check your availability for photography.

Date:

Venue:

Event or shoot type:

Coverage hours:

Requirements:

**`global.whatsapp.video`** Prefilled message when the enquiry starts from the video page.

Hi Xhylo, I’d like to check your availability for event video coverage.

Date:

Venue:

Coverage hours:

Intended use:

Video requirements:

## Page: Home

Path: `/` Source: `src/pages/index.astro`

### Metadata

**`home.meta.title`** Browser tab title.  
> Event Photography & Videography \| Xhylo

**`home.meta.description`** Meta description and Open Graph description.

> Singapore-based freelance photographer and videographer for corporate events, private celebrations, and social content shoots. Explore Xhylo's work and discuss your project.

### Hero

**`home.hero.h1`** Main heading. "Xhylo." is wrapped in its own span and sits on a second line on desktop.

> Hi, I'm Xhylo.

**`home.hero.identity_1`** First item in the short identity list under the heading.

> Event photographer

**`home.hero.identity_2`** Second item in the identity list.

> Event videographer

**`home.hero.identity_3`** Third item in the identity list.

> Social content creator

**`home.hero.lede`** Introductory paragraph under the identity list.

> I’m a photographer and videographer based in Singapore, covering corporate events, private celebrations, and social content shoots.

**`home.hero.primary_button`** Primary hero button that scrolls to the photography section.

> Explore my work

**`home.hero.secondary_button`** Secondary hero button that opens the contact page.

> Contact me

### What I do

**`home.services.heading`** Heading for the three service cards.

> What I do

**`home.services.photography_title`** Photography card title.

> Photography

**`home.services.photography_description`** Photography card description.

> Corporate events, private celebrations, and portraits.

**`home.services.video_title`** Event video card title.

> Event video

**`home.services.video_description`** Event video card description.

> Highlight films capturing the people and atmosphere.

**`home.services.social_title`** Social media card title.

> Social media

**`home.services.social_description`** Social media card description.

> Short videos for brands, creators, and businesses.

### Photography section

**`home.photography.eyebrow`** Small label above the section heading.

> Photography

**`home.photography.heading`** Section heading.

> Events and celebrations

**`home.photography.description`** Section introduction.

> Event photography for conferences, corporate gatherings, and private celebrations. View selected coverage below.

**`home.photography.button`** Button under the gallery cards.

> View all galleries

### Event film section

This section uses the shared featured film copy. See [`shared.film.*`](#featured-event-film).

### Social media section

**`home.social.eyebrow`** Small label above the section heading.

> Social media

**`home.social.heading`** Section heading.

> Short videos for Instagram and TikTok

**`home.social.description`** Section introduction.

> I produce, film, and edit reels for Instagram and TikTok, from General Assembly’s career education videos to creator-led retail features and property walkthroughs.

**`home.social.card_label_corporate`** Category label on the first home social card.

> Corporate

**`home.social.card_label_lifestyle`** Category label on the second home social card.

> Lifestyle

**`home.social.card_label_real_estate`** Category label on the third home social card.

> Real estate

**`home.social.more_corporate`** Link under the first social card.

> More corporate work

**`home.social.more_lifestyle`** Link under the second social card.

> More lifestyle work

**`home.social.more_real_estate`** Link under the third social card.

> More property videos

**`home.social.button`** Button under the social cards.

> Explore social media

### Client feedback and contact

The home page uses the shared testimonials section and the shared contact section. See [Shared sections](#shared-sections).

## Page: Photography

Path: `/photography/` Source: `src/pages/photography/index.astro`

### Metadata

**`photography.meta.title`** Browser tab title.

> Event Photographer Singapore \| Ash Chong

**`photography.meta.description`** Meta description.

> Corporate and private event photography in Singapore, from conferences and networking events to celebrations. View galleries and discuss coverage with Ash Chong.

### Hero

**`photography.hero.eyebrow`** Small label above the heading.

> Photography

**`photography.hero.h1`** Main heading.

> Events, celebrations, and portraits

**`photography.hero.p1`** First paragraph under the heading.

> I photograph conferences, company gatherings, weddings, and private celebrations in Singapore.

**`photography.hero.p2`** Second paragraph under the heading.

> You’ll also find portraits and creative shoots in the galleries below.

**`photography.curation_label`** Decorative label above the category tabs.

> Curation view

### Category tabs

Source: `src/lib/content.ts` and `src/pages/photography/index.astro`

**`photography.tab.all`** First tab, shows every published gallery ranked by `featuredRank`.

> All

**`photography.tab.corporate`** Tab label for `corporate-private-events` galleries, ranked by `categoryRank`.

> Corporate & private events

**`photography.tab.stage`** Tab label for `stage-work` galleries.

> Stage work

**`photography.tab.photoshoot`** Tab label for `photoshoot` galleries.

> Photoshoot

**`photography.tab.wedding`** Tab label for `wedding-rom` galleries.

> Wedding & ROM

**`photography.empty`** Shown when a tab has no galleries.

> No published galleries in this section yet.

### Pricing and delivery

Source: `src/pages/photography/index.astro`, `src/components/WhatToExpectSection.astro`

**`photography.wtx.eyebrow`** Default label above the heading.

> What to expect

**`photography.wtx.heading`** Section heading.

> Pricing and delivery

**`photography.wtx.half_day_label`** Row label.

> Half-day coverage

**`photography.wtx.half_day_value`** Row value. Built from `pricing.photography.halfDay`.

> From \$600.

**`photography.wtx.full_day_label`** Row label.

> Full-day coverage

**`photography.wtx.full_day_value`** Row value. Built from `pricing.photography.fullDay`.

> From \$1,400.

**`photography.wtx.quote_label`** Row label.

> Your quote

**`photography.wtx.quote_value`** Row value.

> Pricing depends on the coverage duration and requirements. We’ll agree the hours and deliverables before booking.

**`photography.wtx.photographs_label`** Row label.

> Photographs

**`photography.wtx.photographs_value`** Row value.

> The number of edited photographs varies with the length and programme of the event. We’ll discuss the expected delivery when agreeing your coverage.

**`photography.wtx.turnaround_label`** Row label.

> Turnaround

**`photography.wtx.turnaround_value`** Row value.

> Event galleries are delivered within 3–5 business days. Delivery within 1 business day or on the same day may be available by arrangement. Let’s discuss what you need before booking.

**`photography.wtx.booking_ahead_label`** Row label.

> Booking ahead

**`photography.wtx.booking_ahead_value`** Row value.

> If you can, enquire at least 2 weeks ahead, especially for weekends and peak-season dates.

**`photography.wtx.usage_label`** Row label.

> Usage

**`photography.wtx.usage_value`** Row value.

> Images are yours to use for marketing, recaps, and future promotion.

### Page call to action

**`photography.cta.heading`** Heading above the contact button.

> Got an event worth capturing well?

**`photography.cta.text`** Supporting paragraph.

> Conferences, workshops, networking sessions, or a milestone that matters to you. I'd love to help you cover it.

**`photography.cta.button`** Button that opens the contact page.

> Let's talk

## Gallery pages

Path: `/photography/gallery/<slug>/` Source: `src/pages/photography/gallery/[slug].astro`

Each gallery has its own page at `/photography/gallery/<slug>/`. The page uses the gallery content file, so the copy below comes from `src/content/photography/`.

### Template copy

**`gallery.meta.title`** Browser tab title. `{gallery title}` is the gallery heading. The site title is appended.

> {gallery title} / Photography / Event Photography & Social Content \| Ash Chong

**`gallery.meta.description`** Meta description when the gallery has no summary or description.

> A photography gallery from Ash Chong.

**`gallery.hero.fallback`** Hero paragraph when the gallery has no description or summary.

> A set of highlights from this event.

**`gallery.delivered.heading`** Heading above the services list. Shown only when a gallery has services.

> What I delivered

**`gallery.google_photos_button`** Button shown when a gallery has a Google Photos link.

> View full gallery

**`gallery.related.eyebrow`** Small label above related galleries.

> Related work

**`gallery.related.heading`** Heading above related galleries.

> More event coverage

**`gallery.empty`** Shown when a gallery has no usable images.

> No images found for this gallery yet.

Gallery pages also use the shared [booking prompt](#booking-prompts) and the shared [photo cards](#photo-cards).

### Gallery content

Galleries are listed in the order of the All tab, by `featuredRank`. Hidden galleries are grouped at the end. A hidden gallery only appears in the curation view, which opens with the `?hidden=1` query parameter.

## Page: Videography

Path: `/videography/` Source: `src/pages/videography/index.astro`

### Metadata

**`video.meta.title`** Browser tab title.

> Event Videography Singapore \| Ash Chong

**`video.meta.description`** Meta description.

> Highlight films, interviews, and full speech recordings for conferences, company gatherings, and private celebrations in Singapore.

### Hero

**`video.hero.eyebrow`** Small label above the heading.

> Event video

**`video.hero.h1`** Main heading.

> Highlight films, interviews, and speeches

**`video.hero.p`** Paragraph under the heading.

> Video coverage for conferences, company gatherings, and private celebrations in Singapore.

### Featured film

The featured film uses the shared `shared.film.*` copy, without the "Explore event video" button.

**`video.role.heading`** Heading under the featured film.

> My role

**`video.role.text`** Paragraph describing your role on the film.

> I planned the coverage around the summit programme, then filmed the speakers, conversations, and atmosphere on the day. In the edit, I selected the moments that connected the sessions with the people in the room, shaping them into the finished highlight film. I handled the production from planning through to delivery.

### More event films

**`video.more.heading`** Heading above the film cards.

> More event films

**`video.more.film_1_title`** First film card title.

> The Retail Growth Playbook

**`video.more.film_1_description`** First film card description.

> A recap of the Airwallex and Singapore Retailers Association session on retail growth beyond Singapore, combining speaker perspectives with footage from the event.

**`video.more.film_2_title`** Second film card title.

> Beyond Borders

**`video.more.film_2_description`** Second film card description.

> An event recap featuring voices from Airwallex, SleekFlow, and ReturnHelper, alongside conversations from the e-commerce community.

### What would you like to capture?

**`video.scope.heading`** Heading above the three service descriptions.

> What would you like to capture?

**`video.scope.highlight_title`** First service title.

> Highlight films

**`video.scope.highlight_text`** First service description.

> Key moments, people, and atmosphere brought together in one edited film.

**`video.scope.interviews_title`** Second service title.

> Interviews

**`video.scope.interviews_text`** Second service description.

> Conversations with speakers, guests, or your team.

**`video.scope.speeches_title`** Third service title.

> Full speech recordings

**`video.scope.speeches_text`** Third service description.

> A complete recording of a presentation or speech for later viewing.

**`video.planning_note`** Closing paragraph about scope, turnaround, and revisions.

> We’ll agree the video length, filming format, turnaround, and revisions before booking. If you need horizontal and vertical versions, or photography alongside video, include that in your enquiry. Event video is delivered within 3–5 business days. Delivery within 1 business day or on the same day may be available by arrangement. Let’s discuss what you need before booking.

The page also uses the shared [booking process](#booking-process) and the shared [booking prompt](#booking-prompts) for video.

## Page: Social media

Path: `/content/` Source: `src/pages/content/index.astro`

### Metadata

**`social.meta.title`** Browser tab title. The site title is appended.

> Social media / Event Photography & Social Content \| Ash Chong

**`social.meta.description`** Meta description.

> Instagram and TikTok-ready social media content for brands, small businesses, and the events that matter to them.

### Hero

**`social.hero.eyebrow`** Small label above the heading.

> Social media

**`social.hero.h1`** Main heading.

> Reels for businesses and creators

**`social.hero.p`** Paragraph under the heading.

> Selected videos for Instagram and TikTok, including education, lifestyle, and property content.

### Category filters

**`social.filter.all`** Filter button.

> All

**`social.filter.corporate`** Filter button for `corporate` posts.

> Corporate

**`social.filter.lifestyle`** Filter button for `lifestyle` posts.

> Lifestyle

**`social.filter.real_estate`** Filter button for `real-estate` posts.

> Real estate

**`social.empty`** Shown when there are no published posts. The folder path is styled as code.

> Add content examples in src/content/content-work/.

### Packages and turnaround

Source: `src/pages/content/index.astro`

**`social.wtx.eyebrow`** Default label above the heading.

> What to expect

**`social.wtx.heading`** Section heading.

> Packages and turnaround

**`social.wtx.intro`** Section introduction.

> Start with one video, plan a campaign, or arrange regular content shoots.

**`social.wtx.pricing_label`** Row label.

> Pricing

**`social.wtx.pricing_value_1`** First pricing line.

> Single pieces: From \$350.

**`social.wtx.pricing_value_2`** Second pricing line.

> Campaign packages: From \$875 for multiple pieces for a launch or promotion.

**`social.wtx.pricing_value_3`** Third pricing line. The amount uses a thousands separator.

> Ongoing partnerships: From \$1,200 per month.

**`social.wtx.scope_label`** Row label.

> Monthly scope

**`social.wtx.scope_value`** Row value.

> A typical monthly scope covers up to 4 pieces across Instagram, TikTok, or LinkedIn, with 1 round of revisions per piece.

**`social.wtx.turnaround_label`** Row label.

> Turnaround

**`social.wtx.turnaround_value_1`** First turnaround line.

> A single video is delivered within 3 business days of filming.

**`social.wtx.turnaround_value_2`** Second turnaround line.

> Delivery within 1 business day or on the same day may be available by arrangement. Let’s discuss what you need before booking.

**`social.wtx.commitment_label`** Row label.

> Commitment

**`social.wtx.commitment_value`** Row value.

> Ongoing partnerships run month-to-month, with no lock-in contract.

### Post cards

Source: `src/content/content-work/`, `src/components/ContentEmbedGrid.astro`, `src/components/HomeSocialHighlights.astro`

Each post appears as a card on this page. The same title and the first sentence of the paragraph appear in the home page highlights. The card shows the title, the metrics, the summary paragraph, and a link to the original post.

**`social.card.link_instagram`** Link to the original Instagram post.

> Open Instagram post

**`social.card.link_tiktok`** Link to the original TikTok post.

> Open TikTok post

**`social.card.link_linkedin`** Link to the original LinkedIn post.

> Open LinkedIn post

### Post: General Assembly Singapore Skills Push

Card on `/content/` and the home page highlights. Platform: TikTok. Source: [`src/content/content-work/corporate-ga-ai-career-change-tiktok.mdx`](http://src/content/content-work/corporate-ga-ai-career-change-tiktok.mdx)

**`social.corporate-ga-ai-career-change-tiktok.title`** Card heading. Stored as `generatedTitle`.

> General Assembly Singapore Skills Push

**`social.corporate-ga-ai-career-change-tiktok.body`** Paragraph inside the card. This is the AI summary block when present.

> General Assembly Singapore’s short-form video speaks to working professionals facing AI disruption and career-change anxiety. It keeps the message grounded in practical upskilling. The TikTok reached 400k+ views and earned 500+ likes.

**`social.corporate-ga-ai-career-change-tiktok.metrics`** Metrics shown under the title.

> - 400k+ views  
> - 500+ likes

### Post: General Assembly Singapore Reskilling Campaign

Card on `/content/` and the home page highlights. Platform: TikTok. Source: [`src/content/content-work/corporate-ga-reskilling-tiktok.mdx`](http://src/content/content-work/corporate-ga-reskilling-tiktok.mdx)

**`social.corporate-ga-reskilling-tiktok.title`** Card heading. Stored as `generatedTitle`.

> General Assembly Singapore Reskilling Campaign

**`social.corporate-ga-reskilling-tiktok.body`** Paragraph inside the card. This is the AI summary block when present.

> General Assembly Singapore’s short-form video frames reskilling as a practical next step for Singapore professionals. It pairs clear messaging with a confident, credible tone. The video reached 500k+ views and earned 900+ likes.

**`social.corporate-ga-reskilling-tiktok.metrics`** Metrics shown under the title.

> - 500k+ views  
> - 900+ likes

### Post: Mother's Day with Chloe at Club21

Card on `/content/` and the home page highlights. Platform: Instagram. Source: [`src/content/content-work/lifestyle-chloe-mothers-day-club21.mdx`](http://src/content/content-work/lifestyle-chloe-mothers-day-club21.mdx)

**`social.lifestyle-chloe-mothers-day-club21.title`** Card heading.

> Mother's Day with Chloe at Club21

**`social.lifestyle-chloe-mothers-day-club21.body`** Paragraph inside the card. This is the AI summary block when present.

> Club21’s Mother’s Day video followed Chloe and her mom through a thoughtful shopping moment. The piece felt warm, personal, and brand-safe for the retail setting. It earned 3k+ likes and 35 comments on Instagram.

**`social.lifestyle-chloe-mothers-day-club21.summary`** Frontmatter summary. Used by the home social card when the post has no body.

> Mother's Day lifestyle video with Chloe and her mom shopping at Club21.

**`social.lifestyle-chloe-mothers-day-club21.metrics`** Metrics shown under the title.

> - 3k+ likes  
> - 35 comments

### Post: Grace Soh English Tips with Ace

Card on `/content/` and the home page highlights. Platform: Instagram. Source: [`src/content/content-work/lifestyle-grace-soh-english-idioms.mdx`](http://src/content/content-work/lifestyle-grace-soh-english-idioms.mdx)

**`social.lifestyle-grace-soh-english-idioms.title`** Card heading.

> Grace Soh English Tips with Ace

**`social.lifestyle-grace-soh-english-idioms.body`** Paragraph inside the card. This is the AI summary block when present.

> Grace Soh’s video turns English tips into creator-led lessons for her tutoring brand. Ace adds a playful touch while idioms, commonly confused words, and grammar tips stay easy to follow. The post earned 10k+ likes and 39 comments.

**`social.lifestyle-grace-soh-english-idioms.summary`** Frontmatter summary. Used by the home social card when the post has no body.

> Creative education-lifestyle video of GP English tutor and influencer Grace Soh with her cat Ace.

**`social.lifestyle-grace-soh-english-idioms.metrics`** Metrics shown under the title.

> - 10k+ likes  
> - 39 comments

### Post: Tanglin Mall Family Feature

Card on `/content/` and the home page highlights. Platform: Instagram. Source: [`src/content/content-work/lifestyle-tanglin-mall-family-feature.mdx`](http://src/content/content-work/lifestyle-tanglin-mall-family-feature.mdx)

**`social.lifestyle-tanglin-mall-family-feature.title`** Card heading.

> Tanglin Mall Family Feature

**`social.lifestyle-tanglin-mall-family-feature.body`** Paragraph inside the card. This is the AI summary block when present.

> Tanglin Mall is presented as a warm, family-friendly place for easy outings. The video follows her two kids and mom through playful activities around the mall. It keeps the atmosphere active, relaxed, and easy to picture visiting.

**`social.lifestyle-tanglin-mall-family-feature.summary`** Frontmatter summary. Used by the home social card when the post has no body.

> Featured lifestyle video for Tanglin Mall with family activity footage.

### Post: Sentosa Good Class Bungalow Showcase

Card on `/content/` and the home page highlights. Platform: Instagram. Source: [`src/content/content-work/real-estate-instagram-drwy4k9j-ug.mdx`](http://src/content/content-work/real-estate-instagram-drwy4k9j-ug.mdx)

**`social.real-estate-instagram-drwy4k9j-ug.title`** Card heading. Stored as `generatedTitle`.

> Sentosa Good Class Bungalow Showcase

**`social.real-estate-instagram-drwy4k9j-ug.body`** Paragraph inside the card. This is the AI summary block when present.

> A Sentosa Island Good Class Bungalow is framed as a rare Singapore trophy home. The video keeps the scale clear while preserving the ease of a social-first tour. Every shot leans into luxury, making the property feel immediate and memorable.

**`social.real-estate-instagram-drwy4k9j-ug.summary`** Frontmatter summary. Used by the home social card when the post has no body.

> Real estate social media example.

### Post: Resale vs New Launch Comparison

Card on `/content/` and the home page highlights. Platform: Instagram. Source: [`src/content/content-work/real-estate-instagram-dufolpsjwyy.mdx`](http://src/content/content-work/real-estate-instagram-dufolpsjwyy.mdx)

**`social.real-estate-instagram-dufolpsjwyy.title`** Card heading. Stored as `generatedTitle`.

> Resale vs New Launch Comparison

**`social.real-estate-instagram-dufolpsjwyy.body`** Paragraph inside the card. This is the AI summary block when present.

> The reel compares resale and new launch options for buyers weighing different needs. Clear pacing and clean sequencing keep the message sharp, while the polished edit gives the listing a more premium feel.

**`social.real-estate-instagram-dufolpsjwyy.summary`** Frontmatter summary. Used by the home social card when the post has no body.

> Real estate social media example.

### Post: Amber House District 15 Showcase Video

Card on `/content/` and the home page highlights. Platform: Instagram. Source: [`src/content/content-work/real-estate-instagram-duvxakajxvr.mdx`](http://src/content/content-work/real-estate-instagram-duvxakajxvr.mdx)

**`social.real-estate-instagram-duvxakajxvr.title`** Card heading. Stored as `generatedTitle`.

> Amber House District 15 Showcase Video

**`social.real-estate-instagram-duvxakajxvr.body`** Paragraph inside the card. This is the AI summary block when present.

> Amber House was presented as a fast, polished Instagram walkthrough of the new freehold condominium in District 15\. The edit keeps the unit’s convenience front and center. It closes with a clear invitation for interested buyers to contact the property agent.

**`social.real-estate-instagram-duvxakajxvr.summary`** Frontmatter summary. Used by the home social card when the post has no body.

> Real estate social media example.

## Page: Data (hidden)

Path: `/data/` Source: `src/pages/data/index.astro`

Hidden from navigation while `sections.data` is `false` in `src/lib/site.ts`.

### Metadata

**`data.meta.title`** Browser tab title. The site title is appended.

> Data / Event Photography & Social Content \| Ash Chong

**`data.meta.description`** Meta description.

> Data analyst project showcase with scalable project listings.

### Hero

**`data.hero.eyebrow`** Small label above the heading.

> Data analyst showcase

**`data.hero.h1`** Main heading.

> Analytics projects with business context.

**`data.hero.p`** Paragraph under the heading.

> A separate space for technical case studies, dashboards, methodology, and measurable outcomes.

### Project list

**`data.list.eyebrow`** Small label above the list heading.

> All published projects

**`data.list.heading`** List heading.

> Technical proof of work.

**`data.list.description`** List introduction.

> Add more projects through Markdown or MDX files; this page keeps expanding automatically.

**`data.card.eyebrow_fallback`** Eyebrow on a project card when the project has no tools.

> Data project

**`data.card.summary_fallback`** Summary on a project card when the project has no summary.

> A practical analytics project with business context.

### Page call to action

**`data.cta.heading`** Heading above the contact button.

> Interested in the technical side?

**`data.cta.text`** Supporting paragraph.

> Contact me for analytics, automation, or portfolio-related collaborations.

**`data.cta.button`** Button that opens the contact page.

> Contact me

### Project page template

Source: `src/pages/data/project/[slug].astro`

**`project.meta.title`** Browser tab title. `{project title}` is the project heading. The site title is appended.

> {project title} / Data / Event Photography & Social Content \| Ash Chong

**`project.meta.description_fallback`** Meta description when the project has no summary.

> Data analyst project.

**`project.hero.eyebrow_fallback`** Eyebrow above the project heading when the project has no tools.

> Data project

**`project.hero.summary_fallback`** Paragraph under the project heading when the project has no summary.

> A practical analytics project with business context.

**`project.overview.eyebrow`** Label above the overview block.

> Project overview

**`project.github_button`** Button shown when the project has a GitHub link.

> GitHub

**`project.demo_button`** Button shown when the project has a demo link.

> Live demo

### Project: Photography Revenue Dashboard

Page: `/data/project/photo-business-dashboard/` Source: [`src/content/data-projects/photo-business-dashboard.mdx`](http://src/content/data-projects/photo-business-dashboard.mdx)

**`data.photo-business-dashboard.title`** Page heading and project card title.

> Photography Revenue Dashboard

**`data.photo-business-dashboard.summary`** Summary under the heading and in the overview block.

> A dashboard for tracking photography leads, client segments, monthly revenue, and repeat bookings.

**`data.photo-business-dashboard.tools`** Eyebrow above the heading and on the project card. Only the first two tools are shown, joined by a slash.

> Python / Pandas

**`data.photo-business-dashboard.metrics`** Metrics in the overview block.

> - 4 Client segments tracked  
> - 12 Monthly views  
> - 1 Operating dashboard

**`data.photo-business-dashboard.body`** Body copy. Markdown headings and paragraphs render as written.

\#\# Problem

I needed a clearer way to understand which photography clients and event types generated the strongest effective hourly income.

\#\# Method

The workflow cleans monthly gig data, categorizes clients, and calculates revenue by segment, project type, and repeat-booking potential.

\#\# Result

The dashboard helps identify that corporate events and recurring production partners produce the strongest income per hour.

### Project: Event Lead Tracker

Page: `/data/project/event-lead-tracker/` Source: [`src/content/data-projects/event-lead-tracker.mdx`](http://src/content/data-projects/event-lead-tracker.mdx)

**`data.event-lead-tracker.title`** Page heading and project card title.

> Event Lead Tracker

**`data.event-lead-tracker.summary`** Summary under the heading and in the overview block.

> A lightweight lead-tracking concept for event agencies, production partners, and repeat corporate enquiries.

**`data.event-lead-tracker.tools`** Eyebrow above the heading and on the project card. Only the first two tools are shown, joined by a slash.

> TypeScript / Airtable

**`data.event-lead-tracker.metrics`** Metrics in the overview block.

> - 3 Lead stages  
> - 2 Automation paths  
> - 1 Follow-up queue

**`data.event-lead-tracker.body`** Body copy. Markdown headings and paragraphs render as written.

\#\# Problem

Freelance enquiries can become messy when they arrive through WhatsApp, email, Instagram, and referrals at the same time.

\#\# Method

This concept normalizes leads into a simple pipeline, tags source quality, and creates reminders for follow-up.

\#\# Result

The tracker gives a clearer view of which sources produce real work and which ones mostly consume time.

## Page: Contact

Path: `/contact/` Source: `src/pages/contact.astro`

### Metadata

**`contact.meta.title`** Browser tab title. The site title is appended.

> Contact / Event Photography & Social Content \| Ash Chong

**`contact.meta.description`** Meta description.

> Contact Ash for event photography, event video, and social media content enquiries in Singapore.

### Hero

**`contact.hero.h1`** Main heading.

> Let’s work together

**`contact.hero.lede`** Paragraph under the heading.

> Enquire about photography, video, or social media content.

**`contact.whatsapp_button`** WhatsApp button. The arrow is decorative markup.

> Chat on WhatsApp

### Enquiry form

**`contact.form.heading`** Form heading.

> Send an enquiry

**`contact.form.name_label`** Name field label.

> Your name

**`contact.form.email_label`** Email field label.

> Contact email

**`contact.form.phone_label`** Phone field label.

> Phone number

**`contact.form.phone_placeholder`** Placeholder in the phone field.

> Include country code, e.g. \+65

**`contact.form.service_label`** Service field label.

> What would you like to book?

**`contact.form.service_placeholder`** Disabled first option in the service field.

> Select a service

**`contact.form.service_photography`** Service option.

> Photography

**`contact.form.service_video`** Service option.

> Video

**`contact.form.service_both`** Service option.

> Photography \+ video

**`contact.form.service_social`** Service option.

> Social media content

**`contact.form.timing_label`** Timing field label.

> When do you need it?

**`contact.form.timing_hint`** Hint under the timing label.

> Event date or delivery timeline; an estimate is fine.

**`contact.form.budget_label`** Budget field label.

> Estimated budget (SGD)

**`contact.form.budget_hint`** Hint under the budget label.

> Total project budget, or monthly for ongoing social content.

**`contact.form.budget_placeholder`** Disabled first option in the budget field.

> Select a budget

**`contact.form.budget_600`** Budget option.

> S\$600–999

**`contact.form.budget_1000`** Budget option.

> S\$1,000–1,499

**`contact.form.budget_1500`** Budget option.

> S\$1,500–2,499

**`contact.form.budget_2500`** Budget option.

> S\$2,500–4,999

**`contact.form.budget_5000`** Budget option.

> S\$5,000+

**`contact.form.budget_other`** Budget option.

> Other / I’d like a recommendation

**`contact.form.message_label`** Message field label.

> Tell me more about your project

**`contact.form.message_hint`** Hint under the message label.

> Describe your event or project, where it will take place, and what you’d like me to capture or create.

**`contact.form.submit`** Submit button.

> Send enquiry

**`contact.form.sending_status`** Status line while the form submits.

> Sending your enquiry…

**`contact.form.sending_button`** Submit button label while the form submits.

> Sending…

**`contact.form.error`** Error message when submission fails. The email address is a link.

> Couldn’t send your enquiry. Your details are still here—please try again or email me.

**`contact.success.title`** Heading in the success dialog.

> Your enquiry has been sent

**`contact.success.body`** Body text in the success dialog.

> Thank you for getting in touch. I’ll review your enquiry and respond within 24 hours.

**`contact.success.button`** Button that closes the success dialog.

> Done

### Email alternative

**`contact.email_line`** Line under the form with the email link.

> You can also email me at [ashchong138@gmail.com](mailto:ashchong138@gmail.com).

## Shared sections

These blocks appear on more than one page. Edit them once here.

### Featured event film

Source: `src/lib/site.ts`, `src/components/EventFilmFeature.astro`

**`shared.film.label`** Small label above the film title.

> Featured event film

**`shared.film.title`** First line of the film title.

> Airwallex x Ecom North.

**`shared.film.title_line_two`** Second line of the film title.

> Built to Scale.

**`shared.film.description`** Paragraph under the film title.

> A highlight film from the Airwallex × Ecom North Singapore Summit, bringing together speaker sessions, conversations, and moments from the event.

**`shared.film.linkedin_button`** Button that opens the original LinkedIn post.

> View LinkedIn post

**`shared.film.explore_button`** Button shown on the home page only.

> Explore event video

### Testimonials

Source: `src/components/TestimonialsSection.astro`, `src/content/testimonials/`

**`shared.testimonials.eyebrow`** Small label above the heading.

> Client feedback

**`shared.testimonials.heading`** Section heading.

> What clients say

**`shared.testimonials.cta_text`** Line above the button. Shown on the photography page. The home page and the social media page hide it.

> Planning an event or content shoot? Let’s create something worth remembering.

**`shared.testimonials.cta_button`** Button in the testimonials section.

> Work with me

The section shows the three published testimonials with the lowest `rank`. Their copy is below.

### Testimonial: Gracia G.

Shown on the site: yes. Rank 1\. Source: [`src/content/testimonials/gracia-right-company.md`](http://src/content/testimonials/gracia-right-company.md)

**`testimonials.gracia-right-company.quote`** Quote text in the testimonial card.

> I have worked with Ash on several occasions and the work he produces has always been of high standard. He is meticulous in his craft and is always prepared for the photoshoot. I would definitely recommend engaging Ash for your photography needs\!

**`testimonials.gracia-right-company.highlight`** Phrase inside the quote that renders in bold.

> meticulous in his craft and is always prepared for the photoshoot

**`testimonials.gracia-right-company.name`** Name under the quote.

> Gracia G.

**`testimonials.gracia-right-company.role`** Role under the name.

> Managing Director of The Right Company

### Testimonial: Wani M.

Shown on the site: yes. Rank 2\. Source: [`src/content/testimonials/wani-curly-beans.md`](http://src/content/testimonials/wani-curly-beans.md)

**`testimonials.wani-curly-beans.quote`** Quote text in the testimonial card.

> Ash has been a fantastic content creator to work with. He quickly understood our brand and consistently came up with creative, engaging reel ideas that felt authentic to Curly Beans. The content he produced helped us achieve strong engagement on all of our social media platforms. We highly recommend Ash to any business looking to grow its social media presence.

**`testimonials.wani-curly-beans.highlight`** Phrase inside the quote that renders in bold.

> strong engagement on all of our social media platforms

**`testimonials.wani-curly-beans.name`** Name under the quote.

> Wani M.

**`testimonials.wani-curly-beans.role`** Role under the name.

> Founder of Curly Beans

### Testimonial: Shilpa S. N.

Shown on the site: yes. Rank 3\. Source: [`src/content/testimonials/shilpa-women-in-ai.md`](http://src/content/testimonials/shilpa-women-in-ai.md)

**`testimonials.shilpa-women-in-ai.quote`** Quote text in the testimonial card.

> Ash was a pleasure to work with from start to finish. He was professional, thoughtful and blended naturally into the event while capturing the moments that truly mattered. The final images beautifully reflected the energy and connections within our community. I would happily recommend him to anyone looking for an event photographer who understands storytelling.

**`testimonials.shilpa-women-in-ai.highlight`** Phrase inside the quote that renders in bold.

> beautifully reflected the energy and connections within our community

**`testimonials.shilpa-women-in-ai.name`** Name under the quote.

> Shilpa S. N.

**`testimonials.shilpa-women-in-ai.role`** Role under the name. The line break is intentional.

Founder, Women in AI Singapore

Foundation Lead, AI Verify Foundation

### Booking process

Source: `src/components/BookingProcess.astro`

**`shared.booking.heading`** Section heading.

> How booking works

**`shared.booking.step_1_title`** First step title.

> Share your plans

**`shared.booking.step_1_text`** First step description.

> Tell me your date, venue, and the coverage you need.

**`shared.booking.step_2_title`** Second step title.

> Confirm the details

**`shared.booking.step_2_text`** Second step description.

> We’ll confirm the scope, deliverables, fee, and delivery schedule before booking.

**`shared.booking.step_3_title`** Third step title.

> On the day

**`shared.booking.step_3_text`** Third step description.

> I’ll photograph or film the agreed brief, following your programme and priorities.

**`shared.booking.step_4_title`** Fourth step title.

> Receive your work

**`shared.booking.step_4_text`** Fourth step description.

> I’ll deliver the agreed photographs or video.

### Booking prompts

Source: `src/components/BookingPrompt.astro`

**`shared.prompt.photography_heading`** Heading on photography gallery pages.

> Planning an event?

**`shared.prompt.photography_text`** Paragraph on photography gallery pages.

> Tell me your date, venue, and coverage requirements.

**`shared.prompt.photoshoot_heading`** Heading on photoshoot gallery pages.

> Planning a photoshoot?

**`shared.prompt.photoshoot_text`** Paragraph on photoshoot gallery pages.

> Tell me what you have in mind and when you'd like to shoot.

**`shared.prompt.video_heading`** Heading on the video page.

> Planning event video coverage?

**`shared.prompt.video_text`** Paragraph on the video page.

> Tell me your date, venue, and what you want the finished video to cover.

**`shared.prompt.button`** Button in every prompt.

> Contact me

### Contact section

Source: `src/components/ContactSection.astro`

**`shared.contact.eyebrow`** Small label above the heading.

> Get in touch

**`shared.contact.heading`** Section heading.

> What are you planning?

**`shared.contact.text`** Paragraph under the heading.

> Tell me your date, location, and what you need. I’ll let you know my availability and we can discuss the details.

**`shared.contact.button`** Button that opens the contact page.

> Contact me

### Photo cards

Source: `src/components/WorkCard.astro`, `src/lib/content.ts`

**`shared.work_card.summary_fallback`** Summary on a gallery card when the gallery has no card summary, summary, or description.

> A set of highlights from this shoot.

**`shared.work_card.category_corporate`** Category label on the card.

> Corporate & private events

**`shared.work_card.category_stage`** Category label on the card.

> Stage work

**`shared.work_card.category_photoshoot`** Category label on the card.

> Photoshoot

**`shared.work_card.category_wedding`** Category label on the card.

> Wedding & ROM

The `F{featuredRank} · C{categoryRank}` badge on each card is generated from the gallery frontmatter, not written copy.

### Interface labels

Source: `src/components/ProgressiveList.astro`, `src/components/Lightbox.astro`

**`shared.ui.view_more`** Button that reveals more cards.

> View more

**`shared.ui.lightbox_close`** Visible close button in the image lightbox.

> Close

**`shared.ui.empty_gallery`** Shown when a gallery has no images.

> No images found for this gallery yet.

## Design preview: /preview/airwallex/

Path: `/preview/airwallex/` Source: `src/pages/preview/airwallex.astro`

This page is a standalone design preview. It is not linked from navigation or any other page. It also renders the shared featured film, which uses the [`shared.film.*`](#featured-event-film) copy.

**`preview.meta.title`** Browser tab title.

> Airwallex x Ecom North event film

**`preview.meta.description`** Meta description.

> Standalone design preview for an Airwallex corporate event-film section.

**`preview.hero.eyebrow`** Small label above the heading.

> Standalone design preview

**`preview.hero.h1`** Main heading. The arrow starts the second line.

Homepage teaser

→ inline event film

**`preview.hero.text`** Paragraph under the heading.

> A clear editorial handoff from social-content work into event videography. Use the play control to watch the film without leaving the page.

**`preview.context.eyebrow`** Small label above the mock social cards.

> Homepage context

**`preview.context.text`** Line beside the label.

> Social content stays first. The film appears as a distinct supporting capability.

**`preview.mock.corporate_label`** Label on the first mock card.

> Corporate

**`preview.mock.corporate_title`** Title on the first mock card. The line break is intentional.

Short-form

campaign

**`preview.mock.corporate_metric`** Metric on the first mock card.

> 500k+ views

**`preview.mock.lifestyle_label`** Label on the second mock card.

> Lifestyle

**`preview.mock.lifestyle_title`** Title on the second mock card. The line break is intentional.

Creator-led

storytelling

**`preview.mock.lifestyle_metric`** Metric on the second mock card.

> 10k+ likes

**`preview.mock.property_label`** Label on the third mock card.

> Real estate

**`preview.mock.property_title`** Title on the third mock card. The line break is intentional.

Social-first

showcase

**`preview.mock.property_metric`** Metric on the third mock card.

> Vertical video

**`preview.notes.eyebrow`** Small label above the closing note.

> What this pattern solves

**`preview.notes.heading`** Closing note heading.

> The social page stays focused. The film gets its own frame.

**`preview.notes.text`** Closing note paragraph.

> The dark section creates a deliberate change of pace after the social reels. The headline establishes the event context first, then the wide film gives visitors a direct way to experience the work.

## Values that are not prose

These values render as copy on the site but live in code or content data. Edit them at the source shown.

### Pricing

Source: `src/lib/site.ts`

- `pricing.photography.halfDay`: 600, rendered as "From \$600."  
- `pricing.photography.fullDay`: 1400, rendered as "From \$1,400."  
- `pricing.content.single`: 350, rendered as "From \$350."  
- `pricing.content.campaign`: 875, rendered as "From \$875."  
- `pricing.content.retainer`: 1200, rendered as "From \$1,200 per month."

### Generated values

- Footer copyright year: `new Date().getFullYear()`.  
- Gallery card rank badge: `F{featuredRank} · C{categoryRank}`.  
- Gallery count and ordering: from `featuredRank`, `categoryRank`, and `publishStatus`.  
- Social metrics: `value` and `label` pairs in each post file.  
- Project metrics: `value` and `label` pairs in each project file.  
- Contact email address: `ashchong138@gmail.com`, repeated in the error message and the email line.

