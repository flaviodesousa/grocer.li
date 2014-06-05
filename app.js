var express = require('express');
var load = require('express-load');

var app = express();

load('config')
  .then('models')
  .into(app);

app.get('/?', function(req, res) {
	console.log('Got a request!')
	res.send("Hi now on node.js!");
});

app.listen(4444);
console.log('Listening...');