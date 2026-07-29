import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allServices, serviceCtaMeta } from "@/lib/content/services";
import servicesHero from "@/assets/wedding-services/beach-wedding-hero.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Wedding Services in Dubai & UAE | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "Bespoke wedding planning services across Dubai, Abu Dhabi & the UAE — beach, desert, hotel, cultural, civil and destination weddings.",
      },
      { property: "og:title", content: "Wedding Services in Dubai & UAE" },
      {
        property: "og:description",
        content: "Every wedding planning service, one trusted team.",
      },
    ],
  }),
  component: ServicesPage,
});

const serviceContentOverrides: Record<
  string,
  {
    description: string;
    perfectFor?: string[];
  }
> = {
  "beach-wedding-dubai": {
    description:
      "If you've always dreamed of a Beach Wedding Dubai, we'll help you create a beautiful luxury wedding on the white sands of the Arabian Gulf, complete with sunset views, elegant styling, and unforgettable moments by the sea. It's the perfect choice for couples planning a destination wedding or a romantic outdoor wedding in the UAE.",
  },

  "desert-wedding-dubai": {
    description:
      "Looking for something truly unique? A Desert Wedding in Dubai & UAE offers breathtaking sand dunes, spectacular sunsets, and a magical outdoor wedding experience inspired by Arabian traditions. It's an unforgettable setting for couples planning a destination wedding filled with unforgettable moments.",
    perfectFor: [
      "Arabian-inspired weddings",
      "Destination weddings",
      "Outdoor weddings",
      "Private desert celebrations",
    ],
  },

  "intimate-elopements": {
    description:
      "Whether it's just the two of you or your closest loved ones, our Intimate Elopements & Micro Weddings create meaningful celebrations in beautiful locations across the UAE. A wonderful option for couples planning a romantic destination wedding or a private outdoor wedding.",
    perfectFor: [
      "Romantic elopements",
      "Small wedding celebrations",
      "Destination weddings",
      "Outdoor ceremonies",
    ],
  },

  "civil-weddings-uae": {
    description:
      "Whether you're a resident or travelling to the UAE, we'll help make your Civil Weddings UAE journey simple and memorable. Many couples choose to celebrate their legal ceremony with a luxury wedding, an intimate reception, or a destination wedding experience afterwards.",
    perfectFor: [
      "UAE residents",
      "International couples",
      "Couples looking for a Celebrant in Dubai or UAE",
      "Legally recognised civil marriages",
      "Wedding Celebrations planning after your ceremony",
    ],
  },

  "luxury-hotel-weddings": {
    description:
      "If you're dreaming of a sophisticated luxury wedding, we'll help you find the perfect hotel setting, from elegant ballrooms to spectacular waterfront venues across Dubai, Abu Dhabi, and Ras Al Khaimah. Ideal for grand celebrations and unforgettable destination weddings.",
    perfectFor: [
      "Luxury weddings",
      "Grand ballroom celebrations",
      "Destination weddings",
      "Multi-day wedding celebrations",
    ],
  },

  "emirati-gcc-weddings": {
    description:
      "Celebrate luxury Emirati and GCC weddings in Dubai with bespoke planning inspired by cultural traditions, elegant Majlis settings, Zaffa processions, personalised décor, and exceptional hospitality across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE.",
  },

  "south-asian-weddings": {
    description:
      "Celebrate luxury South Asian weddings in Dubai with bespoke planning shaped around your culture, traditions, and family celebrations. From Mehndi and Sangeet to Pheras, Walima, and grand receptions, we create seamless multi-day weddings across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE.",
  },

  "yacht-marina-weddings": {
    description:
      "Host a luxury yacht or marina wedding in Dubai surrounded by sparkling waters and stunning skyline views. From private vessels and bespoke décor to fine dining and thoughtful guest experiences, every detail is planned to feel personal, elegant, and effortlessly memorable.",
    perfectFor: [
      "Private yacht weddings",
      "Marina ceremonies",
      "Waterfront receptions",
      "Luxury destination weddings",
    ],
  },

  "garden-weddings": {
    description:
      "Plan a romantic garden wedding in Dubai surrounded by lush greenery, elegant floral styling, soft ambient lighting, and a beautifully designed outdoor setting. Every detail is thoughtfully curated to create a warm, intimate, and unforgettable celebration.",
    perfectFor: [
      "Intimate garden ceremonies",
      "Outdoor wedding receptions",
      "Resort garden weddings",
      "Luxury destination weddings",
    ],
  },

  "outdoor-weddings": {
    description:
      "Exchange your vows beneath open skies with a luxury outdoor wedding in Dubai filled with beautiful scenery, elegant décor, and thoughtful details. From beaches and deserts to terraces and private venues, every setting is styled to feel warm, personal, and unforgettable.",
  },

  "destination-weddings": {
    description:
      "Begin your forever in one of the world’s most beautiful settings with a luxury destination wedding in Dubai. From beach resorts and desert escapes to five-star hotels and iconic city venues, every detail is thoughtfully designed to feel personal, effortless, and unforgettable.",
    perfectFor: [
      "International couples",
      "Multi-day wedding celebrations",
      "Cultural and multicultural weddings",
      "Luxury destination weddings across the UAE",
    ],
  },
};

type BespokePlanningItem = {
  title: string;
  description: string;
};

const bespokePlanningContent = {
  eyebrow: "Bespoke Planning",
  title: "Custom Wedding Planning Services",
  introduction: [
    "At Awesome Events Weddings, our custom wedding planning services are tailored around your story, style, culture, and celebration goals. From the first idea to the final moment, we bring every detail together with creativity, care, and seamless coordination.",
    "The services below will give you a clearer understanding of how we support you in creating a wedding that feels personal, effortless, and beautifully yours.",
  ],
  services: [
    {
      title: "End-to-End Wedding Planning in Dubai & UAE",
      description:
        "From the first consultation to the final farewell, we manage every detail of your luxury wedding dream, ensuring a seamless, stress-free, and beautifully executed celebration takes place.",
    },
    {
      title: "Wedding Entertainment Experiences",
      description:
        "We curate DJs, live performers, artists, celebrities, EMCEE, traditional acts, and memorable bride and groom entry concepts with music, lighting, choreography, and special effects.",
    },
    {
      title: "Venue, Décor & Wedding Styling",
      description:
        "We help source the perfect wedding venue and transform it with elegant décor, floral styling, stage design, table settings, and theme-based concepts tailored to your vision.",
    },
    {
      title: "Milestone Celebrations",
      description:
        "We help celebrate life's special milestones with customized experiences, designed to feel completely stress-free and create lasting memories in Dubai or anywhere in the UAE.",
    },
    {
      title: "Luxury Private Parties in Dubai & UAE",
      description:
        "From renting out luxury yachts or private islands, exclusive poolside celebrations, desert soirées, contemporary galleries, to private jets, we get it for you and transform these extraordinary venues into unforgettable celebrations, tailored entirely to your style and occasion.",
    },
    {
      title: "Audio-Visual & Lighting Solutions",
      description:
        "We provide advanced audio-visual systems, intelligent lighting, LED screens, and sound engineering for elegant luxury wedding experiences.",
    },
    {
      title: "Wedding Catering Services",
      description:
        "Our wedding catering services offer customized menus, luxury catering, professional hospitality, and exceptional dining experiences for weddings and grand celebrations across the UAE.",
    },
    {
      title: "Drone Light Shows & Fireworks",
      description:
        "Create an unforgettable grand entrance for your wedding or finale with breathtaking aerial spectacles and synchronized moments that leave every guest amazed.",
    },
    {
      title: "Makeup & Henna Artists (Bride, Friends & Family)",
      description:
        "Our trusted beauty professionals ensure every member of your celebration feels confident, camera-ready, and beautifully prepared for the big day.",
    },
    {
      title: "AI Technology",
      description:
        "Elevate your wedding in Dubai or anywhere in the UAE with e-invitations, QR guest experiences, AI photo booths, robots, live streaming, language translators, and virtual access for family and friends.",
    },
    {
      title: "Guest Hospitality & RSVP",
      description:
        "From invitations and RSVP tracking to welcome services, seating plans, guest assistance, and family coordination, we ensure every guest experience is thoughtfully managed from start to finish.",
    },
  ] satisfies BespokePlanningItem[],
};

function BespokePlanningCard({
  item,
  index,
  isLast,
  hasOddItemCount,
}: {
  item: BespokePlanningItem;
  index: number;
  isLast: boolean;
  hasOddItemCount: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={`group border border-primary-foreground/20 bg-primary/90 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 md:p-9 ${
        isLast && hasOddItemCount ? "md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]" : ""
      }`}
    >
      <p className="text-xs uppercase tracking-[0.24em] text-primary-foreground/55">{number}</p>

      <h3 className="mt-4 font-display text-2xl leading-snug md:text-3xl text-primary-foreground/70">
        {item.title}
      </h3>

      <p className="mt-4 text-sm leading-7 md:text-base text-primary-foreground/80">
        {item.description}
      </p>
    </article>
  );
}

function BespokePlanningSection() {
  const { eyebrow, title, introduction, services } = bespokePlanningContent;
  const hasOddItemCount = services.length % 2 !== 0;

  return (
    <section className="section-y -mb-25 bg-secondary/40">
      <div className="container-page">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">{eyebrow}</p>

          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{title}</h2>

          <div className="mx-auto mt-7 h-px w-20 bg-primary-foreground/30" />

          {introduction.map((paragraph, index) => (
            <p
              key={paragraph}
              className={`mx-auto max-w-3xl text-base leading-8 md:text-lg ${
                index === 0 ? "mt-7" : "mt-4"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
          {services.map((item, index) => (
            <BespokePlanningCard
              key={item.title}
              item={item}
              index={index}
              isLast={index === services.length - 1}
              hasOddItemCount={hasOddItemCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={servicesHero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/50" />
        </div>

        <div className="container-page flex min-h-[420px] items-center justify-center py-24 md:min-h-[520px]">
          <div className="mx-auto w-full text-center text-white">
            <nav className="mb-6 text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Wedding Services</span>
            </nav>
            <div className="inline-flex max-w-fit rounded-full bg-white/15 px-4 py-2 backdrop-blur-xl backdrop-saturate-150">
              <p className="eyebrow text-white/75">Wedding Services</p>
            </div>

            <h1 className="mt-4 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
              Creating Unforgettable Weddings Across the UAE
            </h1>

            <p className="mt-6 text-base leading-relaxed text-white/85 md:text-lg">
              Celebrate your love story with Awesome Events Weddings, an award-winning Wedding
              Agency in UAE and trusted Wedding Planner in Dubai. Based in Dubai, we create
              unforgettable celebrations across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE. From
              romantic Beach Weddings and magical Desert Weddings to elegant Luxury Hotel Weddings
              and unforgettable Destination Weddings, our personalised Wedding Planning Services
              bring your vision to life with creativity, care, and exceptional attention to every
              detail.
            </p>

            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-16 md:pt-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl">Our Wedding Planning Services</h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              From elegant Beach Weddings and Luxury Hotel Weddings to Destination Weddings, Civil
              Weddings, and intimate celebrations, Awesome Events Weddings offers customised Wedding
              Planning Services across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE. As an
              experienced Wedding Planner Dubai and Wedding Organizer UAE, we help bring your ideas
              to life with thoughtful planning, creative styling, and personalised experiences.
            </p>

            <div className="mx-auto mt-8 h-px w-24 bg-border" />
          </div>
        </div>
      </section>

      {/* Stacked service rows */}
      <section className="pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="container-page">
          <div className="mx-auto max-w-5xl space-y-16 md:space-y-24">
            {allServices.map((service) => {
              const meta = serviceCtaMeta[service.slug];
              const viewLabel = meta?.viewLabel ?? `Explore ${service.title} services`;
              const override = serviceContentOverrides[service.slug];
              const description = override?.description ?? service.description;
              const perfectFor = override?.perfectFor ?? service.perfectFor;

              return (
                <article
                  key={service.slug}
                  className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-center md:gap-12"
                >
                  <Link
                    to="/wedding-services/$slug"
                    params={{ slug: service.slug }}
                    className="group relative block aspect-[5/4] overflow-hidden rounded-sm shadow-md"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>

                  <div>
                    <h3 className="font-display text-3xl md:text-4xl">{service.title}</h3>

                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {description}
                    </p>

                    {perfectFor && perfectFor.length > 0 && (
                      <div className="mt-6">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                          Perfect for
                        </p>

                        <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
                          {perfectFor.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-8">
                      <Button asChild variant="outline" className="uppercase tracking-[0.18em]">
                        <Link to="/wedding-services/$slug" params={{ slug: service.slug }}>
                          {viewLabel}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Wedding Planning Services */}
      <BespokePlanningSection />
    </>
  );
}
