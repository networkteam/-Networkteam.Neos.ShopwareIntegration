import React, { useEffect, useState } from 'react';
import propTypes from "prop-types";

import { useApiClient } from '../Api/Context';
import { replaceTemplatePlaceholder } from '../Helper/templateHelper';

const CartSummary = ({ proxy, tagName, additionalClasses, hideOnEmptyCart }) => {
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
    })
  },[])

  const Content = () => {
    if(loading || (hideOnEmptyCart && cartData.lineItems.lenght > 0)) {
      return []
    } else {
      const cartSummary = replaceTemplatePlaceholder(template, cartData);

      return (
        <Tag className={additionalClasses} dangerouslySetInnerHTML={{ __html: cartSummary }}></Tag>
      );
    }
  };

  return (
    <Content />
  );
};

CartSummary.propTypes = {
  proxy: propTypes.any,
  tagName: propTypes.string,
  additionalClasses: propTypes.string,
  hideOnEmptyCart: propTypes.bool
};

export default CartSummary;
