var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    fs = require('fs'),
    os = require('os'),
    util = require('util'),
    compression = require('compression');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    osHostname = os.hostname(),
    rootPath = __dirname;


module.exports = {
    env: env,
    envFirst: env.toLowerCase().split('')[0],
    port: (process.env.PORT || 8080),
    rootPath: rootPath,
    publicPath: path.normalize(rootPath + '/../public'),
    infoDefaults: {
        port: (process.env.PORT || 8080),
        title: 'Candlewood Lake Members Site'
    },
    initializeNewApp: function(app){
        var self = this;

        app.use(compression());
        app.use(bodyParser.json()); // for parsing application/json
        app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

        app.set('view engine', 'ejs');
        app.set('views', self.rootPath + '/../views/');
        app.use(express.static(self.rootPath + '/../public'));
    }
};