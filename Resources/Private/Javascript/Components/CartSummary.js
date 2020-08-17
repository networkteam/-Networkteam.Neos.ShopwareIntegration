import React, { useEffect, useState } from 'react';

import Overlay from '../Components/Overlay'

import { useApiClient } from '../Api/Context';
import { formatCurrency } from '../Helper/utilities';

const CartSummary = () => {
  const apiClient = useApiClient();
  const [cartData, setCartData] = useState({'lineItems': []});
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
    <div>
      <Overlay loading={loading} />

      {Object.keys(cartData).length > 1 ?
        <dl>
          <dt>Different products:</dt>
          <dd>{cartData.lineItems.length}</dd>

          <dt>Total:</dt>
          <dd>{formatCurrency(cartData.price.positionPrice)}</dd>

          {cartData.deliveries[0].shippingCosts.totalPrice ?
            <>
              <dt>Shipping costs:</dt>
              <dd>{formatCurrency(cartData.deliveries[0].shippingCosts.totalPrice)}</dd>
            </>
          : null }

          <dt>Grand total:</dt>
          <dd>{formatCurrency(cartData.price.totalPrice)}</dd>

          <dt>Net total:</dt>
          <dd>{formatCurrency(cartData.price.netPrice)}</dd>

          {cartData.price.calculatedTaxes.map(tax => (
            <div key={tax.taxRate}>
              <dt>plus {tax.taxRate}% tax:</dt>
              <dd>{formatCurrency(tax.tax)}</dd>
            </div>
          ))}
        </dl>
      : null }
    </div>
  );
};

export default CartSummary;
