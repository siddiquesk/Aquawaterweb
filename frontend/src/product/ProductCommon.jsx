import React from 'react'
import "./ProductCommon.css"
import { FaEnvelope, FaClock, FaAward, FaCheckCircle } from 'react-icons/fa';
import Company from "../context/company.js"
function ProductCommon() {
  return (
    <>
      <div className="common-element-sewage">
        <h1>Our Clients</h1>
        <div className="common-tv-channel-images">
          {
            Company.slice(1, 6).map((company, index) => (
              <div key={index}>
                <img src={company.image} alt="images" />
              </div>
            ))
          }
        </div>
      </div>

      <section class="testimonial-section">
        <h2 class="testimonial-title">What Our Happy Clients Are Saying</h2>
        <div class="testimonial-cards">
          <div class="testimonial-card">
            <h3>Mr. Raghuram Yadav</h3>
            <p class="client-role">Builder, Delhi</p>
            <p class="client-feedback">
              “Would just like to take a moment and compliment the 3D Aqua Water Treatment Company.
              The Team guys were great to work with and very professional, yet easy to talk to.
              This was probably the most seamless install of RO Plant we have had in a long time.”
            </p>
          </div>
          
          <div class="testimonial-card">
            <h3>Mr. Sumit Yadav</h3>
            <p class="client-role">(Contractor)</p>
            <p class="client-feedback">
              “I called 3D Aqua for STP Plant in Noida Location and I got the best consultant Mr. Maharaj Singh
              for the same. He delivered the best product and services for STP Plant in Noida.
              Highly recommended for any type of work related to Sewage Treatment Plant.”
            </p>
          </div>
          <div class="testimonial-card">
            <h3>Mrs. Rashmi Desai</h3>
            <p class="client-role">(Manager)</p>
            <p class="client-feedback">
              “We just had a new water treatment system installed by 3D Aqua Water Treatment in Rajasthan & can’t speak
              highly enough about this company. From the initial call to the assessment & installation,
              they were top-notch - prompt, professional & courteous. If you’re looking for a water treatment system look them up, you won’t be disappointed!”
            </p>
          </div>
        </div>
      </section>

      <section className="client-review-stats">
        <div className="client-review-card">
          <FaEnvelope className="review-icon" />
          <h2>18400+</h2>
          <p>Satisfied Customers</p>
        </div>
        <div className="client-review-card">
          <FaClock className="review-icon" />
          <h2>20+</h2>
          <p>Years Experience</p>
        </div>
        <div className="client-review-card">
          <FaAward className="review-icon" />
          <h2>9+</h2>
          <p>Countries</p>
        </div>
        <div className="client-review-card">
          <FaCheckCircle className="review-icon" />
          <h2>48+</h2>
          <p>Products Delivered</p>
        </div>
      </section>
    </>
  )
}

export default ProductCommon
