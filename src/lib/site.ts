// TODO(xinhang): replace every placeholder value in this file before publishing.
const whatsappMessage = `Hi Xinhang, I’d like to enquire about a project.

Service needed:
Date or timeframe:
Location:
Requirements:

Could you let me know your availability?`;

export const site = {
  name: "Xinhang",
  title: "Photography & Videography | Xinhang",
  description:
    "Photography and videography for corporate events, private celebrations, and creative shoots in Singapore. Placeholder description for the new site.",
  email: "hello@example.com",
  whatsapp: "+65 0000 0000",
  whatsappUrl: `https://api.whatsapp.com/send/?phone=6500000000&text=${encodeURIComponent(whatsappMessage)}&type=phone_number&app_absent=0`
};

// TODO(xinhang): set videoId to Xinhang’s featured YouTube film. The play
// control stays hidden while videoId is empty.
export const featuredEventFilm = {
  videoId: "",
  posterUrl: "/images/placeholders/event-film-poster.webp",
  linkedinUrl: "https://www.linkedin.com/",
  label: "Featured event film",
  title: "Placeholder film title.",
  titleLineTwo: "Replace this copy.",
  description: "Placeholder description for the featured event film."
} as const;

// TODO(xinhang): set Xinhang’s rates. These are placeholder figures.
export const pricing = {
  photography: {
    halfDay: 500,
    fullDay: 1000
  },
  content: {
    single: 300,
    campaign: 750,
    retainer: 1000
  }
};

// Master switch: flip a section to `false` to hide it from the navbar, footer
// sitemap, home page, and sitemap.xml. The page itself still resolves if
// visited directly (soft-hide), so no routing changes are needed.
export const sections = {
  photography: true,
  video: true,
  content: false, // Social media page is built and hidden until Xinhang has real posts.
  caseStudy: false, // Reserved toggle for a featured case study inside /content/.
  data: false
} satisfies Record<string, boolean>;

const allNavItems = [
  { id: "photography", href: "/photography/", label: "Photography" },
  { id: "video", href: "/videography/", label: "Event video" },
  { id: "content", href: "/content/", label: "Social media" },
  { id: "data", href: "/data/", label: "Data" },
  { id: "contact", href: "/contact/", label: "Contact" }
] as const;

export const navItems = allNavItems.filter((item) => sections[item.id as keyof typeof sections] ?? true);
