var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var burger = require('../models/burger');

var burgers_controllers = function(app) {

		app.get('/', function(req, res) {
			burger.get('burgers', function(err, results){
				if(err) {throw err;}
				console.log('burger-get');
				res.render('index', {rows : results});
			});
		});
		app.post('/burger', function(req, res) {
			burger.post(req.body.burger, function(err, results) {
				if(err) {throw err};
				res.redirect('/');
			});
		});
		app.put('/burger', function(req, res) {
			burger.put(req.body.id, function(err, results) {
				if(err) {throw err};
				res.redirect('/');
			});
		});
		app.delete('/burger', function(req, res) {
			burger.delete(req.body.id, function(err, results) {
				if(err) {throw err};
				res.redirect('/');
			});
		});		
	// index : function(app) {
	// 	burger.get('burgers', function(err, results){
	// 		if(err) {throw err;}
	// 		console.log('burger-get');
	// 		res.render('index', {rows : results});
	// 	});			
	// },
	// post : function(req, res) {
	// 	burger.post(req.body.burger, function(err, results) {
	// 		if(err) {throw err};
	// 		res.redirect('/');
	// 	});
	// },
	// put : function(req, res) {
	// 	console.log('put', req.body.id);
	// 	burger.put(req.body.id, function(err, results) {
	// 		if(err) {throw err};
	// 		res.redirect('/');
	// 	});
	// }
}


module.exports = burgers_controllers;