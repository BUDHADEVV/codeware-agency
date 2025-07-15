
import { useEffect } from 'react'
import './App.css'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import CTA from './components/CTA.JSX'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Working from './components/Working'

function App() {

  


  return (
    <div className='font-primary overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
      <CTA/>
      <CaseStudies/>
      <Working/>
      <Testimonials/>
      <Contact/>
      <Footer /> 
    </div>
  )
}

export default App
