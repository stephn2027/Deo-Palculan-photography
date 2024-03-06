import React,{useState,useEffect} from 'react';
import SectionHeading from './SectionHeading';
import { randomShots } from '../assets/works';
import GalleryViewer from './GalleryViewer';
import { getEtcImages } from '../actions/api';

export default function RandomShots() {

  const [imageList, setImagesList] = useState([]);
  const [nextCursor,setNextCursor] = useState(null);
  
  useEffect(()=>{
    const fetchData = async () =>{
        const responseJson = await getEtcImages();
        setImagesList(responseJson.resources)
        setNextCursor(responseJson.next_cursor);
        console.log(responseJson.next_cursor)
    }
    fetchData();
  },[])
   
   const handleLoadMore = async ()=>{
    const responseJson = await getEtcImages(nextCursor);
    setImagesList(currentImageList=>[...currentImageList,...responseJson.resources,]);
    setNextCursor(responseJson.next_cursor);
   };

    const RandomImages = imageList.map(image=>image.url)

  return (
    <section className="min-h-[100vh] h-full p-6 sm:py-8 lg:py-12 bg-[#b0aeac]">
      <div className="max-w-[1920px] m-auto">
        <div className="mt-20">
          <SectionHeading>Nature and Random Shots</SectionHeading>
        </div>
        <GalleryViewer images={RandomImages} handleLoadMore={handleLoadMore} nextCursor={nextCursor} />
      </div>
    </section>
  );
}
