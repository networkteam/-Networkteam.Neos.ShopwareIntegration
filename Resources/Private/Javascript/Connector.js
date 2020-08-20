import 'core-js';
import 'regenerator-runtime/runtime';
import axios from 'axios';

import { getCookie, setCookie } from './Helper/cookieHelper';
import { fireEvent } from './Helper/utilities';
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
        if (data.status == 200) {
          resolve(data)
        } else {
          console.log(data)
        }
      })
      .catch((e) => this.handleError(e));
    });
  }

  async addProductToCart(productId) {
    fireEvent('begin_add-to-cart');

    const url = endpoints.ADD_TO_CART_BASE + productId;
    const result = await this.request('post', url);

    if(result) {
      fireEvent('completed_add-to-cart');
      fireEvent('cart-changed');
      return result;
    }
  }

  async removeLineItemFromCart(lineItemId) {
    fireEvent('begin_remove-from-cart');

    const url = endpoints.DELETE_LINE_ITEM_BASE + lineItemId;
    const result = await this.request('delete', url);

    if(result) {
      fireEvent('completed_remove-from-cart');
      fireEvent('cart-changed');
      return result;
    }
  }

  async updateLineItem(lineItemId, parameter) {
    fireEvent('begin_update-line-item');

    const url = endpoints.UPDATE_LINE_ITEM_BASE + lineItemId;
    const result = await this.request('patch', url, parameter);

    if(result) {
      fireEvent('completed_update-line-item');
      fireEvent('cart-changed');
      return result;
    }
  }

  getCart() {
    const url = endpoints.GET_CART;
    return this.request('get', url);
  }
}
