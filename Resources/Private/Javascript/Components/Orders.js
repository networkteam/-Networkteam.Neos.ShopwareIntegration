import React, { useEffect, useState } from 'react';

import Overlay from '../Components/Overlay'

import { useApiClient } from '../Api/Context';
import { formatCurrency, formatLocalDate } from '../Helper/utilities';

const Orders = () => {
  const apiClient = useApiClient();
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await apiClient.getOrders();
      setOrderItems(result.data.data);
      setLoading(false);
    }
    fetchData();
  },[])

  return (
    <div>
      <Overlay loading={loading} />

      {orderItems.length > 0 ?
        <ul>
          {orderItems.map(order => (
            <li key={order.id}>
              <dl>
                <dt>Order:</dt>
                <dd>{order.orderNumber}</dd>

                <dt>Order state:</dt>
                <dd>{order.stateMachineState.name}</dd>

                <dt>Order date:</dt>
                <dd>{formatLocalDate(order.orderDate)}</dd>

                <dt>Total (net):</dt>
                <dd>{formatCurrency(order.amountNet)}</dd>

                {order.price.calculatedTaxes.map(tax => (
                  <div key={tax.taxRate}>
                    <dt>plus {tax.taxRate}% tax:</dt>
                    <dd>{formatCurrency(tax.tax)}</dd>
                  </div>
                ))}

                <dt>Shipping costs:</dt>
                <dd>{formatCurrency(order.shippingTotal)}</dd>

                <dt>Total ({order.taxStatus}):</dt>
                <dd>{formatCurrency(order.amountTotal)}</dd>
              </dl>
            </li>
          ))}
        </ul>
      :
        !loading ?
          <div>You have not ordered yet</div>
        : null }
    </div>
  );
};

export default Orders;
