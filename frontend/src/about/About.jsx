import React from 'react'
import "./About.css"
import AboutWater from "../pages/AboutWater"
import AboutCertificate from './AboutCertificate'
import MajorComp from "../pages/MajorComp"
function About() {
  return (
    <>
      {/* ========== Banner Image Section ========== */}
      <div className="common-page-element">
        <div className="first-common-image">
          <img src="./images/about.jpg" alt="about" />
        </div>
      </div>

      {/* ========== Water Treatment Description Component ========== */}
      <AboutWater />

      {/* ========== Company Strength Section ========== */}
      <section className="about-strengths">
        <div className="container">
          <h2>Why Choose 3D Aqua Water Treatment Company?</h2>
          <p className="intro-text">
            3D Aqua is a trusted name for complete water treatment solutions in India. Here's why customers across the country prefer us:
          </p>

          {/* Strength Points List */}
          <div className="strengths-content">
            <p>
              <strong>✔ All-in-One Water Solutions:</strong> Waste Water, Hard Water, and complete Water Treatment – all solutions available under one roof.
            </p>
            <p>
              <strong>✔ PAN India Service:</strong> We provide nationwide service even after sales, ensuring long-term satisfaction and support.
            </p>
            <p>
              <strong>✔ 20+ Years of Experience:</strong> Our team comprises industry professionals with more than 20 years of hands-on experience.
            </p>
            <p>
              <strong>✔ 24/7 Customer Support:</strong> You can reach us anytime at <strong>89630 89630</strong> – our experts are always ready to assist.
            </p>
            <p>
              <strong>✔ Own Manufacturing Unit:</strong> Located at C-268, Sector-10, Noida (UP), our in-house manufacturing unit ensures quality and timely delivery.
            </p>
            <p>
              <strong>✔ Trusted Nationwide:</strong> Known for reliability and effectiveness, 3D Aqua has become a symbol of trust across the water treatment industry.
            </p>
          </div>
        </div>
      </section>

      {/* ========== Certificate Showcase Section ========== */}
      <AboutCertificate />

      {/* ========== Major Component Section (e.g., testimonials or partners) ========== */}
      <MajorComp />

    </>
  )
}

export default About
