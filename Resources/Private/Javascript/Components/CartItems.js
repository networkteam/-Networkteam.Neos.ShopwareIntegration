import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import Overlay from './Overlay'
import LineItem from './LineItem'

import { useApiClient } from '../Api/Context';

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
            <LineItem key={product.id} product={product} />
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
