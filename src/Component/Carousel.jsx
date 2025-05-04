import React from 'react'
import { useState } from 'react';
const Carousel = () => {
    const images = [
        'https://m.media-amazon.com/images/G/31/Events/img25/Nimesh/May_ART_Deals_Header__PC_8PM.jpg',
        'https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?semt=ais_hybrid&w=740',
        '	https://m.media-amazon.com/images/G/31/Prime/PostPEA/BB1/MAYART-BB_PSE-21.jpg',
      ];
      const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };
  return (
    <div className="relative w-full h-full mx-auto overflow-hidden rounded-xl shadow-lg">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition duration-500"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl px-2 py-1 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl px-2 py-1 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}

export default Carousel
