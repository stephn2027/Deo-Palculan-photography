import React, { useEffect, useState } from 'react';

import SectionHeading from './SectionHeading';
import { groupShots } from '../assets/works';
import GalleryViewer from './GalleryViewer';

import { getGroupImages } from '../actions/api';

export default function GroupShots() {
   
  const [imageList, setImagesList] = useState([]);
  const [nextCursor,setNextCursor] = useState(null);
  
  useEffect(()=>{
    const fetchData = async () =>{
        const responseJson = await getGroupImages();
        setImagesList(responseJson.resources)
        setNextCursor(responseJson.next_cursor);
        console.log(responseJson.next_cursor)
    }
    fetchData();
  },[])
   
   const handleLoadMore = async ()=>{
    const responseJson = await getGroupImages(nextCursor);
    setImagesList(currentImageList=>[...currentImageList,...responseJson.resources,]);
    setNextCursor(responseJson.next_cursor);
   };

    const GroupImages = imageList.map(image=>image.url);
  return (
    <section className="min-h-[100vh] h-full p-6 sm:py-8 lg:py-12 bg-[#b3a8b3]">
      <div className='max-w-[1920px] m-auto'>
      <div className='mt-28'>
      <SectionHeading>Group Shots</SectionHeading>
      </div>
     <GalleryViewer images={GroupImages} handleLoadMore={handleLoadMore} nextCursor={nextCursor}/>
      </div>
    
    </section>
  );
}

