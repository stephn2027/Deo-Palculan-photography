import React from 'react';
import SectionHeading from './SectionHeading';
import portraitImage from '../images/DSC02889.jpg';
import groupImage from '../images/groupImage.jpg';
import coupleImage from '../images/coupletemple.jpeg';
import randomImage from '../images/DSC09747.jpg';
import { motion } from 'framer-motion';

export default function Works() {
  return (
    <motion.section
      className="h-auto py-6 sm:py-8 mt-10 max-w-[1417px] m-auto"
      id="works"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      viewport={{once:true}}
    >
      <SectionHeading>Works</SectionHeading>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 mt-[5rem]">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <motion.a
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay:0.1 }}
            viewport={{once:true}}
            href="portraits"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={portraitImage}
              alt="portraits"
              className="absolute inset-0 h-full
             w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Tokyo Portraits
            </span>
          </motion.a>
          <motion.a
          initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay:0.2 }}
            viewport={{once:true}}
            href="groupshots"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={groupImage}
              loading="lazy"
              alt="Group Shots"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Group Shots
            </span>
          </motion.a>
          <motion.a
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay:0.3 }}
            viewport={{once:true}}
            href="random"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src={randomImage}
              loading="lazy"
              alt="by Deo P"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Nature and City Shots
            </span>
          </motion.a>

          <motion.a
          initial={{ y: 100, opacity: 0,}}
            whileInView={{ y: 0, opacity: 1, }}
            transition={{ ease: 'easeInOut', duration: 0.5, delay:0.4 }}
            viewport={{once:true}}
            href="couples"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src={coupleImage}
              loading="lazy"
              alt="by Deo P."
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              Couples
            </span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}
