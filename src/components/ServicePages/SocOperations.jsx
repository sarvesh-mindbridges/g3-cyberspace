import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'

export default function SocOperations() {
  const navigate = useNavigate()

  const operationalCards = [
    {
      title: 'Use - case and coverage review',
      desc: 'Align monitoring scenarios to key assets, threats, business services and regulatory requirements.'
    },
    {
      title: 'Alert triage support',
      desc: 'Establish repeatable decision paths for validation, escalation, containment and closure.'
    },
    {
      title: 'Incident coordination',
      desc: 'Clarify roles, communications, evidence handling and escalation across technical and business teams.'
    },
    {
      title: 'Runbooks and playbooks',
      desc: 'Document consistent handling for high - priority alerts and incident scenarios.'
    },
    {
      title: 'Metrics and reporting',
      desc: 'Create operational dashboards, trends, SLA visibility and management reporting.'
    },
    {
      title: 'SOC maturity uplift',
      desc: 'Assess gaps and prioritise improvements across tooling, process, staffing and governance.'
    }
  ]

  const alertItems = [
    { dot: '#ef4444', name: 'Identity anomaly', status: 'Escalated', statusColor: '#fca5a5' },
    { dot: '#f59e0b', name: 'Suspicious endpoint activity', status: 'Investigating', statusColor: '#fde68a' },
    { dot: '#3b82f6', name: 'Cloud configuration event', status: 'Validated', statusColor: '#93c5fd' },
    { dot: '#10b981', name: 'Phishing report', status: 'Contained', statusColor: '#6ee7b7' }
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="soc-hero-container">
        <div className="soc-hero-grid">
          {/* Left Hero Content */}
          <div className="soc-hero-left">
            <div className="service-badge-line">
              <span className="badge-dash">—</span> SOC OPERATIONS
            </div>

            <h1 className="service-hero-heading left-aligned-heading">
              Strengthen <br className="desktop-break" />
              security <br className="desktop-break" />
              monitoring, triage <br className="desktop-break" />
              and incident <br className="desktop-break" />
              response discipline.
            </h1>

            <p className="service-hero-description left-aligned-desc">
              G3 Cyberspace helps organisations improve SOC coverage, operating rhythm and visibility through use - case design, alert handling support, runbooks, reporting and maturity improvement.
            </p>

            <div className="service-buttons-left">
              <button className="btn-compliance-quote" onClick={() => navigate('/calendar')}>
                <span className="btn-text-roll">
                  <span className="text-original">Get a SOC Quote</span>
                  <span className="text-duplicate" aria-hidden="true">Get a SOC Quote</span>
                </span>
              </button>
              <button className="btn-discuss-req" onClick={() => navigate('/calendar')}>
                <span className="btn-text-roll">
                  <span className="text-original">Discuss your SOC</span>
                  <span className="text-duplicate" aria-hidden="true">Discuss your SOC</span>
                </span>
              </button>
            </div>
          </div>

          {/* Right Interactive Dashboard Card */}
          <motion.div 
            className="soc-hero-right"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="soc-dashboard-card">
              {/* Header */}
              <div className="soc-dash-header">
                <h3 className="soc-dash-title">Security Operations View</h3>
                <span className="soc-status-badge">Operational</span>
              </div>

              {/* Stat Metrics Row */}
              <div className="soc-stats-row">
                <div className="soc-stat-box">
                  <span className="soc-stat-label">Priority alerts</span>
                  <span className="soc-stat-val">12</span>
                  <span className="soc-stat-sub">Under review</span>
                </div>

                <div className="soc-stat-box">
                  <span className="soc-stat-label">Coverage</span>
                  <span className="soc-stat-val">86%</span>
                  <span className="soc-stat-sub">Use - case mapped</span>
                </div>

                <div className="soc-stat-box">
                  <span className="soc-stat-label">Response</span>
                  <span className="soc-stat-val">28m</span>
                  <span className="soc-stat-sub">Median triage</span>
                </div>
              </div>

              {/* Alert Items List */}
              <div className="soc-alerts-list">
                {alertItems.map((item, idx) => (
                  <div key={idx} className="soc-alert-row">
                    <div className="soc-alert-left">
                      <span className="soc-alert-dot" style={{ background: item.dot }}></span>
                      <span className="soc-alert-name">{item.name}</span>
                    </div>
                    <span className="soc-alert-status" style={{ color: item.statusColor }}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Operational Areas Section (Component 2 below Hero) */}
        <div className="soc-operational-section">
          <div className="standards-kicker-line">
            <span className="kicker-dash">—</span> OPERATIONAL AREAS
          </div>

          <div className="soc-operational-header-row">
            <h2 className="standards-heading left-aligned-heading">
              Improve people, process and <br className="desktop-break" />
              monitoring coverage together.
            </h2>

            <p className="soc-header-note">
              Engagements can focus on targeted uplift, retained support or selected managed operations.
            </p>
          </div>

          {/* 6 Operational Cards Grid with Left-to-Right Entrance Animation */}
          <div className="soc-cards-grid">
            {operationalCards.map((card, index) => (
              <motion.div
                key={index}
                className="standards-card-item soc-card-item"
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
