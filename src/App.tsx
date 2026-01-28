import { motion } from 'framer-motion';
import {
  Terminal,
  Code2,
  Globe,
  MessageSquare,
  ExternalLink,
  Mail,
  Github,
  Linkedin,
  Phone,
  Heart,
  Star
} from 'lucide-react';

// VIBE Ecosystem Data
const vibeProducts = [
  {
    name: 'VIBE CLI',
    tagline: 'Multi-agent AI coding tool',
    description: 'Single-command TUI, multi-LLM router, execution modes, security-first approvals.',
    icon: Terminal,
    status: 'In Development'
  },
  {
    name: 'VIBE VS Code',
    tagline: 'Multi-agent IDE assistant',
    description: 'CLI parity, state-machine orchestration, real-time streaming chat.',
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
    name: 'AI Chat Interface',
    category: 'Frontend',
    tech: 'React 19',
    description: 'High-performance streaming chat UI for agentic systems'
  },
  {
    name: 'LLM Dashboard',
    category: 'Frontend',
    tech: 'Next.js',
    description: 'Real-time analytics for multi-LLM routing metrics'
  },
  {
    name: 'Prompt Canvas',
    category: 'UI/UX',
    tech: 'TypeScript',
    description: 'Interactive IDE-like experience for prompt engineering'
  },
  {
    name: 'Agent Workflow Designer',
    category: 'Frontend',
    tech: 'React Flow',
    description: 'Visual graph editor for building multi-agent systems'
  }
];

const skillsByCategory = {
  '⚛️ Generative UI': ['React 19', 'Next.js', 'Framer Motion', 'Tailwind v4'],
  '🤖 AI Integration': ['Streaming APIs', 'LLM SDKs', 'OpenRouter', 'Vector DBs'],
  '🛠️ Core Engineering': ['TypeScript', 'Node.js', 'State Management', 'Web Perf'],
  '🧠 AI Workflow': ['Agentic UX', 'Canvas Interfaces', 'Multi-modal', 'Prompts']
};

function App() {
  const lastUpdated = 'January 2025';

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{
      background: '#c0c0c0',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'20\' height=\'20\' fill=\'%23c0c0c0\'/%3E%3Crect width=\'10\' height=\'10\' fill=\'%23b0b0b0\'/%3E%3Crect x=\'10\' y=\'10\' width=\'10\' height=\'10\' fill=\'%23b0b0b0\'/%3E%3C/svg%3E")'
    }}>
      {/* Retro Marquee Banner */}
      <div style={{
        background: '#000080',
        color: '#00ff00',
        padding: '4px',
        fontFamily: '"Courier New", monospace',
        fontSize: '12px',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}>
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'inline-block' }}
        >
          ★★★ WELCOME TO MY HOMEPAGE ★★★ FEATURING VIBE ECOSYSTEM ★★★ 60+ PROJECTS ★★★ AI ENGINEERING ★★★ LAST UPDATED: {lastUpdated} ★★★ ESTABLISHED 2025 ★★★
        </motion.div>
      </div>

      {/* Retro Header */}
      <header style={{
        background: '#800080',
        padding: '20px',
        border: '3px outset #ffffff'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
              fontFamily: '"Times New Roman", serif',
              fontSize: '48px',
              color: '#ffffff',
              textShadow: '3px 3px 0px #000000',
              textAlign: 'center',
              marginBottom: '10px',
              letterSpacing: '2px'
            }}
          >
            Kazi Musharraf
          </motion.h1>
          <p style={{
            fontFamily: '"Courier New", monospace',
            color: '#ffff00',
            textAlign: 'center',
            fontSize: '14px'
          }}>
            ~ Frontend Engineer (AI Products) ~
          </p>
        </div>
      </header>

      {/* Navigation Table */}
      <nav style={{
        background: '#c0c0c0',
        padding: '10px',
        border: '2px inset #808080',
        maxWidth: '800px',
        margin: '20px auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {['about', 'vibe', 'work', 'skills', 'resume', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              style={{
                background: '#c0c0c0',
                border: '2px outset #ffffff',
                padding: '8px 16px',
                fontFamily: '"MS Sans Serif", Arial, sans-serif',
                fontSize: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.1s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#000080';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#c0c0c0';
                e.currentTarget.style.color = '#000000';
              }}
              onFocus={(e) => {
                e.currentTarget.style.background = '#000080';
                e.currentTarget.style.color = '#ffffff';
              }}
              onBlur={(e) => {
                e.currentTarget.style.background = '#c0c0c0';
                e.currentTarget.style.color = '#000000';
              }}
            >
              {section.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '0 10px' }}>
        {/* Hero Section */}
        <section id="hero" style={{
          background: '#ffffff',
          border: '3px outset #ffffff',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <div style={{
            border: '2px inset #808080',
            padding: '20px',
            background: '#ffffcc'
          }}>
            <p style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '14px',
              lineHeight: '1.8',
              color: '#000000',
              textAlign: 'center'
            }}>
              <span style={{ color: '#ff0000', fontWeight: 'bold' }}>»»</span> GREETINGS, NET SURFER! <span style={{ color: '#ff0000', fontWeight: 'bold' }}>««</span>
              <br /><br />
              You have reached the personal homepage of <strong>Musharraf Kazi</strong>.
              I am a <span style={{ background: '#00ff00', padding: '2px 6px' }}>Frontend Engineer</span> specializing in
              AI-powered user interfaces and modern web technologies.
              <br /><br />
              Currently working as <span style={{ color: '#0000ff' }}>Project Engineer (TURBO)</span> at <strong>Wipro</strong>.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
            <button
              onClick={() => scrollTo('vibe')}
              style={{
                background: '#008000',
                color: '#ffffff',
                border: '3px outset #00ff00',
                padding: '10px 20px',
                fontFamily: '"MS Sans Serif", Arial, sans-serif',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              [ ENTER VIBE ]
            </button>
            <button
              onClick={() => scrollTo('work')}
              style={{
                background: '#c0c0c0',
                color: '#000000',
                border: '3px outset #ffffff',
                padding: '10px 20px',
                fontFamily: '"MS Sans Serif", Arial, sans-serif',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              [ VIEW PROJECTS ]
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{
          background: '#ffffff',
          border: '3px outset #ffffff',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: '24px',
            color: '#800080',
            borderBottom: '2px solid #800080',
            paddingBottom: '5px',
            marginBottom: '15px'
          }}>
            ★ ABOUT ME ★
          </h2>
          <div style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '13px',
            lineHeight: '1.8',
            color: '#000000'
          }}>
            <p style={{ marginBottom: '15px' }}>
              &gt; NAME: Kazi Musharraf<br />
              &gt; LOCATION: Hyderabad, India <span style={{ color: '#ff0000' }}>♥</span><br />
              &gt; OCCUPATION: Frontend Engineer @ Wipro<br />
              &gt; SPECIALTY: AI Products / Chat UIs / Real-time<br />
              &gt; STATUS: <span style={{ background: '#00ff00', padding: '0 4px' }}>ONLINE</span>
            </p>
            <p style={{ marginBottom: '10px' }}>
              I build <strong style={{ color: '#0000ff' }}>AI-powered interfaces</strong> and streaming chat systems.
              Currently working on the <span style={{ color: '#ff00ff' }}>VIBE Ecosystem</span> — a multi-product
              AI developer platform.
            </p>
            <p>
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" style={{ border: '1px solid #000000', verticalAlign: 'middle' }} />
              This page is best viewed with <strong>800x600</strong> resolution.
            </p>
          </div>
        </section>

        {/* VIBE Ecosystem Section */}
        <section id="vibe" style={{
          background: '#ffffff',
          border: '3px outset #ffffff',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: '24px',
            color: '#800080',
            borderBottom: '2px solid #800080',
            paddingBottom: '5px',
            marginBottom: '15px'
          }}>
            ★ VIBE ECOSYSTEM ★
          </h2>
          <p style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '12px',
            color: '#ff0000',
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>
            !!! FLAGSHIP PROJECT - UNDER ACTIVE DEVELOPMENT !!!
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '15px'
          }}>
            {vibeProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: product.status === 'Live' ? '#ccffcc' : '#ffffcc',
                  border: '2px inset #808080',
                  padding: '15px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{
                    background: '#c0c0c0',
                    border: '2px inset #808080',
                    padding: '8px'
                  }}>
                    <product.icon style={{ width: 20, height: 20 }} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: '"Times New Roman", serif',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#000080',
                      margin: 0
                    }}>
                      {product.name}
                    </h3>
                    <span style={{
                      fontSize: '10px',
                      padding: '2px 6px',
                      background: product.status === 'Live' ? '#00cc00' : product.status === 'In Development' ? '#ffcc00' : '#cccccc',
                      fontWeight: 'bold'
                    }}>
                      {product.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                <p style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: '11px',
                  color: '#000000',
                  margin: '5px 0'
                }}>
                  <em>{product.tagline}</em>
                </p>
                <p style={{
                  fontFamily: '"Arial", sans-serif',
                  fontSize: '12px',
                  color: '#333333'
                }}>
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Section */}
        <section id="work" style={{
          background: '#ffffff',
          border: '3px outset #ffffff',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: '24px',
            color: '#800080',
            borderBottom: '2px solid #800080',
            paddingBottom: '5px',
            marginBottom: '15px'
          }}>
            ★ PROJECT SHOWCASE ★
          </h2>

          {/* Responsive Card Layout - Mobile Friendly */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px',
            fontFamily: '"Courier New", monospace',
            fontSize: '12px'
          }}>
            {selectedProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: index % 2 === 0 ? '#ffffff' : '#f0f0f0',
                  border: '2px inset #808080',
                  padding: '12px',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{
                    background: '#000080',
                    color: '#ffffff',
                    padding: '2px 6px',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}>
                    #{index + 1}
                  </span>
                  <span style={{
                    background: '#00cc00',
                    padding: '2px 6px',
                    fontSize: '9px'
                  }}>
                    {project.category}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: '"Times New Roman", serif',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#000080',
                  margin: '5px 0'
                }}>
                  {project.name}
                </h3>
                <p style={{ fontSize: '10px', color: '#666666', margin: '5px 0' }}>
                  {project.description}
                </p>
                <p style={{ fontSize: '10px', color: '#0000ff', margin: '5px 0 0 0' }}>
                  <strong>TECH:</strong> {project.tech}
                </p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <a
              href="https://github.com/mk-knight23?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: '#0000ff',
                textDecoration: 'underline',
                fontFamily: '"Courier New", monospace',
                fontSize: '12px'
              }}
            >
              [ CLICK HERE TO VIEW ALL 60+ PROJECTS ] <ExternalLink style={{ width: 14, height: 14 }} />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{
          background: '#ffffff',
          border: '3px outset #ffffff',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: '24px',
            color: '#800080',
            borderBottom: '2px solid #800080',
            paddingBottom: '5px',
            marginBottom: '15px'
          }}>
            ★ SKILLS & EXPERTISE ★
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '15px'
          }}>
            {Object.entries(skillsByCategory).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  background: '#f0f0f0',
                  border: '2px inset #808080',
                  padding: '12px'
                }}
              >
                <h3 style={{
                  fontFamily: '"Times New Roman", serif',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#800080',
                  marginBottom: '10px',
                  textDecoration: 'underline'
                }}>
                  {category}
                </h3>
                <ul style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: '11px',
                  margin: 0,
                  paddingLeft: '20px',
                  color: '#000000'
                }}>
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" style={{
          background: '#ffffff',
          border: '3px outset #ffffff',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: '24px',
            color: '#800080',
            borderBottom: '2px solid #800080',
            paddingBottom: '5px',
            marginBottom: '15px'
          }}>
            ★ RESUME ★
          </h2>
          <p style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '13px',
            color: '#000080',
            marginBottom: '15px',
            fontWeight: 'bold'
          }}>
            Frontend Engineer for AI Products
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {/* Main Content */}
            <div style={{ gridColumn: '1 / -1' }}>
              {/* Experience */}
              <div style={{
                background: '#ffffcc',
                border: '2px inset #808080',
                padding: '15px',
                marginBottom: '15px'
              }}>
                <h3 style={{
                  fontFamily: '"Times New Roman", serif',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#000080',
                  marginBottom: '10px',
                  textDecoration: 'underline'
                }}>
                  EXPERIENCE
                </h3>
                <div style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: '12px',
                  lineHeight: '1.6'
                }}>
                  <p style={{ marginBottom: '10px' }}>
                    <strong>Project Engineer (TURBO)</strong> — <span style={{ color: '#ff0000' }}>Jul 2022 – Present</span><br />
                    <span style={{ color: '#0000ff' }}>Wipro</span>
                  </p>
                  <p style={{ margin: 0, color: '#333333' }}>
                    Building AI-powered frontend interfaces with React 19, Next.js, and TypeScript.
                    Working on LLM integration, streaming chat UIs, and agentic systems. Shipped 80+
                    projects including generative UI components and real-time collaboration tools.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div style={{
                background: '#ffffcc',
                border: '2px inset #808080',
                padding: '15px',
                marginBottom: '15px'
              }}>
                <h3 style={{
                  fontFamily: '"Times New Roman", serif',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#000080',
                  marginBottom: '10px',
                  textDecoration: 'underline'
                }}>
                  EDUCATION
                </h3>
                <div style={{
                  fontFamily: '"Courier New", monospace',
                  fontSize: '12px'
                }}>
                  <p style={{ margin: 0 }}>
                    <strong>B.Tech Computer Science & Engineering</strong> — 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{
              background: '#f0f0f0',
              border: '2px inset #808080',
              padding: '15px'
            }}>
              <h3 style={{
                fontFamily: '"Times New Roman", serif',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#800080',
                marginBottom: '10px',
                textDecoration: 'underline'
              }}>
                TECH STACK
              </h3>
              <div style={{ fontFamily: '"Courier New", monospace', fontSize: '11px' }}>
                <p style={{ marginBottom: '8px', fontWeight: 'bold', color: '#000080' }}>Frontend:</p>
                <p style={{ marginBottom: '12px', margin: '0 0 12px 10px' }}>React 19 • Next.js • TypeScript • Tailwind v4</p>

                <p style={{ marginBottom: '8px', fontWeight: 'bold', color: '#000080' }}>AI / LLM:</p>
                <p style={{ marginBottom: '12px', margin: '0 0 12px 10px' }}>OpenAI • Claude • LangChain • RAG • Vector DBs</p>

                <p style={{ marginBottom: '8px', fontWeight: 'bold', color: '#000080' }}>Tools:</p>
                <p style={{ margin: '0 0 0 10px' }}>Framer Motion • Vite • Git • Vercel</p>
              </div>
            </div>

            {/* Connect */}
            <div style={{
              background: '#f0f0f0',
              border: '2px inset #808080',
              padding: '15px'
            }}>
              <h3 style={{
                fontFamily: '"Times New Roman", serif',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#800080',
                marginBottom: '10px',
                textDecoration: 'underline'
              }}>
                CONNECT
              </h3>
              <div style={{ fontFamily: '"Courier New", monospace', fontSize: '11px' }}>
                <a href="https://github.com/mk-knight23" target="_blank" rel="noopener"
                   style={{ color: '#0000ff', textDecoration: 'underline', display: 'block', marginBottom: '8px' }}>
                  github.com/mk-knight23
                </a>
                <a href="https://www.linkedin.com/in/kazi-musharraf-0674871a4" target="_blank" rel="noopener"
                   style={{ color: '#0000ff', textDecoration: 'underline', display: 'block' }}>
                  linkedin.com/in/kazi-musharraf
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What I'll Build Section */}
        <section id="what-ill-build" style={{
          background: '#ffffff',
          border: '3px outset #ffffff',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <p style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '11px',
            padding: '4px 8px',
            background: '#ffcc00',
            color: '#000000',
            fontWeight: 'bold',
            display: 'inline-block',
            marginBottom: '10px'
          }}>
            IF YOU HIRE ME
          </p>
          <h2 style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: '24px',
            color: '#800080',
            borderBottom: '2px solid #800080',
            paddingBottom: '5px',
            marginBottom: '15px'
          }}>
            ★ WHAT I’LL WORK ON ★
          </h2>
          <p style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '12px',
            color: '#333333',
            marginBottom: '15px'
          }}>
            First 3–6 months as your Frontend Engineer for AI Products
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '15px'
          }}>
            <div style={{
              background: '#ffffff',
              border: '2px inset #808080',
              padding: '12px'
            }}>
              <div style={{
                background: '#000080',
                color: '#ffffff',
                padding: '4px 8px',
                fontSize: '11px',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '8px'
              }}>
                MONTH 1-2
              </div>
              <h3 style={{
                fontFamily: '"Times New Roman", serif',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#000080',
                margin: '5px 0'
              }}>
                AI Interface Foundation
              </h3>
              <p style={{ fontSize: '11px', color: '#333333', margin: '5px 0' }}>
                Build streaming chat UIs, LLM response handlers, and loading states.
                Create reusable components for AI interactions with proper error handling.
              </p>
            </div>

            <div style={{
              background: '#f0f0f0',
              border: '2px inset #808080',
              padding: '12px'
            }}>
              <div style={{
                background: '#000080',
                color: '#ffffff',
                padding: '4px 8px',
                fontSize: '11px',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '8px'
              }}>
                MONTH 2-3
              </div>
              <h3 style={{
                fontFamily: '"Times New Roman", serif',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#000080',
                margin: '5px 0'
              }}>
                Agentic Workflows
              </h3>
              <p style={{ fontSize: '11px', color: '#333333', margin: '5px 0' }}>
                Implement multi-step agent UIs, progress indicators, and state management.
                Build visual feedback for long-running AI operations.
              </p>
            </div>

            <div style={{
              background: '#ffffff',
              border: '2px inset #808080',
              padding: '12px'
            }}>
              <div style={{
                background: '#000080',
                color: '#ffffff',
                padding: '4px 8px',
                fontSize: '11px',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '8px'
              }}>
                MONTH 3-4
              </div>
              <h3 style={{
                fontFamily: '"Times New Roman", serif',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#000080',
                margin: '5px 0'
              }}>
                Performance & Scale
              </h3>
              <p style={{ fontSize: '11px', color: '#333333', margin: '5px 0' }}>
                Optimize for streaming performance, implement caching, and reduce latency.
                Ensure smooth UX under high-concurrency scenarios.
              </p>
            </div>

            <div style={{
              background: '#f0f0f0',
              border: '2px inset #808080',
              padding: '12px'
            }}>
              <div style={{
                background: '#000080',
                color: '#ffffff',
                padding: '4px 8px',
                fontSize: '11px',
                fontWeight: 'bold',
                display: 'inline-block',
                marginBottom: '8px'
              }}>
                MONTH 4-6
              </div>
              <h3 style={{
                fontFamily: '"Times New Roman", serif',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#000080',
                margin: '5px 0'
              }}>
                Production Features
              </h3>
              <p style={{ fontSize: '11px', color: '#333333', margin: '5px 0' }}>
                Add analytics, A/B testing for AI prompts, and monitoring.
                Build admin dashboards for prompt management and performance tracking.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{
          background: '#ffffff',
          border: '3px outset #ffffff',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <h2 style={{
            fontFamily: '"Times New Roman", serif',
            fontSize: '24px',
            color: '#800080',
            borderBottom: '2px solid #800080',
            paddingBottom: '5px',
            marginBottom: '15px'
          }}>
            ★ GUESTBOOK / CONTACT ★
          </h2>

          <div style={{
            background: '#ffffcc',
            border: '2px inset #808080',
            padding: '15px',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '13px',
              marginBottom: '15px'
            }}>
              Want to get in touch? Feel free to reach out!
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="mailto:mk.knight970@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: '#008000',
                  color: '#ffffff',
                  border: '3px outset #00ff00',
                  padding: '8px 16px',
                  textDecoration: 'none',
                  fontFamily: '"MS Sans Serif", Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                <Mail style={{ width: 14, height: 14 }} /> EMAIL ME
              </a>
              <a
                href="https://github.com/mk-knight23"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: '#c0c0c0',
                  color: '#000000',
                  border: '3px outset #ffffff',
                  padding: '8px 16px',
                  textDecoration: 'none',
                  fontFamily: '"MS Sans Serif", Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                <Github style={{ width: 14, height: 14 }} /> GITHUB
              </a>
              <a
                href="tel:+919765490536"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: '#008080',
                  color: '#ffffff',
                  border: '3px outset #00ffff',
                  padding: '8px 16px',
                  textDecoration: 'none',
                  fontFamily: '"MS Sans Serif", Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                <Phone style={{ width: 14, height: 14 }} /> CALL
              </a>
              <a
                href="https://www.linkedin.com/in/kazi-musharraf-0674871a4"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: '#c0c0c0',
                  color: '#000000',
                  border: '3px outset #ffffff',
                  padding: '8px 16px',
                  textDecoration: 'none',
                  fontFamily: '"MS Sans Serif", Arial, sans-serif',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                <Linkedin style={{ width: 14, height: 14 }} /> LINKEDIN
              </a>
            </div>

            <p style={{
              fontFamily: '"Courier New", monospace',
              fontSize: '11px',
              marginTop: '15px',
              color: '#666666'
            }}>
              📍 Hyderabad, India | 💼 Remote & Hybrid
            </p>
          </div>
        </section>

        {/* Hit Counter Badge - Now retro-styled as decor */}
        <div style={{
          background: '#000000',
          color: '#00ff00',
          padding: '8px',
          textAlign: 'center',
          border: '3px inset #333333',
          marginBottom: '20px',
          fontSize: '10px'
        }}>
          <p style={{
            fontFamily: '"Courier New", monospace',
            fontSize: '10px',
            margin: 0,
            opacity: 0.6
          }}>
            ★★ ESTABLISHED 2025 ★★
          </p>
        </div>
      </main>

      {/* Retro Footer */}
      <footer style={{
        background: '#800080',
        color: '#ffffff',
        padding: '20px',
        border: '3px inset #808080',
        textAlign: 'center'
      }}>
        <p style={{
          fontFamily: '"Courier New", monospace',
          fontSize: '12px',
          margin: '5px 0'
        }}>
          © 2025 Kazi Musharraf
        </p>
        <p style={{
          fontFamily: '"Courier New", monospace',
          fontSize: '11px',
          margin: '5px 0'
        }}>
          Made with <Heart style={{ width: 12, height: 12, display: 'inline', color: '#ff0000' }} /> and lots of coffee
        </p>
        <p style={{
          fontFamily: '"Courier New", monospace',
          fontSize: '10px',
          margin: '10px 0 0 0',
          opacity: 0.8
        }}>
          <Star style={{ width: 10, height: 10, display: 'inline' }} />
          Part of a 60-project portfolio ecosystem
          <Star style={{ width: 10, height: 10, display: 'inline' }} />
        </p>
        <div style={{ marginTop: '15px' }}>
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='88' height='31'%3E%3Crect fill='%23c0c0c0' width='88' height='31'/%3E%3Ctext x='44' y='20' text-anchor='middle' font-family='Arial' font-size='10' fill='%23000080'%3EBEST VIEWED%3C/text%3E%3C/svg%3E"
            alt="Best viewed with Netscape Navigator"
            style={{ border: '1px solid #ffffff' }}
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
