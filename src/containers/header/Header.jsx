import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import { motion as m} from 'framer-motion';
import { fadeIn, textVariant2, zoomIn } from '../../utils/motion';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
    <div className='gpt3__header-content'>
      <m.h1
      variants={textVariant2}
    initial="hidden"
    whileInView="show"
     className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</m.h1>
      <m.p variants={textVariant2}
    initial="hidden"
    whileInView="show">Yet bed any for travelling assistance indulgence unpleasing.Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</m.p>
      
      <m.div 
      variants={zoomIn(1,.5)}
    initial="hidden"
    whileInView="show"
      className='gpt3__header-content__input'>
      <input type='email' placeholder='Your Email Address'/>
      <button type='button'>Get Started</button>
      </m.div>

      <m.div
      variants={textVariant2}
    initial="hidden"
    whileInView="show"
       className='gpt3__header-content__people'>
        <img src={people} alt='people'/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </m.div>
    </div>
      <m.div 
      variants={fadeIn("left", "bounce", 1,.5)}
    initial="hidden"
    whileInView="show"
      className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </m.div>   
    
    </div>
  )
}

export default Header