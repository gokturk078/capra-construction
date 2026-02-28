export type NavbarChromeMode =
  | "transparent-on-hero"
  | "solid-light"
  | "mobile-overlay";

const transparentHeroRoutes = new Set([
  "/tr",
  "/en",
  "/tr/services",
  "/en/services",
  "/tr/projects",
  "/en/projects",
  "/tr/careers",
  "/en/careers"
]);

const transparentHeroPrefixes = ["/tr/projects/", "/en/projects/"];

function normalizePathname(pathname?: string | null) {
  if (!pathname) {
    return "/";
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function routeSupportsTransparentHero(pathname?: string | null) {
  const normalizedPathname = normalizePathname(pathname);

  return (
    transparentHeroRoutes.has(normalizedPathname) ||
    transparentHeroPrefixes.some((prefix) => normalizedPathname.startsWith(prefix))
  );
}

export function getNavbarHeightPx() {
  if (typeof window === "undefined") {
    return 92;
  }

  const rootStyles = window.getComputedStyle(document.documentElement);
  const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
  const tokenName = isDesktop ? "--nav-height-desktop" : "--nav-height-mobile";
  const rawValue = rootStyles.getPropertyValue(tokenName);
  const parsed = Number.parseFloat(rawValue);

  if (Number.isFinite(parsed)) {
    return parsed;
  }

  return isDesktop ? 92 : 80;
}
