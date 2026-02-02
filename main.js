/**
 * AI Lab Portfolio - Main JavaScript
 * Neural network animation, project filtering, and interactions
 */

// ============================================
// Project Data - All 60 Projects
// ============================================
const projectsData = [
  // Portfolios (8)
  { id: 1, name: "DevTools Portfolio", category: "portfolio", description: "Brutalist terminal-inspired portfolio showcasing CLI tools", tech: "React, Terminal UI", url: "https://github.com/mk-knight23/01-portfolio-devtools" },
  { id: 2, name: "Fullstack Portfolio", category: "portfolio", description: "Product-led SaaS portfolio with dashboard elements", tech: "React, Metrics", url: "https://github.com/mk-knight23/02-portfolio-fullstack" },
  { id: 3, name: "Frontend Portfolio", category: "portfolio", description: "Motion-first visual portfolio with scroll animations", tech: "React, Framer Motion", url: "https://github.com/mk-knight23/03-portfolio-frontend" },
  { id: 4, name: "Backend Portfolio", category: "portfolio", description: "Editorial text-focused portfolio for API documentation", tech: "React, Markdown", url: "https://github.com/mk-knight23/04-portfolio-backend" },
  { id: 5, name: "AI Portfolio", category: "portfolio", description: "Futuristic AI lab portfolio with neural animations", tech: "HTML5, Canvas", url: "https://github.com/mk-knight23/05-portfolio-frontend-ai" },
  { id: 6, name: "Senior Frontend Portfolio", category: "portfolio", description: "Swiss minimal portfolio with grid-based layouts", tech: "React, Tailwind", url: "https://github.com/mk-knight23/06-portfolio-senior-frontend" },
  { id: 7, name: "Indie SaaS Portfolio", category: "portfolio", description: "Indie hacker portfolio with authentic storytelling", tech: "React, Blog", url: "https://github.com/mk-knight23/07-portfolio-indie-saas" },
  { id: 8, name: "AI Automation Portfolio", category: "portfolio", description: "Systems-focused portfolio with flow visualizations", tech: "React, Diagrams", url: "https://github.com/mk-knight23/08-portfolio-ai-automation" },

  // Web Projects (11)
  { id: 9, name: "Geographic Explorer", category: "web", description: "Interactive maps with location search and visualization", tech: "React, Mapbox", url: "https://github.com/mk-knight23/09-web-geographic-explorer" },
  { id: 10, name: "Time Display", category: "web", description: "Beautiful time visualization with multiple formats", tech: "React, Canvas", url: "https://github.com/mk-knight23/10-web-time-display" },
  { id: 11, name: "Keyboard Practice", category: "web", description: "Touch typing trainer with progress tracking", tech: "React, TypeScript", url: "https://github.com/mk-knight23/11-web-keyboard-practice" },
  { id: 12, name: "Editorial Blog", category: "web", description: "Content-focused blog with reading experience", tech: "React, MDX", url: "https://github.com/mk-knight23/12-web-editorial-blog" },
  { id: 13, name: "Brutalist Content", category: "web", description: "Raw, unpolished content presentation style", tech: "HTML, CSS", url: "https://github.com/mk-knight23/13-web-brutalist-content" },
  { id: 14, name: "AI Research Hub", category: "web", description: "LLM research platform with experiment tracking", tech: "React, Python", url: "https://github.com/mk-knight23/14-web-ai-research" },
  { id: 15, name: "Luxury Boutique", category: "web", description: "High-end e-commerce with premium aesthetics", tech: "React, Stripe", url: "https://github.com/mk-knight23/15-web-luxury-boutique" },
  { id: 16, name: "Editorial Layouts", category: "web", description: "Magazine-style layouts with typography focus", tech: "React, CSS Grid", url: "https://github.com/mk-knight23/16-web-editorial-layouts" },
  { id: 17, name: "Culinary Discovery", category: "web", description: "Recipe platform with AI-powered recommendations", tech: "React, API", url: "https://github.com/mk-knight23/17-web-culinary-discovery" },
  { id: 18, name: "Atmospheric Dashboard", category: "web", description: "Weather dashboard with beautiful visualizations", tech: "React, D3", url: "https://github.com/mk-knight23/18-web-atmospheric-dashboard" },
  { id: 19, name: "Viral Creator Studio", category: "web", description: "AI-assisted content creation and templates", tech: "React, html2canvas", url: "https://github.com/mk-knight23/19-web-viral-creator" },
  { id: 20, name: "Career Navigator", category: "web", description: "Job search platform with skill matching", tech: "React, Node.js", url: "https://github.com/mk-knight23/20-web-career-navigator" },
  { id: 21, name: "Enterprise Input", category: "web", description: "Advanced form components for enterprise", tech: "React, Formik", url: "https://github.com/mk-knight23/21-web-enterprise-input" },
  { id: 22, name: "Professional Showcase", category: "web", description: "Portfolio template for professionals", tech: "React, Tailwind", url: "https://github.com/mk-knight23/22-web-professional-showcase" },
  { id: 23, name: "Financial Printing", category: "web", description: "Invoice and receipt generator", tech: "React, PDF", url: "https://github.com/mk-knight23/23-web-financial-printing" },
  { id: 24, name: "Sketch Studio", category: "web", description: "Drawing application with canvas tools", tech: "React, Canvas API", url: "https://github.com/mk-knight23/24-web-sketch-studio" },

  // Games (10)
  { id: 25, name: "Neon Highway", category: "game", description: "Retro racing game with neon aesthetics", tech: "React, Canvas", url: "https://github.com/mk-knight23/25-game-neon-highway" },
  { id: 26, name: "Retro Vault", category: "game", description: "Classic arcade game collection", tech: "JavaScript, Canvas", url: "https://github.com/mk-knight23/26-game-retro-vault" },
  { id: 27, name: "World Net", category: "game", description: "Global strategy game with multiplayer", tech: "React, Socket.io", url: "https://github.com/mk-knight23/27-game-world-net" },
  { id: 28, name: "Squid Net", category: "game", description: "Survival game inspired by popular series", tech: "React, Node.js", url: "https://github.com/mk-knight23/28-game-squid-net" },
  { id: 29, name: "Snake Net", category: "game", description: "Modern take on classic snake game", tech: "React, TypeScript", url: "https://github.com/mk-knight23/29-game-snake-net" },
  { id: 30, name: "Dragon Surge", category: "game", description: "AI-enhanced fantasy adventure game", tech: "Vue, Canvas API", url: "https://github.com/mk-knight23/30-game-dragon-surge" },
  { id: 31, name: "Maze Net", category: "game", description: "Procedural maze generator with solver", tech: "React, Algorithms", url: "https://github.com/mk-knight23/31-game-maze-net" },
  { id: 32, name: "Flux Arcade", category: "game", description: "Arcade-style shooter with power-ups", tech: "React, Canvas", url: "https://github.com/mk-knight23/32-game-flux-arcade" },
  { id: 33, name: "Aptitude Nexus", category: "game", description: "Brain training with cognitive tests", tech: "React, Recharts", url: "https://github.com/mk-knight23/33-game-aptitude-nexus" },
  { id: 34, name: "Sigma Nexus", category: "game", description: "Strategic game with AI analytics", tech: "React, Zustand", url: "https://github.com/mk-knight23/34-game-sigma-nexus" },

  // Tools (12)
  { id: 35, name: "QuizFlow AI", category: "tool", description: "PDF quiz generator with AI extraction", tech: "React, PDF.js", url: "https://github.com/mk-knight23/35-tool-quizflow-pdf-quiz-generator" },
  { id: 36, name: "VaultPass", category: "tool", description: "Secure password generator and manager", tech: "React, Crypto", url: "https://github.com/mk-knight23/36-tool-vaultpass-secure-password-generator" },
  { id: 37, name: "Voice Synthesis Studio", category: "tool", description: "Text-to-speech with voice selection", tech: "Vue, Web Speech", url: "https://github.com/mk-knight23/37-tool-text-to-speech" },
  { id: 38, name: "Firebase File Uploader", category: "tool", description: "Secure file upload with Firebase", tech: "React, Firebase", url: "https://github.com/mk-knight23/38-tool-firebase-file-uploader" },
  { id: 39, name: "Firebase Image Uploader", category: "tool", description: "Image upload with preview and resize", tech: "React, Firebase", url: "https://github.com/mk-knight23/39-tool-firebase-image-uploader" },
  { id: 40, name: "React Image Uploader", category: "tool", description: "Drag-and-drop image upload component", tech: "React, Dropzone", url: "https://github.com/mk-knight23/40-tool-react-image-uploader" },
  { id: 41, name: "Firebase Auth", category: "tool", description: "Authentication system with Firebase", tech: "React, Firebase Auth", url: "https://github.com/mk-knight23/41-tool-firebase-auth" },
  { id: 42, name: "Facebook Login UI", category: "tool", description: "Social login component library", tech: "React, OAuth", url: "https://github.com/mk-knight23/42-tool-facebook-login-ui" },
  { id: 43, name: "Agency Website Clone", category: "tool", description: "Clone of popular agency websites", tech: "React, Tailwind", url: "https://github.com/mk-knight23/43-tool-agency-website-clone" },
  { id: 44, name: "GitHub Desktop Guide", category: "tool", description: "Interactive Git workflow tutorial", tech: "React, MDX", url: "https://github.com/mk-knight23/44-tool-github-desktop-guide" },

  // Starters (15)
  { id: 45, name: "React Vercel Starter", category: "starter", description: "Optimized React template for Vercel", tech: "React, Vercel", url: "https://github.com/mk-knight23/45-starter-react-vercel" },
  { id: 46, name: "Ionic React Starter", category: "starter", description: "Mobile app starter with Ionic", tech: "Ionic, React", url: "https://github.com/mk-knight23/46-starter-ionic-react" },
  { id: 47, name: "Django Starter", category: "starter", description: "Full-stack Django template", tech: "Django, Python", url: "https://github.com/mk-knight23/47-starter-django" },
  { id: 48, name: "Flask Starter", category: "starter", description: "Lightweight Flask application template", tech: "Flask, Python", url: "https://github.com/mk-knight23/48-starter-flask" },
  { id: 49, name: "JAMstack Blog", category: "starter", description: "Static blog with headless CMS", tech: "Next.js, CMS", url: "https://github.com/mk-knight23/49-starter-jamstack-blog" },
  { id: 50, name: "React Boilerplate", category: "starter", description: "Production-ready React setup", tech: "React, TypeScript", url: "https://github.com/mk-knight23/50-starter-react-boilerplate" },
  { id: 51, name: "CodeSandbox Starter", category: "starter", description: "Template for CodeSandbox projects", tech: "React, ES6", url: "https://github.com/mk-knight23/51-starter-codesandbox" },
  { id: 52, name: "Hugo Blog", category: "starter", description: "Fast static blog with Hugo", tech: "Hugo, Go", url: "https://github.com/mk-knight23/52-starter-hugo-blog" },
  { id: 53, name: "Docusaurus Docs", category: "starter", description: "Documentation site template", tech: "Docusaurus, React", url: "https://github.com/mk-knight23/53-starter-docusaurus-docs" },
  { id: 54, name: "Gatsby Blog", category: "starter", description: "GraphQL-powered blog starter", tech: "Gatsby, GraphQL", url: "https://github.com/mk-knight23/54-starter-gatsby-blog" },
  { id: 55, name: "Angular Web Starter", category: "starter", description: "Enterprise Angular template", tech: "Angular, TypeScript", url: "https://github.com/mk-knight23/55-starter-angular-web" },
  { id: 56, name: "Electron Desktop", category: "starter", description: "Cross-platform desktop app starter", tech: "Electron, React", url: "https://github.com/mk-knight23/56-starter-electron-desktop" },
  { id: 57, name: "Python Practice", category: "starter", description: "Python learning exercises", tech: "Python", url: "https://github.com/mk-knight23/57-starter-python-practice" },
  { id: 58, name: "Python Examples", category: "starter", description: "Collection of Python code samples", tech: "Python", url: "https://github.com/mk-knight23/58-starter-python-examples" },
  { id: 59, name: "Repo Demo", category: "starter", description: "Git workflow demonstration repo", tech: "Git, Markdown", url: "https://github.com/mk-knight23/59-starter-repo-demo" },
  { id: 60, name: "CADWork Internship", category: "starter", description: "CAD and engineering project template", tech: "CAD, Documentation", url: "https://github.com/mk-knight23/60-starter-cadwork-internship" }
];

// ============================================
// Neural Network Background Animation
// ============================================
class NeuralNetwork {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.nodes = [];
    this.connections = [];
    this.mouse = { x: null, y: null };
    this.animationId = null;

    this.config = {
      nodeCount: 60,
      connectionDistance: 150,
      nodeSpeed: 0.3,
      nodeRadius: { min: 2, max: 4 },
      colors: {
        node: 'rgba(139, 92, 246, 0.6)',
        connection: 'rgba(139, 92, 246, 0.15)',
        mouse: 'rgba(6, 182, 212, 0.8)'
      }
    };

    this.init();
  }

  init() {
    this.resize();
    this.createNodes();
    this.addEventListeners();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createNodes() {
    this.nodes = [];
    for (let i = 0; i < this.config.nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.config.nodeSpeed,
        vy: (Math.random() - 0.5) * this.config.nodeSpeed,
        radius: Math.random() * (this.config.nodeRadius.max - this.config.nodeRadius.min) + this.config.nodeRadius.min
      });
    }
  }

  addEventListeners() {
    window.addEventListener('resize', () => this.resize());

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  updateNodes() {
    this.nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;

      // Keep in bounds
      node.x = Math.max(0, Math.min(this.canvas.width, node.x));
      node.y = Math.max(0, Math.min(this.canvas.height, node.y));
    });
  }

  drawConnections() {
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx = this.nodes[i].x - this.nodes[j].x;
        const dy = this.nodes[i].y - this.nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.connectionDistance) {
          const opacity = (1 - distance / this.config.connectionDistance) * 0.15;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
          this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
          this.ctx.stroke();
        }
      }

      // Mouse connections
      if (this.mouse.x && this.mouse.y) {
        const dx = this.nodes[i].x - this.mouse.x;
        const dy = this.nodes[i].y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.connectionDistance * 1.5) {
          const opacity = (1 - distance / (this.config.connectionDistance * 1.5)) * 0.3;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
          this.ctx.lineWidth = 1.5;
          this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.stroke();
        }
      }
    }
  }

  drawNodes() {
    this.nodes.forEach(node => {
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = this.config.colors.node;
      this.ctx.fill();

      // Glow effect
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(139, 92, 246, 0.1)';
      this.ctx.fill();
    });

    // Draw mouse node
    if (this.mouse.x && this.mouse.y) {
      this.ctx.beginPath();
      this.ctx.arc(this.mouse.x, this.mouse.y, 6, 0, Math.PI * 2);
      this.ctx.fillStyle = this.config.colors.mouse;
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.arc(this.mouse.x, this.mouse.y, 15, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(6, 182, 212, 0.2)';
      this.ctx.fill();
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.updateNodes();
    this.drawConnections();
    this.drawNodes();

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
}

// ============================================
// Project Filtering
// ============================================
class ProjectFilter {
  constructor() {
    this.grid = document.getElementById('projects-grid');
    this.filters = document.querySelectorAll('.projects-filter');
    this.currentFilter = 'all';

    this.init();
  }

  init() {
    this.renderProjects();
    this.addEventListeners();
  }

  renderProjects() {
    this.grid.innerHTML = projectsData.map(project => `
      <article class="project-card" data-category="${project.category}">
        <div class="project-card-header">
          <h3 class="project-card-title">${project.name}</h3>
          <span class="project-card-category">${project.category}</span>
        </div>
        <p class="project-card-description">${project.description}</p>
        <div class="project-card-footer">
          <span class="project-card-tech">${project.tech}</span>
          <a href="${project.url}" target="_blank" rel="noopener" class="project-card-link" aria-label="View ${project.name}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </article>
    `).join('');
  }

  addEventListeners() {
    this.filters.forEach(filter => {
      filter.addEventListener('click', (e) => {
        const category = e.target.dataset.filter;
        this.setFilter(category);
      });
    });
  }

  setFilter(category) {
    this.currentFilter = category;

    // Update active filter button
    this.filters.forEach(filter => {
      filter.classList.toggle('active', filter.dataset.filter === category);
    });

    // Filter projects
    const cards = this.grid.querySelectorAll('.project-card');
    cards.forEach(card => {
      const cardCategory = card.dataset.category;
      const shouldShow = category === 'all' || cardCategory === category;

      if (shouldShow) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeIn 0.3s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  }
}

// ============================================
// Navigation
// ============================================
class Navigation {
  constructor() {
    this.nav = document.getElementById('nav');
    this.toggle = document.getElementById('nav-toggle');
    this.menu = document.getElementById('nav-menu');
    this.links = document.querySelectorAll('.nav-link');

    this.init();
  }

  init() {
    this.addEventListeners();
    this.handleScroll();
  }

  addEventListeners() {
    // Mobile toggle
    this.toggle.addEventListener('click', () => {
      this.menu.classList.toggle('active');
    });

    // Close menu on link click
    this.links.forEach(link => {
      link.addEventListener('click', () => {
        this.menu.classList.remove('active');
      });
    });

    // Scroll effects
    window.addEventListener('scroll', () => this.handleScroll());

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }

  handleScroll() {
    if (window.scrollY > 50) {
      this.nav.classList.add('scrolled');
    } else {
      this.nav.classList.remove('scrolled');
    }
  }
}

// ============================================
// Intersection Observer for Animations
// ============================================
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, this.observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    // Add visible class styles
    const style = document.createElement('style');
    style.textContent = `
      section.visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize neural network background
  const canvas = document.getElementById('neural-canvas');
  if (canvas) {
    new NeuralNetwork(canvas);
  }

  // Initialize project filtering
  new ProjectFilter();

  // Initialize navigation
  new Navigation();

  // Initialize scroll animations
  new ScrollAnimations();

  // Add keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('nav-menu').classList.remove('active');
    }
  });
});

// ============================================
// Performance: Cleanup on page hide
// ============================================
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause expensive animations when tab is hidden
    document.body.classList.add('paused');
  } else {
    document.body.classList.remove('paused');
  }
});
