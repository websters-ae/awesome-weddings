import { Link } from "@tanstack/react-router";
import { footerExplore, socialLinks, company } from "@/lib/content/nav";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
            Address
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80">
            {company.address}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
            Follow
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-gold"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60">
            Explore
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            {footerExplore.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col items-center justify-between gap-4 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Crafted for couples across the UAE.</p>
        </div>
      </div>
    </footer>
  );
}
