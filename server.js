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
}))
require('./app/config/passport')(passport);
require('./app/routes/user.server.routes')(app, passport);
require('./app/routes/product.server.routes')(app);

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'))
})
app.use(express.static('public'));
app.listen(3000,function(err){
console.log("server started at",port);
});