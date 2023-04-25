import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'
import { CartItem } from './CartItem.jsx';
import { calculateCartTotals } from '../utils/index.js';
import { Button } from './Button.jsx';
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, removeToCart, removeFromCart } = useCart()
  const { totalItemsCart, totalPrice } = calculateCartTotals(cart);

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
              removeToCart={() => removeToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              {...product}
            />
          ))}
        </ul>

        {totalPrice > 0 && (
          <>
            <section>
              <p>Total de productos agregados: { totalItemsCart }</p>
              <p>Total: ${totalPrice.toLocaleString()}</p>
            </section>

            <button onClick={clearCart}>
              <ClearCartIcon />
            </button>
            <div className='cart-btn'>
              <Button
                route='/checkout'
                text='Pagar'
              />
            </div>
          </>
        )}
      </aside>
    </>
  )
}