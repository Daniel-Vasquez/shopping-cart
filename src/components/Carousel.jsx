import { useState } from 'react';
import './Carousel.css'

export function Carousel({ images }) {
  const [position, setPosition] = useState(0);
  const imgWidth = 250;
  
  const handleNavLeftClick = () => {
    if (position > 0) {
      setPosition(position - imgWidth);
    }
  };
  
  const handleNavRightClick = () => {
    if (position < imgWidth * (images.length - 1)) {
      setPosition(position + imgWidth);
    }
  };
  
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${position}px)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Imagen ${index + 1}`} lazy='loading'/>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-nav-left" onClick={handleNavLeftClick}>
            {'<'}
          </button>
          <button className="carousel-nav-right" onClick={handleNavRightClick}>
            {'>'}
          </button>
        </>
      )}
    </div>
  );
}