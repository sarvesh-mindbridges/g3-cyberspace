import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { Briefcase, UserCheck, Shield, ArrowRight, BarChart3 } from 'lucide-react'
import '../../styles/servicePages.css'

export default function VcisoVdpoAdvisory() {
  const navigate = useNavigate()

  return (
    <div className="service-page-layout">
      <Navbar />

      <header className="service-page-hero">
        <div className="service-page-container">
          <div className="service-badge-pill" style={{ background: '#ccfbf1', color: '#0f766e' }}>
            <Briefcase size={16} /> vCISO &amp; vDPO ADVISORY
          </div>
          <h1 className="service-page-title">
            Retained vCISO &amp; vDPO Leadership
          </h1>
          <p className="service-page-subtitle">
            Executive cybersecurity and privacy leadership on demand. Strategic roadmap execution, board reporting, regulatory representation, and security program maturity.
          </p>

          <div className="service-hero-actions">
            <button className="service-btn-primary" onClick={() => navigate('/calendar')}>
              Book Executive Consultation <ArrowRight size={16} />
            </button>
            <button className="service-btn-secondary" onClick={() => navigate('/')}>
              Explore Other Services
            </button>
          </div>

          <div className="frameworks-tags">
            <span className="framework-tag">Virtual CISO</span>
            <span className="framework-tag">Virtual DPO</span>
            <span className="framework-tag">Board Reporting</span>
            <span className="framework-tag">Strategic Security Roadmap</span>
          </div>
        </div>
      </header>

      <section className="service-details-section">
        <div className="service-page-container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>Executive Advisory Services</h2>
          
          <div className="section-grid">
            <div className="service-detail-card">
              <div className="detail-card-icon"><BarChart3 size={24} /></div>
              <h3 className="detail-card-title">Strategic Security Roadmap &amp; Budget</h3>
              <p className="detail-card-desc">
                Aligning cybersecurity investments with business growth, risk appetite, and executive board expectations.
              </p>
            </div>

            <div className="service-detail-card">
              <div className="detail-card-icon"><Shield size={24} /></div>
              <h3 className="detail-card-title">Retained CISO Leadership</h3>
              <p className="detail-card-desc">
                Acting CISO representation for customer security audits, enterprise vendor questionnaires, and board briefings.
              </p>
            </div>

            <div className="service-detail-card">
              <div className="detail-card-icon"><UserCheck size={24} /></div>
              <h3 className="detail-card-title">Designated Virtual DPO</h3>
              <p className="detail-card-desc">
                External Data Protection Officer mandate fulfillment required under GDPR, Saudi PDPL, and DPDPA 2023.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
