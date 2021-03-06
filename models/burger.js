
var orm = require("../config/orm.js");

//Create callback for each of the orm method
var burgers = {

	selectAll: function(cb) {
		orm.selectAll(function(res) {
			// console.log("model orm selectAll: ", res)
			cb(res);
		})
	},

	selectOne: function(burger_name, cb) {
		orm.insertOne(burger_name, function(res) {
			// console.log("model orm selectOne: ", res)
			cb(res);
		});
	},

	updateOne: function(burgerId, cb) {
		orm.updateOne(burgerId, function(res) {
			// console.log("model orm updateOne: ", res)
			cb(res);
		});
	}
};

//Export the module
module.exports = burgers;

