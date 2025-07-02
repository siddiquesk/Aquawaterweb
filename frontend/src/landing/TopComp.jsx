import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { IoWaterOutline } from "react-icons/io5";
import "./TopComp.css"
function TopComp() {
  return (
    <>
      <section className="water-layout">
        <div className="contact-group">
          <article className="contact-box">
            <IoCallOutline className="contact-icon" />
            <p className="contact-text">+91-9560307837</p>
          </article>

          <article className="contact-box">
            <CiLocationOn className="contact-icon" />
            <p className="contact-text">
              C-988, Paper Market, IFC  <br /> Ghazipur,
              Delhi - 110096
            </p>
          </article>

          <article className="contact-box full-width">
            <p className="contact-text" style={{ padding: '3px', textAlign: 'center' }}>
              <strong ><IoWaterOutline className='contact-icon' />HRS Aquatreat Technologies</strong>
            </p>
          </article>
        </div>


        <div className="right-group">
          <article className="contact-box email-box">
            <TfiEmail className="contact-icon" />
            <p className="contact-text">mukesh.hrsaquatreat@gmail.com</p>
          </article>

          <div className="language-box">
            <div className="select-wrapper">
              <label htmlFor="language-select" className="sr-only">
                Select a Country
              </label>
              <select id="language-select" className="language-select">
                <option value="">Select a Country</option>
                <option value="india">India</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="japan">Japan</option>
                <option value="china">China</option>
                <option value="brazil">Brazil</option>
                <option value="south_africa">South Africa</option>
                <option value="italy">Italy</option>
                <option value="mexico">Mexico</option>
                <option value="russia">Russia</option>
                <option value="singapore">Singapore</option>
                <option value="netherlands">Netherlands</option>
                <option value="spain">Spain</option>
                <option value="indonesia">Indonesia</option>
              </select>
              <span className="select-arrow">&#9662;</span>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default TopComp


