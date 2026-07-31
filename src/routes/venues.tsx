import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/lib/content/services";
import venueOne from "@/assets/venue/awimg1.png";
import venueTwo from "@/assets/venue/awimg2.png";

export const Route = createFileRoute("/venues")({
  head: () => ({
    meta: [
      { title: "Wedding Venues in Dubai & the UAE | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "Discover the finest wedding venues in Dubai, Abu Dhabi & the UAE — beachfront, garden, luxury hotel and unique venues, curated for luxury weddings.",
      },
      { property: "og:title", content: "Wedding Venues in Dubai & the UAE" },
      {
        property: "og:description",
        content: "Handpicked venues for luxury weddings across the UAE.",
      },
    ],
  }),
  component: VenuesPage,
});

const featuredVenues = [
  {
    title: "Luxury Hotels and Grand Ballrooms",
    description:
      "From the palatial elegance of Emirates Palace Mandarin Oriental and the contemporary Diamond Ballroom at Atlantis The Royal to the impressive scale of Grand Hyatt Dubai, the UAE offers exceptional venues for weddings of every size. Palazzo Versace Dubai brings distinctive designer luxury, while The Ritz-Carlton, Dubai JBR offers an intimate yet refined ballroom experience.",
    endLine:
      "These are just a few of the UAE's leading wedding venues. Among many other beautiful options, Awesome Events Weddings helps you discover the setting best suited to your functions, guest count, style, and celebration requirements.",
    image: "/venues/lhgb.webp",
  },
  {
    title: "Beach and Island Resorts",
    description:
      "The UAE is home to exceptional coastal wedding settings, including Saadiyat Rotana Resort & Villas for its pristine beach and elegant lawns, Banyan Tree Dubai for stylish sunset celebrations, Anantara Sir Bani Yas Island Al Yamm Villa Resort for intimate island weddings, The Ritz-Carlton Ras Al Khaimah, Al Hamra Beach for private seaside luxury, and InterContinental Fujairah Resort for dramatic mountain and ocean views.",
    endLine:
      "These are just a few of the UAE’s beautiful beach and island resorts. Awesome Events Weddings helps you discover more options and select the venue that best suits your guest count, wedding style, and overall celebration experience.",
    image: "/venues/bir.webp",
  },
  {
    title: "Desert Oasis and Dune Camps",
    description:
      "Imagine exchanging vows beneath open skies, surrounded by golden dunes and the quiet beauty of the desert. Consider Qasr Al Sarab Desert Resort by Anantara for palace-style celebrations among towering dunes, Bab Al Shams Desert Resort for vibrant Arabian-inspired festivities, Al Maha Desert Resort & Spa for intimate ceremonies surrounded by protected wildlife, The Ritz-Carlton Ras Al Khaimah, Al Wadi Desert for private luxury in a peaceful desert sanctuary, and Telal Resort Al Ain for heritage-rich celebrations set against rolling dunes and natural desert landscapes.",
    endLine:
      "At Awesome Events Weddings, we bring each desert setting to life through thoughtful styling, atmospheric lighting, cultural details, curated entertainment, memorable guest experiences, and seamless coordination, creating a celebration that feels personal, immersive, and beautifully connected to its surroundings.",
    image: "/venues/dodc.webp",
  },
  {
    title: "Polo and Equestrian Clubs",
    description:
      "For couples drawn to open landscapes, elegant architecture, and timeless countryside charm, the UAE offers several distinctive polo and equestrian settings. Al Habtoor Polo Resort is ideal for elegant lawn celebrations surrounded by Andalusian-inspired architecture, Dubai Polo & Equestrian Club offers romantic courtyards, polo-field views, and memorable horse-and-carriage arrivals, while Meliá Desert Palm Dubai provides a peaceful and private setting within a beautiful polo estate.",
    endLine:
      "At Awesome Events Weddings, we manage every detail in a seamless order—from venue selection, permits, approvals, and special requests to bespoke invitations, refined outdoor styling, elegant marquee concepts, equestrian-inspired entrances, curated entertainment, and thoughtfully selected luxury gifting suited to the theme. With personalised guest experiences and complete event coordination, we create celebrations that feel graceful, distinctive, and beautifully connected to the landscape.",
    image: "/venues/pec.webp",
  },
  {
    title: "Mountain and Coastal Escapes",
    description:
      "For couples dreaming of a celebration framed by rugged mountains, peaceful shorelines, and open skies, the UAE offers several beautiful coastal escapes. The Ritz-Carlton Ras Al Khaimah, Al Hamra Beach provides an intimate setting with private beach villas and Arabian Gulf views, InterContinental Fujairah Resort combines Al Aqah’s shoreline with the dramatic Hajar Mountains, Anantara Mina Ras Al Khaimah Resort offers beaches, mangroves, and private overwater pool villas, Waldorf Astoria Ras Al Khaimah features elegant gardens, a private beach, and a grand ballroom, while Address Beach Resort Fujairah offers contemporary indoor and outdoor venues between the sea and mountains.",
    endLine:
      "At Awesome Events Weddings, we shape the entire experience around the destination—from venue selection, permits, approvals, and special requests to personalised invitations, scenic ceremony styling, guest transfers, curated entertainment, thoughtful hospitality, and luxury gifting inspired by the coastal setting. Every detail is carefully coordinated to create a celebration that feels relaxed, refined, and naturally connected to its surroundings.",
    image: "/venues/mce.webp",
  },
  {
    title: "Golf Course and Country Clubs",
    description:
      "For couples who love sweeping green landscapes, peaceful surroundings, and elegant outdoor celebrations, the UAE offers several beautiful golf and country club settings. Emirates Golf Club combines manicured lawns with impressive Dubai skyline views, Jumeirah Golf Estates offers refined spaces surrounded by championship fairways, while Dubai Creek Golf & Yacht Club brings together lush greenery, waterfront scenery, and the character of its distinctive clubhouse.",
    endLine:
      "At Awesome Events Weddings, we thoughtfully transform these open settings through elegant ceremony styling, customised marquees, creative lighting, personalised invitations, curated entertainment, themed luxury gifting, guest transportation, permits, approvals, and special venue requests. Every element is carefully planned to create a welcoming celebration that feels sophisticated, effortless, and naturally connected to the landscape.",
    image: "/venues/gccc.webp",
  },
  {
    title: "Helipad and Sky-High Venues in Dubai",
    description:
      "For couples who imagine celebrating above the city, Dubai offers extraordinary elevated settings with panoramic skyline and waterfront views. The iconic Burj Al Arab Jumeirah Helipad rises 212 metres above the Arabian Gulf, CÉ LA VI at Address Sky View offers private dining experiences on Level 54 overlooking Downtown Dubai, ZETA Seventy Seven at Address Beach Resort provides an open-air setting beside its record-breaking infinity pool on Level 77, while The Link at One Za’abeel delivers 360-degree city views from its dramatic sky concourse, suspended 100 metres above the ground.",
    endLine:
      "At Awesome Events Weddings, we help you navigate these extraordinary venues with confidence, selecting the setting that best reflects your celebration style, guest experience, and preferred city views. Whether it is an intimate ceremony above the Arabian Gulf or a sophisticated rooftop gathering overlooking Dubai’s skyline, we ensure the venue feels personal, memorable, and perfectly suited to the occasion.",
    image: "/venues/hsv.webp",
  },
].filter((venue): venue is { title: string; description: string; endLine: string; image: string } =>
  Boolean(venue.image),
);

function VenuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32">
        <div className="container-page">
          <div className="mx-auto max-w-6xl text-center">
            <nav className="mb-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <Link to="/" className="transition-colors hover:text-primary">
                Home
              </Link>

              <span className="mx-3">/</span>

              <span>Wedding Venues</span>
            </nav>

            <SectionHeader
              eyebrow="Wedding Planners"
              title="Wedding Venues in Dubai & the UAE"
              body="Finding the right venue is the first step towards an unforgettable celebration. At Awesome Events Weddings, our experienced luxury wedding planners help couples explore exceptional wedding venues across Dubai, Abu Dhabi, Ras Al Khaimah, and the UAE. Whether you are looking for an iconic celebration at Emirates Palace, an elegant outdoor wedding at Atlantis The Palm, or the scenic beauty and timeless charm of One&Only Royal Mirage, our tailored wedding planning services help bridge the gap between inspiration and reality. We match every venue to your vision, guest count, budget, cultural requirements, and celebration style, making the entire venue selection process feel clear, personal, and effortless."
              align="center"
              className="
                mx-auto
                max-w-6xl
                [&_.eyebrow]:mb-5
                [&_h2]:mx-auto
                [&_h2]:max-w-5xl
                [&_h2]:text-4xl
                [&_h2]:leading-tight
                md:[&_h2]:text-6xl
                [&_p]:mx-auto
                [&_p]:mt-7
                [&_p]:max-w-5xl
                [&_p]:text-base
                [&_p]:font-light
                [&_p]:leading-8
                [&_p]:tracking-[0.015em]
                md:[&_p]:text-lg
                md:[&_p]:leading-9
              "
            />
          </div>
        </div>
      </section>

      {/* Featured Venue Categories */}
      <section className="relative overflow-hidden bg-secondary/30 py-20 md:py-28">
        {/* Decorative background text */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-16 -translate-x-1/2 whitespace-nowrap font-display text-[15vw] leading-none text-foreground/[0.025]"
        >
          VENUES
        </div>

        <div className="container-page relative">
          {/* Section heading */}
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">Featured Venues</p>

            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Extraordinary Venues for
              <span className="block italic text-primary">Unforgettable Celebrations</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted-foreground">
              Explore remarkable wedding settings across Dubai and the UAE, from grand hotel
              ballrooms and private beaches to desert landscapes, elevated city venues, and peaceful
              coastal escapes.
            </p>

            <div className="mx-auto mt-10 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-border" />
              <span className="h-2 w-2 rotate-45 border border-primary/60" />
              <span className="h-px w-12 bg-border" />
            </div>
          </div>

          {/* Venue showcase */}
          <div className="mx-auto mt-20 max-w-7xl space-y-24 md:space-y-32">
            {featuredVenues.map((venue, index) => {
              const imageOnRight = index % 2 !== 0;
              const number = String(index + 1).padStart(2, "0");

              return (
                <article key={venue.title} className="group relative">
                  {/* Oversized background number */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-12 z-[5] select-none font-display text-[7rem] leading-none text-primary/[0.14] md:-top-20 md:text-[11rem] ${
                      imageOnRight ? "right-4 md:right-10" : "left-4 md:left-10"
                    }`}
                  >
                    {number}
                  </span>

                  <div
                    className={`relative z-10 grid items-center gap-0 lg:grid-cols-12 ${
                      imageOnRight ? "" : ""
                    }`}
                  >
                    {/* Image */}
                    <div
                      className={`relative lg:col-span-7 ${
                        imageOnRight
                          ? "lg:col-start-6 lg:row-start-1"
                          : "lg:col-start-1 lg:row-start-1"
                      }`}
                    >
                      <div className="relative aspect-[16/11] overflow-hidden bg-muted md:aspect-[16/10]">
                        <img
                          src={venue.image}
                          alt={venue.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.045]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                      </div>

                      {/* Decorative outline */}
                      <div
                        aria-hidden="true"
                        className={`absolute -z-10 hidden h-full w-full border border-primary/20 md:block ${
                          imageOnRight ? "-right-5 -top-5" : "-left-5 -top-5"
                        }`}
                      />
                    </div>

                    {/* Content panel */}
                    <div
                      className={`relative z-20 -mt-8 bg-background px-6 py-8 shadow-[0_24px_70px_rgba(40,25,15,0.12)] sm:px-8 md:px-10 md:py-11 lg:col-span-6 lg:mt-0 ${
                        imageOnRight
                          ? "lg:col-start-1 lg:row-start-1 lg:mr-[-3rem]"
                          : "lg:col-start-7 lg:row-start-1 lg:ml-[-3rem]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-primary" />

                        <p
                          data-venue-label
                          className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary"
                        >
                          Featured Setting
                        </p>
                      </div>

                      <h3 className="mt-5 font-display text-3xl leading-tight md:text-4xl">
                        {venue.title}
                      </h3>

                      <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base md:leading-8">
                        {venue.description}
                      </p>

                      {/* End line */}
                      <div className="mt-8 border-t border-border/80 pt-6">
                        <p className="text-sm leading-7 text-foreground/70 md:text-[15px]">
                          {venue.endLine}
                        </p>
                      </div>

                      {/* Decorative bottom detail */}
                      <div className="mt-7 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                          Dubai · UAE
                        </span>

                        <span className="flex items-center gap-2">
                          <span className="h-px w-8 bg-primary/40 transition-all duration-500 group-hover:w-14" />
                          <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-y bg-secondary/30">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-primary">
                Why Choose Us
              </p>

              <h2 className="mt-5 max-w-xl font-display text-4xl leading-tight md:text-5xl">
                Why Choose Our Wedding Planning Services?
              </h2>

              <div className="mt-8 h-px w-20 bg-border" />

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="font-display text-xl leading-snug md:text-2xl">
                    Experienced Wedding Planners &amp; Coordinators
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    Our passionate team of wedding planners and wedding coordinators brings years of
                    experience in creating exceptional celebrations across the UAE. From the first
                    consultation to your wedding day, we manage every detail with professionalism,
                    creativity, and genuine care, allowing you to relax and enjoy every moment.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl leading-snug md:text-2xl">
                    Bespoke Wedding Design &amp; Luxury Styling
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    Every wedding is uniquely designed to reflect your personality and vision. From
                    elegant wedding decoration in Dubai and floral installations to custom stage
                    styling, lighting, and tablescapes, we create timeless settings for
                    unforgettable luxury weddings in Dubai &amp; the UAE.
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xl leading-snug md:text-2xl">
                    Trusted Wedding Partners &amp; Seamless Planning
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                    As a leading wedding organizer the UAE, we've built strong relationships with the
                    region's finest venues, photographers, designers, entertainers, and hospitality
                    partners. Whether you're planning a destination celebration or a local wedding,
                    our wedding planning services ensure a smooth, stress-free experience with
                    trusted professionals by your side every step of the way.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Button asChild>
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
              </div>
            </div>

            <div className="relative mx-auto min-h-[460px] w-full max-w-xl">
              <div className="absolute right-0 top-0 h-[55%] w-[78%] overflow-hidden border border-border bg-background/80">
                <img
                  src={venueOne}
                  alt="Elegant wedding venue"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 h-[55%] w-[78%] overflow-hidden border border-border bg-background/80">
                <img
                  src={venueTwo}
                  alt="Luxury wedding venue"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
