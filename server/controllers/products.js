var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = (function(){
	return {
		index: function(req, res){
			Product.find({}, function(err, results){
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
			var newPro = new Product({name: req.body.name, quantity: req.body.quantity, image: req.body.image, desc: req.body.desc});
			newPro.save(function(err, results){
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