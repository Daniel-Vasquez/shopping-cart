import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { Carousel } from './Carousel.jsx'
import { Link } from 'react-router-dom'

export const Product = ({ products, checkProductInCart, removeFromCart, addToCart }) => {  
  return (
    products.map(product => {
      const { id, images, title, price } = product
      const isProductInCart = checkProductInCart(product)
  
      return (
        <li key={id}>
          <Carousel images={images} />
          <div className='product-title'>
            <Link
              className='product-btn'
              to={`/product/${id}`}
            >
              <strong>{title}</strong> - ${price.toLocaleString()}
            </Link>
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
    })
  )
}
