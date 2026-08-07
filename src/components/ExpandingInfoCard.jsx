import React from 'react'
import { motion } from 'framer-motion'
import '../styles/expandingCard.css'

const cardVariants = {
  hidden: {
    width: '6px',
    maxWidth: '6px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0.85rem',
    paddingBottom: '0.85rem',
    scale: 0.98,
    backgroundColor: 'rgba(13, 148, 136, 0.95)',
    backdropFilter: 'blur(0px)',
    boxShadow: '0 0 12px rgba(13, 148, 136, 0.9), 0 0 24px rgba(6, 182, 212, 0.7)',
    borderColor: 'transparent',
    borderRadius: '4px',
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
      when: 'afterChildren'
    }
  },
  visible: {
    width: '100%',
    maxWidth: '380px',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
    paddingTop: '0.95rem',
    paddingBottom: '0.95rem',
    scale: 1.0,
    backgroundColor: 'rgba(255, 255, 255, 0.55)',
    backdropFilter: 'blur(16px)',
    boxShadow: '0 12px 35px -5px rgba(13, 148, 136, 0.22), 0 0 25px rgba(6, 182, 212, 0.18)',
    borderColor: 'rgba(13, 148, 136, 0.35)',
    borderRadius: '0 14px 14px 0',
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
      when: 'beforeChildren'
    }
  }
}

const contentVariants = {
  hidden: {
    opacity: 0,
    x: -25,
    filter: 'blur(4px)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      delay: 0.25,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

const shieldVariants = {
  hidden: {
    rotate: -18,
    scale: 0.75,
    opacity: 0
  },
  visible: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.65,
      delay: 0.35,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export function ExpandingInfoCard({ 
  text = "Cybersecurity, compliance, privacy, third-party risk and risk intelligence delivered through practical consulting, managed operations and purpose-built technology.",
  className = "" 
}) {
  return (
    <motion.div
      className={`expanding-info-card ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: false }}
      variants={cardVariants}
    >
      <motion.div className="expanding-card-content" variants={contentVariants}>
        <motion.div className="expanding-card-icon-wrapper" variants={shieldVariants}>
          <svg 
            className="expanding-card-shield-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.8"
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <circle cx="12" cy="11" r="2.5" />
            <path d="M12 8.5v5M9.5 11h5" />
          </svg>
        </motion.div>
        
        <p className="expanding-card-text">
          {text}
        </p>
      </motion.div>
    </motion.div>
  )
}
