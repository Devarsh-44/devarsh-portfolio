"use client";

import { motion } from "motion/react";
import { ri360Compare, safalCompare, type Project } from "@/content";
import { BeforeAfter } from "./BeforeAfter";

export function ProjectVisual({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  if (project.slug === "ri360") {
    return <BeforeAfter copy={ri360Compare} className={className} />;
  }

  if (project.slug === "safal-vidyalaya") {
    return <BeforeAfter copy={safalCompare} className={className} />;
  }

  if (project.slug === "rcintel-brand") {
    return <RCintelBrandVisual className={className} link={project.link?.href} />;
  }

  if (project.slug === "wedding-rsvp") {
    return <WeddingRSVPVisual className={className} />;
  }

  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-xl border border-ink-soft/20 bg-paper-grid p-6 text-center font-mono text-xs text-ink-soft ${className}`}
    >
      <span>{project.title}</span>
    </div>
  );
}

/** RI360: Official Brand Book & Pit-Wall Telemetry Dashboard (Direction B / index.html spec) */
function RI360Visual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#2c2721] bg-[#12100d] p-3.5 text-[#f3ede1] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.9)] sm:p-5 ${className}`}
      style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
    >
      {/* Top Bar: Official Wordmark + Live Telemetry Badge */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#2c2721] pb-2.5 sm:pb-3">
        {/* Official RI360 Wordmark */}
        <div className="h-6 w-auto shrink-0">
          <svg
            viewBox="0 0 225 94"
            className="h-5.5 w-auto sm:h-6"
            fill="none"
            aria-label="RI360"
          >
            {/* RI in white */}
            <path
              d="M35.22 73.0 23.65 46.5Q23.478 46.1 23.078 46.1H21.578Q21.078 46.1 21.168 46.6L25.884 72.8Q25.974 73.3 25.687 73.65Q25.4 74.0 24.9 74.0H10.7Q10.2 74.0 9.787 73.65Q9.374 73.3 9.284 72.8L-2.884 5.2Q-2.974 4.7 -2.687 4.35Q-2.4 4.0 -1.9 4.0H19.6Q25.4 4.0 30.395 6.75Q35.39 9.5 38.731 14.45Q42.072 19.4 43.206 25.7Q44.214 31.3 42.965 35.75Q41.716 40.2 38.502 42.9Q38.32 43.0 38.247 43.15Q38.174 43.3 38.31 43.5L52.148 72.6L52.32 73.0Q52.5 74.0 51.4 74.0H36.8Q35.7 74.0 35.22 73.0ZM16.146 18.7 18.702 32.9Q18.792 33.4 19.292 33.4H22.092Q24.792 33.4 26.032 31.4Q27.272 29.4 26.642 25.9Q25.976 22.2 24.016 20.2Q22.056 18.2 19.356 18.2H16.556Q16.056 18.2 16.146 18.7ZM57.384 72.8 45.216 5.2Q45.126 4.7 45.413 4.35Q45.7 4.0 46.2 4.0H60.4Q60.9 4.0 61.313 4.35Q61.726 4.7 61.816 5.2L73.984 72.8Q74.074 73.3 73.787 73.65Q73.5 74.0 73.0 74.0H58.8Q58.3 74.0 57.887 73.65Q57.474 73.3 57.384 72.8Z"
              fill="#f3ede1"
            />
            {/* 360 in race-red */}
            <path
              d="M119.75 51.5Q120.164 53.8 120.72 58.0Q121.688 65.6 117.216 70.2Q112.744 74.8 104.144 74.8Q98.244 74.8 93.257 72.65Q88.27 70.5 84.968 66.6Q81.666 62.7 80.666 57.7Q79.854 54.3 79.512 52.4Q79.296 51.2 80.496 51.2H94.696Q95.896 51.2 96.112 52.4Q96.364 53.8 96.96 56.0Q97.538 58.1 98.754 59.3Q99.97 60.5 101.57 60.5Q103.17 60.5 104.013 59.35Q104.856 58.2 104.696 56.2Q104.4 54.0 103.626 49.7Q102.834 45.3 102.274 43.3Q101.832 41.4 100.575 40.25Q99.318 39.1 97.718 39.1Q96.118 39.1 94.606 40.7Q94.278 41.1 93.878 41.1Q93.578 41.1 92.906 40.7L84.238 33.1Q83.73 32.5 83.676 32.2Q83.604 31.8 83.932 31.4L93.446 18.7Q93.738 18.1 93.138 18.1H75.938Q75.438 18.1 75.025 17.75Q74.612 17.4 74.522 16.9L72.416 5.2Q72.326 4.7 72.613 4.35Q72.9 4.0 73.4 4.0H109.9Q110.4 4.0 110.813 4.35Q111.226 4.7 111.316 5.2L113.494 17.3Q113.638 18.1 113.146 18.7L104.596 31.2Q104.304 31.8 104.904 31.8Q109.458 32.1 113.26 36.0Q117.062 39.9 118.352 45.4Q119.192 48.4 119.75 51.5ZM165.44 52.0 166.43 57.5Q167.806 65.7 163.125 70.25Q158.444 74.8 149.244 74.8Q140.644 74.8 134.538 70.6Q128.432 66.4 126.256 58.2Q125.578 56.1 125.11 53.5L119.114 21.3Q117.52 13.0 122.188 8.1Q126.856 3.2 136.056 3.2Q144.756 3.2 151.138 8.1Q157.52 13.0 159.014 21.3L159.68 25.0Q159.77 25.5 159.483 25.85Q159.196 26.2 158.696 26.2H144.496Q143.996 26.2 143.583 25.85Q143.17 25.5 143.08 25.0L142.612 22.4Q142.252 20.4 141.068 19.1Q139.884 17.8 138.684 17.8Q137.084 17.8 136.368 19.1Q135.652 20.4 136.012 22.4L137.776 32.2Q137.83 32.5 138.039 32.55Q138.248 32.6 138.412 32.4Q141.49 29.5 145.59 29.5Q152.69 29.5 157.745 34.25Q162.8 39.0 164.476 47.2Q164.846 48.7 165.44 52.0ZM148.424 50.8 147.27 45.5Q146.746 43.7 145.648 42.6Q144.55 41.5 143.15 41.5Q141.65 41.5 140.898 42.6Q140.146 43.7 140.288 45.6Q140.638 48.1 141.124 50.8Q141.682 53.9 142.232 56.4Q142.792 58.4 143.89 59.5Q144.988 60.6 146.588 60.6Q148.088 60.6 148.781 59.45Q149.474 58.3 149.314 56.3Q148.964 53.8 148.424 50.8ZM170.018 54.1 164.582 23.9Q162.872 14.4 167.428 8.6Q171.984 2.8 181.284 2.8Q190.584 2.8 197.228 8.6Q203.872 14.4 205.582 23.9L211.018 54.1Q212.728 63.6 208.172 69.4Q203.616 75.2 194.316 75.2Q185.016 75.2 178.372 69.4Q171.728 63.6 170.018 54.1ZM194.598 55.1 188.802 22.9Q188.334 20.3 186.996 18.7Q185.658 17.1 183.858 17.1Q182.058 17.1 181.296 18.7Q180.534 20.3 181.002 22.9L186.798 55.1Q187.266 57.7 188.604 59.3Q189.942 60.9 191.742 60.9Q193.542 60.9 194.304 59.3Q195.066 57.7 194.598 55.1Z"
              fill="#ff5a4a"
            />
            {/* Forward speed bar */}
            <path d="M87.6 84.0 H218.9 L212.9 92.0 H81.6 Z" fill="#ff5a4a" />
          </svg>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="rounded bg-[#16303a] px-2 py-0.5 font-mono text-[0.62rem] font-medium text-[#6fb2c6] border border-[#1f4e5f]/50">
            PIT WALL · LIVE
          </span>
          <span className="hidden rounded bg-[#1c1915] px-2 py-0.5 font-mono text-[0.62rem] text-[#a89f8e] border border-[#2c2721] xs:inline">
            FASTF1 ETL
          </span>
        </div>
      </div>

      {/* Editorial Headline & Magazine Lead */}
      <div className="relative z-10 my-2.5 sm:my-3">
        <p className="font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#ff5a4a] sm:text-[0.68rem]">
          MONZA · RACE ANALYSIS
        </p>
        <h4 className="mt-1 font-sans text-lg font-extrabold uppercase leading-tight tracking-tight text-[#f3ede1] sm:text-2xl">
          THE UNDERCUT THAT WASN&apos;T
        </h4>
        <p className="mt-1 text-[0.72rem] leading-relaxed text-[#a89f8e] sm:text-xs">
          Race intelligence, read like a pit wall and told like a magazine.
        </p>
      </div>

      {/* Pit-Wall Metric Cards: balanced, no-wrap layout */}
      <div className="relative z-10 grid grid-cols-3 gap-1.5 sm:gap-2">
        {/* Fastest Lap StatTile */}
        <div className="flex min-w-0 flex-col justify-between rounded-lg border border-[#2c2721] bg-[#1c1915] p-2 sm:p-2.5">
          <p className="truncate font-mono text-[0.58rem] uppercase tracking-wider text-[#a89f8e] sm:text-[0.62rem]">
            FASTEST · VER
          </p>
          <p className="my-1 font-mono text-sm font-semibold tabular-nums text-[#f3ede1] sm:text-base">
            1:31.447
          </p>
          <div className="flex items-center gap-1 font-mono text-[0.58rem] text-[#a89f8e] whitespace-nowrap">
            <span className="rounded bg-[#e2bd4a] px-1 py-0.2 font-bold text-[#12100d]">
              P1
            </span>
            <span>Lap 41</span>
          </div>
        </div>

        {/* Gap to Leader StatTile */}
        <div className="flex min-w-0 flex-col justify-between rounded-lg border border-[#2c2721] bg-[#1c1915] p-2 sm:p-2.5">
          <p className="truncate font-mono text-[0.58rem] uppercase tracking-wider text-[#a89f8e] sm:text-[0.62rem]">
            GAP · NOR
          </p>
          <p className="my-1 font-mono text-sm font-semibold tabular-nums text-[#f3ede1] sm:text-base">
            +4.812
          </p>
          <div className="flex items-center gap-1 font-mono text-[0.58rem] text-[#a89f8e] whitespace-nowrap">
            <span className="rounded bg-[#16303a] px-1 py-0.2 font-semibold text-[#6fb2c6]">
              −0.318
            </span>
            <span>last 5L</span>
          </div>
        </div>

        {/* Tyre Deg StatTile */}
        <div className="flex min-w-0 flex-col justify-between rounded-lg border border-[#2c2721] bg-[#1c1915] p-2 sm:p-2.5">
          <p className="truncate font-mono text-[0.58rem] uppercase tracking-wider text-[#a89f8e] sm:text-[0.62rem]">
            TYRE DEG
          </p>
          <p className="my-1 font-mono text-sm font-semibold tabular-nums text-[#f3ede1] sm:text-base">
            0.081s
          </p>
          <div className="flex items-center gap-1 font-mono text-[0.58rem] text-[#a89f8e] whitespace-nowrap">
            <span className="rounded bg-[#3a1814] px-1 py-0.2 font-semibold text-[#ff7a6d]">
              +0.012
            </span>
            <span>/lap</span>
          </div>
        </div>
      </div>

      {/* LapChart SVG Plot: clean, multi-breakpoint layout with non-wrapping legend */}
      <div className="relative z-10 my-2 rounded-lg border border-[#2c2721] bg-[#0b0a08] p-2.5 sm:my-2.5 sm:p-3">
        {/* Chart Header Row 1 */}
        <div className="flex items-center justify-between border-b border-[#2c2721] pb-1.5">
          <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-[#a89f8e] sm:text-[0.65rem]">
            LAP TIME TREND · STINT 2
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[0.58rem] text-[#e2bd4a] sm:text-[0.62rem]">
            <span className="size-1.5 rounded-full bg-[#e2bd4a]" /> BEST LAP
          </span>
        </div>

        {/* Chart Header Row 2: Driver Legend */}
        <div className="mt-1.5 flex items-center justify-between font-mono text-[0.58rem] text-[#a89f8e] sm:text-[0.62rem]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[#f3ede1]">
              <span className="size-2 rounded-xs bg-[#ff5a4a]" /> VER · P1
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="size-2 rounded-xs bg-[#6fb2c6]" /> NOR · +4.8s
            </span>
          </div>
          <span className="text-[0.55rem] text-[#a89f8e]/70">Laps 15–30</span>
        </div>

        {/* Chart SVG */}
        <svg
          viewBox="0 0 340 75"
          className="mt-2 h-16 w-full overflow-visible font-mono text-[9px] sm:h-20"
          fill="none"
          role="img"
          aria-label="Lap times, VER faster than NOR across stint 2"
        >
          {/* Grid lines */}
          <line x1="32" y1="15" x2="335" y2="15" stroke="#2c2721" strokeDasharray="3 3" />
          <line x1="32" y1="38" x2="335" y2="38" stroke="#2c2721" strokeDasharray="3 3" />
          <line x1="32" y1="60" x2="335" y2="60" stroke="#2c2721" strokeDasharray="3 3" />

          {/* Y Axis Labels */}
          <text x="2" y="18" fill="#a89f8e">1:31</text>
          <text x="2" y="41" fill="#a89f8e">1:32</text>
          <text x="2" y="63" fill="#a89f8e">1:33</text>

          {/* NOR Comparison series (petrol) */}
          <polyline
            points="32,44 60,42 90,46 120,43 150,47 180,50 210,48 240,53 270,56 300,59 335,63"
            stroke="#6fb2c6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* VER Focus series (race-red) */}
          <polyline
            points="32,32 60,30 90,29 120,31 150,26 180,29 210,27 240,31 270,30 300,33 335,35"
            stroke="#ff5a4a"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Podium Gold Marker for Fastest Lap */}
          <circle cx="150" cy="26" r="4" fill="#e2bd4a" stroke="#12100d" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Footer Strip: Source citation + Speed Bars Graphic Motif */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-t border-[#2c2721] pt-2 font-mono text-[0.6rem] text-[#a89f8e] sm:pt-2.5 sm:text-[0.65rem]">
        <span className="truncate">Source: FastF1 · Session R</span>

        {/* 5 Forward-leaning speed bars from RI360 Cover Art */}
        <div className="flex shrink-0 gap-1" aria-hidden>
          <span className="h-2 w-2.5 -skew-x-12 bg-[#ff5a4a]" />
          <span className="h-2 w-2.5 -skew-x-12 bg-[#ff5a4a]" />
          <span className="h-2 w-2.5 -skew-x-12 bg-[#6fb2c6]" />
          <span className="h-2 w-2.5 -skew-x-12 bg-[#e2bd4a]" />
          <span className="h-2 w-2.5 -skew-x-12 bg-[#f3ede1]" />
        </div>
      </div>
    </div>
  );
}

/** Safal Vidyalaya: Interactive notebook loading screen that continues seamlessly into the live site */
function SafalVisual({ className = "", link }: { className?: string; link?: string }) {
  const destination = link || "https://safal-six.vercel.app/";

  return (
    <a
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Safal Vidyalaya - Click to open live site and continue animation"
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-slate-300/60 bg-white text-ink shadow-[0_12px_36px_-10px_rgba(0,0,0,0.15)] transition-all hover:border-accent hover:shadow-[0_20px_50px_-15px_rgba(217,78,52,0.25)] ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="flex items-center gap-2 border-b border-slate-200/90 bg-slate-100/90 px-3.5 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-[#FF5F56]" />
          <span className="size-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="size-2.5 rounded-full bg-[#27C93F]" />
        </div>
        {/* Address pill with live loading pulse */}
        <div className="mx-auto flex h-6 w-full max-w-xs items-center justify-center gap-1.5 rounded-md bg-white px-3 font-mono text-[0.7rem] text-slate-600 shadow-sm">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="truncate">safal-six.vercel.app</span>
        </div>
      </div>

      {/* Actual Notebook Lined Paper Loading Canvas */}
      <div
        className="relative flex flex-1 flex-col items-center justify-center overflow-hidden p-6 sm:p-10"
        style={{
          backgroundColor: "#FFFFFF",
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 27px, #E4ECFB 28px)",
          backgroundPosition: "0 10px",
        }}
      >
        {/* Red Notebook Margin Line */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-8 w-[1.5px] bg-red-400/80 sm:left-12"
        />

        {/* Center Loading Unit (Exact match to live site) */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Logo */}
          <div className="relative h-14 w-44 sm:h-16 sm:w-52">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/safal-logo.webp"
              alt="Safal Vidyalaya"
              width={240}
              height={75}
              className="size-full object-contain drop-shadow-sm"
            />
          </div>

          {/* Animated red pen curve line */}
          <svg
            viewBox="0 0 240 24"
            className="my-1.5 h-4 w-44 sm:w-56"
            fill="none"
            aria-hidden
          >
            {/* Background faint guide track */}
            <path
              d="M4 14 C 40 4, 70 22, 110 12 S 180 4, 236 12"
              stroke="#F1D1CA"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Animated drawing pen stroke */}
            <motion.path
              d="M4 14 C 40 4, 70 22, 110 12 S 180 4, 236 12"
              stroke="#D94E34"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 0.45, 0.9, 1, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* Tagline in handwriting / cursive style */}
          <p
            className="font-serif italic text-sm font-semibold tracking-wide text-slate-800 sm:text-base"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Creation of Life Through Education
          </p>
        </div>

        {/* Hover Cue: Continues animation into live site */}
        <div className="absolute bottom-2.5 right-3 z-10 flex items-center gap-1.5 rounded-full border border-accent/40 bg-white/95 px-2.5 py-1 font-mono text-[0.65rem] text-accent shadow-sm backdrop-blur-sm transition-transform group-hover:scale-105 group-hover:border-accent">
          <span>Click to launch site</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}

/** RCintel Brand System & Guidelines: Studio Identity, Tokens & Cockpit HMI Specimen */
export function RCintelBrandVisual({
  className = "",
  link,
}: {
  className?: string;
  link?: string;
}) {
  const content = (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#2E3B4B] bg-[#1F2A36] p-4 text-[#EDE4D3] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.7)] transition-all duration-300 hover:border-[#7393B3]/60 hover:shadow-[0_20px_50px_-10px_rgba(31,42,54,0.6)] sm:p-5 ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(120% 90% at 50% -10%, #293847 0%, #1F2A36 60%, #18212B 100%)
        `,
        fontFamily: "var(--font-sans), system-ui, sans-serif",
      }}
    >
      {/* Ambient Foil & Blue Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 size-48 -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(201,184,154,0.18) 0%, rgba(115,147,179,0.12) 50%, transparent 75%)",
        }}
      />

      {/* Top Bar: Official 8 Shift Lights Motif + System Version Badge */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#2E3B4B] pb-2.5 sm:pb-3">
        {/* The 8 Shift Lights: 4 Champagne Foil (#C9B89A), 2 Blue-Gray (#7393B3), 2 Off (#2B3A4C) */}
        <div className="flex items-center gap-1.5" title="RCintel 8-Stage Rev Shift Lights">
          {[
            "#C9B89A",
            "#C9B89A",
            "#C9B89A",
            "#C9B89A",
            "#7393B3",
            "#7393B3",
            "#2B3A4C",
            "#2B3A4C",
          ].map((color, i) => (
            <motion.span
              key={i}
              className="h-2 w-3 rounded-sm sm:h-2.5 sm:w-3.5"
              style={{ backgroundColor: color }}
              animate={
                i < 6
                  ? {
                      opacity: [0.75, 1, 0.75],
                    }
                  : {}
              }
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.12,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded bg-[#18212B] px-2 py-0.5 font-mono text-[0.62rem] font-medium tracking-wider text-[#9DB4CB] border border-[#2E3B4B]">
            v2.0 · BRAND SYSTEM
          </span>
        </div>
      </div>

      {/* Center Stage: Horizontal Lockup Artwork on Night Ground */}
      <div className="relative z-10 my-3 flex flex-col items-center justify-center rounded-xl border border-[#2E3B4B]/80 bg-[#18212B]/90 p-4 sm:p-5">
        <div className="relative flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rcintel/rcintel-horizontal-for-dark.svg"
            alt="RCintel Signature Lockup"
            width={430}
            height={200}
            className="h-auto w-full max-w-[270px] drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:scale-[1.03] sm:max-w-[310px]"
          />
        </div>

        <p className="mt-2.5 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[#9DB4CB]/90">
          STUDIO FOR TELEMETRY &amp; HMI INTERFACES
        </p>
      </div>

      {/* Bottom Token Strip: Core Brand Tokens + Type Pairing */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#2E3B4B]/70">
        {/* Color Palette Tokens */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {[
            { name: "Night Slate", hex: "#1F2A36", border: "#2E3B4B" },
            { name: "Blue-Gray", hex: "#7393B3", border: "#7393B3" },
            { name: "Almond", hex: "#E1D4C0", border: "#E1D4C0" },
            { name: "Champagne Foil", hex: "#C9B89A", border: "#C9B89A" },
          ].map((token) => (
            <div
              key={token.name}
              className="flex items-center gap-1 rounded bg-[#18212B] px-1.5 py-0.5 border border-[#2E3B4B]"
              title={`${token.name} (${token.hex})`}
            >
              <span
                className="size-2 rounded-full border border-black/20"
                style={{ backgroundColor: token.hex }}
              />
              <span className="font-mono text-[0.58rem] text-[#9DB4CB] hidden xs:inline">
                {token.hex}
              </span>
            </div>
          ))}
        </div>

        {/* Studio Link / Cue */}
        <div className="flex items-center gap-1 font-mono text-[0.65rem] text-[#C9B89A] transition-colors group-hover:text-[#EDE4D3]">
          <span>Studio book</span>
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
            ↗
          </span>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7393B3]"
        title="Enter RCintel Studio"
      >
        {content}
      </a>
    );
  }

  return content;
}

/** Wedding RSVP Platform: Authentic Luxury Stationery & RSVP Interface (Strict Privacy: No links, no names, no dates) */
export function WeddingRSVPVisual({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#D8CEBF] bg-[#F7F2E9] p-4 text-[#26221E] shadow-[0_12px_36px_-10px_rgba(38,34,30,0.12)] sm:p-5 ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(120% 90% at 12% 8%, #FBF7EF 0%, rgba(251,247,239,0) 55%),
          radial-gradient(90% 70% at 88% 22%, #FFFDF8 0%, rgba(255,253,248,0) 50%),
          linear-gradient(155deg, #F7F2E9 0%, #F1EADC 45%, #E9E0D0 100%)
        `,
      }}
    >
      {/* Corner Watercolour Blush Bloom (from site's .bloom atmosphere) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(240,197,190,0.75) 0%, rgba(240,197,190,0.2) 50%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(240,197,190,0.55) 0%, rgba(240,197,190,0.15) 50%, transparent 70%)",
        }}
      />

      {/* Top Bar: Stationery Eyebrow + Live Netlify Edge Badge */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#26221E]/10 pb-2.5 sm:pb-3">
        <div className="flex items-center gap-2">
          {/* Gold Monogram Seal with signature & from site favicon */}
          <div className="flex size-6 items-center justify-center rounded-full border border-[#B39B74] bg-[#FFFDF8] shadow-sm">
            <span
              className="font-serif text-xs font-semibold leading-none text-[#B39B74]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              &amp;
            </span>
          </div>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#4E463D]">
            Save the Date &amp; RSVP
          </span>
        </div>
        <span className="rounded border border-[#B39B74]/30 bg-[#FFFDF8]/80 px-2 py-0.5 font-mono text-[0.6rem] font-medium tracking-wider text-[#4E463D] shadow-xs">
          Netlify Edge
        </span>
      </div>

      {/* Centerpiece: Elegant Stationery RSVP Card */}
      <div className="relative z-10 my-3 rounded-xl border border-[#26221E]/10 bg-[#FFFDF8]/85 p-3.5 shadow-sm backdrop-blur-xs sm:p-4">
        {/* Ornate Gold Divider + Heading */}
        <div className="text-center">
          <div className="mb-1 flex items-center justify-center gap-2 text-[#B39B74]" aria-hidden>
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#B39B74]" />
            <svg width="10" height="10" viewBox="0 0 12 12" fill="currentColor">
              <polygon points="6,0 12,6 6,12 0,6" />
            </svg>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#B39B74]" />
          </div>
          <h4
            className="font-serif italic text-xl font-medium tracking-wide text-[#26221E] sm:text-2xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Kindly Respond
          </h4>
          <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#8B8175]">
            Celebration &amp; Guest Management
          </p>
        </div>

        {/* The Two Choice Cards (.opt style from the site) */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-left sm:gap-2.5">
          {/* Option 1: Attending (Selected State with gold border & blush tint) */}
          <div className="relative flex flex-col justify-between rounded-lg border border-[#B39B74] bg-[#E7C4BD]/20 p-2.5 shadow-xs">
            <div className="flex items-center gap-1.5">
              <span className="relative flex size-3 items-center justify-center rounded-full border border-[#B39B74]">
                <span className="size-1.5 rounded-full bg-[#B39B74]" />
              </span>
              <span
                className="font-serif text-[0.88rem] font-semibold text-[#26221E]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Will Attend
              </span>
            </div>
            <span
              className="mt-1 font-serif italic text-[0.72rem] text-[#8B8175]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              With pleasure
            </span>
          </div>

          {/* Option 2: Decline (Unselected State) */}
          <div className="relative flex flex-col justify-between rounded-lg border border-[#26221E]/12 bg-[#FFFDF8]/50 p-2.5 opacity-75">
            <div className="flex items-center gap-1.5">
              <span className="size-3 rounded-full border border-[#8B8175]" />
              <span
                className="font-serif text-[0.88rem] font-semibold text-[#4E463D]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Decline
              </span>
            </div>
            <span
              className="mt-1 font-serif italic text-[0.72rem] text-[#8B8175]"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
              In spirit
            </span>
          </div>
        </div>

        {/* Stepper + Input Simulation */}
        <div className="mt-2.5 flex items-center justify-between border-t border-[#26221E]/8 pt-2">
          <div className="flex items-center gap-1.5 font-mono text-[0.62rem] text-[#4E463D]">
            <span className="rounded bg-[#EFE8DA] px-1.5 py-0.5 text-[#26221E]">2 Guests</span>
            <span className="text-[#8B8175]">· Confirmed</span>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-[#5C7A5E]/15 px-2 py-0.5 font-mono text-[0.6rem] font-medium text-[#5C7A5E]">
            <span className="size-1 rounded-full bg-[#5C7A5E]" />
            Instant RSVP
          </span>
        </div>
      </div>

      {/* Footer Strip: Google Sheets backend sync & telemetry stats */}
      <div className="relative z-10 flex items-center justify-between border-t border-[#26221E]/10 pt-2 font-mono text-[0.62rem] text-[#8B8175] sm:pt-2.5 sm:text-[0.65rem]">
        <div className="flex items-center gap-1.5 truncate">
          <span className="size-1.5 rounded-full bg-[#5C7A5E]" />
          <span className="truncate">Google Apps Script · Sheets Sync</span>
        </div>
        <span className="shrink-0 font-medium text-[#4E463D]">
          142 Responses
        </span>
      </div>
    </div>
  );
}
