import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'

export default function VcisoVdpoAdvisory() {
  const navigate = useNavigate()

  const engagementItems = [
    'vCISO and security roadmap ownership',
    'vDPO and privacy governance',
    'Governance, policy and control oversight',
    'Risk and audit remediation oversight',
    'Customer, board and auditor - facing assurance'
  ]

  const advisoryCards = [
    {
      title: 'Security leadership',
      desc: 'Roadmaps, governance, risk decisions, policy oversight and executive reporting.'
    },
    {
      title: 'Governance oversight',
      desc: 'Policy direction, control ownership, management reporting and programme accountability.'
    },
    {
      title: 'Privacy leadership',
      desc: 'Privacy governance, programme monitoring, stakeholder guidance and escalation support.'
    },
    {
      title: 'Customer assurance',
      desc: 'Security questionnaires, due diligence responses, prospect discussions and contractual commitments.'
    },
    {
      title: 'Risk and remediation',
      desc: 'Prioritisation, ownership, tracking and closure of audit, assessment and control gaps.'
    },
    {
      title: 'Retained support',
      desc: 'Flexible ongoing access to experienced security, privacy and compliance professionals.'
    }
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="vciso-hero-container">
        {/* Top 2-Column Hero */}
        <div className="vciso-hero-grid">
          {/* Left Column */}
          <div className="vciso-hero-left">
            <div className="service-badge-line">
              <span className="badge-dash">—</span> VCISO · VDPO · EXECUTIVE ADVISORY
            </div>

            <h1 className="service-hero-heading left-aligned-heading">
              Access <br className="desktop-break" />
              experienced <br className="desktop-break" />
              security and privacy <br className="desktop-break" />
              leadership without <br className="desktop-break" />
              building every role <br className="desktop-break" />
              internally.
            </h1>

            <p className="service-hero-description left-aligned-desc">
              Retained advisory support for security strategy, privacy governance, risk decisions, customer assurance and executive oversight.
            </p>

            <div className="service-buttons-left">
              <button className="btn-compliance-quote" onClick={() => navigate('/calendar')}>
                <span className="btn-text-roll">
                  <span className="text-original">Get an Advisory Quote</span>
                  <span className="text-duplicate" aria-hidden="true">Get an Advisory Quote</span>
                </span>
              </button>
              <button className="btn-discuss-req" onClick={() => navigate('/calendar')}>
                <span className="btn-text-roll">
                  <span className="text-original">Meet our team</span>
                  <span className="text-duplicate" aria-hidden="true">Meet our team</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Typical Engagements Card */}
          <motion.div 
            className="vciso-hero-right"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="engagements-card-box">
              <span className="engagements-kicker">TYPICAL ENGAGEMENTS</span>
              <div className="engagements-list">
                {engagementItems.map((item, idx) => (
                  <div key={idx} className="engagement-check-row">
                    <span className="check-icon">✓</span>
                    <span className="check-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 6 Advisory Cards Grid (Centered below Hero) */}
        <div className="vciso-cards-section">
          <div className="vciso-cards-grid">
            {advisoryCards.map((card, index) => (
              <motion.div
                key={index}
                className="standards-card-item vciso-card-item"
                initial={{ opacity: 0, x: -35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ 
                  duration: 0.55, 
                  delay: (index % 3) * 0.15, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="standards-card-title">{card.title}</h3>
                <p className="standards-card-desc">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
