"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { DynamicIslandLab } from "@/components/lab/DynamicIslandLab";

export type AnimationMode = "stroke-fill" | "beam-scan" | "kinetic-snap" | "optical-glow";

export default function LogoPreviewPage() {
  const [activeTab, setActiveTab] = useState<"island" | "arena" | "fonts" | "vectors">("island");
  const [activeTheme, setActiveTheme] = useState<"dark" | "light">("dark");
  const [animMode, setAnimMode] = useState<AnimationMode>("stroke-fill");
  const [arenaKey, setArenaKey] = useState<number>(0);
  const [selectedId, setSelectedId] = useState<string>("option-1");

  const replayArena = () => setArenaKey((k) => k + 1);

  return (
    <>
      {/* External Google Fonts Link for live specimen rendering */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=Plus+Jakarta+Sans:wght@700;800&family=Sora:wght@600;700;800&family=Space+Grotesk:wght@600;700&family=Syne:wght@700;800&display=swap"
      />

      <div
        className={`min-h-screen transition-colors duration-300 ${
          activeTheme === "dark"
            ? "bg-[#0F141A] text-[#EDE4D3]"
            : "bg-[#F7F2E9] text-[#1F2A36]"
        }`}
        style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
      >
        {/* Top Sticky Header */}
        <header
          className={`sticky top-0 z-30 border-b backdrop-blur-md transition-colors ${
            activeTheme === "dark"
              ? "border-[#2E3B4B] bg-[#0F141A]/95"
              : "border-[#D9D0C2] bg-[#F7F2E9]/95"
          }`}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#D94E34] hover:underline"
              >
                ← Back to portfolio
              </Link>
              <span className="text-xs opacity-40">/</span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#7393B3]">
                DK Identity Specimen Lab
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <div
                className={`flex rounded-lg border p-0.5 text-xs font-mono ${
                  activeTheme === "dark"
                    ? "border-[#2E3B4B] bg-[#18212B]"
                    : "border-[#D9D0C2] bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveTheme("dark")}
                  className={`rounded px-2.5 py-1 transition-colors ${
                    activeTheme === "dark"
                      ? "bg-[#2E3B4B] text-white font-semibold"
                      : "text-[#5A6676]"
                  }`}
                >
                  Dark (Cockpit)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTheme("light")}
                  className={`rounded px-2.5 py-1 transition-colors ${
                    activeTheme === "light"
                      ? "bg-[#E1D4C0] text-[#1F2A36] font-semibold"
                      : "text-[#A7B4C2]"
                  }`}
                >
                  Light (Paper)
                </button>
              </div>

              <button
                type="button"
                onClick={replayArena}
                className="rounded-lg border border-[#D94E34] bg-[#D94E34]/10 px-3 py-1 font-mono text-xs font-medium text-[#D94E34] transition-all hover:bg-[#D94E34] hover:text-white"
              >
                Trigger Animation ↻
              </button>
            </div>
          </div>

          {/* Tab Switcher */}
          <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-3 sm:px-8">
            <button
              type="button"
              onClick={() => setActiveTab("island")}
              className={`rounded-full px-4 py-1.5 font-mono text-xs font-semibold transition-all ${
                activeTab === "island"
                  ? "bg-[#D94E34] text-white shadow-md ring-2 ring-[#D94E34]/30"
                  : activeTheme === "dark"
                  ? "bg-[#18212B] text-[#A7B4C2] hover:bg-[#253342]"
                  : "bg-white text-[#5A6676] hover:bg-[#EAE3D7] border border-[#D9D0C2]"
              }`}
            >
              ★ Dynamic Island Lab (Live Use Cases)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("arena")}
              className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-all ${
                activeTab === "arena"
                  ? "bg-[#D94E34] text-white shadow-sm"
                  : activeTheme === "dark"
                  ? "bg-[#18212B] text-[#A7B4C2] hover:bg-[#253342]"
                  : "bg-white text-[#5A6676] hover:bg-[#EAE3D7] border border-[#D9D0C2]"
              }`}
            >
              Font 1 vs 6 vs Gothif Arena
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("fonts")}
              className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-all ${
                activeTab === "fonts"
                  ? "bg-[#D94E34] text-white shadow-sm"
                  : activeTheme === "dark"
                  ? "bg-[#18212B] text-[#A7B4C2] hover:bg-[#253342]"
                  : "bg-white text-[#5A6676] hover:bg-[#EAE3D7] border border-[#D9D0C2]"
              }`}
            >
              10 Typeface Directions (Specimens)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("vectors")}
              className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-all ${
                activeTab === "vectors"
                  ? "bg-[#D94E34] text-white shadow-sm"
                  : activeTheme === "dark"
                  ? "bg-[#18212B] text-[#A7B4C2] hover:bg-[#253342]"
                  : "bg-white text-[#5A6676] hover:bg-[#EAE3D7] border border-[#D9D0C2]"
              }`}
            >
              10 Vector Line Systems
            </button>
          </div>
        </header>

        {/* Content Section */}
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-8">
          {activeTab === "island" ? (
            <DynamicIslandLab activeTheme={activeTheme} />
          ) : activeTab === "arena" ? (
            /* TAB 0: FONT 1 VS FONT 6 ANIMATION ARENA */
            <div className="space-y-10">
              {/* Header Intro */}
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#D94E34]">
                  Head-to-Head Comparison · Quinn vs. Sora
                </p>
                <h1 className="mt-2 font-serif text-3xl font-normal leading-tight tracking-tight sm:text-5xl">
                  Animation Options for &lsquo;DK&rsquo;
                </h1>
                <p className="mt-4 text-base leading-relaxed opacity-85 sm:text-lg">
                  You are deciding between <strong>Font 1 (Quinn)</strong> and <strong>Font 6 (Sora)</strong>.
                  Below are the <strong>4 distinct animation mechanisms</strong> you can use on the
                  portfolio intro curtain, studio transitions, and navbar. Switch modes below to watch them
                  execute in real time.
                </p>
              </div>

              {/* Animation Mode Selector Bar */}
              <div
                className={`flex flex-wrap items-center gap-2 rounded-2xl border p-2 sm:p-3 ${
                  activeTheme === "dark"
                    ? "border-[#2E3B4B] bg-[#161F28]"
                    : "border-[#D9D0C2] bg-white shadow-sm"
                }`}
              >
                <span className="px-3 font-mono text-xs text-[#7393B3] uppercase">
                  Select Animation Mode:
                </span>

                {[
                  { id: "stroke-fill", label: "Mode A: Laser Stroke-Draw → Solid Lock" },
                  { id: "beam-scan", label: "Mode B: Cockpit Telemetry Scan & Rev Sweep" },
                  { id: "kinetic-snap", label: "Mode C: Kinetic Brutalist Slide & Snap" },
                  { id: "optical-glow", label: "Mode D: Optical Phosphor Fade & Settle" },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => {
                      setAnimMode(m.id as AnimationMode);
                      replayArena();
                    }}
                    className={`rounded-xl px-3.5 py-2 font-mono text-xs font-medium transition-all ${
                      animMode === m.id
                        ? "bg-[#D94E34] text-white shadow-sm"
                        : activeTheme === "dark"
                        ? "bg-[#1F2A36] text-[#A7B4C2] hover:bg-[#2B3A4C]"
                        : "bg-[#F3EEE5] text-[#5A6676] hover:bg-[#EAE3D7]"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* Side-by-Side 3-Way Arena */}
              <div className="grid gap-8 lg:grid-cols-3">
                {/* CARD 1: FONT 1 (QUINN) */}
                <div
                  className={`flex flex-col justify-between rounded-2xl border p-5 transition-all sm:p-6 ${
                    activeTheme === "dark"
                      ? "border-[#2E3B4B] bg-[#161F28]"
                      : "border-[#D9D0C2] bg-white shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="rounded bg-[#D94E34]/15 px-2 py-0.5 font-mono text-[0.68rem] font-semibold text-[#D94E34]">
                          01 · QUINN BOLD
                        </span>
                        <h3 className="mt-1.5 font-serif text-xl font-medium sm:text-2xl">
                          Quinn Display
                        </h3>
                        <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[#7393B3]">
                          Angular Cuts · Brutalist Swagger
                        </p>
                      </div>
                      <span className="font-mono text-[0.65rem] text-[#A7B4C2]">07 of 07</span>
                    </div>

                    {/* Animation Stage for Quinn */}
                    <div
                      className={`relative my-5 flex h-56 w-full items-center justify-center overflow-hidden rounded-xl border p-4 ${
                        activeTheme === "dark"
                          ? "border-[#2E3B4B]/80 bg-[#0F141A]"
                          : "border-[#EAE3D7] bg-[#FBF8F2]"
                      }`}
                    >
                      <QuinnAnimatedDK key={`quinn-${arenaKey}-${animMode}`} mode={animMode} />
                    </div>

                    <div className="space-y-2 text-xs leading-relaxed opacity-85">
                      <p>
                        <strong>Motion Feel:</strong> Physical, sharp, and punchy.
                        The signature Quinn diagonal cut on the K junction flashes a white laser ping as the letters lock together.
                      </p>
                      <p>
                        <strong>Character:</strong> Rebellious graphic energy inspired by streetwear posters &amp; bold brand identities.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t pt-3 font-mono text-[0.68rem] opacity-75">
                    <span>Vibe: Bold agency founder, graphic swagger</span>
                  </div>
                </div>

                {/* CARD 2: GOTHIF (NEW BENCHMARK) */}
                <div
                  className={`flex flex-col justify-between rounded-2xl border p-5 transition-all ring-1 ring-[#D94E34]/40 sm:p-6 ${
                    activeTheme === "dark"
                      ? "border-[#D94E34]/60 bg-[#1A1F26]"
                      : "border-[#D94E34]/60 bg-white shadow-lg"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="rounded bg-[#D94E34] px-2 py-0.5 font-mono text-[0.68rem] font-bold text-white uppercase tracking-wider">
                          NEW · GOTHIF BOLD
                        </span>
                        <h3 className="mt-1.5 font-serif text-xl font-medium sm:text-2xl">
                          Gothif Display
                        </h3>
                        <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[#D94E34]">
                          Monolithic Squircle · High-End European
                        </p>
                      </div>
                      <span className="font-mono text-[0.65rem] text-[#A7B4C2]">02 of 07</span>
                    </div>

                    {/* Animation Stage for Gothif */}
                    <div
                      className={`relative my-5 flex h-56 w-full items-center justify-center overflow-hidden rounded-xl border p-4 ${
                        activeTheme === "dark"
                          ? "border-[#2E3B4B]/80 bg-[#0F141A]"
                          : "border-[#EAE3D7] bg-[#FBF8F2]"
                      }`}
                    >
                      <GothifAnimatedDK key={`gothif-${arenaKey}-${animMode}`} mode={animMode} />
                    </div>

                    <div className="space-y-2 text-xs leading-relaxed opacity-85">
                      <p>
                        <strong>Motion Feel:</strong> Heavy architectural press.
                        The D inherits the exact squircle geometry of Gothif&apos;s &lsquo;O&rsquo; and &lsquo;G&rsquo;, while K provides a grounded monolithic pillar.
                      </p>
                      <p>
                        <strong>Why it excels for &lsquo;DK&rsquo;:</strong> Solves Quinn&rsquo;s asymmetry—both D and K look completely organic, authoritative, and rock-solid without needing random cuts.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t pt-3 font-mono text-[0.68rem] font-semibold text-[#D94E34]">
                    <span>Vibe: Architectural luxury, monolithic confidence</span>
                  </div>
                </div>

                {/* CARD 3: FONT 6 (SORA DISPLAY) */}
                <div
                  className={`flex flex-col justify-between rounded-2xl border p-5 transition-all sm:p-6 ${
                    activeTheme === "dark"
                      ? "border-[#2E3B4B] bg-[#161F28]"
                      : "border-[#D9D0C2] bg-white shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="rounded bg-[#7393B3]/20 px-2 py-0.5 font-mono text-[0.68rem] font-semibold text-[#7393B3]">
                          06 · SORA COCKPIT
                        </span>
                        <h3 className="mt-1.5 font-serif text-xl font-medium sm:text-2xl">
                          Sora Display
                        </h3>
                        <p className="font-mono text-[0.65rem] uppercase tracking-wider text-[#C9B89A]">
                          RCintel Studio DNA · Aerospace HMI
                        </p>
                      </div>
                      <span className="font-mono text-[0.65rem] text-[#A7B4C2]">Studio Link</span>
                    </div>

                    {/* Animation Stage for Sora */}
                    <div
                      className={`relative my-5 flex h-56 w-full items-center justify-center overflow-hidden rounded-xl border p-4 ${
                        activeTheme === "dark"
                          ? "border-[#2E3B4B]/80 bg-[#0F141A]"
                          : "border-[#EAE3D7] bg-[#FBF8F2]"
                      }`}
                    >
                      <SoraAnimatedDK key={`sora-${arenaKey}-${animMode}`} mode={animMode} />
                    </div>

                    <div className="space-y-2 text-xs leading-relaxed opacity-85">
                      <p>
                        <strong>Motion Feel:</strong> Precision-engineered telemetry sweep.
                        Smooth mathematical curves synchronized with an 8-stage rev shift-lights startup sequence.
                      </p>
                      <p>
                        <strong>Character:</strong> 100% brand continuity with your studio guidelines, conveying high-density telemetry intelligence.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t pt-3 font-mono text-[0.68rem] opacity-75">
                    <span>Vibe: Systems product engineer, cockpit telemetry</span>
                  </div>
                </div>
              </div>

              {/* Strategic Breakdown: Which Should You Pick? */}
              <div
                className={`rounded-2xl border p-6 sm:p-8 ${
                  activeTheme === "dark"
                    ? "border-[#2E3B4B] bg-[#18212B]"
                    : "border-[#D9D0C2] bg-white shadow-sm"
                }`}
              >
                <span className="font-mono text-xs uppercase tracking-wider text-[#D94E34]">
                  STRATEGIC VERDICT · PRODUCT DESIGNER PERSPECTIVE
                </span>
                <h3 className="mt-2 font-serif text-2xl font-medium sm:text-3xl">
                  Which One Should You Choose?
                </h3>

                <div className="mt-4 grid gap-6 md:grid-cols-2 text-sm leading-relaxed opacity-90">
                  <div className="rounded-xl border border-white/10 p-4">
                    <p className="font-mono text-xs font-bold uppercase text-[#D94E34]">
                      Pick Font 1 (Quinn) If:
                    </p>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li>You want your portfolio to lead with strong graphic design &amp; branding punch.</li>
                      <li>You want a heavy, assertive mark that stands out instantly from traditional tech portfolios.</li>
                      <li>You love Mode C (Kinetic Brutalist Slide &amp; Snap) or Mode A with solid fill lock.</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-[#7393B3]/30 p-4">
                    <p className="font-mono text-xs font-bold uppercase text-[#7393B3]">
                      Pick Font 6 (Sora) If:
                    </p>
                    <ul className="mt-2 space-y-2 list-disc list-inside">
                      <li>You want 100% brand continuity between your personal identity and your studio (<strong>RCintel</strong>).</li>
                      <li>You want an engineered, aerospace/cockpit precision feel that reinforces your systems and telemetry expertise.</li>
                      <li>You love the 8-stage shift-light rev sweep and smooth mathematical stroke-draw.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === "fonts" ? (
            /* TAB 1: 10 FONT DIRECTIONS */
            <div className="space-y-10">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#D94E34]">
                  Typography Research &amp; Display Fonts
                </p>
                <h1 className="mt-2 font-serif text-3xl font-normal leading-tight tracking-tight sm:text-5xl">
                  Display Fonts for &lsquo;DK&rsquo; &amp; Wordmark
                </h1>
                <p className="mt-4 text-base leading-relaxed opacity-80 sm:text-lg">
                  A curated survey of 10 world-class brutalist, architectural, and high-fashion display
                  typefaces, starting with the <strong>Quinn</strong> benchmark.
                </p>
              </div>

              {/* Quinn Spotlight Card */}
              <div
                className={`overflow-hidden rounded-2xl border p-6 sm:p-8 ${
                  activeTheme === "dark"
                    ? "border-[#2E3B4B] bg-[#161F28]"
                    : "border-[#D9D0C2] bg-white shadow-md"
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:gap-12">
                  <div className="flex flex-col gap-3">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-black/20 shadow-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/quinn-font-ref.jpg"
                        alt="Quinn Font Specimen by FoxType"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono opacity-70">
                      <span>Specimen: QUINN Bold (FoxType)</span>
                      <span>Weight: Bold Display</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-[#D94E34]/15 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#D94E34]">
                          YOUR BENCHMARK
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#7393B3]">
                          FoxType · Display Bold
                        </span>
                      </div>

                      <h2 className="mt-3 font-serif text-3xl font-normal leading-tight sm:text-4xl">
                        What I Think About &lsquo;Quinn&rsquo;
                      </h2>

                      <div className="mt-4 space-y-3 text-sm leading-relaxed opacity-85 sm:text-base">
                        <p>
                          <strong>The Good:</strong> Quinn has extraordinary visual energy. Its squircle
                          geometry on the &lsquo;Q&rsquo;, ultra-tight internal counters, and the angular
                          diagonal slash on the &lsquo;i&rsquo; give it an unmistakable brutalist-chic,
                          streetwear-meets-agency swagger (think Acronym, Balenciaga, or Pangram Pangram).
                        </p>
                        <p>
                          <strong>The Catch for &lsquo;DK&rsquo;:</strong> Quinn achieves its distinctive
                          character through letters with special quirks (&lsquo;Q&rsquo;, &lsquo;i&rsquo;,
                          &lsquo;U&rsquo;). When set as just <strong>&ldquo;DK&rdquo;</strong>, a standard &lsquo;D&rsquo;
                          and &lsquo;K&rsquo; can look like a straightforward condensed block unless we
                          custom-carve bespoke diagonal incisions or an architectural datum slice into the
                          &lsquo;D&rsquo; and &lsquo;K&rsquo; stems to echo the Quinn signature.
                        </p>
                        <p>
                          <strong>The Verdict:</strong> It&rsquo;s an exceptional aesthetic reference for a
                          confident, punchy Product Designer brand. If paired with razor-sharp monospaced
                          subtitles, it gives your portfolio an unapologetic, high-conviction presence.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-[#D94E34]/30 bg-[#D94E34]/10 p-4">
                      <p className="font-mono text-xs font-semibold text-[#D94E34]">
                        HOW TO USE THIS VIBE FOR DEVARSH KOTAK:
                      </p>
                      <p className="mt-1 text-xs leading-relaxed opacity-90">
                        Use Quinn (or custom letter-carved geometry like Option 04 / Chamfered Telemetry)
                        for the primary &lsquo;DK&rsquo; emblem, and pair it with an ultra-clean Swiss
                        systems font (like Sora or Diatype) for the UI body.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gothif Spotlight Critique Card */}
              <div
                className={`overflow-hidden rounded-2xl border p-6 sm:p-8 ${
                  activeTheme === "dark"
                    ? "border-[#D94E34]/50 bg-[#1A1F26]"
                    : "border-[#D94E34]/50 bg-white shadow-md"
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:gap-12">
                  <div className="flex flex-col gap-3">
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-black/20 shadow-lg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/gothif-font-ref.jpg"
                        alt="Gothif Font Specimen by FoxType"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono opacity-70">
                      <span>Specimen: GOTHIF Bold (FoxType)</span>
                      <span>Weight: Bold Display (02 of 07)</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-[#D94E34] px-2.5 py-0.5 font-mono text-xs font-bold text-white uppercase tracking-wider">
                          NEW BENCHMARK
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#7393B3]">
                          FoxType · Display Bold
                        </span>
                      </div>

                      <h2 className="mt-3 font-serif text-3xl font-normal leading-tight sm:text-4xl">
                        What I Think About &lsquo;Gothif&rsquo;
                      </h2>

                      <div className="mt-4 space-y-3 text-sm leading-relaxed opacity-85 sm:text-base">
                        <p>
                          <strong>The Good:</strong> Gothif is a masterclass in monolithic, architectural
                          condensed type. Notice the <strong>squircle curvature</strong> on the &lsquo;G&rsquo; and
                          &lsquo;O&rsquo;—it features vertical straight walls with soft, radiused outer corners
                          and razor-sharp inner joints. It feels like Prada, Rick Owens, or high-end Berlin
                          industrial design.
                        </p>
                        <p>
                          <strong>Why it beats Quinn for &lsquo;DK&rsquo;:</strong> While Quinn relied on
                          eccentric quirks from letters like &lsquo;Q&rsquo; and &lsquo;i&rsquo;, <strong>Gothif&rsquo;s core
                          power comes directly from its &lsquo;D&rsquo;-like squircle curves (seen in &lsquo;O&rsquo; and &lsquo;G&rsquo;)
                          and its rock-solid vertical pillars (seen in &lsquo;H&rsquo; and &lsquo;I&rsquo;)</strong>.
                          Setting &ldquo;DK&rdquo; in Gothif feels instantly organic, balanced, and complete.
                        </p>
                        <p>
                          <strong>The Verdict:</strong> Between Quinn and Gothif, <strong>Gothif is actually
                          the superior typographic foundation for a 2-letter monogram (&ldquo;DK&rdquo;)</strong>.
                          It gives you the heavyweight brutalist authority without feeling gimmicky or off-balance.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-[#D94E34]/30 bg-[#D94E34]/10 p-4">
                      <p className="font-mono text-xs font-semibold text-[#D94E34]">
                        THE GOLDEN COMBINATION:
                      </p>
                      <p className="mt-1 text-xs leading-relaxed opacity-90">
                        Use <strong>Gothif&rsquo;s squircle monolith</strong> for the &ldquo;DK&rdquo; logo mark,
                        and use <strong>Sora</strong> (RCintel) for navigation and telemetry UI. You get the heavy
                        physical graphic presence of Gothif with the aerospace precision of Sora!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* TAB 2: VECTORS */
            <div className="space-y-8">
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#D94E34]">
                  Vector Line Systems · Mathematical Calibration
                </p>
                <h1 className="mt-2 font-serif text-3xl font-normal leading-tight tracking-tight sm:text-5xl">
                  10 Animated Line Monograms
                </h1>
                <p className="mt-4 text-base leading-relaxed opacity-80 sm:text-lg">
                  Every option is engineered with continuous curves, synchronized vertical stems, and
                  zero dangling lines, pre-calibrated for the curtain stroke-draw intro.
                </p>
              </div>

              {/* Vector Grid */}
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    id: "option-1",
                    number: "01",
                    name: "Architectural Golden-Ratio Ligature",
                    style: "Swiss Modern · Balanced Datum",
                    description:
                      "A fully resolved engineering monogram. The D's squircle bowl and K's chevron are bridged by a continuous horizontal datum line running from D's stem through the bowl directly into K's apex junction.",
                    viewBox: "0 0 120 80",
                    paths: [
                      "M18 12 V68",
                      "M18 12 H36 C 54 12, 60 25, 60 40 C 60 55, 54 68, 36 68 H18",
                      "M18 40 H76",
                      "M76 12 V68",
                      "M104 12 L76 40 L104 68",
                    ],
                    strokeWidth: 4.5,
                  },
                  {
                    id: "option-4",
                    number: "04",
                    name: "Chamfered Telemetry & Cockpit",
                    style: "RCintel DNA · Motorsport Technical",
                    description:
                      "Outer corners of D feature 45-degree aerodynamic chamfer cuts, anchored by an instrument datum bar. Direct mechanical homage to Quinn and telemetry cockpits.",
                    viewBox: "0 0 120 80",
                    paths: [
                      "M16 12 V68 H36 L60 44 V36 L36 12 Z",
                      "M16 40 H74",
                      "M74 12 V68",
                      "M104 14 L74 40 L104 66",
                    ],
                    strokeWidth: 4.5,
                  },
                ].map((opt) => (
                  <div
                    key={opt.id}
                    className={`rounded-2xl border p-6 ${
                      activeTheme === "dark" ? "border-[#2E3B4B] bg-[#161F28]" : "border-[#D9D0C2] bg-white"
                    }`}
                  >
                    <span className="font-mono text-xs text-[#D94E34]">OPTION {opt.number}</span>
                    <h3 className="mt-1 font-serif text-2xl">{opt.name}</h3>
                    <p className="font-mono text-xs text-[#7393B3]">{opt.style}</p>
                    <div className="my-6 flex h-40 items-center justify-center rounded-xl border border-white/10 bg-black/30">
                      <svg viewBox={opt.viewBox} className="h-20 w-auto text-[#D94E34]" fill="none" stroke="currentColor" strokeWidth={opt.strokeWidth}>
                        {opt.paths.map((d) => (
                          <motion.path key={d} d={d} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
                        ))}
                      </svg>
                    </div>
                    <p className="text-sm opacity-80">{opt.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

/** Animated Quinn DK Component Supporting the 4 Motion Modes */
function QuinnAnimatedDK({ mode }: { mode: AnimationMode }) {
  // Mode A: Stroke draw -> Solid fill lock
  if (mode === "stroke-fill") {
    return (
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 160 100" className="h-32 w-auto" fill="none">
          {/* Laser stroke outline */}
          <motion.path
            d="M20 15 H52 C68 15 78 28 78 50 C78 72 68 85 52 85 H20 Z M38 32 V68 H50 C58 68 62 61 62 50 C62 39 58 32 50 32 Z"
            stroke="#D94E34"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.path
            d="M92 15 V85 H108 V55 L132 85 H152 L122 48 L148 15 H128 L108 41 V15 Z"
            stroke="#D94E34"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          />

          {/* Solid fill that snaps in once stroke finishes */}
          <motion.path
            d="M20 15 H52 C68 15 78 28 78 50 C78 72 68 85 52 85 H20 Z M38 32 V68 H50 C58 68 62 61 62 50 C62 39 58 32 50 32 Z M92 15 V85 H108 V55 L132 85 H152 L122 48 L148 15 H128 L108 41 V15 Z"
            fill="#D94E34"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.95, ease: "easeOut" }}
          />

          {/* Quinn signature slash flash highlight */}
          <motion.line
            x1="108"
            y1="41"
            x2="128"
            y2="15"
            stroke="#FFFFFF"
            strokeWidth="4"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0, 1, 0], pathLength: [0, 1, 1] }}
            transition={{ duration: 0.4, delay: 1.15 }}
          />
        </svg>
      </div>
    );
  }

  // Mode B: Telemetry Beam Scan
  if (mode === "beam-scan") {
    return (
      <div className="relative flex items-center justify-center">
        {/* Scanning light bar */}
        <motion.div
          className="absolute inset-y-0 w-2 bg-gradient-to-r from-transparent via-[#D94E34] to-transparent blur-sm z-20"
          initial={{ left: "-10%" }}
          animate={{ left: "110%" }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
        />
        <motion.div
          className="font-sans text-8xl font-black tracking-tighter text-[#D94E34]"
          style={{ fontFamily: "'Syne', 'Arial Black', sans-serif" }}
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          DK
        </motion.div>
      </div>
    );
  }

  // Mode C: Kinetic Brutalist Slide & Snap
  if (mode === "kinetic-snap") {
    return (
      <div className="relative flex items-center justify-center gap-1">
        {/* D slides from left */}
        <motion.div
          className="text-8xl font-black text-[#D94E34]"
          style={{ fontFamily: "'Syne', 'Arial Black', sans-serif" }}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 14, stiffness: 200 }}
        >
          D
        </motion.div>
        {/* K drops from top */}
        <motion.div
          className="text-8xl font-black text-[#D94E34]"
          style={{ fontFamily: "'Syne', 'Arial Black', sans-serif" }}
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 14, stiffness: 200, delay: 0.12 }}
        >
          K
        </motion.div>
      </div>
    );
  }

  // Mode D: Optical Phosphor Fade & Settle
  return (
    <motion.div
      className="text-8xl font-black text-[#D94E34]"
      style={{
        fontFamily: "'Syne', 'Arial Black', sans-serif",
        filter: "drop-shadow(0 0 24px rgba(217,78,52,0.45))",
      }}
      initial={{ opacity: 0, scale: 1.25, filter: "blur(16px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      DK
    </motion.div>
  );
}

/** Animated Gothif DK Component Supporting the 4 Motion Modes */
function GothifAnimatedDK({ mode }: { mode: AnimationMode }) {
  // Mode A: Stroke draw -> Solid fill lock
  if (mode === "stroke-fill") {
    return (
      <div className="relative flex items-center justify-center">
        <svg viewBox="0 0 160 100" className="h-32 w-auto" fill="none">
          {/* Laser stroke outline: Gothif squircle D and monolithic K */}
          <motion.path
            d="M22 15 H54 C66 15 76 25 76 40 V60 C76 75 66 85 54 85 H22 Z M40 33 V67 H52 C58 67 62 62 62 55 V45 C62 38 58 33 52 33 Z"
            stroke="#D94E34"
            strokeWidth="3.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.path
            d="M92 15 V85 H110 V57 L134 85 H154 L124 50 L152 15 H132 L110 43 V15 Z"
            stroke="#D94E34"
            strokeWidth="3.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
          />

          {/* Solid fill lock */}
          <motion.path
            d="M22 15 H54 C66 15 76 25 76 40 V60 C76 75 66 85 54 85 H22 Z M40 33 V67 H52 C58 67 62 62 62 55 V45 C62 38 58 33 52 33 Z M92 15 V85 H110 V57 L134 85 H154 L124 50 L152 15 H132 L110 43 V15 Z"
            fill="#D94E34"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: [0.97, 1.02, 1] }}
            transition={{ duration: 0.35, delay: 0.95, ease: "easeOut" }}
          />
        </svg>
      </div>
    );
  }

  // Mode B: Telemetry Beam Scan
  if (mode === "beam-scan") {
    return (
      <div className="relative flex flex-col items-center justify-center">
        <motion.div
          className="absolute inset-y-0 w-2.5 bg-gradient-to-r from-transparent via-white to-transparent blur-sm z-20"
          initial={{ left: "-10%" }}
          animate={{ left: "110%" }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
        />
        <div className="mb-2">
          <span className="font-mono text-[0.6rem] text-[#D94E34] uppercase tracking-widest">
            ARCHITECTURAL SCAN · 02 OF 07
          </span>
        </div>
        <motion.div
          className="font-sans text-8xl font-black tracking-tight text-[#D94E34]"
          style={{ fontFamily: "'Syne', 'Arial Black', sans-serif" }}
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          DK
        </motion.div>
      </div>
    );
  }

  // Mode C: Kinetic Brutalist Slide & Snap
  if (mode === "kinetic-snap") {
    return (
      <div className="relative flex items-center justify-center gap-2">
        <motion.div
          className="text-8xl font-black text-[#D94E34]"
          style={{ fontFamily: "'Syne', 'Arial Black', sans-serif" }}
          initial={{ x: -70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 16, stiffness: 220 }}
        >
          D
        </motion.div>
        <motion.div
          className="text-8xl font-black text-[#D94E34]"
          style={{ fontFamily: "'Syne', 'Arial Black', sans-serif" }}
          initial={{ x: 70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 16, stiffness: 220, delay: 0.06 }}
        >
          K
        </motion.div>
      </div>
    );
  }

  // Mode D: Optical Phosphor Fade & Settle
  return (
    <motion.div
      className="text-8xl font-black text-[#D94E34]"
      style={{
        fontFamily: "'Syne', 'Arial Black', sans-serif",
        filter: "drop-shadow(0 0 30px rgba(217,78,52,0.5))",
      }}
      initial={{ opacity: 0, scale: 0.9, filter: "blur(18px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      DK
    </motion.div>
  );
}

/** Animated Sora DK Component Supporting the 4 Motion Modes */
function SoraAnimatedDK({ mode }: { mode: AnimationMode }) {
  // Mode A: Laser Stroke-Draw -> Solid Lock
  if (mode === "stroke-fill") {
    return (
      <div className="relative flex flex-col items-center justify-center">
        {/* 8 Shift Lights rev up during drawing */}
        <div className="mb-3 flex items-center gap-1">
          {["#C9B89A", "#C9B89A", "#C9B89A", "#C9B89A", "#7393B3", "#7393B3", "#D94E34", "#D94E34"].map(
            (c, i) => (
              <motion.span
                key={i}
                className="h-1.5 w-2.5 rounded-sm"
                style={{ backgroundColor: c }}
                initial={{ opacity: 0.15 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: i * 0.08 }}
              />
            )
          )}
        </div>

        <svg viewBox="0 0 160 100" className="h-28 w-auto" fill="none">
          <motion.path
            d="M25 15 H56 C72 15 84 29 84 50 C84 71 72 85 56 85 H25 Z M42 32 V68 H54 C63 68 68 60 68 50 C68 40 63 32 54 32 Z"
            stroke="#C9B89A"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          />
          <motion.path
            d="M96 15 V85 H112 V56 L136 85 H154 L126 50 L150 15 H132 L112 44 V15 Z"
            stroke="#7393B3"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
          />

          {/* Solid aerospace lock */}
          <motion.path
            d="M25 15 H56 C72 15 84 29 84 50 C84 71 72 85 56 85 H25 Z M42 32 V68 H54 C63 68 68 60 68 50 C68 40 63 32 54 32 Z M96 15 V85 H112 V56 L136 85 H154 L126 50 L150 15 H132 L112 44 V15 Z"
            fill="#EDE4D3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.95 }}
          />
        </svg>
      </div>
    );
  }

  // Mode B: Cockpit Telemetry Scan & Rev Sweep
  if (mode === "beam-scan") {
    return (
      <div className="relative flex flex-col items-center justify-center">
        {/* Sweep Beam */}
        <motion.div
          className="absolute inset-y-0 w-3 bg-gradient-to-r from-transparent via-[#7393B3] to-transparent blur-md z-20"
          initial={{ left: "-15%" }}
          animate={{ left: "115%" }}
          transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
        />

        <div className="mb-2 flex items-center gap-1.5">
          <span className="font-mono text-[0.62rem] text-[#7393B3] tracking-widest uppercase">
            HMI · TELEMETRY LOCK
          </span>
        </div>

        <motion.div
          className="font-sans text-8xl font-bold tracking-tight text-[#EDE4D3]"
          style={{
            fontFamily: "'Sora', sans-serif",
            filter: "drop-shadow(0 0 20px rgba(115,147,179,0.3))",
          }}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          DK
        </motion.div>
      </div>
    );
  }

  // Mode C: Kinetic Brutalist Slide & Snap
  if (mode === "kinetic-snap") {
    return (
      <div className="relative flex items-center justify-center gap-2">
        <motion.div
          className="text-8xl font-bold text-[#EDE4D3]"
          style={{ fontFamily: "'Sora', sans-serif" }}
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 240 }}
        >
          D
        </motion.div>
        <motion.div
          className="text-8xl font-bold text-[#7393B3]"
          style={{ fontFamily: "'Sora', sans-serif" }}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 240, delay: 0.08 }}
        >
          K
        </motion.div>
      </div>
    );
  }

  // Mode D: Optical Phosphor Fade & Settle
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="text-8xl font-bold text-[#EDE4D3]"
        style={{
          fontFamily: "'Sora', sans-serif",
          filter: "drop-shadow(0 0 28px rgba(201,184,154,0.35))",
        }}
        initial={{ opacity: 0, scale: 0.92, filter: "blur(14px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        DK
      </motion.div>
    </div>
  );
}
