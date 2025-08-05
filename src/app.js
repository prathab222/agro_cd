const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from Node.js App!</h1>
    <p>Version: ${process.env.APP_VERSION || '1.0.0'}</p>
    <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});