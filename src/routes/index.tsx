import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/section-header";
import { ServiceIconRow } from "@/components/service-icon-row";
import { ServicesCarousel } from "@/components/services-carousel";
import { FaqAccordion } from "@/components/faq-accordion";
import { WeddingVenuesShowcase } from "@/components/wedding-venues-showcase";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { flagshipServices, culturalServices } from "@/lib/content/services";
import { faqItems } from "@/lib/content/faqs";
import { testimonials } from "@/lib/content/testimonials";
import { company } from "@/lib/content/nav";
import uaeMapAsset from "@/assets/uae-map-final.webp";
import whyChooseUs1 from "@/assets/why-choose-us-1.webp";
import whyChooseUs2 from "@/assets/why-choose-us-2.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luxury Wedding Planner in Dubai | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "Dubai's leading luxury wedding planner. Beach, desert, hotel and destination weddings across the UAE — planned end-to-end by our award-winning team.",
      },
      {
        property: "og:title",
        content: "Luxury Wedding Planner in Dubai | Awesome Events Weddings",
      },
      {
        property: "og:description",
        content:
          "Dubai's leading luxury wedding planner. Beach, desert, hotel and destination weddings across the UAE — planned end-to-end by our award-winning team.",
      },
    ],
  }),
  component: HomePage,
});

const trustStats = [
  { value: "450+", label: "Events" },
  { value: "62,000", label: "Attendees" },
  { value: "100+", label: "Event Partners" },
  { value: "300+", label: "Happy Couples" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Luxury wedding ceremony in Dubai"
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 hero-scrim" />
        </div>
        <div className="container-page relative flex min-h-[85vh] flex-col justify-end pb-20 pt-32 text-primary-foreground">
          <div className="inline-flex max-w-fit rounded-full bg-white/15 px-4 py-2 backdrop-blur-xl backdrop-saturate-150">
            <p className="eyebrow text-accent">{company.tagline}</p>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] md:text-7xl">
            Turning Dreams into Beautiful Realities
          </h1>
          <p className="mt-6 max-w-2xl text-base text-primary-foreground/85 md:text-lg">
            Awesome Events Weddings is a leading wedding planner in Dubai, creating bespoke luxury
            weddings and unforgettable celebrations across the UAE — from private beach ceremonies
            and iconic hotel weddings to breathtaking destination events.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/services">Our Wedding Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              Your Trusted Partner for Luxury Wedding Celebrations
            </h2>
            <p className="mt-2 font-display text-xl text-muted-foreground">
              Experience you can count on, elegance you can feel.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              With over a decade of experience, Awesome Events Weddings is a trusted luxury wedding
              planner in Dubai, creating extraordinary celebrations across the UAE.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From intimate ceremonies and civil weddings to grand multicultural and destination
              weddings, we provide complete end-to-end wedding planning and execution, including
              creative concept development, venue selection, bespoke décor, vendor management,
              budgeting, entertainment, technical production, guest hospitality, invitations,
              transportation, accommodation, wedding logistics, permits, timelines, and seamless
              on-ground coordination.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Through meticulous planning, personalized service, and world-class production, we
              manage every detail from the first consultation to the final celebration, bringing
              each couple's unique wedding vision to life.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-4">
            {trustStats.map((s) => (
              <div key={s.label} className="rounded-sm border border-border bg-card p-6">
                <dt className="font-display text-4xl text-primary md:text-5xl">{s.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Weddings We Specialize In */}
      <section className="pb-16 md:pb-24">
        <div className="container-page">
          <div className="max-w-[840px] p-8">
            <p className="eyebrow">Weddings We Specialize In</p>

            <div className="mt-5">
              <ServiceIconRow />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>

              <Button asChild variant="outline">
                <Link to="/services">View Our Wedding Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* UAE coverage */}
      <section className="bg-secondary/60 section-y">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" /> UAE-wide coverage
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              UAE Weddings across the country
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              From our headquarters in Dubai, we plan and coordinate weddings across all seven
              emirates of the UAE, including Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al
              Khaimah, Fujairah, and other parts of the UAE, creating personalised celebrations in
              some of the country's most beautiful destinations.
            </p>
          </div>
          <div className="relative -mx-2 md:-mx-4 lg:scale-[1.07] lg:origin-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-6 bottom-2 h-10 rounded-[50%] bg-primary/20 blur-2xl"
            />
            <img
              src={uaeMapAsset}
              alt="Map of the UAE with all seven emirates marked — Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah"
              width={1664}
              height={936}
              loading="lazy"
              className="relative h-auto w-full object-contain drop-shadow-[0_20px_35px_rgba(120,85,40,0.18)]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Services"
            title="Luxury Wedding Planner in Dubai"
            body="We provide bespoke wedding planning services across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE."
          />
          <div className="mt-12 -mx-3">
            <ServicesCarousel items={[...flagshipServices, ...culturalServices]} />{" "}
          </div>
          <div className="mt-10">
            <Button asChild variant="outline">
              <Link to="/services">
                View all Weddings <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Couples Choose Us */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container-page grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex max-w-xl flex-col">
            <p className="eyebrow">WHY CHOOSE US</p>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
              Why Choose Awesome Events Weddings?
            </h2>
            <div className="mt-6 h-px w-24 bg-foreground/20" />
            <div className="mt-8 flex flex-col justify-between gap-8 md:gap-10">
              <div>
                <h3 className="font-display text-xl md:text-2xl">Experienced Wedding Planners</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  As a trusted Wedding Planner Dubai and Wedding Organizer UAE, we provide
                  personalised Wedding Planning Services, guiding you through every stage of your
                  celebration with care and attention to detail.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl">
                  Luxury & Customized Wedding Experiences
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  From elegant styling and Wedding Decoration Dubai to bespoke themes and venue
                  design, every celebration is thoughtfully customised to reflect your vision,
                  traditions, and personal style.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl">
                  Complete Wedding Planning Services
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Our dedicated Wedding Coordinator manages venue selection, décor, entertainment,
                  photography, guest experiences, and production for weddings across Dubai, Abu
                  Dhabi, Ras Al Khaimah, and the UAE.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-4">
            <img
              src={whyChooseUs1}
              alt="Happy couple embracing in a rose garden at golden hour"
              loading="lazy"
              className="aspect-[4/3] w-full max-w-md border border-border object-cover shadow-lg"
            />
            <img
              src={whyChooseUs2}
              alt="Elegant outdoor garden ceremony with floral arch and gold chairs"
              loading="lazy"
              className="aspect-[4/3] w-full max-w-md border border-border object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary text-primary-foreground section-y">
        <div className="container-page">
          <SectionHeader
            eyebrow="Testimonials"
            title="Loved by couples across the UAE"
            body="Real reviews from real couples. Testimonials below are placeholders until the client supplies verified quotes."
            align="center"
            className="text-primary-foreground [&_.eyebrow]:text-accent [&_p]:text-primary-foreground/75"
          />
          <div className="mt-12">
            <TestimonialsCarousel items={testimonials} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/60 section-y scroll-mt-24">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently asked questions, answered"
            body="Everything you need to know before planning your wedding—from venues and timelines to legal requirements and destination celebrations."
            className="[&_h2]:text-4xl md:[&_h2]:text-5xl [&_p]:text-lg md:[&_p]:text-xl [&_p]:leading-8"
          />
          <div className="[&_button]:text-xl [&_button]:font-faq [&_[data-slot=accordion-content]]:text-xl">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Wedding Venues */}
      <WeddingVenuesShowcase />

      {/* Get in Touch */}
      <section className="section-y">
        <div className="container-page">
          <div className="rounded-sm bg-primary px-6 py-10 text-primary-foreground shadow-[0_24px_70px_rgba(60,15,15,0.18)] md:px-12 md:py-16">
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <p className="eyebrow text-gold">Get in Touch</p>

                <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">
                  Ready to plan your dream wedding?
                </h2>

                <p className="mt-4 max-w-xl leading-relaxed text-primary-foreground/75">
                  Share a few details about your celebration and our wedding specialists will
                  prepare a personalised consultation tailored to your vision.
                </p>
              </div>
              <div className="grid w-full max-w-[460px] gap-3 sm:grid-cols-2 md:ml-auto">
                <Button
                  asChild
                  size="lg"
                  className="
                    h-12 w-full rounded-sm border border-gold
                    bg-gold px-6 text-sm font-medium
                    text-ink shadow-sm
                    hover:-translate-y-0.5
                    hover:bg-gold/90
                    hover:shadow-md
                  "
                >
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="
                    h-12 w-full rounded-sm
                    border border-white/60
                    bg-transparent px-6
                    text-sm font-medium text-white
                    hover:-translate-y-0.5
                    hover:border-white
                    hover:bg-white
                    hover:text-primary
                  "
                >
                  <Link to="/portfolio">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
