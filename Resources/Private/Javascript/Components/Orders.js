import React, { useEffect, useState } from 'react';
import propTypes from "prop-types";

import { useApiClient } from '../Api/Context';
import { replaceTemplatePlaceholder } from '../Helper/templateHelper';

const OrderOverview = ({ proxy, tagName, additionalClasses }) => {
  const apiClient = useApiClient();
  const [ordersData, setOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const template = proxy.innerHTML;
  const Tag = tagName ? `${tagName}` : `div`;

  useEffect(() => {
    async function fetchData() {
      const result = await apiClient.getOrders();
      const orders = { orders: result ? result.data.data : [] }
      setOrdersData(orders);
      setLoading(false);
    }

    fetchData();
  },[])

  const Content = () => {
    if(loading) {
      return (
        <div className={'loading loading--placeholder'}></div>
      );
    } else {
      const html = replaceTemplatePlaceholder(template, ordersData);

      return (
        <Tag className={additionalClasses} dangerouslySetInnerHTML={{ __html: html }}></Tag>
      );
    }
  };

  return (
    <Content />
  );
};

OrderOverview.propTypes = {
  proxy: propTypes.any,
  tagName: propTypes.string,
  additionalClasses: propTypes.string
};

export default OrderOverview;
