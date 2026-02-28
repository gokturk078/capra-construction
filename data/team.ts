import { MEDIA } from "@/lib/media";
import type { LocalizedValue } from "@/lib/i18n";

export type TeamMember = {
  name: LocalizedValue<string>;
  title: LocalizedValue<string>;
  bio: LocalizedValue<string>;
  image: string;
  linkedin: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: {
      tr: "Selim Kaya",
      en: "Selim Kaya"
    },
    title: {
      tr: "Kurucu ve Yönetim Kurulu Başkanı",
      en: "Founder & Chairman"
    },
    bio: {
      tr: "Selim, Capra'nın yatırım perspektifini ve teslim disiplinini aynı çerçevede kurar. Şirketin ölçek seçimini ve kurumsal büyüme yönünü belirler.",
      en: "Selim sets Capra's investment perspective and delivery discipline within the same frame. He directs project selection and long-term corporate growth."
    },
    image: MEDIA.team[0].src,
    linkedin: "https://www.linkedin.com"
  },
  {
    name: {
      tr: "Amelia Hart",
      en: "Amelia Hart"
    },
    title: {
      tr: "Genel Müdür",
      en: "Chief Executive Officer"
    },
    bio: {
      tr: "Amelia, operasyonel standartları, paydaş iletişimini ve üst düzey teslim kararlarını yönetir. Kurumsal raporlama ve müşteri güveni onun ana odak alanıdır.",
      en: "Amelia leads operating standards, stakeholder communication, and executive delivery decisions. Corporate reporting quality and client confidence are central to her remit."
    },
    image: MEDIA.team[1].src,
    linkedin: "https://www.linkedin.com"
  },
  {
    name: {
      tr: "Kemal Demir",
      en: "Kemal Demir"
    },
    title: {
      tr: "Mühendislik Direktörü",
      en: "Director of Engineering"
    },
    bio: {
      tr: "Kemal; statik, koordinasyon ve saha mühendisliğini bir araya getirerek karmaşık projelerde teknik kontrolü görünür kılar.",
      en: "Kemal makes technical control visible on complex projects by aligning structural design, coordination, and field engineering."
    },
    image: MEDIA.team[2].src,
    linkedin: "https://www.linkedin.com"
  },
  {
    name: {
      tr: "Layla Morgan",
      en: "Layla Morgan"
    },
    title: {
      tr: "Ticari Direktör",
      en: "Commercial Director"
    },
    bio: {
      tr: "Layla; maliyet kontrolü, tedarik kararları ve sözleşmesel dengeyi yönetir. Uzun vadeli müşteri değeri için finansal görünürlüğü artırır.",
      en: "Layla oversees cost control, procurement decisions, and contractual balance. She improves financial visibility to protect long-term client value."
    },
    image: MEDIA.team[3].src,
    linkedin: "https://www.linkedin.com"
  }
];
