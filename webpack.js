'use strict';

module.exports = function (env, args) {
  return {
    entry: {
      header: null,
      footer: null,
      main: null,
      print: '',
      ['shopware-integration']: './Resources/Private/Javascript/index.js'
    },
  };
};