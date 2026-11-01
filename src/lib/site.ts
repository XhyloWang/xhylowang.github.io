const whatsappMessage = `Hi Xhylo, I’d like to enquire about a project.

Service needed:
Date or timeframe:
Location:
Requirements:

Could you let me know your availability?`;

export const site = {
  name: "Xhylo",
  title: "Event Photography & Videography | Xhylo",
  description:
    "Corporate event photography and videography for businesses and brands in Singapore.",
  email: "xhylowang@gmail.com",
  whatsapp: "+65 9695 2283",
  whatsappUrl: `https://wa.me/6596952283?text=${encodeURIComponent(whatsappMessage)}`
};

export const featuredEventFilm = {
  videoId: "SndciZ1MDzE",
  posterUrl: "/images/jeremy-monteiro-soul-mates.jpg",
  linkedinUrl: "",
  label: "Featured film",
  title: "Jeremy Monteiro:",
  titleLineTwo: "Soul Mates.",
  description:
    "A music film of Jeremy Monteiro’s Soul Mates, built around the performance and the interplay between the musicians."
} as const;

export const pricing = {
  photography: {
    halfDay: 600,
    fullDay: 1400
  },
  content: {
    single: 350,
    campaign: 875,
    retainer: 1200
  }
};

// Master switch: flip a section to `false` to hide it from the navbar, footer
// sitemap, home page, and sitemap.xml. The page itself still resolves if
// visited directly (soft-hide), so no routing changes are needed.
export const sections = {
  photography: true,
  videography: true,
  content: false, // Social media page is built and hidden until Xhylo has real posts.
  caseStudy: false, // Reserved toggle for a featured case study inside /content/.
  data: false
} satisfies Record<string, boolean>;

const allNavItems = [
  { id: "photography", href: "/photography/", label: "Photography" },
  { id: "videography", href: "/videography/", label: "Videography" },
  { id: "content", href: "/content/", label: "Social media" },
  { id: "data", href: "/data/", label: "Data" },
  { id: "contact", href: "/contact/", label: "Contact" }
] as const;

export const navItems = allNavItems.filter((item) => sections[item.id as keyof typeof sections] ?? true);
