export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  description: string;
  perfectFor?: string[];
  cta: string;
  image: string;
  banner?: string;
  featured?: boolean;
  perfectForImage?: string;
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;

export const flagshipServices: ServiceItem[] = [
  {
    slug: "beach-wedding-dubai",
    title: "Luxury Beach Weddings",
    short: "White sands, sunset vows, and luxury Arabian Gulf celebrations.",
    description:
      "Create an unforgettable luxury beach wedding in Dubai with private beachfront venues, elegant styling, sunset views, and bespoke planning by the sea.",
    perfectFor: [
      "Sunset beach ceremonies",
      "Destination weddings",
      "Outdoor weddings",
      "Luxury beachfront celebrations",
    ],
    cta: "Explore Luxury Beach Weddings",
    image: "/service-images/lb-wedding.webp",
    perfectForImage: "/service-images/beach-wedding-1.webp",
    banner: "/service-images/LBW-COVER.webp",
  },
  {
    slug: "desert-wedding-dubai",
    title: "Desert Weddings",
    short: "Golden dunes, Arabian hospitality, and cinematic sunsets.",
    description:
      "Plan a breathtaking desert wedding in Dubai surrounded by golden dunes, sunset views, Arabian-inspired hospitality, and a private luxury setting.",
    perfectFor: [
      "Couples dreaming of a romantic Luxury Desert Wedding surrounded by the golden dunes and breathtaking Arabian landscapes.",
      "Those looking for an unforgettable celebration with elegant desert styling, personalised Wedding Decoration Dubai, and timeless traditions.",
      "Destination couples planning a unique wedding experience across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE.",
      "Brides and grooms who love intimate ceremonies, spectacular sunsets, and unforgettable starlit celebrations.",
      "Couples seeking professional Wedding Planning Services with a dedicated Wedding Coordinator to thoughtfully bring every detail together.",
      "Anyone wanting a private, luxurious wedding that blends natural beauty, refined elegance, and authentic Arabian charm.",
    ],
    cta: "Explore Desert Weddings",
    image: "/service-images/A4-E4.webp",
    perfectForImage: "/service-images/dw2.webp",
    banner: "/service-images/DW3.webp",
  },
  {
    slug: "intimate-elopements",
    title: "Intimate Elopements & Micro Weddings",
    short: "Small guest lists, meaningful moments, and personal celebrations.",
    description:
      "Celebrate with just the two of you or your closest loved ones through a carefully planned intimate elopement or micro wedding in the UAE.",
    perfectFor: [
      "Romantic elopements",
      "Small wedding celebrations",
      "Destination weddings",
      "Outdoor ceremonies",
    ],
    cta: "Explore Intimate Weddings",
    image: "/service-images/int-elo.webp",
    perfectForImage: "/decor/ie1.webp",
    banner: "/service-images/int-cover.webp",
  },
  {
    slug: "civil-weddings-uae",
    title: "Civil Weddings",
    short: "Legally recognised ceremonies, beautifully celebrated.",
    description:
      "Make your UAE civil wedding simple and memorable with elegant ceremony planning, intimate receptions, and complete post-ceremony celebration support.",
    perfectFor: [
      "UAE residents",
      "International couples",
      "Legally recognised civil marriages",
      "Celebration planning after your ceremony",
    ],
    cta: "Explore Civil Weddings",
    image: "/service-images/civil-i.webp",
    perfectForImage: "/service-images/civil-p.webp",
    banner: "/service-images/civil-b.webp",
  },
  {
    slug: "luxury-hotel-weddings",
    title: "Luxury Hotel Weddings",
    short: "Five-star ballrooms, waterfront hotels, and grand celebrations.",
    description:
      "Plan a sophisticated luxury hotel wedding in Dubai or across the UAE, from elegant ballrooms to spectacular waterfront venues.",
    perfectFor: [
      "Luxury weddings",
      "Grand ballroom celebrations",
      "Destination weddings",
      "Multi-day wedding celebrations",
    ],
    cta: "Explore Luxury Hotel Weddings",
    image: "/service-images/lhw-i.webp",
    perfectForImage: "/service-images/lhw-p.webp",
    banner: "/service-images/lhw-b.webp",
  },
  {
    slug: "emirati-gcc-weddings",
    title: "Emirati & GCC Weddings",
    short: "Elegant Gulf traditions, luxury hospitality, and timeless celebrations.",
    description:
      "Experience elegant Emirati and GCC weddings in Dubai with bespoke wedding planning services that honour local traditions, cultural customs, and refined luxury. From traditional Zaffa processions and Majlis settings to exceptional hospitality and personalised décor, we create unforgettable celebrations across the UAE.",
    perfectFor: [
      "Couples planning Emirati weddings in Dubai and the UAE",
      "Families hosting traditional Arabic and GCC weddings",
      "Saudi, Kuwaiti, Qatari, Bahraini, and Omani celebrations",
      "Couples seeking Majlis styling, Zaffa entrances, and cultural hospitality",
      "Multi-day family weddings with premium décor and coordination",
      "Anyone wanting a refined, traditional, and memorable GCC wedding experience",
    ],
    cta: "Explore Emirati & GCC Weddings",
    image: "/service-images/emirati.webp",
  },
  {
    slug: "south-asian-weddings",
    title: "South Asian Weddings",
    short: "Multi-day celebrations filled with colour, culture, and unforgettable traditions.",
    description:
      "Celebrate luxurious South Asian weddings in Dubai with bespoke wedding planning designed around your culture, traditions, and family celebrations. From Mehndi and Sangeet to Pheras, Walima, and grand receptions, we deliver seamless multi-day wedding experiences across the UAE.",
    perfectFor: [
      "Couples planning South Asian weddings in Dubai and the UAE",
      "Families hosting Indian, Pakistani, Bangladeshi, Sri Lankan, Nepali, or multicultural celebrations",
      "Multi-day weddings featuring Mehndi, Sangeet, Nikah, Pheras, Walima, and receptions",
      "Families seeking full hotel buyouts for private celebrations and guest accommodation",
      "Couples wanting cultural décor, traditional entertainment, premium catering, and personalised hospitality",
      "Anyone dreaming of a vibrant, elegant, and unforgettable South Asian wedding experience",
    ],
    cta: "Explore South Asian Weddings",
    image: "/service-images/saw-i.webp",
    banner: "/service-images/saw-b.webp",
  },
];

export const culturalServices: ServiceItem[] = [
  {
    slug: "yacht-marina-weddings",
    title: "Yacht & Marina Weddings",
    short: "Private yachts, marina views, and luxury celebrations on the water.",
    description:
      "Host an unforgettable yacht or marina wedding in Dubai with private vessels, waterfront settings, bespoke décor, fine dining, and seamless guest experiences.",
    perfectFor: [
      "Couples planning yacht weddings in Dubai and the UAE",
      "Brides and grooms seeking private ceremonies with sea and skyline views",
      "Families hosting intimate celebrations, marina receptions, or luxury onboard events",
      "Couples looking for Dubai Marina wedding packages and private yacht rentals",
      "Those wanting bespoke décor, onboard catering, entertainment, and guest coordination",
      "Anyone dreaming of an elegant, exclusive, and unforgettable waterfront wedding experience",
    ],
    cta: "Explore Yacht & Marina Weddings",
    image: "/service-images/yacht-i.webp",
    banner: "/service-images/yacht-b.webp",
  },
  {
    slug: "garden-weddings",
    title: "Garden Weddings",
    short: "Lush greenery, floral styling, and elegant open-air celebrations.",
    description:
      "Create a romantic garden wedding surrounded by greenery, elegant floral styling, ambient lighting, and a beautifully designed outdoor setting.",
    perfectFor: [
      "Romantic garden ceremonies",
      "Floral wedding concepts",
      "Outdoor receptions",
      "Daytime celebrations",
    ],
    cta: "Explore Garden Weddings",
    image: "/service-images/gard-i.webp",
    banner: "/service-images/gard-b.webp",
  },
  {
    slug: "outdoor-weddings",
    title: "Outdoor Weddings",
    short: "Open-air ceremonies designed around your location and vision.",
    description:
      "Plan a bespoke outdoor wedding in the UAE with complete venue planning, weather preparation, guest comfort solutions, décor, production, and logistics.",
    perfectFor: [
      "Couples dreaming of a luxury outdoor wedding in Dubai or the UAE",
      "Brides and grooms who love beaches, deserts, gardens, terraces, waterfronts, or their own backyard",
      "Couples wanting to enjoy the UAE’s cool winter breeze during an open-air celebration",
      "Intimate ceremonies, grand receptions, and relaxed family gatherings",
      "Couples seeking bespoke décor, scenic surroundings, and personalised styling",
      "Those wanting complete planning, guest comfort, and weather-ready coordination",
    ],
    cta: "Explore Outdoor Weddings",
    image: "/service-images/ow-i.webp",
    banner: "/service-images/ow-b.webp",
  },
  {
    slug: "destination-weddings",
    title: "Destination Weddings",
    short: "Complete wedding experiences for couples and guests travelling to the UAE.",
    description:
      "Plan a seamless destination wedding in Dubai or across the UAE with venue sourcing, guest travel, accommodation, hospitality, logistics, and complete event coordination.",
    perfectFor: [
      "Couples planning a destination wedding in Dubai or the UAE",
      "International couples seeking luxury venues, exceptional hospitality, and iconic settings",
      "Families hosting multi-day celebrations with guests travelling from different countries",
      "Couples wanting beach, desert, hotel, garden, yacht, or city-view wedding venues",
      "Those looking for complete travel, accommodation, guest, décor, and event coordination",
      "Couples drawn to the UAE’s growing reputation as a leading global wedding destination",
      "Anyone dreaming of a warm, elegant, and unforgettable luxury destination wedding experience",
    ],
    cta: "Explore Destination Weddings",
    image: "/service-images/destw-i.webp",
    banner: "/service-images/destw-b.webp",
  },
];

export interface CustomOffering {
  title: string;
  description: string;
  featured?: boolean;
}

export const customOfferings: CustomOffering[] = [
  {
    title: "End-to-End Wedding Planning",
    description:
      "From the first consultation to the final farewell, we manage every detail of your wedding, ensuring a seamless, stress-free, and beautifully executed celebration.",
  },
  {
    title: "Entertainment Experiences",
    description:
      "We curate DJs, live performers, artists, celebrities, traditional acts, and memorable bride and groom entry concepts with music, lighting, choreography, and special effects.",
  },
  {
    title: "Venue, Décor & Styling",
    description:
      "We help source the perfect venue and transform it with elegant décor, floral styling, stage design, table settings, and theme-based concepts tailored to your vision.",
  },
  {
    title: "Milestone Celebrations",
    description:
      "Celebrate life's special milestones with customized experiences designed for lasting memories in the UAE.",
  },
  {
    title: "Luxury Private Parties",
    description:
      "From renting out luxury yachts or private islands, exclusive poolside celebrations, desert soirées, contemporary galleries, to private jets — we transform extraordinary venues into unforgettable celebrations tailored to your style.",
  },
  {
    title: "Audio-Visual & Lighting Solutions",
    description:
      "Advanced audio-visual systems, intelligent lighting, LED screens, and sound engineering for immersive wedding experiences.",
  },
  {
    title: "Drone Light Shows & Fireworks",
    description:
      "Create an unforgettable grand entrance or finale with breathtaking aerial spectacles and synchronized moments that leave every guest amazed.",
  },
  {
    title: "Makeup & Henna Artists",
    description:
      "Our trusted beauty professionals ensure every member of your celebration feels confident, camera-ready, and beautifully prepared for the big day — bride, friends and family.",
  },
  {
    title: "AI Technology",
    description:
      "Elevate your wedding with e-invitations, QR guest experiences, AI photo booths, robots, live streaming, language translators, and virtual access for family and friends.",
  },
  {
    title: "Guest Hospitality & RSVP",
    description:
      "From invitations and RSVP tracking to welcome services, seating plans, guest assistance, and family coordination, we ensure every guest feels cared for.",
  },
  {
    title: "Wedding Catering & Production",
    description:
      "We coordinate catering, menu planning, lighting, sound, LED screens, photography, videography, and technical setup to deliver a complete wedding experience.",
    featured: true,
  },
];

export const allServices: ServiceItem[] = [...flagshipServices, ...culturalServices];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find((s) => s.slug === slug);
}

// Shared CTA metadata used by both the /services overview and the
// /wedding-services/$slug detail page.
export interface ServiceCta {
  viewLabel: string;
  ctaLabel: string;
  contactType: string;
}

export const serviceCtaMeta: Record<string, ServiceCta> = {
  "beach-wedding-dubai": {
    viewLabel: "View Luxury Beach Wedding",
    ctaLabel: "Start Planning Your Luxury Beach Wedding",
    contactType: "Luxury Beach Wedding",
  },
  "desert-wedding-dubai": {
    viewLabel: "View Desert Wedding",
    ctaLabel: "Begin Your Desert Wedding Journey",
    contactType: "Desert Wedding",
  },
  "intimate-elopements": {
    viewLabel: "View Intimate Weddings",
    ctaLabel: "Plan My Elopement",
    contactType: "Elopement / Micro Wedding",
  },
  "civil-weddings-uae": {
    viewLabel: "View Civil Weddings",
    ctaLabel: "Start My Civil Wedding",
    contactType: "Civil Wedding",
  },
  "luxury-hotel-weddings": {
    viewLabel: "View Luxury Hotel Wedding",
    ctaLabel: "Plan My Luxury Hotel Wedding",
    contactType: "Luxury Hotel Wedding",
  },
  "yacht-marina-weddings": {
    viewLabel: "View Yacht & Marina Wedding",
    ctaLabel: "Plan My Yacht & Marina Wedding",
    contactType: "Yacht / Marina Wedding",
  },
  "garden-weddings": {
    viewLabel: "View Garden Wedding",
    ctaLabel: "Plan My Garden Wedding",
    contactType: "Garden Wedding",
  },
  "outdoor-weddings": {
    viewLabel: "View Outdoor Wedding",
    ctaLabel: "Plan My Outdoor Wedding",
    contactType: "Outdoor Wedding",
  },
  "destination-weddings": {
    viewLabel: "View Destination Wedding",
    ctaLabel: "Plan My Destination Wedding",
    contactType: "Destination Wedding",
  },
};

export function getServiceCta(slug: string): ServiceCta | undefined {
  return serviceCtaMeta[slug];
}
