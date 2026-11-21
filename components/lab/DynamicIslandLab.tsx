"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export type IslandScenario = "case-study" | "recruiter" | "projects" | "telemetry";

export function DynamicIslandLab({ activeTheme }: { activeTheme: "dark" | "light" }) {
  const [scenario, setScenario] = useState<IslandScenario>("case-study");
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [activeChapter, setActiveChapter] = useState<number>(2);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const [revStage, setRevStage] = useState<number>(5);

  // Auto-cycling shift lights for telemetry mode
  useEffect(() => {
    if (scenario !== "telemetry") return;
    const interval = setInterval(() => {
      setRevStage((prev) => (prev >= 8 ? 1 : prev + 1));
    }, 600);
    return () => clearInterval(interval);
  }, [scenario]);

  const chapters = [
    { num: "01", title: "Executive Overview", time: "1 min" },
    { num: "02", title: "The Design Problem & Pitfalls", time: "2 min" },
    { num: "03", title: "Sora Monogram & Gothif Weight", time: "3 min" },
    { num: "04", title: "Cockpit Color Tokens & Contrast", time: "2 min" },
    { num: "05", title: "Telemetry Shift-Lights & Motion", time: "2 min" },
    { num: "06", title: "Production Deliverables & Figma", time: "2 min" },
  ];

  const projectList = [
    {
      id: "rcintel",
      name: "RCintel Design Guidelines",
      badge: "Case Study 01 (Active)",
      role: "Studio Brand & HMI System",
      ready: true,
    },
    {
      id: "ri360",
      name: "RaceIntel360 (RI360)",
      badge: "Case Study 02 (Pipeline)",
      role: "F1 Telemetry Platform & ETL",
      ready: false,
    },
    {
      id: "safal",
      name: "Safal Vidyalaya",
      badge: "Case Study 03 (Pipeline)",
      role: "School Web Redesign",
      ready: false,
    },
    {
      id: "wedding",
      name: "Bespoke Wedding RSVP",
      badge: "Case Study 04 (Client)",
      role: "End-to-End Guest System",
      ready: false,
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("kotakdevarsh0@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-12">
      {/* Title & Introduction */}
      <div className="max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#D94E34]/15 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#D94E34]">
            LAB &amp; ARCHITECTURE
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#7393B3]">
            UX Strategy · Interactive Simulation
          </span>
        </div>
        <h1 className="mt-2 font-serif text-3xl font-normal leading-tight tracking-tight sm:text-5xl">
          Dynamic Island &amp; Scalable Case Studies
        </h1>
        <p className="mt-4 text-base leading-relaxed opacity-85 sm:text-lg">
          You asked two foundational questions:{" "}
          <strong>(1) Will an Apple-style Dynamic Island look good above the navbar?</strong> and{" "}
          <strong>(2) How do we place the RCintel case study now and scale for more in the future?</strong>{" "}
          Test the interactive simulator below to see how a Dynamic Island functions on the web, then read the architectural roadmap.
        </p>
      </div>

      {/* Mode Controls Bar */}
      <div
        className={`flex flex-wrap items-center justify-between gap-3 rounded-2xl border p-3 sm:p-4 ${
          activeTheme === "dark" ? "border-[#2E3B4B] bg-[#161F28]" : "border-[#D9D0C2] bg-white shadow-sm"
        }`}
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-[#7393B3] uppercase">Switch Scenario:</span>
          {[
            { id: "case-study", label: "01 · Case Study Chapter HUD" },
            { id: "recruiter", label: "02 · Recruiter Availability & Fast Contact" },
            { id: "projects", label: "03 · Multi-Project Switcher" },
            { id: "telemetry", label: "04 · Cockpit Pit-Wall Telemetry HUD" },
          ].map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setScenario(s.id as IslandScenario);
                setIsExpanded(true);
              }}
              className={`rounded-xl px-3 py-1.5 font-mono text-xs font-medium transition-all ${
                scenario === s.id
                  ? "bg-[#D94E34] text-white shadow-sm"
                  : activeTheme === "dark"
                  ? "bg-[#1F2A36] text-[#A7B4C2] hover:bg-[#2B3A4C]"
                  : "bg-[#F3EEE5] text-[#5A6676] hover:bg-[#EAE3D7]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="rounded-lg border border-[#7393B3]/40 px-3 py-1.5 font-mono text-xs text-[#7393B3] hover:border-[#D94E34] hover:text-[#D94E34] transition-colors"
        >
          {isExpanded ? "Collapse Pill ⤡" : "Expand Island ⤢"}
        </button>
      </div>

      {/* Interactive Browser Notch Simulator */}
      <div
        className={`relative overflow-hidden rounded-3xl border transition-all ${
          activeTheme === "dark"
            ? "border-[#2E3B4B] bg-[#0B0F14] shadow-2xl"
            : "border-[#D9D0C2] bg-[#ECE5D8] shadow-xl"
        }`}
      >
        {/* Mock Browser Window Chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-black/40">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-[#E85D45]/80" />
            <div className="size-3 rounded-full bg-[#D4AF37]/80" />
            <div className="size-3 rounded-full bg-[#4E8752]/80" />
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-1 text-xs font-mono text-[#A7B4C2]">
            <span className="text-[#4E8752]">https://</span>
            <span>devarshkotak.com</span>
            <span className="opacity-40">/</span>
            <span className="text-[#EDE4D3]">
              {scenario === "case-study"
                ? "case-studies/rcintel"
                : scenario === "projects"
                ? "work"
                : scenario === "telemetry"
                ? "rcintel/telemetry"
                : "contact"}
            </span>
          </div>

          <div className="text-[10px] font-mono text-[#7393B3]">Simulated Safari / Chrome</div>
        </div>

        {/* Viewport Canvas with Dynamic Island Docked at Top */}
        <div className="relative min-h-[460px] p-6 sm:p-10 flex flex-col items-center justify-start">
          {/* THE DYNAMIC ISLAND COMPONENT */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className={`relative z-20 cursor-pointer overflow-hidden border shadow-2xl backdrop-blur-2xl transition-colors ${
              activeTheme === "dark"
                ? "border-white/15 bg-black/90 text-[#EDE4D3]"
                : "border-black/20 bg-[#161F28] text-white"
            } ${
              isExpanded
                ? "w-full max-w-xl rounded-3xl p-5 sm:p-6"
                : "rounded-full px-5 py-2.5 hover:scale-[1.02]"
            }`}
            onClick={() => {
              // Click island to toggle if clicking outside buttons
            }}
          >
            {/* COMPACT PILL STATE */}
            {!isExpanded && (
              <div
                className="flex items-center justify-between gap-4 font-mono text-xs"
                onClick={() => setIsExpanded(true)}
              >
                {scenario === "case-study" && (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#D94E34] animate-pulse" />
                      <span className="font-semibold text-white">RCintel Case Study</span>
                    </div>
                    <span className="text-[#7393B3]">
                      Ch. {chapters[activeChapter].num} · {chapters[activeChapter].title}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/20">
                        <div
                          className="h-full bg-[#D94E34]"
                          style={{ width: `${((activeChapter + 1) / chapters.length) * 100}%` }}
                        />
                      </div>
                      <span className="text-[10px] text-white/70">
                        {Math.round(((activeChapter + 1) / chapters.length) * 100)}%
                      </span>
                    </div>
                  </>
                )}

                {scenario === "recruiter" && (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="size-2.5 rounded-full bg-[#4E8752] animate-ping" />
                      <span className="size-2 rounded-full bg-[#4E8752]" />
                      <span className="font-semibold text-white">Available for Q2 Roles</span>
                    </div>
                    <span className="text-[#7393B3]">01:30 AM IST · India</span>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-[#EDE4D3]">
                      Fast Contact ▾
                    </span>
                  </>
                )}

                {scenario === "projects" && (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#D94E34]">Work Navigator</span>
                      <span className="text-[#7393B3]">•</span>
                      <span>{projectList[activeProjectIdx].name}</span>
                    </div>
                    <span className="rounded bg-[#D94E34]/20 px-2 py-0.5 text-[10px] text-[#D94E34]">
                      {projectList[activeProjectIdx].badge}
                    </span>
                  </>
                )}

                {scenario === "telemetry" && (
                  <>
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className={`size-2 rounded-full transition-colors ${
                            i < revStage
                              ? i < 4
                                ? "bg-[#7393B3]"
                                : i < 6
                                ? "bg-[#D4AF37]"
                                : "bg-[#D94E34]"
                              : "bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-white">12,400 RPM · STRAT 2</span>
                    <span className="text-[#4E8752] font-mono text-[11px]">-0.142s Delta</span>
                  </>
                )}
              </div>
            )}

            {/* EXPANDED ISLAND STATE */}
            {isExpanded && (
              <div className="space-y-4">
                {/* Header row inside island */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-[#D94E34]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-[#7393B3]">
                      {scenario === "case-study"
                        ? "Case Study Reading Companion"
                        : scenario === "recruiter"
                        ? "Recruiter & Founder Command Deck"
                        : scenario === "projects"
                        ? "Case Study Directory & Pipeline"
                        : "Pit-Wall Telemetry Telemetry HUD"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExpanded(false);
                    }}
                    className="rounded-full bg-white/10 px-2 py-0.5 font-mono text-[10px] text-white/70 hover:bg-white/20 transition-colors"
                  >
                    Minimize ⤡
                  </button>
                </div>

                {/* SCENARIO 1: CASE STUDY CHAPTER HUD */}
                {scenario === "case-study" && (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-[#D94E34]/20 px-2 py-0.5 font-mono text-[10px] font-bold text-[#D94E34]">
                            CASE STUDY 01
                          </span>
                          <span className="font-mono text-xs text-[#A7B4C2]">8 min read</span>
                        </div>
                        <h3 className="mt-1 font-serif text-xl font-normal text-white sm:text-2xl">
                          RCintel Brand System &amp; HMI Guidelines
                        </h3>
                        <p className="mt-1 text-xs text-[#A7B4C2]">
                          Currently reading:{" "}
                          <strong className="text-white">
                            Chapter {chapters[activeChapter].num}: {chapters[activeChapter].title}
                          </strong>
                        </p>
                      </div>

                      {/* Progress Circle / Badge */}
                      <div className="flex flex-col items-end">
                        <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-right font-mono">
                          <div className="text-lg font-bold text-[#D94E34]">
                            {Math.round(((activeChapter + 1) / chapters.length) * 100)}%
                          </div>
                          <div className="text-[9px] uppercase tracking-wider text-[#7393B3]">
                            Progress
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Chapter Picker Track */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between font-mono text-[10px] text-[#7393B3]">
                        <span>Click any chapter to jump:</span>
                        <span>Estimated left: {6 - activeChapter} mins</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-6">
                        {chapters.map((ch, idx) => (
                          <button
                            key={ch.num}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveChapter(idx);
                            }}
                            className={`rounded-lg border p-1.5 text-left font-mono transition-all ${
                              activeChapter === idx
                                ? "border-[#D94E34] bg-[#D94E34]/20 text-white"
                                : idx < activeChapter
                                ? "border-white/20 bg-white/5 text-[#A7B4C2]"
                                : "border-white/5 bg-black/40 text-white/40 hover:border-white/20"
                            }`}
                          >
                            <div className="text-[10px] font-bold">CH {ch.num}</div>
                            <div className="truncate text-[9px] opacity-75">{ch.title}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quick Case Study Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs">
                      <div className="flex items-center gap-2 text-[11px] text-[#A7B4C2]">
                        <span className="size-1.5 rounded-full bg-[#4E8752]" />
                        <span>Figma Specimen Synced</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className="rounded-lg bg-[#D94E34] px-3 py-1.5 font-semibold text-white shadow hover:bg-[#c2422a] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Live Figma Tokens ↗
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* SCENARIO 2: RECRUITER HUD */}
                {scenario === "recruiter" && (
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-[#4E8752] animate-pulse" />
                          <span className="font-mono text-xs font-bold uppercase text-[#4E8752]">
                            Status: Available for Roles
                          </span>
                        </div>
                        <h3 className="mt-1 font-serif text-xl font-normal text-white sm:text-2xl">
                          Let&rsquo;s Build High-Impact Software
                        </h3>
                        <p className="mt-1 text-xs text-[#A7B4C2]">
                          Product Engineer &amp; Designer · UI/UX · Full-Stack Systems · Motorsport HMI
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-right font-mono text-xs">
                        <div className="text-white font-bold">India (IST)</div>
                        <div className="text-[10px] text-[#7393B3]">UTC +5:30 · Active</div>
                      </div>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-3 font-mono text-xs">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyEmail();
                        }}
                        className={`rounded-xl border p-2.5 text-center font-medium transition-all ${
                          copiedEmail
                            ? "border-[#4E8752] bg-[#4E8752]/20 text-[#4E8752]"
                            : "border-white/10 bg-white/5 text-white hover:border-[#D94E34] hover:bg-[#D94E34]/10"
                        }`}
                      >
                        {copiedEmail ? "✓ Email Copied!" : "Copy Email ✉"}
                        <div className="text-[9px] text-[#7393B3] truncate">kotakdevarsh0@gmail.com</div>
                      </button>

                      <a
                        href="https://www.linkedin.com/in/devarsh-kotak"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center font-medium text-white hover:border-[#7393B3] hover:bg-[#7393B3]/10 transition-colors"
                      >
                        LinkedIn Profile ↗
                        <div className="text-[9px] text-[#7393B3]">View Endorsements</div>
                      </a>

                      <a
                        href="https://github.com/Devarsh-44"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-center font-medium text-white hover:border-white/30 hover:bg-white/10 transition-colors"
                      >
                        GitHub Repos ↗
                        <div className="text-[9px] text-[#7393B3]">Inspect Production Code</div>
                      </a>
                    </div>
                  </div>
                )}

                {/* SCENARIO 3: MULTI-PROJECT DISPATCHER (SCALABLE ARCHITECTURE) */}
                {scenario === "projects" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs text-[#D94E34]">SCALABLE DIRECTORY</div>
                        <h3 className="font-serif text-xl font-normal text-white">
                          Case Studies &amp; Client Deployments
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-[#7393B3]">4 Projects Loaded</span>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2 font-mono text-xs">
                      {projectList.map((p, idx) => (
                        <div
                          key={p.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveProjectIdx(idx);
                          }}
                          className={`cursor-pointer rounded-xl border p-3 transition-all ${
                            activeProjectIdx === idx
                              ? "border-[#D94E34] bg-[#D94E34]/15"
                              : "border-white/10 bg-white/5 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`rounded px-1.5 py-0.5 text-[9px] font-bold ${
                                p.ready
                                  ? "bg-[#D94E34] text-white"
                                  : "bg-white/10 text-[#7393B3]"
                              }`}
                            >
                              {p.badge}
                            </span>
                          </div>
                          <div className="mt-1 font-semibold text-white">{p.name}</div>
                          <div className="text-[10px] text-[#A7B4C2]">{p.role}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-dashed border-white/20 p-2.5 text-center font-mono text-xs text-[#7393B3]">
                      + Automatic Slot for Future Case Studies 05, 06, 07 (Driven by <code className="text-[#D94E34]">content.ts</code>)
                    </div>
                  </div>
                )}

                {/* SCENARIO 4: MOTORSPORT PIT-WALL TELEMETRY */}
                {scenario === "telemetry" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs text-[#D94E34]">RCINTEL HMI TELEMETRY</div>
                        <h3 className="font-serif text-xl font-normal text-white">
                          Pit-Wall Shift-Light Cluster
                        </h3>
                      </div>
                      <div className="rounded bg-[#4E8752]/20 px-2 py-0.5 font-mono text-xs text-[#4E8752]">
                        LIVE TELEMETRY
                      </div>
                    </div>

                    {/* Animated 8-Stage Rev Shift Bar */}
                    <div className="space-y-2 rounded-2xl border border-white/10 bg-black/60 p-4">
                      <div className="flex justify-between font-mono text-xs text-[#A7B4C2]">
                        <span>ENGINE RPM: {(10000 + revStage * 550).toLocaleString()}</span>
                        <span className="text-[#D94E34]">REV LIMIT: 14,500</span>
                      </div>

                      <div className="grid grid-cols-8 gap-2">
                        {Array.from({ length: 8 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-4 rounded-md transition-all duration-150 ${
                              i < revStage
                                ? i < 4
                                  ? "bg-[#7393B3]"
                                  : i < 6
                                  ? "bg-[#D4AF37]"
                                  : "bg-[#D94E34]"
                                : "bg-white/10"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex justify-between text-[10px] font-mono text-[#7393B3]">
                        <span>STAGE 1: SLATE</span>
                        <span>STAGE 2: CHAMPAGNE</span>
                        <span className="text-[#D94E34]">STAGE 3: RED SHIFT LOCK</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>

          {/* Simulated Page Content Underneath */}
          <div className="mt-8 w-full max-w-2xl opacity-30 select-none pointer-events-none space-y-4">
            <div className="h-6 w-1/3 rounded bg-white/20" />
            <div className="h-12 w-3/4 rounded bg-white/15" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-5/6 rounded bg-white/10" />
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="h-28 rounded-xl bg-white/10" />
              <div className="h-28 rounded-xl bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* STRATEGIC ANALYSIS: "ABOVE THE NAVBAR" VS "CONTEXTUAL FLOATING ISLAND" */}
      <div
        className={`rounded-2xl border p-6 sm:p-8 ${
          activeTheme === "dark" ? "border-[#2E3B4B] bg-[#161F28]" : "border-[#D9D0C2] bg-white shadow-sm"
        }`}
      >
        <span className="font-mono text-xs uppercase tracking-wider text-[#D94E34]">
          UX ARCHITECTURE DECISION
        </span>
        <h2 className="mt-2 font-serif text-2xl font-medium sm:text-3xl">
          Should You Put an Apple-Style Dynamic Island &ldquo;Above the Navbar&rdquo;?
        </h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Card A: The Trap */}
          <div className="rounded-xl border border-[#D94E34]/30 bg-[#D94E34]/5 p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#D94E34]">
              <span>✕ WHY &ldquo;ABOVE THE NAVBAR&rdquo; IS AN ANTI-PATTERN:</span>
            </div>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed opacity-90">
              <li>
                <strong>1. Double-Decker Header Syndrome:</strong> If you put a static pill above the navbar,
                visitors see <em>two separate horizontal bars stacked vertically</em> before the website even
                starts. This eats 100px+ of vertical screen space on laptops and pushes your hero statement down.
              </li>
              <li>
                <strong>2. The Hardware Illusion:</strong> On the iPhone, the Dynamic Island exists to camouflage
                a <em>physical cutout in the glass</em> (the front camera &amp; FaceID sensor). On a web browser,
                there is no camera hole. A static floating bubble sitting right above the navbar feels like an
                arbitrary gimmick.
              </li>
              <li>
                <strong>3. Visual Competition:</strong> It competes with your navbar for attention. The visitor
                wonders: <em>&ldquo;Should I look at the pill or the navbar?&rdquo;</em>
              </li>
            </ul>
          </div>

          {/* Card B: The Pro Execution */}
          <div className="rounded-xl border border-[#4E8752]/40 bg-[#4E8752]/5 p-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#4E8752]">
              <span>✓ HOW TO EXECUTE IT LIKE A WORLD-CLASS PRODUCT DESIGNER:</span>
            </div>
            <ul className="mt-3 space-y-3 text-sm leading-relaxed opacity-90">
              <li>
                <strong>Pattern 1: The Scroll-Docked Contextual HUD (Recommended for Case Studies):</strong>{" "}
                At the very top of the page, the hero stays clean and spacious. When the visitor scrolls down
                into a case study (e.g. <code>/case-studies/rcintel</code>), an Island smoothly descends from the
                top center, displaying reading progress, current chapter, and quick jump links.
              </li>
              <li>
                <strong>Pattern 2: The Island IS the Navbar:</strong> Instead of having both a navbar and an island,
                merge them! The navbar itself floats as a sleek, rounded pill that expands when interacted with.
              </li>
              <li>
                <strong>Pattern 3: Recruiter Fast-Action Pill:</strong> Docks to the top right or bottom center,
                showing your live Indian Standard Time status and one-click email copy.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* HOW TO ARCHITECT SCALABLE CASE STUDIES */}
      <div
        className={`rounded-2xl border p-6 sm:p-8 ${
          activeTheme === "dark" ? "border-[#2E3B4B] bg-[#161F28]" : "border-[#D9D0C2] bg-white shadow-sm"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="rounded bg-[#D94E34] px-2.5 py-0.5 font-mono text-xs font-bold text-white uppercase tracking-wider">
            SCALABILITY ROADMAP
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#7393B3]">
            For RCintel + All Future Projects
          </span>
        </div>

        <h2 className="mt-3 font-serif text-2xl font-medium sm:text-3xl">
          How to Architect Case Studies for Future Scale
        </h2>
        <p className="mt-2 text-sm leading-relaxed opacity-85 sm:text-base">
          Because you have <strong>RCintel</strong> almost ready and will be building more case studies over time,
          the portfolio must follow a strict, scalable system where adding a new case study takes 5 minutes
          without rewriting layout code.
        </p>

        {/* 4-Step Architecture Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/20 p-5 space-y-2">
            <span className="font-mono text-xs font-bold text-[#D94E34]">STEP 1: DATA-FIRST SCHEMA</span>
            <h4 className="font-serif text-lg font-medium text-white">Centralize in content.ts</h4>
            <p className="text-xs leading-relaxed opacity-80">
              Define a typed <code>CaseStudy</code> object in <code>content.ts</code>. Each case study has:
              slug, title, client, readingTime, deliverables, chapters, metrics, and highlights.
            </p>
            <div className="rounded-lg bg-black/60 p-3 font-mono text-[11px] text-[#A7B4C2] overflow-x-auto">
              <code>{`export type CaseStudy = {
  slug: "rcintel" | "ri360" | ...;
  title: string;
  client: string;
  published: boolean;
  readingTime: string;
  chapters: { title: string; id: string }[];
};`}</code>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-5 space-y-2">
            <span className="font-mono text-xs font-bold text-[#D94E34]">STEP 2: DYNAMIC ROUTE TEMPLATE</span>
            <h4 className="font-serif text-lg font-medium text-white">app/case-studies/[slug]/page.tsx</h4>
            <p className="text-xs leading-relaxed opacity-80">
              Create a single, reusable Next.js dynamic page template. When you publish a new case study,
              it automatically renders with the Dynamic Island reading HUD, typography, and interactive sandboxes.
            </p>
            <div className="rounded-lg bg-black/60 p-3 font-mono text-[11px] text-[#A7B4C2]">
              <div>app/</div>
              <div className="pl-4 text-[#D94E34]">├── case-studies/</div>
              <div className="pl-8 text-white">├── [slug]/page.tsx  &lt;-- Shared Layout</div>
              <div className="pl-8 text-[#7393B3]">└── page.tsx         &lt;-- Case Studies Index</div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-5 space-y-2">
            <span className="font-mono text-xs font-bold text-[#D94E34]">STEP 3: WORK SECTION BADGING</span>
            <h4 className="font-serif text-lg font-medium text-white">Direct Case Study CTA on Cards</h4>
            <p className="text-xs leading-relaxed opacity-80">
              On the homepage Work grid, projects with an active case study display a prominent{" "}
              <strong className="text-[#D94E34]">&ldquo;Read Case Study (8m read) →&rdquo;</strong> badge,
              while other projects show &ldquo;Live Site ↗&rdquo; or &ldquo;Preview&rdquo;.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-5 space-y-2">
            <span className="font-mono text-xs font-bold text-[#D94E34]">STEP 4: RCINTEL STUDIO SYNERGY</span>
            <h4 className="font-serif text-lg font-medium text-white">Cross-Link from /rcintel</h4>
            <p className="text-xs leading-relaxed opacity-80">
              On the <code>/rcintel</code> studio page, feature the RCintel Brand Case Study as the hero proof-of-work.
              Recruiters and clients can jump seamlessly between your studio and personal portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
