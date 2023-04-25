import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { Carousel } from './Carousel.jsx'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart.js'

export const Product = ({ products, checkProductInCart, removeFromCart, addToCart, removeToCart }) => { 
  const { cart } = useCart()

  return (
    products.map(product => {
      const { id, images, title, price } = product
      const isProductInCart = checkProductInCart(product)
      
      const { quantity } = cart.find((product) => product.id === id) || 0

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
            {
              isProductInCart && (
                <div className='product-quantity'>
                  <small>
                    Qty: {quantity}
                  </small>
                  <button
                    disabled={quantity <= 1}
                    onClick={() => removeToCart(product)}
                  >
                    -
                  </button>
                  <button
                    disabled={quantity >= product.stock}
                    onClick={() => addToCart(product)}
                  >
                    +
                  </button>
                </div>
              )
            }
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
