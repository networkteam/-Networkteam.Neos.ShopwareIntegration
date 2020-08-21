import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import Overlay from './Overlay';
import DefinitionList, { DefinitionItem } from './DefinitionList';

import { useApiClient } from '../Api/Context';
import { formatCurrency, formatLocalDate } from '../Helper/utilities';
import { i18n } from '../Helper/i18n';

const Orders = ({ translation }) => {
  const apiClient = useApiClient();
  const labels = {...i18n.orders, ...translation}
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
                  label={labels.number}
                  value={order.orderNumber}
                  modifier='number'
                />

                <DefinitionItem
                  label={labels.state}
                  value={order.stateMachineState.name}
                  modifier='state'
                />

                <DefinitionItem
                  label={labels.date}
                  value={formatLocalDate(order.orderDate)}
                  modifier='date'
                />

                <DefinitionItem
                  label={labels.netTotal}
                  value={formatCurrency(order.amountNet)}
                  modifier='net-total'
                />

                {order.price.calculatedTaxes.map(tax => (
                  <DefinitionItem
                    label={`${labels.taxBefore}${tax.taxRate}${labels.taxAfter}`}
                    value={formatCurrency(tax.tax)}
                    modifier='tax'
                    key={tax.taxRate}
                  />
                ))}

                <DefinitionItem
                  label={labels.shipping}
                  value={formatCurrency(order.shippingTotal)}
                  modifier='shipping'
                />

                <DefinitionItem
                  label={labels.total}
                  value={formatCurrency(order.amountTotal)}
                  modifier='total'
                />
              </DefinitionList>
            </li>
          ))}
        </ul>
      :
        !loading ?
          <div className='c-orders__empty-message'>{labels.emptyMessage}</div>
        : null }
    </div>
  );
};

Orders.propTypes = {
  emptyMessage: propTypes.string,
  translation: propTypes.object
};

export default Orders;
