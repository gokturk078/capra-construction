"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeInLeft, fadeInUp, scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "left" | "scale";
};

export function Reveal({
  children,
  className,
  variant = "up"
}: RevealProps) {
  const variants =
    variant === "left" ? fadeInLeft : variant === "scale" ? scaleIn : fadeInUp;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
