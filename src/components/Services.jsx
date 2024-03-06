import React from 'react';
import CardService from './CardService';
import SectionHeading from './SectionHeading';
import { services } from '../assets/services';
import {motion} from 'framer-motion';

export default function Services() {
  return (
    <motion.section
     initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      viewport={{once:true}}
      id="services"
      className="h-full py-6 sm:py-8 lg:py-12 max-w-[1417px] m-auto"
    >
     <div className='mt-20'>
     <SectionHeading>Services</SectionHeading>
     </div>
    
      <div className="container xl:max-w-8xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">

          <p
          
          className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2 max-w-3xl">
          Capture Moments, Create Memories: Unforgettable Photography Services Tailored Just for You! Discover our Picture-Perfect Packages at Prices as Captivating as Our Shots.
          </p>
        </header>

        <motion.div 
         initial={{ y: 100, opacity: 0, scale:1.1 }}
      whileInView={{ y: 0, opacity: 1,scale:1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      viewport={{once:true}}
        className="flex flex-wrap flex-row -mx-4 text-center mb-2">
        {services.map((service,id)=><CardService key={id} serviceName={service.name} servicePrice={service.price} img={service.img} serviceText={service.text} />)}
          
        </motion.div>
      </div>
    </motion.section>
  );
}
