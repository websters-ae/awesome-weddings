import type { ComponentType } from "react";

export type BlogPostStatus = "published" | "draft";

export type BlogPostMetadata = {
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
};

type WeddingGuideModule = {
  default: ComponentType;
  article: BlogPostMetadata;
};

export type BlogPost = BlogPostMetadata & {
  Content: ComponentType;
};

/*
  Automatically imports every MDX article inside:

  src/content/wedding-guides/

  Adding another MDX file automatically adds another article.
*/
const weddingGuideModules = import.meta.glob<WeddingGuideModule>(
  "/src/lib/content/wedding-guides/*.mdx",
  {
    eager: true,
  },
);

/*
  Convert the imported MDX modules into the same blogPosts
  structure used by the rest of the website.
*/
export const blogPosts: BlogPost[] = Object.entries(weddingGuideModules)
  .map(([filePath, module]) => {
    if (!module.article) {
      console.error(`Wedding guide metadata is missing in ${filePath}`);

      return null;
    }

    return {
      ...module.article,
      Content: module.default,
    };
  })
  .filter((post): post is BlogPost => post !== null)
  .sort((postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime());

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug && post.status === "published");
}

export function getPublishedPosts() {
  return blogPosts.filter((post) => post.status === "published");
}

export function getLatestPublishedPosts(limit: number) {
  return getPublishedPosts().slice(0, limit);
}

export function formatBlogDate(date: string, style: "short" | "long" = "short") {
  return new Date(`${date}T00:00:00`).toLocaleDateString(
    "en-GB",
    style === "long"
      ? {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      : {
          day: "numeric",
          month: "short",
          year: "numeric",
        },
  );
}
