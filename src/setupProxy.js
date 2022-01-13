const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * 2021년 7월 14일 기준 Typescript template CRA는 http-proxy-middleware을 지원하지 않는다.  
 * => 그렇게 때문에 src/setupProxy.js 만 가능함!
 * */
module.exports = (app) => {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:4491',
      changeOrigin: true,
    }),
  );
};
