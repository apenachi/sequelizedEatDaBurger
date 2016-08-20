var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var chalk = require('chalk');

var models = require('../models');
var sequelizeConnection = models.sequelize
sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')
.then(function(){
	return sequelizeConnection.sync({force:false})
})

var burgers_controllers = function(app) {
	app.get('/', function(req, res) {
		models.Burger.findAll({})
			.then(function(results){
					console.log(chalk.black.bgWhite.bold("GET - findAll"));
					return res.render('index', {rows : results});
					
			})
			.catch(function(err){
				throw err;
			})
	});
	app.post('/burger', function(req, res) {
		models.Burger.create(
			{
				burger_name: req.body.burger,
				devoured: 0
			}
		)
		.then(function(burger){
			console.log(chalk.black.bgWhite.bold("POST - create"));
			res.redirect('/');
		})
		.catch(function(err){
			throw err;
		})
	});

	app.put('/burger', function(req, res) {
		models.Burger.update(
			{
				devoured: 1,
			},
			{
			where: {id: req.body.id}
			})
			.then(function(burger) {
				console.log(chalk.black.bgWhite.bold("PUT - update"));
				res.redirect('/')
			})
	});
	app.delete('/burger', function(req, res) {
		models.Burger.destroy({
			where: { id: req.body.id}
		}).then(function(burger){
			res.redirect('/')
		})
	});
	// app.get('/', function(req, res) {
	// 	burger.get('burgers', function(err, results){
	// 		if(err) {throw err;}
	// 		console.log('burger-get');
	// 		res.render('index', {rows : results});
	// 	});
	// });
	// app.post('/burger', function(req, res) {
	// 	burger.post(req.body.burger, function(err, results) {
	// 		if(err) {throw err};
	// 		res.redirect('/');
	// 	});
	// });
	// app.put('/burger', function(req, res) {
	// 	burger.put(req.body.id, function(err, results) {
	// 		if(err) {throw err};
	// 		res.redirect('/');
	// 	});
	// });
	// app.delete('/burger', function(req, res) {
	// 	burger.delete(req.body.id, function(err, results) {
	// 		if(err) {throw err};
	// 		res.redirect('/');
	// 	});
	// });
}


module.exports = burgers_controllers;