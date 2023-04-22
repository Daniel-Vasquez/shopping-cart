export function totalCartQuantity(cart) {
  return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}