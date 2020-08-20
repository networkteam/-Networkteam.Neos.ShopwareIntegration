import React, { useEffect, useState } from 'react';

import Overlay from './Overlay'

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
        <dl className='c-cart-summary__list'>
          <dt className='c-cart-summary__label c-cart-summary__label--count'>Different products:</dt>
          <dd className='c-cart-summary__value c-cart-summary__value--count'>{cartData.lineItems.length}</dd>

          <dt className='c-cart-summary__label c-cart-summary__label--total'>Total:</dt>
          <dd className='c-cart-summary__value c-cart-summary__value--total'>{formatCurrency(cartData.price.positionPrice)}</dd>

          {cartData.deliveries.length > 0 ?
            <>
              <dt className='c-cart-summary__label c-cart-summary__label--shipping'>Shipping {cartData.deliveries[0].shippingMethod.name}:</dt>
              <dd className='c-cart-summary__value c-cart-summary__value--shipping'>{formatCurrency(cartData.deliveries[0].shippingCosts.totalPrice)}</dd>
            </>
          : null }

          <dt className='c-cart-summary__label c-cart-summary__label--grand-total'>Grand total:</dt>
          <dd className='c-cart-summary__value c-cart-summary__value--grand-total'>{formatCurrency(cartData.price.totalPrice)}</dd>

          <dt className='c-cart-summary__label c-cart-summary__label--net-total'>Net total:</dt>
          <dd className='c-cart-summary__value c-cart-summary__value--net-total'>{formatCurrency(cartData.price.netPrice)}</dd>

          {cartData.price.calculatedTaxes.map(tax => (
            <div className='c-cart-summary__wrapper c-cart-summary__wrapper--tax' key={tax.taxRate}>
              <dt className='c-cart-summary__label c-cart-summary__label--tax'>plus {tax.taxRate}% tax:</dt>
              <dd className='c-cart-summary__value c-cart-summary__value--tax'>{formatCurrency(tax.tax)}</dd>
            </div>
          ))}
        </dl>
      : null }
    </div>
  );
};

export default CartSummary;
