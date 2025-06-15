import React from 'react'
import "./Blog.css"
function Blog() {
  return (
    <>
      <section className="blog-section">
        <h1 className="blog-title">Latest Blog Posts</h1>
        <div className="blog-grid">

          <div className="blog-card">
            <img src="./images/supply1.avif" alt="RO System Maintenance" />
            <h2>How to Maintain Your RO System</h2>
            <p>Simple steps to clean filters, flush membranes, and extend the life of your RO purifier system effectively.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply2.avif" alt="Hard Water Softening" />
            <h2>Why Water Softening is Important</h2>
            <p>Discover how hard water affects plumbing and appliances—and how softeners prevent costly damage.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply3.avif" alt="Industrial RO Benefits" />
            <h2>Top 5 Benefits of Industrial RO Plants</h2>
            <p>Save water, reduce waste, and ensure compliance in large-scale operations using commercial RO systems.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply4.avif" alt="Efficient Wastewater Management" />
            <h2>Modern Wastewater Treatment Solutions</h2>
            <p>Explore advanced methods for treating wastewater in factories and institutions while staying eco-friendly.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply5.avif" alt="RO Pre-treatment Tips" />
            <h2>Importance of Pre-Treatment in RO</h2>
            <p>Learn why pre-filtration, softening, and antiscalants are essential for long-lasting RO membrane health.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply6.avif" alt="Home Water Filtration" />
            <h2>Best Home Water Filtration Methods</h2>
            <p>Compare RO, UV, and activated carbon filters for clean, safe water in urban and rural households.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply7.avif" alt="Industrial Water Recovery" />
            <h2>Water Recycling in Industries</h2>
            <p>Check how modern plants recover 90% of wastewater using multi-stage filtration and reuse techniques.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply8.avif" alt="RO System Troubleshooting" />
            <h2>Common RO Problems & Fixes</h2>
            <p>Facing low pressure or strange taste? This guide explains how to identify and fix common RO issues fast.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply9.avif" alt="Commercial RO Setup Guide" />
            <h2>How to Set Up a Commercial RO System</h2>
            <p>Complete guide from water source testing to capacity planning and installation for commercial RO plants.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply10.avif" alt="RO Plant Maintenance Checklist" />
            <h2>Monthly RO Plant Maintenance Checklist</h2>
            <p>Use this simple monthly checklist to ensure your RO plant runs smoothly with zero downtime.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply13.avif" alt="Water Testing Guide" />
            <h2>How to Test Water Quality at Home</h2>
            <p>Check TDS, hardness, and contaminants in your water using DIY test kits or lab services.</p>
            <a href="#">Read More →</a>
          </div>

          <div className="blog-card">
            <img src="./images/supply12.avif" alt="Choosing the Right Softener" />
            <h2>Choosing the Right Water Softener</h2>
            <p>Learn how to pick the perfect domestic softener based on family size, water quality, and budget.</p>
            <a href="#">Read More →</a>
          </div>
        </div>
      </section>


      <section className="filtration-info-section">
        <div className="filtration-container">
          <h1 className="filtration-heading">Types of Filtration Methods</h1>
          <p className="filtration-description">
            Filtration is essential when working with solid-liquid or solid-gas mixtures. It’s a non-destructive method that doesn’t alter the chemical composition of the substances involved.
          </p>

          <div className="filtration-block">
            <h2>1. Gravity Filtration</h2>
            <p><strong>Method:</strong> Liquid is pulled through the filter by gravity alone.</p>
            <p><strong>Example:</strong> Filtering tea leaves from brewed tea.</p>
          </div>

          <div className="filtration-block">
            <h2>2. Vacuum Filtration</h2>
            <p><strong>Method:</strong> Suction is used to speed up the filtration process.</p>
            <p><strong>Example:</strong> Used in labs to separate precipitates from solutions quickly.</p>
          </div>

          <div className="filtration-block">
            <h2>3. Pressure Filtration</h2>
            <p><strong>Method:</strong> External pressure is applied to push liquid through the filter.</p>
            <p><strong>Example:</strong> Used in industrial-scale filtration like oil purification or juice clarification.</p>
          </div>

          <div className="filtration-block">
            <h2>4. Membrane Filtration</h2>
            <p><strong>Method:</strong> Uses fine porous membranes to remove microorganisms or dissolved solids.</p>
            <p><strong>Example:</strong> Used in water treatment plants and RO systems.</p>
          </div>

          <div className="filtration-block">
            <h2>5. Sand or Granular Filtration</h2>
            <p><strong>Method:</strong> Common in large-scale water filtration systems.</p>
            <p><strong>Example:</strong> Municipal water treatment facilities or aquariums.</p>
          </div>
        </div>
      </section>


    </>
  )
}

export default Blog
