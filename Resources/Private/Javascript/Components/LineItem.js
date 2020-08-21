import React from 'react';
import propTypes from 'prop-types';

import { useApiClient } from '../Api/Context';
import { formatCurrency } from '../Helper/utilities';
import { i18n } from '../Helper/i18n';

const LineItem = ({ product, translation }) => {
  const apiClient = useApiClient();
  const labels = {...i18n.lineItem, ...translation}
  const minPurchase = product.quantityInformation.minPurchase ? product.quantityInformation.minPurchase : 1
  const maxPurchase = product.quantityInformation.maxPurchase ? product.quantityInformation.maxPurchase : 100
  const difference = maxPurchase - minPurchase + 1;
  const selectOptions = Array.from(Array(difference), (key, index) => index + minPurchase);

  const updateQuantity = (event) => {
    apiClient.updateLineItem(
      product.id,
      {
        quantity: parseInt(event.target.value)
      }
    )
  }

  const removeLineItem = () => {
    apiClient.removeLineItemFromCart(product.id)
  }

  return (
    <li className='c-line-item' key={product.id}>
      <img className='c-line-item__image' src={product.cover.url} alt='' />
      <div className='c-line-item__label'>{product.label}</div>
      <div className='c-line-item__unit-price'>{formatCurrency(product.price.unitPrice)}</div>
      <div className='c-line-item__total-price'>{formatCurrency(product.price.totalPrice)}</div>
      <select value={product.quantity} onChange={updateQuantity}>
        {selectOptions.map((value) =>
          <option key={value} value={value}>{value}</option>
        )}
      </select>
      <button onClick={removeLineItem}>{labels.buttonDelete}</button>
    </li>
  );
};

LineItem.propTypes = {
  product: propTypes.object,
  translation: propTypes.object
};

export default LineItem;
