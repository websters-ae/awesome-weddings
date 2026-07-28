import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { venueCategories } from "@/lib/content/venues";

export function WeddingVenuesShowcase() {
  return (
    <section className="bg-secondary/40 section-y scroll-mt-24">
      <div className="container-page">
        <SectionHeader
          align="center"
          eyebrow="Wedding Venues"
          title="Best Wedding Venues in Dubai for Weddings"
          body="We collaborate with Dubai's most prestigious wedding venues."
        />
        <div className="mx-auto mt-8 h-px w-20 bg-foreground/20" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {venueCategories.map((item) => (
            <article key={item.slug} className="group flex h-full flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col pt-5">
                <h3 className="font-display text-xl md:text-2xl">{item.title}</h3>
                <Button
                  asChild
                  variant="outline"
                  className="mt-auto h-14 w-full justify-between whitespace-normal rounded-none border-primary/30 py-2 text-left text-sm font-medium text-gold transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Link to="/venues">
                    {item.cta}
                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="h-14 rounded-none border-primary/30 px-8 text-sm font-medium text-gold transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Link to="/venues">View All Venues</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
