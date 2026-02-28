import type { LocalizedValue } from "@/lib/i18n";

export type MediaItem = {
  src: string;
  alt: LocalizedValue<string>;
};

export const MEDIA = {
  hero: {
    src: "/images/hero/capra-hero.svg",
    alt: {
      tr: "Capra Construction için kurumsal şehir ve yüksek yapı illüstrasyonu",
      en: "Corporate city skyline and high-rise illustration for Capra Construction"
    }
  },
  about: {
    src: "/images/about/about-campus.svg",
    alt: {
      tr: "Kurumsal kampüs ve karma kullanım yapı illüstrasyonu",
      en: "Corporate campus and mixed-use building illustration"
    }
  },
  contact: {
    src: "/images/contact/contact-office.svg",
    alt: {
      tr: "Capra Construction ofis ve toplantı illüstrasyonu",
      en: "Capra Construction office and meeting illustration"
    }
  },
  careers: {
    src: "/images/careers/careers-site.svg",
    alt: {
      tr: "Şantiye ekibi ve proje silüeti illüstrasyonu",
      en: "Site team and project skyline illustration"
    }
  },
  services: {
    residential: {
      src: "/images/services/residential.svg",
      alt: {
        tr: "Konut geliştirme illüstrasyonu",
        en: "Residential development illustration"
      }
    },
    commercial: {
      src: "/images/services/commercial.svg",
      alt: {
        tr: "Ticari proje illüstrasyonu",
        en: "Commercial project illustration"
      }
    },
    infrastructure: {
      src: "/images/services/infrastructure.svg",
      alt: {
        tr: "Altyapı projesi illüstrasyonu",
        en: "Infrastructure project illustration"
      }
    },
    consulting: {
      src: "/images/services/consulting.svg",
      alt: {
        tr: "Proje yönetimi ve danışmanlık illüstrasyonu",
        en: "Project management and consulting illustration"
      }
    },
    sustainable: {
      src: "/images/services/sustainable.svg",
      alt: {
        tr: "Sürdürülebilir yapı illüstrasyonu",
        en: "Sustainable construction illustration"
      }
    },
    restoration: {
      src: "/images/services/restoration.svg",
      alt: {
        tr: "Restorasyon ve yenileme illüstrasyonu",
        en: "Restoration and renewal illustration"
      }
    }
  },
  projects: {
    project1: {
      src: "/images/projects/project-1.svg",
      alt: {
        tr: "Yüksek konut projesi illüstrasyonu",
        en: "High-rise residential project illustration"
      }
    },
    project2: {
      src: "/images/projects/project-2.svg",
      alt: {
        tr: "Ticari iç mekan ve lobi illüstrasyonu",
        en: "Commercial interior and lobby illustration"
      }
    },
    project3: {
      src: "/images/projects/project-3.svg",
      alt: {
        tr: "Köprü ve kamu altyapısı illüstrasyonu",
        en: "Bridge and public infrastructure illustration"
      }
    },
    project4: {
      src: "/images/projects/project-4.svg",
      alt: {
        tr: "Lüks villa topluluğu illüstrasyonu",
        en: "Luxury villa community illustration"
      }
    },
    project5: {
      src: "/images/projects/project-5.svg",
      alt: {
        tr: "Teknoloji kampüsü ve kurumsal planlama illüstrasyonu",
        en: "Technology campus and corporate planning illustration"
      }
    },
    project6: {
      src: "/images/projects/project-6.svg",
      alt: {
        tr: "Sağlık ve büyük ölçekli yapı illüstrasyonu",
        en: "Healthcare and large-scale structure illustration"
      }
    }
  },
  team: [
    {
      src: "/images/team/executive-1.svg",
      alt: {
        tr: "Capra kurucu yönetici portresi",
        en: "Capra founder executive portrait"
      }
    },
    {
      src: "/images/team/executive-2.svg",
      alt: {
        tr: "Capra genel müdür portresi",
        en: "Capra chief executive portrait"
      }
    },
    {
      src: "/images/team/executive-3.svg",
      alt: {
        tr: "Capra mühendislik direktörü portresi",
        en: "Capra engineering director portrait"
      }
    },
    {
      src: "/images/team/executive-4.svg",
      alt: {
        tr: "Capra ticari direktör portresi",
        en: "Capra commercial director portrait"
      }
    }
  ]
} as const;
