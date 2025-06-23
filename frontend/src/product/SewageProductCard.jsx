import React, { useState } from 'react';
import './SewageProductCard.css';
import { IoSettingsOutline } from 'react-icons/io5';
import { NavLink, useNavigate } from "react-router-dom"
function SewageProductCard() {
  const [selectedPlant, setSelectedPlant] = useState('Sewage Treatment Plant');
  const navigate = useNavigate();
  const plantDetails = {
    'Sewage Treatment Plant': {
      image: './product/comm.webp',
      title: 'Sewage Treatment Plant',
      slug: '/sewage-treatment-plant',
      description:
        'Our STPs treat wastewater using advanced technologies. They are compact, energy-efficient, and ideal for residential, commercial, and industrial setups, ensuring clean, reusable water with minimal maintenance.'
    },
    'Effluent Treatment Plant': {
      image: './product/eff.webp',
      title: 'Effluent Treatment Plant',
      slug: '/effluent-treatment-plant',
      description:
        'ETPs treat industrial wastewater by removing harmful chemicals, oils, and solids. Designed for regulatory compliance, our systems are suitable for pharma, textile, and food processing industries.'
    },
    'Water Softening Plant': {
      image: './product/Lph.webp',
      title: 'Water Softening Plant',
      slug: '/domestic-water-softener',
      description:
        'These plants eliminate hardness-causing minerals like calcium and magnesium, improving water quality. Ideal for homes and industries, they protect plumbing and enhance appliance lifespan.'
    },
    'Reverse Osmosis Plant': {
      image: './product/indus.webp',
      title: 'Reverse Osmosis Plant',
      slug: '/commercial-ro-plant',
      description:
        'RO Plants purify water by removing salts and bacteria through a semi-permeable membrane. Suitable for drinking, industrial use, and more, ensuring clean and safe water every time.'
    },
    'Demineralization Plant': {
      image: './product/soft.webp',
      title: 'Demineralization Plant',
      slug: '/ultra-filtration',
      description:
        'DM Plants remove dissolved minerals using ion exchange to deliver high-purity water. Commonly used in labs, power plants, and manufacturing for consistent, mineral-free water output.'
    },
    'Fire Fighting System': {
      image: './product/treat.webp',
      title: 'Fire Fighting System',
      slug: '/fire-fighting',
      description:
        'These systems collect and store rainwater for reuse, reducing dependency on municipal sources. They promote water conservation in homes, schools, and commercial buildings effectively.'
    }
  };



  return (
    <>
      <div className="sewage-end-section container">
        <p>WHAT WE OFFER</p>

        <div className="sewage-end-products">
          <h1>We Provide These Products</h1>
          <NavLink to="/contact">
            <div className="see-more-end-product">
              See More Products <IoSettingsOutline />
            </div>
          </NavLink>
        </div>

        <div className="flex-water-supply-div">
          {/* LEFT SIDE: 6 clickable boxes */}
          <div className="sewage-main-6-box">
            {
              Object.keys(plantDetails).map((plantName) => (
                <div
                  key={plantName}
                  className={`main-water-supply-plants id-container ${selectedPlant === plantName ? 'active-plant' : ''
                    }`}
                  onClick={() => setSelectedPlant(plantName)}
                >
                  {plantName} <IoSettingsOutline />
                </div>
              ))
            }
          </div>

          {/* RIGHT SIDE: Dynamic content based on selectedPlant */}
          <div className="main-show-container">
            <div className="main-show-image">
              <img
                src={plantDetails[selectedPlant].image}
                alt={plantDetails[selectedPlant].title}
              />
            </div>
            <div className="offers-plants-div">
              <h1>{plantDetails[selectedPlant].title}</h1>
              <p>{plantDetails[selectedPlant].description}</p>
              <button onClick={() => navigate(plantDetails[selectedPlant].slug)}>
                Read More <IoSettingsOutline />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SewageProductCard;

