"use client"
import { FaCodepen, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6"
import { BiLogoUpwork } from "react-icons/bi"
import { TbBrandFiverr } from "react-icons/tb"
import Link from "next/link"
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
        <div className="grid grid-cols-3 mt-24 gap-2 text-lg font-medium text-[#5d39a4] shadow-black stroke-black"
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

{/* <motion.div className="grid grid-cols-3 mt-24 gap-2 text-lg font-medium text-[#5d39a4] shadow-black stroke-black"
variants={fadeInAnimationVariants}
initial="initial"
whileInView="animate"
viewport={{
  once: true
}}
>
 <Link className="flex items-center justify-center gap-2"  href="https://www.linkedin.com/in/waqasayaz/" target="_blank"> <FaLinkedinIn />  <p> in/waqasayaz </p> </Link>
 <Link className="flex items-center justify-center gap-2" href="https://github.com/waqasaya-z" target="_blank"> <FaGithub /> <p> github.com/waqasaya-z </p> </Link>
 <Link className="flex items-center justify-center gap-2" href="https://twitter.com/waqaswhat" target="_blank"> <FaTwitter />  <p> @waqaswhat </p></Link>
 <Link className="flex items-center justify-center gap-2" href="https://www.instagram.com/waqas_ayaz/" target="_blank"> <FaInstagram />  <p> instagram.com/waqas_ayaz </p></Link>
 <Link className="flex items-center justify-center gap-2" href="https://www.upwork.com/freelancers/~01d95726adf56c0272" target="_blank">  <BiLogoUpwork />  <p> Waqas A. </p></Link>
 <Link className="flex items-center justify-center gap-2" href="https://www.fiverr.com/waqas_ayaz" target="_blank"> <TbBrandFiverr />  <p>fiverr.com/waqas_ayaz</p></Link>
 <Link className="flex items-center justify-center gap-2" href="https://www.facebook.com/waqas.ayaz01/" target="_blank"> <FaFacebook /> <p> facebook.com/waqas.ayaz01 </p> </Link>
 <Link className="flex items-center justify-center gap-2" href="https://codepen.io/waqasaya-z" target="_blank">  <FaCodepen /> <p> codepen.io/waqasaya-z </p> </Link>
</motion.div> */}