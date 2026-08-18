import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'

export default function TprmServices() {
  const navigate = useNavigate()

  const tprmCards = [
    {
      title: 'TPRM design',
      desc: 'Policy, methodology, segmentation, roles, governance forums, risk acceptance and reporting design.'
    },
    {
      title: 'Assessment operations',
      desc: 'Risk intake, questionnaire selection, evidence review, control validation and risk recommendation support.'
    },
    {
      title: 'Continuous oversight',
      desc: 'Vendor posture visibility, issue follow - up, incident response coordination and supply - chain mapping.'
    },
    {
      title: 'Programme uplift',
      desc: 'Maturity assessment, backlog prioritisation, metrics and remediation roadmap development.'
    },
    {
      title: 'Managed TPRM support',
      desc: 'Dedicated or shared assessment support for vendor reviews, escalations and governance reporting.'
    },
    {
      title: 'Platform enablement',
      desc: 'TRACS 360 configuration, workflow alignment, templates and adoption support.'
    }
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="service-hero-centered-screen">
        <div className="service-hero-center-box">

          {/* Main Headline */}
          <h1 className="service-hero-heading">
            Build third - party risk management <br className="desktop-break" />
            as an operating capability - <br className="desktop-break" />
            not a questionnaire <br className="desktop-break" />
            exercise.
          </h1>

          {/* Subtitle / Description */}
          <p className="service-hero-description left-aligned-hero-desc">
            G3 Cyberspace supports programme design, vendor risk classification, due diligence, evidence review, issue management and ongoing oversight across the third - party lifecycle.
          </p>

          {/* Action Buttons Centered */}
          <div className="service-buttons-centered">
            <button className="btn-compliance-quote" onClick={() => navigate('/getaquote')}>
              <span className="btn-text-roll">
                <span className="text-original">Get a TPRM Quote</span>
                <span className="text-duplicate" aria-hidden="true">Get a TPRM Quote</span>
              </span>
            </button>
            <button className="btn-discuss-req" onClick={() => navigate('/')}>
              <span className="btn-text-roll">
                <span className="text-original">Explore TRACS 360</span>
                <span className="text-duplicate" aria-hidden="true">Explore TRACS 360</span>
              </span>
            </button>
          </div>

          {/* Service Coverage Section (Centered below Hero) */}
          <div className="tprm-coverage-section">
            <div className="standards-kicker-line">
              <span className="kicker-dash">—</span> SERVICE COVERAGE
            </div>

            <div className="tprm-coverage-header-row">
              <h2 className="standards-heading left-aligned-heading">
                Support across strategy, <br className="desktop-break" />
                assessments and ongoing <br className="desktop-break" />
                operations.
              </h2>

            <motion.p 
              className="tprm-header-note"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.018
                  }
                }
              }}
            >
              {"Use the service independently or combine it with TRACS 360 for workflow, visibility and scale.".split(" ").map((word, wIdx, array) => (
                <span key={wIdx} className="typewriter-word">
                  {word.split("").map((char, cIdx) => (
                    <motion.span
                      key={cIdx}
                      className="typewriter-char"
                      variants={{
                        hidden: { opacity: 0, y: 1 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.05 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wIdx < array.length - 1 && <span className="typewriter-space">&nbsp;</span>}
                </span>
              ))}
              <motion.span 
                className="typewriter-cursor"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              >
                |
              </motion.span>
            </motion.p>
            </div>

            {/* 6 Coverage Cards Grid with Left-to-Right Entrance Animation */}
            <div className="tprm-cards-grid">
              {tprmCards.map((card, index) => (
                <motion.div
                  key={index}
                  className="standards-card-item tprm-card-item"
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
        </div>
      </main>
    </div>
  )
}
