import defaultArticleImage from "@/assets/wedding-services/beach-wedding-hero.webp";

export type BlogPostStatus = "published" | "draft";

export type ArticleBodyBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string; id?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "callout"; title?: string; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updatedDate?: string;
  image: string;
  imageAlt: string;
  category?: string;
  readingTime?: number;
  keywords: string[];
  status: BlogPostStatus;
  body?: ArticleBodyBlock[];
};

/*
  ADDING AN ARTICLE

  1. Import its images above.
  2. Copy an article object below.
  3. Keep status as "draft" while editing.
  4. Change status to "published" when ready.
  5. Add image blocks anywhere between paragraphs.
*/

export const blogPosts: BlogPost[] = [
  {
    slug: "planning-a-wedding-in-dubai",
    title: "Planning a Wedding in Dubai: A Practical Guide",
    excerpt:
      "A clear starting point for couples planning a wedding in Dubai, from choosing the right setting to organising suppliers, guest logistics, and the wedding-day experience.",
    date: "2026-07-28",
    image: defaultArticleImage,
    imageAlt: "Luxury beach wedding setting in Dubai",
    category: "Wedding Planning",
    readingTime: 8,
    keywords: [
      "wedding planning Dubai",
      "Dubai wedding guide",
      "wedding planner UAE",
      "luxury weddings Dubai",
    ],
    status: "published",
    body: [
      {
        type: "paragraph",
        text: "Dubai offers couples a wide range of wedding settings, including luxury hotels, beachfront resorts, desert venues, private villas, gardens, yachts, and purpose-built event spaces.",
      },
      {
        type: "heading",
        level: 2,
        text: "Begin With Your Wedding Priorities",
        id: "wedding-priorities",
      },
      {
        type: "paragraph",
        text: "Before contacting venues or suppliers, decide which parts of the celebration matter most to you. Your guest count, preferred date, location, cultural requirements, and overall atmosphere will influence nearly every planning decision.",
      },
      {
        type: "list",
        items: [
          "Preferred wedding date or season",
          "Estimated number of guests",
          "Indoor, outdoor, beach, desert, or hotel setting",
          "Ceremony and reception requirements",
          "Cultural or religious traditions",
          "Approximate overall budget",
        ],
      },
      {
        type: "image",
        src: defaultArticleImage,
        alt: "Beach wedding venue with elegant ceremony styling",
        caption:
          "Choosing the setting early helps shape the venue search, décor direction, and guest experience.",
      },
      {
        type: "heading",
        level: 2,
        text: "Choose a Venue That Supports the Full Experience",
        id: "choosing-a-venue",
      },
      {
        type: "paragraph",
        text: "Consider guest access, accommodation, weather backup options, supplier restrictions, sound limits, catering arrangements, ceremony permissions, and setup time.",
      },
      {
        type: "callout",
        title: "Planning note",
        text: "Always ask whether the venue provides a confirmed indoor or covered alternative for outdoor celebrations.",
      },
      {
        type: "heading",
        level: 2,
        text: "Build a Realistic Planning Timeline",
        id: "planning-timeline",
      },
      {
        type: "paragraph",
        text: "Popular wedding dates and venues in Dubai can be reserved well in advance. Starting early gives you more flexibility when selecting priority suppliers.",
      },
      {
        type: "quote",
        text: "A well-structured timeline gives every supplier enough time to prepare, coordinate, and deliver consistently.",
      },
    ],
  },

  /*
  TEMPLATE

  {
    slug: "your-article-slug",
    title: "Your Article Title",
    excerpt: "A short synopsis used on cards and in metadata.",
    date: "2026-08-01",
    updatedDate: "2026-08-05",
    image: yourHeroImage,
    imageAlt: "Describe the hero image",
    category: "Wedding Planning",
    readingTime: 7,
    keywords: ["keyword one", "keyword two"],
    status: "draft",
    body: [
      { type: "paragraph", text: "Opening paragraph." },
      {
        type: "heading",
        level: 2,
        text: "Section Heading",
        id: "section-heading",
      },
      { type: "paragraph", text: "Section content." },
      {
        type: "image",
        src: yourInlineImage,
        alt: "Describe the inline image",
        caption: "Optional caption.",
      },
      {
        type: "list",
        items: ["First item", "Second item"],
      },
      {
        type: "quote",
        text: "Optional quote.",
        attribution: "Optional attribution",
      },
      {
        type: "callout",
        title: "Optional title",
        text: "Important supporting information.",
      },
    ],
  },
  */
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug && post.status === "published");
}

export function getPublishedPosts() {
  return blogPosts
    .filter((post) => post.status === "published")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getLatestPublishedPosts(limit: number) {
  return getPublishedPosts().slice(0, limit);
}

export function formatBlogDate(date: string, style: "short" | "long" = "short") {
  return new Date(`${date}T00:00:00`).toLocaleDateString(
    "en-GB",
    style === "long"
      ? { day: "numeric", month: "long", year: "numeric" }
      : { day: "numeric", month: "short", year: "numeric" },
  );
}
