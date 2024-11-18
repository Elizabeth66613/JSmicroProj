const express = require('express');
const app = express();
const path = require('path');
const items = require('./data/items.json'); // Load the product data

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to serve product data
app.get('/api/accessories', (req, res) => {
    res.json(items); // Send items.json as JSON response
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
