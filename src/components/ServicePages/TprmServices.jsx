import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { Users, FileSpreadsheet, CheckSquare, ArrowRight, ShieldCheck } from 'lucide-react'
import '../../styles/servicePages.css'

export default function TprmServices() {
  const navigate = useNavigate()

  return (
    <div className="service-page-layout">
      <Navbar />

      <header className="service-page-hero">
        <div className="service-page-container">
          <div className="service-badge-pill" style={{ background: '#ccfbf1', color: '#0f766e' }}>
            <Users size={16} /> TPRM PROFESSIONAL SERVICES
          </div>
          <h1 className="service-page-title">
            Third-Party Risk Management (TPRM)
          </h1>
          <p className="service-page-subtitle">
            End-to-end supply chain risk oversight, vendor security posture assessments, continuous evidence validation, and contract assurance.
          </p>

          <div className="service-hero-actions">
            <button className="service-btn-primary" onClick={() => navigate('/calendar')}>
              Book TPRM Demo <ArrowRight size={16} />
            </button>
            <button className="service-btn-secondary" onClick={() => navigate('/')}>
              Explore Other Services
            </button>
          </div>

          <div className="frameworks-tags">
            <span className="framework-tag">Vendor Risk Scoring</span>
            <span className="framework-tag">Supplier Audits</span>
            <span className="framework-tag">SIG / CAIQ Questionnaires</span>
            <span className="framework-tag">Contract Assurance</span>
          </div>
        </div>
      </header>

      <section className="service-details-section">
        <div className="service-page-container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>Supply Chain Risk Management Scope</h2>
          
          <div className="section-grid">
            <div className="service-detail-card">
              <div className="detail-card-icon"><FileSpreadsheet size={24} /></div>
              <h3 className="detail-card-title">Vendor Intake &amp; Triage</h3>
              <p className="detail-card-desc">
                Automated vendor onboarding, risk tiering, and customized security questionnaires tailored to vendor criticality.
              </p>
            </div>

            <div className="service-detail-card">
              <div className="detail-card-icon"><CheckSquare size={24} /></div>
              <h3 className="detail-card-title">Evidence &amp; Audit Validation</h3>
              <p className="detail-card-desc">
                Rigorous review of vendor SOC 2 reports, ISO certificates, VAPT summaries, and security policy attestations.
              </p>
            </div>

            <div className="service-detail-card">
              <div className="detail-card-icon"><ShieldCheck size={24} /></div>
              <h3 className="detail-card-title">Continuous Supply Chain Oversight</h3>
              <p className="detail-card-desc">
                Ongoing monitoring of vendor cyber exposure, breach alerts, and contract compliance milestones.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
