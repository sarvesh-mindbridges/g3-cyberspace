import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'

export default function Securityservices() {
  const navigate = useNavigate()

  const mssMatrixData = [
    {
      category: 'Detect & Respond',
      cardBg: '#f0fdf4',
      borderColor: 'rgba(34, 197, 94, 0.16)',
      cards: [
        {
          title: 'Managed Detection & Response',
          desc: 'Monitoring, triage, investigation, escalation and incident coordination.'
        },
        {
          title: 'SIEM / SOAR Operations',
          desc: 'Log-source onboarding, platform administration, tuning, dashboards and workflow automation.'
        },
        {
          title: 'Threat Hunting',
          desc: 'Targeted investigation using available telemetry, threat intelligence and analyst hypotheses.'
        }
      ]
    },
    {
      category: 'Protect & Operate',
      cardBg: '#f0f9ff',
      borderColor: 'rgba(2, 132, 199, 0.16)',
      cards: [
        {
          title: 'Endpoint Security / EDR',
          desc: 'Policy oversight, agent health, alert support and endpoint-security administration.'
        },
        {
          title: 'Network Security',
          desc: 'Operational support for firewalls, VPN and agreed network-security controls.'
        },
        {
          title: 'Cloud Security',
          desc: 'Cloud security monitoring, configuration review and posture-management support.'
        }
      ]
    },
    {
      category: 'Reduce Exposure',
      cardBg: '#ecfeff',
      borderColor: 'rgba(13, 148, 136, 0.16)',
      cards: [
        {
          title: 'Vulnerability Management',
          desc: 'Risk-based prioritisation, remediation tracking, ageing and closure governance.'
        },
        {
          title: 'Identity & Access Security',
          desc: 'Operational support for agreed identity, access and privileged-access security controls.'
        },
        {
          title: 'Security Governance',
          desc: 'Service reviews, control observations, security reporting and continuous-improvement actions.'
        }
      ]
    }
  ]

  const mssValueCards = [
    {
      tag: 'OPERATIONAL CAPACITY',
      title: 'Reduce Internal Workload',
      desc: 'Shift defined monitoring, administration, follow-up and reporting activities into a managed operating model.'
    },
    {
      tag: 'CONTROL EFFECTIVENESS',
      title: 'Get More From Existing Tools',
      desc: 'Improve configuration, tuning, visibility and operational use of the security technologies already deployed.'
    },
    {
      tag: 'SPECIALIST SKILLS',
      title: 'Access Security Expertise',
      desc: 'Use specialist support across monitoring, detection, vulnerability, cloud, endpoint and security-platform operations.'
    },
    {
      tag: 'GOVERNANCE',
      title: 'Maintain Clear Oversight',
      desc: 'Track open actions, recurring issues, security trends and improvement priorities through defined reporting and reviews.'
    }
  ]

  const mssFitCardsData = [
    {
      title: 'Limited Security Operations Capacity',
      desc: 'Your internal security or IT team is handling monitoring, administration and remediation follow-up alongside other priorities.'
    },
    {
      title: 'Security Tools Are Underutilised',
      desc: 'Existing SIEM, EDR, cloud or network-security technologies require better configuration, tuning or day-to-day management.'
    },
    {
      title: 'Vulnerability Backlogs Are Growing',
      desc: 'Findings are being identified, but prioritisation, assignment, tracking and closure need stronger governance.'
    },
    {
      title: 'Specialist Skills Are Not Always Available',
      desc: 'You need access to security operations expertise without maintaining every specialist role as a permanent internal position.'
    },
    {
      title: 'Security Ownership Is Fragmented',
      desc: 'Operational responsibilities are spread across infrastructure, cloud, security and application teams with limited coordination.'
    },
    {
      title: 'Reporting & Assurance Expectations Are Increasing',
      desc: 'Management, customers or regulators require more consistent evidence of security operations and remediation governance.'
    }
  ]

  const mssRaciData = [
    {
      activity: 'Security monitoring',
      g3Service: 'Monitor agreed tools and security events; triage and escalate in accordance with the service model.',
      clientShared: 'Maintain required system access, connectivity and approved log-source availability.'
    },
    {
      activity: 'Security-tool operations',
      g3Service: 'Perform agreed administration, tuning, health checks and operational support.',
      clientShared: 'Approve material architecture or policy changes outside delegated authority.'
    },
    {
      activity: 'Vulnerability management',
      g3Service: 'Prioritise findings, track remediation and report ageing and status.',
      clientShared: 'Implement remediation where changes remain with application, infrastructure or business teams.'
    },
    {
      activity: 'Incident handling',
      g3Service: 'Investigate, escalate and coordinate actions within the defined service scope.',
      clientShared: 'Own business decisions, risk acceptance and actions requiring client authority.'
    },
    {
      activity: 'Governance',
      g3Service: 'Provide service reports, security observations and improvement recommendations.',
      clientShared: 'Retain overall risk ownership, regulatory accountability and management approval.'
    }
  ]

  const mssDeliverablesData = [
    {
      title: 'Operational Deliverables',
      items: [
        'Security event and incident worklist',
        'Vulnerability prioritisation and remediation tracker',
        'Security-tool health and tuning actions',
        'Configuration and posture observations',
        'Open security actions and escalation status'
      ]
    },
    {
      title: 'Governance Deliverables',
      items: [
        'Monthly or agreed service report',
        'Incident and security trend summary',
        'Remediation ageing and closure status',
        'Recurring control issues and improvement priorities',
        'Periodic security service review'
      ]
    }
  ]
  
  const managedsocsecurityservices = [
    { area: 'Primary purpose', soc: 'Detect, investigate and coordinate response to security threats.', security: 'Operate, optimise and govern a broader set of security technologies and controls.'},
    { area: 'Typical scope', soc: 'Monitoring, triage, investigation, hunting, detection engineering and incident workflows.', security: 'Managed SOC activities plus endpoint, network, cloud, vulnerability, identity and security-platform operations.'},
    { area: 'Best fit', soc: 'You primarily need stronger monitoring, detection and incident capability.', security: 'You need ongoing operational ownership across several security domains.'},
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="service-hero-centered-screen">
        <div className="service-hero-center-box">
          {/* Main Headline */}
          <h1 className="service-hero-heading">
            Operate and optimise your <br className="desktop-break" />
            security controls with <br className="desktop-break" />
            <span className="soc-gradient-text">specialist support.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="service-hero-description">
            G3 Managed Security Services provide ongoing operational support for security platforms and controls across SIEM/SOAR, endpoint, network, cloud, vulnerability management and identity. The service can be fully managed, co-managed or used to augment an existing security team.
          </p>

          {/* Action Buttons Centered */}
          <div className="service-buttons-centered">
            <button className="btn-compliance-quote" onClick={() => navigate('/calendar')}>
              <span className="btn-text-roll">
                <span className="text-original">Discuss Managed Security</span>
                <span className="text-duplicate" aria-hidden="true">Discuss Managed Security</span>
              </span>
            </button>
          </div>

          {/* MSS Services Matrix Grid */}
          <div className="mss-matrix-container">
            {mssMatrixData.map((row, rIdx) => (
              <motion.div 
                key={rIdx} 
                className="mss-matrix-row"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.55, delay: rIdx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* White Category Card (Static) */}
                <div className="mss-category-card">
                  <h3 className="mss-category-title">{row.category}</h3>
                </div>

                {/* Right 3 Sub-Cards Container */}
                <div className="mss-cards-wrapper">
                  {row.cards.map((card, cIdx) => (
                    /* 3D Hover Effect 2: Colored Sub-Card (Float Depth Tilt) */
                    <motion.div 
                      key={cIdx} 
                      className="mss-sub-card"
                      style={{ 
                        backgroundColor: row.cardBg, 
                        borderColor: row.borderColor,
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center center'
                      }}
                      whileHover={{ rotateX: -7, rotateY: 6, scale: 1.035, y: -6 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                    >
                      <h4 className="mss-sub-title">{card.title}</h4>
                      <p className="mss-sub-desc">{card.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Value Section inside/below service-hero-center-box */}
          <motion.section 
            className="mss-value-section"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header Row */}
            <div className="mss-value-header">
              <h2 className="standards-heading left-aligned-heading">
                Improve day-to-day security <br className="desktop-break" />
                operations <span className="soc-gradient-text">without building every <br className="desktop-break" />
                capability internally.</span>
              </h2>
            </div>

            {/* 4 Cards Grid */}
            <div className="mss-value-cards-grid">
              {mssValueCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item soc-card-item mss-value-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="engagement-pill-badge" style={{ marginBottom: '0.6rem' }}>{card.tag}</span>
                  <h3 className="standards-card-title">{card.title}</h3>
                  <p className="standards-card-desc">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Practical Fit Section */}
          <motion.section 
            className="mss-fit-section"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header Row Centered */}
            <div className="mss-fit-header">
              <h2 className="standards-heading centering-text-soc">
                A practical fit when security <br className="desktop-break" />
                operations are becoming <br className="desktop-break" />
                <span className="soc-gradient-text">difficult to sustain internally.</span>
              </h2>
            </div>

            {/* 6 Cards Grid (3x2) */}
            <div className="mss-fit-cards-grid">
              {mssFitCardsData.map((card, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item mss-fit-card"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.55, 
                    delay: (index % 3) * 0.14, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="standards-card-title" style={{ marginTop: '0.85rem' }}>{card.title}</h3>
                  <p className="standards-card-desc">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Responsibility Model RACI Table Section */}
          <motion.section 
            className="mss-raci-section"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header Row Centered */}
            <div className="mss-raci-header">
              <h2 className="standards-heading centering-text-soc">
                Define ownership clearly <br className="desktop-break" />
                <span className="soc-gradient-text">before operations begin.</span>
              </h2>
              <p className="standards-desc-centered" style={{ marginTop: '0.85rem' }}>
                The detailed responsibility model is agreed in the statement of work and service RACI. A typical model is shown below.
              </p>
            </div>

            {/* Premium Interactive Table */}
            <div className="mss-table-wrapper">
              <table className="mss-raci-table">
                <thead>
                  <tr>
                    <th>ACTIVITY</th>
                    <th>G3 MANAGED SERVICE</th>
                    <th>CLIENT / SHARED RESPONSIBILITY</th>
                  </tr>
                </thead>
                <tbody>
                  {mssRaciData.map((row, idx) => (
                    <motion.tr 
                      key={idx}
                      className="mss-table-row"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ scale: 1.012 }}
                    >
                      <td className="mss-col-activity">{row.activity}</td>
                      <td className="mss-col-g3">{row.g3Service}</td>
                      <td className="mss-col-client">{row.clientShared}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* MSS Measurable & Visible Deliverables Section */}
          <motion.section 
            className="soc-deliverables-section"
            style={{ width: '100%', maxWidth: '1180px', marginTop: '4.5rem', marginBottom: '5rem' }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header Row Centered */}
            <div className="mss-fit-header">
              <h2 className="standards-heading centering-text-soc">
                Make managed security <br className="desktop-break" />
                <span className="soc-gradient-text">measurable and visible.</span>
              </h2>
            </div>

            {/* 2 Deliverables Cards (Using Reference CSS) */}
            <div className="soc-deliverables-grid">
              {mssDeliverablesData.map((deliv, index) => (
                <motion.div 
                  key={index} 
                  className="soc-deliverable-card"
                  initial={{ opacity: 0, rotateY: index === 0 ? -22 : 22, scale: 0.95 }}
                  whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <h3 className="soc-deliverable-title">{deliv.title}</h3>
                  <ul className="soc-features-list">
                    {deliv.items.map((item, itemIdx) => (
                      <motion.li 
                        key={itemIdx}
                        className="soc-feature-item"
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.35, delay: 0.2 + itemIdx * 0.06 }}
                        whileHover={{ x: 4, scale: 1.015 }}
                      >
                        <span className="soc-feature-dot"></span>
                        <span className="soc-feature-text">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

           <motion.section 
            className="soc-deliverables-section"
            style={{ width: '100%', maxWidth: '1180px', marginTop: '4.5rem', marginBottom: '5rem' }}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} 
           >
              <div className="mss-fit-header">
              <h2 className="standards-heading centering-text-soc">
                 Choose based on the <br className="desktop-break" />
                <span className="soc-gradient-text"> operational responsibility</span><br className="desktop-break" />
                you need G3 to take on.
              </h2>
             </div>
               <div className="mss-table-wrapper">

              <table className="mss-raci-table">
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Managed Soc</th>
                    <th>Managed Security Services</th>
                  </tr>
                </thead>
                <tbody>
                  {managedsocsecurityservices.map((row,idx)=>(
                    <motion.tr 
                      key={idx}
                      className="mss-table-row"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ scale: 1.012 }}
                    >
                     <td className="mss-col-activity">{row.area}</td>
                     <td className="mss-col-g3">{row.soc}</td>
                     <td className="mss-col-client">{row.security}</td>


                    </motion.tr>
                  ))}
                </tbody>
              </table>

            </div>
           </motion.section>

        </div>
      </main>
    </div>
  )
}
