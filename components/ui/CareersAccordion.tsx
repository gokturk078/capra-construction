"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import type { Lang, LocalizedValue } from "@/lib/i18n";
import { t } from "@/lib/i18n";

type Role = {
  title: LocalizedValue<string>;
  department: LocalizedValue<string>;
  location: LocalizedValue<string>;
  type: LocalizedValue<string>;
  summary: LocalizedValue<string>;
};

const roles: Role[] = [
  {
    title: {
      tr: "Kıdemli İnşaat Mühendisi (Statik)",
      en: "Senior Civil Engineer (Structural)"
    },
    department: {
      tr: "Mühendislik",
      en: "Engineering"
    },
    location: {
      tr: "Lefkoşa",
      en: "Nicosia"
    },
    type: {
      tr: "Tam Zamanlı",
      en: "Full-time"
    },
    summary: {
      tr: "Büyük ölçekli karma kullanım ve altyapı projelerinde statik koordinasyon, saha mühendisliği ve teknik arayüzleri yönetir.",
      en: "Leads structural coordination, site engineering review, and technical interfaces on large-scale mixed-use and infrastructure work."
    }
  },
  {
    title: {
      tr: "BIM Modelleme / CAD Uzmanı",
      en: "BIM Modeler / CAD Specialist"
    },
    department: {
      tr: "Dijital Teslim",
      en: "Digital Delivery"
    },
    location: {
      tr: "Lefkoşa",
      en: "Nicosia"
    },
    type: {
      tr: "Tam Zamanlı",
      en: "Full-time"
    },
    summary: {
      tr: "Canlı projelerde koordineli BIM modelleri, üretim dokümanları ve çakışma kontrol süreçlerini yönetir.",
      en: "Builds and maintains coordinated BIM models, production documentation, and clash-detection flows across active projects."
    }
  },
  {
    title: {
      tr: "Proje Müdürü — Ticari Yapılar",
      en: "Project Manager — Commercial Division"
    },
    department: {
      tr: "Operasyon",
      en: "Operations"
    },
    location: {
      tr: "Lefkoşa",
      en: "Nicosia"
    },
    type: {
      tr: "Tam Zamanlı",
      en: "Full-time"
    },
    summary: {
      tr: "Ön hazırlıktan teslim aşamasına kadar kapsam, program ve kalite sorumluluğunu taşır.",
      en: "Owns scope, schedule, and quality from preconstruction through final handover."
    }
  },
  {
    title: {
      tr: "Şantiye Güvenlik Sorumlusu (HSE)",
      en: "Site Safety Officer (HSE)"
    },
    department: {
      tr: "İSG",
      en: "Health & Safety"
    },
    location: {
      tr: "Girne",
      en: "Kyrenia"
    },
    type: {
      tr: "Sözleşmeli",
      en: "Contract"
    },
    summary: {
      tr: "Sahada güvenlik prosedürlerini, denetimleri ve uyum kültürünü yönetir.",
      en: "Oversees field safety procedures, audits, and compliance culture on active sites."
    }
  },
  {
    title: {
      tr: "İş Geliştirme Yöneticisi",
      en: "Business Development Executive"
    },
    department: {
      tr: "Büyüme",
      en: "Growth"
    },
    location: {
      tr: "Lefkoşa",
      en: "Nicosia"
    },
    type: {
      tr: "Tam Zamanlı",
      en: "Full-time"
    },
    summary: {
      tr: "Yeni iş fırsatları, stratejik ortaklıklar ve ihale konumlandırması üzerinde çalışır.",
      en: "Supports pipeline growth, strategic partnerships, and tender positioning."
    }
  }
];

type CareersAccordionProps = {
  lang: Lang;
};

export function CareersAccordion({ lang }: CareersAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {roles.map((role, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={t(role.title, lang)} className="rounded-lg border border-steel/15 bg-surface-card shadow-card">
            <button
              type="button"
              className="flex w-full flex-col items-start gap-5 px-5 py-5 text-left transition-colors duration-500 hover:bg-surface-muted/45 sm:flex-row sm:items-start sm:justify-between sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                <div>
                  <p className="font-display text-xl font-semibold leading-tight text-ink sm:text-2xl">
                    {t(role.title, lang)}
                  </p>
                </div>
                <Meta label={lang === "tr" ? "Departman" : "Department"} value={t(role.department, lang)} />
                <Meta label={lang === "tr" ? "Lokasyon" : "Location"} value={t(role.location, lang)} />
                <Meta label={lang === "tr" ? "Çalışma Tipi" : "Type"} value={t(role.type, lang)} />
              </div>
              <ChevronDown
                className={[
                  "h-5 w-5 shrink-0 text-steel transition-transform duration-500 ease-expo",
                  isOpen ? "rotate-180" : ""
                ].join(" ")}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
                  }}
                className="overflow-hidden"
              >
                  <div className="border-t border-steel/15 px-6 py-6">
                    <p className="max-w-4xl font-body text-base leading-8 text-steel">
                      {t(role.summary, lang)}
                    </p>
                    <div className="mt-6">
                      <Button
                        href={`/${lang}/contact`}
                        variant="secondary"
                        icon={<ArrowRight className="h-4 w-4" />}
                      >
                        {lang === "tr" ? "Başvur" : "Apply"}
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-heading text-[10px] uppercase tracking-[0.24em] text-steel/70">
        {label}
      </p>
      <p className="mt-2 font-body text-sm text-steel">{value}</p>
    </div>
  );
}
