import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'

export default function VaptSecurityTesting() {
  const navigate = useNavigate()

  const coverageCards = [
    {
      title: 'Application security',
      desc: 'Web, mobile, API and thick - client testing focused on technical weaknesses, access control, business logic and exploitable conditions.'
    },
    {
      title: 'Infrastructure security',
      desc: 'External and internal network testing across public services, servers, endpoints, firewalls and configuration weaknesses.'
    },
    {
      title: 'Cloud and configuration',
      desc: 'Review of selected cloud configurations, exposed workloads and security settings based on the agreed scope.'
    },
    {
      title: 'Closure support',
      desc: 'Evidence - backed reporting, walkthroughs, remediation guidance and retesting to validate closure.'
    }
  ]

  const methodSteps = [
    {
      num: '1',
      title: 'Scope confirmation',
      desc: 'Confirm assets, test model, environments and exclusions.'
    },
    {
      num: '2',
      title: 'Discovery and testing',
      desc: 'Automated discovery supported by manual validation and exploitation.'
    },
    {
      num: '3',
      title: 'Risk classification',
      desc: 'Classify findings by severity, business impact and exploitability.'
    },
    {
      num: '4',
      title: 'Reporting and walkthrough',
      desc: 'Provide evidence, remediation recommendations and stakeholder review.'
    },
    {
      num: '5',
      title: 'Retesting',
      desc: 'Validate fixes and support final closure where included.'
    }
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="service-hero-centered-screen">
        <div className="service-hero-center-box">


          {/* Main Headline */}
          <h1 className="service-hero-heading">
            Plan the right <br className="desktop-break" />
            security assessment and <br className="desktop-break" />
            receive a <span className="highlight-text-gradient">tailored quote.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="service-hero-description left-aligned-hero-desc">
            Choose the testing type, assessment model, target environment and asset volumes so we can estimate the effort and prepare a tailored commercial quote.
          </p>

          {/* Action Buttons Centered */}
          <div className="service-buttons-centered">
            <button className="btn-compliance-quote" onClick={() => navigate('/calendar')}>
              <span className="btn-text-roll">
                <span className="text-original">Discuss with our team</span>
                <span className="text-duplicate" aria-hidden="true">Discuss with our team</span>
              </span>
            </button>
            <button className="btn-discuss-req" onClick={() => navigate('/calendar')}>
              <span className="btn-text-roll">
                <span className="text-original">Go to intake form</span>
                <span className="text-duplicate" aria-hidden="true">Go to intake form</span>
              </span>
            </button>
          </div>

          {/* Testing Coverage Section (Centered - Component 1) */}
          <div className="testing-coverage-section">
            <div className="standards-kicker-line">
              <span className="kicker-dash">—</span> TESTING COVERAGE
            </div>

            <h2 className="standards-heading">
              Focused coverage across the <br className="desktop-break" />
              application and infrastructure <br className="desktop-break" />
              attack surface.
            </h2>

            {/* 4 Coverage Cards Grid with Left-to-Right Entrance */}
            <div className="coverage-cards-grid">
              {coverageCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item coverage-card-item"
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ 
                    duration: 0.55, 
                    delay: (index % 2) * 0.15, 
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

          {/* Method Section (Centered below Component 1 - Component 2) */}
          <div className="method-section-centered">

            <motion.div 
              className="method-card-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {methodSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="method-step-row"
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="method-step-num">{step.num}</div>
                  <div className="method-step-info">
                    <h4 className="method-step-title">{step.title}</h4>
                    <p className="method-step-desc">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
