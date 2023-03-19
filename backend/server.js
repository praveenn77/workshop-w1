const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const dataFile = require('./data.json');
const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const port = 3500

app.get('/', (req, res) => {
  res.send('Hello From server')
})

app.post('/add', async (req, res) => {
    const data = req.body;
    dataFile.push(data);
    fs.writeFileSync('data.json', JSON.stringify(dataFile));
    res.send('Data added successfully');
})
  
app.get('/list', (req, res) => {
    res.send(dataFile);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})