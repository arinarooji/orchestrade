const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-546699.oktapreview.com',
  token: '00qhPzSo2pngPigmcyZ7PMjr1xoXtxNJUSvVfwXrhH'
});

module.exports = client;