import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar'
import '../../styles/servicePages.css'

export default function CybersecurityCompliance() {
  const navigate = useNavigate()

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="service-hero-centered-screen">
        <div className="service-hero-center-box">
          {/* Top Category Badge */}
          <div className="service-badge-line">
            <span className="badge-dash">—</span> CYBERSECURITY &amp; COMPLIANCE ASSURANCE
          </div>

          {/* Main Headline */}
          <h1 className="service-hero-heading">
            Build controls that work - and assurance that <span className="highlight-text-gradient">stands up to scrutiny.</span>
          </h1>

          {/* Subtitle / Description */}
          <p className="service-hero-description">
            G3 Cyberspace supports management - system and cybersecurity - framework programmes from scope definition and gap assessment through implementation, evidence readiness, internal audit support, remediation and independent audit coordination.
          </p>

          {/* Feature Pills */}
          <div className="service-pills-wrapper">
            <span className="service-pill-item">Framework readiness</span>
            <span className="service-pill-item">Control implementation</span>
            <span className="service-pill-item">Policies &amp; evidence</span>
            <span className="service-pill-item">Internal audit support</span>
            <span className="service-pill-item">Remediation &amp; certification coordination</span>
          </div>

          {/* Action Buttons Centered */}
          <div className="service-buttons-centered">
            <button className="btn-compliance-quote" onClick={() => navigate('/calendar')}>
              <span className="btn-text">Get a Compliance Quote</span>
            </button>
            <button className="btn-discuss-req" onClick={() => navigate('/calendar')}>
              <span className="btn-text">Discuss your requirement</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
