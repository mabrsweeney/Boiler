const express = require('express');

const app = express();

const port = 3000;

app.use(express.static('client/public'));

app.get('/immediate', (req, res) => {
  console.log('got it!')
  res.send('immediate!');
});

app.get('/wait', (req, res) => {
  console.log('got it!')
  setTimeout(function(){
    res.send('wait!');
  }, 1000);
});

app.listen(port, () => {
  console.log('Listening on localhost:', port);
});