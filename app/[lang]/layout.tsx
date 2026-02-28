import type { ReactNode } from "react";
import Script from "next/script";
import { notFound } from "next/navigation";

import { getDictionary } from "@/dictionaries";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { isValidLocale, locales, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  if (!isValidLocale(params.lang)) {
    notFound();
  }

  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Capra Construction",
    url: `${siteConfig.url}/${lang}`,
    logo: `${siteConfig.url}/logo.svg`,
    inLanguage: lang,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-392-555-1247",
      contactType: "customer service"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nicosia",
      addressCountry: "CY"
    }
  };

  return (
    <>
      <Script
        id={`capra-organization-schema-${lang}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <LoadingScreen />
      <Navbar lang={lang} dictionary={dictionary.nav} />
      <PageTransition>
        <main id="main-content" className="overflow-x-hidden bg-surface-page">
          {children}
        </main>
      </PageTransition>
      <Footer lang={lang} dictionary={{ nav: dictionary.nav, common: dictionary.common }} />
      <ScrollToTopButton label={dictionary.common.scrollTop} />
      <CookieBanner
        text={dictionary.common.cookie}
        acceptLabel={dictionary.common.cookieAccept}
        declineLabel={dictionary.common.cookieDecline}
      />
    </>
  );
}
