
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
function App() {
  return (
    <>
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
      </Routes>
      <Footer />
    </>
  )
}

export default App
