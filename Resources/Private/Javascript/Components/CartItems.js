import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import Overlay from '../Components/Overlay'

import { useApiClient } from '../Api/Context';
import { formatCurrency } from '../Helper/utilities';

const CartItems = ({ emptyMessage = 'Your shopping cart is empty' }) => {
  const apiClient = useApiClient();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await apiClient.getCart();
      setCartItems(result.data.data.lineItems);
      setLoading(false);
    }
    fetchData();
    document.addEventListener('cart-changed', () => {
      fetchData();
    })
  },[])

  return (
    <div className='c-cart-items'>
      <Overlay loading={loading} />

      {cartItems.length > 0 ?
        <ul className='c-cart-items__list'>
          {cartItems.map(product => (
            <li className='c-cart-items__item' key={product.id}>
              <img className='c-cart-items__image' src={product.cover.url} alt='' />
              <div className='c-cart-items__label'>{product.label}</div>
              <div className='c-cart-items__quantity'>{product.quantity}</div>
              <div className='c-cart-items__unit-price'>{formatCurrency(product.price.unitPrice)}</div>
              <div className='c-cart-items__total-price'>{formatCurrency(product.price.totalPrice)}</div>
            </li>
          ))}
        </ul>
      : 
        !loading ?
          <div className='c-cart-items__empty-message'>{emptyMessage}</div>
        : null }
    </div>
  );
};

CartItems.propTypes = {
  emptyMessage: propTypes.string
};

export default CartItems;
