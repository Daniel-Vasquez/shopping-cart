import { useState } from 'react';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import './Products.css'

function Carousel({ images }) {
  const [position, setPosition] = useState(0);
  const imgWidth = 250; // Ajusta el ancho de las imágenes según tus necesidades
  
  const handleNavLeftClick = () => {
    console.log('left')
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

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              {/* <img
                src={product.thumbnail}
                alt={product.title}
              /> */}
              <Carousel images={ product.images } />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}