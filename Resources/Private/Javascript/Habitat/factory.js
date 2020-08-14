import React from "react";
import ReactDOM from "react-dom";

import { ApiProvider } from "../Api/Context";

export default class ApiDomFactory {
  constructor(client) {
    this.client = client;
  }

  /**
   * Injects a react component
   * @param {object}			module		- The react component
   * @param {object}			props		- Props to initiate component with
   * @param {HTMLElement}		target		- The target element to inject to
   */
  inject(Module, props = {}, target) {
    if (target) {
      ReactDOM.render(
        <ApiProvider client={this.client}>
          <Module {...props} />
        </ApiProvider>,
        target
      );
    } else {
      // This is a warning coming from React Habitat. Kept Error Code for easier debugging
      // eslint-disable-next-line no-console
      console.warn("RHW07", "Target element is null or undefined.");
    }
  }

  /**
   *  Disposes a react component
   * @param {HTMLElement}		target		- The target element to dispose
   */
  dispose(target) {
    if (target) {
      ReactDOM.unmountComponentAtNode(target);
    }
  }
}
