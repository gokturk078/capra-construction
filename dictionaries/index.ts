import { en } from "@/dictionaries/en";
import { tr } from "@/dictionaries/tr";
import type { Lang } from "@/lib/i18n";

export type Dictionary = typeof tr;

export const dictionaries: Record<Lang, Dictionary> = {
  tr,
  en
};

export function getDictionary(lang: Lang) {
  return dictionaries[lang];
}
