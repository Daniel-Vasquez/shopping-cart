import { useState, useEffect } from 'react';
import './Carousel.css'

function checkImageStatus(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = () => reject(url);
    img.src = url;
  });
}

export function Carousel({ images }) {
  const [imageStatus, setImageStatus] = useState([]);

  useEffect(() => {
    Promise.all(images.map(checkImageStatus))
      .then(() => {
        setImageStatus(images.map(() => true));
      })
      .catch(() => {
        setImageStatus(images.map(() => false));
      });
  }, [images]);

  return (
    <div className="slider">
      <div className="slides">
        {images.map((img, index) =>
          imageStatus[index] ? (
            <div key={index} className="slides-img">
              <img className="slides-img__img" src={img} alt={`Imagen ${index + 1}`} lazy='loading' />
            </div>
          ) : (
            <div key={index} className="slides-img" style={{ border: '1px solid #575757' }}>
              imagen no disponible
            </div>
          )
        )}
      </div>
    </div>
  );
}