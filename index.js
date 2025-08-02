const express = require('express');
const app = express();
const port = 3000;
app.get('/', (_req, res) => res.send('Day1: Node.js on Termux'));
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
