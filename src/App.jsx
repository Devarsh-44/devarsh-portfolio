import { motion } from "framer-motion";

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certs", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "AI Chatbot Assistant",
    period: "Oct 2024 – Dec 2024",
    description:
      "AI-powered chatbot with intent recognition and entity extraction; modular Python backend; real-time Q&A UI.",
    stack: ["Python", "spaCy", "NLTK", "FastAPI"],
    links: { github: "https://github.com/Devarsh-44/chatbot" },
  },
  {
    title: "F1 Race Performance Dashboard",
    period: "Jan 2025 – Feb 2025",
    description:
      "Streamlit + FastF1 dashboard for lap-by-lap analysis, telemetry, filters by race/team/driver, and visuals for laps & sectors.",
    stack: ["Python", "Streamlit", "FastF1", "Pandas", "Matplotlib"],
    links: { github: "https://github.com/Devarsh-44/FastF1" },
  },
  {
    title: "F1 Telemetry Simulator",
    period: "Feb 2025 – Mar 2025",
    description:
      "Simulates real-time telemetry playback (speed, gears, throttle, braking) with lap selection and driver comparisons.",
    stack: ["Python", "FastF1"],
    links: { github: "https://github.com/Devarsh-44/F1Sim" },
  },
];

const EXPERIENCE = [
  {
    role: "Orientation Leader",
    company: "Algoma University",
    location: "Brampton, ON",
    period: "Aug 2023 – Present",
    bullets: [
      "Guided new students through academic orientation and course selection.",
      "Fielded student queries; led events and workshops to boost engagement.",
    ],
  },
  {
    role: "IT Support Intern",
    company: "National Tech Solutions",
    location: "Ahmedabad, India",
    period: "Sept 2022 – Feb 2023",
    bullets: [
      "Troubleshot portal authentication/access issues and escalated complex cases.",
      "Created and maintained IT asset documentation and procedures.",
    ],
  },
];

const SKILLS = {
  Languages: ["Python", "Java", "C++", "SQL"],
  "Libraries/Tools": [
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "FastF1",
    "Streamlit",
    "Matplotlib",
    "Git",
  ],
  "AI/ML": ["spaCy", "NLTK", "Keras", "TensorFlow", "PyTorch", "Transformers"],
  Other: ["UI/UX Design", "Database Management", "Digital Marketing"],
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/* ================= HEADER ================= */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-10 h-16">
        <a href="/" className="font-semibold tracking-tight text-brand-800">
          Devarsh Kotak
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                className="hover:text-brand-700 transition"
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* New Chat Nav Item */}
          <li>
            <a
              href="https://huggingface.co/spaces/Devarsh44/career_conversation"
              className="hover:text-brand-700 transition"
            >
              Chat
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <a
            className="btn btn-outline"
            href="https://www.linkedin.com/in/devarsh-kotak/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="btn btn-primary"
            href="/Devarsh_Kotak_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="section grid md:grid-cols-2 gap-10 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="space-y-5"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-sm text-brand-700 ring-1 ring-brand-100">
          <span>AI • Backend • F1 Analytics</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-slate-900">
          Hi, Myself Devarsh Kotak
        </h1>
        <p className="text-slate-600">
          Computer Science student passionate about AI, Data Visualization, and
          Backend Development. I craft user-centric tools that turn data into
          decisions.
        </p>
        <div className="flex flex-wrap gap-3">
          <a className="btn btn-primary" href="#projects">
            See Projects
          </a>
          {/* ✅ Direct link to Hugging Face chatbot */}
          <a
            className="btn btn-outline"
            href="https://huggingface.co/spaces/Devarsh44/career_conversation"
            target="_blank"
            rel="noreferrer"
          >
            Chat with my AI
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="card p-8"
      >
        <h3 className="text-lg font-semibold mb-3 text-slate-800">
          Quick Stats
        </h3>
        <ul className="grid grid-cols-2 gap-4 text-sm">
          <li className="card p-4">
            <p className="text-slate-500">Location</p>
            <p className="font-medium">Brampton, ON</p>
          </li>
          <li className="card p-4">
            <p className="text-slate-500">Primary Stack</p>
            <p className="font-medium">Python • ML • Streamlit</p>
          </li>
          <li className="card p-4">
            <p className="text-slate-500">Interests</p>
            <p className="font-medium">Fintech • AI • Motorsports</p>
          </li>
          <li className="card p-4">
            <p className="text-slate-500">Availability</p>
            <p className="font-medium">Open for oppertunities</p>
          </li>
        </ul>
      </motion.div>
    </section>
  );
}

function SectionTitle({ id, title, subtitle }) {
  return (
    <div id={id} className="mb-10">
      <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="text-slate-600 mt-2">{subtitle}</p>}
    </div>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section id="about" className="section">
      <SectionTitle title="About" />
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <p className="text-slate-700 leading-7">
            I’m a Computer Science student with a strong passion for Artificial
            Intelligence, Data Visualization, and Backend Development. Skilled
            in Python, machine learning, and full-stack project delivery, I
            specialize in building AI chatbots, dynamic dashboards, and
            real-time simulators. My experience spans NLP, data analysis, and
            UI/UX design — focused on delivering high-quality, user-centric
            solutions.
          </p>
          <p className="text-slate-700 leading-7 mt-4">
            Beyond academics, I’ve worked as an IT Support Intern and
            Orientation Leader, developing problem-solving, communication, and
            leadership skills. I want to apply AI and data-driven solutions to
            transform fintech, healthcare, and motorsports analytics.
          </p>
        </div>
        <div className="card p-6 space-y-3">
          <p className="font-semibold text-slate-800">Core Focus</p>
          <div className="flex flex-wrap gap-2">
            {[
              "AI Chatbots",
              "Data Viz",
              "Telemetry",
              "APIs",
              "UX",
              "Automation",
              "Full-Stack",
            ].map((x) => (
              <span key={x} className="chip">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= PROJECTS ================= */
function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle
        title="Projects"
        subtitle="Selected work across AI, data, and motorsport analytics."
      />
      <div className="space-y-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <h3 className="text-xl font-semibold text-slate-900">
                {p.title}
              </h3>
              <span className="text-sm text-slate-500">{p.period}</span>
            </div>
            <p className="mt-2 text-slate-700">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              {p.links.github && (
                <a
                  className="btn btn-outline"
                  href={p.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
              {p.links.demo && (
                <a
                  className="btn btn-primary"
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* ================= EXPERIENCE ================= */
function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle title="Experience" />
      <div className="grid gap-6">
        {EXPERIENCE.map((e) => (
          <div key={e.role} className="card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {e.role} — {e.company}
                </h3>
                <p className="text-sm text-slate-600">{e.location}</p>
              </div>
              <span className="text-sm text-slate-500">{e.period}</span>
            </div>
            <ul className="list-disc pl-4 mt-3 text-slate-700 space-y-1">
              {e.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= SKILLS ================= */
function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle title="Skills" />
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([cat, items]) => (
          <div key={cat} className="card p-6">
            <h4 className="font-semibold text-slate-900">{cat}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((x) => (
                <span key={x} className="chip">
                  {x}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= CERTIFICATIONS ================= */
function Certs() {
  return (
    <section id="certs" className="section">
      <SectionTitle title="Certifications" />
      <div className="card p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-slate-900">
              IBM Generative AI & Deep Learning Specialization — Coursera
            </p>
            <p className="text-sm text-slate-600">Apr 2025 – Present</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle
        title="Get in touch"
        subtitle="Open for oppertunities, collabs, and cool ideas."
      />
      <div className="card p-6 grid sm:grid-cols-2 gap-6">
        <div>
          <p className="text-slate-700">
            The fastest way to reach me is via LinkedIn. For longer messages,
            email works great.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="btn btn-primary"
              href="https://www.linkedin.com/in/devarsh-kotak/"
              target="_blank"
              rel="noreferrer"
            >
              Message on LinkedIn
            </a>
            <a className="btn btn-outline" href="kotakdevarsh0@gmail.com">
              Email Me
            </a>
          </div>
        </div>
        <div>
          <p className="font-medium text-slate-800">Location</p>
          <p className="text-slate-600">Brampton, ON</p>
          <p className="font-medium text-slate-800 mt-4">Resume</p>
          <a
            className="text-brand-700 underline"
            href="/Devarsh_Kotak_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download my resume
          </a>
        </div>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 text-sm text-slate-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Devarsh Kotak</p>
        <div className="flex items-center gap-4">
          <a
            className="hover:text-brand-700"
            href="https://www.linkedin.com/in/devarsh-kotak/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-brand-700"
            href="https://github.com/Devarsh-44"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:text-brand-700"
            href="mailto:kotakdevarsh0@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
