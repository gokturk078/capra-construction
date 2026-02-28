export const locales = ["tr", "en"] as const;

export type Lang = (typeof locales)[number];

export type LocalizedValue<T> = Record<Lang, T>;

export const defaultLocale: Lang = "tr";

export function isValidLocale(value: string): value is Lang {
  return locales.includes(value as Lang);
}

export function t<T>(value: LocalizedValue<T>, lang: Lang): T {
  return value[lang];
}

export function stripLocaleFromPath(pathname: string) {
  const segments = pathname.split("/");
  const first = segments[1];

  if (isValidLocale(first)) {
    const stripped = `/${segments.slice(2).join("/")}`;
    return stripped === "/" ? "/" : stripped.replace(/\/$/, "") || "/";
  }

  return pathname;
}

export function switchLocaleInPath(pathname: string, nextLang: Lang) {
  const normalized = stripLocaleFromPath(pathname);
  return normalized === "/" ? `/${nextLang}` : `/${nextLang}${normalized}`;
}

export function getAlternateLocale(lang: Lang): Lang {
  return lang === "tr" ? "en" : "tr";
}
