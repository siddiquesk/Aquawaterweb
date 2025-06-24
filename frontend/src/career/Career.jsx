import React, { useState } from 'react'
import "./Career.css"
import MajorComp from "../pages/MajorComp"
function Career() {
  const [contact, setContact] = useState({
    name: '',
    lastname: '',
    phone: '',
    qualification: '',
    experience: '',
    email: '',
    city: '',
    message: '',
    resume: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({
      ...prev, [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("your detail  submitted successfully");
    setContact({
      name: '',
      lastname: '',
      phone: '',
      qualification: '',
      experience: '',
      email: '',
      city: '',
      message: '',
      resume: ''
    })
  }

  return (
    <>
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
          <form className="enquiry-form" aria-label="Contact Us Form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="name" placeholder="First Name" value={contact.name} onChange={handleChange} required />
              <input type="text" name="lastname" placeholder="Last Name" value={contact.lastname} onChange={handleChange} required />

            </div>
            <div className="form-row">
              <input type="text" name="qualification" value={contact.qualification} onChange={handleChange} placeholder="enter your qualification" required />
              <input type="text" name="experience" value={contact.experience} onChange={handleChange} placeholder="experience" required />
            </div>


            <div className="form-row">
              <input type="email" name="email" value={contact.email} onChange={handleChange} placeholder="Your Email" required />
            </div>
            <div className="form-row">
              <input type="tel" name="phone" value={contact.phone} onChange={handleChange} placeholder="Your Phone Number" required />
            </div>
            <div className="form-row">
              <input type="tel" name="city" value={contact.city} onChange={handleChange} placeholder="Your City Name" required />
            </div>
            <div className="form-full">
              <textarea name="message" value={contact.message} onChange={handleChange} placeholder="Type Your Message" rows="5" required></textarea>
            </div>
            <div className="form-full">
              <input type="file" name="resume" value={contact.resume} onChange={handleChange} placeholder="Upload Your resume" required />
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
