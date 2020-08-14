'use strict';

module.exports = function (env, args) {
  return {
    target: 'web',
    entry: {
      header: null,
      footer: null,
      main: null,
      print: '',
      ShopwareRuntime: './Resources/Private/Javascript/Connector.js',
      ['shopware-widgets']: './Resources/Private/Javascript/App.js'
    },
    externals: {
      'shopware-connector': {
        root: ['ShopwareRuntime', 'ShopwareConnector'],
        commonjs: ['ShopwareRuntime', 'ShopwareConnector'],
        commonjs2: ['ShopwareRuntime', 'ShopwareConnector'],
      },
    },

    output: {
      library: '[name]',
      libraryTarget: 'umd'
    }
  };
};
