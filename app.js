// ---------------- Dependencies --------------
var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// -------------- environments --------------
app.use(express.cookieParser('very secret'));
app.use(express.session());
app.set('port', process.env.PORT || 3200);
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


//----------------- start server -------------------------
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});