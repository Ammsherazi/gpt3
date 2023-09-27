import React from 'react'
import './brand.css'
import {google, slack, atlassian, dropbox, shopify} from './imports'
import { motion as m } from 'framer-motion'
import {  containerVariants, clientVariants } from '../../utils/motion'



const clients = [
  { id: 1, name: 'Google', image: google },
  { id: 2, name: 'Slack', image: slack},
  { id: 3, name: 'Atlassian', image: atlassian },
  { id: 4, name: 'Dropbox', image: dropbox },
  { id: 5, name: 'Shopify', image: shopify },
];


const Brand = () => {
  return (
 
    <m.div
      className="client-section  gpt3__brand section__padding"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {clients.map((client) => (
        <m.div
          key={client.id}
          className="client-card"
          variants={clientVariants}
        >
          <img
            src={client.image}
            alt={client.name}
            className="client-image"
          />
        </m.div>
      ))}
    </m.div>
  );
};

export default Brand