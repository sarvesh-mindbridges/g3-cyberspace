import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Navbar } from '../Navbar'
import { ShieldAlert, ArrowRight, Eye, AlertOctagon, Cpu, Lock, Globe, Server } from 'lucide-react'
import '../../styles/servicePages.css'

export default function Soltrisk() {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Eye size={24} />,
      title: "Automated External Asset Discovery",
      desc: "Continuous mapping of all internet-facing domains, IPs, cloud storage buckets, and shadow IT infrastructure."
    },
    {
      icon: <AlertOctagon size={24} />,
      title: "Real-Time Vulnerability & Threat Detection",
      desc: "Instant identification of misconfigurations, unpatched zero-day vulnerabilities, exposed keys, and open ports."
    },
    {
      icon: <Globe size={24} />,
      title: "Dark Web & Exposure Intelligence",
      desc: "Proactive monitoring for leaked enterprise credentials, domain spoofing, and compromised employee data."
    },
    {
      icon: <Cpu size={24} />,
      title: "AI-Prioritized Risk Remediation",
      desc: "Contextual risk scoring that prioritizes high-impact threats and guides your security team through rapid remediation."
    }
  ]

  return (
    <div className="service-page-layout light-theme">
      <Navbar />

      <main className="vciso-hero-container" style={{ padding: "4rem 1.5rem 6rem" }}>
        <div className="service-page-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          
          {/* Hero Section */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="service-badge-pill" style={{ background: "#f0f7ff", color: "#1e5288" }}>
                ATTACK SURFACE MANAGEMENT
              </span>
              <h1 className="service-page-title" style={{ color: "#0f172a", fontSize: "clamp(2.5rem, 4.5vw, 3.8rem)", margin: "1rem 0" }}>
                Sol<span className="soc-gradient-text">trisk</span>
              </h1>
              <p className="service-page-subtitle" style={{ margin: "0 auto 2.5rem auto", maxWidth: "800px" }}>
                Continuous External Asset Discovery & Vulnerability Intelligence Platform. Uncover shadow IT, detect external attack surface risks, and neutralize vulnerabilities before attackers exploit them.
              </p>

              <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button className="service-btn-primary" onClick={() => navigate('/getaquote')}>
                  <span>Get Started / Request Quote</span>
                  <ArrowRight size={18} />
                </button>
                <button className="service-btn-secondary" onClick={() => navigate('/calendar')}>
                  <span>Schedule Demo</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Key Features Grid */}
          <div style={{ marginTop: "4rem" }}>
            <h2 className="standards-heading" style={{ textAlign: "center", marginBottom: "3rem" }}>
              Soltrisk Core Capabilities
            </h2>

            <div className="standards-cards-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {features.map((feat, idx) => (
                <motion.div
                  key={idx}
                  className="standards-card-item"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="detail-card-icon" style={{ background: "rgba(30, 82, 136, 0.1)", color: "#1e5288" }}>
                    {feat.icon}
                  </div>
                  <h3 className="standards-card-title">{feat.title}</h3>
                  <p className="standards-card-desc">{feat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: "5rem",
              background: "linear-gradient(135deg, #092c4c 0%, #1e5288 100%)",
              borderRadius: "24px",
              padding: "3.5rem 2.5rem",
              color: "#ffffff",
              textAlign: "center",
              boxShadow: "0 20px 45px rgba(9, 44, 76, 0.25)"
            }}
          >
            <h2 style={{ fontSize: "2.2rem", fontWeight: "800", margin: "0 0 1rem 0" }}>
              Gain complete visibility over your external attack surface.
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#e2e8f0", maxWidth: "700px", margin: "0 auto 2rem auto" }}>
              Continuously discover exposed assets and eliminate security blind spots with Soltrisk.
            </p>
            <button className="btn-compliance-quote" onClick={() => navigate('/getaquote')} style={{ background: "#ffffff", color: "#092c4c", fontWeight: "800" }}>
              Request Soltrisk Quote & Assessment
            </button>
          </motion.div>

        </div>
      </main>
    </div>
  )
}
