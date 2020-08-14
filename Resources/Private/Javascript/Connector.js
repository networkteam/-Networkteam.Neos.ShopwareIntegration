import 'core-js';
import 'regenerator-runtime/runtime';
import axios from 'axios';

import * as endpoints from './Api/endpoints';

export class ShopwareConnector {
  client = null;

  constructor({ baseUri, apiKey }) {
    this.client = axios.create({
      baseURL: baseUri,
      headers: {
        'sw-access-key': apiKey,
      },
    });
  }

  addProductToCart(productId) {
    const url = endpoints.ADD_TO_CART_BASE + productId;
    return new Promise((resolve, reject) => {
      this.client
        .post(url)
        .then((data) => {
          console.log(data);
          resolve('success');
        })
        .catch((e) => reject(e));
    });
  }
}
