import type { Metadata } from "next";
import { Clock3, Mail, MapPinned, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { getDictionary } from "@/dictionaries";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { isValidLocale, t, type Lang } from "@/lib/i18n";
import { MEDIA } from "@/lib/media";
import { siteConfig, socialLinks } from "@/lib/site";

type ContactPageProps = {
  params: { lang: string };
};

export function generateMetadata({ params }: ContactPageProps): Metadata {
  const lang = isValidLocale(params.lang) ? params.lang : "tr";
  const dictionary = getDictionary(lang);

  return {
    title: `${dictionary.nav.contact} | Capra Construction`,
    description: dictionary.contactPage.body,
    alternates: {
      canonical: `/${lang}/contact`,
      languages: {
        tr: "/tr/contact",
        en: "/en/contact"
      }
    },
    openGraph: {
      title: `${dictionary.nav.contact} | Capra Construction`,
      description: dictionary.contactPage.body,
      url: `${siteConfig.url}/${lang}/contact`,
      images: [MEDIA.contact.src]
    }
  };
}

export default function ContactPage({ params }: ContactPageProps) {
  if (!isValidLocale(params.lang)) {
    return null;
  }

  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);
  const profileRequestHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    lang === "tr" ? "Şirket Profili Talebi" : "Company Profile Request"
  )}`;

  return (
    <>
      <section className="border-t border-steel/10 bg-surface-page px-6 pb-24 pt-32 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-shell gap-12 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <Reveal>
              <SectionLabel>{dictionary.contactPage.label}</SectionLabel>
              <h1 className="mt-6 font-display text-[clamp(2.8rem,8vw,5rem)] font-semibold text-ink">
                {dictionary.contactPage.title}
              </h1>
              <p className="mt-6 max-w-2xl font-body text-base leading-8 text-steel">
                {dictionary.contactPage.body}
              </p>
            </Reveal>
            <div className="mt-12 rounded-lg border border-steel/15 bg-surface-card p-8 shadow-card">
              <ContactForm lang={lang} labels={dictionary.form} />
            </div>
          </div>

          <div className="space-y-8">
            <Reveal>
              <div className="overflow-hidden rounded-lg border border-steel/15 bg-slate shadow-card">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={MEDIA.contact.src}
                    alt={t(MEDIA.contact.alt, lang)}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="overflow-hidden rounded-lg border border-steel/15 bg-surface-card shadow-card">
                <iframe
                  title={lang === "tr" ? "Capra ofis konumu" : "Capra office location"}
                  src="https://www.google.com/maps?q=Nicosia%20Northern%20Cyprus&output=embed"
                  className="h-[320px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-lg border border-steel/15 bg-surface-card p-8 shadow-card">
                <div className="space-y-6">
                  <ContactRow lang={lang} icon={MapPinned} label={lang === "tr" ? "Adres" : "Address"}>
                    {siteConfig.address}
                  </ContactRow>
                  <ContactRow lang={lang} icon={Phone} label={lang === "tr" ? "Telefon" : "Phone"}>
                    <Link href={siteConfig.phoneHref} className="transition-colors duration-500 hover:text-ink">
                      {siteConfig.phone}
                    </Link>
                  </ContactRow>
                  <ContactRow lang={lang} icon={Mail} label={lang === "tr" ? "E-posta" : "Email"}>
                    <Link href={`mailto:${siteConfig.email}`} className="transition-colors duration-500 hover:text-ink">
                      {siteConfig.email}
                    </Link>
                  </ContactRow>
                  <ContactRow lang={lang} icon={Clock3} label={lang === "tr" ? "Çalışma Saatleri" : "Office Hours"}>
                    {siteConfig.hours}
                  </ContactRow>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      className="rounded-none border border-steel/15 px-4 py-3 font-heading text-[11px] uppercase tracking-[0.22em] text-steel transition-colors duration-500 hover:border-steel/30 hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div id="company-profile" className="mt-8 space-y-3">
                  <Button href={profileRequestHref} variant="secondary">
                    {dictionary.common.companyProfile}
                  </Button>
                  <p className="font-body text-sm text-steel">{dictionary.contactPage.profileNote}</p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-lg border border-steel/15 bg-ink p-8 text-cloud shadow-card">
                <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-stone/72">
                  {lang === "tr" ? "İletişim Standardı" : "Contact Standard"}
                </p>
                <div className="mt-6 space-y-4">
                  <p className="font-body text-sm leading-7 text-stone/88">
                    {lang === "tr"
                      ? "Yatırımcı, arsa sahibi ve proje sahibi talepleri kontrollü değerlendirme sırasına alınır."
                      : "Investor, landowner, and project-owner enquiries are routed into a controlled review cycle."}
                  </p>
                  <p className="font-body text-sm leading-7 text-stone/88">
                    {lang === "tr"
                      ? "İlk dönüşlerde kapsam, zamanlama ve karar yapısı netleştirilir; uygun dosyalar ilgili ekibe aktarılır."
                      : "Initial responses clarify scope, timing, and decision structure before viable opportunities move to the relevant team."}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-steel/10 bg-surface-muted px-6 pb-24 lg:px-10 lg:pb-40">
        <div className="mx-auto grid max-w-shell gap-6 lg:grid-cols-3">
          <OfficeCard
            title={lang === "tr" ? "Yatırımcı İlişkileri" : "Investor Relations"}
            body={
              lang === "tr"
                ? "Sermaye ortakları, satın alma ekipleri ve kurumsal yatırım karar vericileri için öncelikli iletişim hattı."
                : "A priority contact line for capital partners, acquisition teams, and institutional decision-makers."
            }
          />
          <OfficeCard
            title={lang === "tr" ? "Proje Teslim" : "Project Delivery"}
            body={
              lang === "tr"
                ? "Aktif projelerde kapsam, program, maliyet ve koordinasyon başlıklarını yöneten teslim ekibi."
                : "The delivery team responsible for scope, schedule, cost, and coordination across active projects."
            }
          />
          <OfficeCard
            title={lang === "tr" ? "Stratejik Ortaklıklar" : "Strategic Partnerships"}
            body={
              lang === "tr"
                ? "Arsa sahipleri, ortak girişimler ve çok fazlı geliştirme fırsatları için kurumsal değerlendirme kanalı."
                : "A corporate review channel for landowners, joint ventures, and multi-phase development opportunities."
            }
          />
        </div>
      </section>
    </>
  );
}

function ContactRow({
  lang,
  icon: Icon,
  label,
  children
}: {
  lang: Lang;
  icon: typeof MapPinned;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-1 h-5 w-5 text-steel" />
      <div>
        <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-steel/70">
          {label}
        </p>
        <div className="mt-2 font-body text-sm leading-7 text-steel">{children}</div>
      </div>
    </div>
  );
}

function OfficeCard({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <div className="rounded-lg border border-steel/15 bg-surface-card p-6 shadow-card">
        <h2 className="font-heading text-sm uppercase tracking-[0.22em] text-ink">{title}</h2>
        <p className="mt-4 font-body text-sm leading-7 text-steel">{body}</p>
      </div>
    </Reveal>
  );
}
