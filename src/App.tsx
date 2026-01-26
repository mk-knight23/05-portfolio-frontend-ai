import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Code2,
  Globe,
  MessageSquare,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  ArrowRight,
  Cpu,
  Layers,
  Zap,
  Shield,
  CheckCircle2
} from 'lucide-react';

// VIBE Ecosystem Data
const vibeProducts = [
  {
    name: 'VIBE CLI',
    tagline: 'Multi-agent AI coding tool',
    description: 'Single-command TUI, multi-LLM router, execution modes (Ask/Code/Debug/Architect/Shell/Agent), security-first approvals, rollback.',
    icon: Terminal,
    status: 'In Development'
  },
  {
    name: 'VIBE VS Code',
    tagline: 'Multi-agent IDE assistant',
    description: 'CLI parity, state-machine orchestration, real-time streaming chat, unified tool system.',
    icon: Code2,
    status: 'Planned'
  },
  {
    name: 'VIBE Web',
    tagline: 'Documentation hub',
    description: 'Documentation and onboarding hub for the entire ecosystem.',
    icon: Globe,
    status: 'Live'
  },
  {
    name: 'VIBE Chat',
    tagline: 'AI website builder',
    description: 'AI web app & website builder powered by generative agents.',
    icon: MessageSquare,
    status: 'Planned'
  }
];

const selectedProjects = [
  {
    name: 'Country Explorer',
    category: 'Web',
    tech: 'React',
    description: 'Country data exploration dashboard'
  },
  {
    name: 'Recipe Finder',
    category: 'Web',
    tech: 'Vue',
    description: 'Recipe discovery application'
  },
  {
    name: 'Meme Generator',
    category: 'Web',
    tech: 'React',
    description: 'Custom meme creation tool'
  },
  {
    name: 'Mini Games',
    category: 'Game',
    tech: 'React',
    description: 'Collection of mini-games'
  }
];

const skillsByCategory = {
  'AI & Agents': ['RAG', 'H-RAG', 'Multi-Agent Systems', 'Tooling', 'LLM Routing'],
  'Developer Platforms': ['CLI Tools', 'VS Code Extensions', 'Automation', 'DX'],
  'Engineering & Stack': ['Python', 'Node.js', 'React', 'TypeScript', 'APIs', 'Cloud'],
  'LLM Ecosystem': ['OpenAI', 'Claude', 'Gemini', 'OpenRouter', 'Ollama']
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const sections = ['hero', 'about', 'vibe', 'work', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight">MK</div>
          <div className="hidden md:flex items-center gap-8">
            {['about', 'vibe', 'work', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`text-sm uppercase tracking-wider transition-colors ${
                  activeSection === section ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <a
            href="https://github.com/mk-knight23"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-indigo-400 font-medium mb-6">AI Engineer & Indie Builder</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              MUSHARRAF <span className="text-slate-600">KAZI</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Building the VIBE Ecosystem — a multi-product AI developer platform focused on
              AI-powered coding workflows, multi-agent orchestration, and production-grade tooling.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollTo('vibe')}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition-all flex items-center gap-2"
              >
                Explore VIBE Ecosystem <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTo('work')}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-xl font-semibold transition-all"
              >
                View Projects
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-slate-600" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About</h2>
            <div className="prose prose-lg text-slate-400">
              <p className="mb-6 leading-relaxed">
                AI Engineer and Indie Product Builder specializing in Agentic AI, Developer Tools,
                Multi-LLM Routing, and SaaS Automation.
              </p>
              <p className="mb-6 leading-relaxed">
                Building the <strong className="text-indigo-400">VIBE Ecosystem</strong> — a multi-product
                AI developer platform (CLI, VS Code Extension, Web SaaS, and Agents) focused on
                AI-powered coding workflows, multi-agent orchestration, and production-grade
                developer tooling.
              </p>
              <p className="leading-relaxed">
                Experienced in <strong className="text-white">system architecture</strong>,
                <strong className="text-white"> product strategy</strong>,
                <strong className="text-white"> execution</strong>,
                <strong className="text-white"> research</strong>, and
                <strong className="text-white"> full-stack implementation</strong>.
                Strong interest in AI Agents, Generative AI, Devtools, Cloud, LLM infrastructure,
                and automation-first platforms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VIBE Ecosystem Section */}
      <section id="vibe" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-sm font-medium mb-4">
              Flagship Project
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">VIBE Ecosystem</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Founder & AI Engineer — A multi-product AI developer platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {vibeProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors">
                    <product.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        product.status === 'Live'
                          ? 'bg-green-500/10 text-green-400'
                          : 'bg-slate-700/50 text-slate-400'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-indigo-400 text-sm mb-3">{product.tagline}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Architecture Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl border border-white/5"
          >
            <h3 className="text-xl font-semibold mb-6">Technical Highlights</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Hierarchical RAG (H-RAG) + Decision Agents + Orchestrator',
                'Multi-provider LLM routing with fallback and evaluation',
                '55-feature roadmap with 4-tier system prompt strategy',
                'Competitive analysis across 60 AI coding tools',
                'Monorepo strategy with ecosystem boundaries',
                'Security-first architecture'
              ].map((highlight, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Projects</h2>
            <p className="text-slate-400 mb-12">A showcase of recent work across web, games, and tools.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {selectedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs">
                    {project.tech}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm">{project.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="https://github.com/mk-knight23?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              View all 60 projects <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-slate-400 mb-12">Core competencies across AI, development, and product.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillsByCategory).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-xl border border-white/5"
              >
                <div className="flex items-center gap-2 mb-4">
                  {category.includes('AI') ? (
                    <Cpu className="w-5 h-5 text-indigo-400" />
                  ) : category.includes('Developer') ? (
                    <Layers className="w-5 h-5 text-indigo-400" />
                  ) : category.includes('LLM') ? (
                    <Zap className="w-5 h-5 text-indigo-400" />
                  ) : (
                    <Shield className="w-5 h-5 text-indigo-400" />
                  )}
                  <h3 className="font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-500/10 text-indigo-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Actively building the VIBE Ecosystem and open to opportunities in AI Engineering,
              Applied AI, Agent Systems, Developer Tools, SaaS Platforms, and Cloud AI roles.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
                <span className="text-slate-400">Location:</span>{' '}
                <span className="text-white">India</span>
              </span>
              <span className="px-4 py-2 bg-slate-800 rounded-full text-sm">
                <span className="text-slate-400">Available:</span>{' '}
                <span className="text-green-400">Remote & Hybrid</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:mk.knight970@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-semibold transition-all"
              >
                <Mail className="w-5 h-5" /> Email Me
              </a>
              <a
                href="https://github.com/mk-knight23"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-semibold transition-all"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-semibold transition-all"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            &copy; 2025 MUSHARRAF KAZI. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Part of a 60-project portfolio ecosystem
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
