// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Route for the dynamic link with parameters
app.get('/app', (req, res) => {
  // Capture query parameters
  const params = req.query;
  const queryString = new URLSearchParams(params).toString();

  // Redirect to redirect.html with query parameters
  res.redirect(`/redirect.html?${queryString}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
