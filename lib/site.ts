export const siteConfig = {
  name: "Capra Construction",
  url: "https://capraconstruction.com",
  email: "info@capraconstruction.com",
  phone: "+90 392 555 12 47",
  phoneHref: "tel:+903925551247",
  address: "Kyrenia Avenue No. 47, Nicosia, TRNC",
  hours: "Mon-Fri 08:00-18:00",
  description:
    "Capra Construction delivers residential, commercial, infrastructure, and restoration projects with disciplined engineering and investor-focused delivery control."
};

export const navLinkKeys = [
  { href: "", key: "home" },
  { href: "/projects", key: "projects" },
  { href: "/services", key: "services" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" }
] as const;

export const socialLinks = [
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.youtube.com", label: "YouTube" }
] as const;

export const companyStats = [
  { value: 150, suffix: "+", label: "Completed Projects" },
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 2500, suffix: "", label: "Skilled Professionals" },
  { value: 98, suffix: "%", label: "Client Satisfaction Rate" }
] as const;
