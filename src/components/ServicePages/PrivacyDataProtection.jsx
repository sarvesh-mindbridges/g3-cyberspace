import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { Lock, FileText, Globe, ArrowRight, UserCheck } from 'lucide-react'
import '../../styles/servicePages.css'

export default function PrivacyDataProtection() {
  const navigate = useNavigate()

  return (
    <div className="service-page-layout">
      <Navbar />

      <header className="service-page-hero">
        <div className="service-page-container">
          <div className="service-badge-pill" style={{ background: '#ccfbf1', color: '#0f766e' }}>
            <Lock size={16} /> PRIVACY &amp; DATA PROTECTION
          </div>
          <h1 className="service-page-title">
            Privacy &amp; Data Governance
          </h1>
          <p className="service-page-subtitle">
            Complete data protection officer (vDPO) advisory, DPDPA (India), GDPR (EU), Saudi PDPL, and UAE Privacy Law compliance readiness.
          </p>

          <div className="service-hero-actions">
            <button className="service-btn-primary" onClick={() => navigate('/calendar')}>
              Book Privacy Assessment <ArrowRight size={16} />
            </button>
            <button className="service-btn-secondary" onClick={() => navigate('/')}>
              Explore Other Services
            </button>
          </div>

          <div className="frameworks-tags">
            <span className="framework-tag">DPDPA 2023</span>
            <span className="framework-tag">GDPR Compliance</span>
            <span className="framework-tag">Saudi PDPL</span>
            <span className="framework-tag">UAE Data Law</span>
            <span className="framework-tag">DPIA &amp; Data Mapping</span>
          </div>
        </div>
      </header>

      <section className="service-details-section">
        <div className="service-page-container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>Data Protection Solutions</h2>
          
          <div className="section-grid">
            <div className="service-detail-card">
              <div className="detail-card-icon"><FileText size={24} /></div>
              <h3 className="detail-card-title">Data Protection Impact Assessment (DPIA)</h3>
              <p className="detail-card-desc">
                Structured assessments evaluating personal data workflows, consent mechanisms, and cross-border transfer risks.
              </p>
            </div>

            <div className="service-detail-card">
              <div className="detail-card-icon"><UserCheck size={24} /></div>
              <h3 className="detail-card-title">Data Subject Rights (DSAR) Workflows</h3>
              <p className="detail-card-desc">
                Automated intake and fulfillment playbooks for access, correction, erasure, and consent revocation requests.
              </p>
            </div>

            <div className="service-detail-card">
              <div className="detail-card-icon"><Globe size={24} /></div>
              <h3 className="detail-card-title">Cross-Border Data Transfer Governance</h3>
              <p className="detail-card-desc">
                Standard contractual clauses (SCCs), transfer impact assessments, and regional data localization strategy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
