import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { ShieldCheck, FileCheck, Award, ArrowRight, Lock } from 'lucide-react'
import '../../styles/servicePages.css'

export default function CybersecurityCompliance() {
  const navigate = useNavigate()

  return (
    <div className="service-page-layout">
      <Navbar />

      <header className="service-page-hero">
        <div className="service-page-container">
          <div className="service-badge-pill" style={{ background: '#ccfbf1', color: '#0f766e' }}>
            <ShieldCheck size={16} /> CYBERSECURITY &amp; COMPLIANCE ASSURANCE
          </div>
          <h1 className="service-page-title">
            Cybersecurity &amp; Compliance Assurance
          </h1>
          <p className="service-page-subtitle">
            Comprehensive readiness, gap assessments, and continuous compliance oversight across ISO 27001, ISO 27701, ISO 42001, NIST CSF, HITRUST, SOC 2, and global regulatory frameworks.
          </p>
        </div>
      </header>
    </div>
  )
}
