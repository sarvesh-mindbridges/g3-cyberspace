import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'

export default function PrivacyDataProtection() {
  const navigate = useNavigate()

  const dpdpMiniCards = [
    {
      title: 'Applicability and data landscape',
      desc: 'Map entities, products, data flows, processing purposes, systems, processors and affected individuals.'
    },
    {
      title: 'Notice, consent and withdrawal',
      desc: 'Design user - facing notices, consent journeys, preference records and withdrawal mechanisms.'
    },
    {
      title: 'Data Principal rights',
      desc: 'Establish intake, identity verification, response, grievance and escalation workflows.'
    },
    {
      title: 'Processor and contract governance',
      desc: 'Strengthen privacy obligations, due diligence, instructions, breach support and oversight.'
    },
    {
      title: 'Breach and incident readiness',
      desc: 'Align privacy incidents with detection, assessment, decision, communication and evidence processes.'
    },
    {
      title: 'Special obligations',
      desc: 'Assess children\'s data, high - risk processing and Significant Data Fiduciary obligations where applicable.'
    }
  ]

  const regionalCards = [
    {
      badge: 'IN',
      badgeBg: '#0d9488',
      title: 'India - DPDP Act & Rules',
      subtitle: 'Primary implementation focus for organisations processing digital personal data in India or offering goods and services to individuals in India.',
      bullets: [
        'Notice, consent and lawful processing',
        'Data Principal rights and grievance handling',
        'Processors, security safeguards and breach readiness'
      ],
      primeFocus: true
    },
    {
      badge: 'EU',
      badgeBg: '#2563eb',
      title: 'EU / EEA - GDPR',
      subtitle: 'Governance support across controller and processor obligations, lawful bases, rights, DPIAs, records, transfers and accountability.',
      bullets: [
        'ROPA and lawful - basis mapping',
        'DPIA and privacy - by - design',
        'Cross - border transfer governance'
      ]
    },
    {
      badge: 'KSA',
      badgeBg: '#0f766e',
      title: 'Saudi Arabia - PDPL',
      subtitle: 'Readiness and operational support aligned to the Saudi Personal Data Protection Law, its Implementing Regulations and transfer requirements.',
      bullets: [
        'Controller and processor responsibilities',
        'Data - subject rights and records',
        'Transfer and localisation assessment'
      ]
    },
    {
      badge: 'UAE',
      badgeBg: '#0284c7',
      title: 'UAE - Federal PDPL',
      subtitle: 'Privacy governance for organisations operating under the UAE federal personal - data protection framework.',
      bullets: [
        'Processing purpose and transparency',
        'Rights, security and breach processes',
        'Processor and transfer governance'
      ]
    },
    {
      badge: 'FC',
      badgeBg: '#7c3aed',
      title: 'DIFC, ADGM & QFC',
      subtitle: 'Support for financial - centre privacy regimes and organisations operating across multiple Middle East jurisdictions.',
      bullets: [
        'Jurisdiction and applicability analysis',
        'International transfer mechanisms',
        'DPO, records and accountability'
      ]
    },
    {
      badge: 'HC',
      badgeBg: '#14b8a6',
      title: 'Healthcare & sector privacy',
      subtitle: 'Privacy - readiness support where health information, patient data, employee data or regulated sector information requires enhanced controls.',
      bullets: [
        'HIPAA - oriented readiness support',
        'Sensitive - data handling and access',
        'Vendor, retention and incident controls'
      ]
    }
  ]

  const operatingModelSteps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Identify personal - data processing, systems, locations, purposes, data categories, processors and transfer paths.'
    },
    {
      num: '02',
      title: 'Design',
      desc: 'Define governance, roles, policies, notices, lawful - processing rules, privacy risk methods and control requirements.'
    },
    {
      num: '03',
      title: 'Operationalise',
      desc: 'Implement consent, rights, retention, deletion, vendor privacy, DPIA, breach and records - management workflows.'
    },
    {
      num: '04',
      title: 'Assure',
      desc: 'Monitor evidence, metrics, issues, regulatory changes, training and management reporting through ongoing governance.'
    }
  ]

  const capabilityCards = [
    {
      tag: 'READINESS',
      title: 'Privacy gap and applicability assessment',
      desc: 'Determine applicable obligations, baseline current maturity and build a prioritised implementation roadmap.'
    },
    {
      tag: 'DATA VISIBILITY',
      title: 'Data inventory, flows and ROPA',
      desc: 'Establish structured visibility over processing activities, systems, purposes, locations, recipients and retention.'
    },
    {
      tag: 'TRANSPARENCY',
      title: 'Notices, consent and preferences',
      desc: 'Design external and internal notices, consent journeys, preference management and withdrawal processes.'
    },
    {
      tag: 'INDIVIDUAL RIGHTS',
      title: 'Rights and grievance operations',
      desc: 'Create intake, verification, assignment, response, exception, escalation and evidence procedures.'
    },
    {
      tag: 'RISK',
      title: 'DPIA and privacy - by - design',
      desc: 'Embed privacy assessment into projects, products, procurement, AI use cases and material business changes.'
    },
    {
      tag: 'THIRD PARTIES',
      title: 'Vendor and contract privacy',
      desc: 'Strengthen processor due diligence, contractual clauses, transfer arrangements, incident obligations and oversight.'
    },
    {
      tag: 'LIFECYCLE',
      title: 'Retention, deletion and minimisation',
      desc: 'Translate legal, business and contractual requirements into workable schedules and defensible disposal processes.'
    },
    {
      tag: 'INCIDENTS',
      title: 'Privacy breach readiness',
      desc: 'Align detection, assessment, notification decisions, communications, evidence and post - incident actions.'
    },
    {
      tag: 'LEADERSHIP',
      title: 'vDPO and ongoing advisory',
      desc: 'Provide privacy governance, regulatory monitoring, stakeholder guidance, programme reporting and escalation support.'
    }
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="service-hero-centered-screen">
        <div className="service-hero-center-box">
          {/* Top Category Badge */}
          <div className="service-badge-line">
            <span className="badge-dash">—</span> DATA PRIVACY SERVICES
          </div>

          {/* Main Headline */}
          <h1 className="service-hero-heading">
            Build privacy <br className="desktop-break" />
            governance that <br className="desktop-break" />
            scales <span className="highlight-text-gradient">across <br className="desktop-break" />
            regulations, <br className="desktop-break" />
            markets and <br className="desktop-break" />
            growth.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="service-hero-description">
            G3 Cyberspace helps organisations translate privacy requirements into practical governance, accountable ownership and sustainable operating controls across DPDPA, GDPR, Saudi Arabia's PDPL, UAE privacy regimes, financial - centre requirements and healthcare privacy expectations.
          </p>

          {/* Feature Pills Wrapper */}
          <div className="service-pills-wrapper">
            <span className="service-pill-item">Global privacy readiness</span>
            <span className="service-pill-item">Privacy governance</span>
            <span className="service-pill-item">Consent and rights operations</span>
            <span className="service-pill-item">DPIA and risk</span>
            <span className="service-pill-item">vDPO support</span>
          </div>

          {/* Action Buttons Centered */}
          <div className="service-buttons-centered">
            <button className="btn-compliance-quote" onClick={() => navigate('/calendar')}>
              <span className="btn-text-roll">
                <span className="text-original">Get a Privacy Quote</span>
                <span className="text-duplicate" aria-hidden="true">Get a Privacy Quote</span>
              </span>
            </button>
            <button className="btn-discuss-req" onClick={() => navigate('/calendar')}>
              <span className="btn-text-roll">
                <span className="text-original">Discuss your privacy programme</span>
                <span className="text-duplicate" aria-hidden="true">Discuss your privacy programme</span>
              </span>
            </button>
            <button className="btn-discuss-req" onClick={() => navigate('/')}>
              <span className="btn-text-roll">
                <span className="text-original">Explore privacy automation</span>
                <span className="text-duplicate" aria-hidden="true">Explore privacy automation</span>
              </span>
            </button>
          </div>

          {/* DPDPA Implementation Expertise Box (Dark Card Container) */}
          <motion.div 
            className="dpdp-expertise-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="dpdp-expertise-box">
              {/* Left Column */}
              <div className="dpdp-box-left">
                <div className="standards-kicker-line light-kicker">
                  <span className="kicker-dash">—</span> DPDPA IMPLEMENTATION EXPERTISE
                </div>
                <h2 className="dpdp-box-title">
                  Prepare for India's privacy regime with a practical readiness programme.
                </h2>
                <p className="dpdp-box-desc">
                  Our DPDP work is structured around business applicability, data processing visibility, accountable ownership, operational controls and evidence that can be sustained after the initial implementation.
                </p>
                <button className="btn-dpdpa-quote" onClick={() => navigate('/calendar')}>
                  <span className="btn-text-roll">
                    <span className="text-original">Get a DPDPA Quote</span>
                    <span className="text-duplicate" aria-hidden="true">Get a DPDPA Quote</span>
                  </span>
                </button>
              </div>

              {/* Right 6 Mini Grid Cards */}
              <div className="dpdp-box-right-grid">
                {dpdpMiniCards.map((card, idx) => (
                  <div key={idx} className="dpdp-mini-card">
                    <h4 className="dpdp-mini-title">{card.title}</h4>
                    <p className="dpdp-mini-desc">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Regulatory Coverage Section (6 Regional Cards) */}
          <div className="privacy-regulatory-section">
            <div className="standards-kicker-line">
              <span className="kicker-dash">—</span> REGULATORY COVERAGE
            </div>

            <div className="tprm-coverage-header-row">
              <h2 className="standards-heading left-aligned-heading">
                Privacy expertise across <br className="desktop-break" />
                India, Europe and the <br className="desktop-break" />
                Middle East.
              </h2>

              <p className="tprm-header-note">
                We help organisations build a common privacy operating model while accounting for the requirements, terminology and regulatory expectations of each jurisdiction.
              </p>
            </div>

            {/* 6 Regional Cards Grid */}
            <div className="privacy-regional-cards-grid">
              {regionalCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item regional-card-item"
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
                  <div className="regional-badge-squircle" style={{ background: card.badgeBg }}>
                    {card.badge}
                  </div>
                  <h3 className="standards-card-title">{card.title}</h3>
                  <p className="standards-card-desc">{card.subtitle}</p>
                  <ul className="regional-bullets-list">
                    {card.bullets.map((b, bIdx) => (
                      <li key={bIdx}>• {b}</li>
                    ))}
                  </ul>
                  {card.primeFocus && (
                    <span className="prime-focus-tag">PRIME FOCUS EXPERTISE</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Privacy Operating Model Section (4 Steps) */}
          <div className="privacy-opmodel-section">
            <div className="standards-kicker-line">
              <span className="kicker-dash">—</span> PRIVACY OPERATING MODEL
            </div>

            <h2 className="standards-heading">
              From data discovery to <br className="desktop-break" />
              demonstrable accountability.
            </h2>

            <p className="standards-desc-centered">
              Our approach combines legal and regulatory interpretation with process design, technology enablement, contracts, training and evidence.
            </p>

            {/* 4 Steps Grid */}
            <div className="delivery-cards-grid">
              {operatingModelSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item delivery-card-item"
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.55, 
                    delay: (index % 4) * 0.15, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="delivery-step-badge">{step.num}</div>
                  <h3 className="standards-card-title">{step.title}</h3>
                  <p className="standards-card-desc">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service Capabilities Section (9 Capability Cards Grid) */}
          <div className="privacy-capabilities-section">
            <div className="standards-kicker-line">
              <span className="kicker-dash">—</span> SERVICE CAPABILITIES
            </div>

            <div className="tprm-coverage-header-row">
              <h2 className="standards-heading left-aligned-heading">
                End - to - end support for privacy <br className="desktop-break" />
                implementation and ongoing <br className="desktop-break" />
                governance.
              </h2>

              <p className="tprm-header-note">
                Engage us for a focused assessment, end - to - end implementation, retained vDPO support or targeted improvement programme.
              </p>
            </div>

            {/* 9 Capability Cards Grid */}
            <div className="privacy-capabilities-grid">
              {capabilityCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item engagement-card-item"
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
                  <span className="engagement-pill-badge">{card.tag}</span>
                  <h3 className="standards-card-title">{card.title}</h3>
                  <p className="standards-card-desc">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer Callout Box */}
            <div className="standards-disclaimer-box" style={{ marginTop: '2.5rem' }}>
              <p className="disclaimer-text">
                G3 Cyberspace provides privacy readiness, implementation, governance and advisory support. Jurisdiction - specific legal opinions should be obtained from qualified legal counsel where required.
              </p>
            </div>

            {/* Build Your Privacy Programme CTA Banner Box */}
            <motion.div 
              className="privacy-cta-banner-container"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="privacy-cta-banner-box">
                {/* Left Text Content */}
                <div className="privacy-cta-left">
                  <div className="standards-kicker-line">
                    <span className="kicker-dash">—</span> BUILD YOUR PRIVACY PROGRAMME
                  </div>
                  <h2 className="privacy-cta-title">
                    Start with DPDPA readiness - or <br className="desktop-break" />
                    align multiple privacy regimes <br className="desktop-break" />
                    through one operating model.
                  </h2>
                  <p className="privacy-cta-desc">
                    Share your jurisdictions, business model, data processing profile and target timeline. We will recommend the right assessment, implementation or retained - support approach.
                  </p>
                </div>

                {/* Right Stacked Buttons */}
                <div className="privacy-cta-buttons-stacked">
                  <button className="btn-compliance-quote" onClick={() => navigate('/calendar')}>
                    <span className="btn-text-roll">
                      <span className="text-original">Get a Privacy Quote</span>
                      <span className="text-duplicate" aria-hidden="true">Get a Privacy Quote</span>
                    </span>
                  </button>
                  <button className="btn-discuss-req" onClick={() => navigate('/calendar')}>
                    <span className="btn-text-roll">
                      <span className="text-original">Speak with a privacy specialist</span>
                      <span className="text-duplicate" aria-hidden="true">Speak with a privacy specialist</span>
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  )
}
