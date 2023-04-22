import { RemoveFromCartIcon } from '../components/Icons'

export const CartItem = ({ thumbnail, price, title, quantity, stock, addToCart, removeFromCart }) => {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <div>
          <strong>{title} - ${price.toLocaleString()}</strong>
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
      </div>
    </li>
  )
}
