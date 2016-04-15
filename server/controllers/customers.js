var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function(){
	return {
		index: function(req, res){
			Customer.find({}, function(err, results){
				if(err){
					console.log('Cannot find them', results);
				}
				else{
					console.log("Found 'em");
					res.json(results);
				}
			});
		},
		create: function(req, res){
			var newCustomer = new Customer({name: req.body.name});
			newCustomer.save(function(err, results){
				if(err){
					console.log("Couldn't save them!!!", results);
				}
				else{
					console.log('Saved them!');
					res.json(results);
				}
			});
		}
	}
})();