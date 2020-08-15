import React, { useEffect, useState } from 'react';
import propTypes from "prop-types";

import { useApiClient } from '../Api/Context';
import { replaceTemplatePlaceholder } from '../Helper/templateHelper';

const CartItems = ({ proxy, tagName, additionalClasses, emptyCartMessage }) => {
  const apiClient = useApiClient();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const template = proxy.innerHTML;
  const Tag = `${tagName}`;

  let cartContent = ''

  useEffect(() => {
    async function fetchData() {
      const result = await apiClient.getCart();
      setCartItems(result.data.data.lineItems);
      setLoading(false);
    }

    fetchData();

    document.addEventListener('cart-changed', () => {
      fetchData();
    })
  },[])

  const Content = () => {
    if(loading) {
      return (
        <div className={'loading placeholder'}></div>
      );
    } else if(cartItems.length === 0) {
      return (
        <div className={'message info'}>{emptyCartMessage}</div>
      );
    } else {
      cartItems.forEach((data) => {
        cartContent += replaceTemplatePlaceholder(template, data);
      })

      return (
        <Tag className={additionalClasses} dangerouslySetInnerHTML={{ __html: cartContent }}></Tag>
      );
    }
  };

  return (
    <Content />
  );
};

CartItems.propTypes = {
  proxy: propTypes.any,
  tagName: propTypes.string,
  additionalClasses: propTypes.string,
  emptyCartMessage: propTypes.string
};

export default CartItems;
