import React, { useRef, useEffect, useState } from 'react'
import { animate, motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValueEvent } from 'framer-motion'
import { SearchCheck, ShieldCheck, Scale, Zap, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/home.css'
import logo20Cube from '../assets/logo/20cube.png'
import logoBontaz from '../assets/logo/bontaz.png'
import logoEncipher from '../assets/logo/encipher.png'
import logoImit from '../assets/logo/imit.png'
import logoMindbridges from '../assets/logo/mindbridges.png'
import vaptmp4 from '../assets/video/vapt.mp4'
import trpmmp4 from '../assets/video/trpm.mp4'
import productsmp4 from '../assets/video/products.mp4'
import socmp4 from '../assets/video/soc.mp4'



const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } }
}

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

export function Home() {
  /* ── Meta-Style 4-Media Hero Carousel (2 Videos + 2 Images) ── */
  const heroMediaSlides = [
    {
      type: 'video',
      src: socmp4,
      title: 'SOC Operations Center',
      heading: (
        <>
          <span className="title-accelerate">Real-Time Defense</span> <span className="title-growth">Powered by</span> <br />
          <span className="highlight-cyber">24/7 SOC</span> <span className="highlight-gradient">Monitoring &</span> <span className="highlight-compliance">Incident Control.</span>
        </>
      )
    },
    {
      type: 'video',
      src: vaptmp4,
      title: 'VAPT Operations Center',
      heading: (
        <>
          <span className="title-accelerate">Accelerate Growth</span> <span className="title-growth">Backed by</span> <br />
          <span className="highlight-cyber">Cyber</span> <span className="highlight-gradient">Resilience and</span> <span className="highlight-compliance">Compliance.</span>
        </>
      )
    },
    {
      type: 'video',
      src: trpmmp4,
      title: 'TRACS Cyber Risk Assurance',
      heading: (
        <>
          <span className="title-accelerate">Quantify Threat Exposures</span> <span className="title-growth">Driven by</span> <br />
          <span className="highlight-cyber">Third-Party</span> <span className="highlight-gradient">Risk &</span> <span className="highlight-compliance">Governance.</span>
        </>
      )
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const heroScrollContainerRef = useRef(null)

  // Track 300vh hero scroll container progress for Meta-style sticky video scrolling
  const { scrollYProgress: heroScrollY } = useScroll({
    target: heroScrollContainerRef,
    offset: ["start start", "end end"]
  })

  // Smooth transparent opacity cross-fades between the 3 videos on scroll (Zero lines, seamless single component transition)
  const videoOpacity0 = useTransform(heroScrollY, [0, 0.28, 0.45], [1, 1, 0])
  const videoOpacity1 = useTransform(heroScrollY, [0.25, 0.45, 0.72], [0, 1, 0])
  const videoOpacity2 = useTransform(heroScrollY, [0.55, 0.75, 1.0], [0, 1, 1])

  const videoOpacities = [videoOpacity0, videoOpacity1, videoOpacity2]

  useMotionValueEvent(heroScrollY, "change", (latest) => {
    if (latest < 0.35) {
      setCurrentSlide(0)
    } else if (latest < 0.70) {
      setCurrentSlide(1)
    } else {
      setCurrentSlide(2)
    }
  })

  // Smooth jump to specific video slide on clicking pagination dots
  const scrollToSlide = (idx) => {
    if (!heroScrollContainerRef.current) return
    const containerTop = heroScrollContainerRef.current.offsetTop
    const scrollableHeight = heroScrollContainerRef.current.offsetHeight - window.innerHeight
    const targetY = containerTop + (idx / (heroMediaSlides.length - 1)) * scrollableHeight
    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }

  /* ── Clients Section 3D Scroll Reveal & Direction Parallax ── */
  const clientsRef = useRef(null)
  const { scrollYProgress: clientsScrollY } = useScroll({
    target: clientsRef,
    offset: ["start end", "end start"]
  })

  const smoothClientsScroll = useSpring(clientsScrollY, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001
  })

  // 3D Perspective Tilt: starting tilted back (14deg), leveling out (0deg), tilting forward (-14deg)
  const clientsRotateX = useTransform(smoothClientsScroll, [0, 0.5, 1], [14, 0, -14])
  // Scale reveal: scaling up from 0.88 to 1.0, then back to 0.92
  const clientsScale = useTransform(smoothClientsScroll, [0, 0.45, 0.55, 1], [0.88, 1, 1, 0.92])
  // Opacity fade in/out on scroll
  const clientsOpacity = useTransform(smoothClientsScroll, [0, 0.2, 0.8, 1], [0.35, 1, 1, 0.35])
  // Horizontal parallax shift driven by scroll direction (scrolling down pushes left, scrolling up pushes right)
  const clientsTrackX = useTransform(smoothClientsScroll, [0, 1], [140, -140])



  const handleMagneticMove = (e) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    btn.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`
    btn.style.transition = 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
  }

  const handleMagneticLeave = (e) => {
    const btn = e.currentTarget
    btn.style.transform = 'translate(0px, 0px)'
    btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  }

  /* ── Direct button animations using animate from 'motion' ── */
  const handleBtnHoverStart = (e) => {
    animate(e.currentTarget, { scale: 1.03, y: -3 }, { duration: 0.28, ease: [0.16, 1, 0.3, 1] })
  }

  const handleBtnHoverEnd = (e) => {
    animate(e.currentTarget, { scale: 1, y: 0 }, { duration: 0.28, ease: [0.16, 1, 0.3, 1] })
  }

  const handleBtnPressStart = (e) => {
    animate(e.currentTarget, { scale: 0.97 }, { duration: 0.12 })
  }

  const pillars = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="7" stroke="url(#va-grad-1)" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M20 20L16 16" stroke="url(#va-grad-1)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M8 11.5L10 13.5L14 9.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="11" cy="11" r="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
          <defs>
            <linearGradient id="va-grad-1" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="1" stopColor="#e0f2fe" />
            </linearGradient>
          </defs>
        </svg>
      ),
      badgeClass: 'p-badge-va',
      name: 'Assess',
      desc: 'VAPT, readiness and risk reviews.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4 6V12C4 17.5 7.5 21.8 12 23C16.5 21.8 20 17.5 20 12V6L12 2Z" fill="url(#tp-grad-bg)" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="tp-grad-bg" x1="4" y1="2" x2="20" y2="23" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255,255,255,0.3)" />
              <stop offset="1" stopColor="rgba(255,255,255,0.05)" />
            </linearGradient>
          </defs>
        </svg>
      ),
      badgeClass: 'p-badge-tp',
      name: 'Protect',
      desc: 'Control implementation & remediation.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V21M12 3L7 7M12 3L17 7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <path d="M5 12L2 17H10L7 12Z" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.2)" />
          <path d="M19 12L16 17H24L21 12Z" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.2)" />
          <path d="M4 21H20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      badgeClass: 'p-badge-so',
      name: 'Govern',
      desc: 'Privacy, compliance & third-party risk.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#dp-grad-bg)" stroke="#ffffff" strokeWidth="1.8" strokeLinejoin="round" />
          <defs>
            <linearGradient id="dp-grad-bg" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(255,255,255,0.4)" />
              <stop offset="1" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
        </svg>
      ),
      badgeClass: 'p-badge-dp',
      name: 'Respond',
      desc: 'SOC operations & incident support.'
    }
  ]

  const clientLogos = [
    { name: '20Cube', src: logo20Cube },
    { name: 'Bontaz', src: logoBontaz },
    { name: 'Encipher Health', src: logoEncipher },
    { name: 'IM IT Services', src: logoImit },
    { name: 'Mindbridges', src: logoMindbridges }
  ]

  const proServicesList = [
    {
      num: '01',
      icon: (
        <svg width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      badgeClass: 'pro-badge-teal',
      title: 'Cybersecurity & Compliance Assurance',
      desc: 'Implementation and readiness support across ISO 27001, ISO 27701, ISO 42001, NIST CSF, HITRUST, SOC 2 and related frameworks.',
      linkText: 'Explore assurance services',
      href: '#assurance'
    },
    {
      num: '02',
      icon: (
        <svg width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </svg>
      ),
      badgeClass: 'pro-badge-blue',
      title: 'VAPT & Security Testing',
      desc: 'Web, API, mobile, network, cloud and thick-client testing with practical remediation guidance and retesting.',
      linkText: 'Open dedicated intake',
      href: '#vapt'
    },
    {
      num: '03',
      icon: (
        <svg width="20" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      badgeClass: 'pro-badge-green',
      title: 'TPRM Professional Services',
      desc: 'Programme design, due diligence, evidence review, issue management and continuous third-party oversight.',
      linkText: 'Explore TPRM services',
      href: '#tprm'
    },
    {
      num: '04',
      icon: (
        <svg width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M6 21h12M12 17v4" />
          <path d="M6 8l3 3 2-2 4 4" />
        </svg>
      ),
      badgeClass: 'pro-badge-indigo',
      title: 'SOC Operations',
      desc: 'Monitoring visibility, triage support, incident coordination, reporting and operational maturity improvement.',
      linkText: 'Explore SOC operations',
      href: '#soc'
    },
    {
      num: '05',
      icon: (
        <svg width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      ),
      badgeClass: 'pro-badge-amber',
      title: 'Privacy & Data Protection',
      desc: 'DPDPA-focused implementation with GDPR, Saudi PDPL, UAE and global privacy support.',
      linkText: 'Explore privacy services',
      href: '#privacy'
    },
    {
      num: '06',
      icon: (
        <svg width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      badgeClass: 'pro-badge-purple',
      title: 'vCISO & vDPO Advisory',
      desc: 'Retained security and privacy leadership, governance, risk decisions and customer or board-facing support.',
      linkText: 'Explore advisory services',
      href: '#vciso'
    }
  ]

  const howSupportSteps = [
    {
      num: '01',
      title: 'Assess',
      desc: 'Understand the current environment, validate exposure and identify the gaps that matter most.',
      icon: (
        <svg width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
          <path d="M11 8v6M8 11h6" />
        </svg>
      ),
      badgeClass: 'step-badge-teal'
    },
    {
      num: '02',
      title: 'Implement',
      desc: 'Translate requirements into practical controls, documentation, remediation and operating processes.',
      icon: (
        <svg width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      badgeClass: 'step-badge-blue'
    },
    {
      num: '03',
      title: 'Advise',
      desc: 'Support leadership, customers, boards and auditors with clear security and compliance direction.',
      icon: (
        <svg width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.28 1.28L3 12l5.8 1.9a2 2 0 0 1 1.28 1.28L12 21l1.9-5.8a2 2 0 0 1 1.28-1.28L21 12l-5.8-1.9a2 2 0 0 1-1.28-1.28Z" />
        </svg>
      ),
      badgeClass: 'step-badge-green'
    },
    {
      num: '04',
      title: 'Operate',
      desc: 'Provide ongoing support for TPRM, privacy, compliance, SOC and security governance activities.',
      icon: (
        <svg width="24" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      badgeClass: 'step-badge-purple'
    }
  ]

  const engagementSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Confirm the business objective, scope, risk drivers and target timeline.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      badgeClass: 'step-badge-teal'
    },
    {
      num: '02',
      title: 'Assess',
      desc: 'Validate gaps, exposure, control maturity and implementation priorities.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      ),
      badgeClass: 'step-badge-blue'
    },
    {
      num: '03',
      title: 'Improve',
      desc: 'Implement controls, remediate findings and establish operating discipline.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      badgeClass: 'step-badge-green'
    },
    {
      num: '04',
      title: 'Sustain',
      desc: 'Maintain assurance through retained advisory and operational support.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      badgeClass: 'step-badge-purple'
    }
  ]

  /* ── Featured Video Showcase State ── */
  const showcaseVideoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlayPause = () => {
    if (showcaseVideoRef.current) {
      if (isPlaying) {
        showcaseVideoRef.current.pause()
        setIsPlaying(false)
      } else {
        showcaseVideoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <div className="home-page-layout">


      {/* Meta-Style Sticky Scroll Hero Section */}
      <div className="hero-scroll-container" ref={heroScrollContainerRef}>
        <main className="hero-sticky-frame">
          {/* Cyber Threat Security Domain Motion Canvas */}
          <div className="cyber-threat-canvas" aria-hidden="true">
            {/* Seamless Video Stack with Smooth Transparent Cross-Fade (Zero Lines, 100% Single Component Feel) */}
            <div className="hero-slide-stack">
              {heroMediaSlides.map((slide, idx) => (
                <motion.div
                  key={idx}
                  className="hero-slide-wrapper"
                  style={{
                    opacity: videoOpacities[idx],
                    zIndex: currentSlide === idx ? 2 : 1
                  }}
                >
                  {slide.type === 'video' ? (
                    <video
                      className="cyber-soc-bg-video"
                      src={slide.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      className="cyber-soc-bg-video cyber-soc-bg-img"
                      src={slide.src}
                      alt={slide.title}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Animated 3D Cyber Matrix & Radar Grid */}
            <div className="cyber-grid-plane"></div>
            <div className="threat-radar-sweep"></div>

            {/* Glowing Animated Laser Data Streams */}
            <div className="threat-stream stream-1"></div>
            <div className="threat-stream stream-2"></div>
            <div className="threat-stream stream-3"></div>
          </div>

          {/* Meta-Style Vertical Right Carousel Indicators (3 Uniform Dots) */}
          <div className="hero-carousel-pagination">
            {heroMediaSlides.map((slide, idx) => (
              <button
                key={idx}
                className={`carousel-step-dot ${currentSlide === idx ? 'active' : ''}`}
                onClick={() => scrollToSlide(idx)}
                title={slide.title}
                aria-label={`Switch to ${slide.title}`}
              />
            ))}
          </div>

          {/* Single Centered Hero Content - Updates Text Simultaneously With Each Video */}
          <div className="hero-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="hero-content hero-glass-card"
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="hero-title">
                  {heroMediaSlides[currentSlide].heading}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* 4 Pillar Horizontal Feature Bar after hero video and before clients section */}
      <div className="pillar-horizontal-row">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="pillar-horizontal-card"
          >
            <div className={`pillar-icon-badge ${pillar.badgeClass}`}>
              <span>{pillar.icon}</span>
            </div>
            <div className="pillar-card-content">
              <h3 className="pillar-card-title">{pillar.name}</h3>
              <p className="pillar-card-desc">{pillar.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Trusted Clients Section with 3D Scroll Reveal */}
      <section className="clients-section" ref={clientsRef}>
        <motion.div
          className="clients-container"
          style={{
            rotateX: clientsRotateX,
            scale: clientsScale,
            opacity: clientsOpacity
          }}
        >
          <motion.div className="clients-header" variants={fadeUp}>
            <div className="clients-kicker">
              <span className="kicker-line"></span>
              <span className="kicker-text">OUR CLIENTS</span>
            </div>
            <h2 className="clients-title">
              Trusted by growing and <br className="desktop-break" />
              established organisations.
            </h2>
          </motion.div>

          {/* Infinite Marquee Carousel with Scroll Parallax */}
          <motion.div className="carousel-track-wrapper" variants={fadeIn}>
            <motion.div className="carousel-track" style={{ x: clientsTrackX }}>
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="client-logo-card"
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                >
                  <img src={logo.src} alt={logo.name} className="client-logo-img" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Video Showcase Section (White Background with Play/Pause Control) */}
      <section className="featured-video-section">
        <div className="featured-video-container">
          <motion.div
            className="featured-video-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="pro-services-kicker" variants={fadeIn}>
              <span className="kicker-line"></span>
              <span className="kicker-text">CYBER OVERVIEW SHOWCASE</span>
              <span className="kicker-line"></span>
            </motion.div>
            <motion.h2 className="featured-video-title" variants={fadeUp}>
              Experience G3 Cyberspace in action.
            </motion.h2>
            <motion.p className="featured-video-subtitle" variants={fadeUp}>
              Watch how our comprehensive security operations and compliance frameworks safeguard modern enterprise infrastructures.
            </motion.p>
          </motion.div>

          <motion.div
            className="video-player-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className="video-player-wrapper">
              <video
                ref={showcaseVideoRef}
                className="showcase-video-element"
                src={productsmp4}
                autoPlay
                loop
                muted
                playsInline
              />
              {/* Overlay Play/Pause Button */}
              <div className="video-controls-overlay">
                <button
                  className="video-toggle-btn"
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={20} strokeWidth={2.8} /> : <Play size={20} strokeWidth={2.8} fill="#ffffff" className="play-icon-offset" />}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Services Section */}
      <section className="pro-services-section">
        <div className="pro-services-container">
          {/* Centered Professional Services Header */}
          <motion.div
            className="pro-services-header-centered"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="pro-services-kicker" variants={fadeIn}>
              <span className="kicker-line"></span>
              <span className="kicker-text">PROFESSIONAL SERVICES</span>
              <span className="kicker-line"></span>
            </motion.div>

            <motion.h2 className="pro-services-title-centered" variants={fadeUp}>
              Cybersecurity expertise where your <br className="desktop-break" />
              organisation needs it most.
            </motion.h2>

            <motion.p className="pro-services-desc-gold" variants={fadeUp}>
              Engage G3 Cyberspace for a focused assessment, implementation programme, retained advisory support or operational assistance.
            </motion.p>
          </motion.div>

          {/* 6 Professional Service Tiles */}
          <motion.div
            className="pro-services-tiles-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
          >
            {proServicesList.map((item, idx) => (
              <motion.div
                key={idx}
                className="pro-service-tile"
                variants={idx % 2 === 0 ? fadeLeft : fadeRight}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <div className="pro-tile-header">
                  <div className={`pro-tile-icon-badge ${item.badgeClass}`}>
                    <span>{item.icon}</span>
                  </div>
                </div>
                <h3 className="pro-tile-title">{item.title}</h3>
                <p className="pro-tile-desc">{item.desc}</p>
                <a href={item.href} className="pro-tile-link">
                  <span>{item.linkText}</span>
                  <span className="link-arrow">→</span>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Section Below Tiles: How We Support */}
          <motion.div
            className="how-we-support-centered"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="pro-services-kicker" variants={fadeIn}>
              <span className="kicker-line"></span>
              <span className="kicker-text">HOW WE SUPPORT</span>
              <span className="kicker-line"></span>
            </motion.div>

            <motion.h2 className="how-support-title-centered" variants={fadeUp}>
              Focused expertise from assessment <br className="desktop-break" />
              through sustained operations.
            </motion.h2>

            <motion.p className="how-support-desc-orange" variants={fadeUp}>
              Our engagement model is designed to meet you at the right stage - whether the immediate need is validation, implementation, leadership guidance or ongoing operational support.
            </motion.p>
          </motion.div>

          {/* 4-Step Support Progression */}
          <motion.div
            className="how-support-gold-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <div className="how-support-steps-grid">
              {howSupportSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="how-support-step-item"
                  variants={fadeUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="step-item-header">
                    <div className={`step-icon-badge ${step.badgeClass}`}>
                      <span>{step.icon}</span>
                    </div>
                  </div>
                  <h3 className="step-item-title">{step.title}</h3>
                  <p className="step-item-desc">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Engagement Journey Header */}
          <motion.div
            className="engagement-journey-centered"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="pro-services-kicker" variants={fadeIn}>
              <span className="kicker-line"></span>
              <span className="kicker-text">ENGAGEMENT JOURNEY</span>
              <span className="kicker-line"></span>
            </motion.div>

            <motion.h2 className="engagement-title-centered" variants={fadeUp}>
              From requirement to <br className="desktop-break" />
              measurable assurance.
            </motion.h2>

            <motion.p className="engagement-desc-centered" variants={fadeUp}>
              A structured engagement journey keeps scope, priorities, ownership and outcomes clear from the beginning.
            </motion.p>
          </motion.div>

          {/* Engagement Journey 4-Step Grid */}
          <div className="engagement-steps-gold-wrapper">
            <motion.div
              className="engagement-steps-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.18
                  }
                }
              }}
            >
              {engagementSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  className="engagement-step-card"
                  variants={{
                    hidden: { opacity: 0, x: -70 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
                    }
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <div className="engagement-step-header">
                    <span className="engagement-step-num">{step.num}</span>
                  </div>
                  <h3 className="engagement-step-title">{step.title}</h3>
                  <p className="engagement-step-desc">{step.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Centered, Full Width */}
      <section className="cta-centered-section">
        <motion.div
          className="cta-centered-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Kicker */}
          <motion.div className="cta-kicker" variants={fadeIn}>
            <span className="cta-kicker-line"></span>
            <span className="cta-kicker-text">START WITH YOUR REQUIREMENT</span>
          </motion.div>

          {/* Headline */}
          <motion.h2 className="cta-centered-title" variants={fadeUp}>
            Get a tailored cybersecurity services quote
            <br />
            or speak with our team.
          </motion.h2>

          {/* Description */}
          <motion.p className="cta-centered-desc" variants={fadeUp}>
            Share your requirement through the dedicated VAPT intake or request a tailored quote for
            TPRM, privacy, compliance, advisory and SOC support.
          </motion.p>

          {/* Two Buttons */}
          <motion.div className="cta-centered-buttons" variants={fadeUp}>
            <motion.a
              href="#quote"
              className="cta-btn-primary"
            >
              <span className="btn-text-roll">
                <span className="text-original">Get a Quote</span>
                <span className="text-duplicate" aria-hidden="true">Get a Quote</span>
              </span>
            </motion.a>
            <motion.a
              href="#consultation"
              className="cta-btn-secondary"
            >
              <span className="btn-text-roll">
                <span className="text-original">Request consultation</span>
                <span className="text-duplicate" aria-hidden="true">Request consultation</span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
