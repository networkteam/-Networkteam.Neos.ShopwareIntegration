import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import Overlay from '../Components/Overlay'

import { useApiClient } from '../Api/Context';
import { formatCurrency, formatLocalDate } from '../Helper/utilities';

const Orders = ({ emptyMessage = 'You have not ordered yet' }) => {
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
    <div className='c-orders'>
      <Overlay loading={loading} />

      {orderItems.length > 0 ?
        <ul className='c-orders__list'>
          {orderItems.map(order => (
            <li className='c-orders__order' key={order.id}>
              <dl className='c-orders__order-details'>
                <dt className='c-orders__label c-orders__label--number'>Order:</dt>
                <dd className='c-orders__value c-orders__value--number'>{order.orderNumber}</dd>

                <dt className='c-orders__label c-orders__label--state'>Order state:</dt>
                <dd className='c-orders__value c-orders__value--state'>{order.stateMachineState.name}</dd>

                <dt className='c-orders__label c-orders__label--date'>Order date:</dt>
                <dd className='c-orders__value c-orders__value--date'>{formatLocalDate(order.orderDate)}</dd>

                <dt className='c-orders__label c-orders__label--net-total'>Total (net):</dt>
                <dd className='c-orders__value c-orders__value--net-total'>{formatCurrency(order.amountNet)}</dd>

                {order.price.calculatedTaxes.map(tax => (
                  <div key={tax.taxRate}>
                    <dt className='c-orders__label c-orders__label--tax'>plus {tax.taxRate}% tax:</dt>
                    <dd className='c-orders__value c-orders__value--tax'>{formatCurrency(tax.tax)}</dd>
                  </div>
                ))}

                <dt className='c-orders__label c-orders__label--shipping'>Shipping costs:</dt>
                <dd className='c-orders__value c-orders__value--shipping'>{formatCurrency(order.shippingTotal)}</dd>

                <dt className='c-orders__label c-orders__label--total'>Total ({order.taxStatus}):</dt>
                <dd className='c-orders__value c-orders__value--total'>{formatCurrency(order.amountTotal)}</dd>
              </dl>
            </li>
          ))}
        </ul>
      :
        !loading ?
          <div className='c-orders__empty-message'>{emptyMessage}</div>
        : null }
    </div>
  );
};

Orders.propTypes = {
  emptyMessage: propTypes.string
};

export default Orders;
