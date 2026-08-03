import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ProcessTimeline } from "@/components/process-timeline";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { BlogPreviewGrid } from "@/components/blog-preview-grid";
import { processSteps, processIntro, processSubheading } from "@/lib/content/process";
import { getLatestPublishedPosts } from "@/lib/content/blog";
import processHero from "@/assets/work-process-b.webp";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Wedding Planning Process | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "From discovery to celebration — the four-step wedding planning journey used by Awesome Events Weddings across Dubai and the UAE.",
      },
      { property: "og:title", content: "Our Wedding Planning Process" },
      {
        property: "og:description",
        content: "How we plan luxury weddings across Dubai and the UAE.",
      },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  const publishedPosts = getLatestPublishedPosts(4);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={processHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />
        </div>

        <div className="container-page flex min-h-[380px] items-center justify-center py-20 md:min-h-[460px]">
          <div className="mx-auto w-full max-w-4xl text-center text-white">
            <nav className="mb-6 text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Work Process</span>
            </nav>
            <div className="inline-flex max-w-fit rounded-full bg-white/35 px-4 py-2 backdrop-blur-xl backdrop-saturate-150">
              <p className="eyebrow text-white/75">How We Work</p>
            </div>
            <h1 className="mt-4 font-display text-4xl uppercase tracking-wide md:text-5xl lg:text-6xl">
              Work Process
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed !text-center text-white/85 md:text-xl">
              {processSubheading}
            </p>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow !text-center">Our Approach</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              From Your First Consultation to the Celebration
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{processIntro}</p>
          </div>
          <div className="mt-16 md:mt-24">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      {publishedPosts.length > 0 && (
        <section className="section-y bg-secondary/40">
          <div className="container-page">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeader
                eyebrow="Wedding Guide"
                title="Stories, guides & inspiration"
                body="Expert planning advice, real venue guides, and answers to every question couples ask us."
              />
              <Button asChild variant="outline">
                <Link to="/wedding-guide">
                  Read the guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-12">
              <BlogPreviewGrid posts={publishedPosts} />
            </div>
          </div>
        </section>
      )}

      <section className="section-y">
        <div className="container-page text-center">
          <Button asChild size="lg">
            <Link to="/contact">Start with a free consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
