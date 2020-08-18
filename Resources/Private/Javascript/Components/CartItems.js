import React, { useEffect, useState } from 'react';

import Overlay from '../Components/Overlay'

import { useApiClient } from '../Api/Context';
import { formatCurrency } from '../Helper/utilities';

const CartItems = () => {
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
    <div>
      <Overlay loading={loading} />

      {cartItems.length > 0 ?
        <ul>
          {cartItems.map(product => (
            <li key={product.id}>
              <img src={product.cover.url} />
              <div>{product.label}</div>
              <div>{product.quantity}</div>
              <div>{formatCurrency(product.price.unitPrice)}</div>
              <div>{formatCurrency(product.price.totalPrice)}</div>
            </li>
          ))}
        </ul>
      : 
        !loading ?
          <div>Your shopping cart is empty</div>
        : null }
    </div>
  );
};

export default CartItems;
