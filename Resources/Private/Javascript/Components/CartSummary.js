import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';

import Overlay from './Overlay';
import DefinitionList, { DefinitionItem } from './DefinitionList';

import { useApiClient } from '../Api/Context';
import { formatCurrency } from '../Helper/utilities';
import { i18n } from '../Helper/i18n';

const CartSummary = ({ translation }) => {
  const apiClient = useApiClient();
  const labels = {...i18n.cartSummary, ...translation}
  const [cartData, setCartData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await apiClient.getCart();
      setCartData(result.data.data);
      setLoading(false);
    }
    fetchData();
    document.addEventListener('cart-changed', () => {
      fetchData();
    })
  },[])

  return (
    <div className='c-cart-summary'>
      <Overlay loading={loading} />

      {Object.keys(cartData).length > 0 ?
        <DefinitionList modifier='summary'>
          <DefinitionItem
            label={labels.uniqueProducts}
            value={cartData.lineItems.length}
            modifier='count'
          />

          <DefinitionItem
            label={labels.total}
            value={formatCurrency(cartData.price.positionPrice)}
            modifier='total'
          />

          {cartData.deliveries.length > 0 ?
            <DefinitionItem
              label={`${labels.shippingBefore}${cartData.deliveries[0].shippingMethod.name}${labels.shippingAfter}`}
              value={formatCurrency(cartData.deliveries[0].shippingCosts.totalPrice)}
              modifier='shipping'
              />
          : null }

          <DefinitionItem
            label={labels.netTotal}
            value={formatCurrency(cartData.price.netPrice)}
            modifier='net-total'
          />

          {cartData.price.calculatedTaxes.map(tax => (
            <DefinitionItem
              label={`${labels.taxBefore}${tax.taxRate}${labels.taxAfter}`}
              value={formatCurrency(tax.tax)}
              modifier='tax'
              key={tax.taxRate}
            />
          ))}

          <DefinitionItem
            label={labels.grandTotal}
            value={formatCurrency(cartData.price.totalPrice)}
            modifier='grand-total'
          />
        </DefinitionList>
      : null }
    </div>
  );
};

CartSummary.propTypes = {
  translation: propTypes.object
};

export default CartSummary;
