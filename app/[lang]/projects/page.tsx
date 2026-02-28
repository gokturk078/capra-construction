import type { Metadata } from "next";
import Image from "next/image";

import { getDictionary } from "@/dictionaries";
import { HeroFrame } from "@/components/layout/HeroFrame";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getLocalizedProjectTypeLabel, projectTypes, projects } from "@/data/projects";
import { isValidLocale, t, type Lang } from "@/lib/i18n";
import { MEDIA } from "@/lib/media";
import { siteConfig } from "@/lib/site";

type ProjectsPageProps = {
  params: { lang: string };
};

export function generateMetadata({ params }: ProjectsPageProps): Metadata {
  const lang = isValidLocale(params.lang) ? params.lang : "tr";
  const dictionary = getDictionary(lang);

  return {
    title: `${dictionary.projectsPage.title} | Capra Construction`,
    description: dictionary.projectsPage.subtitle,
    alternates: {
      canonical: `/${lang}/projects`,
      languages: {
        tr: "/tr/projects",
        en: "/en/projects"
      }
    },
    openGraph: {
      title: `${dictionary.projectsPage.title} | Capra Construction`,
      description: dictionary.projectsPage.subtitle,
      url: `${siteConfig.url}/${lang}/projects`,
      images: [MEDIA.projects.project1.src]
    }
  };
}

export default function ProjectsPage({ params }: ProjectsPageProps) {
  if (!isValidLocale(params.lang)) {
    return null;
  }

  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);
  const projectRegions = new Set(projects.map((project) => t(project.location, lang))).size;
  const projectSectors = new Set(projects.map((project) => project.type)).size;
  const focusAreas = projectTypes
    .filter((type) => type !== "All")
    .map((type) => getLocalizedProjectTypeLabel(type, lang));

  return (
    <>
      <HeroFrame
        variant="projects"
        density="compact"
        contentClassName="max-w-3xl lg:pr-10"
        artColumnClassName="lg:max-w-[520px]"
        eyebrow={
          <Reveal>
            <SectionLabel className="text-stone">{dictionary.projectsPage.label}</SectionLabel>
          </Reveal>
        }
        title={
          <Reveal>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(3rem,8vw,5rem)] font-semibold leading-[0.94] text-cloud">
              {dictionary.projectsPage.title}
            </h1>
          </Reveal>
        }
        body={
          <Reveal>
            <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-stone/90">
              {dictionary.projectsPage.subtitle}
            </p>
          </Reveal>
        }
        actions={
          <Reveal>
            <div className="mt-10 space-y-8">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  href="#portfolio-filter"
                  className="border-white/10 bg-white text-ink hover:border-white hover:bg-stone"
                >
                  {lang === "tr" ? "Portföyü Filtrele" : "Filter Portfolio"}
                </Button>
                <Button
                  href={`/${lang}/contact`}
                  variant="secondary"
                  className="border-white/15 bg-white/5 text-cloud hover:border-white/20 hover:bg-white/10 hover:text-cloud"
                >
                  {lang === "tr" ? "Görüşme Talep Et" : "Request a Consultation"}
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm"
                  >
                    <p className="font-heading text-[10px] uppercase tracking-[0.22em] text-stone/62">
                      {lang === "tr" ? "Odak Alanı" : "Focus Area"}
                    </p>
                    <p className="mt-2 font-body text-sm text-stone/92">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        }
        art={
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent),radial-gradient(circle_at_top_left,rgba(201,137,91,0.08),transparent_35%)]" />
              <div className="relative aspect-[5/4]">
                <Image
                  src={MEDIA.projects.project1.src}
                  alt={t(MEDIA.projects.project1.alt, lang)}
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
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full border border-white/10 px-3 py-1.5 font-heading text-[10px] uppercase tracking-[0.24em] text-stone/72">
                  Capra
                </span>
                <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-stone/72">
                  {lang === "tr" ? "Portfolyo Verisi" : "Portfolio Data"}
                </p>
              </div>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="font-display text-3xl font-semibold text-cloud">{projects.length}</p>
                  <p className="mt-2 font-body text-sm leading-7 text-stone/82">
                    {lang === "tr" ? "Referans proje" : "Reference projects"}
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-cloud">{projectRegions}</p>
                  <p className="mt-2 font-body text-sm leading-7 text-stone/82">
                    {lang === "tr" ? "Operasyon lokasyonu" : "Operating locations"}
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-cloud">{projectSectors}</p>
                  <p className="mt-2 font-body text-sm leading-7 text-stone/82">
                    {lang === "tr" ? "Teslim kategorisi" : "Delivery sectors"}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        }
      />

      <section
        id="portfolio-filter"
        className="scroll-mt-32 border-t border-steel/10 bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-shell">
          <ProjectFilter projects={projects} lang={lang} dictionary={dictionary.projectsPage} />
        </div>
      </section>
    </>
  );
}
