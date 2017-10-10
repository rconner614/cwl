process.on('uncaughtException', function (err) {
    console.log('Caught exception:', err);
});

var config = require('./config/config'),
    http = require('http'),
    util = require('util'),
    path = require('path'),
    crypto = require('crypto');

var app = require('express')();
var server = require('http').Server(app);

config.initializeNewApp(app);

var configDefaults = util._extend({}, config.infoDefaults);

app.get('*', function (req, res) {
    var info = util._extend({}, config.infoDefaults);

    res.sendFile(path.resolve(__dirname, 'app/public/index.html'));
});


server.listen(configDefaults.port, function () {
    console.log('server listening on port', configDefaults.port);
});