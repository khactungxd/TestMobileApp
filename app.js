// ---------------- Dependencies --------------
var express = require('express');
var http = require('http');
var path = require('path');
var app = express();

// -------------- environments --------------
//app.use(express.cookieParser('very secret'));
//app.use(express.session());
app.set('port', process.env.PORT || 3200);
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.post('/touchmove', function( req, res ){
  console.log("/touchmove",req.body);
  res.send({tung:"tung"});
});
app.post('/touchimage', function( req, res ){
  console.log("/touchimage",req.body);
  res.send({tung:"tung"});
});
//----------------- start server -------------------------
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});