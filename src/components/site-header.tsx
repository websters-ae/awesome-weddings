import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { primaryNav, company } from "@/lib/content/nav";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { flagshipServices, culturalServices } from "@/lib/content/services";
import Logo from "/logo.png";

const serviceLinks = [...flagshipServices, ...culturalServices].map((service) => ({
  label: service.title,
  slug: service.slug,
}));

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  const { locale, setLocale } = useI18n();

  const closeDesktopServices = () => {
    setDesktopServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeDesktopServices}
          aria-label="Awesome Events Weddings Dubai"
          className="flex min-w-0 items-center"
        >
          <img
            src={Logo}
            alt=""
            aria-hidden="true"
            className="h-11 w-auto shrink-0 object-contain sm:h-12 md:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => {
            if (item.to === "/services") {
              return (
                <div
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={closeDesktopServices}
                  onFocus={() => setDesktopServicesOpen(true)}
                  onBlur={(event) => {
                    /*
                      Close only when focus moves completely
                      outside the dropdown container.
                    */
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      closeDesktopServices();
                    }
                  }}
                >
                  <Link
                    to={item.to}
                    onClick={closeDesktopServices}
                    className="inline-flex items-center gap-1 text-sm text-foreground/80 transition-colors hover:text-primary"
                    activeProps={{
                      className: "text-primary",
                    }}
                  >
                    {item.label}

                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        desktopServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {desktopServicesOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3">
                      <div className="overflow-hidden rounded-sm border border-border bg-background shadow-xl">
                        <ul className="py-2">
                          {serviceLinks.map((service) => (
                            <li key={service.slug}>
                              <Link
                                to="/wedding-services/$slug"
                                params={{
                                  slug: service.slug,
                                }}
                                onClick={closeDesktopServices}
                                className="block px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                              >
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={closeDesktopServices}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
                activeProps={{
                  className: "text-primary",
                }}
                activeOptions={{
                  exact: item.to === "/",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Header actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            className="notranslate inline-flex items-center gap-1.5 rounded-full border border-primary/40 px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
            translate="no"
            lang={locale === "en" ? "ar" : "en"}
          >
            <Globe className="h-3.5 w-3.5" />

            <span
              style={{
                fontFamily: locale === "en" ? "'Cairo','Tajawal',sans-serif" : undefined,
              }}
            >
              {locale === "en" ? "عربي" : "English"}
            </span>
          </button>

          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/contact">Book Free Consultation</Link>
          </Button>

          <button
            type="button"
            className="lg:hidden"
            onClick={() => {
              setOpen((current) => !current);
              setMobileServicesOpen(false);
            }}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {primaryNav.map((item) => {
              if (item.to === "/services") {
                return (
                  <div key={item.to} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        to={item.to}
                        onClick={() => {
                          setOpen(false);
                          setMobileServicesOpen(false);
                        }}
                        className="py-2 text-sm text-foreground/80"
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((current) => !current)}
                        aria-label="Toggle wedding services"
                        aria-expanded={mobileServicesOpen}
                        className="p-2"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <ul className="mb-1 ml-3 flex flex-col border-l border-border/60 pl-3">
                        {serviceLinks.map((service) => (
                          <li key={service.slug}>
                            <Link
                              to="/wedding-services/$slug"
                              params={{
                                slug: service.slug,
                              }}
                              onClick={() => {
                                setOpen(false);
                                setMobileServicesOpen(false);
                              }}
                              className="block py-1.5 text-sm text-foreground/70 hover:text-primary"
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    setOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  className="py-2 text-sm text-foreground/80"
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-2 flex items-center gap-3">
              <Button asChild size="sm" className="flex-1">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book Free Consultation
                </Link>
              </Button>

              <button
                type="button"
                onClick={() => setLocale(locale === "en" ? "ar" : "en")}
                className="rounded-full border border-border px-3 py-1.5 text-xs uppercase tracking-widest"
              >
                {locale === "en" ? "AR" : "EN"}
              </button>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">{company.tagline}</p>
          </nav>
        </div>
      )}
    </header>
  );
}
