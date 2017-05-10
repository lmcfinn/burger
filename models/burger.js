var orm = require("../config/orm.js");


var burgers = {

	selectAll: function(cb) {
		orm.selectAll(function(res) {
			console.log("model orm selectAll: ", res)
			cb(res);
			
		})

	},

	selectOne: function(burger_name, cb) {
		orm.insertOne(burger_name, function(res) {
			console.log("model orm selectOne: ", res)
			cb(res);
		});
	},

	updateOne: function(burger_id, cb) {
		orm.updateOne(burger_id, function(res) {
			console.log("model orm updateOne: ", res)
			cb(res);
		});
	}
};

module.exports = burgers;

