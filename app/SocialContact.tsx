"use client"
import { motion } from "framer-motion"
import Socials from "./data/Social"
import React from "react"

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  }),
}

const SocialContact = () => {
  return (
    <section id="contact" className="mt-4 scroll-mt-6">
        <div className="text-white font-semibold text-center">
            <h1 className="text-4xl text-white"> Contact </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-24 gap-2 text-lg font-medium text-[#5d39a4] shadow-black stroke-black"
        >
        {Socials.map((social,index) => (
            <motion.a key={index} 
            className="flex items-center justify-center gap-2"  
            href={social.href} 
            target="_blank"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={index}
            > {React.createElement(social.Icon)}  <p> {social.description} </p> </motion.a>
        ))}
        </div>
    </section>
  )
}

export default SocialContact

