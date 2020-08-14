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
        'sw-access-key': apiKey
      }
    });
  }

  addProductToCart(productId) {
    const url = endpoints.ADD_TO_CART_BASE + productId;
    const contextToken = this.getCookie('sw-context-token');

    if(contextToken) {
      this.client.defaults.headers = {
        ...this.client.defaults.headers,
        ...{
          'sw-context-token': contextToken
        }
      }
    }

    return new Promise((resolve, reject) => {
      this.client
        .post(url)
        .then((data) => {
          console.log(data);
          if(!contextToken) {
            this.setCookie('sw-context-token', data.data.data.token);
          }
          resolve('success');
        })
        .catch((e) => reject(e));
    });
  }

  setCookie(name, value, days = 7, path = '/') {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
  }

  getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=')
      return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
  }

  deleteCookie(name, path) {
    this.setCookie(name, '', -1, path)
  }
}
