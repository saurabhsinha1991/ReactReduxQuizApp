const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const webpack = require('webpack');
const webpackMiddleware = require( 'webpack-dev-middleware' );
const webpackHotMiddleware = require( 'webpack-hot-middleware' );
const webpackConfig = require( './webpack.config.js' );

const router = express.Router();

const compiler = webpack(webpackConfig);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dbData = require('./db/questions.json');
const dbAnswers = require('./db/answers.json');

//FOR STATIC Files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.get('/getQuestion', (req, res, next) => {
    res.send(dbData);
});

app.get('/getAnswer', (req, res, next) => {
    res.send(dbAnswers);
});

app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.listen(3000, () => {
    console.log('App running in port: 3000');
})
