(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ShopwareRuntime"] = factory();
	else
		root["ShopwareRuntime"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// webpack-livereload-plugin
/******/ 	(function() {
/******/ 	  if (typeof window === "undefined") { return };
/******/ 	  var id = "webpack-livereload-plugin-script-f862c38db819fb68";
/******/ 	  if (document.getElementById(id)) { return; }
/******/ 	  var el = document.createElement("script");
/******/ 	  el.id = id;
/******/ 	  el.async = true;
/******/ 	  el.src = "//" + location.hostname + ":35729/livereload.js";
/******/ 	  document.getElementsByTagName("head")[0].appendChild(el);
/******/ 	}());
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/Private/Javascript/Connector.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/Private/Javascript/Api/endpoints.js":
/*!*******************************************************!*\
  !*** ./Resources/Private/Javascript/Api/endpoints.js ***!
  \*******************************************************/
/*! exports provided: ADD_TO_CART_BASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART_BASE", function() { return ADD_TO_CART_BASE; });
var ADD_TO_CART_BASE = "/sales-channel-api/v3/checkout/cart/product/";

/***/ }),

/***/ "./Resources/Private/Javascript/Connector.js":
/*!***************************************************!*\
  !*** ./Resources/Private/Javascript/Connector.js ***!
  \***************************************************/
/*! exports provided: ShopwareConnector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopwareConnector", function() { return ShopwareConnector; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Api_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api/endpoints */ "./Resources/Private/Javascript/Api/endpoints.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ShopwareConnector = /*#__PURE__*/function () {
  function ShopwareConnector(_ref) {
    var baseUri = _ref.baseUri,
        apiKey = _ref.apiKey;

    _classCallCheck(this, ShopwareConnector);

    _defineProperty(this, "client", null);

    console.log(baseUri, apiKey);
    this.client = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: baseUri,
      headers: {
        'sw-access-key': apiKey
      }
    });
  }

  _createClass(ShopwareConnector, [{
    key: "addProductToCart",
    value: function addProductToCart(productId) {
      var url = _Api_endpoints__WEBPACK_IMPORTED_MODULE_1__["ADD_TO_CART_BASE"] + productId;
      console.log(url);
      console.log(this.client);
      this.client.post(url).then(function (data) {
        console.log(data);
      });
    }
  }]);

  return ShopwareConnector;
}();

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");

var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");

var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");

var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");

var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest(); // HTTP basic authentication

    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle browser request cancellation (as opposed to a manual cancellation)


    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';

      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }

      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js"); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");

var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js"); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports.default = axios;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");

var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");

var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config); // Set config.method

  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  } // Hook up interceptors middleware


  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");

var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */


module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }

  return requestedURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");

var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Ensure headers exist

  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function () {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };

  return error;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */


module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};
  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = ['baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer', 'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName', 'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken', 'socketPath'];
  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });
  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  var axiosKeys = valueFromConfig2Keys.concat(mergeDeepPropertiesKeys).concat(defaultToConfig2Keys);
  var otherKeys = Object.keys(config2).filter(function filterAxiosKeys(key) {
    return axiosKeys.indexOf(key) === -1;
  });
  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });
  return config;
};

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;

  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");

var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js"); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */


function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (_typeof(obj) !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function deepMerge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (_typeof(result[key]) === 'object' && _typeof(val) === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (_typeof(val) === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9SZXNvdXJjZXMvUHJpdmF0ZS9KYXZhc2NyaXB0L0FwaS9lbmRwb2ludHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vUmVzb3VyY2VzL1ByaXZhdGUvSmF2YXNjcmlwdC9Db25uZWN0b3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL1tuYW1lXS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6WyJBRERfVE9fQ0FSVF9CQVNFIiwiU2hvcHdhcmVDb25uZWN0b3IiLCJiYXNlVXJpIiwiYXBpS2V5IiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJwcm9kdWN0SWQiLCJ1cmwiLCJlbmRwb2ludHMiLCJwb3N0IiwidGhlbiIsImRhdGEiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsInV0aWxzIiwic2V0dGxlIiwiYnVpbGRVUkwiLCJidWlsZEZ1bGxQYXRoIiwicGFyc2VIZWFkZXJzIiwiaXNVUkxTYW1lT3JpZ2luIiwiY3JlYXRlRXJyb3IiLCJ4aHJBZGFwdGVyIiwiY29uZmlnIiwiUHJvbWlzZSIsImRpc3BhdGNoWGhyUmVxdWVzdCIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0RGF0YSIsInJlcXVlc3RIZWFkZXJzIiwiaXNGb3JtRGF0YSIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsImF1dGgiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiQXV0aG9yaXphdGlvbiIsImJ0b2EiLCJmdWxsUGF0aCIsIm9wZW4iLCJtZXRob2QiLCJ0b1VwcGVyQ2FzZSIsInBhcmFtcyIsInBhcmFtc1NlcmlhbGl6ZXIiLCJ0aW1lb3V0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwiaGFuZGxlTG9hZCIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVVSTCIsImluZGV4T2YiLCJyZXNwb25zZUhlYWRlcnMiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJyZXNwb25zZURhdGEiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJyZXNwb25zZSIsInN0YXR1c1RleHQiLCJvbmFib3J0IiwiaGFuZGxlQWJvcnQiLCJvbmVycm9yIiwiaGFuZGxlRXJyb3IiLCJvbnRpbWVvdXQiLCJoYW5kbGVUaW1lb3V0IiwidGltZW91dEVycm9yTWVzc2FnZSIsImlzU3RhbmRhcmRCcm93c2VyRW52IiwiY29va2llcyIsInhzcmZWYWx1ZSIsIndpdGhDcmVkZW50aWFscyIsInhzcmZDb29raWVOYW1lIiwicmVhZCIsInVuZGVmaW5lZCIsInhzcmZIZWFkZXJOYW1lIiwiZm9yRWFjaCIsInNldFJlcXVlc3RIZWFkZXIiLCJ2YWwiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsImlzVW5kZWZpbmVkIiwiZSIsIm9uRG93bmxvYWRQcm9ncmVzcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblVwbG9hZFByb2dyZXNzIiwidXBsb2FkIiwiY2FuY2VsVG9rZW4iLCJwcm9taXNlIiwib25DYW5jZWxlZCIsImNhbmNlbCIsImFib3J0Iiwic2VuZCIsImJpbmQiLCJBeGlvcyIsIm1lcmdlQ29uZmlnIiwiZGVmYXVsdHMiLCJjcmVhdGVJbnN0YW5jZSIsImRlZmF1bHRDb25maWciLCJjb250ZXh0IiwiaW5zdGFuY2UiLCJwcm90b3R5cGUiLCJleHRlbmQiLCJpbnN0YW5jZUNvbmZpZyIsIkNhbmNlbCIsIkNhbmNlbFRva2VuIiwiaXNDYW5jZWwiLCJhbGwiLCJwcm9taXNlcyIsInNwcmVhZCIsImRlZmF1bHQiLCJtZXNzYWdlIiwidG9TdHJpbmciLCJfX0NBTkNFTF9fIiwiZXhlY3V0b3IiLCJUeXBlRXJyb3IiLCJyZXNvbHZlUHJvbWlzZSIsInByb21pc2VFeGVjdXRvciIsInRva2VuIiwicmVhc29uIiwidGhyb3dJZlJlcXVlc3RlZCIsInNvdXJjZSIsImMiLCJ2YWx1ZSIsIkludGVyY2VwdG9yTWFuYWdlciIsImRpc3BhdGNoUmVxdWVzdCIsImludGVyY2VwdG9ycyIsImFyZ3VtZW50cyIsImNoYWluIiwidW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMiLCJpbnRlcmNlcHRvciIsInVuc2hpZnQiLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInB1c2hSZXNwb25zZUludGVyY2VwdG9ycyIsInB1c2giLCJsZW5ndGgiLCJzaGlmdCIsImdldFVyaSIsInJlcGxhY2UiLCJmb3JFYWNoTWV0aG9kTm9EYXRhIiwibWVyZ2UiLCJmb3JFYWNoTWV0aG9kV2l0aERhdGEiLCJoYW5kbGVycyIsInVzZSIsImVqZWN0IiwiaWQiLCJmbiIsImZvckVhY2hIYW5kbGVyIiwiaCIsImlzQWJzb2x1dGVVUkwiLCJjb21iaW5lVVJMcyIsInJlcXVlc3RlZFVSTCIsImVuaGFuY2VFcnJvciIsImNvZGUiLCJlcnJvciIsIkVycm9yIiwidHJhbnNmb3JtRGF0YSIsInRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQiLCJ0cmFuc2Zvcm1SZXF1ZXN0IiwiY29tbW9uIiwiY2xlYW5IZWFkZXJDb25maWciLCJhZGFwdGVyIiwib25BZGFwdGVyUmVzb2x1dGlvbiIsInRyYW5zZm9ybVJlc3BvbnNlIiwib25BZGFwdGVyUmVqZWN0aW9uIiwiaXNBeGlvc0Vycm9yIiwidG9KU09OIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibnVtYmVyIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwic3RhY2siLCJjb25maWcxIiwiY29uZmlnMiIsInZhbHVlRnJvbUNvbmZpZzJLZXlzIiwibWVyZ2VEZWVwUHJvcGVydGllc0tleXMiLCJkZWZhdWx0VG9Db25maWcyS2V5cyIsInZhbHVlRnJvbUNvbmZpZzIiLCJwcm9wIiwibWVyZ2VEZWVwUHJvcGVydGllcyIsImlzT2JqZWN0IiwiZGVlcE1lcmdlIiwiZGVmYXVsdFRvQ29uZmlnMiIsImF4aW9zS2V5cyIsImNvbmNhdCIsIm90aGVyS2V5cyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJmaWx0ZXJBeGlvc0tleXMiLCJvdGhlcktleXNEZWZhdWx0VG9Db25maWcyIiwidmFsaWRhdGVTdGF0dXMiLCJmbnMiLCJ0cmFuc2Zvcm0iLCJub3JtYWxpemVIZWFkZXJOYW1lIiwiREVGQVVMVF9DT05URU5UX1RZUEUiLCJzZXRDb250ZW50VHlwZUlmVW5zZXQiLCJnZXREZWZhdWx0QWRhcHRlciIsInByb2Nlc3MiLCJjYWxsIiwiaXNBcnJheUJ1ZmZlciIsImlzQnVmZmVyIiwiaXNTdHJlYW0iLCJpc0ZpbGUiLCJpc0Jsb2IiLCJpc0FycmF5QnVmZmVyVmlldyIsImJ1ZmZlciIsImlzVVJMU2VhcmNoUGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwibWF4Q29udGVudExlbmd0aCIsInRoaXNBcmciLCJ3cmFwIiwiYXJncyIsIkFycmF5IiwiaSIsImFwcGx5IiwiZW5jb2RlIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VyaWFsaXplZFBhcmFtcyIsInBhcnRzIiwic2VyaWFsaXplIiwiaXNBcnJheSIsInBhcnNlVmFsdWUiLCJ2IiwiaXNEYXRlIiwidG9JU09TdHJpbmciLCJqb2luIiwiaGFzaG1hcmtJbmRleCIsInNsaWNlIiwicmVsYXRpdmVVUkwiLCJzdGFuZGFyZEJyb3dzZXJFbnYiLCJ3cml0ZSIsImV4cGlyZXMiLCJwYXRoIiwiZG9tYWluIiwic2VjdXJlIiwiY29va2llIiwiaXNOdW1iZXIiLCJEYXRlIiwidG9HTVRTdHJpbmciLCJpc1N0cmluZyIsImRvY3VtZW50IiwibWF0Y2giLCJSZWdFeHAiLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZW1vdmUiLCJub3ciLCJub25TdGFuZGFyZEJyb3dzZXJFbnYiLCJ0ZXN0IiwibXNpZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInVybFBhcnNpbmdOb2RlIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdpblVSTCIsInJlc29sdmVVUkwiLCJocmVmIiwic2V0QXR0cmlidXRlIiwicHJvdG9jb2wiLCJob3N0Iiwic2VhcmNoIiwiaGFzaCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiY2hhckF0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXF1ZXN0VVJMIiwicGFyc2VkIiwibm9ybWFsaXplZE5hbWUiLCJwcm9jZXNzSGVhZGVyIiwiaWdub3JlRHVwbGljYXRlT2YiLCJzcGxpdCIsInBhcnNlciIsImxpbmUiLCJ0cmltIiwic3Vic3RyIiwiY2FsbGJhY2siLCJhcnIiLCJjb25zdHJ1Y3RvciIsIkZvcm1EYXRhIiwicmVzdWx0IiwiQXJyYXlCdWZmZXIiLCJpc1ZpZXciLCJpc0Z1bmN0aW9uIiwicGlwZSIsIlVSTFNlYXJjaFBhcmFtcyIsInN0ciIsInByb2R1Y3QiLCJvYmoiLCJsIiwiaGFzT3duUHJvcGVydHkiLCJhc3NpZ25WYWx1ZSIsImEiLCJiIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsInJ1blRpbWVvdXQiLCJmdW4iLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImRyYWluUXVldWUiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsIkl0ZW0iLCJhcnJheSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwib24iLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwiYmluZGluZyIsImN3ZCIsImNoZGlyIiwiZGlyIiwidW1hc2siXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7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LE9BQVIsR0FBa0IsVUFBVTNLLElBQVYsRUFBZ0I7QUFDOUIsUUFBTSxJQUFJWixLQUFKLENBQVUsa0NBQVYsQ0FBTjtBQUNILENBRkQ7O0FBSUE2QyxPQUFPLENBQUMySSxHQUFSLEdBQWMsWUFBWTtBQUFFLFNBQU8sR0FBUDtBQUFZLENBQXhDOztBQUNBM0ksT0FBTyxDQUFDNEksS0FBUixHQUFnQixVQUFVQyxHQUFWLEVBQWU7QUFDM0IsUUFBTSxJQUFJMUwsS0FBSixDQUFVLGdDQUFWLENBQU47QUFDSCxDQUZEOztBQUdBNkMsT0FBTyxDQUFDOEksS0FBUixHQUFnQixZQUFXO0FBQUUsU0FBTyxDQUFQO0FBQVcsQ0FBeEMsQyIsImZpbGUiOiJTaG9wd2FyZVJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJTaG9wd2FyZVJ1bnRpbWVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiU2hvcHdhcmVSdW50aW1lXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIHdlYnBhY2stbGl2ZXJlbG9hZC1wbHVnaW5cbiBcdChmdW5jdGlvbigpIHtcbiBcdCAgaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHsgcmV0dXJuIH07XG4gXHQgIHZhciBpZCA9IFwid2VicGFjay1saXZlcmVsb2FkLXBsdWdpbi1zY3JpcHQtZjg2MmMzOGRiODE5ZmI2OFwiO1xuIFx0ICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7IHJldHVybjsgfVxuIFx0ICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuIFx0ICBlbC5pZCA9IGlkO1xuIFx0ICBlbC5hc3luYyA9IHRydWU7XG4gXHQgIGVsLnNyYyA9IFwiLy9cIiArIGxvY2F0aW9uLmhvc3RuYW1lICsgXCI6MzU3MjkvbGl2ZXJlbG9hZC5qc1wiO1xuIFx0ICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoZWwpO1xuIFx0fSgpKTtcbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9Qcml2YXRlL0phdmFzY3JpcHQvQ29ubmVjdG9yLmpzXCIpO1xuIiwiZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUX0JBU0UgPSBgL3NhbGVzLWNoYW5uZWwtYXBpL3YzL2NoZWNrb3V0L2NhcnQvcHJvZHVjdC9gXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgKiBhcyBlbmRwb2ludHMgZnJvbSAnLi9BcGkvZW5kcG9pbnRzJztcblxuZXhwb3J0IGNsYXNzIFNob3B3YXJlQ29ubmVjdG9yIHtcbiAgY2xpZW50ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcih7IGJhc2VVcmksIGFwaUtleSB9KSB7XG4gICAgY29uc29sZS5sb2coYmFzZVVyaSwgYXBpS2V5KTtcbiAgICB0aGlzLmNsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgICBiYXNlVVJMOiBiYXNlVXJpLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnc3ctYWNjZXNzLWtleSc6IGFwaUtleSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBhZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3RJZCkge1xuICAgIGNvbnN0IHVybCA9IGVuZHBvaW50cy5BRERfVE9fQ0FSVF9CQVNFICsgcHJvZHVjdElkO1xuICAgIGNvbnNvbGUubG9nKHVybCk7XG4gICAgY29uc29sZS5sb2codGhpcy5jbGllbnQpO1xuICAgIHRoaXMuY2xpZW50LnBvc3QodXJsKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB9KTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgdmFyIGZ1bGxQYXRoID0gYnVpbGRGdWxsUGF0aChjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoZnVsbFBhdGgsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgdmFyIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSAndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnO1xuICAgICAgaWYgKGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRpbWVvdXRFcnJvck1lc3NhZ2UgPSBjb25maWcudGltZW91dEVycm9yTWVzc2FnZTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcih0aW1lb3V0RXJyb3JNZXNzYWdlLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuXG4gIC8vIFNldCBjb25maWcubWV0aG9kXG4gIGlmIChjb25maWcubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIGlmICh0aGlzLmRlZmF1bHRzLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSB0aGlzLmRlZmF1bHRzLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZy5tZXRob2QgPSAnZ2V0JztcbiAgfVxuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIGJhc2VVUkwgd2l0aCB0aGUgcmVxdWVzdGVkVVJMLFxuICogb25seSB3aGVuIHRoZSByZXF1ZXN0ZWRVUkwgaXMgbm90IGFscmVhZHkgYW4gYWJzb2x1dGUgVVJMLlxuICogSWYgdGhlIHJlcXVlc3RVUkwgaXMgYWJzb2x1dGUsIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgcmVxdWVzdGVkVVJMIHVudG91Y2hlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0ZWRVUkwgQWJzb2x1dGUgb3IgcmVsYXRpdmUgVVJMIHRvIGNvbWJpbmVcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBmdWxsIHBhdGhcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZEZ1bGxQYXRoKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCkge1xuICBpZiAoYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChyZXF1ZXN0ZWRVUkwpKSB7XG4gICAgcmV0dXJuIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlcXVlc3RlZFVSTCk7XG4gIH1cbiAgcmV0dXJuIHJlcXVlc3RlZFVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNcbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXTtcbiAgdmFyIG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzID0gWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3VybCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJyxcbiAgICAnbWF4Q29udGVudExlbmd0aCcsICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JyxcbiAgICAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsICdzb2NrZXRQYXRoJ1xuICBdO1xuXG4gIHV0aWxzLmZvckVhY2godmFsdWVGcm9tQ29uZmlnMktleXMsIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG1lcmdlRGVlcFByb3BlcnRpZXNLZXlzLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRlZmF1bHRUb0NvbmZpZzJLZXlzLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMilcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIGZpbHRlckF4aW9zS2V5cyhrZXkpIHtcbiAgICAgIHJldHVybiBheGlvc0tleXMuaW5kZXhPZihrZXkpID09PSAtMTtcbiAgICB9KTtcblxuICB1dGlscy5mb3JFYWNoKG90aGVyS2V5cywgZnVuY3Rpb24gb3RoZXJLZXlzRGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=