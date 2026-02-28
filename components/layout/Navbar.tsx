"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/layout/BrandMark";
import { Button } from "@/components/ui/Button";
import { getNavbarHeightPx, routeSupportsTransparentHero, type NavbarChromeMode } from "@/lib/chrome";
import type { Dictionary } from "@/dictionaries";
import { getAlternateLocale, switchLocaleInPath, type Lang } from "@/lib/i18n";
import { navLinkKeys } from "@/lib/site";
import { cn } from "@/lib/utils";

type NavbarProps = {
  lang: Lang;
  dictionary: Dictionary["nav"];
};

export function Navbar({ lang, dictionary }: NavbarProps) {
  const pathname = usePathname();
  const [chromeMode, setChromeMode] = useState<NavbarChromeMode>("solid-light");
  const [isOpen, setIsOpen] = useState(false);
  const alternateLocale = getAlternateLocale(lang);
  const supportsTransparentHero = routeSupportsTransparentHero(pathname);
  const useLightChrome = chromeMode === "solid-light";
  const labels = {
    home: dictionary.home,
    projects: dictionary.projects,
    services: dictionary.services,
    about: dictionary.about,
    contact: dictionary.contact
  };

  useEffect(() => {
    if (!supportsTransparentHero) {
      setChromeMode("solid-light");
      return;
    }

    let observer: IntersectionObserver | null = null;
    let frame = 0;
    let isDisposed = false;
    let retries = 0;
    let removeResizeListener: () => void = () => undefined;

    const connectObserver = () => {
      if (isDisposed) {
        return;
      }

      const sentinel = document.querySelector<HTMLElement>("[data-hero-sentinel='true']");

      if (!sentinel) {
        retries += 1;

        if (retries < 12) {
          frame = window.requestAnimationFrame(connectObserver);
          return;
        }

        setChromeMode("solid-light");
        return;
      }

      const bindObserver = () => {
        observer?.disconnect();
        observer = new IntersectionObserver(
          ([entry]) => {
            setChromeMode(entry.isIntersecting ? "transparent-on-hero" : "solid-light");
          },
          {
            rootMargin: `-${getNavbarHeightPx()}px 0px 0px 0px`,
            threshold: 0
          }
        );
        observer.observe(sentinel);
      };

      setChromeMode("transparent-on-hero");
      bindObserver();
      window.addEventListener("resize", bindObserver);
      removeResizeListener = () => window.removeEventListener("resize", bindObserver);
    };

    connectObserver();

    return () => {
      isDisposed = true;
      removeResizeListener();
      observer?.disconnect();

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [pathname, supportsTransparentHero]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          useLightChrome
            ? "border-b border-nav-border bg-nav-solid shadow-[0_8px_24px_rgba(15,23,32,0.05)] backdrop-blur-md"
            : "bg-gradient-to-b from-ink/32 via-ink/12 to-transparent"
        )}
      >
        <div className="mx-auto flex min-h-[var(--nav-height-mobile)] max-w-shell items-center justify-between px-6 py-0 lg:min-h-[var(--nav-height-desktop)] lg:px-10">
          <BrandMark href={`/${lang}`} inverted={!useLightChrome} layout="compact" className="shrink-0" />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinkKeys.map((link) => {
              const href = link.href ? `/${lang}${link.href}` : `/${lang}`;
              const isActive =
                pathname === href ||
                (href !== `/${lang}` && Boolean(pathname?.startsWith(`${href}/`)));

              return (
                <Link
                  key={link.key}
                  href={href}
                  className={cn(
                    "group relative font-heading text-xs uppercase tracking-[0.24em] transition-colors duration-500",
                    useLightChrome
                      ? "text-ink hover:text-steel"
                      : "text-cloud drop-shadow-[0_1px_8px_rgba(15,23,32,0.35)] hover:text-stone"
                  )}
                >
                  {labels[link.key]}
                  <span
                    className={cn(
                      "absolute -bottom-2 left-0 h-0.5 bg-copper-dark/75 transition-all duration-500",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={switchLocaleInPath(pathname || `/${lang}`, alternateLocale)}
              className={cn(
                "inline-flex items-center gap-2 border px-4 py-3 font-heading text-[11px] uppercase tracking-[0.22em] transition-colors duration-500",
                useLightChrome
                  ? "border-steel/12 bg-transparent text-steel hover:border-steel/24 hover:bg-white/60 hover:text-ink"
                  : "border-white/12 bg-white/[0.03] text-stone hover:border-white/20 hover:bg-white/[0.07] hover:text-cloud"
              )}
            >
              <span>{alternateLocale.toUpperCase()}</span>
              <ChevronDown className="h-4 w-4" />
            </Link>
            <Button
              href={`/${lang}/contact`}
              variant={useLightChrome ? "primary" : "secondary"}
              className={
                useLightChrome
                  ? undefined
                  : "border-white/14 bg-white/[0.03] text-cloud hover:border-white/20 hover:bg-white/[0.08] hover:text-cloud"
              }
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              {dictionary.cta}
            </Button>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center border transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink lg:hidden",
              useLightChrome
                ? "border-steel/12 text-ink hover:border-steel/24 hover:text-steel"
                : "border-white/12 bg-white/[0.03] text-cloud hover:border-white/20 hover:bg-white/[0.07] hover:text-stone"
            )}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-40 flex min-h-screen flex-col bg-ink px-6 pb-10 pt-28 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            <div className="mb-8 flex items-center justify-between border-b border-white/8 pb-8">
              <BrandMark href={`/${lang}`} inverted layout="compact" />
              <span className="font-heading text-[10px] uppercase tracking-[0.24em] text-stone/70">
                {lang === "tr" ? "Kurumsal Menü" : "Corporate Menu"}
              </span>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-8" aria-label="Mobile">
              {navLinkKeys.map((link) => {
                const href = link.href ? `/${lang}${link.href}` : `/${lang}`;

                return (
                <div key={link.key}>
                  <Link
                    href={href}
                    className={cn(
                      "font-display text-[clamp(2.25rem,9vw,3.75rem)] font-semibold leading-[0.96] text-cloud transition-colors duration-500 hover:text-stone",
                      pathname === href ? "text-stone" : ""
                    )}
                  >
                    {labels[link.key]}
                  </Link>
                  <div className="mt-4 h-px w-full bg-white/10" />
                </div>
              );
              })}
            </nav>
            <div className="space-y-4">
              <Link
                href={switchLocaleInPath(pathname || `/${lang}`, alternateLocale)}
                className="block border border-white/10 px-4 py-4 text-center font-heading text-[11px] uppercase tracking-[0.22em] text-stone"
              >
                {dictionary.language}: {alternateLocale.toUpperCase()}
              </Link>
              <Button
                href={`/${lang}/contact`}
                variant="primary"
                className="w-full justify-center"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                {dictionary.cta}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
