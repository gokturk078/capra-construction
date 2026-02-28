import type { LocalizedValue } from "@/lib/i18n";

export type Testimonial = {
  quote: LocalizedValue<string>;
  author: string;
  title: LocalizedValue<string>;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: {
      tr: "Capra, konsept ile teslim arasındaki riskleri görünür hale getirdi. Program, kalite ve yatırım mantığı aynı çerçevede yönetildi.",
      en: "Capra made risk visible between concept and delivery. Program, quality, and investment logic were managed in the same frame."
    },
    author: "A. Rashid",
    title: {
      tr: "Yatırımcı Temsilcisi",
      en: "Investor Representative"
    },
    company: "Private Capital Group"
  },
  {
    quote: {
      tr: "Yerel ekip gibi hızlı, uluslararası firma gibi sistematik çalıştılar. Kurumsal raporlama kalitesi belirgin biçimde güçlüydü.",
      en: "They moved with the speed of a local team and the structure of an international firm. The reporting quality was notably strong."
    },
    author: "Dr. Elena V.",
    title: {
      tr: "Altyapı Program Yöneticisi",
      en: "Infrastructure Program Lead"
    },
    company: "Public Sector Client"
  },
  {
    quote: {
      tr: "Capra ile çalışırken en kritik fark, karar vermeyi kolaylaştırmaları oldu. Belirsizlik yerine netlik üretiyorlar.",
      en: "The most valuable difference with Capra was how they made decision-making easier. They replace ambiguity with clarity."
    },
    author: "James W.",
    title: {
      tr: "Geliştirme Direktörü",
      en: "Development Director"
    },
    company: "Regional Real Estate Platform"
  }
];
