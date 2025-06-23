import React from 'react'
import { NavLink } from 'react-router-dom'
import SewageProductCard from '../product/SewageProductCard';
import ProductCommon from '../product/ProductCommon';
function Fabrication() {
  return (
    <>
      <section className='sewage-treatment-image'>
        <img src="./product/fabrication1.webp" alt="fabrication" />
      </section>


      <div className="sewage-treatment-stp container">
        <div className="sewage-treatment-plant-div">
          <h1>Fabrication & Job Work Services</h1>
          <p>
            3D Aqua offers expert fabrication and job work services for a wide range of industrial requirements. Our team specializes in MS/SS fabrication, custom structural work, industrial tanks, and equipment enclosures. We cater to sectors like water treatment, chemical processing, and manufacturing units with precision-based fabrication solutions.
            <br />
            All our fabrication work is carried out using advanced tools and skilled manpower to ensure durability and strength. Whether it’s a custom metal frame or heavy-duty industrial structure, 3D Aqua guarantees quality workmanship, timely delivery, and cost-effective services tailored to your project needs.
          </p>
          <div className="out-area">
            <h2>Our Areas of Expertise</h2>
            <p>We specialize in:</p>
            <ul>
              <li>MS and SS structural fabrication</li>
              <li>Custom industrial tank and vessel manufacturing</li>
              <li>Fabrication of equipment frames, supports, and enclosures</li>
              <li>On-site job work and welding services</li>
              <li>Timely delivery with high precision and quality</li>
            </ul>
          </div>

        </div>

        <div className="sewage-treatment-enquiry">
          <h2>Enquiry Form</h2>

          <form className="stp-enquiry-form" aria-label="Fabrication Job Work Enquiry Form">
            <div className="stp-form-row">
              <input type="text" name="name" placeholder="Your Name" required className="stp-input" />
              <input type="tel" name="phone" placeholder="Your Phone" required className="stp-input" />
            </div>

            <div className="stp-form-row">
              <input type="email" name="email" placeholder="Email" className="stp-input" />
            </div>

            <div className="stp-form-full">
              <textarea name="message" placeholder="Describe Your Fabrication/Job Work Requirement" rows="5" required className="stp-textarea"></textarea>
            </div>

            <div className="stp-form-buttons">
              <button type="submit" className="stp-submit-btn">Submit</button>
              <button className="stp-call-btn">Call Us: 917277262662</button>
            </div>
          </form>
        </div>
      </div>


      <div className="sewage-manufacture-plants">
        <div className="sewage-manufacture-div">
          <div className="manufacture-div-image">
            <img src="./product/fabrication2.avif" alt="fabrication" />
          </div>
          <div className="manufacture-content-flag">
            <h2>Why We Are the Best</h2>
            <h1>Fabrication & Job Work – 3D Aqua Expertise</h1>
            <p>
              At 3D Aqua, we take pride in delivering top-notch fabrication and job work services that meet the highest industry standards. With years of hands-on experience and a team of skilled professionals, we offer reliable MS/SS fabrication, structural work, industrial tank making, and customized metal solutions for various industrial applications.
              <br /><br />
              What sets us apart is our commitment to quality, precision, and timely delivery. We use advanced machinery, follow strict quality control, and ensure each project is executed with complete transparency and professionalism. Whether it's a small-scale custom job or large industrial fabrication, we handle it all with excellence.
              <br /><br />
              Join hands with 3D Aqua and experience hassle-free fabrication solutions tailored to your project needs. Your satisfaction and trust are what drive us to perform better every day.
            </p>
          </div>
        </div>
      </div>


      <div className="technology-we-are">
        <div className="left-content">
          <p>Important Role</p>
          <h1>Technology We are Using</h1>
          <h2>Modern Techniques in Fabrication & Job Work</h2>

          <div className="tech-list">
            <div className="tech-item">✅ Precision MS & SS Fabrication Techniques</div>
            <div className="tech-item">✅ CNC & Plasma Cutting for High Accuracy</div>
            <div className="tech-item">✅ MIG/TIG Welding with Certified Welders</div>
            <div className="tech-item">✅ Custom Sheet Metal Design & Assembly</div>
            <div className="tech-item">✅ Surface Finishing: Powder Coating & Painting</div>
            <div className="tech-item">✅ Modular Frame Fabrication for Quick Installation</div>
            <div className="tech-item">✅ On-site Job Work & Heavy Duty Industrial Fabrication</div>
          </div>

          <NavLink to="/contact">
            <button>Contact With us</button>
          </NavLink>
        </div>

        <div className="award-20-years">
          <img src="./plants/world2.webp" alt="awards" />
          <h1>20+ Year of Experience</h1>
        </div>
        <img src="./product/fabrication3.avif" alt="fabrication" style={{ width: '500px' }} />
      </div>

      <SewageProductCard />
      <ProductCommon />
    </>
  )
}

export default Fabrication
