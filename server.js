var express = require('express');
var index = require('./routes/index.js');
var students = require('./routes/students.js');

var app = express();

//static files
app.use(express.static('public'));

//routers
app.use('/', index);
app.use('/students', students);

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Listening on port', port);
});
