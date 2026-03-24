const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'omio-backend',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api/site-map', (_req, res) => {
  res.json({
    sections: ['Services', 'Case Studies', 'Omio', 'Career', 'About us'],
    message: 'Frontend routes are scaffolded and ready for final page descriptions.',
  });
});

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Omio backend listening on port ${port}`);
});
