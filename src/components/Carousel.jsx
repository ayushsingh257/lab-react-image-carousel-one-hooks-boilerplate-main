import React, { useState } from 'react';
import './Carousel.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { images } from '../data/CarouselData'; // Import image data

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel-container">
      <h1>Image Carousel Example</h1>
      <div className="image-carousel">
        <img src={images[currentImageIndex].img} alt={images[currentImageIndex].title} />
        <div className="image-overlay">
          <h2>{images[currentImageIndex].title}</h2>
          <p>{images[currentImageIndex].subtitle}</p>
        </div>
        <button className="prev-button" onClick={prevImage}>
          <ArrowBackIosIcon />
        </button>
        <button className="next-button" onClick={nextImage}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
