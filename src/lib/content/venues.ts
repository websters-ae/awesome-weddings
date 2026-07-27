export interface VenueCategory {
  slug: string;
  title: string;
  cta: string;
  image: string;
}

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=70`;

export const venueCategories: VenueCategory[] = [
  {
    slug: "beachfront",
    title: "Beachfront Wedding Venues",
    cta: "Explore Beachfront Wedding Venues",
    image: "/venues/beach-front.webp",
  },
  {
    slug: "garden",
    title: "Garden Wedding Venues",
    cta: "Explore Garden Wedding Venues",
    image: "/venues/g5.webp",
  },
  {
    slug: "luxury-hotel",
    title: "Luxury Hotel Wedding Venues",
    cta: "Explore Luxury Hotel Wedding Venues",
    image: "/venues/luxury.webp",
  },
  {
    slug: "unique",
    title: "Unique Wedding Venues",
    cta: "Explore All Wedding Venues",
    image: "/venues/gc.webp",
  },
];

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export const whyChooseItems: WhyChooseItem[] = [
  {
    number: "01",
    title: "Experienced Wedding Planners & Coordinators",
    description:
      "Our passionate team brings years of experience in creating exceptional celebrations across the UAE. From the first consultation to your wedding day, we manage every detail with professionalism, creativity, and genuine care — allowing you to relax and enjoy every moment.",
  },
  {
    number: "02",
    title: "Bespoke Wedding Design & Luxury Styling",
    description:
      "Every wedding is uniquely designed to reflect your personality and vision. From elegant wedding decoration in Dubai and floral installations to custom stage styling, lighting, and tablescapes, we create timeless settings for unforgettable luxury weddings in Dubai & UAE.",
  },
  {
    number: "03",
    title: "Trusted Wedding Partners & Seamless Planning",
    description:
      "As a leading wedding organizer UAE, we've built strong relationships with the region's finest venues, photographers, designers, entertainers, and hospitality partners. Our wedding planning services ensure a smooth, stress-free experience with trusted professionals by your side every step of the way.",
  },
];
