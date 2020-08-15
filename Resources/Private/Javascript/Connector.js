import 'core-js';
import 'regenerator-runtime/runtime';
import axios from 'axios';

import { getCookie, setCookie } from './Helper/cookieHelper';
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

  _setContextTokenHeaderFromCookie() {
    const currentHeader = this.client.defaults.headers['sw-context-token'];
    const contextToken = getCookie('sw-context-token');
    if (currentHeader && currentHeader === contextToken) {
      return true;
    }

    if (contextToken) {
      this.client.defaults.headers['sw-context-token'] = contextToken;
      return true;
    }

    return;
  }

  setContextTokenHeader(newContextToken) {
    if (newContextToken) {
      setCookie('sw-context-token', newContextToken);
      this.client.defaults.headers['sw-context-token'] = newContextToken;
      return true;
    } else {
      return this._setContextTokenHeaderFromCookie();
    }
  }

  addProductToCart(productId) {
    const url = endpoints.ADD_TO_CART_BASE + productId;
    const hasCookie = this.setContextTokenHeader();

    return new Promise((resolve, reject) => {
      this.client
        .post(url)
        .then(({ data }) => {
          if (!hasCookie) {
            this.setContextTokenHeader(data.data.token);
          }
          resolve('success');
        })
        .catch((e) => reject(e));
    });
  }

  removeLineItemFromCart(lineItemId) {
    const url = endpoints.DELETE_LINE_ITEM_BASE + lineItemId;
    const hasCookie = this.setContextTokenHeader();

    return new Promise((resolve, reject) => {
      this.client
        .delete(url)
        .then(({ data }) => {
          if (!hasCookie) {
            this.setContextTokenHeader(data.data.token);
          }
          resolve('success');
        })
        .catch((e) => reject(e));
    });
  }

  updateLineItemInCart(lineItemId, parameter) {
    const url = endpoints.UPDATE_LINE_ITEM_BASE + lineItemId;
    const hasCookie = this.setContextTokenHeader();

    return new Promise((resolve, reject) => {
      this.client
        .patch(url, {...parameter})
        .then((data) => {
          if (!hasCookie) {
            this.setContextTokenHeader(data.data.token);
          }
          resolve('success');
        })
        .catch((e) => reject(e));
    });
  }

  getCart() {
    const url = endpoints.GET_CART;
    const hasCookie = this.setContextTokenHeader();

    return new Promise((resolve, reject) => {
      this.client
        .get(url)
        .then((data) => {
          if (!hasCookie) {
            this.setContextTokenHeader(data.data.token);
          }
          resolve(data);
        })
        .catch((e) => reject(e));
    });
  }
}
