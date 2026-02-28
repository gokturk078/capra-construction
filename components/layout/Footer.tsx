import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";

import { BrandMark } from "@/components/layout/BrandMark";
import type { Dictionary } from "@/dictionaries";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { services } from "@/data/services";
import { t, type Lang } from "@/lib/i18n";
import { navLinkKeys, siteConfig, socialLinks } from "@/lib/site";

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  YouTube: Youtube
};

type FooterProps = {
  lang: Lang;
  dictionary: Pick<Dictionary, "nav" | "common">;
};

export function Footer({ lang, dictionary }: FooterProps) {
  const navigationLabel = lang === "tr" ? "Navigasyon" : "Navigation";
  const servicesLabel = lang === "tr" ? "Uzmanlık Alanları" : "Capabilities";
  const contactLabel = lang === "tr" ? "Kurumsal İletişim" : "Corporate Contact";
  const privacyRequestHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    lang === "tr" ? "Gizlilik Politikası Talebi" : "Privacy Policy Request"
  )}`;
  const termsRequestHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    lang === "tr" ? "Kullanım Koşulları Talebi" : "Terms of Use Request"
  )}`;

  return (
    <footer className="bg-ink text-cloud">
      <GoldDivider className="h-px bg-steel/30" />
      <div className="mx-auto max-w-shell px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <BrandMark href={`/${lang}`} inverted showEmblem={false} />
            <p className="mt-6 max-w-xs font-body text-sm leading-7 text-stone/85">
              {dictionary.common.brandTagline}
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((item) => {
                const Icon = socialIcons[item.label];

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    aria-label={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.03] text-stone transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.06] hover:text-cloud"
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-cloud">
              {navigationLabel}
            </h3>
            <ul className="mt-6 space-y-4 font-body text-sm text-stone/85">
              {navLinkKeys.map((link) => {
                const href = link.href ? `/${lang}${link.href}` : `/${lang}`;
                const label = dictionary.nav[link.key];

                return (
                <li key={link.key}>
                  <Link href={href} className="transition-colors duration-500 hover:text-stone">
                    {label}
                  </Link>
                </li>
              );
              })}
              <li>
                <Link href={`/${lang}/careers`} className="transition-colors duration-500 hover:text-stone">
                  {dictionary.nav.careers}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-cloud">
              {servicesLabel}
            </h3>
            <ul className="mt-6 space-y-4 font-body text-sm text-stone/85">
              {services.map((service) => (
                <li key={service.slug} className="leading-7">
                  {t(service.title, lang)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.3em] text-cloud">
              {contactLabel}
            </h3>
            <ul className="mt-6 space-y-4 font-body text-sm text-stone/85">
              <li>{siteConfig.address}</li>
              <li>
                <Link href={siteConfig.phoneHref} className="transition-colors duration-500 hover:text-stone">
                  {siteConfig.phone}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${siteConfig.email}`} className="transition-colors duration-500 hover:text-stone">
                  {siteConfig.email}
                </Link>
              </li>
              <li>{siteConfig.hours}</li>
            </ul>
          </div>
        </div>

        <GoldDivider className="mt-12" />

        <div className="mt-8 flex flex-col gap-4 font-body text-xs uppercase tracking-[0.2em] text-stone/60 md:flex-row md:items-center md:justify-between">
          <p>© 2025 Capra Construction Ltd. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href={privacyRequestHref} className="transition-colors duration-500 hover:text-stone">
              {dictionary.common.privacy}
            </Link>
            <Link href={termsRequestHref} className="transition-colors duration-500 hover:text-stone">
              {dictionary.common.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
