import React from 'react'
import { Navbar } from './Navbar'
import g3banner from '../assets/logo/g3banner.jpg'
import '../styles/g3secai.css'

function G3SecAi(){
    return(
        <div className="g3secai-page">
            <Navbar variant="g3secai" />
            
            {/* Hero Banner Showcase Section */}
            <section className="g3secai-hero-banner">
                <div className="g3secai-hero-container">
                    <div className="g3secai-hero-left">
                        <h1 className="g3secai-hero-title">
                            Automate Controls. Assure Compliance.<br />
                            Accelerate Decision.
                        </h1>
                        <p className="g3secai-hero-subtitle">
                            Smarter governance, faster compliance, and intelligent oversight-all in one platform.
                        </p>
                    </div>
                    <div className="g3secai-hero-right">
                        <img 
                            src={g3banner} 
                            alt="Automate Controls. Assure Compliance." 
                            className="g3secai-banner-img" 
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
export default G3SecAi