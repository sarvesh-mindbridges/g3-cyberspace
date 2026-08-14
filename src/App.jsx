import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import G3SecAi from './components/G3SecAi'
import Calendar from './components/Calendar'
import CybersecurityCompliance from './components/ServicePages/CybersecurityCompliance'
import VaptSecurityTesting from './components/ServicePages/VaptSecurityTesting'
import TprmServices from './components/ServicePages/TprmServices'
import SocOperations from './components/ServicePages/SocOperations'
import PrivacyDataProtection from './components/ServicePages/PrivacyDataProtection'
import VcisoVdpoAdvisory from './components/ServicePages/VcisoVdpoAdvisory'
import Securityservices from './components/ServicePages/Securityservices'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        <Route path="/g3secai" element={<G3SecAi />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/services/cybersecurity-compliance" element={<CybersecurityCompliance />} />
        <Route path="/services/vapt-security-testing" element={<VaptSecurityTesting />} />
        <Route path="/services/tprm-services" element={<TprmServices />} />
        <Route path="/services/soc-operations" element={<SocOperations />} />
        <Route path="/services/privacy-data-protection" element={<PrivacyDataProtection />} />
        <Route path="/services/vciso-vdpo-advisory" element={<VcisoVdpoAdvisory />} />
        <Route path="/services/security-services" element={<Securityservices />} />
      </Routes>
      <Footer />
    </div>
  )
}
