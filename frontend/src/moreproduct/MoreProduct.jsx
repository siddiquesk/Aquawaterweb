import React from 'react'
import "./MoreProduct.css";
import waterSupply from '../context/plants';
import { Link } from 'react-router-dom';
function MoreProduct() {
  return (
    <>
      <div className="product-grid">
        {waterSupply.map((plant, index) => (
          <div
            className="product-card"
            key={index}
            id={`product-card-${index}`} // 👈 Unique ID like "product-card-0"
          >
            <div className="product-image-container">
              <img src={plant.image} alt={plant.text} />
            </div>
            <h1>{plant.text}</h1>
            <Link to="#" className="read-more-btn">{plant.readMore}</Link>
          </div>
        ))}
      </div>


    </>
  )
}

export default MoreProduct
