import React from 'react'
import './cta.css'
import { motion as m } from 'framer-motion'
import { slideIn, textVariant, textVariant2 } from '../../utils/motion'

const CTA = () => {
  return (
    <m.div 
    variants={slideIn("left","bounce",0.2,0.35)}
      initial="hidden"
      whileInView="show"
    className='gpt3__cta'>
      <div className='gpt3__cta-content'>
      <m.p
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      >Request Early Access to Get Started</m.p>
      <m.h3
      variants={textVariant(.5)}
      initial="hidden"
      whileInView="show"
      >Register today & start exploring the endless possiblities.</m.h3>
      </div>
      <div className='gpt3_cta-btn'>
        <m.button
        variants={textVariant(.5)}
      initial="hidden"
      whileInView="show"
         type='button'>Get Started</m.button>
      </div>
    </m.div>
  )
}

export default CTA