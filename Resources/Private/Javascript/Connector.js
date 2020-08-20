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

  handleError(error) {
    document.dispatchEvent(new CustomEvent('error', {
      detail: {
        error: error
      }
    }));

    if (error.response) {
      error.response.data.errors.forEach(e => {
        console.log(e.status, e.code)
      });
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
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

  request(method, url, parameter) {
    const hasCookie = this.setContextTokenHeader();

    return new Promise((resolve, reject) => {
      this.client({
        method: method,
        url: url,
        data: { ...parameter }
      })
      .then((data) => {
        if (!hasCookie) {
          this.setContextTokenHeader(data.data.token);
        }
        resolve(data);
      })
      .catch((e) => this.handleError(e));
    });
  }

  addProductToCart(productId) {
    const url = endpoints.ADD_TO_CART_BASE + productId;
    return this.request('post', url);
  }

  removeLineItemFromCart(lineItemId) {
    const url = endpoints.DELETE_LINE_ITEM_BASE + lineItemId;
    return this.request('delete', url);
  }

  getCart() {
    const url = endpoints.GET_CART;
    return this.request('get', url);
  }

  updateLineItem(lineItemId, parameter) {
    const url = endpoints.UPDATE_LINE_ITEM_BASE + lineItemId;
    return this.request('patch', url, parameter);
  }
}
