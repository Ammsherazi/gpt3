import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'
import { motion as m } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'


const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
    <div className='gpt3__footer-heading'>
      <m.h1
      variants={textVariant(.5)}
      initial="hidden"
      whileInView="show"
       className='gradient__text'>Do you want to step in to the future before others</m.h1>
    </div>
    <m.div 
    variants={textVariant(.6)}
      initial="hidden"
      whileInView="show"
    className='gpt3__footer-btn'>
      <p>Request Early Access</p>
    </m.div>

    <m.div 
    variants={fadeIn("up","easeInOut",1,1)}
      initial="hidden"
      whileInView="show"
    className='gpt3__footer-links'>
      <div className='gpt3__footer-links_logo'>
        <img src={gpt3Logo} alt='logo' />
        <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-links_div'>
      <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-links_div'>
      <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </m.div>
    <div className='gpt3__footer-copyright'>
      <m.p
      variants={textVariant(.5)}
      initial="hidden"
      whileInView="show"
      >© 2021 GPT-3. All rights reserved.</m.p>
    </div>
    </div>
  )
}

export default Footer