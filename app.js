var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.end('hello world\n');
});

module.exports = app;
