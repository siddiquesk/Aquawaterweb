
import './App.css'
import TopComp from './landing/TopComp'
import Navbar from './Navbar/Navbar'
import HomeWrapper from './pages/HomeWrapper'
import { Routes, Route } from "react-router-dom"
import Footer from "./footer/Footer"
import Faq from './faq/Faq'
import Clients from './clients/Clients'
import About from './about/About'
function App() {
  return (
    <>
      <div className='static-navbar-all'>
        <TopComp />
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<HomeWrapper />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
