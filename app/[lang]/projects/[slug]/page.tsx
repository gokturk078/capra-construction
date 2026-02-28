import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

import { getDictionary } from "@/dictionaries";
import { HeroFrame } from "@/components/layout/HeroFrame";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getLocalizedProjectTypeLabel, getProjectBySlug, projects } from "@/data/projects";
import { isValidLocale, t, type Lang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

type ProjectDetailPageProps = {
  params: {
    lang: string;
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectDetailPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  const lang = isValidLocale(params.lang) ? params.lang : "tr";

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${t(project.name, lang)} | Capra Construction`,
    description: t(project.description, lang),
    alternates: {
      canonical: `/${lang}/projects/${project.slug}`,
      languages: {
        tr: `/tr/projects/${project.slug}`,
        en: `/en/projects/${project.slug}`
      }
    },
    openGraph: {
      title: `${t(project.name, lang)} | Capra Construction`,
      description: t(project.description, lang),
      url: `${siteConfig.url}/${lang}/projects/${project.slug}`,
      images: [project.heroImage]
    }
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  if (!isValidLocale(params.lang)) {
    return null;
  }

  const lang = params.lang as Lang;
  const dictionary = getDictionary(lang);
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects
    .filter((candidate) => candidate.slug !== project.slug && candidate.type === project.type)
    .slice(0, 3);
  const fallbackProjects =
    relatedProjects.length >= 3
      ? relatedProjects
      : [
          ...relatedProjects,
          ...projects
            .filter(
              (candidate) =>
                candidate.slug !== project.slug &&
                !relatedProjects.some((related) => related.slug === candidate.slug)
            )
            .slice(0, 3 - relatedProjects.length)
        ];

  return (
    <>
      <HeroFrame
        variant="project-detail"
        density="balanced"
        contentClassName="max-w-4xl lg:pr-8"
        artColumnClassName="lg:max-w-[520px]"
        eyebrow={
          <Reveal>
            <span className="inline-flex rounded-full border border-white/12 px-4 py-2 font-heading text-[10px] uppercase tracking-[0.24em] text-stone">
              {getLocalizedProjectTypeLabel(project.type, lang)}
            </span>
          </Reveal>
        }
        title={
          <Reveal>
            <h1 className="mt-6 max-w-4xl font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.94] text-cloud">
              {t(project.name, lang)}
            </h1>
          </Reveal>
        }
        body={
          <Reveal>
            <div className="mt-6 max-w-3xl space-y-4">
              <p className="font-heading text-sm uppercase tracking-[0.22em] text-stone/80">
                {t(project.location, lang)} · {project.year}
              </p>
              <p className="font-body text-base leading-8 text-stone/88">
                {t(project.description, lang)}
              </p>
            </div>
          </Reveal>
        }
        art={
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent),radial-gradient(circle_at_top_left,rgba(201,137,91,0.08),transparent_35%)]" />
              <div className="relative aspect-[5/4]">
                <Image
                  src={project.heroImage}
                  alt={t(project.description, lang)}
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
                  {lang === "tr" ? "Hızlı Proje Verileri" : "Quick Project Data"}
                </p>
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <HeroFact
                  label={lang === "tr" ? "Toplam Alan" : "Total Area"}
                  value={t(project.stats.area, lang)}
                />
                <HeroFact
                  label={lang === "tr" ? "Süre" : "Duration"}
                  value={t(project.stats.duration, lang)}
                />
                <HeroFact
                  label={lang === "tr" ? "Proje Değeri" : "Project Value"}
                  value={t(project.stats.value, lang)}
                />
                <HeroFact
                  label={lang === "tr" ? "Durum" : "Status"}
                  value={
                    project.status === "Completed"
                      ? lang === "tr"
                        ? "Tamamlandı"
                        : "Completed"
                      : lang === "tr"
                        ? "Devam Ediyor"
                        : "In Progress"
                  }
                />
              </div>
            </div>
          </Reveal>
        }
      />

      <section className="bg-surface-page px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid max-w-shell gap-12 lg:grid-cols-[1.35fr,0.65fr]">
          <div className="space-y-14">
            <Reveal>
              <SectionLabel>{lang === "tr" ? "Proje Özeti" : "Project Overview"}</SectionLabel>
              <div className="mt-8 space-y-6 font-body text-base leading-8 text-steel">
                {t(project.overview, lang).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <SectionLabel>{lang === "tr" ? "Galeri" : "Gallery"}</SectionLabel>
              <div className="mt-8">
                <ProjectGallery images={project.gallery} name={t(project.name, lang)} lang={lang} />
              </div>
            </Reveal>

            <Reveal>
              <SectionLabel>{lang === "tr" ? "Öne Çıkan Başlıklar" : "Key Highlights"}</SectionLabel>
              <ol className="mt-8 space-y-6">
                {t(project.highlights, lang).map((highlight, index) => (
                  <li key={highlight} className="flex gap-5">
                    <span className="font-heading text-3xl font-semibold text-steel">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 font-body text-base leading-8 text-steel">
                      {highlight}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal>
              <SectionLabel>
                {lang === "tr" ? "Teknik Özellikler" : "Technical Specifications"}
              </SectionLabel>
              <div className="mt-8 overflow-hidden rounded-lg border border-steel/15 bg-surface-card shadow-card">
                <div className="grid gap-4 p-5 md:hidden">
                  {t(project.specifications, lang).map((specification) => (
                    <div key={specification.label} className="rounded-lg border border-steel/12 bg-surface-muted/45 p-4">
                      <p className="font-heading text-[10px] uppercase tracking-[0.22em] text-steel/78">
                        {specification.label}
                      </p>
                      <p className="mt-2 font-body text-sm leading-7 text-ink">{specification.value}</p>
                    </div>
                  ))}
                </div>
                <table className="hidden w-full border-collapse md:table">
                  <tbody>
                    {t(project.specifications, lang).map((specification, index) => (
                      <tr
                        key={specification.label}
                        className={index % 2 === 0 ? "bg-surface-card" : "bg-surface-muted/55"}
                      >
                        <th className="w-1/3 px-6 py-5 text-left font-heading text-[11px] uppercase tracking-[0.22em] text-steel">
                          {specification.label}
                        </th>
                        <td className="px-6 py-5 font-body text-sm leading-7 text-ink">
                          {specification.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>

          <div className="order-first lg:order-none lg:pt-16">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <aside className="rounded-lg border border-steel/15 bg-surface-card p-8 shadow-card">
                  <SectionLabel>{lang === "tr" ? "Proje Bilgileri" : "Project Facts"}</SectionLabel>
                  <div className="mt-8 space-y-6">
                    <StatRow lang={lang} label={{ tr: "Toplam Alan", en: "Total Area" }} value={t(project.stats.area, lang)} />
                    <GoldDivider />
                    <StatRow lang={lang} label={{ tr: "Süre", en: "Duration" }} value={t(project.stats.duration, lang)} />
                    <GoldDivider />
                    <StatRow lang={lang} label={{ tr: "Proje Değeri", en: "Project Value" }} value={t(project.stats.value, lang)} />
                    <GoldDivider />
                    <StatRow lang={lang} label={{ tr: "Ünite / Kat", en: "Units / Floors" }} value={t(project.stats.units, lang)} />
                    <GoldDivider />
                    <div>
                      <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-steel/70">
                        {lang === "tr" ? "Durum" : "Status"}
                      </p>
                      <span className="mt-3 inline-flex rounded-full border border-copper-dark/20 px-3 py-2 font-heading text-[10px] uppercase tracking-[0.24em] text-copper-dark">
                        {project.status === "Completed"
                          ? lang === "tr"
                            ? "Tamamlandı"
                            : "Completed"
                          : lang === "tr"
                            ? "Devam Ediyor"
                            : "In Progress"}
                      </span>
                    </div>
                  </div>
                  <div className="mt-10 space-y-4">
                    <Button
                      href={`/${lang}/contact`}
                      className="w-full justify-center"
                      icon={<ArrowRight className="h-4 w-4" />}
                    >
                      {dictionary.common.discussProject}
                    </Button>
                    <Button
                      href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
                        `${t(project.name, lang)} Case Study Request`
                      )}`}
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      {lang === "tr" ? "Vaka Özeti Talep Et" : "Request Case Summary"}
                    </Button>
                  </div>
                </aside>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-steel/10 bg-surface-muted px-6 py-24 md:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto max-w-shell">
          <Reveal>
            <SectionLabel>{dictionary.projectsPage.relatedLabel}</SectionLabel>
            <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight text-ink lg:text-5xl">
              {dictionary.projectsPage.relatedTitle}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {fallbackProjects.map((relatedProject) => (
              <ProjectCard
                key={relatedProject.slug}
                project={relatedProject}
                lang={lang}
                compact
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function HeroFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-stone/65">{label}</p>
      <p className="mt-2 font-display text-2xl font-semibold text-cloud">{value}</p>
    </div>
  );
}

function StatRow({
  lang,
  label,
  value
}: {
  lang: Lang;
  label: Record<Lang, string>;
  value: string;
}) {
  return (
    <div>
      <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-steel/70">
        {label[lang]}
      </p>
      <p className="mt-3 font-display text-2xl font-semibold text-ink">{value}</p>
    </div>
  );
}
