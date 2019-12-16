module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': false,
    'codeFrame': false
  },
  'extends': 'airbnb-base',
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'rules': {
    'class-methods-use-this': 0,
    'linebreak-style': 0
  }
};