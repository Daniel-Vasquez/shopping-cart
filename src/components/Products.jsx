import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import { Carousel } from './Carousel.jsx'
import './Products.css'

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  if (products.length === 0) {
    return (
      <h1>No hay productos</h1>
    )
  }

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const { id, images, title, price } = product
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={id}>
              <Carousel images={ images } />
              <div>
                <strong>{title}</strong> - ${price.toLocaleString()}
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