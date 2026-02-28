"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ProjectGalleryProps = {
  images: string[];
  name: string;
  lang: "tr" | "en";
};

export function ProjectGallery({ images, name, lang }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            aria-label={
              lang === "tr"
                ? `${name} galeri görseli ${index + 1} aç`
                : `Open ${name} gallery image ${index + 1}`
            }
            className="group relative overflow-hidden rounded-lg border border-steel/15 bg-slate"
            onClick={() => setActiveImage(image)}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={image}
                alt={`${name} gallery image ${index + 1}`}
                fill
                className="object-contain p-6 transition-transform duration-700 ease-expo group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,32,0.08))]" />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/95 p-6"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            <button
              type="button"
              aria-label={lang === "tr" ? "Galeriyi kapat" : "Close gallery"}
              className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center border border-white/10 text-cloud transition-colors duration-500 hover:border-white/20 hover:text-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={() => setActiveImage(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative h-[70vh] w-full max-w-5xl overflow-hidden rounded-lg border border-white/10 bg-slate">
              <Image
                src={activeImage}
                alt={`${name} enlarged gallery image`}
                fill
                className="object-contain p-8"
                sizes="100vw"
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
