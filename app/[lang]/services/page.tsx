import type { Metadata } from "next";
import {
  Activity,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cuboid,
  Factory,
  Hammer,
  Landmark,
  Leaf,
  ShieldCheck,
  Wallet,
  Workflow
} from "lucide-react";
import Image from "next/image";

import { getDictionary } from "@/dictionaries";
import { HeroFrame } from "@/components/layout/HeroFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { isValidLocale, t, type Lang } from "@/lib/i18n";
import { MEDIA } from "@/lib/media";
import { siteConfig } from "@/lib/site";

const serviceIcons = {
  building: Building2,
  factory: Factory,
  landmark: Landmark,
  briefcase: BriefcaseBusiness,
  leaf: Leaf,
  hammer: Hammer
};

const capabilities = {
  tr: [
    "BIM Modelleme",
    "Sismik Mühendislik",
    "Yeşil Yapı Kriterleri",
    "Kalite Güvence",
    "Maliyet Kontrolü",
    "Saha Güvenliği",
    "Teslim Sonrası Destek",
    "3B Görselleştirme"
  ],
  en: [
    "BIM Modeling",
    "Seismic Engineering",
    "Green Building Criteria",
    "Quality Assurance",
    "Cost Control",
    "Site Safety",
    "Post-Handover Support",
    "3D Visualization"
  ]
} satisfies Record<Lang, string[]>;

const capabilityIcons = [
  Workflow,
  Activity,
  Leaf,
  CheckCircle2,
  Wallet,
  ShieldCheck,
  BriefcaseBusiness,
  Cuboid
];

const processSteps = {
  tr: [
    "Kapsam ve risk çerçevesini netleştiririz.",
    "Karar akışını ve raporlama yapısını kurarız.",
    "Tasarım ve teknik koordinasyonu hizalarız.",
    "Saha üretimini kontrollü ritimde yönetiriz.",
    "Devreye alma ve kullanıcı devrini tamamlarız."
  ],
  en: [
    "We clarify scope and risk exposure.",
    "We establish decision flow and reporting rhythm.",
    "We align design and technical coordination.",
    "We manage field delivery with controlled pacing.",
    "We complete commissioning and user handover."
  ]
} satisfies Record<Lang, string[]>;

type ServicesPageProps = {
  params: { lang: string };
};

export function generateMetadata({ params }: ServicesPageProps): Metadata {
  const lang = isValidLocale(params.lang) ? params.lang : "tr";
  const dictionary = getDictionary(lang);

  return {
    title: `${dictionary.nav.services} | Capra Construction`,
    description: dictionary.servicesPage.title,
    alternates: {
      canonical: `/${lang}/services`,
      languages: {
        tr: "/tr/services",
        en: "/en/services"
      }
    },
    openGraph: {
      title: `${dictionary.nav.services} | Capra Construction`,
      description: dictionary.servicesPage.title,
      url: `${siteConfig.url}/${lang}/services`,
      images: [MEDIA.services.consulting.src]
    }
  };
}

export default function ServicesPage({ params }: ServicesPageProps) {
  if (!isValidLocale(params.lang)) {
    return null;
  }

  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);
  const heroProofPoints =
    lang === "tr"
      ? ["Mühendislik Kontrolü", "Maliyet Görünürlüğü", "Teslim Disiplini"]
      : ["Engineering Control", "Cost Visibility", "Delivery Discipline"];
  const authorityAnchors =
    lang === "tr"
      ? ["Kapsam Netliği", "Raporlama Ritmi", "Teknik Koordinasyon", "Kontrollü Devir"]
      : ["Scope Clarity", "Reporting Rhythm", "Technical Coordination", "Controlled Handover"];

  return (
    <>
      <HeroFrame
        variant="services"
        density="compact"
        contentWidth="narrow"
        artWidth="narrow"
        contentClassName="max-w-3xl lg:pr-10"
        artColumnClassName="lg:max-w-[520px]"
        eyebrow={
          <Reveal>
            <SectionLabel className="text-stone">{dictionary.servicesPage.label}</SectionLabel>
          </Reveal>
        }
        title={
          <Reveal>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(3rem,8vw,5.25rem)] font-semibold leading-[0.94] text-cloud">
              {dictionary.servicesPage.title}
            </h1>
          </Reveal>
        }
        body={
          <Reveal>
            <div className="mt-6 max-w-3xl space-y-5 font-body text-base leading-8 text-stone/86">
              <p>
                {lang === "tr"
                  ? "Capra, mühendislik doğruluğunu finansal disiplin ve saha teslim ritmiyle bir araya getirir. Her hizmet başlığı, yatırım değerini koruyan kontrollü uygulama modeli etrafında kurgulanır."
                  : "Capra aligns engineering accuracy with financial discipline and controlled site delivery. Every service line is structured around protecting project value through disciplined execution."}
              </p>
              <p>
                {lang === "tr"
                  ? "Capra adı klasik kökünde keçiye dayanır; bizim için bu, yüksek zemin muhakemesi, sağlam adım ve üst seviye teslim standardı anlamına gelir."
                  : "Capra derives from the classical root for goat; for us, that translates into sure-footed judgment, stable execution, and top-tier delivery standards."}
              </p>
            </div>
          </Reveal>
        }
        actions={
          <Reveal>
            <div className="mt-9 space-y-7">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  href="#services-catalog"
                  className="border-white/10 bg-white text-ink hover:border-white hover:bg-stone"
                >
                  {lang === "tr" ? "Hizmetleri İncele" : "Explore Services"}
                </Button>
                <Button
                  href={`/${lang}/contact`}
                  variant="secondary"
                  className="border-white/15 bg-white/5 text-cloud hover:border-white/20 hover:bg-white/10 hover:text-cloud"
                >
                  {lang === "tr" ? "Görüşme Planla" : "Request Consultation"}
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {heroProofPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="font-heading text-[10px] uppercase tracking-[0.22em] text-stone/62">
                      {lang === "tr" ? "Temel Güvence" : "Core Proof"}
                    </p>
                    <p className="mt-2 font-body text-sm text-stone/92">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        }
        art={
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02),transparent),linear-gradient(180deg,rgba(15,23,32,0.04),rgba(15,23,32,0.22))]" />
              <div className="absolute right-4 top-4">
                <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-heading text-[10px] uppercase tracking-[0.22em] text-stone/72">
                  {lang === "tr" ? "Capra Hizmet Modeli" : "Capra Service Model"}
                </span>
              </div>
              <div className="relative aspect-[5/4]">
                <Image
                  src={MEDIA.services.consulting.src}
                  alt={t(MEDIA.services.consulting.alt, lang)}
                  fill
                  priority
                  className="object-contain p-7 opacity-78"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>
            </div>
          </Reveal>
        }
        supportingPanel={
          <Reveal>
            <div className="rounded-lg border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-flex rounded-full border border-white/10 px-3 py-1.5 font-heading text-[10px] uppercase tracking-[0.24em] text-stone/72">
                  Capra
                </span>
                <div>
                  <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-stone/72">
                    {lang === "tr" ? "Capra Teslim İlkesi" : "Capra Delivery Principle"}
                  </p>
                  <p className="mt-2 font-body text-sm leading-7 text-stone/88">
                    {lang === "tr"
                      ? "Doğru kapsam, görünür karar akışı ve kontrollü uygulama aynı sistemde birleşir."
                      : "Clear scope, visible decision flow, and controlled execution are kept within the same operating system."}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {authorityAnchors.map((anchor) => (
                  <div
                    key={anchor}
                    className="rounded-lg border border-white/8 bg-white/[0.03] px-4 py-4"
                  >
                    <p className="font-body text-sm text-stone/92">{anchor}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        }
      />

      <section
        id="services-catalog"
        className="scroll-mt-32 border-t border-steel/10 bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-shell space-y-24">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            const exampleProject = projects.find(
              (project) => project.slug === service.exampleProjectSlug
            );

            return (
              <div key={service.slug} className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <Reveal className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="overflow-hidden rounded-lg border border-steel/15 bg-slate shadow-card">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={service.image}
                        alt={t(service.title, lang)}
                        fill
                        className="object-contain p-6"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </Reveal>

                <Reveal className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <Icon className="h-10 w-10 text-steel" />
                  <h2 className="mt-6 font-display text-4xl font-semibold text-ink lg:text-5xl">
                    {t(service.title, lang)}
                  </h2>
                  <p className="mt-5 font-body text-base leading-8 text-steel">
                    {t(service.summary, lang)}
                  </p>
                  <div className="mt-8 space-y-5 font-body text-base leading-8 text-steel">
                    {t(service.description, lang).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-5 sm:grid-cols-3">
                    {t(service.process, lang).map((step, stepIndex) => (
                      <div key={step}>
                        <p className="font-heading text-3xl font-semibold text-steel">
                          {String(stepIndex + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-3 font-body text-sm leading-7 text-steel">{step}</p>
                      </div>
                    ))}
                  </div>
                  {exampleProject ? (
                    <div className="mt-8 rounded-lg border border-steel/15 bg-surface-card p-6 shadow-card">
                      <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-steel/78">
                        {lang === "tr" ? "Örnek Proje" : "Example Project"}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                        {t(exampleProject.name, lang)}
                      </h3>
                      <p className="mt-2 font-body text-sm text-steel">
                        {t(exampleProject.location, lang)} · {exampleProject.year}
                      </p>
                      <div className="mt-5">
                        <Button href={`/${lang}/projects/${exampleProject.slug}`} variant="secondary">
                          {lang === "tr" ? "Projeyi İncele" : "Explore Project"}
                        </Button>
                      </div>
                    </div>
                  ) : null}
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-steel/10 bg-surface-muted px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <SectionLabel>{dictionary.servicesPage.processLabel}</SectionLabel>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.servicesPage.processTitle}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            {processSteps[lang].map((step, index) => (
              <div key={step} className="rounded-lg border border-steel/15 bg-surface-card p-6 shadow-card">
                <p className="font-heading text-3xl font-semibold text-steel">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 font-body text-sm leading-7 text-steel">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <SectionLabel>{dictionary.servicesPage.capabilitiesLabel}</SectionLabel>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.servicesPage.capabilitiesTitle}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities[lang].map((item, index) => {
              const Icon = capabilityIcons[index];

              return (
                <Reveal key={item}>
                  <div className="rounded-lg border border-steel/15 bg-surface-card p-6 shadow-card">
                    <Icon className="h-10 w-10 text-steel" />
                    <h3 className="mt-5 font-heading text-sm uppercase tracking-[0.22em] text-ink">
                      {item}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
