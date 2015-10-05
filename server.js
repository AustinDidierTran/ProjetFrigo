var express = require('express');
var app = express();
var path = require('path'),
    rootPath = path.normalize(__dirname);

app.use(express.static(rootPath));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT);