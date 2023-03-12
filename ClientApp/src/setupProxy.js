const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:46249';

const context = [
    "/api/employees",
    "/api/teammembers",
    "/api/users",
    "/api/Signup",
    "/api/accountsettings"
];

const onError = (err, req, resp, target) => {
    console.error(`${err.message}`);
}

module.exports = function(app) {
  const appProxy = createProxyMiddleware(context, {
    target: 'https://localhost:7187',
    onError: onError,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};
