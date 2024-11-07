// index.js

const express = require('express');
const app = express();
const port = 3001;

// Middleware to introduce delays
const delayResponse = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Route to handle /api/blog/:id
app.get('/api/blog/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    title: `Blog Post ID ${id}`,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
});

// Fast API - 1 second delay
app.get('/api/fast', async (req, res) => {
  await delayResponse(1000);  // 1 second delay
  res.json(true);
});

// Medium API - 3 seconds delay
app.get('/api/medium', async (req, res) => {
  await delayResponse(3000);  // 3 seconds delay
  res.json(true);
});

// Slow API - 5 seconds delay
app.get('/api/slow', async (req, res) => {
  await delayResponse(5000);  // 5 seconds delay
  res.json(true);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
