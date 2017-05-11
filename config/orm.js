var connection = require("../config/connection.js");

var orm = {

	selectAll: function(cb) {

		connection.query("SELECT * FROM burgers", function (err, result) {
	    	if (err) {
	    		throw err;
	    	}
      		cb(result);
    	});
	},

	insertOne: function(burger_name, cb) {


    var date;
    date = new Date();
    date = date.getUTCFullYear() + '-' +
        ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
        ('00' + date.getUTCDate()).slice(-2) + ' ' + 
        ('00' + date.getUTCHours()).slice(-2) + ':' + 
        ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
        ('00' + date.getUTCSeconds()).slice(-2);
    console.log("create date", date);

		connection.query("INSERT INTO burgers SET ?", {
          burger_name: burger_name,
      		devoured: false,
      		date: date
    	}, function (err, result) {
      		if (err) {
      			throw err;
      		}
      		cb(result);
    	});
	},

	updateOne: function(burgerId, cb){

		 connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id: burgerId}], function (err, result) {
        if (err) throw err;
        cb(result);
      });
	}
};

module.exports = orm;













