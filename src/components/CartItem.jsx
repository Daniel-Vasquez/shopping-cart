import { RemoveFromCartIcon } from '../components/Icons'

export const CartItem = ({ thumbnail, price, title, quantity, stock, addToCart, removeToCart, removeFromCart }) => {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <section>
          <strong>{title} - ${price.toLocaleString()}</strong>
        </section>

        <section className='product-quantity'>
          <small>
            Qty: {quantity}
          </small>
          <button disabled={quantity <= 1} onClick={removeToCart}>-</button>
          <button disabled={quantity >= stock} onClick={addToCart}>+</button>
        </section>

        <section>
          <button style={{ backgroundColor: 'red' }} onClick={removeFromCart}>
            <RemoveFromCartIcon />
          </button>
        </section>
      </div>
    </li>
  )
}
