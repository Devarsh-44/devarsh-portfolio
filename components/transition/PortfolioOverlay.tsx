"use client";

import { motion } from "motion/react";
import {
  MONOGRAM_VIEWBOX,
  GOTHIF_D_PATH,
  GOTHIF_K_STEM,
  GOTHIF_K_ARMS,
} from "@/components/intro/Monogram";
import type { Phase } from "./PageTransition";

// Diagonal wipe: matching the portfolio's angled beam curtain
const OFF_LEFT = "polygon(0% 0%, 0% 0%, -30% 100%, 0% 100%)";
const COVER = "polygon(0% 0%, 130% 0%, 100% 100%, 0% 100%)";
const OFF_RIGHT = "polygon(130% 0%, 130% 0%, 100% 100%, 100% 100%)";
const EASE_CURTAIN = [0.7, 0, 0.2, 1] as const;
const EASE_SNAP = [0.22, 1, 0.36, 1] as const;

/**
 * Authentic portfolio page transition:
 * Restores the authentic angled beam curtain and the Gothif DK Monogram,
 * animated with a typographic stamp-lock and warm terracotta ignition
 * instead of the slow wireframe stroke-drawing.
 */
export function PortfolioOverlay({ phase }: { phase: Phase }) {
  const entering = phase === "in";
  const clip = { clipPath: entering ? COVER : OFF_RIGHT };

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[200]">
      {/* 1. Trailing/leading beam on the curtain's slanted edge */}
      <motion.div
        className="intro-beam absolute inset-0"
        initial={{ clipPath: OFF_LEFT }}
        animate={clip}
        transition={{
          duration: entering ? 0.5 : 0.48,
          ease: EASE_CURTAIN,
          delay: entering ? 0 : 0.03,
        }}
      />

      {/* 2. Main dark canvas grid surface */}
      <motion.div
        className="bg-canvas-grid absolute inset-0 flex flex-col items-center justify-center"
        initial={{ clipPath: OFF_LEFT }}
        animate={clip}
        transition={{
          duration: entering ? 0.5 : 0.48,
          ease: EASE_CURTAIN,
          delay: entering ? 0.025 : 0,
        }}
      >
        {/* Monogram emblem container */}
        <motion.div
          className="relative flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={
            entering
              ? { opacity: 1, scale: 1, x: 0 }
              : { opacity: 0, scale: 0.96, x: 48 }
          }
          transition={{
            duration: entering ? 0.35 : 0.28,
            ease: EASE_SNAP,
            delay: entering ? 0.12 : 0,
          }}
        >
          {/* Ambient terracotta pulse behind the monogram */}
          <motion.div
            className="pointer-events-none absolute inset-0 -m-8 rounded-full bg-accent/25 blur-3xl"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={
              entering
                ? { opacity: [0, 0.85, 0.4], scale: [0.7, 1.25, 1.05] }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
          />

          {/* Authentic solid DK Monogram SVG with typographic assembly */}
          <svg
            viewBox={MONOGRAM_VIEWBOX}
            className="relative w-40 sm:w-52 text-accent"
            fill="currentColor"
            fillRule="evenodd"
            style={{
              filter:
                "drop-shadow(0 0 14px rgba(217, 78, 52, 0.65)) drop-shadow(0 0 32px rgba(34, 211, 238, 0.2))",
            }}
          >
            {/* The D glyph: slides in swiftly from left */}
            <motion.path
              d={GOTHIF_D_PATH}
              initial={{ x: -28, opacity: 0 }}
              animate={entering ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{
                duration: 0.32,
                delay: entering ? 0.1 : 0,
                ease: EASE_SNAP,
              }}
            />

            {/* The K stem: drops in with vertical mass */}
            <motion.path
              d={GOTHIF_K_STEM}
              initial={{ y: -20, opacity: 0 }}
              animate={entering ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: entering ? 0.16 : 0,
                ease: EASE_SNAP,
              }}
            />

            {/* The K diagonal chevron arms: locks diagonally into the stem */}
            <motion.path
              d={GOTHIF_K_ARMS}
              initial={{ x: 24, y: 12, opacity: 0 }}
              animate={entering ? { x: 0, y: 0, opacity: 1 } : { x: 28, opacity: 0 }}
              transition={{
                duration: 0.34,
                delay: entering ? 0.22 : 0,
                ease: EASE_SNAP,
              }}
            />
          </svg>

          {/* Understated wordmark label beneath */}
          <motion.p
            className="mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-chalk/75"
            initial={{ opacity: 0, y: 6 }}
            animate={entering ? { opacity: 1, y: 0 } : { opacity: 0, y: -4 }}
            transition={{
              duration: 0.25,
              delay: entering ? 0.28 : 0,
              ease: "easeOut",
            }}
          >
            Devarsh Kotak
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}
