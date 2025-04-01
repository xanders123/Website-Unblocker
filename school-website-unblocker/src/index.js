const express = require('express');
const cors = require('cors');
const path = require('path');
const { createProxy } = require('./proxy');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Dynamic proxy route handler - using a simpler approach
app.use('/proxy', (req, res, next) => {
  // Extract the target URL from the path (everything after /proxy/)
  const targetPath = req.url;
  if (!targetPath || targetPath === '/') {
    return res.status(400).send('Missing target URL');
  }
  
  // Remove the leading slash if present
  const targetUrl = targetPath.startsWith('/') ? targetPath.substring(1) : targetPath;
  
  // Create and use a proxy middleware for this specific request
  const proxyMiddleware = createProxy(targetUrl);
  proxyMiddleware(req, res, next);
});

// API endpoint to proxy a URL
app.post('/api/proxy', (req, res) => {
  const { url } = req.body;
  
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }
  
  // Return the proxy URL that the client should use
  const proxyUrl = `/proxy/${url}`;
  res.json({ proxyUrl });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Proxy server running on http://0.0.0.0:${PORT}`);
});
