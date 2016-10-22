var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port =Number(process.env.port||3000 );
var path = require( 'path' );
app.use(bodyParser.json());
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
app.use(require('express-session')({
  secret : 'keyboard-cat',
  resave : false,
  saveUninitialized : false
}));
app.use(express.static('public'));
require('./app/config/passport')(passport);
require('./app/routes/user.server.routes')(app, passport);
require('./app/routes/product.server.routes')(app);


app.use(express.static('public'));
// app.listen(3000,function(err){
// console.log("server startedss at",port);
// });

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});