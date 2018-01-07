const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbData = require('./db/questions.json');

//FOR STATIC Files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.get('/getQuestion', (req, res, next) => {
    res.send(dbData);
});

app.listen(3000, () => {
    console.log('App running in port: 3000');
})
