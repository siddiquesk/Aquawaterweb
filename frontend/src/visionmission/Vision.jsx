import React from 'react'
import "./Vision.css"
import MajorComp from "../pages/MajorComp"
function Vision() {
  return (
    <>
      <div className="section-vision-bar">
        <div className="color-div-vision container">
          <div className="vision-mission">
            <img src="./images/vision-eye.webp" alt="vision-eye" width="400px" height="400px" />
          </div>
          <div className="vision about-element">
            <h2>Company Vision & Mission</h2>
            <h3>Company Vision.</h3>
            <p>To be a socially responsible and environmentally friendly water treatment brand making a difference in people’s lives by providing the best water treatment products and services.</p>
            <h1>Company Mission</h1>
            <p>Our mission is to enhance the quality of water that was previously wasted, preserve the purity of the water we currently have, and prepare for future water needs through our innovative treatment solutions and dedicated service to humanity.</p>
          </div>
        </div>
      </div>
      <MajorComp />
    </>
  )
}

export default Vision
