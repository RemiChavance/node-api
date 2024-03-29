const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8100;

const authorised = '*'; // http://localhost:4200';
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', authorised);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Identification');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next(); 
});


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/:km', (req, res) => {
    const km = parseFloat(req.params.km);
    const price = km * 0.15;
    res.send({ price });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});