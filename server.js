// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Route for the dynamic link
app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'redirect.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
