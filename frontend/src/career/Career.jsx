import React from 'react'
import "./Career.css"
import MajorComp from "../pages/MajorComp"
function Career() {
  return (
    <>
      <section className='vision-mission'>
        <img src="./images/career.webp" alt="vision" />
      </section>

      <div className="career-section container">
        <div className="career-about-section">
          <p className='welcome-career'><span>Welcome!</span> career</p>
          <div className="career-h1-div">
            <h1>Discover your new career</h1>
          </div>
          <p>Come be part of our team with 3D Aqua Water Treatment Company – bring your ideas, ingenuity and determination to make a difference, and we’ll solve some of the world’s biggest challenges. Across industries and around the globe, we work with exceptional people and leading companies—using advanced technologies, products and spare parts to create 360° value for our clients, people and communities.</p>
          <p>Join us and help our clients become the next and best versions of themselves.</p>
        </div>
        <div className="career-form-div">
          <form className="enquiry-form" onSubmit={(e) => e.preventDefault()} aria-label="Contact Us Form">
            <div className="form-row">
              <input type="text" name="name" placeholder="First Name" required />
              <input type="text" name="last-name" placeholder="Last Name" required />

            </div>
            <div className="form-row">
              <input type="text" name="qualification" placeholder="enter your qualification" required />
              <input type="text" name="experience" placeholder="experience" required />
            </div>


            <div className="form-row">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-row">
              <input type="tel" name="phone" placeholder="Your Phone Number" required />
            </div>
            <div className="form-row">
              <input type="tel" name="city" placeholder="Your City Name" required />
            </div>
            <div className="form-full">
              <textarea name="message" placeholder="Type Your Message" rows="5" required></textarea>
            </div>
            <div className="form-full">
              <input type="file" name="city" placeholder="Upload Your resume" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <MajorComp />
    </>
  )
}

export default Career
