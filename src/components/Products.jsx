import { useState, useEffect } from 'react'
import { useCart } from '../hooks/useCart.js'
import { Product } from './Product.jsx'
import { LoadingScreen } from './LoadingScreen.jsx'
import './Products.css'

export function Products({ products }) {
  const [isLoading, setIsLoading] = useState(false)
  const { addToCart, removeToCart, removeFromCart, cart } = useCart()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  if (products.length === 0) {
    return (
      <h1>No products</h1>
    )
  }

  if (isLoading) return <LoadingScreen />

  return (
    <main className='products'>
      <ul className='products-content'>
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