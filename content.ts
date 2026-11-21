/**
 * All site copy and data live here. Edit text in this file, not in components.
 * Facts come from resume.md only. Anything marked `draft: true` or
 * `[PLACEHOLDER: …]` is waiting on Devarsh.
 */

export const site = {
  name: "Devarsh Kotak",
  role: "Product Engineer & Designer",
  url: "https://devarshkotak.com",
  description:
    "Devarsh Kotak is a product engineer & designer in India working across UI/UX, full-stack systems, and motorsport telemetry interfaces. He designs in Figma and builds what he designs.",
  location: "India",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "IST",
  timeZoneOffset: "UTC+5:30",
};

export const contact = {
  email: "kotakdevarsh0@gmail.com",
  github: { label: "GitHub", href: "https://github.com/Devarsh-44" },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devarsh-kotak",
  },
};

export const studio = {
  name: "RCintel",
  // The studio site is not live yet, so links point at the coming-soon page
  // inside this site. At launch, set href to the liveUrl value.
  href: "/rcintel",
  liveUrl: "https://rcintel.com",
  pill: "Studio",
  descriptor: "Design Studio",
  tagline: "Product, Brand & Motorsport/HMI Studio",
  status: "Launching January 2027",
  meaning: "RCintel stands for Racing + Intelligence.",
  summary:
    "A systems and UI/UX design studio focused on product and brand design, with motorsport telemetry and HMI interfaces as the main niche.",
  role: "Founder",
  // Coming-soon page copy
  comingSoon: {
    // DRAFT: heading is written for Devarsh to edit.
    eyebrow: "Coming soon",
    heading: "A design studio for product, brand and the interfaces people read at speed.",
    services: ["Product design", "Brand identity", "Motorsport telemetry & HMI"],
    contactLabel: "Start a conversation",
    backLabel: "Devarsh Kotak's portfolio",
  },
};

export const nav = [
  { id: "about", label: "about", doodle: "spark" },
  { id: "work", label: "work", doodle: "layers" },
] as const;

export const rail = [
  { id: "top", label: "top", icon: "home" },
  { id: "about", label: "about", icon: "user" },
  { id: "work", label: "work", icon: "grid" },
  { id: "case-studies", label: "case studies", icon: "note" },
  { id: "beliefs", label: "beliefs", icon: "pin" },
  { id: "studio", label: "rcintel", icon: "portal" },
  { id: "lab", label: "lab", icon: "flask" },
  { id: "contact", label: "say hi", icon: "check" },
] as const;

export const hero = {
  // DRAFT: hero pitch, written for Devarsh to edit. The rotating words are the
  // kinds of work in resume.md: brand identity, websites, UI/UX, data, automation.
  taglineLead: "I design and build",
  taglineWords: ["brands", "websites", "interfaces", "data tools", "automations"],
  taglineDraft: true,
  pitch:
    "You brief one person, and I take the project from the first sketch to the live product. Nothing gets lost between design and code, because the same hands do both.",
  primaryCta: "See the work",
  secondaryCta: "Start a project",
};

export const about = {
  eyebrow: "about",
  heading: "Design first. Then I build it.",
  summary: [
    "I'm a designer working across UI/UX, product design and web design. I start in Figma and carry a project through brand identity, interface and interaction.",
    "I also build what I design. My Computer Science background means I can take a site from client requirements to an interactive, animated front end in production.",
    "I'm the founder of RCintel, a design studio for product, brand and motorsport/HMI interfaces, launching January 2027.",
  ],
  focus: ["UI/UX", "Product design", "Web design"],
  portrait: {
    src: "/images/devarsh-stadium.jpg",
    alt: "Devarsh Kotak in a white Brooklyn jacket looking across a packed stadium arena with stage lights and city skyline.",
    caption: "Devarsh Kotak",
    note: "somewhere loud",
  },
  skills: [
    {
      group: "Design",
      items: ["UI/UX", "Product design", "Web design", "Brand identity", "Figma"],
    },
    { group: "Web build", items: ["Next.js", "JavaScript", "HTML/CSS", "Supabase"] },
    {
      group: "Data & backend",
      items: ["Python", "SQL", "FastAPI", "PostgreSQL"],
    },
    { group: "AI & automation", items: ["OpenAI API", "n8n", "LangChain"] },
  ],
};

export const beliefs = {
  eyebrow: "beliefs",
  heading: "Three notes I keep on the desk",
  notes: [
    {
      paper: "ruled",
      text: "Design it and build it. Ideas get lost in the handoff.",
    },
    {
      paper: "grid",
      text: "Clarity first. Correct data that nobody can read is still wrong.",
    },
    {
      paper: "plain",
      text: "Quiet, then precise, then fast.",
    },
  ],
} as const;

export const caseStudiesSection = {
  eyebrow: "case study",
  heading: "Deep dives into systems, branding & telemetry",
  intro:
    "End-to-end breakdowns from first principles: geometry, semantic tokens, HMI architecture, and high-contrast accessibility.",
  viewAllLabel: "View all case studies",
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  tier: "featured" | "small";
  stack: string[];
  points: string[];
  note?: string;
  link?: { label: string; href: string; cta?: string };
  /** In-site case study for this project, shown as a second link on featured cards. */
  study?: string;
  image: string;
};

export const projects: Project[] = [
  {
    // DRAFT: rewritten from the live site and its repo (github.com/Devarsh-44/R1360), updated 2026-11-21.
    slug: "ri360",
    title: "RI360 (RaceIntel360)",
    kicker: "F1 race analysis site and data pipeline",
    tier: "featured",
    stack: ["Python", "FastF1", "OpenF1", "pandas", "FastAPI", "React", "TypeScript", "d3", "GitHub Actions"],
    points: [
      "Eight seasons of Formula 1 timing data, 172,337 laps from 157 races, turned into race traces, tyre strategies and a strategy lab where you can re-run a race on different tyres. Each new race is added automatically the morning after it's run.",
      "The pipeline found 27,986 duplicated laps in the original export, removed them, and cross-checked 94,490 lap times against the raw timing feed.",
      "I designed it in Figma in a light paper theme and a dark pit wall theme, then built the site in React with hand-built SVG charts.",
    ],
    note: "RI360 launches as an Android app in 2027. It is the first product built in the pit-wall style that RCintel will work in.",
    link: {
      label: "ri360.vercel.app",
      href: "https://ri360.vercel.app/",
      cta: "Open the live site",
    },
    study: "/case-studies/ri360",
    image: "ri360-preview",
  },
  {
    slug: "safal-vidyalaya",
    title: "Safal Vidyalaya",
    kicker: "School website redesign (client)",
    tier: "featured",
    stack: ["Next.js", "Supabase", "UI/UX"],
    points: [
      // DRAFT: updated to match the project's real status (demo, backend not connected yet).
      "UI/UX redesign of safalvidhyalaya.com for a real school client. Designed first, then built as an interactive, animated Next.js front end. It is a demo for now: the Supabase backend and the school's own photos are still to come.",
    ],
    link: {
      label: "safal-six.vercel.app",
      href: "https://safal-six.vercel.app/",
    },
    study: "/case-studies/safal-vidyalaya",
    image: "safal-preview",
  },
  {
    slug: "rcintel-brand",
    title: "RCintel Brand System & Guidelines",
    kicker: "Studio brand identity & design tokens",
    tier: "small",
    stack: ["Brand Identity", "Design System", "Figma", "Typography", "HMI Tokens"],
    points: [
      "The complete identity system for RCintel, my studio for telemetry, motorsport and high-density HMI interfaces launching January 2027.",
      "Engineered with a cockpit palette (Night Slate, Blue-Gray, Almond, Champagne Foil), an 8-stage rev-counter shift-light motif, and strict multi-token hierarchy.",
    ],
    link: {
      label: "Read interactive case study",
      href: "/case-studies/rcintel",
    },
    image: "rcintel-brand-preview",
  },
  {
    slug: "wedding-rsvp",
    title: "Wedding RSVP Platform",
    kicker: "Freelance client",
    tier: "small",
    stack: ["HTML/CSS/JS", "Google Apps Script", "Google Sheets", "Netlify"],
    points: [
      "A complete RSVP website for a client's wedding, with a Google Sheets backend via Apps Script, deployed on Netlify. I handled it end to end, from requirements to launch.",
    ],
    image: "wedding-rsvp-preview",
  },
];

/**
 * Before/after slider on the Safal Vidyalaya card. Screenshots are in
 * public/images/safal, captured from both live sites in November 2026.
 * DRAFT: labels and alt text written for Devarsh to edit.
 */
export const safalCompare = {
  draft: true,
  sliderLabel: "Slide to compare the old Safal Vidyalaya site with the redesign",
  tabsLabel: "Choose which part of the site to compare",
  before: "Before",
  after: "After",
  caption: "Drag to compare · captured Nov 2026",
  pairs: [
    {
      id: "home",
      tab: "Home page",
      before: {
        src: "/images/safal/before-home.jpg",
        alt: "The previous Safal Vidyalaya home page: a blue and orange header over a slideshow photo of the school building with centred admission text.",
      },
      after: {
        src: "/images/safal/after-home.jpg",
        alt: "The redesigned Safal Vidyalaya home page: a rounded photo of the school building with the headline Where bright minds learn to bloom and an admissions card.",
      },
    },
    {
      id: "inside",
      tab: "Further down",
      before: {
        src: "/images/safal/before-inside.jpg",
        alt: "The previous site's School Facilities section: nine small white cards with icons on a grey background.",
      },
      after: {
        src: "/images/safal/after-inside.jpg",
        alt: "The redesign's One school, every stage section: four coloured cards for Std 1 to 5, 6 to 8, 9 to 10 and 11 to 12 on a yellow panel.",
      },
    },
  ],
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  kicker: string;
  subtitle: string;
  category: "all" | "telemetry" | "product" | "brand";
  categoryLabel: string;
  year: string;
  role: string;
  client?: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  summary: string[];
  stack: string[];
  href: string;
  isExternal?: boolean;
  ctaLabel: string;
  featured?: boolean;
  accentColor: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "portfolio",
    slug: "portfolio",
    title: "Portfolio v2 — Killing the AI Slop: Built from Zero",
    kicker: "Tactile System, Spring Physics & Telemetry",
    subtitle: "Ditching cookie-cutter templates for physical spring mass, cutting mats, and true telemetry.",
    category: "product",
    categoryLabel: "Design System & Web Architecture",
    year: "2026",
    role: "Lead Designer & Product Engineer",
    client: "Devarsh Kotak (Personal Archive)",
    deliverables: ["Cutting-Mat Canvas Kit", "Interactive Physics Tuner", "Dual Paper/Dark Tokens", "Zero-CLS Layout Architecture"],
    metrics: [
      { label: "Core Web Vitals", value: "100 / 100" },
      { label: "Layout Shift (CLS)", value: "0.000" },
      { label: "Cold Build Time", value: "< 1.8s" },
      { label: "Viewports Tested", value: "360px – 4K" },
    ],
    summary: [
      "Rejected generic AI boilerplate (purple radial glows, floaty linear transitions, blurry glassmorphic cards) for architectural craft.",
      "Engineered a tactile physical materials system: self-healing cutting mat, 28px graph paper archive, and high-frequency telemetry glass.",
      "Custom spring dynamics engine modeling natural frequency and damping ratio, ensuring every interaction feels weighted and mechanical.",
    ],
    stack: ["Next.js 16", "TypeScript", "Motion", "Tailwind CSS", "Figma"],
    href: "/case-studies/portfolio",
    ctaLabel: "Read Interactive Case Study",
    featured: true,
    accentColor: "#D94E34",
  },
  {
    id: "rcintel",
    slug: "rcintel",
    title: "RCintel — Branding & Telemetry Design System",
    kicker: "Studio Brand Identity & HMI Architecture",
    subtitle: "Engineering calm precision for screens read at 300 km/h.",
    category: "brand",
    categoryLabel: "Brand & Telemetry",
    year: "2026",
    role: "Founder & Lead Designer",
    client: "RCintel Studio (v2.0)",
    deliverables: ["6-Mark Vector System", "WCAG AAA/AA Token Kit", "8-Light Shiftbar", "HMI Cluster UI"],
    metrics: [
      { label: "Responsive Marks", value: "6 Lockups" },
      { label: "Peak WCAG Contrast", value: "12.6 : 1" },
      { label: "Min Badge Legibility", value: "24 px" },
      { label: "Shift-Light Stages", value: "8 LEDs" },
    ],
    summary: [
      "Replaced loud racing clichés (neon reds, carbon fibre textures) with architectural chromatic restraint: 65% Night Slate and Warm Off-White with Champagne Foil accents.",
      "Dual-scale emblem pairing the human Sacramento script signature with a 4-layer Capsule Character badge governed by strict R-stem clear space.",
      "Complete design token kit calibrated for high-density automotive HMI clusters, telemetry displays, and physical foil print.",
    ],
    stack: ["Design System", "Figma", "HMI Architecture", "Tokens", "Typography"],
    href: "/case-studies/rcintel",
    ctaLabel: "Read Interactive Case Study",
    featured: true,
    accentColor: "#7393B3",
  },
  {
    // DRAFT: rewritten to match /case-studies/ri360 and the live site.
    id: "ri360",
    slug: "ri360",
    title: "RI360 — F1 Race Analysis Site",
    kicker: "Data pipeline, design and front end",
    subtitle: "Eight seasons of Formula 1 timing data, turned into a site you can question.",
    category: "telemetry",
    categoryLabel: "Data & Motorsport",
    year: "2026",
    role: "Data, Design & Front end",
    client: "Self-initiated",
    deliverables: ["Data pipeline", "Pace model", "Figma screens", "React site"],
    metrics: [
      { label: "Laps analysed", value: "172,337" },
      { label: "Races", value: "157" },
      { label: "Duplicates removed", value: "27,986" },
      { label: "Race models", value: "151" },
    ],
    summary: [
      "Race traces, tyre strategies and a strategy lab built from 172,337 real timing laps across the 2019 to 2026 seasons, with each new race added the morning after it's run.",
      "The pipeline removes 27,986 duplicated laps and checks 94,490 lap times against the raw timing feed. Every one matches.",
      "Each race gets its own pace model: one equation whose median error on held-out laps is 0.46 seconds.",
    ],
    stack: ["Python", "FastF1", "OpenF1", "pandas", "FastAPI", "React", "TypeScript", "d3"],
    href: "/case-studies/ri360",
    isExternal: false,
    ctaLabel: "Read case study",
    featured: true,
    accentColor: "#D94E34",
  },
  {
    // DRAFT: rewritten to match /case-studies/safal-vidyalaya and the project's real status.
    id: "safal-vidyalaya",
    slug: "safal-vidyalaya",
    title: "Safal Vidyalaya — School Website Redesign",
    kicker: "Client UI/UX & Web Build",
    subtitle: "A school website rebuilt around the first question a parent asks.",
    category: "product",
    categoryLabel: "Product & Web Build",
    year: "2026",
    role: "UI/UX Designer & Front-end Developer",
    client: "Safal Vidyalaya",
    deliverables: ["Redesign", "Next.js front end", "Three-language switch", "Enquiry flow"],
    metrics: [
      { label: "Built with", value: "Next.js" },
      { label: "Status", value: "Demo, not handed over" },
      { label: "Still to do", value: "Photos + backend" },
    ],
    summary: [
      "Redesign of safalvidhyalaya.com: one clear first screen, a flat menu, and classes organised by the child's stage.",
      "Built as a working Next.js front end. The school's own photos and the Supabase backend are still to be added before handover.",
    ],
    stack: ["Next.js", "UI/UX Design", "Supabase (planned)"],
    href: "/case-studies/safal-vidyalaya",
    isExternal: false,
    ctaLabel: "Read case study",
    featured: false,
    accentColor: "#5E8C6A",
  },
  {
    id: "wedding-rsvp",
    slug: "wedding-rsvp",
    title: "Wedding RSVP & Guest Portal",
    kicker: "Freelance Client Platform",
    subtitle: "Bespoke digital invitation with real-time spreadsheet synchronization.",
    category: "product",
    categoryLabel: "Product Engineering",
    year: "2024",
    role: "Full-Stack Engineer & Designer",
    client: "Private Wedding Client",
    deliverables: ["Custom Interactive UI", "Google Apps Script API", "Automated Sheets Backend", "Netlify Hosting"],
    metrics: [
      { label: "Backend", value: "Google Apps Script" },
      { label: "Database", value: "Google Sheets Sync" },
      { label: "Deployment", value: "Netlify Production" },
    ],
    summary: [
      "A tailored RSVP experience handling guest validations, dietary preferences, and multi-event RSVPs with zero maintenance overhead for the client.",
      "Built with vanilla HTML/CSS/JS and a serverless Apps Script bridge directly writing validated inputs into collaborative Google Sheets.",
    ],
    stack: ["HTML/CSS/JS", "Google Apps Script", "Google Sheets", "Netlify"],
    href: "https://github.com/Devarsh-44",
    isExternal: true,
    ctaLabel: "View Developer Profile",
    featured: false,
    accentColor: "#C9B89A",
  },
];

export const work = {
  eyebrow: "work",
  heading: "Selected work",
  intro: "Four projects, each taken from brief to launch.",
  repoLabel: "View the repo",
  demoLabel: "Open the demo",
  studyLabel: "Read the case study",
};

/**
 * Case-study index on the home page: rows plus one large preview.
 * DRAFT: labels and alt text written for Devarsh to edit.
 */
export const studyIndex = {
  draft: true,
  listLabel: "Case studies",
  media: {
    portfolio: {
      src: "/images/portfolio/new-hero.jpg",
      alt: "The new portfolio hero: a cream graph-paper card with a terracotta border and Devarsh Kotak in a serif face.",
    },
    ri360: {
      src: "/images/ri360/overview-paper.jpg",
      alt: "RI360 overview page in the paper theme: the headline 172,337 laps, one pit wall.",
    },
    "safal-vidyalaya": {
      src: "/images/safal/after-home.jpg",
      alt: "The redesigned Safal Vidyalaya home page with the headline Where bright minds learn to bloom.",
    },
  } as Record<string, { src: string; alt: string }>,
};

export const studioBridge = {
  eyebrow: "now",
  here: "Portfolio",
  there: "Studio",
  cta: "Step into the studio",
  // Shown under the CTA while the studio site is still the coming-soon page.
  ctaNote: "rcintel.com goes live in January 2027",
};

export const lab = {
  eyebrow: "lab",
  heading: "Small motion studies",
  intro: "The effects this site is built from. Poke them.",
  tiles: [
    { id: "draw", title: "Stroke draw", hint: "Press to redraw" },
    { id: "magnet", title: "Magnetic pull", hint: "Move over the dot" },
    { id: "toggle", title: "Spring switch", hint: "Flip it" },
    { id: "wipe", title: "Beam wipe", hint: "Press to wipe" },
  ],
} as const;

export const lookFor = {
  eyebrow: "contact",
  heading: "What I look for",
  draft: false,
  items: [
    "A real problem and real users",
    "Room to design it and build it",
    "Clear goals and honest feedback",
    "People who care about the details",
  ],
  progress: "ticked",
  cta: "let's chat",
  ctaHint: "Tick what matters to you, or just say hello.",
  subject: "Hello from your portfolio",
};

export const notFound = {
  // DRAFT: 404 page copy, written for Devarsh to edit.
  draft: true,
  title: "Page not found",
  eyebrow: "404",
  heading: "This page isn't here.",
  body: "The link may be old, or the address may have a typo.",
  homeLabel: "Back to the portfolio",
};

export const footer = {
  line: "Designed and built by Devarsh Kotak.",
};

/**
 * Theme slider on the RI360 card and case study. Screenshots are in
 * public/images/ri360, captured from ri360.vercel.app in November 2026.
 * DRAFT: labels and alt text written for Devarsh to edit.
 */
export const ri360Compare = {
  draft: true,
  sliderLabel: "Slide to switch RI360 between its paper theme and its pit wall theme",
  tabsLabel: "Choose which RI360 page to compare",
  before: "Paper",
  after: "Pit wall",
  caption: "Drag to switch theme · live site, Nov 2026",
  pairs: [
    {
      id: "overview",
      tab: "Overview",
      before: {
        src: "/images/ri360/overview-paper.jpg",
        alt: "RI360 overview page in the light paper theme: the headline 172,337 laps, one pit wall, beside a race trace chart.",
      },
      after: {
        src: "/images/ri360/overview-pit.jpg",
        alt: "The same RI360 overview page in the dark pit wall theme.",
      },
    },
    {
      id: "race",
      tab: "Race",
      before: {
        src: "/images/ri360/race-paper.jpg",
        alt: "RI360 race page for the 2022 Abu Dhabi Grand Prix in the paper theme: the winner, his tyre strategy, laps, fastest lap, pit stop cost and weather.",
      },
      after: {
        src: "/images/ri360/race-pit.jpg",
        alt: "The same race page in the pit wall theme.",
      },
    },
    {
      id: "lab",
      tab: "Strategy lab",
      before: {
        src: "/images/ri360/lab-paper.jpg",
        alt: "RI360 strategy lab in the paper theme: a stint planner on the left and predicted race times on the right.",
      },
      after: {
        src: "/images/ri360/lab-pit.jpg",
        alt: "The same strategy lab in the pit wall theme.",
      },
    },
  ],
};

/**
 * RI360 case study (/case-studies/ri360).
 * Facts come from the live site (ri360.vercel.app), its repo
 * (github.com/Devarsh-44/R1360: README, Method page, frontend/public/data/index.json
 * generated 2026-11-20) and the layer list of the Figma file. Nothing is estimated.
 * DRAFT: all prose here was written for Devarsh to edit and approve.
 */
export const ri360Study = {
  draft: true,
  meta: {
    title: "RI360 F1 race analysis site · Case study · Devarsh Kotak",
    description:
      "How I built RI360: a data pipeline, a pace model and a website that turn 172,337 Formula 1 laps into race traces and a strategy lab, updated after every race. Includes the data problem I found and a model you can try.",
  },
  crumb: "ri360",
  crumbParent: "case-studies",
  links: {
    live: "https://ri360.vercel.app/",
    repo: "https://github.com/Devarsh-44/R1360",
    figma: "https://www.figma.com/design/iln43btpyA62VFEE5OGN3w/RaceIntel360-%E2%80%94-Website-screens",
  },
  hero: {
    eyebrow: "Case study · Data product, designed and built",
    heading: "Eight seasons of Formula 1, turned into a site you can question.",
    lead: "RI360 takes raw race timing data and makes it readable: who was fast, what each tyre cost, and what would have happened on a different strategy. I built the data pipeline, designed the screens and wrote the site.",
    liveCta: "Open the live site",
    repoCta: "View the code",
    figmaCta: "Open the Figma file",
    meta: [
      { label: "Project", value: "Self-initiated product" },
      { label: "My role", value: "Data pipeline, design, front end" },
      { label: "Built with", value: "Python, FastAPI, React, TypeScript" },
      { label: "Status", value: "Live · Android app in 2027" },
    ],
    stats: [
      { n: "172,337", d: "laps analysed" },
      { n: "157", d: "races, 2019 to 2026" },
      { n: "151", d: "race models fitted" },
      { n: "100%", d: "of checked lap times match the raw feed" },
    ],
  },
  themes: {
    eyebrow: "the product",
    heading: "One design system, two themes",
    intro: "Paper is for reading an analysis. Pit wall is for watching numbers. Both come from the same set of design tokens, so every page works in either. Drag the handle to switch.",
  },
  data: {
    eyebrow: "the problem",
    heading: "The data was counting laps twice",
    intro: "Before designing anything I profiled the 2019 to 2023 lap table the first version of this project had exported. Almost a quarter of it was wrong.",
    steps: [
      {
        n: "124,209",
        label: "rows in the exported lap table",
        body: "This is what the earlier model had been trained on.",
        share: 100,
      },
      {
        n: "27,986",
        label: "of them were the same lap stored twice",
        body: "23,038 in 2022 and 4,948 in 2023. That is 22.5% of the export. The duplicates had also doubled the stint-age value the old model learned from.",
        share: 22.5,
        loss: true,
      },
      {
        n: "96,223",
        label: "real laps left after removing them",
        body: "I also rebuilt 612 missing tyre ages and kept 368 laps with an unknown tyre out of the tyre analysis.",
        share: 77.5,
      },
      {
        n: "94,490",
        label: "lap times checked against the raw timing feed",
        body: "Every one of them matches to the millisecond. Only then did I build charts on top. With the 2024 to 2026 races added, the clean table now holds 172,337 laps.",
        share: 76.1,
      },
    ],
    shareLabel: "of the original export",
  },
  decisions: {
    eyebrow: "the build",
    heading: "Six decisions and the reason for each",
    intro: "Each one traded something away. I have said what.",
    labels: { problem: "Problem", decision: "What I did", cost: "What it costs" },
    items: [
      {
        title: "One equation instead of a black box",
        problem: "The first version used a Random Forest. It could not explain a prediction, and it had learned from the duplicated laps.",
        decision: "Each race now gets one fitted equation: lap time = driver + fuel × laps left + tyre compound + wear × tyre age. Its median error on laps held out from training is 0.46 seconds, across 151 races.",
        cost: "It treats tyre wear as a straight line, and six races get no model at all.",
      },
      {
        title: "Measure the pit stop, don't assume it",
        problem: "The old simulator charged a fixed 22 seconds for every pit stop at every circuit.",
        decision: "I measure it from the laps: in-lap plus out-lap, minus two normal laps. A stop costs about 19.0 seconds at Monaco and 28.9 at Imola, which decides whether an extra stop can ever pay.",
        cost: "It needs enough green-flag stops at a circuit to be trusted.",
      },
      {
        title: "Grade every model in public",
        problem: "A model that fits one race well can fit another badly, and a chart hides that.",
        decision: "Every fit carries a grade. 116 races have a wear rate per tyre, 16 share one rate, 9 are marked weak and 10 are mixed wet-and-dry races. The Method page lists what the model does not know.",
        cost: "Some races show less than others, on purpose.",
      },
      {
        title: "No server",
        problem: "A site that needs a database and an API is slow to load and costs money to keep running.",
        decision: "The pipeline writes everything as 4.6 MB of static files: one index and one file per race. The strategy lab runs the equation in the browser and tries every one-stop and two-stop plan.",
        cost: "Every new race means rebuilding the files. A GitHub Actions workflow does that each morning: it fetches any finished race, rebuilds the data and pushes it, and the site redeploys. If a finished race is still missing, the run fails and tells me.",
      },
      {
        title: "Change data source when the archive closed",
        problem: "The live-timing archive behind FastF1 now needs an F1TV login, so it could no longer supply new races.",
        decision: "2019 to 2023 stays on the FastF1 data already collected. From 2024 onward each race comes from OpenF1, which is free and needs no account, with fixed race IDs so race links never change.",
        cost: "Two sources means two importers to maintain, and only the FastF1 laps can be cross-checked against the raw timing feed.",
      },
      {
        title: "Draw the charts by hand",
        problem: "Chart libraries bring their own look, and a race trace with twenty drivers needs careful control.",
        decision: "Every chart is hand-built SVG, using d3 only for scales and line shapes, styled from the same tokens as the rest of the site.",
        cost: "Each new chart type is real work.",
      },
    ],
  },
  lab: {
    eyebrow: "try it",
    heading: "Run the model yourself",
    intro: "This is the real fitted equation for the 2022 Abu Dhabi Grand Prix, running in your browser with the numbers from the site's data file. Pick the tyres and the pit lap.",
    raceLabel: "2022 Abu Dhabi Grand Prix · 58 laps · winner's pace",
    stint1: "First stint",
    stint2: "Second stint",
    pitLabel: "Pit at the end of lap",
    compounds: { S: "Soft", M: "Medium", H: "Hard" },
    timeLabel: "Predicted race time",
    deltaLabel: "Compared with the fastest one-stop plan",
    fastest: "This is the fastest one-stop plan the model can find.",
    actual: "It is also the plan the winner really ran: medium tyres for 20 laps, then hard.",
    sameCompound: "The rules require two different tyre compounds in a dry race, so this plan would not be allowed.",
    showBest: "Show the fastest plan",
    lapsUnit: "laps",
    note: "No traffic, safety cars or tyre warm-up. Pit stop cost measured for this race: 24.0 seconds.",
    model: {
      laps: 58,
      pitLoss: 24.0,
      base: 87.943,
      fuel: 0.0494,
      offset: { S: -0.21, M: -0.309, H: 0 },
      deg: { S: 0.1388, M: 0.115, H: 0.0544 },
      minStint: 6,
      actual: { first: "M", second: "H", pitLap: 20 },
    },
  },
  screens: {
    eyebrow: "the screens",
    heading: "Seven pages, each with one job",
    intro: "Choose a page to see it.",
    tabsLabel: "Choose an RI360 page",
    items: [
      {
        id: "overview",
        tab: "Overview",
        body: "Headline findings from the data: what a pit stop costs at each circuit, how fast each tyre wears, and who dominated each season.",
        src: "/images/ri360/findings-paper.jpg",
        alt: "RI360 findings: a bar chart of pit stop cost by circuit and tyre wear rates for soft, medium and hard.",
      },
      {
        id: "races",
        tab: "Races",
        body: "All 157 races as cards, with the winner, the winning strategy and the fastest lap. Each season sits in a 3D cover-flow deck you move through by scrolling, swiping or with the arrow keys, and a search finds any race across every season. A grid view is one click away.",
        src: "/images/ri360/races-paper.jpg",
        alt: "RI360 races page: the 2026 season as a cover-flow deck of race cards, with the Belgian Grand Prix at the front, a search box above and a Deck or Grid switch.",
      },
      {
        id: "stories",
        tab: "Stories",
        body: "Every race told in six cards: the winner, the biggest climb, the strategy call, the fastest car and the conditions. The newest race is always first.",
        src: "/images/ri360/stories-paper.jpg",
        alt: "RI360 stories page: the latest race, the 2026 São Paulo Grand Prix, above rows of race story badges for each season.",
      },
      {
        id: "race",
        tab: "Race",
        body: "One race in full: a race trace, lap times, running order, every driver's tyre stints, best sectors, and the pace model checked against the real laps.",
        src: "/images/ri360/race-paper.jpg",
        alt: "RI360 race page for the 2022 Abu Dhabi Grand Prix: the winner, his tyre strategy, laps, fastest lap, pit stop cost and weather.",
      },
      {
        id: "lab",
        tab: "Strategy lab",
        body: "Choose a race and a driver, plan the stints, and see the predicted race time lap by lap. It also finds the fastest one-stop and two-stop plans.",
        src: "/images/ri360/lab-pit.jpg",
        alt: "RI360 strategy lab in the dark theme with a stint planner and predicted race times.",
      },
      {
        id: "seasons",
        tab: "Seasons",
        body: "A heat map of every driver's result, or pace, in every round of a season.",
        src: "/images/ri360/seasons-paper.jpg",
        alt: "RI360 seasons page: a heat map of finishing positions for the 2026 season.",
      },
      {
        id: "method",
        tab: "Method",
        body: "How the data was cleaned and checked, how the model works, and its limits.",
        src: "/images/ri360/method-paper.jpg",
        alt: "RI360 method page with four data quality figures, then how the data is collected and how the model is fitted.",
      },
    ],
    phones: {
      heading: "On a phone",
      items: [
        {
          label: "Overview · paper",
          src: "/images/ri360/mobile-overview-paper.jpg",
          alt: "RI360 overview on a phone in the paper theme.",
        },
        {
          label: "Race · pit wall",
          src: "/images/ri360/mobile-race-pit.jpg",
          alt: "RI360 race page on a phone in the pit wall theme.",
        },
      ],
    },
  },
  design: {
    eyebrow: "the design file",
    heading: "Designed in Figma before it was built",
    intro: "The Figma file holds every page in three versions, plus the shared parts.",
    items: [
      { n: "6", d: "pages designed for desktop in the paper theme" },
      { n: "6", d: "of the same pages for a 390 px phone" },
      { n: "6", d: "again for desktop in the pit wall theme" },
      { n: "3", d: "shared components: the site header and two footers" },
    ],
    type: "Type is Barlow Condensed for headlines, Space Grotesk for text and JetBrains Mono for numbers.",
  },
  pipeline: {
    eyebrow: "under the hood",
    heading: "From timing feed to website in four steps",
    steps: [
      {
        title: "Collect",
        body: "Python scripts download race timing, tyre and weather data: from the open-source FastF1 library for 2019 to 2023, and from OpenF1 from 2024 onward. A FastAPI service stores it in SQL: SQLite on my machine, Postgres in production.",
      },
      {
        title: "Clean",
        body: "Remove duplicate laps, rebuild tyre ages, and compare every lap against the raw timing feed. Safety-car and red-flag periods are mapped to laps from the track-status feed.",
      },
      {
        title: "Model",
        body: "Fit one pace equation per race on clean laps only, and score it on a random 20% of laps it has not seen.",
      },
      {
        title: "Ship",
        body: "Write the result as static files and build the site. GitHub Actions checks on every push that the site builds and the API starts, and every morning adds any race that has finished.",
      },
    ],
  },
  limits: {
    eyebrow: "limits",
    heading: "What it does not do",
    items: [
      "The model knows nothing about traffic, dirty air, safety-car timing or tyre warm-up. It compares plans; it does not predict races.",
      "The 2021 season holds rounds 1 to 7 only.",
      "The live site does not use the API. All its data ships with it.",
    ],
    credit: "Timing data comes from the FastF1 library for 2019 to 2023 and from OpenF1 from 2024 onward. RI360 is an independent project and is not affiliated with Formula 1, the FIA or any team.",
  },
  cta: {
    heading: "Have data that nobody can read yet?",
    body: "I can clean it, model it and design the product that shows it.",
    primary: "Start a conversation",
    subject: "Enquiry from the RI360 case study",
    back: "All case studies",
  },
};

/**
 * Safal Vidyalaya case study (/case-studies/safal-vidyalaya).
 * Facts come from the two live sites (safalvidhyalaya.com and the demo at
 * safal-six.vercel.app, both read in November 2026) and from Devarsh:
 * the site is a demo, not handed over; real photos and the backend are left.
 * DRAFT: all prose here was written for Devarsh to edit and approve.
 */
export const safalStudy = {
  draft: true,
  meta: {
    title: "Safal Vidyalaya website redesign · Case study · Devarsh Kotak",
    description:
      "How I redesigned and built a new website for Safal Vidyalaya, a school in Gandhinagar: what was wrong with the old site, the decisions I made, and what is left before handover.",
  },
  crumb: "safal-vidyalaya",
  crumbParent: "case-studies",
  hero: {
    eyebrow: "Case study · Client website redesign",
    heading: "A school website rebuilt around the first question a parent asks.",
    lead: "Safal Vidyalaya is an English and Gujarati medium school in Sector 22, Gandhinagar. I redesigned its website and built the new front end. This page shows what I changed and why.",
    demoCta: "Open the demo",
    compareCta: "See before and after",
    meta: [
      { label: "Client", value: "Safal Vidyalaya, Gandhinagar" },
      { label: "My role", value: "UI/UX design and front-end build" },
      { label: "Built with", value: "Next.js" },
      { label: "Status", value: "Demo. Not handed over yet." },
    ],
  },
  compare: {
    eyebrow: "before and after",
    heading: "The same school, two first impressions",
    intro: "Left is the school's current site. Right is my redesign. Drag the handle across.",
  },
  audit: {
    eyebrow: "the old site",
    heading: "What I found when I audited it",
    intro: "These are my own observations from going through the current site as a parent would. They are not from user research.",
    items: [
      {
        title: "A pop-up arrives before the page does",
        body: "The first thing a visitor sees is a window asking them to pick Gandhinagar or Ahmedabad. It covers the page until it is closed.",
        image: {
          src: "/images/safal/before-arrival.jpg",
          alt: "The old Safal Vidyalaya home page covered by a pop-up with Gandhinagar and Ahmedabad buttons.",
        },
      },
      {
        title: "The news stopped in 2022",
        body: "The newest dated post in Latest News is from December 2022. An old date on the home page makes a visitor wonder whether the rest is current.",
        image: {
          src: "/images/safal/before-news.jpg",
          alt: "The old site's Latest News section: a grid of admission posters and photos.",
        },
      },
      {
        title: "Eighteen pages inside five menus",
        body: "About Safal, Curriculum, Privilege, Admission and Gallery each open a drop-down. A parent has to guess which menu holds the syllabus or the admission form.",
        image: null,
      },
      {
        title: "The first screen explains theory, not the school",
        body: "Two of the three hero slides are about Bloom's Taxonomy and the Ashok Chakra curriculum model. Which standards the school teaches, in which language, and where it is come later.",
        image: null,
      },
    ],
  },
  decisions: {
    eyebrow: "the redesign",
    heading: "Five decisions and the reason for each",
    intro: "I designed for one visitor: a parent deciding whether to enquire. That is my working assumption, not a research finding.",
    labels: { problem: "Problem", decision: "What I did" },
    items: [
      {
        title: "Answer the first question on the first screen",
        problem: "A parent's first question is whether this school fits their child: which standards, which language, where.",
        decision: "One headline, one line that says English and Gujarati medium, Std 1 to 12, Sector 22, and one card with a single action: book a campus visit. No pop-up.",
        image: {
          src: "/images/safal/after-home.jpg",
          alt: "The redesigned home page with the headline Where bright minds learn to bloom, a one-line description of the school and an admissions card.",
        },
      },
      {
        title: "Organise by the child's stage",
        problem: "The old site was organised the way the school is run: curriculum, privilege, regulations.",
        decision: "Four cards, one per stage: Std 1 to 5, 6 to 8, 9 to 10 and 11 to 12. Each says what that stage is about and has its own Enquire link, with a switch for English or Gujarati medium.",
        image: {
          src: "/images/safal/after-inside.jpg",
          alt: "The One school, every stage section: four coloured cards for the four stages on a yellow panel.",
        },
      },
      {
        title: "Make it look like a school",
        problem: "The old site's blue and orange template could belong to any institution.",
        decision: "A notebook: ruled paper, a red margin line, handwritten notes in the margin and a teacher's star. Facts are shown as a ticked list and four numbers.",
        image: {
          src: "/images/safal/after-facts.jpg",
          alt: "The Why Safal section drawn as a ruled notebook page with ticked facts, a red star and four large numbers.",
        },
      },
      {
        title: "Seven links, no drop-downs",
        problem: "Five drop-downs hid eighteen pages.",
        decision: "A flat menu: Academics, Admissions, Campus, Life at Safal, About, Contact, Careers. The Apply button stays visible beside it.",
        image: null,
      },
      {
        title: "Make enquiring a thumb's reach away",
        problem: "On a phone the old site puts a hamburger menu and an Admission Open banner first. The form is at the bottom of the page.",
        decision: "A bar fixed to the bottom of the phone screen with Call, WhatsApp and Apply. The call-back form asks for four things: parent's name, mobile number, standard and medium. The site also has a language switch for English, Gujarati and Hindi.",
        image: null,
      },
    ],
  },
  phones: {
    eyebrow: "on a phone",
    heading: "The first screen on mobile",
    before: {
      label: "Before",
      src: "/images/safal/before-mobile.jpg",
      alt: "The old site on a phone: contact bar, logo, an Admission Open banner and a Bloom's Taxonomy slide.",
    },
    after: {
      label: "After",
      src: "/images/safal/after-mobile.jpg",
      alt: "The redesign on a phone: a photo of the school with the headline, and a bottom bar with Call, WhatsApp and Apply.",
    },
  },
  status: {
    eyebrow: "where it stands",
    heading: "Built, but not finished",
    intro: "The link is a demo. I have not handed the site over to the school yet, so there are no results to report.",
    doneLabel: "Done",
    todoLabel: "Left before handover",
    done: [
      "Design of the full home page and its sections",
      "Responsive Next.js front end with the animations",
      "Language switch for English, Gujarati and Hindi",
      "Enquiry flow and call-back form, on the front end",
    ],
    todo: [
      "The school's own photos. Some pictures on the demo are openly licensed samples, credited in its footer.",
      "The backend connection, so the call-back form and staff login work.",
      "Real parent quotes. The demo shows labelled placeholders.",
      "The Ahmedabad campus address, which is a placeholder.",
      "Alt text for the photos, and a darker overlay where the headline sits on a busy photo.",
    ],
  },
  cta: {
    heading: "Have a website that hides what people came for?",
    body: "I can audit it, redesign it and build it.",
    primary: "Start a conversation",
    subject: "Enquiry from the Safal Vidyalaya case study",
    back: "All case studies",
  },
};

/**
 * RCintel brand case study (/case-studies/rcintel).
 * Facts come from public/rcintel (README, guidelines, colours, fonts).
 * DRAFT: all prose here was written for Devarsh to edit and approve.
 */
export const rcintelStudy = {
  draft: true,
  meta: {
    title: "RCintel brand identity · Case study · Devarsh Kotak",
    description:
      "How I built the identity for RCintel, my design studio for telemetry, motorsport and HMI interfaces: six marks, eight colours, three typefaces and the rules that hold them together.",
  },
  topbar: {
    back: "Case studies",
    brand: "RCintel",
    tag: "Brand identity",
    navLabel: "Case study sections",
    nav: [
      { id: "overview", label: "Overview" },
      { id: "brief", label: "Brief" },
      { id: "decisions", label: "Decisions" },
      { id: "marks", label: "Marks" },
      { id: "colour", label: "Colour" },
      { id: "kit", label: "The kit" },
    ],
    progressLabel: "Reading progress, shown as shift lights",
    toNight: "Night",
    toPaper: "Paper",
    themeLabel: "Switch colour theme",
    cta: "Start a project",
    ctaSubject: "Project enquiry from the RCintel case study",
  },
  hero: {
    kicker: "Case study · Brand identity",
    headingLead: "A studio identity that is calm, exact and",
    headingAccent: "quietly alive.",
    lead: "RCintel is my design studio for telemetry, motorsport and HMI interfaces, launching January 2027. This is the identity I made for it, and the reasoning behind each part.",
    primaryCta: "See the decisions",
    secondaryCta: "Jump to the kit",
    meta: [
      { label: "Project", value: "Self-initiated studio brand" },
      { label: "Role", value: "Founder & Design Lead" },
      { label: "Version", value: "Brand kit v2.0 · October 2026" },
      { label: "Made with", value: "Figma and Claude" },
    ],
    stageLabel: "RCintel · Identity system",
    stageNote: "v2.0",
    signatureAlt: "RCintel Signature: the RC monogram with eight shift lights and intel in script",
    stats: [
      { n: "6", d: "Marks in the family" },
      { n: "8", d: "Colours in the palette" },
      { n: "3", d: "Typefaces" },
    ],
    madeNote:
      "How it was made: I started from a reference alphabet I found online for the R and C, built the system in Figma, and used Claude to help produce and document it.",
  },
  brief: {
    kicker: "The brief",
    heading: "No client, so I wrote the brief myself.",
    sub: "A studio brand is easy to make vague. I set four requirements first, so every later choice had something to answer to.",
    items: [
      {
        title: "Look the way the work should feel",
        body: "RCintel designs screens that get read at speed: telemetry dashboards, HMI and data-heavy product interfaces. The brand has to be precise and quiet, with one small sign of life.",
      },
      {
        title: "Work at every size",
        body: "The same identity has to hold as a 16 px favicon, a profile photo, a website header and a foil-printed card.",
      },
      {
        title: "Survive one ink",
        body: "Print, embroidery and stamps often allow a single colour. Every mark needs a one-colour version that still reads.",
      },
      {
        title: "Sound like a race engineer",
        body: "Short, specific and confident. Say what the design does for the driver or the client, and skip the hype words.",
      },
    ],
  },
  decisions: {
    kicker: "Design decisions",
    heading: "Five problems, five decisions, five rules.",
    sub: "Each decision ends in a rule, because a brand only stays consistent if the choice is written down.",
    labels: { problem: "Problem", decision: "Decision", rule: "Rule it became" },
    items: [
      {
        tag: "01 · Mark family",
        title: "A logo with fine script can't shrink",
        problem:
          "The logo has “intel” written across the monogram in a fine script. That line is the first thing to break when the logo gets small.",
        decision:
          "One Signature, with a small family around it: Badge, Horizontal lockup, Monogram, Studio Stack and Seal. Each one has a single job.",
        rule: "Below 100 px wide, switch from the Signature to the Monogram. Below 64 px, use the flat Badge. Use the simplest mark that works and never place two side by side.",
      },
      {
        tag: "02 · The character",
        title: "Personality without a cartoon",
        problem:
          "A studio that works on data screens can come across as cold. I wanted some warmth, but not a mascot.",
        decision:
          "A capsule: the shape of an HMI indicator or a status pill on a dashboard. Two slate eyes with a small catch-light are always watching the data. A fine outline keeps it crisp when small.",
        rule: "The soft shadow under the capsule is removed in the flat version, so the Badge still reads at favicon size.",
      },
      {
        tag: "03 · The motif",
        title: "One racing reference that does a job",
        problem:
          "I didn't want flags, speed lines or racing red. I wanted a single motorsport reference that is also useful inside an interface.",
        decision:
          "Eight shift lights from a steering-wheel display: four lit in foil, two in blue-gray, two off. They sit above the monogram and double as a progress bar, a loading state and a section divider.",
        rule: "Always horizontal, always eight lights, always in this order. The bar at the top of this page is the motif doing its progress job.",
      },
      {
        tag: "04 · Colour",
        title: "A script that has to read on dark and light",
        problem:
          "The script sits on both Night Slate and Off-White. The primary Blue-Gray is not readable as text on both.",
        decision:
          "A cockpit palette of eight values: cool instrument blues against warm leather tones. Two Blue-Gray tints exist only so the script and secondary text stay readable. Champagne Foil is a finish for special moments, not a fill colour.",
        rule: "Blue-Gray on Off-White is 2.8 : 1, so it is for shapes and accents only. That pairing stays in the contrast table instead of being hidden.",
      },
      {
        tag: "05 · Type",
        title: "Three typefaces, three separate jobs",
        problem:
          "The brand needs a voice for headlines and numbers, a workhorse for body copy and UI, and a signature. One typeface can't do all three.",
        decision:
          "Sora for display, Inter for text and labels, Sacramento for the signature. All three are free under the SIL Open Font Licence.",
        rule: "Sacramento is logo only. No other word is set in it, and “intel” is never retyped: the supplied files are used.",
      },
    ],
  },
  marks: {
    kicker: "The mark family",
    heading: "Six marks. Pick one, change the ground.",
    sub: "Marks go on Night Slate, Off-White or Almond. Try each one and see where it is meant to be used.",
    pickLabel: "Mark",
    groundLabel: "Ground",
    finishLabel: "Finish",
    clearSpaceOn: "Show clear space",
    clearSpaceOff: "Hide clear space",
    clearSpaceNote: "Clear space on every side equals the width of the R's upright stroke.",
    minLabel: "Minimum size",
    noMin: "No minimum set in the kit",
    list: [
      { id: "sig", label: "The Signature", min: "100 px · 28 mm wide", use: "The primary logo. Website, decks, covers, invoices: anywhere the brand needs its name." },
      { id: "badge", label: "The Badge", min: "24 px · 8 mm", use: "The character in a blue-gray circle. Profile photos, app icon and favicon." },
      { id: "lockup", label: "Horizontal lockup", min: "180 px · 45 mm wide", use: "Badge plus Signature for wide, short spaces: website header, email header, slide footer." },
      { id: "mono", label: "RC Monogram", min: "40 px · 12 mm wide", use: "RC with the shift lights and no script. Watermarks, merch and very small spaces." },
      { id: "stack", label: "Studio Stack", min: null, use: "Signature over DESIGN STUDIO. Title slides, business card fronts, packaging." },
      { id: "seal", label: "Studio Seal", min: null, use: "A crest for certificates, stickers and large faint watermarks." },
    ],
    grounds: [
      { id: "night", label: "Night Slate" },
      { id: "paper", label: "Off-White" },
      { id: "almond", label: "Almond" },
    ],
    finishes: {
      foil: "Champagne Foil",
      almond: "Almond",
      slate: "Deep Slate",
      "mono-white": "One colour, white",
      "mono-slate": "One colour, slate",
      "mono-bluegray": "One colour, blue-gray",
      standard: "Full detail",
      flat: "Flat, below 64 px",
    },
  },
  colour: {
    kicker: "Colour",
    heading: "Eight values, in fixed proportion.",
    sub: "Every file in the kit uses only these eight values, plus white highlights and the foil gradient stops.",
    proportionLabel: "Colour proportions across the brand",
    swatches: [
      { name: "Night Slate", role: "Dark ground", share: 40, hex: "#1F2A36", rgb: "31 42 54", cmyk: "43 22 0 79", use: "Main dark background", light: true },
      { name: "Warm Off-White", role: "Light ground", share: 25, hex: "#F3EEE5", rgb: "243 238 229", cmyk: "0 2 6 5", use: "Main light background", light: false },
      { name: "Blue-Gray", role: "Primary", share: 15, hex: "#7393B3", rgb: "115 147 179", cmyk: "36 18 0 30", use: "Badge, accents, UI highlights", light: false },
      { name: "Almond", role: "Secondary", share: 12, hex: "#E1D4C0", rgb: "225 212 192", cmyk: "0 6 15 12", use: "Character, monogram on dark, warm panels", light: false },
      { name: "Deep Slate", role: "Ink", share: 6, hex: "#2B3A4C", rgb: "43 58 76", cmyk: "43 24 0 70", use: "Text, outlines, eyes, monogram on light", light: true },
      { name: "Champagne Foil", role: "Accent finish", share: 2, hex: "#C9B89A", rgb: "201 184 154", cmyk: "0 8 23 21", use: "Foil monogram, seal, special moments", light: false },
      { name: "Blue-Gray 300", role: "Tint", share: null, hex: "#9DB4CB", rgb: "157 180 203", cmyk: "23 11 0 20", use: "“intel” and secondary text on dark", light: false },
      { name: "Blue-Gray 700", role: "Tint", share: null, hex: "#5F7F9F", rgb: "95 127 159", cmyk: "40 20 0 38", use: "“intel” and secondary text on light", light: true },
    ],
    valueLabels: { hex: "HEX", rgb: "RGB", cmyk: "CMYK" },
    cmykNote: "CMYK values are approximate.",
    pairsHeading: "Contrast, including the pairing that fails",
    pairsNote: "WCAG contrast ratios. Normal text needs 4.5 : 1 and large text 3 : 1.",
    pairs: [
      { pair: "Off-White on Night Slate", ratio: "12.6 : 1", use: "Body text", bg: "#1F2A36", fg: "#F3EEE5" },
      { pair: "Almond on Night Slate", ratio: "10.0 : 1", use: "Text, logos", bg: "#1F2A36", fg: "#E1D4C0" },
      { pair: "Deep Slate on Off-White", ratio: "10.0 : 1", use: "Body text", bg: "#F3EEE5", fg: "#2B3A4C" },
      { pair: "Deep Slate on Almond", ratio: "7.9 : 1", use: "Text, logos", bg: "#E1D4C0", fg: "#2B3A4C" },
      { pair: "Blue-Gray 300 on Night Slate", ratio: "6.8 : 1", use: "Secondary text, script", bg: "#1F2A36", fg: "#9DB4CB" },
      { pair: "Blue-Gray on Night Slate", ratio: "4.5 : 1", use: "Large text, UI", bg: "#1F2A36", fg: "#7393B3" },
      { pair: "Blue-Gray 700 on Off-White", ratio: "3.6 : 1", use: "Large text, script", bg: "#F3EEE5", fg: "#5F7F9F" },
      { pair: "Blue-Gray on Off-White", ratio: "2.8 : 1", use: "Decoration only", bg: "#F3EEE5", fg: "#7393B3" },
    ],
  },
  open: {
    kicker: "Still open",
    heading: "What isn't finished.",
    sub: "A kit is not a brand until it has been used. These are the things I still have to do or check.",
    items: [
      {
        title: "Confirm the letterform licence",
        body: "The R and C are traced from a reference alphabet. I need to confirm that typeface's licence before the marks are used commercially.",
      },
      {
        title: "Proof the print colours",
        body: "The CMYK values are approximate, and the foil is specified as a matte champagne hot foil matched to #C9B89A. Both need a printer's proof before a large run.",
      },
      {
        title: "Use it on real work",
        body: "The studio launches in January 2027, so the system has not been tested on a client project yet. RI360 is the first case study it will be applied to.",
      },
    ],
  },
  kit: {
    kicker: "The kit",
    heading: "The whole brand on one board.",
    sub: "Every tile uses files and values from brand kit v2.0. Nothing here is a product mock-up.",
    tiles: {
      signature: { label: "Signature", note: "Foil on Night Slate", alt: "RCintel Signature in champagne foil on Night Slate" },
      badge: { label: "Badge", note: "Full detail from 64 px, flat below", alt: "RCintel Badge: the capsule character in a blue-gray circle", flatAlt: "RCintel flat Badge at a small size" },
      lights: { label: "Shift lights", note: "Four foil, two blue-gray, two off", alt: "Eight shift lights: four foil, two blue-gray, two off" },
      palette: { label: "Palette", note: "40 / 25 / 15 / 12 / 6 / 2" },
      type: { label: "Type", note: "Sora · Inter · Sacramento", display: "Aa", sample: "Lap time, redesigned", caption: "RCINTEL · DESIGN STUDIO" },
      card: {
        label: "Business card",
        note: "85 × 55 mm, front and back",
        stackAlt: "RCintel Studio Stack on the front of a business card",
        badgeAlt: "RCintel Badge on the back of a business card",
        name: "Devarsh Kotak",
        role: "Founder & Design Lead",
        email: "rcintelstudio@gmail.com",
      },
      header: {
        label: "Website header",
        note: "Horizontal lockup",
        alt: "RCintel Horizontal lockup in a website header",
        nav: ["Work", "Services", "Studio", "Contact"],
        headline: "Interfaces engineered for the fastest decisions.",
        line: "Telemetry dashboards · HMI · Data products",
      },
      watermark: { label: "Watermark", note: "Monogram, almond at 55%", alt: "RC Monogram used as a corner watermark", value: "312", unit: "km/h" },
      seal: { label: "Studio Seal", note: "Certificates and stickers", alt: "RCintel Studio Seal" },
      stack: { label: "Studio Stack", note: "Slate, for light grounds", alt: "RCintel Studio Stack in slate on Almond" },
    },
  },
  cta: {
    heading: "Want a brand or an interface built this way?",
    body: "RCintel opens in January 2027. If you have a product, a brand or a data-heavy interface in mind, you can email me now.",
    primary: "Start a conversation",
    subject: "Studio enquiry from the RCintel case study",
    back: "Back to the portfolio",
  },
  footer: {
    line: "RCintel · Designed by Devarsh Kotak.",
    links: [
      { href: "/case-studies", label: "All case studies" },
      { href: "/", label: "Portfolio home" },
      { href: "/rcintel", label: "RCintel studio" },
    ],
  },
};
/**
 * Old vs new home page slider on /case-studies/portfolio. Screenshots are in
 * public/images/portfolio: the old site captured from devarshkotak.com on
 * 17 Nov 2026 (phone number blurred), the new one from this build, both at 1280 × 800.
 * DRAFT: labels and alt text written for Devarsh to edit.
 */
export const portfolioCompare = {
  draft: true,
  sliderLabel: "Slide to compare the old portfolio with the new one",
  tabsLabel: "Choose which section of the home page to compare",
  before: "Old site",
  after: "New site",
  caption: "Drag to compare · both at 1280 × 800",
  pairs: [
    {
      id: "hero",
      tab: "Hero",
      before: {
        src: "/images/portfolio/old-hero.jpg",
        alt: "The old portfolio hero: DEVARSH in white and KOTAK in glowing red bold capitals on black, a System online badge, three square buttons and a telemetry panel showing system stability 100%.",
      },
      after: {
        src: "/images/portfolio/new-hero.jpg",
        alt: "The new portfolio hero: a cream graph-paper card with a terracotta border, Devarsh Kotak in a serif face, I design and build brands, two pill buttons and a line drawing of a browser window.",
      },
    },
    {
      id: "about",
      tab: "About",
      before: {
        src: "/images/portfolio/old-about.jpg",
        alt: "The old About section, titled Engineering core, with two paragraphs, a red stat row reading BSc Comp Sci, 99.9% uptime and CAN_HIRE, and an animated server diagnostics panel.",
      },
      after: {
        src: "/images/portfolio/new-about.jpg",
        alt: "The new About section: a taped polaroid photo of Devarsh at a stadium beside the serif heading Design first. Then I build it., three short paragraphs and skill groups.",
      },
    },
    {
      id: "work",
      tab: "Work",
      before: {
        src: "/images/portfolio/old-work.jpg",
        alt: "The old projects section, titled Deployment logs: three equal dark cards for RaceIntel360, AI Chatbot Assistant and Race Performance Dashboard.",
      },
      after: {
        src: "/images/portfolio/new-work.jpg",
        alt: "The new Selected work section: a large cream card for RI360 with a live screenshot slider, project notes and buttons for the case study and live site.",
      },
    },
    {
      id: "contact",
      tab: "Contact",
      before: {
        src: "/images/portfolio/old-contact.jpg",
        alt: "The old contact section, titled System connection, saying it is seeking roles in application support, full-stack, data engineering or IT within Canada, with email and phone cards.",
      },
      after: {
        src: "/images/portfolio/new-contact.jpg",
        alt: "The new contact section, titled What I look for: a checklist of four things wanted in a project, a let's chat button and an empty grid where a drawing appears as items are ticked.",
      },
    },
  ],
};

/**
 * Portfolio case study (/case-studies/portfolio): the old devarshkotak.com against this site.
 * DRAFT: all copy below was written for Devarsh to edit (November 2026).
 * Facts about the old site were observed on devarshkotak.com on 17 Nov 2026 (text, computed
 * colours and fonts). Facts about the new site come from this codebase and resume.md.
 * Spring presets are the real values from the components named in `source`.
 * Contrast ratios are calculated from the tokens in app/globals.css (WCAG 2 formula).
 */
export const portfolioStudy = {
  draft: true,
  meta: {
    title: "Rebuilding my portfolio · Case study · Devarsh Kotak",
    description:
      "My old portfolio presented me as a backend and IT engineer, dressed as a server dashboard. Here is the old site and the new one side by side, section by section, with the design tokens, the copy and the decisions that changed.",
  },
  crumb: "portfolio",
  crumbParent: "case-studies",
  links: {
    repo: "https://github.com/Devarsh-44",
  },
  hero: {
    eyebrow: "Case study · Portfolio redesign, designed and built",
    heading: "From a server dashboard to a design desk.",
    lead: "My old portfolio sold me as a backend and IT engineer looking for a job in Canada. It was black and red, set in capitals, and covered in system readouts. I've since moved into design and started a studio, so I rebuilt the site from scratch to show what I do now: design something, then build it.",
    compareCta: "Compare the two sites",
    sectionsCta: "Section by section",
    meta: [
      { label: "Old title", value: "Backend Engineer & IT Specialist" },
      { label: "New title", value: "Product Engineer & Designer" },
      { label: "My role", value: "Design and front end, both sites" },
      { label: "Old site captured", value: "17 Nov 2026" },
    ],
    stats: [
      { n: "5 → 8", d: "sections on the home page" },
      { n: "2 → 3", d: "typefaces, each with one job" },
      { n: "7 → 0", d: "decorative system readouts" },
      { n: "0 → 16", d: "px of corner radius on cards" },
    ],
  },
  compare: {
    eyebrow: "side by side",
    heading: "The same four sections, before and after",
    intro: "Both screenshots are 1280 × 800, taken from the top of each section. Drag the handle, or use the arrow keys, then switch sections below.",
  },
  phones: {
    eyebrow: "on a phone",
    heading: "The first screen at 390px",
    intro: "On the old site, the name filled the first screen. On the new one, you see who I am, what I do and two ways to act before you scroll.",
    before: { label: "Old site", src: "/images/portfolio/old-mobile.jpg", alt: "The old portfolio on a phone: the name in large white and red capitals on black, a system badge and the start of the description." },
    after: { label: "New site", src: "/images/portfolio/new-mobile.jpg", alt: "The new portfolio on a phone: a cream card with the name in serif, I design and build brands, the pitch, two buttons and the local time, with an icon bar at the bottom." },
  },
  sections: {
    eyebrow: "section by section",
    heading: "What each part of the page became",
    intro: "Every section of the old home page has a counterpart on the new one. Pick a section to see both, with what changed and why.",
    tabsLabel: "Choose a section",
    thenLabel: "Then",
    nowLabel: "Now",
    whyLabel: "Why",
    oldLabel: "Old site",
    newLabel: "New site",
    items: [
      {
        id: "hero",
        tab: "Hero",
        old: { src: "/images/portfolio/old-hero.jpg", alt: "Old hero: name in huge white and red capitals, status badge, square buttons, telemetry panel.", w: 1280, h: 800 },
        now: { src: "/images/portfolio/new-hero.jpg", alt: "New hero: cream paper card with serif name, rotating word, pitch and two pill buttons.", w: 1280, h: 800 },
        then: [
          "Name in 128px bold Inter capitals, with KOTAK in red and a red glow.",
          "A badge reading 'System online - engineering control active'.",
          "A panel with location, degree, focus and 'System stability 100%'.",
          "Three square buttons (View projects, Download CV, Ask assistant) and a floating chat button.",
        ],
        now_: [
          "A cream graph-paper card with a terracotta border that tilts slightly under the pointer on desktop.",
          "Name in Fraunces, then 'I design and build' with a rotating word: brands, websites, interfaces, data tools, automations.",
          "One sentence on what working with me is like, two pill buttons, and my local time in India.",
        ],
        why: "The old hero said who I was. The new one says what I make, and gives a client somewhere to go next.",
      },
      {
        id: "about",
        tab: "About",
        old: { src: "/images/portfolio/old-about.jpg", alt: "Old About: Engineering core heading, paragraphs, red stats and server diagnostics panel.", w: 1280, h: 800 },
        now: { src: "/images/portfolio/new-about.jpg", alt: "New About: polaroid photo, serif heading, paragraphs and grouped skills.", w: 1280, h: 800 },
        then: [
          "Titled 'Engineering core', subtitled 'Reliability as a priority'.",
          "Two paragraphs about backend work, systems support and data pipelines.",
          "A stat row: Degree BSc Comp Sci, Uptime 99.9%, Status CAN_HIRE.",
          "An animated diagnostics panel with NGINX_LB, CORE_API, POSTGRES and a scrolling log.",
        ],
        now_: [
          "Titled 'Design first. Then I build it.'",
          "A real photo of me, as a polaroid pinned with tape.",
          "Three short paragraphs: how I design, that I build what I design, and RCintel.",
          "Skills in four small groups: design, web build, data and backend, AI and automation.",
        ],
        why: "The diagnostics panel showed a server I never ran. A photo and plain sentences show the person a client would actually work with.",
      },
      {
        id: "work",
        tab: "Work",
        old: { src: "/images/portfolio/old-work-full.jpg", alt: "Old Deployment logs section: three equal dark project cards.", w: 1280, h: 872 },
        now: { src: "/images/portfolio/new-work-full.jpg", alt: "New Selected work section: large RI360 and Safal Vidyalaya cards with live comparisons.", w: 1280, h: 1250 },
        then: [
          "Titled 'Deployment logs': three equal dark cards in a row.",
          "RaceIntel360, AI Chatbot Assistant and Race Performance Dashboard.",
          "Each card had Architecture and Outcome text, tech tags and a 'Deploy source' link.",
        ],
        now_: [
          "Titled 'Selected work': two large featured cards, then two smaller tilted ones.",
          "RI360 and Safal Vidyalaya each carry a working before/after slider inside the card.",
          "RCintel Brand System and Wedding RSVP Platform as the smaller cards.",
          "Featured projects link to a full case study and to the live site.",
        ],
        why: "Three identical cards made every project look the same size. Now the two that show design and build together get the space, and you can see the result without leaving the page.",
      },
      {
        id: "skills",
        tab: "Skills → Beliefs",
        old: { src: "/images/portfolio/old-skills.jpg", alt: "Old Technical arsenal section: three columns listing nineteen skills.", w: 1280, h: 802 },
        now: { src: "/images/portfolio/new-beliefs.jpg", alt: "New Beliefs section: three paper notes on a dark grid.", w: 1280, h: 827 },
        then: [
          "Titled 'Technical arsenal': three columns, 19 skills, from Linux admin to PyTorch.",
          "Every item had the same weight, so nothing stood out.",
        ],
        now_: [
          "The skills moved into About as four short groups.",
          "This slot now holds 'Three notes I keep on the desk': three beliefs on paper notes that scatter as you scroll.",
        ],
        why: "A long skill list answers a recruiter's keyword search. Clients want to know how I work, so that is what this space says now.",
      },
      {
        id: "contact",
        tab: "Contact",
        old: { src: "/images/portfolio/old-contact.jpg", alt: "Old System connection section with email and phone cards (phone blurred).", w: 1280, h: 800 },
        now: { src: "/images/portfolio/new-contact.jpg", alt: "New What I look for checklist with a let's chat button.", w: 1280, h: 760 },
        then: [
          "Titled 'System connection', subtitled 'Open for professional inquiry'.",
          "'Seeking opportunities in Application Support, Full-stack development, data engineering or IT Infrastructure within Canada.'",
          "Email and phone cards, plus LinkedIn, GitHub and a PDF résumé.",
        ],
        now_: [
          "Titled 'What I look for': four things I want in a project, as a checklist.",
          "Ticking items draws an illustration, and 'let's chat' opens an email with your ticks in it.",
        ],
        why: "The old section asked for a job. The new one tells a client what a good project with me looks like.",
      },
      {
        id: "footer",
        tab: "Footer",
        old: { src: "/images/portfolio/old-footer.jpg", alt: "Old footer with production-ready, latency, uptime and encryption readouts.", w: 1280, h: 216 },
        now: { src: "/images/portfolio/new-footer.jpg", alt: "New footer: a single line, designed and built by Devarsh Kotak.", w: 1280, h: 109 },
        then: [
          "'© 2026 DEVARSH_KOTAK // PRODUCTION_READY', followed by 'Latency: 4ms · Uptime: 100% · Secure: AES-256_GCM'.",
        ],
        now_: [
          "One line: 'Designed and built by Devarsh Kotak.'",
        ],
        why: "None of those readouts measured anything. The new footer only says what is true.",
      },
    ],
    addedHeading: "New on the home page",
    added: [
      { name: "Case studies", body: "Long-form write-ups for RI360, Safal Vidyalaya, RCintel and this site." },
      { name: "Studio bridge", body: "A separate door to RCintel, my design studio, so it never competes with my own work." },
      { name: "Lab", body: "Small motion studies, the same effects the site uses, to play with." },
      { name: "Side rail", body: "An icon rail on the left (a bottom bar on phones) that tracks where you are on the page." },
    ],
  },
  tokens: {
    eyebrow: "design tokens",
    heading: "The system underneath",
    intro: "Old values were read from the live old site's computed styles. New values come from this site's design tokens.",
    oldLabel: "Old site",
    newLabel: "New site",
    rows: [
      { name: "Page background", old: { label: "Near-black", value: "#0b0b0f" }, now: { label: "Canvas", value: "#111111" } },
      { name: "Accent", old: { label: "Racing red", value: "#e10600" }, now: { label: "Terracotta", value: "#d94e34" } },
      { name: "Card surface", old: { label: "Translucent navy", value: "#15151e" }, now: { label: "Paper", value: "#f4efe6" } },
      { name: "Main text", old: { label: "White", value: "#ffffff" }, now: { label: "Chalk / Ink", value: "#ede8df" } },
    ],
    type: [
      { name: "Headings", old: "Inter, bold capitals", now: "Fraunces, sentence case" },
      { name: "Body", old: "Inter", now: "Geist" },
      { name: "Labels", old: "Roboto Mono, snake_case", now: "Geist Mono, lowercase" },
      { name: "Corners", old: "Square (0px)", now: "Rounded (12–16px)" },
      { name: "Buttons", old: "Square, white or outlined", now: "Pills, terracotta or outlined" },
    ],
  },
  copy: {
    eyebrow: "the words",
    heading: "What the page said, then and now",
    intro: "The look changed because the message changed. Old lines are quoted word for word from the old site.",
    oldLabel: "Old site",
    newLabel: "New site",
    rows: [
      { topic: "Who I am", old: "Backend Engineer & IT Specialist", now: "Product Engineer & Designer" },
      { topic: "Opening line", old: "System online - engineering control active", now: "I design and build brands, websites, interfaces, data tools, automations" },
      { topic: "Who it's for", old: "Seeking opportunities in Application Support, Full-stack development, data engineering or IT Infrastructure within Canada.", now: "You brief one person, and I take the project from the first sketch to the live product." },
      { topic: "Numbers", old: "System stability 100% · Uptime 99.9% · Cache hit ratio 98.2% · Latency 4ms", now: "No number on the page that I can't point to a source for." },
      { topic: "Where", old: "Ontario, CAN", now: "India · with my live local time" },
    ],
  },
  decisions: {
    eyebrow: "four decisions",
    heading: "The rules behind the rebuild",
    intro: "Each one fixes something specific on the old site, and each one cost something.",
    labels: { problem: "On the old site", decision: "Decision", cost: "Cost" },
    items: [
      {
        title: "Lead with what I make, not my job title",
        problem: "The first screen was my name in 128px capitals and a 'system online' badge. It told you nothing about what I could do for you.",
        decision: "The hero now says 'I design and build' and rotates through the kinds of work I take on, with a direct way to start a project.",
        cost: "A rotating word is less punchy than a giant name, and it needs a still version for reduced motion.",
      },
      {
        title: "Paper and ink instead of a control room",
        problem: "Black, racing red and white capitals everywhere made every section look like the same dashboard.",
        decision: "A dark desk with cream paper cards on it, terracotta for anything you can act on, and a faint cyan only as light.",
        cost: "Cream cards on a dark page are a big jump in brightness, so I checked the contrast of every text pair on both surfaces.",
      },
      {
        title: "Three typefaces, three jobs",
        problem: "Inter did headings and body, and mono labels were written like code (CAN_HIRE, SYSTEMS_ENG), which made the page harder to read.",
        decision: "Fraunces for headings, Geist for body, Geist Mono for small labels in plain lowercase.",
        cost: "Three families cost more to load than one, so they come through next/font and there will not be a fourth.",
      },
      {
        title: "Only claims I can back up",
        problem: "Uptime, latency, cache hit ratio and 'AES-256' were decoration. They measured no real system.",
        decision: "Facts on the new site come from my resume or my studio's brand kit. Where I don't have a number, the page says so.",
        cost: "The new site shows fewer numbers. I would rather leave a gap than invent one.",
      },
    ],
  },
  labs: {
    eyebrow: "the labs",
    heading: "Try the new system yourself",
    intro: "Three small tools built from the same code as the site: the springs, the surfaces and the type.",
  },
  spring: {
    kicker: "Lab 01 · Motion",
    heading: "Spring tuner",
    intro: "Pick a spring from the site, or set your own. Toss the card, or press Flick.",
    flick: "Flick the card",
    presetsLabel: "Springs used on this site",
    presets: [
      { name: "Magnetic buttons", source: "Magnetic", stiffness: 320, damping: 18, mass: 0.4 },
      { name: "Nav doodles", source: "DoodlePop", stiffness: 420, damping: 13, mass: 0.6 },
      { name: "Rotating word", source: "RotatingWord", stiffness: 260, damping: 22, mass: 0.7 },
      { name: "Hero tilt", source: "TiltCard", stiffness: 160, damping: 18, mass: 1 },
      { name: "Project cards", source: "TiltedCard", stiffness: 140, damping: 18, mass: 0.9 },
    ],
    sliders: [
      { key: "stiffness", label: "Stiffness", hint: "Pull towards rest. Higher is snappier.", min: 60, max: 700, step: 10 },
      { key: "damping", label: "Damping", hint: "Friction. Lower bounces more.", min: 5, max: 60, step: 1 },
      { key: "mass", label: "Mass", hint: "Weight. Higher feels heavier and slower.", min: 0.2, max: 3, step: 0.1 },
    ],
    readouts: {
      ratio: "Damping ratio",
      under: "Bouncy",
      critical: "Critical",
      over: "No bounce",
      settle: "Settles in",
      overshoot: "Overshoot",
    },
    stageLabel: "Sandbox",
    stageHint: "Drag sideways and let go",
    card: "Drag me",
    curveLabel: "Position over the first second",
    reduced: "Reduced motion is on, so the card moves without a spring.",
  },
  materials: {
    kicker: "Lab 02 · Surfaces",
    heading: "Four surfaces",
    intro: "Each surface is CSS only. Pick one to see it, its tokens and the code that draws it.",
    tokensLabel: "Tokens",
    cssLabel: "CSS",
    contrastLabel: "Text contrast",
    sample: "A sample card",
    items: [
      {
        id: "mat",
        name: "Cutting mat",
        use: "Case study heroes and the work section",
        dark: true,
        className: "cutting-mat",
        description: "A 96px major grid over a 24px minor grid, with a ruler along the edge.",
        contrast: "15.1 : 1 chalk on mat · 7.3 : 1 muted text",
        tokens: [
          { name: "mat base", value: "#141416" },
          { name: "--color-chalk", value: "#ede8df" },
          { name: "--color-accent", value: "#d94e34" },
        ],
        css: `.cutting-mat {
  background-color: #141416;
  background-image:
    linear-gradient(rgb(237 232 223 / 0.09) 1px, transparent 1px),
    linear-gradient(90deg, rgb(237 232 223 / 0.09) 1px, transparent 1px),
    linear-gradient(rgb(237 232 223 / 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgb(237 232 223 / 0.035) 1px, transparent 1px);
  background-size: 96px 96px, 96px 96px, 24px 24px, 24px 24px;
}`,
      },
      {
        id: "graph",
        name: "Graph paper",
        use: "Cards and case study sheets",
        dark: false,
        className: "bg-paper-grid",
        description: "Cream paper with a 28px grid, used wherever there is a lot to read.",
        contrast: "15.5 : 1 ink on paper · 11.1 : 1 soft ink on grid line",
        tokens: [
          { name: "--color-paper", value: "#f4efe6" },
          { name: "--color-paper-grid", value: "#e6dec8" },
          { name: "--color-ink", value: "#18181b" },
        ],
        css: `.bg-paper-grid {
  background-color: var(--color-paper);
  background-image:
    linear-gradient(var(--color-paper-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-paper-grid) 1px, transparent 1px);
  background-size: 28px 28px;
}`,
      },
      {
        id: "ruled",
        name: "Ruled paper",
        use: "Notes and beliefs",
        dark: false,
        className: "bg-paper-ruled",
        description: "The same paper with horizontal rules only, for short handwritten-feeling notes.",
        contrast: "15.5 : 1 ink on paper · 13.0 : 1 soft ink",
        tokens: [
          { name: "--color-paper", value: "#f4efe6" },
          { name: "--color-paper-grid", value: "#e6dec8" },
          { name: "--color-ink-soft", value: "#27272a" },
        ],
        css: `.bg-paper-ruled {
  background-color: var(--color-paper);
  background-image: linear-gradient(var(--color-paper-grid) 1px, transparent 1px);
  background-size: 100% 28px;
  background-position: 0 12px;
}`,
      },
      {
        id: "canvas",
        name: "Canvas grid",
        use: "The dark desk behind everything",
        dark: true,
        className: "bg-canvas-grid",
        description: "A quiet 48px grid on near-black. Cyan only ever appears here as faint light.",
        contrast: "15.5 : 1 chalk on canvas · 7.5 : 1 muted text",
        tokens: [
          { name: "--color-canvas", value: "#111111" },
          { name: "--color-canvas-grid", value: "#1e1e22" },
          { name: "--color-chalk-muted", value: "#a3a3a8" },
        ],
        css: `.bg-canvas-grid {
  background-color: var(--color-canvas);
  background-image:
    linear-gradient(var(--color-canvas-grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-canvas-grid) 1px, transparent 1px);
  background-size: 48px 48px;
}`,
      },
    ],
  },
  type: {
    kicker: "Lab 03 · Type",
    heading: "Type tester",
    intro: "Switch typeface, change the size, or type your own line.",
    sizeLabel: "Size",
    inputLabel: "Your text",
    fonts: [
      {
        id: "serif",
        name: "Fraunces",
        role: "Headings",
        className: "font-serif",
        sample: "Design first. Then I build it.",
        details: "A soft, high-contrast serif. It gives headings warmth next to the technical labels.",
      },
      {
        id: "sans",
        name: "Geist",
        role: "Body text",
        className: "font-sans",
        sample: "You brief one person, and I take the project from the first sketch to the live product.",
        details: "A plain, even sans-serif for paragraphs, buttons and anything read at length.",
      },
      {
        id: "mono",
        name: "Geist Mono",
        role: "Labels and numbers",
        className: "font-mono",
        sample: "case-studies / portfolio · 360px → 1280px",
        details: "Fixed-width, so numbers line up and labels read like annotations on a drawing.",
      },
    ],
  },
  limits: {
    eyebrow: "not done yet",
    heading: "What I haven't measured",
    intro: "Being honest about the gaps is part of the same rule.",
    items: [
      "[PLACEHOLDER: Lighthouse scores, once the site is live on Vercel]",
      "There are no automated tests. I check each change by building the site and looking at it at 360px and 1280px wide.",
      "There is no light theme. The site is dark on purpose, with paper cards for reading.",
      "I compared the home pages only. The old site had no case studies, so those pages have nothing to compare against.",
    ],
  },
  cta: {
    heading: "Want a site built like this?",
    body: "I design it and build it. Tell me what you're making.",
    primary: "Email me",
    subject: "A project like your portfolio",
    back: "All case studies",
  },
};

export type PortfolioStudy = typeof portfolioStudy;
