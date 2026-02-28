"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default function NotFound() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const homeHref = isEnglish ? "/en" : "/tr";
  const projectsHref = isEnglish ? "/en/projects" : "/tr/projects";

  return (
    <section className="flex min-h-screen items-center justify-center bg-cloud px-6 py-32 lg:px-10">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="font-heading text-sm tracking-[0.3em] text-copper-dark">404</p>
        <h1 className="mt-6 font-display text-5xl font-semibold text-ink lg:text-6xl">
          {isEnglish
            ? "The requested page could not be found."
            : "İstenen sayfa bulunamadı."}
        </h1>
        <p className="mt-6 font-body text-base leading-8 text-steel">
          {isEnglish
            ? "The link may be outdated or the content may have moved elsewhere on the site."
            : "Bağlantı güncel olmayabilir veya içerik site içinde başka bir konuma taşınmış olabilir."}
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={homeHref}>
            {isEnglish ? "Return Home" : "Ana Sayfaya Dön"}
          </Button>
        </div>
        <p className="mt-6 font-body text-sm text-steel">
          {isEnglish ? "Or review our " : "Ya da güncel "}
          <Link href={projectsHref} className="text-copper-dark underline underline-offset-4">
            {isEnglish ? "latest projects" : "projelerimizi"}
          </Link>
          {isEnglish ? "." : " inceleyin."}
        </p>
      </Reveal>
    </section>
  );
}
