import axios from 'axios';

import * as endpoints from './Api/endpoints';

export class ShopwareConnector {
  baseUri = ''
  apiKey = ''

  constructor(baseUri, apiKey) {

    this.client = axios.create({
      baseURL: baseUri,
      headers: {
        'sw-access-key': apiKey
      }
    });
  }

  addProductToBasket(productId) {
    const url = endpoints.ADD_TO_CART_BASE + '/' + productId;

    axios.post(url).then(data => {
      console.log(data);
    })
  }
}
