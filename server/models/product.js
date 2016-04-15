var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String, 
	quantity: Number,
	image: String,
	desc: String
});

mongoose.model('Product', ProductSchema);