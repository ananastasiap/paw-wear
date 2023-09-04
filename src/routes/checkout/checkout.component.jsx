import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout.style.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        {
          cartItems.map((cartItem) => {
            const { id, name, quantity } = cartItem;
            return (
              <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <span onClick={() => removeItemFromCart(cartItem)}>dec</span>
                <span onClick={() => addItemToCart(cartItem)}>inc</span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Checkout;