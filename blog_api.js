const express = require('express');
const app = express();
const port = 3001;

// Route to handle /api/blog/:id
app.get('/api/blog/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    title: `Blog Post ID ${id}`,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
