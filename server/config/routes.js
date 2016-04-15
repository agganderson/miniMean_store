var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products = require('./../controllers/products.js');

module.exports = function(app){
	app.get('/customers', function(req, res){
		// console.log('in get cus route');
		customers.index(req, res);
	});

	app.post('/customers', function(req, res){
		// console.log('in post cus route');
		customers.create(req,res);
	});

	app.get('/products', function(req, res){
		// console.log('in get pro route');
		products.index(req, res);
	});

	app.post('/products', function(req, res){
		// console.log('in post pro route');
		products.create(req, res);
	});

	app.get('/orders', function(req, res){
		console.log('in get order route');
		orders.index(req, res);
	});

	app.post('/orders', function(req, res){
		console.log('in post order route');
		orders.create(req, res);
	});
}