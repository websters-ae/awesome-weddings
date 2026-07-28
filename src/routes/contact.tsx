import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { company, socialLinks } from "@/lib/content/nav";

/*
  Paste your published Google Form link below.

  Normal link example:
  https://docs.google.com/forms/d/e/FORM_ID/viewform

  The embed link should normally be:
  https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true
*/

const GOOGLE_FORM_URL = "PASTE_YOUR_GOOGLE_FORM_LINK_HERE";

const GOOGLE_FORM_EMBED_URL = "PASTE_YOUR_GOOGLE_FORM_EMBED_LINK_HERE";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { type?: string } => ({
    type: typeof search.type === "string" ? search.type : undefined,
  }),

  head: () => ({
    meta: [
      {
        title: "Contact Us | Awesome Events Weddings — Wedding Planner Dubai",
      },
      {
        name: "description",
        content:
          "Book a free consultation with Dubai's leading luxury wedding planner. Share your vision and receive a bespoke wedding consultation across the UAE.",
      },
      {
        property: "og:title",
        content: "Contact Awesome Events Weddings",
      },
      {
        property: "og:description",
        content: "Book a free luxury wedding consultation in Dubai.",
      },
    ],
  }),

  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* Page heading */}
      <section className="section-y">
        <div className="container-page">
          <nav className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-primary">
              Home
            </Link>

            <span className="mx-2">/</span>

            <span>Contact</span>
          </nav>

          <SectionHeader
            eyebrow="Contact Us"
            title="Looking for a Wedding Planner in Dubai?"
            body="Planning a wedding in Dubai or anywhere across the UAE? Complete our wedding questionnaire and share a few details about your celebration. Our wedding specialists will prepare a personalised consultation tailored to your vision."
          />
        </div>
      </section>

      {/* Contact and Google Form */}
      <section className="section-y bg-secondary/40">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            {/* Google Form */}
            <div>
              <div className="h-full rounded-sm border border-border bg-card p-6 md:p-8">
                <p className="eyebrow">Free Wedding Consultation</p>

                <h2 className="mt-3 font-display text-2xl md:text-3xl">
                  Start Your Wedding Questionnaire
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  Tell us about your wedding date, guest count, preferred location, celebration
                  style, and the services you require. One of our wedding specialists will review
                  your enquiry and contact you shortly.
                </p>

                <div className="mt-6">
                  <Button asChild variant="outline">
                    <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Open Questionnaire
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact information */}
            <aside>
              <div className="h-full rounded-sm border border-border bg-card p-6">
                <h3 className="font-display text-xl">Get in Touch</h3>

                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                    <span>{company.address}</span>
                  </li>

                </ul>

                <div className="mt-6 flex gap-2">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full border border-border p-2 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>

                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="rounded-full border border-border p-2 transition-colors hover:border-primary hover:text-primary"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </aside>
          </div>

          {/* Full-width landscape map */}
          <div className="mt-12">
            <div className="mb-6 text-center">
              <p className="eyebrow">Our Location</p>

              <h2 className="mt-3 font-display text-2xl md:text-3xl">Visit Us in Dubai</h2>
            </div>

            <div className="overflow-hidden rounded-sm border border-border bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.454404604121!2d55.27858347593051!3d25.221615630710232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43c051408b6d%3A0xf0ecb08f2b1eadb3!2sAwesome%20Events!5e0!3m2!1sen!2sae!4v1785224241633!5m2!1sen!2sae"
                title="Awesome Events Weddings location"
                width="100%"
                height="520"
                loading="lazy"
                className="block h-[380px] w-full md:h-[480px] lg:h-[520px]"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
