const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * Creates a proxy middleware for the specified target URL
 * @param {string} targetUrl - The URL to proxy to
 * @returns {Function} The proxy middleware
 */
function createProxy(targetUrl) {
  // Remove protocol if present to avoid issues
  let target = targetUrl;
  if (!target.startsWith('http://') && !target.startsWith('https://')) {
    target = 'https://' + target;
  }

  return createProxyMiddleware({
    target,
    changeOrigin: true,
    secure: false, // Don't verify SSL certificates
    followRedirects: true,
    pathRewrite: {
      '^/proxy/': '/' // Remove the /proxy/ path prefix when forwarding
    },
    onProxyRes: function(proxyRes, req, res) {
      // Add CORS headers to allow the proxy to be used from any origin
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
      proxyRes.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';
      
      // Remove headers that might reveal it's a proxy
      delete proxyRes.headers['x-frame-options'];
      delete proxyRes.headers['content-security-policy'];
    },
    onError: function(err, req, res) {
      res.writeHead(500, {
        'Content-Type': 'text/plain'
      });
      res.end(`Error connecting to the target website: ${err.message}`);
    }
  });
}

module.exports = { createProxy };
