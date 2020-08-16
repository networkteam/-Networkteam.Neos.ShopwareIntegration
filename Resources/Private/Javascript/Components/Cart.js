import React, { useEffect, useState } from 'react';
import propTypes from "prop-types";

import { useApiClient } from '../Api/Context';
import { replaceTemplatePlaceholder } from '../Helper/templateHelper';

const Cart = ({ proxy, tagName, additionalClasses }) => {
  const apiClient = useApiClient();
  const [cartData, setCartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const template = proxy.innerHTML;
  const Tag = tagName ? `${tagName}` : `div`;

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
    if(loading) {
      return (
        <div className={'loading loading--placeholder'}></div>
      );
    } else {
      const html = replaceTemplatePlaceholder(template, cartData);

      return (
        <Tag className={additionalClasses} dangerouslySetInnerHTML={{ __html: html }}></Tag>
      );
    }
  };

  return (
    <Content />
  );
};

Cart.propTypes = {
  proxy: propTypes.any,
  tagName: propTypes.string,
  additionalClasses: propTypes.string
};

export default Cart;
