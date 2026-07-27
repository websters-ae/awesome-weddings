import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getServiceBySlug, allServices, serviceCtaMeta } from "@/lib/content/services";
import {
  getServiceDetail,
  type WhyChooseItem,
  type ServiceFaq,
} from "@/lib/content/service-details";
import servicesHero from "@/assets/services-hero.jpg";

const beachWeddingFaqs: ServiceFaq[] = [
  {
    q: "Which are the best beaches in Dubai for a luxury wedding?",
    a: "We help couples choose from Dubai's most exclusive beach wedding venues, including private beachfront resorts and luxury hotels that offer stunning sea views and exceptional hospitality.",
  },
  {
    q: "Can a beach wedding be customised to our culture and traditions?",
    a: "Absolutely. Whether you're planning a Western ceremony, South Asian celebration, Emirati wedding, or a multicultural event, Awesome Events Weddings creates personalised beach weddings that honour your traditions.",
  },
  {
    q: "What happens if the weather changes on our wedding day?",
    a: "Our experienced team always prepares a backup plan, including indoor or covered venue options where available, ensuring your Luxury Beach Wedding runs smoothly regardless of the weather.",
  },
  {
    q: "Are Palm Jumeirah weddings suitable for destination couples?",
    a: "Absolutely. Palm Jumeirah is one of the most popular locations for destination weddings in Dubai, offering luxury accommodation, world-class hospitality, and stunning beachfront settings for both ceremonies and receptions.",
  },
  {
    q: "Can you arrange a private beachfront wedding reception?",
    a: "Yes. We can organise exclusive beachfront receptions with bespoke décor, gourmet catering, live entertainment, and luxury seating for an unforgettable celebration by the sea.",
  },
  {
    q: "Do you decorate the ceremony and reception areas?",
    a: "Yes. Our team provides bespoke Wedding Decoration Dubai, including floral arches, aisle styling, elegant reception décor, ambient lighting, and customised beach-inspired designs.",
  },
  {
    q: "Can you help with guest accommodation and transportation?",
    a: "Yes. For Destination Weddings, we assist with hotel bookings, airport transfers, guest transportation, and logistics to ensure a seamless experience for everyone attending.",
  },
  {
    q: "Can we include fireworks or a drone show at our beach wedding?",
    a: "Yes. Subject to venue approvals and local regulations, we can arrange spectacular fireworks, synchronized drone shows, and other luxury entertainment to make your celebration truly unforgettable.",
  },
];

const desertWeddingFaqs: ServiceFaq[] = [
  {
    q: "What makes a desert wedding in Dubai unique?",
    a: "A desert wedding in Dubai offers breathtaking dunes, sunset views, Arabian-inspired hospitality, and a private setting for an unforgettable luxury celebration.",
  },
  {
    q: "How do guests reach a desert wedding venue?",
    a: "We plan clear arrival routes, designated parking, luxury transfers, and coordinated desert access for guests, vendors, and wedding suppliers.",
  },
  {
    q: "How do you keep guests comfortable during a desert wedding?",
    a: "We provide shaded areas, cooling solutions, elegant lounges, refreshments, suitable flooring, and carefully planned ceremony timings for maximum comfort.",
  },
  {
    q: "What is the best time of day for a desert wedding ceremony?",
    a: "Sunset is ideal for a luxury desert wedding, offering cooler temperatures, golden lighting, and beautiful wedding photography.",
  },
  {
    q: "Can you install proper flooring and seating on the sand?",
    a: "Yes. We create stable flooring, raised platforms, elegant aisles, stages, dining areas, and comfortable seating suitable for desert terrain.",
  },
  {
    q: "Can a desert wedding include an Arabian-inspired experience?",
    a: "Yes. We can incorporate traditional welcomes, Arabic entertainment, majlis seating, lantern décor, regional cuisine, and cultural hospitality experiences.",
  },
  {
    q: "How is food and catering managed at a desert wedding?",
    a: "We coordinate approved caterers, mobile kitchens, service areas, power requirements, food safety, dining setups, and professional hospitality teams.",
  },
  {
    q: "Do desert weddings require special permits and approvals?",
    a: "Yes. Requirements depend on the location and activities. We manage venue permissions, supplier access, production approvals, and event logistics.",
  },
];

export const Route = createFileRoute("/wedding-services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    const detail = getServiceDetail(params.slug);

    if (!service || !detail) throw notFound();

    const meta = serviceCtaMeta[params.slug] ?? {
      viewLabel: `View ${service.title}`,
      ctaLabel: `Plan My ${service.title}`,
      contactType: service.title,
    };

    return { service, meta, detail };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Wedding Service Not Found | Awesome Events Weddings" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { service } = loaderData;
    const title = `${service.title} | Awesome Events Weddings`;
    return {
      meta: [
        { title },
        { name: "description", content: service.short },
        { property: "og:title", content: title },
        { property: "og:description", content: service.short },
        { property: "og:image", content: service.image },
      ],
    };
  },
  component: WeddingServicePage,
  notFoundComponent: ServiceNotFound,
  errorComponent: () => (
    <div className="container-page section-y text-center">
      <h1 className="font-display text-3xl">Something went wrong</h1>
      <p className="mt-3 text-muted-foreground">
        Please try again or{" "}
        <Link to="/contact" search={{ type: undefined }} className="text-primary underline">
          contact us
        </Link>
        .
      </p>
    </div>
  ),
});

function ServiceNotFound() {
  return (
    <div className="container-page section-y text-center">
      <h1 className="font-display text-3xl">Wedding Service Not Found</h1>
      <p className="mt-3 text-muted-foreground">
        The wedding service you're looking for doesn't exist.
      </p>
      <div className="mt-6">
        <Button asChild>
          <Link to="/services">View All Wedding Services</Link>
        </Button>
      </div>
    </div>
  );
}

function WeddingServicePage() {
  const { service, meta, detail } = Route.useLoaderData();

  const faqsToDisplay =
    service.slug === "desert-wedding-dubai"
      ? desertWeddingFaqs
      : service.slug.toLowerCase().includes("beach")
        ? beachWeddingFaqs
        : detail.faqs;

  const otherServices = useMemo(
    () => allServices.filter((item) => item.slug !== service.slug),
    [service.slug],
  );

  const serviceSlides = useMemo(() => {
    const slides = [];
    for (let index = 0; index < otherServices.length; index += 3) {
      slides.push(otherServices.slice(index, index + 3));
    }
    return slides;
  }, [otherServices]);

  const [activeServiceSlide, setActiveServiceSlide] = useState(0);

  useEffect(() => {
    setActiveServiceSlide(0);
  }, [service.slug]);

  useEffect(() => {
    if (serviceSlides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveServiceSlide((current) => (current === serviceSlides.length - 1 ? 0 : current + 1));
    }, 4500);

    return () => window.clearInterval(timer);
  }, [serviceSlides.length]);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={service.banner ?? servicesHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/60" />
        </div>
        <div className="container-page flex min-h-[380px] items-center justify-center py-20 md:min-h-[460px]">
          <div className="mx-auto w-full max-w-3xl text-center text-white">
            <nav className="mb-6 text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-white">
                Wedding Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{service.title}</span>
            </nav>
            <p className="eyebrow text-white/75">Wedding Services</p>
            <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-y">
        <div className="container-page">
          <article className="mx-auto max-w-4xl">
            <p className="eyebrow">Overview</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              {detail.introHeading ?? `Create Your Dream ${service.title}`}
            </h2>
            <div className="mt-6 space-y-4">
              {detail.intro.map((p: string, i: number) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-sm shadow-lg">
              <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </article>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">{detail.whyChooseTitle}</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {detail.whyChoose.map((item: WhyChooseItem) => (
              <div
                key={item.title}
                className="flex h-full flex-col rounded-sm border border-border bg-card p-6"
              >
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      {(detail.idealFor ?? service.perfectFor) && (
        <section className="section-y">
          <div className="container-page">
            <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg md:order-2">
                <img
                  src={service.perfectForImage ?? service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="md:order-1">
                <p className="eyebrow">
                  {service.slug === "civil-weddings-uae" || service.slug === "luxury-hotel-weddings"
                    ? "Perfect For"
                    : detail.idealFor
                      ? "Ideal For"
                      : "Perfect For"}
                </p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl">
                  {service.slug === "desert-wedding-dubai"
                    ? "Who Is a Luxury Desert Wedding Ideal For?"
                    : service.slug === "civil-weddings-uae"
                      ? "Who Should Consider a Civil Wedding?"
                      : service.slug === "luxury-hotel-weddings"
                        ? "Who Are Luxury Hotel Weddings Perfect For?"
                        : detail.idealFor
                          ? `Who Is ${service.title} Ideal For?`
                          : `Who Is ${service.title} Perfect For?`}
                </h2>

                <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  {(detail.idealFor ?? service.perfectFor)!.map((item: string) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button asChild variant="outline" className="rounded-none">
                    <Link to="/contact" search={{ type: meta.contactType }}>
                      Contact Us Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="section-y">
        <div className="container-page">
          <div className="text-center">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Other Wedding Services</h2>
            <div className="mt-5">
              <Button asChild variant="outline" className="rounded-none">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeServiceSlide * 100}%)` }}
            >
              {serviceSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full shrink-0">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {slide.map((item) => (
                      <Link
                        key={item.slug}
                        to="/wedding-services/$slug"
                        params={{ slug: item.slug }}
                        className="group overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <h4 className="font-display text-lg">{item.title}</h4>
                          <p className="mt-1.5 text-sm text-muted-foreground">{item.short}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {serviceSlides.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {serviceSlides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveServiceSlide(index)}
                  aria-label={`Show service slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    activeServiceSlide === index
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-border hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Wedding Décor */}
      {detail.decor && (
        <section className="section-y bg-secondary/20">
          <div className="container-page">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="max-w-2xl">
                <p className="eyebrow">{detail.decor.eyebrow ?? "Wedding Décor"}</p>

                <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                  {detail.decor.heading}
                </h2>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {detail.decor.intro}
                </p>

                <h3 className="mt-7 font-display text-xl">{detail.decor.listHeading}</h3>

                <ul className="mt-5 space-y-3 text-sm text-muted-foreground md:text-base">
                  {detail.decor.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {detail.decor.outro && (
                  <p className="mt-7 text-base leading-relaxed text-muted-foreground">
                    {detail.decor.outro}
                  </p>
                )}

                <div className="mt-8">
                  <Button
                    asChild
                    className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link to="/contact" search={{ type: meta.contactType }}>
                      {detail.decor.ctaLabel ?? "Contact Us"}
                    </Link>
                  </Button>
                </div>
              </div>

              {detail.decor.image && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lg">
                  <img
                    src={detail.decor.image}
                    alt={detail.decor.imageAlt ?? detail.decor.heading}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">FAQs</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-8 max-w-3xl">
            <Accordion type="single" collapsible className="w-full font-['Times_New_Roman']">
              {faqsToDisplay.map((faq: ServiceFaq, i: number) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-['Times_New_Roman'] text-xl leading-relaxed md:text-2xl">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="font-['Times_New_Roman'] text-lg leading-relaxed md:text-xl">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-y">
        <div className="container-page text-center">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Let's Talk About Your {service.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Share your details and our specialists will design a bespoke plan for your celebration.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/contact" search={{ type: meta.contactType }}>
                {meta.ctaLabel}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
