import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { BlogCard } from "@/components/blog-card";
import { getPublishedPosts } from "@/lib/content/blog";

export const Route = createFileRoute("/wedding-guide")({
  head: () => ({
    meta: [
      { title: "Wedding Guide — Dubai & UAE Wedding Planning Blog" },
      {
        name: "description",
        content:
          "Expert wedding planning guides for Dubai and the UAE — costs, venues, legal requirements, cultural traditions and more.",
      },
      { property: "og:title", content: "Wedding Guide — Dubai & UAE" },
      {
        property: "og:description",
        content: "Guides, tips and inspiration for couples planning weddings in the UAE.",
      },
    ],
  }),
  component: WeddingGuidePage,
});

function WeddingGuidePage() {
  const publishedPosts = getPublishedPosts();

  return (
    <>
      <section className="section-y">
        <div className="container-page">
          <nav className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Wedding Guide</span>
          </nav>

          <SectionHeader
            eyebrow="Wedding Guide"
            title="Planning your UAE wedding, guided"
            body="Everything couples ask us — costs, seasons, venues, legal ceremonies and cultural traditions across Dubai, Abu Dhabi and Ras Al Khaimah."
          />
        </div>
      </section>

      <section className="section-y bg-secondary/40">
        <div className="container-page">
          {publishedPosts.length ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {publishedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl rounded-sm border border-dashed border-border bg-card/60 px-6 py-16 text-center">
              <h2 className="font-display text-2xl">Wedding guides are coming soon</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                New wedding planning articles will be published here.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
