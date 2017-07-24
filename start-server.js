const express  = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

const port = 8888;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.options('*', cors()); 

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept-Encoding: gzip, deflate");
    next();
});

require('./api/routes')(app, {});

app.listen(port, () => {
   console.log(`Server Started on port ${port}`);
});