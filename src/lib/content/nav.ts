export interface NavLink {
  label: string;
  to: string;
}

export const primaryNav: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Wedding Services", to: "/services" },
  { label: "Wedding Venues", to: "/venues" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Work Process", to: "/process" },
  { label: "Contact", to: "/contact" },
];

export const footerExplore: NavLink[] = [
  { label: "Wedding Guide", to: "/wedding-guide" },
  { label: "FAQs", to: "/#faq" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Contact", to: "/contact" },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/company/awesome-ae/",
  instagram: "https://www.instagram.com/awesomeeventsuae/",
  youtube: "https://www.youtube.com/@awesomeevents4700",
};

export const company = {
  name: "Awesome Events Weddings",
  tagline: "Dubai's Leading Luxury Wedding Planner",
  phone: "+971 4 000 0000",
  email: "hello@awesomeevents.ae",
  address: "207, East Wing, Latifa Tower, Sheikh Zayed Road, Dubai (UAE) P.O. 111152",
  yearsExperience: 12,
};
