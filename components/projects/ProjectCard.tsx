"use client";

import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";
import { getLocalizedProjectTypeLabel } from "@/data/projects";
import { t, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  lang: Lang;
  index?: number;
  className?: string;
  compact?: boolean;
};

export function ProjectCard({
  project,
  lang,
  index = 0,
  className,
  compact = false
}: ProjectCardProps) {
  void index;

  const heightClass = compact ? "aspect-[4/3]" : "aspect-[16/11] sm:aspect-[16/10]";
  const statusLabel =
    project.status === "Completed"
      ? lang === "tr"
        ? "Tamamlandı"
        : "Completed"
      : lang === "tr"
        ? "Devam Ediyor"
        : "In Progress";

  return (
    <Link
      href={`/${lang}/projects/${project.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-lg border border-steel/15 bg-surface-card shadow-card transition-transform duration-500 ease-expo hover:-translate-y-1",
        className
      )}
    >
      <div className={cn("relative overflow-hidden bg-slate", heightClass)}>
        <Image
          src={project.heroImage}
          alt={t(project.description, lang)}
          fill
          className="object-contain p-6 transition-transform duration-700 ease-expo group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,32,0.08))]" />
        <div className="absolute inset-x-0 bottom-0 translate-y-3 border-t border-white/10 bg-ink/86 px-6 py-5 opacity-0 transition-all duration-500 ease-expo group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-heading text-[11px] uppercase tracking-[0.24em] text-stone/90">
            {lang === "tr" ? "Detayı İncele" : "View Details"}
          </p>
        </div>
      </div>
      <div className="space-y-4 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-copper-dark/25 px-3 py-1 font-heading text-[10px] uppercase tracking-[0.24em] text-copper-dark">
            {getLocalizedProjectTypeLabel(project.type, lang)}
          </span>
          <span className="font-body text-xs uppercase tracking-[0.2em] text-steel">
            {project.year}
          </span>
          <span className="font-body text-xs uppercase tracking-[0.2em] text-steel/72">
            {statusLabel}
          </span>
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{t(project.name, lang)}</h3>
          <p className="mt-2 font-body text-sm text-steel">
            {t(project.location, lang)}
          </p>
          <p className="mt-4 font-body text-sm leading-7 text-steel/92">
            {t(project.description, lang)}
          </p>
        </div>
      </div>
    </Link>
  );
}
