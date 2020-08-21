import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import Overlay from './Overlay';
import DefinitionList, { DefinitionItem } from './DefinitionList';

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
              <DefinitionList modifier='orders'>
                <DefinitionItem
                  label='Order:'
                  value={order.orderNumber}
                  modifier='number'
                />

                <DefinitionItem
                  label='Order state:'
                  value={order.stateMachineState.name}
                  modifier='state'
                />

                <DefinitionItem
                  label='Order date:'
                  value={formatLocalDate(order.orderDate)}
                  modifier='date'
                />

                <DefinitionItem
                  label='Total (net):'
                  value={formatCurrency(order.amountNet)}
                  modifier='net-total'
                />

                {order.price.calculatedTaxes.map(tax => (
                  <DefinitionItem
                    label={`plus ${tax.taxRate}% tax:`}
                    value={formatCurrency(tax.tax)}
                    modifier='tax'
                    key={tax.taxRate}
                  />
                ))}

                <DefinitionItem
                  label='Shipping costs:'
                  value={formatCurrency(order.shippingTotal)}
                  modifier='shipping'
                />

                <DefinitionItem
                  label={`Total (${order.taxStatus}):`}
                  value={formatCurrency(order.amountTotal)}
                  modifier='total'
                />
              </DefinitionList>
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
