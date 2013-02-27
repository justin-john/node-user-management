var express = require('express'),
    user = require('./routes/users'),
    expressValidator = require('express-validator');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(expressValidator);
  app.use(app.router);
  app.use(require('stylus').middleware(__dirname + '/public'));
  app.use(express.static(__dirname + '/public'));
});

app.get('/', user.index);
app.get('/home', user.home);
app.get('/login', user.login);
app.post('/login', user.loginSubmit);
app.get('/logout', user.logout);
app.get('/users', user.findAll);
app.get('/register', user.registerView);
app.post('/register', user.registerUser);
app.get('/users/:id', user.updateView);
app.post('/users/:id', user.updateUser);
app.get('/delete/:id', user.deleteUser);
/*
* Remove all documents from collection
* */
app.get('/remove', user.removeAllUser);
/*
 * Drop collection
 * */
app.get('/drop', user.dropCol);

app.listen(3000);
console.log('Server is listening on port 3000...');