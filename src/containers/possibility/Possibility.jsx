import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'
import { motion as m } from 'framer-motion'
import { fadeIn, textVariant, textVariant2, zoomIn } from '../../utils/motion'



const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
    <m.div
    variants={fadeIn("right","tween",0.3,0.3)}
      initial="hidden"
      whileInView="show"
       className='gpt3__possibility-image'>
    <img src={possibilityImage} alt='possibility' />
    </m.div>
    <div className='gpt3__possibility-content'>
    <m.h4
    variants={textVariant2}
      initial="hidden"
      whileInView="show"
    >Request Early Access to Get Started</m.h4>
    <m.h1 
    variants={textVariant(.5)}
      initial="hidden"
      whileInView="show"
    className='gradient__text'>The possibilities are beyond your imagination</m.h1>
    <m.p
    variants={textVariant2}
      initial="hidden"
      whileInView="show"
    >Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</m.p>
    <m.h4
    variants={textVariant2}
      initial="hidden"
      whileInView="show"
    >Request Early Access to Get Started</m.h4>
    </div>
    
    </div>
  )
}

export default Possibility