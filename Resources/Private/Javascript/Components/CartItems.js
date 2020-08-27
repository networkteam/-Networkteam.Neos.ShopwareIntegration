import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import Overlay from './Overlay'
import LineItem from './LineItem'

import { useApiClient } from '../Api/Context';
import { i18n } from '../Helper/i18n';

const CartItems = ({ translation }) => {
  const apiClient = useApiClient();
  const labels = {...i18n.cartItems, ...translation}
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
          <div className='c-cart-items__empty-message'>{labels.emptyMessage}</div>
        : null }
    </div>
  );
};

CartItems.propTypes = {
  emptyMessage: propTypes.string,
  translation: propTypes.object
};

export default CartItems;
