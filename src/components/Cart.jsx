import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import { RemoveFromCartIcon } from './Icons.jsx'
import './Cart.css'

function totalCartQuantity(cart) {
  return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}

function CartItem({ thumbnail, price, title, quantity, stock, addToCart, removeFromCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price.toLocaleString()}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button disabled={quantity >= stock} onClick={addToCart}>+</button>
      </footer>

      <div>
        <button style={{ backgroundColor: 'red' }} onClick={removeFromCart}>
          <RemoveFromCartIcon />
        </button>
      </div>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeFromCart } = useCart()

  const totalItemsCart = totalCartQuantity(cart)

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon totalProductsAdded={cart} />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>

        {totalItemsCart > 0 && (
          <section>
            <p>Total: ${ totalItemsCart.toLocaleString() }</p>
          </section>
        )}

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}