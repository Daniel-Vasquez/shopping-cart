import { useCart } from '../hooks/useCart.js'
import { Product } from './Product.jsx'
import './Products.css'

export function Products({ products }) {
  const { addToCart, removeToCart, removeFromCart, cart } = useCart()

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
        <Product
          products={products}
          addToCart={addToCart}
          removeToCart={removeToCart}
          removeFromCart={removeFromCart}
          checkProductInCart={ checkProductInCart }
        />
      </ul>
    </main>
  )
}