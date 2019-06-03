const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(require('./views/index'));
});

app.get('/about', (req, res) => {
  res.send(require('./views/about'));
});

app.get('/services', (req, res) => {
  res.send(require('./views/services'));
});

app.get('/contact', (req, res) => {
  res.send(require('./views/contact'));
});

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
