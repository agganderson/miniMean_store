var mongoose = require('mongoose');
var Order = mongoose.model('Order');
module.exports = (function(){
	return {
		index: function(req, res){
			Order.find({}, function(err, results){
				if(err){
					console.log('Did not get your products', results);
				}
				else{
					console.log('YYAAAASSSSSSSS');
					res.json(results);
				}
			});
		},
		create: function(req, res){
			var newOrd = new Order({customer_name: req.body.customer_name, quantity: req.body.quantity, product: req.body.product});
			newOrd.save(function(err, results){
				if(err){
					console.log('Could not save that product', results);
				}
				else{
					console.log('SSAAAAAAAAFE');
					res.json(results);
				}
			});
		}
	}
})();