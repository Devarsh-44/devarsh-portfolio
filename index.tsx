import React, { useState, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Terminal,
  Cpu,
  Database,
  ExternalLink,
  MessageSquare,
  X,
  Send,
  ChevronRight,
  ShieldCheck,
  Zap,
  Phone,
  Download,
  ArrowUpRight,
  Activity,
  Maximize2,
  Server,
  Layers,
  Search,
  Bot,
} from "lucide-react";

// --- Types & Constants ---

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gradio-app": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { src: string },
        HTMLElement
      >;
    }
  }
}

interface Project {
  title: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[];
  impact: string;
  github: string;
  type: "F1" | "Core";
}

const PROJECTS: Project[] = [
  {
    title: "Raceintel360",
    description:
      "High-performance race intelligence platform built with a FastAPI ecosystem.",
    problem:
      "Aggregating and delivering fragmented F1 telemetry across multiple endpoints with sub-optimal response times.",
    solution:
      "Engineered 15+ RESTful API endpoints using FastAPI and PostgreSQL, optimizing query execution for sub-100ms delivery.",
    stack: ["FastAPI", "PostgreSQL", "Python", "SQL", "RESTful APIs"],
    impact:
      "Architected ETL pipeline processing 10,000+ F1 race records for real-time strategy analysis.",
    github: "https://github.com/Devarsh-44/raceintel360",
    type: "F1",
  },
  {
    title: "AI Chatbot Assistant",
    description:
      "Intelligent NLP-driven conversational agent for automated query resolution.",
    problem:
      "Fragmented user support systems lacking contextual awareness and accurate intent recognition.",
    solution:
      "Integrated spaCy for intent recognition and entity extraction within a modular Python backend architecture.",
    stack: ["Python", "NLP", "spaCy", "NLTK", "Transformers"],
    impact:
      "Developed seamless conversation flow logic simulating high-tier technical support interactions.",
    github: "https://github.com/Devarsh-44/chatbot",
    type: "Core",
  },
  {
    title: "Race Performance Dashboard",
    description:
      "Deep-dive visualization engine for driver telemetry and pit-stop analytics.",
    problem:
      "Complex race data visualization requiring dynamic filtering of lap-by-lap performance deltas.",
    solution:
      "Built a Streamlit dashboard using FastF1 and Matplotlib to visualize sector performance and telemetry insights.",
    stack: ["Streamlit", "FastF1", "Pandas", "Matplotlib", "Python"],
    impact:
      "Enabled precision analysis of driver deltas and pit-stop efficiency via dynamic charting.",
    github: "https://github.com/Devarsh-44/FastF1",
    type: "F1",
  },
];

const SKILLS = {
  "IT & Systems": [
    "Linux/Unix Admin",
    "System Troubleshooting",
    "System Architecture",
    "Security Fundamentals",
    "Docker",
    "AWS",
  ],
  "Backend & Data": [
    "Python",
    "FastAPI",
    "SQL (PostgreSQL, MySQL)",
    "ETL Pipelines",
    "RESTful API Design",
    "Java",
    "C++",
  ],
  "Tools & AI": [
    "TensorFlow",
    "PyTorch",
    "Pandas/NumPy",
    "Git/GitHub",
    "Streamlit",
    "spaCy/NLTK",
  ],
};

const RESUME_ID = "10Au4IDGor1-QGp_n6v8KASfQIacQOJdR";
const RESUME_LINK = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`;
const LINKEDIN_URL = "https://www.linkedin.com/in/devarsh-kotak/";
const GITHUB_URL = "https://github.com/Devarsh-44";
const PHONE_NUMBER = "+1 (437) 477-8704";
const EMAIL = "kotakdevarsh0@gmail.com";
const EXTERNAL_CHATBOT_URL = "https://devarsh44-career-conversation.hf.space";

const scrollToId = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const navHeight = 64;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// --- Components ---

const LoadingScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [activeLights, setActiveLights] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timeouts = [500, 1000, 1500, 2000, 2500].map((t, i) =>
      setTimeout(() => setActiveLights(i + 1), t),
    );

    const doneTimeout = setTimeout(() => {
      setActiveLights(0);
      setIsDone(true);
    }, 3200);

    const finishTimeout = setTimeout(() => {
      onFinish();
    }, 3800);

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
      clearTimeout(doneTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-all duration-700 ${isDone ? "opacity-0 scale-105 pointer-events-none" : "opacity-100"}`}
    >
      <div className="max-w-4xl w-full px-6 flex flex-col items-center">
        <div className="mb-6 text-[10px] font-mono text-white/20 tracking-[0.5em] uppercase">
          Grid_Initialization_Sequence
        </div>

        <div className="flex gap-2 md:gap-6 p-6 md:p-10 bg-zinc-900/30 border border-white/5 rounded-sm backdrop-blur-xl shadow-2xl">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="flex flex-col gap-2">
              <div
                className={`w-8 h-8 md:w-16 md:h-16 rounded-full border-2 border-white/5 transition-all duration-100 ${activeLights >= num ? "bg-racing-red shadow-[0_0_50px_rgba(225,6,0,1)]" : "bg-black/60"}`}
              />
              <div
                className={`w-8 h-8 md:w-16 md:h-16 rounded-full border-2 border-white/5 transition-all duration-100 ${activeLights >= num ? "bg-racing-red shadow-[0_0_50px_rgba(225,6,0,1)]" : "bg-black/60"}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 w-64">
          <div className="flex justify-between w-full font-mono text-[9px] uppercase tracking-widest text-white/40">
            <span
              className={
                activeLights >= 1 ? "text-racing-red transition-colors" : ""
              }
            >
              Power
            </span>
            <span
              className={
                activeLights >= 3 ? "text-racing-red transition-colors" : ""
              }
            >
              Sync
            </span>
            <span
              className={
                activeLights >= 5 ? "text-racing-red transition-colors" : ""
              }
            >
              Ready
            </span>
          </div>
          <div className="h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
            <div
              className="h-full bg-racing-red transition-all duration-500 ease-out shadow-[0_0_10px_#E10600]"
              style={{ width: `${activeLights * 20}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TelemetryDashboard = () => {
  const [log, setLog] = useState<string[]>([
    "[SYS]: BOOT_COMPLETE",
    "[NET]: LINK_ESTABLISHED",
    "[DB]: CLUSTER_READY",
  ]);
  const [heartbeat, setHeartbeat] = useState(0);

  useEffect(() => {
    const logInterval = setInterval(() => {
      const logs = [
        `[NET]: FETCH_RT_TELEMETRY_${Math.random().toString(16).slice(2, 6).toUpperCase()}`,
        `[ML]: INFERENCE_LATENCY_${(Math.random() * 50 + 10).toFixed(2)}MS`,
        `[SYS]: CACHE_HIT_RATIO_98.2%`,
        `[SEC]: SSL_HANDSHAKE_VERIFIED`,
        `[DB]: QUERY_OPTIMIZED_O(LOG N)`,
      ];
      setLog((prev) => [
        logs[Math.floor(Math.random() * logs.length)],
        ...prev.slice(0, 5),
      ]);
    }, 2000);

    const heartInterval = setInterval(() => {
      setHeartbeat((prev) => (prev + 1) % 100);
    }, 100);

    return () => {
      clearInterval(logInterval);
      clearInterval(heartInterval);
    };
  }, []);

  return (
    <div className="aspect-square bg-[#0D0D11] border border-white/10 p-6 flex flex-col overflow-hidden backdrop-blur-sm shadow-2xl relative group transition-all duration-700 hover:border-racing-red/40">
      {/* Visual Corner Brackets */}
      <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-white/10 group-hover:border-racing-red/50 transition-all"></div>
      <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-white/10 group-hover:border-racing-red/50 transition-all"></div>
      <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-white/10 group-hover:border-racing-red/50 transition-all"></div>
      <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-white/10 group-hover:border-racing-red/50 transition-all"></div>

      {/* Header Readout */}
      <div className="flex justify-between items-start mb-4">
        <div className="font-mono text-[8px] text-white/40 tracking-[0.2em]">
          DIAG_LOG_v2.5 // SEC_01
          <br />
          U_TIME: 99.999%
        </div>
        <div className="flex items-center gap-2 px-2 py-1 bg-racing-red/10 border border-racing-red/30">
          <Activity size={10} className="text-racing-red animate-pulse" />
          <span className="text-[8px] font-mono text-racing-red uppercase font-bold tracking-widest">
            LIVE_FEED
          </span>
        </div>
      </div>

      {/* Main Schematic Area */}
      <div className="flex-1 flex flex-col gap-4 relative">
        {/* Architecture Flow Visualization */}
        <div className="h-2/5 border border-white/5 bg-black/40 relative overflow-hidden p-4 flex items-center justify-around">
          <div className="flex flex-col items-center gap-1 group/node">
            <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover/node:border-racing-red transition-colors">
              <Server
                size={14}
                className="text-white/40 group-hover/node:text-racing-red"
              />
            </div>
            <span className="text-[6px] font-mono text-white/20">NGINX_LB</span>
          </div>
          <div className="h-px w-8 bg-white/10 relative overflow-hidden">
            <div className="absolute h-full w-2 bg-racing-red animate-[scanline_2s_linear_infinite]"></div>
          </div>
          <div className="flex flex-col items-center gap-1 group/node">
            <div className="w-10 h-10 rounded-sm bg-racing-red/5 border border-racing-red/20 flex items-center justify-center group-hover/node:bg-racing-red/20 transition-all">
              <Cpu size={16} className="text-racing-red" />
            </div>
            <span className="text-[6px] font-mono text-white/20 uppercase">
              Core_API
            </span>
          </div>
          <div className="h-px w-8 bg-white/10 relative overflow-hidden">
            <div className="absolute h-full w-2 bg-racing-red animate-[scanline_2s_linear_infinite] delay-1000"></div>
          </div>
          <div className="flex flex-col items-center gap-1 group/node">
            <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center group-hover/node:border-racing-red transition-colors">
              <Database
                size={14}
                className="text-white/40 group-hover/node:text-racing-red"
              />
            </div>
            <span className="text-[6px] font-mono text-white/20">POSTGRES</span>
          </div>
        </div>

        {/* Live Oscilloscope */}
        <div className="h-1/5 border border-white/5 bg-black/60 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 60">
            <path
              d={`M 0 30 Q 50 ${30 + Math.sin(heartbeat / 5) * 20} 100 30 T 200 30 T 300 30 T 400 30`}
              fill="none"
              stroke="#E10600"
              strokeWidth="1"
              className="opacity-60"
            />
            <path
              d={`M 0 30 Q 50 ${30 - Math.sin(heartbeat / 10) * 15} 100 30 T 200 30 T 300 30 T 400 30`}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="0.5"
              className="opacity-10"
            />
          </svg>
          <div className="absolute top-1 left-2 text-[6px] font-mono text-white/30">
            IO_THROUGHPUT_HZ
          </div>
        </div>

        {}
        <div className="h-2/5 border border-white/5 bg-black/80 font-mono text-[7px] p-2 overflow-hidden flex flex-col-reverse gap-1">
          {log.map((line, i) => (
            <div
              key={i}
              className={`flex gap-2 transition-all duration-500 ${i === 0 ? "text-white" : "text-white/20"}`}
            >
              <span className="text-racing-red shrink-0">{`>`}</span>
              <span className="truncate">{line}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Readouts */}
      <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-end">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-0.5 h-2 bg-white/10"
              style={{ height: `${Math.random() * 12 + 2}px` }}
            ></div>
          ))}
        </div>
        <div className="text-[8px] font-mono text-racing-red text-right tracking-[0.2em] font-bold">
          EST_LOAD: 0.14
          <br />
          CRC_CHECK: OK
        </div>
      </div>

      {/* Decorative Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#FFF 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 glass-panel border-b border-white/5 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div
        className="flex items-center gap-3 cursor-pointer group"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="w-8 h-8 bg-racing-red flex items-center justify-center font-bold text-sm text-white group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(225,6,0,0.3)]">
          DK
        </div>
        <span className="font-mono tracking-tighter uppercase text-sm font-semibold hidden sm:block group-hover:text-racing-red transition-colors">
          DEVARSH_KOTAK // SYSTEMS_ENG
        </span>
      </div>
      <div className="flex gap-4 md:gap-8 text-[10px] font-mono uppercase tracking-widest text-white/60 items-center">
        <button
          onClick={() => scrollToId("about")}
          className="hover:text-racing-red transition-colors cursor-pointer outline-none uppercase"
        >
          ABOUT
        </button>
        <button
          onClick={() => scrollToId("projects")}
          className="hover:text-racing-red transition-colors cursor-pointer outline-none uppercase"
        >
          PROJECTS
        </button>
        <button
          onClick={() => scrollToId("skills")}
          className="hover:text-racing-red transition-colors cursor-pointer outline-none uppercase"
        >
          STACK
        </button>
        <button
          onClick={() => scrollToId("contact")}
          className="hover:text-racing-red transition-colors cursor-pointer outline-none uppercase"
        >
          CONTACT
        </button>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white transition-colors hover:scale-110 transform"
        >
          <Github size={18} />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/40 hover:text-white transition-colors hover:scale-110 transform"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </nav>
);

const Hero = ({ onOpenChat }: { onOpenChat: () => void }) => (
  <section className="relative pt-48 pb-24 px-6 overflow-hidden">
    <div className="scanline"></div>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-16 items-end">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-racing-red/10 border border-racing-red/20 text-racing-red text-[10px] font-mono font-bold tracking-[0.2em] uppercase animate-status-blink">
            <Zap size={12} fill="currentColor" className="animate-pulse" />{" "}
            System Online - Engineering Control Active
          </div>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.85] opacity-0 animate-reveal-text">
            DEVARSH <br />{" "}
            <span className="text-racing-red drop-shadow-[0_0_20px_rgba(225,6,0,0.2)]">
              KOTAK
            </span>
          </h1>
          <p className="max-w-xl text-lg text-white/60 font-medium leading-relaxed opacity-0 animate-fade-in-up animate-delay-300">
            Computer Science professional specializing in backend architecture
            and data engineering, with a strong focus on building reliable,
            scalable, and maintainable systems.
          </p>
          <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-in-up animate-delay-500">
            <button
              onClick={() => scrollToId("projects")}
              className="bg-white text-black px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-racing-red hover:text-white transition-all flex items-center gap-2 group shadow-xl"
            >
              View Projects{" "}
              <ChevronRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 group backdrop-blur-sm"
            >
              Download CV{" "}
              <Download
                size={14}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </a>
            <button
              onClick={onOpenChat}
              className="border border-white/20 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2 group backdrop-blur-sm"
            >
              Ask Assistant{" "}
              <MessageSquare
                size={14}
                className="group-hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 glass-panel p-8 border-white/10 font-mono text-[11px] space-y-6 opacity-0 animate-fade-in-up animate-delay-500 relative">
          <div className="absolute top-0 right-0 p-2 text-[8px] text-racing-red opacity-50 animate-pulse">
            RT_TELEMETRY_LINKED
          </div>
          <div className="flex justify-between border-b border-white/5 pb-3 group">
            <span className="text-white/40">LOCATION:</span>
            <span className="group-hover:text-racing-red transition-colors">
              ONTARIO, CAN
            </span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-3 group">
            <span className="text-white/40">ENGINE:</span>
            <span className="group-hover:text-racing-red transition-colors">
              BSc. COMP SCI [2025]
            </span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-3 group">
            <span className="text-white/40">FOCUS:</span>
            <span className="text-racing-red font-bold">
              BACKEND // SYSTEMS
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[9px] text-white/40 uppercase tracking-widest">
              <span>System_Stability</span>
              <span>100%</span>
            </div>
            <div className="w-full h-1 bg-white/5 overflow-hidden rounded-full">
              <div className="h-full bg-racing-red w-[100%] origin-left animate-reveal-text animate-delay-500 shadow-[0_0_8px_#E10600]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-black selection:bg-racing-red selection:text-white">
      <Navbar />
      <main>
        <Hero onOpenChat={() => setIsChatOpen(true)} />

        <section
          id="about"
          className="py-32 px-6 border-t border-white/5 relative"
        >
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
            <div className="absolute top-20 right-[-10%] w-[40%] h-[40%] border border-white rounded-full"></div>
            <div className="absolute bottom-20 left-[-10%] w-[40%] h-[40%] border border-racing-red rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <SectionHeading
                number="01"
                title="Engineering Core"
                subtitle="Reliability as a Priority"
              />
              <div className="space-y-6 text-white/60 text-lg leading-relaxed font-medium">
                <p>
                  I am a{" "}
                  <span className="text-white font-bold">
                    Computer Science professional
                  </span>{" "}
                  based in Brampton, focused on backend architecture and system
                  reliability. I build scalable, high-performance services with
                  an emphasis on correctness, maintainability, and real-world
                  production use.
                </p>
                <p>
                  My experience spans backend development and systems support,
                  allowing me to design solutions that balance user-facing
                  reliability with robust data pipelines. My core stack includes{" "}
                  <span className="text-white font-bold">
                    FastAPI, Python, and SQL
                  </span>
                  , applied to practical problems such as telemetry analysis and
                  AI-driven automation.
                </p>
              </div>

              <div className="flex flex-wrap gap-10 pt-10 border-t border-white/5">
                {[
                  { label: "DEGREE", val: "BSc. COMP SCI" },
                  { label: "UPTIME", val: "99.9%" },
                  { label: "STATUS", val: "CAN_HIRE" },
                ].map((stat) => (
                  <div key={stat.label} className="group cursor-default">
                    <div className="text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest">
                      {stat.label}
                    </div>
                    <div className="text-2xl font-bold font-mono text-racing-red group-hover:scale-110 transition-transform origin-left">
                      {stat.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              {/* Telemetry Dashboard replaces the static Systems Mindset box */}
              <TelemetryDashboard />
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="py-32 px-6 bg-racing-charcoal/20 border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              number="02"
              title="Deployment Logs"
              subtitle="Selected Technical Deliveries"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              number="03"
              title="Technical Arsenal"
              subtitle="Systems, Backend & Data Engineering"
            />
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(SKILLS).map(([cat, items], idx) => (
                <div
                  key={cat}
                  className={`glass-panel p-10 border-white/5 border-t-4 border-t-racing-red/20 hover:border-t-racing-red transition-all duration-500 animate-fade-in-up`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <h3 className="text-sm font-mono font-bold uppercase tracking-[0.3em] text-racing-red mb-10 pb-4 border-b border-white/5">
                    {cat}
                  </h3>
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-4 text-white/70 text-sm font-bold group cursor-default"
                      >
                        <div className="w-1.5 h-1.5 bg-racing-red group-hover:scale-150 transition-transform shadow-[0_0_5px_#E10600]"></div>
                        <span className="group-hover:text-white transition-colors uppercase tracking-tight">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="glass-panel p-12 md:p-20 relative overflow-hidden shadow-3xl border-white/10">
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-racing-red/10 rounded-full blur-[150px]"></div>
              <div className="max-w-3xl relative z-10">
                <SectionHeading
                  number="04"
                  title="System Connection"
                  subtitle="Open for Professional Inquiry"
                />
                <p className="text-2xl md:text-3xl text-white/80 mb-16 font-bold tracking-tight leading-tight">
                  Seeking opportunities in Application Support, Backend
                  Engineering, or IT Infrastructure within Canada.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-8 bg-white/5 border border-white/5 hover:border-racing-red transition-all group backdrop-blur-sm shadow-xl"
                  >
                    <div className="p-4 bg-racing-red text-white transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest font-bold">
                        Email Sync
                      </div>
                      <div className="text-lg font-bold group-hover:text-racing-red transition-colors truncate">
                        {EMAIL}
                      </div>
                    </div>
                  </a>
                  <a
                    href={`tel:${PHONE_NUMBER.replace(/\D/g, "")}`}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-8 bg-white/5 border border-white/5 hover:border-racing-red transition-all group backdrop-blur-sm shadow-xl"
                  >
                    <div className="p-4 bg-racing-red text-white transition-transform group-hover:-rotate-12 group-hover:scale-110 shadow-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-white/40 uppercase mb-2 tracking-widest font-bold">
                        Direct Comm
                      </div>
                      <div className="text-lg font-bold group-hover:text-racing-red transition-colors">
                        {PHONE_NUMBER}
                      </div>
                    </div>
                  </a>
                </div>

                <div className="flex flex-wrap gap-12 items-center">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-all flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] font-bold border-b border-transparent hover:border-white pb-1"
                  >
                    <Linkedin size={20} /> LinkedIn
                  </a>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-all flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] font-bold border-b border-transparent hover:border-white pb-1"
                  >
                    <Github size={20} /> GitHub
                  </a>
                  <a
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-all flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] font-bold border-b border-transparent hover:border-white pb-1"
                  >
                    <FileText size={20} /> PDF Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <div className="w-8 h-8 bg-racing-red flex items-center justify-center font-bold text-sm text-white shadow-lg">
              DK
            </div>
            <div className="font-mono text-[10px] text-white/20 uppercase tracking-[0.4em]">
              © 2026 DEVARSH_KOTAK // PRODUCTION_READY
            </div>
          </div>
          <div className="flex gap-12 text-[10px] font-mono text-white/10 uppercase tracking-[0.5em] font-bold">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>{" "}
              Latency: 4ms
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-green-500 rounded-full"></div> Uptime:
              100%
            </div>
            <div className="hidden sm:block">Secure: AES-256_GCM</div>
          </div>
        </div>
      </footer>

      <HuggingFaceBot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />

      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-10 right-10 z-40 bg-racing-red text-white w-16 h-16 flex items-center justify-center shadow-[0_0_40px_rgba(225,6,0,0.5)] hover:scale-110 active:scale-95 transition-all group rounded-sm"
        >
          <div className="absolute -top-14 right-0 bg-white text-black px-4 py-2 text-[10px] font-mono font-bold uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-y-2 group-hover:translate-y-0 shadow-2xl">
            Query Profile_Bot
          </div>
          <MessageSquare size={28} />
          <div className="absolute inset-0 border border-racing-red rounded-sm animate-ping opacity-20 pointer-events-none"></div>
        </button>
      )}
    </div>
  );
};

// ... ProjectCard, AIChatbot, SectionHeading remain largely same but ensure scrollToId is used correctly ...

const SectionHeading = ({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) => {
  const headingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headingRef}
      className={`mb-12 space-y-2 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
    >
      <div className="flex items-center gap-4">
        <span className="text-racing-red font-mono text-sm font-bold tracking-[0.2em]">
          {number}
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
        {title}
      </h2>
      <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.4em]">
        {subtitle}
      </p>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group glass-panel p-8 relative overflow-hidden flex flex-col h-full border-white/5 hover:border-racing-red/40 transition-all duration-500 hover:-translate-y-2">
    <div className="absolute top-0 right-0 w-24 h-24 bg-racing-red/5 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-racing-red/10 transition-colors"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-racing-red/5 to-transparent h-24 w-full opacity-0 group-hover:animate-[scanline_2s_linear_infinite] pointer-events-none"></div>

    <div className="flex justify-between items-start mb-6">
      <div className="p-3 bg-white/5 group-hover:bg-racing-red/10 transition-colors rounded-sm">
        {project.type === "F1" ? (
          <Cpu className="text-racing-red" size={24} />
        ) : (
          <Database className="text-racing-red" size={24} />
        )}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/40 hover:text-white transition-colors hover:scale-110 transform"
      >
        <Github size={20} />
      </a>
    </div>
    <h3 className="text-xl font-bold uppercase mb-4 leading-tight group-hover:text-racing-red transition-colors tracking-tighter">
      {project.title}
    </h3>
    <div className="space-y-4 mb-8 flex-1">
      <div>
        <h4 className="text-[10px] font-mono uppercase text-white/40 mb-1 tracking-widest">
          Architecture
        </h4>
        <p className="text-sm text-white/70 leading-relaxed font-medium">
          {project.solution}
        </p>
      </div>
      <div>
        <h4 className="text-[10px] font-mono uppercase text-white/40 mb-1 tracking-widest">
          Outcome
        </h4>
        <p className="text-sm text-white/70 font-medium">{project.impact}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2 mb-6">
      {project.stack.map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] font-mono uppercase text-white/60 group-hover:border-racing-red/20 group-hover:text-white transition-all"
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-racing-red hover:gap-3 transition-all"
    >
      Deploy Source <ArrowUpRight size={14} />
    </a>
  </div>
);

const HuggingFaceBot = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 md:inset-auto md:right-8 md:bottom-8 z-[100] w-full md:w-[450px] h-full md:h-[600px] glass-panel border-white/20 shadow-2xl overflow-hidden">
      <div className="bg-racing-charcoal p-4 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Bot size={16} className="text-racing-red" />
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest">
              CAREER_AGENT
            </h3>
            <span className="text-[9px] text-green-500 font-mono uppercase animate-pulse">
              Hosted via Hugging Face
            </span>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/5">
          <X size={18} />
        </button>
      </div>

      <div className="w-full h-full bg-black">
        <iframe
          src="https://devarsh44-career-conversation.hf.space"
          title="Career Agent"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          allow="clipboard-write"
        />
      </div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
