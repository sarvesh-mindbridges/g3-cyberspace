import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { Activity, Radio, Cpu, ArrowRight, Zap } from 'lucide-react'
import '../../styles/servicePages.css'

export default function SocOperations() {
  const navigate = useNavigate()

  return (
    <div className="service-page-layout">
      <Navbar />

      <header className="service-page-hero">
        <div className="service-page-container">
          <div className="service-badge-pill" style={{ background: '#ccfbf1', color: '#0f766e' }}>
            <Activity size={16} /> SOC OPERATIONS &amp; THREAT RESPONSE
          </div>
          <h1 className="service-page-title">
            24/7 Managed SOC &amp; Incident Control
          </h1>
          <p className="service-page-subtitle">
            Round-the-clock security monitoring, active threat triage, automated SOAR playbooks, and rapid incident containment tailored to enterprise environments.
          </p>

          <div className="service-hero-actions">
            <button className="service-btn-primary" onClick={() => navigate('/calendar')}>
              Book SOC Overview <ArrowRight size={16} />
            </button>
            <button className="service-btn-secondary" onClick={() => navigate('/')}>
              Explore Other Services
            </button>
          </div>

          <div className="frameworks-tags">
            <span className="framework-tag">24/7 Monitoring</span>
            <span className="framework-tag">SIEM / SOAR Integration</span>
            <span className="framework-tag">EDR Telemetry</span>
            <span className="framework-tag">Threat Hunting</span>
            <span className="framework-tag">Incident Response</span>
          </div>
        </div>
      </header>

      <section className="service-details-section">
        <div className="service-page-container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>SOC Capabilities</h2>
          
          <div className="section-grid">
            <div className="service-detail-card">
              <div className="detail-card-icon"><Radio size={24} /></div>
              <h3 className="detail-card-title">Real-Time Threat Detection</h3>
              <p className="detail-card-desc">
                Continuous log ingestion, anomaly detection, and correlation rules across cloud, network, and endpoint telemetry.
              </p>
            </div>

            <div className="service-detail-card">
              <div className="detail-card-icon"><Zap size={24} /></div>
              <h3 className="detail-card-title">Incident Triage &amp; Containment</h3>
              <p className="detail-card-desc">
                Rapid analyst triage within minutes, automated isolation playbooks, and root cause investigation.
              </p>
            </div>

            <div className="service-detail-card">
              <div className="detail-card-icon"><Cpu size={24} /></div>
              <h3 className="detail-card-title">Proactive Threat Hunting</h3>
              <p className="detail-card-desc">
                Hypothesis-driven threat hunting uncovering zero-days, lateral movement, and advanced persistent threats (APTs).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
