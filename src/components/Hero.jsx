import React, { useState } from 'react'

import { PopupModal } from 'react-calendly'
import bannerImg from "/assets/banner.png"
import LogoCarousel from './LogoCarousel'

import {motion } from "framer-motion";
import variants from "../utils/variants"

const Hero = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section className='bg-white pt-12' id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className='flex flex-col md:flex-row items-center gap-6'>
          {/* left side */}
          <div className='md:w-1/2'>
            <div className='md:w-2/3 '>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.2)} 
               className='text-4xl font-bold text-secondary mb-4'>Navigating the digital landscape for success</motion.h1>
              <motion.p 
              initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.5)} 
              className='text-gray-600 mb-6'>The Tech studio Engineered at NIT Calicut.</motion.p>
              <motion.button 
               initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.1)} 
                onClick={() => setIsCalendlyOpen(true)}
              className='inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300'>Book a consultation</motion.button>

            </div>
          </div>

          {/*right side*/}
          <div className='md:w-1/2 order-first md:order-last'>
            <motion.img 
              initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.2)} 
            src={bannerImg} alt="" className='w-full h-auto rounded-md'/>
          </div>
        </div>


        {/* brand logo */}
        <LogoCarousel/>

      </div>
      {/* Calendly Popup Modal */}
      <PopupModal
  url="https://calendly.com/codeware-studio/30min"
  onModalClose={() => setIsCalendlyOpen(false)}
  open={isCalendlyOpen}
  rootElement={document.getElementById("root")}
  utm={{
    utmCampaign: "Website Hero",
    utmSource: "hero-button",
    utmMedium: "popup"
  }}
/>

    </section>
  )
}

export default Hero
