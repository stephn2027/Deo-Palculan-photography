import React, { useEffect, useState } from 'react';

import SectionHeading from './SectionHeading';
import { portraits } from '../assets/works';
import GalleryViewer from './GalleryViewer';
import { getPortraitImages } from '../actions/api';

export default function TokyoPortraits() {
  const [imageList, setImagesList] = useState([]);
  const [nextCursor,setNextCursor] = useState(null);
  
  useEffect(()=>{
    const fetchData = async () =>{
        const responseJson = await getPortraitImages();
        setImagesList(responseJson.resources)
        setNextCursor(responseJson.next_cursor);
        
    }
    fetchData();
  },[])
   
   const handleLoadMore = async ()=>{
    const responseJson = await getPortraitImages(nextCursor);
    setImagesList(currentImageList=>[...currentImageList,...responseJson.resources,]);
    setNextCursor(responseJson.next_cursor);
   };

    const portraitImages = imageList!==[]?imageList.map(image=>image.url):portraits;

  return (
    <section className="h-full min-h-[100vh] p-6 sm:py-8 lg:py-12 bg-[#b5b5b2]">
      <div className="max-w-[1920px] m-auto">
        <div className="mt-20">
          <SectionHeading>Portraits</SectionHeading>
        </div>
      <GalleryViewer images={portraitImages} handleLoadMore={handleLoadMore} nextCursor={nextCursor} />
      </div>

    </section>
  );
}
