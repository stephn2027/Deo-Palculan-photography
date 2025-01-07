import React, { useState, useEffect, useCallback } from 'react';
import ReactVisibilitySensor from 'react-visibility-sensor';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import LazyImage from './LazyImage';

export default function GalleryViewer({ images, handleLoadMore, nextCursor }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4 mt-20">
        {images &&
          images.map((imageUrl, index) => (
            <ReactVisibilitySensor
              key={index}
              partialVisibility={true}
              offset={{ bottom: 80 }}
              onChange={(isVisible) => imageVisibleChange(index, isVisible)}
            >
              <GridGalleryCard
                imageUrl={imageUrl}
                show={imagesShownArray[index]}
                index={index}
                images={images}
              />
            </ReactVisibilitySensor>
          ))}
      </div>
      <div className="flex flex-col items-center m-4">
        {nextCursor && (
          <button
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-900 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}

function GridGalleryCard({ imageUrl, show, index, images }) {
  const [model, setModel] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(index);

  const toggleModel = (index) => {
    setCurrentImageIndex(index);
    setModel(!model);
  };

  const handlePrevious = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleNext = useCallback((e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handleKeyDown = useCallback((e) => {
    if (model) {
      if (e.key === 'ArrowLeft') {
        handlePrevious(e);
      } else if (e.key === 'ArrowRight') {
        handleNext(e);
      } else if (e.key === 'Escape') {
        setModel(false);
      }
    }
  }, [model, handlePrevious, handleNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      {model && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-full mx-auto overflow-hidden rounded-lg shadow-xl">
            <button
              className="absolute top-0 right-0 my-6 md:my-10 lg:my-12 md:m-4 cursor-pointer z-50"
              onClick={() => setModel(false)}
              aria-label="Close gallery"
            >
              <FaTimes className="text-white text-2xl md:text-4xl stroke-black stroke-[20px]" />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 hover:bg-opacity-75 transition-opacity rounded-r-lg z-50"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-white text-2xl md:text-3xl" />
            </button>

            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 hover:bg-opacity-75 transition-opacity rounded-l-lg z-50"
              onClick={handleNext}
              aria-label="Next image"
            >
              <FaChevronRight className="text-white text-2xl md:text-3xl" />
            </button>

            <div className="max-h-[95vh]">
              <img
                src={images[currentImageIndex]}
                alt=""
                className="w-full h-[92vh] m-6 mx-auto md:max-h-[95vh] max-w-[92vw] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => toggleModel(index)}
        className={`relative transition-all duration-[0.8s] h-auto w-full rounded-xl transform mb-6 ${
          show
            ? ''
            : 'translate-y-28 sm:translate-y-8 md:translate-y-0 opacity-0'
        } ${model ? 'overflow-hidden' : ''}`}
      >
        <div className="absolute inset-0 z-10 flex transition duration-300 ease-in hover:opacity-0">
          <div className="md:block hidden absolute inset-0 bg-black opacity-70 rounded-xl"></div>
        </div>

        <LazyImage src={imageUrl} alt="" />
      </div>
    </>
  );
}
