var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.end('hello\n');
});

module.exports = app;