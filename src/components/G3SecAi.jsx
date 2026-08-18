import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from './Navbar'
import { 
  Shield, 
  RefreshCw, 
  Layers, 
  FileText, 
  Lock, 
  ShieldAlert, 
  Users, 
  ArrowRight, 
  Minus, 
  Sliders, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Check, 
  LayoutDashboard,
  BarChart3,
  User,
  Cpu,
  Database
} from 'lucide-react'
import '../styles/g3secai.css'

function G3SecAi() {
  const navigate = useNavigate()

  // Section 2: Why G3SEC.AI Feature Items
  const whyFeatures = [
    {
      icon: <Shield size={26} />,
      title: "AI-Powered Risk Intelligence",
      desc: "Our AI analyzes control gaps and vendor behavior to highlight key risks and drive smarter decisions across your ecosystem."
    },
    {
      icon: <RefreshCw size={26} />,
      title: "Continuous Assurance Engine",
      desc: "Automate control validation and evidence checks in real time — keeping your compliance posture always visible and audit-ready."
    },
    {
      icon: <Layers size={26} />,
      title: "Unified Risk & Compliance",
      desc: "Assess, monitor, and report in one platform. G3SEC.ai replaces siloed tools with a centralized, AI-powered compliance workspace."
    }
  ]

  // Section 3: Six Modules
  const modulesList = [
    {
      status: "COMING SOON",
      isAvailable: false,
      icon: <FileText size={22} />,
      title: "Regulatory Compliance",
      bullets: [
        "Multi-framework support",
        "Regulation change tracking",
        "Automated reporting"
      ]
    },
    {
      status: "COMING SOON",
      isAvailable: false,
      icon: <Lock size={22} />,
      title: "Compliance Assurance Kernel",
      bullets: [
        "Automated control testing",
        "Real-time compliance dashboards",
        "Evidence collection automation"
      ]
    },
    {
      status: "AVAILABLE NOW",
      isAvailable: true,
      path: "/products/tracs360",
      icon: <Shield size={22} />,
      title: "TRACS 360",
      subtitle: "Third Party Risk Management",
      bullets: [
        "Vendor risk assessment",
        "Continuous monitoring",
        "Contract lifecycle management"
      ]
    },
    {
      status: "AVAILABLE NOW",
      isAvailable: true,
      path: "/products/soltrisk",
      icon: <ShieldAlert size={22} />,
      title: "Attack Surface Management",
      bullets: [
        "External asset discovery",
        "Vulnerability detection",
        "Security risk insights"
      ]
    },

    {
      status: "COMING SOON",
      isAvailable: false,
      icon: <Users size={22} />,
      title: "Customer Centric Compliance",
      bullets: [
        "Trust center automation",
        "Security questionnaires",
        "Compliance sharing"
      ]
    },
    {
      status: "COMING SOON",
      isAvailable: false,
      icon: <Database size={22} />,
      title: "Data Privacy",
      bullets: [
        "Data mapping",
        "Privacy compliance",
        "Consent tracking"
      ]
    }
  ]

  // Section 4: 4 Growth Cards
  const growthCards = [
    {
      icon: <Sliders size={24} />,
      title: "Strategic Partner",
      desc: "The platform will work as an extension of your team — aligning security, compliance, and business objectives."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Platform Security",
      desc: "Safeguard systems and data with AI-driven threat detection, control validation, and compliance monitoring."
    },
    {
      icon: <Activity size={24} />,
      title: "System Assurance",
      desc: "From internal risks to third-party exposures, gain unified visibility across your entire risk landscape."
    },
    {
      icon: <Zap size={24} />,
      title: "Operational Resilience",
      desc: "Build trust with AI-powered real-time monitoring, automated assurance, and continuous policy enforcement."
    }
  ]

  const scrollToSixModules = (e) => {
    e.preventDefault();
    const target = document.getElementById("six-modules");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="g3secai-page">
      <Navbar variant="g3secai" />

      {/* SECTION 1: HERO SECTION */}
      <section className="g3secai-hero-section">
        <div className="g3secai-hero-container">
          <motion.h1 
            className="g3secai-main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            From Signals to <span className="highlight-blue-text">Risk Intelligence.</span><br />
            From <span className="highlight-blue-text">Intelligence</span> to Decisions.
          </motion.h1>

          <motion.div 
            className="g3secai-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="g3secai-subtitle-bold">
              Automate Controls. Assure Compliance. Accelerate Decision.
            </p>
            <p className="g3secai-subtitle-desc">
              Our AI-powered solution streamlines operations and drives efficiency and innovation.
            </p>
          </motion.div>

          {/* Browser UI Mockup Frame */}
          <motion.div 
            className="browser-mockup-frame"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Top Browser Header */}
            <div className="browser-header-bar">
              <div className="browser-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-url-bar">app.g3sec.ai</div>
              <div className="browser-header-right-dots">
                <span className="mini-pill"></span>
                <span className="mini-pill"></span>
              </div>
            </div>

            {/* Inner Dashboard UI Graphics */}
            <div className="dashboard-app-body">
              {/* Left Sidebar */}
              <div className="app-sidebar">
                <div className="sidebar-logo">G3SEC.AI</div>
                <div className="sidebar-nav-list">
                  <div className="sidebar-nav-item active">
                    <LayoutDashboard size={16} />
                    <span>Dashboard</span>
                  </div>
                  <div className="sidebar-nav-item">
                    <Users size={16} />
                    <span>TRACS 360</span>
                  </div>
                  <div className="sidebar-nav-item">
                    <FileText size={16} />
                    <span>Compliance</span>
                  </div>
                  <div className="sidebar-nav-item">
                    <Lock size={16} />
                    <span>Security</span>
                  </div>
                  <div className="sidebar-nav-item">
                    <BarChart3 size={16} />
                    <span>Reports</span>
                  </div>
                </div>
              </div>

              {/* Main Content Mockup */}
              <div className="app-main-content">
                <div className="app-top-nav">
                  <div className="mock-search"></div>
                  <div className="mock-profile-dots">
                    <span className="circle-avatar"></span>
                  </div>
                </div>

                <div className="dashboard-metrics-grid">
                  <div className="metric-mock-card">
                    <div className="mock-line-short"></div>
                    <div className="mock-line-thick"></div>
                  </div>
                  <div className="metric-mock-card">
                    <div className="mock-line-short"></div>
                    <div className="mock-line-thick"></div>
                  </div>
                  <div className="metric-mock-card">
                    <div className="mock-line-short"></div>
                    <div className="mock-line-thick"></div>
                  </div>
                </div>

                <div className="dashboard-large-chart-card">
                  <div className="mock-line-short"></div>
                  <div className="mock-chart-bar-bg">
                    <div className="mock-chart-wave"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Action Buttons */}
          <motion.div 
            className="g3secai-hero-buttons"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/getaquote" className="btn-g3-primary">
              Get Started
            </Link>
            <a href="#six-modules" onClick={scrollToSixModules} className="btn-g3-outline">
              <span>Learn More</span>
              <motion.span 
                className="btn-arrow-pop"
                whileHover={{ x: 5, scale: 1.25 }}
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: WHY G3SEC.AI ? */}
      <section id="why-section" className="g3secai-why-section">
        <motion.div 
          className="why-section-card-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="why-section-title">Why G3SEC.AI ?</h2>
          <p className="why-section-subtitle">
            Empowering organizations with intelligent automation and unified compliance management
          </p>

          <div className="why-cards-grid">
            {whyFeatures.map((item, idx) => (
              <motion.div 
                key={idx} 
                className="why-feature-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="why-card-icon-box">
                  {item.icon}
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: SIX POWERFUL MODULES / ONE UNIFIED PLATFORM */}
      <section id="six-modules" className="g3secai-modules-section">
        <div className="modules-pill-badge">Six Powerful Modules</div>
        <h2 className="modules-section-title">One Unified Platform</h2>
        <p className="modules-section-subtitle">
          Comprehensive governance and compliance coverage designed for modern enterprises
        </p>

        <div className="modules-cards-grid">
          {modulesList.map((item, idx) => (
            <motion.div 
              key={idx}
              className={`module-card-item ${item.isAvailable ? 'featured-available' : ''}`}
              onClick={() => {
                if (item.path) {
                  navigate(item.path);
                }
              }}
              style={{ cursor: item.path ? 'pointer' : 'default' }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              <span className={`module-status-tag ${item.isAvailable ? 'available-now' : 'coming-soon'}`}>
                {item.status}
              </span>

              <div className="module-icon-box">
                {item.icon}
              </div>

              <div>
                <h3 className="module-title">{item.title}</h3>
                {item.subtitle && (
                  <span className="module-subtitle-small">{item.subtitle}</span>
                )}
              </div>

              <ul className="module-bullet-list">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="module-bullet-item">
                    <span className="bullet-dot">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: BUILT FOR SECURE, COMPLIANT GROWTH (TRACS 360) */}
      <section className="g3secai-growth-section">
        <div className="growth-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="growth-title">
              Built for Secure, Compliant Growth
              <span className="growth-highlight-yellow">TRACS 360</span>
            </h2>

            <div className="growth-pill-tag">
              Empowering Smarter Governance with AI
            </div>

            <p className="growth-desc">
              We blend domain expertise with intelligent automation to help you stay ahead of emerging threats, regulatory shifts, and vendor risks — without slowing down your business.
            </p>
          </motion.div>

          {/* 4 Feature Cards Grid */}
          <div className="growth-cards-grid">
            {growthCards.map((card, idx) => (
              <motion.div 
                key={idx}
                className="growth-feature-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="growth-card-icon">
                  {card.icon}
                </div>
                <h3 className="growth-card-title">{card.title}</h3>
                <p className="growth-card-desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA SECTION */}
      <section className="g3secai-cta-section">
        <div className="cta-container">
          <h2 className="cta-heading">
            One Platform. Complete Risk & Compliance Control.
          </h2>
          <p className="cta-subtitle">
            Unify cybersecurity, third-party risk, and compliance with continuous visibility, control, and assurance across your enterprise.
          </p>

          <Link to="/getaquote" className="btn-start-journey">
            <span>Start your Journey</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default G3SecAi