import React from 'react'
import { Navbar } from './Navbar'
import '../styles/calendar.css'

export default function CalendarComponent() {
  return (
    <div className="calendar-page-container">
      <Navbar variant="g3secai" />

      <main className="calendar-main-content">
        <div className="calendly-iframe-container">
          <iframe
            src="https://calendly.com/gokul-g3cyberspace/30min?month=2026-08"
            width="100%"
            height="750"
            frameBorder="0"
            title="Book a Demo - GokulKrishna G"
            className="calendly-iframe"
          />
        </div>
      </main>
    </div>
  )
}
