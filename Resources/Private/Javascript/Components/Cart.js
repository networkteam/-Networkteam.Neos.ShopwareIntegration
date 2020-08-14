import React, { useEffect, useState } from 'react';

import { useApiClient } from '../Api/Context';

const Cart = ({ proxy }) => {
  const apiClient = useApiClient();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      proxy.classList.add('loading');
      const result = await apiClient.getCart();
      proxy.classList.remove('loading');
      setCartItems(result.data.data.lineItems);
    }
    fetchData();
  },[])

  return (
    <ul>
      {cartItems.map(item => (
        <li key={item.id}>
          <dl>
            <dt>{item.label}</dt>
            <dd>
              <img src={item.cover.url} />
            </dd>
            <dd>{item.quantity}</dd>
            <dd>{item.price.unitPrice}</dd>
            <dd>{item.price.totalPrice}</dd>
          </dl>
        </li>
      ))}
    </ul>
  );

};

export default Cart;
