const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from server side!' });
});

app.post('/', (req, res) => {
  res.status(200).json({ message: 'Hello from post req' });
});

app.listen(port, (req, res) => {
  console.log(`App running on port ${port}...`);
});
