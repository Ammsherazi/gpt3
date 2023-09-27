import React from 'react'
import './feature.css'
import { motion as m } from 'framer-motion'
import { textVariant, textVariant2 } from '../../utils/motion'

const Feature = ({title, text}) => {
  return (
    <div className='gpt3__features-container__feature'>
    <div className='gpt3__features-container__feature-title'>
      <div />
      <m.h1
      variants={textVariant(.5)}
      initial="hidden"
      whileInView="show"
      >{title}</m.h1>
    </div>
    <div className='gpt3__features-container__feature-text'>
      <m.p
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      >{text}</m.p>
    </div>
    </div>
  )
}

export default Feature