import React from 'react';
import AccordionServices from './AccordionServises';

export default function CardService({ serviceName, serviceText, img, servicePrice }) {
  return (
    <div
    className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
    data-wow-duration="1s"
    style={{
      visibility: 'visible',
      animationDuration: '1s',
      animationName: 'fadeInUp',
    }}
  >
    <div className="mb-10 bg-yellow-950 bg-opacity-10 rounded-lg border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
      <div className="inline-block mb-3">
       <img src={img} alt="sample pic" className='w-full h-full object-cover rounded-t-lg'  />
      </div>
      <h3 className="text-lg leading-normal mb-2 font-semibold text-gray-950">
        
        {serviceName}
      </h3>
      <p className="text-pink-700 font-bold text-lg">
        {servicePrice}
        
      </p>
      <AccordionServices text={serviceText}/>
    </div>
    </div>
  );
}
