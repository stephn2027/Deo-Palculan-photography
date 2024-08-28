import React from 'react';
import SectionHeading from './SectionHeading';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { motion } from 'framer-motion';
import faqs from '../assets/faqs';

export default function FaQs() {
    const accordStyle={backgroundColor:'transparent',borderBlockEnd:'2px gray',boxShadow:'none'}
  return (
      
    <motion.section
      className="h-auto py-6 sm:py-8 mt-10 max-w-[1417px] m-auto"
      id="works"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      viewport={{once:true}}
    >
     <div className='mt-20'>
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-[5rem]">
      {faqs.map((faq)=>(
      <Accordion sx={accordStyle} key={faq.id}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{fontStyle:'italic'}}>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{marginInline:'1rem'}}>
            {faq.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))}
      
     
      </div>
      </div>
    </motion.section>
   
  );
}
