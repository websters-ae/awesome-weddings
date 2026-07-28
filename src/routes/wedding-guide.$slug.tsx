import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Clock3 } from "lucide-react";
import { formatBlogDate, getPostBySlug } from "@/lib/content/blog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/wedding-guide/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);

    if (!post) {
      throw notFound();
    }

    return { post };
  },

  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          {
            title: "Article not found — Wedding Guide",
          },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    }

    const { post } = loaderData;

    return {
      meta: [
        {
          title: `${post.title} | Wedding Guide`,
        },
        {
          name: "description",
          content: post.excerpt,
        },
        {
          name: "keywords",
          content: post.keywords.join(", "),
        },
        {
          property: "og:title",
          content: post.title,
        },
        {
          property: "og:description",
          content: post.excerpt,
        },
        {
          property: "og:image",
          content: post.image,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "article:published_time",
          content: post.date,
        },

        ...(post.updatedDate
          ? [
              {
                property: "article:modified_time",
                content: post.updatedDate,
              },
            ]
          : []),
      ],
    };
  },

  notFoundComponent: ArticleNotFound,

  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <section className="section-y">
      <div className="container-page text-center">
        <h1 className="font-display text-4xl">Article not found</h1>

        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          The wedding guide you are looking for may have been moved or is not currently published.
        </p>

        <div className="mt-6">
          <Button asChild>
            <Link to="/wedding-guide">Back to Wedding Guide</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ArticlePage() {
  const { post } = Route.useLoaderData();

  const Content = post.Content;

  return (
    <article>
      {/* Article heading */}
      <header className="section-y pb-10 md:pb-14">
        <div className="container-page">
          <div className="mx-auto max-w-4xl">
            <nav className="mb-7 text-xs uppercase tracking-widest text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>

              <span className="mx-2">/</span>

              <Link to="/wedding-guide" className="transition-colors hover:text-primary">
                Wedding Guide
              </Link>

              {post.category && (
                <>
                  <span className="mx-2">/</span>

                  <span>{post.category}</span>
                </>
              )}
            </nav>

            {post.category && <p className="eyebrow">{post.category}</p>}

            <h1 className="mt-3 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />

                <time dateTime={post.date}>Published {formatBlogDate(post.date, "long")}</time>
              </span>

              {post.updatedDate && (
                <span>
                  Updated{" "}
                  <time dateTime={post.updatedDate}>
                    {formatBlogDate(post.updatedDate, "long")}
                  </time>
                </span>
              )}

              {post.readingTime && (
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" aria-hidden="true" />
                  {post.readingTime} min read
                </span>
              )}
            </div>

            {/* Synopsis */}
            {/* <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
              {post.excerpt}
            </p> */}
          </div>
        </div>
      </header>

      {/* Main article image */}
      {/* <div className="container-page">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-sm bg-muted">
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            fetchPriority="high"
            decoding="async"
            className="aspect-[16/9] h-auto w-full object-cover"
          />
        </div>
      </div> */}

      {/* Article body */}
      <section className="pb-16 md:pb-24 ">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <div className="article-content">
              <Content />
            </div>

            {/* Article CTA */}
            <div className="mt-14 border-t border-border pt-8">
              <p className="text-base leading-relaxed text-muted-foreground">
                Planning a wedding in Dubai or elsewhere in the UAE? Share your plans with our team
                for a personalised consultation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>

                <Button asChild variant="outline">
                  <Link to="/wedding-guide">Back to the Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
