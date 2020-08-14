import axios from 'axios';

import * as endpoints from './Api/endpoints';

export class ShopwareConnector {
  client = null;

  constructor({ baseUri, apiKey }) {
    console.log(baseUri, apiKey);
    this.client = axios.create({
      baseURL: baseUri,
      headers: {
        'sw-access-key': apiKey,
      },
    });
  }

  addProductToCart(productId) {
    const url = endpoints.ADD_TO_CART_BASE + productId;
    console.log(url);
    console.log(this.client);
    this.client.post(url).then((data) => {
      console.log(data);
    });
  }
}
