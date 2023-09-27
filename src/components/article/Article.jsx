import React from 'react'
import './article.css'
import { motion as m } from 'framer-motion'
import { fadeIn, textVariant, textVariant2 } from '../../utils/motion'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <m.div
      variants={fadeIn("up","tween",0.1,0.2)}
      initial="hidden"
      whileInView="show"
       className='gpt3__blog-container_article-image' >
        <img src={imgUrl} alt='blog-image'/>
      </m.div>
      <div className='gpt3__blog-container_article-content'>
        <div>
          <m.p
          variants={textVariant2}
      initial="hidden"
      whileInView="show"
      >{date}</m.p>
          <m.h3
          variants={textVariant(.3)}
      initial="hidden"
      whileInView="show"
      >{title}</m.h3>
        </div>
        <m.p
        variants={textVariant2}
      initial="hidden"
      whileInView="show"
        >Read Full Article</m.p>
      </div>
    </div>
  )
}

export default Article