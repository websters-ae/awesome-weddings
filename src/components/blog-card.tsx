import { Link } from "@tanstack/react-router";
import { formatBlogDate, type BlogPost } from "@/lib/content/blog";

export function BlogCard({
  post,
  variant = "standard",
}: {
  post: BlogPost;
  variant?: "standard" | "compact";
}) {
  const compact = variant === "compact";

  return (
    <Link
      to="/wedding-guide/$slug"
      params={{ slug: post.slug }}
      className={
        compact
          ? "group flex flex-col"
          : "group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
      }
    >
      <div
        className={`relative overflow-hidden bg-muted ${
          compact ? "aspect-[4/3] rounded-sm" : "aspect-[16/10]"
        }`}
      >
        <img
          src={post.image}
          alt={post.imageAlt || post.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className={compact ? "mt-4 flex flex-1 flex-col" : "flex flex-1 flex-col p-6"}>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          {post.category && (
            <>
              <span className="uppercase tracking-widest text-primary">{post.category}</span>
              <span aria-hidden>·</span>
            </>
          )}
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          {post.readingTime && (
            <>
              <span aria-hidden>·</span>
              <span>{post.readingTime} min read</span>
            </>
          )}
        </div>

        <h3
          className={`font-display leading-tight transition-colors group-hover:text-primary ${
            compact ? "mt-2 text-xl" : "mt-3 text-2xl"
          }`}
        >
          {post.title}
        </h3>

        <p
          className={`text-sm leading-relaxed text-muted-foreground ${
            compact ? "mt-2 line-clamp-3" : "mt-3 flex-1"
          }`}
        >
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
