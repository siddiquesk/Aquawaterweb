import React from 'react'
import "./WaterTreatment.css"

function WaterTreatment() {
  return (
    <>
      <section className="water-treatment-company container">
        <header className="water-treatment-heading">
          <h1>The most popular water treatment company In India</h1>
          <h2>Water Treatment & Waste Water Treatment Consultancy</h2>
        </header>

        <div className="treatment-card-container">
          <article className="water-treatment-card treatment-card">
            <figure>
              <img src="./plants/world1.png" alt="Service center icon" />
              <figcaption>Service center in all over the world</figcaption>
            </figure>
          </article>

          <article className="water-treatment-card">
            <figure>
              <img src="./plants/world2.png" alt="Registered brand icon" />
              <figcaption>Registered Brands</figcaption>
            </figure>
          </article>

          <article className="water-treatment-card">
            <figure>
              <img src="./plants/world3.png" alt="Customer support icon" />
              <figcaption>Happy customer world wide</figcaption>
            </figure>
          </article>

          <article className="water-treatment-card">
            <figure>
              <img src="./plants/world4.png" alt="Manufacturing icon" />
              <figcaption>Own manufacturing in the world</figcaption>
            </figure>
          </article>

          <article className="water-treatment-card">
            <figure>
              <img src="./plants/world5.png" alt="Waste treatment icon" />
              <figcaption>Waste Water treatment Solution Under One Roof</figcaption>
            </figure>
          </article>
        </div>

        <footer className="btn-connect">
          <button>Connect With us</button>
        </footer>
      </section>
    </>
  )
}

export default WaterTreatment
