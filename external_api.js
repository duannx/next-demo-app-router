// index.js

const express = require("express");
const { db } = require("./db.js");
const app = express();
const port = 3001;

// Middleware to introduce delays
const delayResponse = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Route to handle /api/blog/:id
app.get("/api/blog/:id", async (req, res) => {
  const { id } = req.params;
  console.log(`responding for /api/blog/${id}`);
  await delayResponse(1000);
  res.json({
    title: `Blog Post ID ${id}`,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });
});

// Fast API - 1 second delay
app.get("/api/fast", async (req, res) => {
  console.log("responding for /api/fast");
  await delayResponse(1000); // 1 second delay
  res.json(true);
});

// Medium API - 3 seconds delay
app.get("/api/medium", async (req, res) => {
  console.log("responding for /api/medium");
  await delayResponse(3000); // 3 seconds delay
  res.json(true);
});

// Slow API - 5 seconds delay
app.get("/api/slow", async (req, res) => {
  console.log("responding for /api/slow");
  await delayResponse(5000); // 5 seconds delay
  res.json(true);
});

app.get("/db/get-comment", async (req, res) => {
  const id = req.query.id;
  const comments = await db.getComments(id);
  res.json({ comments });
});
app.get("/db/add-comment", async (req, res) => {
  const id = req.query.id;
  const content = req.query.content;
  const comments = await db.insertComment(id, content);
  res.json({ comments });
});

app.get("/api/total-view", async (req, res) => {
  console.log("responding for /api/total-view");
  await delayResponse(1000);
  res.json({ view: 1, lastUpdate: Date.now() });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
