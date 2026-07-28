import type { BlogPost } from "@/lib/content/blog";
import { BlogCard } from "@/components/blog-card";

export function BlogPreviewGrid({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} variant="compact" />
      ))}
    </div>
  );
}
