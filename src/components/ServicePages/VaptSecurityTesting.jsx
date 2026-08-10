import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { Bug, Terminal, Cpu, ArrowRight, ShieldAlert } from 'lucide-react'
import '../../styles/servicePages.css'

export default function VaptSecurityTesting() {
  const navigate = useNavigate()

  return (
    <div className="service-page-layout">
      <Navbar />

      <header className="service-page-hero">
        <div className="service-page-container">
          <div className="service-badge-pill" style={{ background: '#ccfbf1', color: '#0f766e' }}>
            <Bug size={16} /> VAPT &amp; SECURITY TESTING
          </div>
          <h1 className="service-page-title">
            Vulnerability Assessment &amp; Penetration Testing (VAPT)
          </h1>
          <p className="service-page-subtitle">
            Deep-dive security assessments covering Web Applications, APIs, Mobile Apps, Cloud Infrastructure, External/Internal Networks, and Thick-Client applications with zero false positives.
          </p>

          <div className="service-hero-actions">
            <button className="service-btn-primary" onClick={() => navigate('/calendar')}>
              Request VAPT Intake <ArrowRight size={16} />
            </button>
            <button className="service-btn-secondary" onClick={() => navigate('/')}>
              Explore Other Services
            </button>
          </div>

          <div className="frameworks-tags">
            <span className="framework-tag">OWASP Top 10</span>
            <span className="framework-tag">API Security</span>
            <span className="framework-tag">Cloud Penetration Testing</span>
            <span className="framework-tag">Network Audit</span>
            <span className="framework-tag">Red Teaming</span>
          </div>
        </div>
      </header>

      <section className="service-details-section">
        <div className="service-page-container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>Comprehensive Assessment Modules</h2>
          
          <div className="section-grid">
            <div className="service-detail-card">
              <div className="detail-card-icon"><Terminal size={24} /></div>
              <h3 className="detail-card-title">Web &amp; API Penetration Testing</h3>
              <p className="detail-card-desc">
                In-depth manual &amp; automated vulnerability analysis of REST/GraphQL APIs, microservices, and web platforms.
              </p>
            </div>

            <div className="service-detail-card">
              <div className="detail-card-icon"><Cpu size={24} /></div>
              <h3 className="detail-card-title">Cloud Infrastructure Security</h3>
              <p className="detail-card-desc">
                AWS, Azure, and GCP misconfiguration audits, IAM privilege escalation reviews, and container security testing.
              </p>
            </div>

            <div className="service-detail-card">
              <div className="detail-card-icon"><ShieldAlert size={24} /></div>
              <h3 className="detail-card-title">Red Teaming &amp; Adversary Emulation</h3>
              <p className="detail-card-desc">
                Simulated real-world cyberattacks testing organizational detection capabilities, incident response, and perimeter defense.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
