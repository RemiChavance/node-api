const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const authorised = '*'; // http://localhost:4200';
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', authorised);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization, Identification');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next(); 
});


app.use(bodyParser.json());

app.post('/', (req, res) => {
    const km = parseFloat(req.body.km);
    const price = km * 0.15;
    res.send({ price });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})