"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  type Project,
  projectTypes,
  getLocalizedProjectTypeLabel,
  type ProjectCategory
} from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { Dictionary } from "@/dictionaries";
import type { Lang } from "@/lib/i18n";

type ProjectFilterProps = {
  projects: Project[];
  lang: Lang;
  dictionary: Dictionary["projectsPage"];
};

export function ProjectFilter({ projects, lang, dictionary }: ProjectFilterProps) {
  const [activeType, setActiveType] = useState<(typeof projectTypes)[number]>("All");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    setVisibleCount(9);
  }, [activeType, sortOrder]);

  const filteredProjects = [...projects]
    .filter((project) => activeType === "All" || project.type === activeType)
    .sort((a, b) => {
      if (sortOrder === "newest") {
        return b.year - a.year;
      }

      return a.year - b.year;
    });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 rounded-lg border border-steel/15 bg-surface-card p-6 shadow-card lg:flex-row lg:items-center lg:justify-between">
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setActiveType(type)}
              className={[
                "w-full rounded-none border px-4 py-3 font-heading text-[11px] uppercase tracking-[0.24em] transition-all duration-500 ease-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink sm:w-auto",
                type === "All" ? "col-span-2 sm:col-span-1" : "",
                activeType === type
                  ? "border-ink bg-ink text-cloud"
                  : "border-steel/18 bg-surface-card text-steel hover:border-steel/32 hover:bg-surface-muted hover:text-ink"
              ].join(" ")}
            >
              {type === "All" ? dictionary.all : getLocalizedProjectTypeLabel(type as ProjectCategory, lang)}
            </button>
          ))}
        </div>

        <label className="flex flex-col items-start gap-3 font-body text-xs uppercase tracking-[0.2em] text-steel sm:flex-row sm:items-center sm:gap-4">
          <span>{dictionary.sort}</span>
          <select
            value={sortOrder}
            onChange={(event) =>
              setSortOrder(event.target.value as "newest" | "oldest")
            }
            className="w-full rounded-none border border-steel/18 bg-surface-card px-4 py-3 font-heading text-[11px] uppercase tracking-[0.24em] text-ink focus:border-ink focus:outline-none sm:w-auto"
          >
            <option value="newest">{dictionary.newest}</option>
            <option value="oldest">{dictionary.oldest}</option>
          </select>
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            lang={lang}
            index={index}
            className="h-full"
          />
        ))}
      </div>

      {visibleCount < filteredProjects.length ? (
        <div className="flex justify-center">
          <Button
            type="button"
            variant="secondary"
            onClick={() => setVisibleCount((count) => count + 3)}
          >
            {dictionary.loadMore}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
