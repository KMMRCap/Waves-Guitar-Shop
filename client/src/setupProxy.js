const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://waves-the-guitar-shop.herokuapp.com',
      changeOrigin: true,
    })
  );
};