import React from 'react';
import './App.css'
import TopComp from './landing/TopComp'
import Navbar from './Navbar/Navbar'
import HomeWrapper from './pages/HomeWrapper'
import { Routes, Route } from "react-router-dom"
import Footer from "./footer/Footer"
import Faq from './faq/Faq'
import Clients from './clients/Clients'
import About from './about/About'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Vision from './visionmission/Vision'
import Career from "./career/Career"
import Icon from "./icons/Icon"
import Sewage from './product/Sewage'
import Effluent from './effluent/Effluent'
import Domestic from './effluent/Domestic'
import ReverseOsmosis from './effluent/ReverseOsmosis'
import UltraFiltration from './effluent/UltraFiltration'
import Fabrication from './effluent/Fabrication'
import FireFighting from './effluent/FireFighting'
import MoreProduct from './moreproduct/MoreProduct'
import ScrollTop from './ScrollTop';
import Scanner from './scanner/Scanner';
function App() {
  return (
    <>
      <ScrollTop />
      <div className='static-navbar-all'>
        <TopComp />
        <Navbar />
      </div>
      <div className='static-icons'>
        <Icon />
      </div>
      <Routes>
        <Route path='/' element={<HomeWrapper />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/vision-mission' element={<Vision />} />
        <Route path='/career' element={<Career />} />
        <Route path='/sewage-treatment-plant' element={<Sewage />} />
        <Route path='/effluent-treatment-plant' element={<Effluent />} />
        <Route path='/domestic-water-softener' element={<Domestic />} />
        <Route path='/commercial-ro-plant' element={<ReverseOsmosis />} />
        <Route path='/ultra-filtration' element={<UltraFiltration />} />
        <Route path='/fabrication-job-work' element={<Fabrication />} />
        <Route path='/fire-fighting' element={<FireFighting />} />
        <Route path='/more-products' element={<MoreProduct />} />
        <Route path='/scanner' element={<Scanner />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
