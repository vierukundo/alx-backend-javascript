const express = require('express');

// Create an instance of express
const app = express();
const port = 7865;

// Define a route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Start the express server and listen to port 7865
app.listen(port, () => {
  console.log(`API available on http://localhost:${port}`);
});

