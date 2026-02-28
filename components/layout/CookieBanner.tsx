"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";

type CookieBannerProps = {
  text: string;
  acceptLabel: string;
  declineLabel: string;
};

export function CookieBanner({
  text,
  acceptLabel,
  declineLabel
}: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const preference = localStorage.getItem("capra-cookie-choice");
    if (!preference) {
      setVisible(true);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    localStorage.setItem("capra-cookie-choice", choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-lg border border-steel/20 bg-cloud/95 p-6 shadow-card backdrop-blur-md"
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
          }}
          exit={{
            opacity: 0,
            y: 16,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
          }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-body text-sm text-steel">
              {text}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                variant="secondary"
                className="px-4 py-3"
                onClick={() => handleChoice("accepted")}
              >
                {acceptLabel}
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="px-4 py-3"
                onClick={() => handleChoice("declined")}
              >
                {declineLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
