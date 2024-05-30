import React from 'react';

const LazyImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="mx-auto object-center object-cover rounded-2xl cursor-pointer"
    />
  );
};

export default LazyImage;