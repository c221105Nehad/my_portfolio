import express from 'express';

const app = express();

// Hide Express framework identification.
app.disable('x-powered-by');

// Parse incoming JSON request bodies.
app.use(express.json({ limit: '1mb' }));

// Health-check endpoint.
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'portfolio-api',
    timestamp: new Date().toISOString()
  });
});

// Handle unknown routes.
app.use((_req, res) => {
  res.status(404).json({
    error: {
      message: 'Route not found'
    }
  });
});

export default app;