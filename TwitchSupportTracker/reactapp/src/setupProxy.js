const { createProxyMiddleware } = require('http-proxy-middleware');

const context = [
    "/api/weatherforecast",
    "/streamer",
    "/transaction",
];

module.exports = function (app) {
    const appProxy = createProxyMiddleware(context, {
        target: 'https://localhost:44341',
        secure: false
    });

    app.use(appProxy);
};
