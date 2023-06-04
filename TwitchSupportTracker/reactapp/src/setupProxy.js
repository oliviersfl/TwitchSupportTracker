const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/api/weatherforecast",
    "/api/streamer",
    "/api/transaction",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:44341',
        secure: false
    });

    app.use(appProxy);
};
