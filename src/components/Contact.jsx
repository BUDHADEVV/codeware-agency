import React from "react";
import ctaImage from "/assets/contact.png";

import {motion } from "framer-motion";
import variants from "../utils/variants";

const CTA = () => {
  return (
    /* ⬇️  outer wrapper now mirrors the <footer> wrapper */
    <section className="relative py-12 max-w-7xl mx-auto sm:px-6 lg:px-8" id="contact">
      {/* ⬇️  max-width was moved up, so it’s removed here  */}
      <div 
      
      className="bg-[#F3F3F3] rounded-md
                      sm:pt-24 pt-8 pb-12
                      flex flex-col md:flex-row
                      items-center justify-between
                      px-4 sm:px-6 lg:px-8">

        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1
          initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.2)} 
           className="text-3xl font-bold text-secondary mb-4">
            Ready to launch?  Let&apos;s build together.
          </motion.h1>

          <motion.p 
          initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.2)} 
          className="text-gray-600 mb-6 md:w-2/3">
            Start your digital journey with Codeware. Let’s build something that gets real results.
          </motion.p>

          <motion.a
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.1 }}
            variants={variants("bottom", 0.1)}
            href="https://wa.me/918592983978?text=Hi,%20I%20am%20interested%20to%20work%20with%20Codeware.%20Let's%20discuss%20how%20we%20can%20collaborate!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-black text-white font-semibold
             rounded-md hover:bg-primary hover:text-black
             transition-all duration-300"
          >
            Contact Now
          </motion.a>

        </div>

        {/* right side */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          <img
            src={ctaImage}
            alt="Marketing illustration"
            className="md:absolute md:-top-72 md:bottom-0"
            style={{ transform: "scale(0.85)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
