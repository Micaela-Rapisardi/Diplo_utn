var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { send } = require('process');
var app = express();


//paso 1, genero la variable que llama al .js
var nosotrosRouter = require( './routes/nosotros');
var pruebaRouter = require('./routes/prueba');
var destadacosRouter = require('./routes/destacados');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//paso 2, 

app.use ('/nosotros', nosotrosRouter);
app.use ('/prueba', pruebaRouter);
app.use('/destacados', destadacosRouter)


/*Tarea de rutas*/

app.get('/ruta1', function (req, res) {
  res.send('hola soy la pagina de Ruta 1')
});

app.get('/ruta2', function (req, res) {
  res.send('hola soy la pagina de Ruta 2')
});

app.get('/ruta3', function (req, res) {
  res.send('hola soy la pagina de Ruta 3')
});

/*Fin tarea rutas*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
