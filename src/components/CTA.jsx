import React from "react";
import ctaImage from "/assets/cta-image.png";

import {motion } from "framer-motion";
import variants from "../utils/variants"

const CTA = () => {

  const handleClick = () => {
  window.open("https://whatsform.com/BncPgG", "_blank");
};

  return (
    /* ⬇️  outer wrapper now mirrors the <footer> wrapper */
    <section className="relative py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
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
            Let&apos;s make things happen
          </motion.h1>

          <motion.p 
          initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.2)} 
          className="text-gray-600 mb-6 md:w-2/3">
            Contact us today to learn more about how our tech studio can help your business grow and succeed online.
          </motion.p>

          <motion.button
          onClick={handleClick}
          initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.1)} 
            className="inline-block px-6 py-3 bg-black text-white font-semibold
                       rounded-md hover:bg-primary hover:text-black
                       transition-all duration-300">
            Get your free proposal
          </motion.button>
        </div>

        {/* right side */}
        <div className="md:w-1/2 flex justify-center items-center relative">
          <motion.img
          initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.2)} 
            src={ctaImage}
            alt="Marketing illustration"
            className="md:absolute md:-top-52 md:bottom-0"
            style={{ transform: "scale(1.05)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
