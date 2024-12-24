'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

interface Props {
  imageUrls: string[];
}

function ImageSlider({ imageUrls }: Props) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // To manage transitions

  // Handle automatic image change every 5 seconds
  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) return;

    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [imageUrls]);

  // Handle image change with arrows
  const handlePrevious = () => {
    setIsTransitioning(true);
    setImageIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setImageIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
  };

  // Ensure the transition state resets once the image index has been updated
  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Duration of the transition (matching the CSS transition time)
      return () => clearTimeout(timeout);
    }
  }, [imageIndex, isTransitioning]);

  if (!imageUrls || imageUrls.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="relative rounded-xl w-full h-full overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out"
   >
        <Image
          src={imageUrls[imageIndex]}
          alt={`Slide ${imageIndex}`}
          fill={true}
          className="object-cover"
        />
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
        onClick={handlePrevious}
      >
        <ArrowBigLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
        onClick={handleNext}
      >
        <ArrowBigRight className="w-6 h-6" />
      </button>
    </div>
  );
}

export default ImageSlider;
