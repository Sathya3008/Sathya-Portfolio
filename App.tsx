import { useEffect, useState } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);

      // Update active section
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -80px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .stagger').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <div className="bg-pattern"></div>
      <div className="bg-grid"></div>

      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            SK
          </div>
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`nav-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-badge">Data Analyst | AI & ML Graduate</div>
              <h1 className="hero-title">Sathya K</h1>
              <h2 className="hero-subtitle">
                Transforming Raw Data into
                <br />
                <span className="text-accent">Actionable Insights</span>
              </h2>
              <p className="hero-description">
                Motivated and detail-oriented B.Sc. Artificial Intelligence and Machine Learning
                graduate with strong analytical, problem-solving, and data visualization skills.
                Proficient in Python, SQL, Advanced Excel, Power BI, Tableau, and MySQL. Passionate
                about transforming raw data into meaningful insights to support business decisions.
              </p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume
                </a>
                <a href="#projects" className="btn btn-secondary" onClick={(e) => handleNavClick(e, 'projects')}>
                  View Projects
                </a>
                <a href="#contact" className="btn btn-outline" onClick={(e) => handleNavClick(e, 'contact')}>
                  Hire Me
                </a>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">7+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">81%</div>
                  <div className="stat-label">Academic Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label">About Me</div>
            <h2 className="section-title">Personal Information</h2>
          </div>
          <div className="about-content">
            <div className="about-grid stagger">
              <div className="info-card">
                <div className="info-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="info-label">Name</div>
                <div className="info-value">Sathya K</div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-label">Location</div>
                <div className="info-value">Coimbatore, Tamil Nadu</div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div className="info-label">Date of Birth</div>
                <div className="info-value">30 August 2005</div>
              </div>
              <div className="info-card">
                <div className="info-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="info-label">Experience</div>
                <div className="info-value">Fresher</div>
              </div>
            </div>
            <div className="learning-card fade-in">
              <div className="learning-header">
                <div className="learning-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div>
                  <div className="learning-title">Current Learning</div>
                </div>
              </div>
              <div className="learning-content">
                <div className="learning-item">
                  <div className="learning-org">Anudip Foundation</div>
                  <div className="learning-course">Data Analytics with LiDAR Technology</div>
                  <div className="learning-duration">INTERNSHIP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label">Education</div>
            <h2 className="section-title">Academic Background</h2>
          </div>
          <div className="timeline stagger">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="education-year">2023 — 2026</div>
                  <h3 className="education-degree">Bachelor of Science</h3>
                  <div className="education-field">Artificial Intelligence and Machine Learning</div>
                  <div className="education-score">
                    <span className="score-label">Percentage</span>
                    <span className="score-value">81%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="education-year">2022 — 2023</div>
                  <h3 className="education-degree">Higher Secondary Certificate</h3>
                  <div className="education-field">Bio Mathematics</div>
                  <div className="education-score">
                    <span className="score-label">Percentage</span>
                    <span className="score-value">62%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="education-card">
                  <div className="education-year">2020 — 2021</div>
                  <h3 className="education-degree">SSLC</h3>
                  <div className="education-field">Secondary School Leaving Certificate</div>
                  <div className="education-score">
                    <span className="score-label">Percentage</span>
                    <span className="score-value">75%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label">Expertise</div>
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="skills-grid stagger">
            {[
              { name: 'Python', level: 'Advanced', icon: 'code' },
              { name: 'SQL', level: 'Advanced', icon: 'db' },
              { name: 'Advanced Excel', level: 'Advanced', icon: 'grid' },
              { name: 'Power BI', level: 'Advanced', icon: 'chart' },
              { name: 'Tableau', level: 'Intermediate', icon: 'box' },
              { name: 'MySQL', level: 'Advanced', icon: 'db' },
              { name: 'Jupyter Notebook', level: 'Advanced', icon: 'notebook' },
            ].map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">
                  <SkillIcon type={skill.icon} />
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">{skill.level}</div>
              </div>
            ))}
          </div>

          {/* Technical Literacy */}
          <div className="literacy-section fade-in">
            <h3 className="literacy-title">Technical Literacy</h3>
            <div className="literacy-grid">
              {[
                { name: 'Microsoft Word', icon: 'doc' },
                { name: 'Microsoft Excel', icon: 'grid' },
                { name: 'Microsoft PowerPoint', icon: 'screen' },
                { name: 'Google Docs', icon: 'doc' },
                { name: 'Google Sheets', icon: 'grid' },
                { name: 'Google Slides', icon: 'screen' },
              ].map((item) => (
                <div className="literacy-item" key={item.name}>
                  <SkillIcon type={item.icon} size={20} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="projects-grid stagger">
            <div className="project-card">
              <div className="project-header">
                <div className="project-number">01</div>
                <div className="project-category">Deep Learning</div>
              </div>
              <h3 className="project-title">
                Handwritten Prescription Error Detection Using Deep Learning
              </h3>
              <p className="project-description">
                Developed a handwritten prescription recognition system using Python, OpenCV, and
                Tesseract OCR. Converted handwritten prescriptions into digital text with advanced
                image preprocessing techniques to improve OCR accuracy.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">OpenCV</span>
                <span className="tech-tag">OCR</span>
                <span className="tech-tag">Tesseract</span>
              </div>
              <div className="project-footer">
                <div className="project-status">
                  <span className="status-dot"></span>
                  Completed
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-number">02</div>
                <div className="project-category">Computer Vision</div>
              </div>
              <h3 className="project-title">Sign Language to Text and Speech Translation</h3>
              <p className="project-description">
                Built a real-time sign language recognition system that converts sign language
                gestures into text and speech using advanced computer vision and deep learning
                techniques.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">OpenCV</span>
                <span className="tech-tag">MediaPipe</span>
                <span className="tech-tag">CNN</span>
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">Keras</span>
                <span className="tech-tag">TTS</span>
              </div>
              <div className="project-footer">
                <div className="project-status">
                  <span className="status-dot"></span>
                  Completed
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <div className="project-number">03</div>
                <div className="project-category">Web Security</div>
              </div>
              <h3 className="project-title">Fake Login Detection System</h3>
              <p className="project-description">
                Developed a Flask web application that detects suspicious login behaviour and sends
                automated email alerts for fake login attempts, enhancing security monitoring.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Flask</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">SMTP</span>
              </div>
              <div className="project-footer">
                <div className="project-status">
                  <span className="status-dot"></span>
                  Completed
                </div>
              </div>
            </div>

            <div className="project-card featured">
              <div className="project-header">
                <div className="project-number">04</div>
                <div className="project-category">Data Analytics</div>
              </div>
              <h3 className="project-title">AI Usage Analysis Dashboard</h3>
              <p className="project-description">
                Created an interactive Excel dashboard with comprehensive data analytics features
                including data cleaning, pivot tables, pivot charts, slicers, filters, grouping, KPI
                cards, and interactive charts for dashboard analytics.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Excel</span>
                <span className="tech-tag">Pivot Tables</span>
                <span className="tech-tag">Charts</span>
                <span className="tech-tag">Slicers</span>
                <span className="tech-tag">KPI Cards</span>
              </div>
              <div className="project-footer">
                <div className="project-status">
                  <span className="status-dot"></span>
                  Featured
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="dashboard-showcase">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label">Dashboard Showcase</div>
            <h2 className="section-title">AI Usage Analysis Dashboard</h2>
            <p className="section-subtitle">Interactive Excel Dashboard with Advanced Analytics</p>
          </div>
          <div className="laptop-mockup fade-in">
            <div className="laptop-screen">
              <div className="dashboard-preview">
                <div className="dashboard-header">
                  <div className="dashboard-title">AI Usage Analytics</div>
                  <div className="dashboard-date">2024 Report</div>
                </div>
                <div className="dashboard-kpis">
                  <div className="kpi-card">
                    <div className="kpi-label">Total Users</div>
                    <div className="kpi-value">12,847</div>
                    <div className="kpi-change">↑ 24.5%</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Active Sessions</div>
                    <div className="kpi-value">8,523</div>
                    <div className="kpi-change">↑ 18.2%</div>
                  </div>
                  <div className="kpi-card">
                    <div className="kpi-label">Avg. Duration</div>
                    <div className="kpi-value">4.2h</div>
                    <div className="kpi-change">↑ 12.8%</div>
                  </div>
                </div>
                <div className="dashboard-charts">
                  <div className="chart-container">
                    <div className="chart-title">Usage Trend</div>
                    <svg className="chart-svg" viewBox="0 0 200 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <polyline
                        points="0,60 40,45 80,50 120,30 160,35 200,20 200,80 0,80"
                        fill="url(#lineGrad)"
                      />
                      <polyline
                        points="0,60 40,45 80,50 120,30 160,35 200,20"
                        fill="none"
                        stroke="#22D3EE"
                        strokeWidth="2"
                      />
                      <polyline
                        points="0,70 40,55 80,60 120,40 160,45 200,30"
                        fill="none"
                        stroke="#67E8F9"
                        strokeWidth="2"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                  <div className="chart-container">
                    <div className="chart-title">Category Distribution</div>
                    <svg className="chart-svg" viewBox="0 0 200 80" preserveAspectRatio="none">
                      <rect x="10" y="20" width="30" height="60" fill="#22D3EE" opacity="0.9" rx="2" />
                      <rect x="50" y="30" width="30" height="50" fill="#22D3EE" opacity="0.7" rx="2" />
                      <rect x="90" y="10" width="30" height="70" fill="#22D3EE" opacity="1" rx="2" />
                      <rect x="130" y="40" width="30" height="40" fill="#22D3EE" opacity="0.6" rx="2" />
                      <rect x="170" y="25" width="30" height="55" fill="#22D3EE" opacity="0.8" rx="2" />
                    </svg>
                  </div>
                </div>
                <div className="dashboard-slicers">
                  <div className="slicer-title">Filters</div>
                  <div className="slicer-buttons">
                    <button className="slicer-btn active">All</button>
                    <button className="slicer-btn">Q1</button>
                    <button className="slicer-btn">Q2</button>
                    <button className="slicer-btn">Q3</button>
                    <button className="slicer-btn">Q4</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label">Credentials</div>
            <h2 className="section-title">Certifications</h2>
          </div>
          <div className="cert-grid stagger">
            <div className="cert-card">
              <div className="cert-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div className="cert-info">
                <div className="cert-name">Cybersecurity Fundamentals</div>
                <div className="cert-issuer">IBM ICT Academy of Tamil Nadu</div>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <div className="cert-info">
                <div className="cert-name">Robotics Certification</div>
                <div className="cert-issuer">I-Hub Robotics</div>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="cert-info">
                <div className="cert-name">Object-Oriented Programming in Python</div>
                <div className="cert-issuer">Online Certification</div>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <div className="cert-info">
                <div className="cert-name">Data Analytics Job Simulation</div>
                <div className="cert-issuer">Professional Certification</div>
              </div>
            </div>
            <div className="cert-card">
              <div className="cert-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="cert-info">
                <div className="cert-name">Soft Skills Certification</div>
                <div className="cert-issuer">Infosys</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soft Skills & Languages */}
      <section className="soft-skills">
        <div className="container">
          <div className="two-column-grid">
            <div className="column">
              <div className="section-header fade-in">
                <div className="section-label">Strengths</div>
                <h2 className="section-title">Soft Skills</h2>
              </div>
              <div className="soft-skills-list stagger">
                {[
                  'Analytical Thinking',
                  'Problem Solving',
                  'Communication',
                  'Time Management',
                  'Quick Learner',
                  'Team Management',
                ].map((skill) => (
                  <div className="soft-skill-item" key={skill}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="column">
              <div className="section-header fade-in">
                <div className="section-label">Communication</div>
                <h2 className="section-title">Languages</h2>
              </div>
              <div className="languages-list stagger">
                <div className="language-item">
                  <div className="language-info">
                    <div className="language-name">Tamil</div>
                    <div className="language-level">Native</div>
                  </div>
                  <div className="language-bar">
                    <div className="language-progress" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div className="language-item">
                  <div className="language-info">
                    <div className="language-name">English</div>
                    <div className="language-level">Professional</div>
                  </div>
                  <div className="language-bar">
                    <div className="language-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="language-item">
                  <div className="language-info">
                    <div className="language-name">Kannada</div>
                    <div className="language-level">Conversational</div>
                  </div>
                  <div className="language-bar">
                    <div className="language-progress" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header fade-in">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">Ready to discuss opportunities and collaborations</p>
          </div>
          <div className="contact-grid stagger">
            <a href="mailto:sathya30082005@gmail.com" className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-label">Email</div>
              <div className="contact-value">sathya30082005@gmail.com</div>
            </a>
            <a href="tel:+919524163341" className="contact-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">+91 9524163341</div>
            </a>
            <a
              href="https://linkedin.com/in/sathya-k-1422b441a"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">sathya-k-1422b441a</div>
            </a>
            <a
              href="https://github.com/Sathya3008"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="contact-label">GitHub</div>
              <div className="contact-value">Sathya3008</div>
            </a>
            <div className="contact-card location-card">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-label">Location</div>
              <div className="contact-value">Coimbatore, Tamil Nadu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">SK</div>
            <p className="footer-tagline">Transforming Data into Actionable Insights.</p>
            <div className="footer-social">
              <a
                href="https://linkedin.com/in/sathya-k-1422b441a"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/Sathya3008"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="mailto:sathya30082005@gmail.com" className="social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
            <p className="footer-copyright">© 2026 Sathya K. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </>
  );
}

// Skill Icon Component
function SkillIcon({ type, size = 32 }: { type: string; size?: number }) {
  const iconProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (type) {
    case 'code':
      return (
        <svg {...iconProps}>
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
    case 'db':
      return (
        <svg {...iconProps}>
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      );
    case 'grid':
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
        </svg>
      );
    case 'chart':
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      );
    case 'box':
      return (
        <svg {...iconProps}>
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      );
    case 'notebook':
      return (
        <svg {...iconProps}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      );
    case 'doc':
      return (
        <svg {...iconProps}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
        </svg>
      );
    case 'screen':
      return (
        <svg {...iconProps}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      );
  }
}

export default App;
