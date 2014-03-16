var express = require('express');
var app = express()

app.get('/?', function(req, res) {
	console.log('Got a request!')
	res.send("Hi now on node.js!");
});

app.listen(4444);
console.log('Listening...');