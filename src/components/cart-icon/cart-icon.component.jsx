import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectCartCount, selectIscartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles';
import { CartDropdownContainer } from '../cart-dropdown/cart-dropdown.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIscartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const handleClickOutside = (event) => {
    if (isCartOpen) {
      if (!event.target.closest(CartDropdownContainer)) {
        dispatch(setIsCartOpen(false));
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;