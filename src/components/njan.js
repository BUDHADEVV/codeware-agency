{/* 
    import React from 'react';
import { servicesData } from '../utils/services';
import LinkIcon from "/assets/link-icon.png"

import {motion } from "framer-motion";
import variants from "../utils/variants"

const Services = () => {
  return (
    <section className='pt-16 sm:pt-24 pb-12 sm:pb-16 bg-white' id='services'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div 
              initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.2)} 
        className='flex flex-col md:flex-row gap-4 mb-8 sm:mb-12'>
          <div className='flex-shrink-0 bg-primary text-black py-2 px-6 sm:px-16 rounded-md w-fit'>
            <h2 className='text-xl sm:text-2xl font-bold'>Services</h2>
          </div>
          <div className='md:w-2/3 w-full'>
            <p className='text-secondary md:w-2/3 text-base sm:text-lg leading-relaxed'>
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
          </div>
        </motion.div>


        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            {
                servicesData.map((service, index) => (
                    <motion.div 
                    initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.2)} 
                    key={index} className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg border border-[#191A23] cursor-pointer ${service.backgroundColor} ${service.textColor}`}>
                        <div className='md:w-1/2 w-full flex flex-col h-full justify-between'>
                            <button className={`text-lg sm:text-xl py-1.5 font-semibold mb-2 rounded-sm w-full sm:w-60 ${service.foregroundColor}`}>{service.title}</button>
                            <a href="#" className={`flex items-center gap-3 sm:gap-4 py-2 rounded-md text-black hover:bg-opacity-70 hover:text-black/70 w-fit`}>
                                <img src={LinkIcon} alt="" className='size-5 sm:size-6 rounded-full' />
                                <span className='text-base sm:text-lg font-medium'>Learn More</span>
                            </a>

                        </div>
                        <div className='md:w-1/2 w-full order-first md:order-last'>
                            <img src={service.image} alt="" className='w-full object-cover rounded-md mb-4'/>
                        </div>
                    </motion.div>
                ))
            }
        </div>


      </div>
    </section>
  );
}

export default Services;*/}