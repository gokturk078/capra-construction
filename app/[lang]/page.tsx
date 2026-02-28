import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";

import { getDictionary } from "@/dictionaries";
import { featuredProjectSlugs, projects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { HeroFrame } from "@/components/layout/HeroFrame";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { isValidLocale, t, type Lang } from "@/lib/i18n";
import { MEDIA } from "@/lib/media";
import { siteConfig } from "@/lib/site";

const partnerNames = ["ArchiGroup", "Mediterra", "NordBuild", "Cyprus Bank", "EU Construct", "Island Development"];

type HomePageProps = {
  params: { lang: string };
};

export function generateMetadata({ params }: HomePageProps): Metadata {
  const lang = isValidLocale(params.lang) ? params.lang : "tr";
  const dictionary = getDictionary(lang);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        tr: "/tr",
        en: "/en"
      }
    },
    openGraph: {
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: `${siteConfig.url}/${lang}`,
      images: ["/images/hero/capra-hero.svg"]
    }
  };
}

export default function LocalizedHomePage({ params }: HomePageProps) {
  if (!isValidLocale(params.lang)) {
    return null;
  }

  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);
  const featuredProjects = featuredProjectSlugs.flatMap((slug) => {
    const project = projects.find((item) => item.slug === slug);
    return project ? [project] : [];
  });
  const metrics = [
    {
      value: 150,
      suffix: "+",
      label: lang === "tr" ? "Tamamlanan Proje" : "Completed Projects"
    },
    {
      value: 20,
      suffix: "+",
      label: lang === "tr" ? "Yıllık Deneyim" : "Years of Experience"
    },
    {
      value: 2500,
      suffix: "",
      label: lang === "tr" ? "Saha ve Teknik Uzman" : "Field & Technical Experts"
    },
    {
      value: 98,
      suffix: "%",
      label: lang === "tr" ? "Müşteri Memnuniyeti" : "Client Satisfaction"
    }
  ];

  return (
    <>
      <HeroFrame
        variant="home"
        density="immersive"
        contentWidth="wide"
        contentClassName="max-w-4xl lg:pr-6"
        artColumnClassName="lg:max-w-[540px]"
        eyebrow={
          <Reveal>
            <SectionLabel className="text-stone">{dictionary.home.eyebrow}</SectionLabel>
          </Reveal>
        }
        title={
          <Reveal>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(3.2rem,9vw,6.2rem)] font-semibold leading-[0.92] text-cloud">
              {dictionary.home.title}
            </h1>
          </Reveal>
        }
        body={
          <Reveal>
            <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-stone/90">
              {dictionary.home.body}
            </p>
          </Reveal>
        }
        actions={
          <Reveal>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                href={`/${lang}/projects`}
                className="border-white/10 bg-white text-ink hover:border-white hover:bg-stone"
              >
                {dictionary.home.primaryCta}
              </Button>
              <Button
                href={`/${lang}/contact`}
                variant="secondary"
                className="border-white/15 bg-white/5 text-cloud hover:border-white/20 hover:bg-white/10 hover:text-cloud"
                icon={<ArrowRight className="h-4 w-4" />}
              >
                {dictionary.home.secondaryCta}
              </Button>
            </div>
          </Reveal>
        }
        art={
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent),radial-gradient(circle_at_top_left,rgba(201,137,91,0.08),transparent_35%)]" />
              <div className="relative aspect-[5/4]">
                <Image
                  src={MEDIA.hero.src}
                  alt={t(MEDIA.hero.alt, lang)}
                  fill
                  priority
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </Reveal>
        }
        supportingPanel={
          <Reveal>
            <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-white/10 px-3 py-1.5 font-heading text-[10px] uppercase tracking-[0.24em] text-stone/72">
                  Capra
                </span>
                <p className="font-heading text-[11px] uppercase tracking-[0.26em] text-stone/80">
                  {lang === "tr" ? "Kurumsal Teslim Çerçevesi" : "Corporate Delivery Framework"}
                </p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {dictionary.home.trustStrip.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15">
                      <Check className="h-4 w-4 text-stone" />
                    </span>
                    <span className="font-body text-sm leading-7 text-stone/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        }
      />

      <section className="border-y border-steel/15 bg-surface-card px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-shell flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {dictionary.home.trustStrip.map((item) => (
            <span
              key={item}
              className="font-heading text-[11px] uppercase tracking-[0.26em] text-steel"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="border-t border-steel/10 bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-shell gap-14 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-steel/15 bg-slate shadow-card">
              <div className="relative aspect-[4/3]">
                <Image
                  src={MEDIA.about.src}
                  alt={t(MEDIA.about.alt, lang)}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <SectionLabel>{dictionary.home.aboutLabel}</SectionLabel>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.home.aboutTitle}
            </h2>
            <div className="mt-8 space-y-5 font-body text-base leading-8 text-steel">
              {dictionary.home.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 space-y-4">
              {dictionary.home.aboutPoints.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-steel/18 bg-surface-muted text-steel">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="font-body text-sm text-steel">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button href={`/${lang}/about`} variant="secondary">
                {dictionary.common.readMore}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-steel/10 bg-surface-muted px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal className="max-w-3xl">
            <SectionLabel>{dictionary.home.servicesLabel}</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.home.servicesTitle}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Reveal key={service.slug}>
                <article className="overflow-hidden rounded-lg border border-steel/15 bg-surface-card shadow-card">
                  <div className="relative aspect-[4/3] bg-slate">
                    <Image
                      src={service.image}
                      alt={t(service.title, lang)}
                      fill
                      className="object-contain p-6"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,32,0.08))]" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-ink">
                      {t(service.title, lang)}
                    </h3>
                    <p className="mt-4 font-body text-sm leading-7 text-steel">
                      {t(service.summary, lang)}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-steel/10 bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal className="max-w-3xl">
            <SectionLabel>{dictionary.home.projectsLabel}</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.home.projectsTitle}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                lang={lang}
                index={index}
                compact={index > 1}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href={`/${lang}/projects`} variant="secondary">
              {dictionary.common.viewAllProjects}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-cloud md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal className="max-w-3xl">
            <SectionLabel className="text-stone/70">{dictionary.home.metricsLabel}</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-cloud lg:text-5xl">
              {dictionary.home.metricsTitle}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric, index) => (
              <div key={metric.label} className={index > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""}>
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  label={metric.label}
                  inverse
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal className="max-w-3xl">
            <SectionLabel>{dictionary.home.testimonialsLabel}</SectionLabel>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.home.testimonialsTitle}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <Reveal key={item.author}>
                <article className="rounded-lg border border-steel/15 bg-surface-card p-7 shadow-card">
                  <div className="flex items-center gap-1 text-steel">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 font-body text-base leading-8 text-steel">
                    {t(item.quote, lang)}
                  </p>
                  <div className="mt-6">
                    <p className="font-heading text-sm uppercase tracking-[0.2em] text-ink">
                      {item.author}
                    </p>
                    <p className="mt-2 font-body text-sm text-steel">
                      {t(item.title, lang)} · {item.company}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-steel/10 bg-surface-muted px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-shell">
          <Reveal className="text-center">
            <SectionLabel>{dictionary.home.partnersLabel}</SectionLabel>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {partnerNames.map((name) => (
              <div
                key={name}
                className="rounded-lg border border-steel/15 bg-surface-card px-4 py-6 text-center font-heading text-[11px] uppercase tracking-[0.22em] text-steel"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate px-6 py-20 text-cloud lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-shell gap-8 lg:grid-cols-[1fr,auto] lg:items-end">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight text-cloud lg:text-5xl">
              {dictionary.home.ctaTitle}
            </h2>
            <p className="mt-5 max-w-3xl font-body text-base leading-8 text-cloud/85">
              {dictionary.home.ctaBody}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              href={`/${lang}/contact`}
              variant="secondary"
              className="border-white/14 bg-white/5 text-cloud hover:border-white/20 hover:bg-white/10 hover:text-cloud"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              {dictionary.common.startProject}
            </Button>
            <p className="font-body text-sm text-cloud/80">
              {dictionary.common.companyProfileOnRequest}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
