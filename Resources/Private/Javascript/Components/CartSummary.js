import React, { useEffect, useState } from 'react';

import { useApiClient } from '../Api/Context';
import { replaceTemplatePlaceholder } from '../Helper/templateHelper';

const CartSummary = ({ proxy, tagName, additionalClasses }) => {
  const apiClient = useApiClient();
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const template = proxy.innerHTML;
  const Tag = `${tagName}`;

  useEffect(() => {
    async function fetchData() {
      const result = await apiClient.getCart();
      setCartData(result.data.data);
      setLoading(false);
    }

    fetchData();

    document.addEventListener('cart-changed', () => {
      fetchData();
      console.log('Cart updated');
    })
  },[])

  const Content = () => {
    if(!loading && cartData.lineItems.length > 0) {
      const cartSummary = replaceTemplatePlaceholder(template, cartData);

      return (
        <Tag className={additionalClasses} dangerouslySetInnerHTML={{ __html: cartSummary }}></Tag>
      );
    } else {
      return []
    }
  };

  return (
    <Content />
  );
};

export default CartSummary;
