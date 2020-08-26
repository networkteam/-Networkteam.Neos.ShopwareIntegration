import React, { useEffect, useState } from 'react';

import Overlay from './Overlay';
import DefinitionList, { DefinitionItem } from './DefinitionList';

import { useApiClient } from '../Api/Context';
import { formatCurrency } from '../Helper/utilities';

const CartSummary = () => {
  const apiClient = useApiClient();
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
            label='Unique products:'
            value={cartData.lineItems.length}
            modifier='count'
          />

          <DefinitionItem
            label='Total:'
            value={formatCurrency(cartData.price.positionPrice)}
            modifier='total'
          />

          {cartData.deliveries.length > 0 ?
            <DefinitionItem
              label={`Shipping ${cartData.deliveries[0].shippingMethod.name}:`}
              value={formatCurrency(cartData.deliveries[0].shippingCosts.totalPrice)}
              modifier='shipping'
              />
          : null }

          <DefinitionItem
            label='Grand total:'
            value={formatCurrency(cartData.price.totalPrice)}
            modifier='grand-total'
          />

          <DefinitionItem
            label='Net total:'
            value={formatCurrency(cartData.price.netPrice)}
            modifier='net-total'
          />

          {cartData.price.calculatedTaxes.map(tax => (
            <DefinitionItem
              label={`plus ${tax.taxRate}% tax:`}
              value={formatCurrency(tax.tax)}
              modifier='tax'
              key={tax.taxRate}
            />
          ))}
        </DefinitionList>
      : null }
    </div>
  );
};

export default CartSummary;
