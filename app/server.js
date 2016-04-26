var bodyParser = require('body-parser');
var express = require('express');
var jadeAmd = require('jade-amd');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Connect server-side template engine
app.set('views', './app/views');
app.set('view engine', 'jade');

app.use(bodyParser.json());

app.use(express.static('./public'));

// Handle the public requests
app.get('/', function (req, res) {
  res.render('home');
});

// Define a bug report api.
// Simulate a persistence layer with a primary
// key and array in memory.
var id = 1;
var bugs = [];
app.route('/api/bug')
  .get(function (req, res) {
    console.log('[GET]\t/api/bug');
    res.send(bugs);
  })
  .post(function (req, res) {
    console.log('[POST]\t/api/bug');
    req.body.id = id;
    id++;
    bugs.push(req.body);
    res.send(req.body);
    io.emit('change')
  });
app.route('/api/bug/:id')
  .put(function (req, res) {
    console.log('[PUT]\t/api/bug/' + req.params.id);
    var id = parseInt(req.params.id, 10);
    bugs = bugs.filter(function (element) {
      return element.id !== id;
    });
    bugs.push(req.body);
    res.send(req.body);
    io.emit('change')
  })
  .delete(function (req, res) {
    console.log('[DELETE]\t/api/bug/' + req.params.id);
    var id = parseInt(req.params.id, 10);
    bugs = bugs.filter(function (element) {
      return element.id !== id;
    });
    res.send(true);
    io.emit('change')
  });

// Start server
http.listen(3000, function () {
  console.log('Server started on port 3000');
});
