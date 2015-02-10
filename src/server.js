var http = require('http');
var express = require('express');
var template = require('micro-template').template;
template.get = function (id) { return require('fs').readFileSync(__dirname+'/views/' + id + '.tmpl', 'utf-8') };

var React = require('react');
require('node-jsx').install({harmony: true});
var Main = React.createFactory(require('./app/app.jsx'));

var port = process.env.PORT || 3000;

var server = express();

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res, next){

  var rendered = React.renderToString(Main());

  res.send(template('default', {
        renderedContent : rendered
    }));
});

http.createServer(server).listen(port, function(){
  console.log('Express server listening on port ' + port);
});
