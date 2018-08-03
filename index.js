const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('client/public'));

app.listen(port, () => {
  console.log('Listening on localhost:', port);
});