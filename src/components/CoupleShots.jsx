import React, { useEffect, useState } from 'react';

import SectionHeading from './SectionHeading';
import { couples } from '../assets/works';
import GalleryViewer from './GalleryViewer';
import { getCouplesImages } from '../actions/api';

export default function CoupleShots() {

  const [imageList, setImagesList] = useState([]);
  const [nextCursor,setNextCursor] = useState(null);
  
  useEffect(()=>{
    const fetchData = async () =>{
        const responseJson = await getCouplesImages();
        setImagesList(responseJson.resources)
        setNextCursor(responseJson.next_cursor);
        
    }
    fetchData();
  },[])
   
   const handleLoadMore = async ()=>{
    const responseJson = await getCouplesImages(nextCursor);
    setImagesList(currentImageList=>[...currentImageList,...responseJson.resources,]);
    setNextCursor(responseJson.next_cursor);
   };

    const coupleImages = imageList!==[]?imageList.map(image=>image.url):couples;
  return (
    <section className="h-full min-h-[100vh] p-6 sm:py-8 lg:py-12 bg-[#a3b1ae]">
      <div className="max-w-[1920px] m-auto">
        <div className="mt-20">
          <SectionHeading>Couple Shots</SectionHeading>
        </div>

        <GalleryViewer images={coupleImages} handleLoadMore={handleLoadMore} nextCursor={nextCursor} />
      </div>
    </section>
  );
}
