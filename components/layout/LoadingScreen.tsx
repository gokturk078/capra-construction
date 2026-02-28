"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/layout/BrandMark";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("capra-loading-seen");

    if (!hasSeen) {
      setIsVisible(true);

      const hideTimer = window.setTimeout(() => {
        setIsVisible(false);
      }, 1500);

      const completeTimer = window.setTimeout(() => {
        sessionStorage.setItem("capra-loading-seen", "true");
        setIsComplete(true);
      }, 1850);

      return () => {
        window.clearTimeout(hideTimer);
        window.clearTimeout(completeTimer);
      };
    }

    setIsComplete(true);
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-brand-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }}
          >
            <BrandMark className="items-center text-center" showEmblem={false} />
          </motion.div>
          <div className="relative mt-10 h-px w-48 overflow-hidden bg-white/10">
            <span className="absolute inset-y-0 left-0 block w-24 bg-copper-dark animate-shimmer" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
