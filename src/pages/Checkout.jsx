import { useCart } from '../hooks/useCart.js'
import { CartItem } from '../components/CartItem.jsx';
import { totalCartQuantity } from '../utils/index.js';
import { Button } from '../components/Button.jsx';
import { RemoveFromCartIcon } from '../components/Icons'
import '../components/Checkout.css'

export const Checkout = () => {
  const { cart, clearCart, addToCart, removeToCart, removeFromCart } = useCart()

  const totalItemsCart = totalCartQuantity(cart)

  if (cart.length === 0) {
    return (
      <>
        <h1>No hay productos agregados</h1>
        <Button
          route='/'
          text='Volver'
        />
      </>
    )
  }

  return (
    <>
      <h2>Productos agregados</h2>
      <div className='products-cart'>
        <ul className='products-cart-items'>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeToCart={() => removeToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>
      </div>
      <div>
        <p>Total: ${totalItemsCart.toLocaleString()}</p>
      </div>
      <div className='products-cart-options'>
        <button
          style={{ backgroundColor: 'red' }}
          onClick={clearCart}
          title='Vaciar carrito'
        >
          <RemoveFromCartIcon />
        </button>
        <Button
          route='/'
          text='Volver'
        />
      </div>
    </>
  )
}
