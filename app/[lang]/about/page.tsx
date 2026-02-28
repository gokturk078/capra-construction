import type { Metadata } from "next";
import { Award, Linkedin, ShieldCheck, Target, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/dictionaries";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { teamMembers } from "@/data/team";
import { isValidLocale, t, type Lang } from "@/lib/i18n";
import { MEDIA } from "@/lib/media";
import { siteConfig } from "@/lib/site";

const timeline = {
  tr: [
    { year: "2010", text: "Capra, kontrollü teslim ve seçici proje yaklaşımıyla Lefkoşa'da kuruldu." },
    { year: "2014", text: "Konut projelerinin yanında ticari ve karma kullanım işlerine genişledi." },
    { year: "2018", text: "Kamu ve altyapı teslimlerinde daha görünür bir kurumsal rol üstlendi." },
    { year: "2022", text: "Ölçek, raporlama ve saha sistemleri kurumsal standarda taşındı." },
    { year: "2025", text: "Capra, bölgesel ölçekte referans niteliğinde bir teslim platformu haline geldi." }
  ],
  en: [
    { year: "2010", text: "Capra was founded in Nicosia around controlled delivery and selective project choice." },
    { year: "2014", text: "The business expanded from housing into commercial and mixed-use work." },
    { year: "2018", text: "Capra took on a more visible corporate role in public and infrastructure delivery." },
    { year: "2022", text: "Scale, reporting, and site systems were elevated to stronger corporate standards." },
    { year: "2025", text: "Capra matured into a regional delivery platform with reference-level credibility." }
  ]
} satisfies Record<Lang, { year: string; text: string }[]>;

const credentials = ["ISO 9001", "ISO 14001", "OHSAS 18001", "Green Building Council", "Project Governance Charter"];

type AboutPageProps = {
  params: { lang: string };
};

export function generateMetadata({ params }: AboutPageProps): Metadata {
  const lang = isValidLocale(params.lang) ? params.lang : "tr";
  const dictionary = getDictionary(lang);

  return {
    title: `${dictionary.nav.about} | Capra Construction`,
    description: dictionary.aboutPage.title,
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        tr: "/tr/about",
        en: "/en/about"
      }
    },
    openGraph: {
      title: `${dictionary.nav.about} | Capra Construction`,
      description: dictionary.aboutPage.title,
      url: `${siteConfig.url}/${lang}/about`,
      images: [MEDIA.about.src]
    }
  };
}

export default function AboutPage({ params }: AboutPageProps) {
  if (!isValidLocale(params.lang)) {
    return null;
  }

  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);
  const metrics = [
    {
      value: 500,
      prefix: "€",
      suffix: "M+",
      label: lang === "tr" ? "Toplam Proje Değeri" : "Project Value"
    },
    {
      value: 15,
      suffix: "+",
      label: lang === "tr" ? "Kurumsal Başarı ve Takdir" : "Awards & Recognition"
    },
    {
      value: 0,
      suffix: "",
      label: lang === "tr" ? "2024 Kritik Güvenlik Vakası" : "Critical Safety Incidents in 2024"
    },
    {
      value: 35,
      suffix: "%",
      label: lang === "tr" ? "Tekrar Çalışan Müşteri" : "Repeat Client Ratio"
    }
  ];

  return (
    <>
      <section className="bg-surface-page px-6 pt-28 lg:px-10">
        <div className="mx-auto grid max-w-shell overflow-hidden rounded-lg border border-steel/12 bg-surface-card shadow-[0_12px_28px_rgba(15,23,32,0.05)] lg:grid-cols-2">
          <div className="relative min-h-[420px] bg-slate">
            <div className="absolute left-6 top-6 z-10">
              <div className="rounded-sm border border-white/10 bg-white/[0.96] px-4 py-3 shadow-[0_10px_28px_rgba(0,0,0,0.12)]">
                <span className="block font-heading text-[11px] font-semibold uppercase tracking-[0.24em] text-ink">
                  Capra
                </span>
                <span className="mt-1 block font-heading text-[8px] uppercase tracking-[0.34em] text-steel/82">
                  Construction
                </span>
              </div>
            </div>
            <Image
              src={MEDIA.about.src}
              alt={t(MEDIA.about.alt, lang)}
              fill
              priority
              className="object-contain p-8"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="bg-surface-card p-10 text-ink lg:p-14">
            <div className="inline-flex items-center gap-3 rounded-full border border-steel/12 bg-surface-muted px-4 py-3">
              <span className="font-heading text-[10px] uppercase tracking-[0.24em] text-steel/78">
                {lang === "tr" ? "Capra Marka İlkesi" : "Capra Brand Principle"}
              </span>
            </div>
            <SectionLabel>{dictionary.aboutPage.label}</SectionLabel>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.aboutPage.title}
            </h1>
            <p className="mt-6 font-body text-base leading-8 text-steel">
              {lang === "tr"
                ? "Capra, yerel saha kabiliyetini kurumsal yönetim disipliniyle birleştirir. Amacımız daha fazla proje almak değil, daha yüksek güvenle teslim etmektir."
                : "Capra combines local field capability with corporate delivery discipline. The goal is not to take on more projects, but to deliver with higher confidence."}
            </p>
            <p className="mt-5 font-body text-sm leading-7 text-steel">
              {lang === "tr"
                ? "Capra adı, klasik kökünde keçiyi işaret eder. Biz bu anlamı yüksek zemin muhakemesi, sağlam adım ve üst düzey teslim standardı olarak yorumlarız."
                : "Capra points to the classical root for goat. We interpret that as high-ground judgment, sure-footed execution, and a top-tier delivery standard."}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-steel/10 bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <SectionLabel>{dictionary.aboutPage.storyLabel}</SectionLabel>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.aboutPage.storyTitle}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-8">
              {timeline[lang].map((item) => (
                <div key={item.year} className="flex gap-5">
                  <span className="font-heading text-2xl font-semibold text-ink">{item.year}</span>
                  <p className="font-body text-base leading-8 text-steel">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-steel/12 bg-surface-card p-8 shadow-card">
              <blockquote className="font-body text-2xl font-medium leading-10 text-ink">
                {lang === "tr"
                  ? "“Bizim için inşaat, yalnızca fiziksel üretim değil; riskin yönetildiği, değerin korunduğu ve paydaş güveninin sürdürüldüğü bir teslim sistemidir.”"
                  : "“For us, construction is not only physical production. It is a delivery system where risk is managed, value is protected, and stakeholder trust is sustained.”"}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-steel/10 bg-surface-muted px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-shell gap-6 lg:grid-cols-3">
          <ValueCard
            icon={Target}
            title={lang === "tr" ? "Misyon" : "Mission"}
            body={
              lang === "tr"
                ? "Proje sahiplerinin ve yatırımcıların karar güvenini artıran görünür, ölçülebilir ve kurumsal teslim standardı kurmak."
                : "To create a visible, measurable, and corporate delivery standard that improves decision confidence for owners and investors."
            }
          />
          <ValueCard
            icon={Trophy}
            title={lang === "tr" ? "Vizyon" : "Vision"}
            body={
              lang === "tr"
                ? "Kuzey Kıbrıs ve çevre pazarlarda kurumsal teslim kalitesiyle referans gösterilen inşaat ve geliştirme markası olmak."
                : "To be the reference construction and development brand for corporate delivery quality across Northern Cyprus and adjacent markets."
            }
          />
          <ValueCard
            icon={ShieldCheck}
            title={lang === "tr" ? "Değerler" : "Values"}
            body={
              lang === "tr"
                ? "Güven, şeffaflık, teknik yeterlilik, güvenlik ve uzun vadeli değer üretimi tüm kararlarımızın temelini oluşturur."
                : "Trust, transparency, technical rigor, safety, and long-term value creation define every decision we make."
            }
          />
        </div>
      </section>

      <section className="border-t border-steel/10 bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <SectionLabel>{dictionary.aboutPage.teamLabel}</SectionLabel>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.aboutPage.teamTitle}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Reveal key={t(member.name, lang)}>
                <div className="rounded-lg border border-steel/12 bg-surface-card p-6 shadow-card">
                  <div className="relative overflow-hidden rounded-lg">
                    <div className="relative aspect-[4/4.8] bg-surface-muted">
                      <Image
                        src={member.image}
                        alt={t(MEDIA.team[index].alt, lang)}
                        fill
                        className="object-contain p-3"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-ink">
                        {t(member.name, lang)}
                      </h3>
                      <p className="mt-2 font-body text-sm text-steel">{t(member.title, lang)}</p>
                    </div>
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      aria-label={`${t(member.name, lang)} LinkedIn`}
                      className="text-steel/80 transition-colors duration-500 hover:text-ink"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                  </div>
                  <p className="mt-4 font-body text-sm leading-7 text-steel">{t(member.bio, lang)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-cloud md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <SectionLabel tone="inverse">{dictionary.aboutPage.credentialsLabel}</SectionLabel>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-cloud lg:text-5xl">
              {dictionary.aboutPage.credentialsTitle}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {credentials.map((credential) => (
              <div
                key={credential}
                className="rounded-lg border border-white/8 bg-white/[0.04] px-4 py-5 text-center font-heading text-[11px] uppercase tracking-[0.24em] text-stone/90"
              >
                {credential}
              </div>
            ))}
          </div>
          <div className="mt-10 inline-flex items-center gap-4 rounded-full border border-white/8 bg-white/[0.04] px-6 py-4">
            <Award className="h-5 w-5 text-stone/85" />
            <span className="font-heading text-xs uppercase tracking-[0.24em] text-stone/90">
              {lang === "tr"
                ? "2025 Kuzey Kıbrıs Kurumsal Teslim Başarı Ödülü"
                : "2025 Northern Cyprus Corporate Delivery Excellence Recognition"}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div key={metric.label} className={index > 0 ? "lg:border-l lg:border-steel/15 lg:pl-8" : ""}>
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  label={metric.label}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({
  icon: Icon,
  title,
  body
}: {
  icon: typeof Target;
  title: string;
  body: string;
}) {
  return (
    <Reveal>
      <div className="rounded-lg border border-steel/12 bg-surface-card p-8 shadow-card">
        <Icon className="h-10 w-10 text-steel" />
        <h3 className="mt-6 font-heading text-sm uppercase tracking-[0.22em] text-ink">{title}</h3>
        <p className="mt-5 font-body text-base leading-8 text-steel">{body}</p>
      </div>
    </Reveal>
  );
}
