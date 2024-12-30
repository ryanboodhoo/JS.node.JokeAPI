const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the current directory (where `server.js` is located)
app.use(express.static(__dirname));

// Serve `index.html` for the root route `/`
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

