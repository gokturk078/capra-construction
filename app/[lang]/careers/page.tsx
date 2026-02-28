import type { Metadata } from "next";
import { BriefcaseBusiness, GraduationCap, HandCoins } from "lucide-react";
import Image from "next/image";

import { getDictionary } from "@/dictionaries";
import { HeroFrame } from "@/components/layout/HeroFrame";
import { CareersAccordion } from "@/components/ui/CareersAccordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { isValidLocale, t, type Lang } from "@/lib/i18n";
import { MEDIA } from "@/lib/media";
import { siteConfig } from "@/lib/site";

type CareersPageProps = {
  params: { lang: string };
};

const cultureCards = {
  tr: [
    {
      title: "Profesyonel Gelişim",
      body: "Saha gerçekliği ve kurumsal teslim standartlarını birlikte öğrenebileceğiniz yapı."
    },
    {
      title: "Nitelikli Projeler",
      body: "Portföy hacminden çok teslim kalitesine odaklanan seçici proje ortamı."
    },
    {
      title: "Adil Karşılık",
      body: "Sorumluluk, teknik katkı ve karar etkisine göre şekillenen profesyonel yapı."
    }
  ],
  en: [
    {
      title: "Professional Growth",
      body: "An environment where you build both field judgment and corporate delivery discipline."
    },
    {
      title: "Qualified Projects",
      body: "A selective project environment focused on delivery quality rather than volume."
    },
    {
      title: "Fair Reward",
      body: "A professional structure shaped by responsibility, technical contribution, and decision impact."
    }
  ]
} satisfies Record<Lang, { title: string; body: string }[]>;

const cultureIcons = [GraduationCap, BriefcaseBusiness, HandCoins];

export function generateMetadata({ params }: CareersPageProps): Metadata {
  const lang = isValidLocale(params.lang) ? params.lang : "tr";
  const dictionary = getDictionary(lang);

  return {
    title: `${dictionary.nav.careers} | Capra Construction`,
    description: dictionary.careersPage.title,
    alternates: {
      canonical: `/${lang}/careers`,
      languages: {
        tr: "/tr/careers",
        en: "/en/careers"
      }
    },
    openGraph: {
      title: `${dictionary.nav.careers} | Capra Construction`,
      description: dictionary.careersPage.title,
      url: `${siteConfig.url}/${lang}/careers`,
      images: [MEDIA.careers.src]
    }
  };
}

export default function CareersPage({ params }: CareersPageProps) {
  if (!isValidLocale(params.lang)) {
    return null;
  }

  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);
  const openApplicationSubject =
    lang === "tr"
      ? "Capra Construction Açık Pozisyon Ön Başvurusu"
      : "Capra Construction Open Application";

  return (
    <>
      <HeroFrame
        variant="careers"
        density="balanced"
        contentClassName="max-w-4xl lg:pr-8"
        artColumnClassName="lg:max-w-[520px]"
        eyebrow={
          <Reveal>
            <SectionLabel className="text-stone">{dictionary.careersPage.label}</SectionLabel>
          </Reveal>
        }
        title={
          <Reveal>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(3rem,8vw,5.5rem)] font-semibold leading-[0.94] text-cloud">
              {dictionary.careersPage.title}
            </h1>
          </Reveal>
        }
        body={
          <Reveal>
            <p className="mt-6 max-w-3xl font-body text-base leading-8 text-stone/85">
              {lang === "tr"
                ? "Capra, hacim odaklı değil kalite ve karar güveni odaklı teslim kültürü kurar. Ekip yapımız bu standardı sahada ve ofiste sürdürebilecek profesyoneller için tasarlanır."
                : "Capra is built around delivery quality and decision confidence, not volume. Our team is structured for professionals who can maintain that standard across field and office environments."}
            </p>
          </Reveal>
        }
        art={
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent),radial-gradient(circle_at_top_left,rgba(201,137,91,0.08),transparent_35%)]" />
              <div className="relative aspect-[5/4]">
                <Image
                  src={MEDIA.careers.src}
                  alt={t(MEDIA.careers.alt, lang)}
                  fill
                  priority
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </Reveal>
        }
        supportingPanel={
          <Reveal>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
              <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-stone/72">
                {lang === "tr" ? "Çalışma Standardı" : "Working Standard"}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="font-heading text-[10px] uppercase tracking-[0.22em] text-stone/65">
                    {lang === "tr" ? "Teslim Disiplini" : "Delivery Discipline"}
                  </p>
                  <p className="mt-2 font-body text-sm leading-7 text-stone/88">
                    {lang === "tr"
                      ? "Net beklenti, görünür sorumluluk ve ölçülebilir kalite standardı."
                      : "Clear expectations, visible ownership, and measurable quality."}
                  </p>
                </div>
                <div className="rounded-lg border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="font-heading text-[10px] uppercase tracking-[0.22em] text-stone/65">
                    {lang === "tr" ? "Büyüme Alanı" : "Growth Track"}
                  </p>
                  <p className="mt-2 font-body text-sm leading-7 text-stone/88">
                    {lang === "tr"
                      ? "Saha, teknik koordinasyon ve ticari karar süreçlerinde gelişim alanı."
                      : "Room to grow across field, technical coordination, and commercial decisions."}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        }
      />

      <section className="border-t border-steel/10 bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <SectionLabel>{dictionary.careersPage.cultureLabel}</SectionLabel>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {cultureCards[lang].map((card, index) => {
              const Icon = cultureIcons[index];

              return (
                <Reveal key={card.title}>
                  <div className="rounded-lg border border-steel/15 bg-surface-card p-8 shadow-card">
                    <Icon className="h-10 w-10 text-steel" />
                    <h2 className="mt-6 font-display text-3xl font-semibold text-ink">
                      {card.title}
                    </h2>
                    <p className="mt-4 font-body text-base leading-8 text-steel">
                      {card.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-steel/10 bg-surface-muted px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <SectionLabel>{dictionary.careersPage.rolesLabel}</SectionLabel>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.careersPage.rolesTitle}
            </h2>
          </Reveal>
          <div className="mt-12">
            <CareersAccordion lang={lang} />
          </div>
        </div>
      </section>

      <section className="bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-shell gap-10 rounded-lg border border-steel/15 bg-surface-card p-8 shadow-card lg:grid-cols-[1fr,0.9fr] lg:p-12">
          <Reveal>
            <SectionLabel>{dictionary.careersPage.openApplicationLabel}</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.careersPage.openApplicationTitle}
            </h2>
            <p className="mt-6 max-w-2xl font-body text-base leading-8 text-steel">
              {lang === "tr"
                ? "Mühendislik, teslim, ticari yönetim veya stratejik büyüme alanlarında güçlü bir profiliniz varsa bizimle iletişime geçebilirsiniz."
                : "If you have a strong profile in engineering, delivery, commercial management, or strategic growth, you can contact us directly."}
            </p>
          </Reveal>
          <Reveal>
            <div className="rounded-lg border border-steel/12 bg-surface-muted p-8">
              <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-steel/70">
                {lang === "tr" ? "Başvuru Standardı" : "Application Standard"}
              </p>
              <div className="mt-6 space-y-4 font-body text-sm leading-7 text-steel">
                <p>
                  {lang === "tr"
                    ? "Özgeçmişinizde rol geçmişi, uzmanlık alanı ve teslim ettiğiniz proje tipleri net şekilde yer almalıdır."
                    : "Your CV should clearly state role history, area of expertise, and the types of projects you have delivered."}
                </p>
                <p>
                  {lang === "tr"
                    ? "Başvurular doğrudan yönetim değerlendirme havuzuna alınır. Uygun profillerle kontrollü şekilde iletişime geçilir."
                    : "Applications are reviewed directly by the management review pool. Suitable profiles are contacted in a controlled cycle."}
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-steel/12 bg-surface-card px-4 py-4">
                  <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-steel/70">
                    {lang === "tr" ? "E-posta" : "Email"}
                  </p>
                  <p className="mt-2 font-body text-sm text-ink">{siteConfig.email}</p>
                </div>
                <div className="rounded-lg border border-steel/12 bg-surface-card px-4 py-4">
                  <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-steel/70">
                    {lang === "tr" ? "Öncelik" : "Priority"}
                  </p>
                  <p className="mt-2 font-body text-sm text-ink">
                    {lang === "tr" ? "Teknik ve teslim rolleri" : "Technical and delivery roles"}
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <Button
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(openApplicationSubject)}`}
                  className="w-full justify-center"
                >
                  {lang === "tr" ? "Profilini E-posta ile Gönder" : "Send Profile by Email"}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
