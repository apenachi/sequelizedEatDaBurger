var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var chalk = require('chalk');
var path = require('path');

// var connection = require('./config/connection');
// var orm = require('./config/orm');
// var burger = require('./models/burger');
// var burgersController = require('./controllers/burgers_controller');
var controller = require('./controllers/burgers_controller');
var app = express();

app.set('port', process.env.PORT || 8080);
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

controller(app);

// app.get('/', function(req, res) {
// 	burgersController.index(req, res);
// });

// app.post('/burger', function(req, res) {
// 	burgersController.post(req, res);
// });

// app.put('/burger', function(req, res) {
// 	burgersController.put(req, res);
// })


app.listen(app.get('port'), function() {
	console.log(chalk.black.bgWhite.bold("Server listening on PORT: " + app.get('port')));
});