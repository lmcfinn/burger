var connection = require("../config/connection.js");

//Helper function for SQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for(var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

//Helper function for SQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if(Object.hasOwnProperty.call(ob, key)) {
			arr.push(key + "=" + ob[key]);
		}
	}

	return arr.toString();
}




var orm = {
	selectAll: function(tableInput, cb) {
		// console.log("table input: " + tableInput)
		var queryString = "SELECT * FROM" + tableInput + ";";

		connection.query(queryString, function(err, result) {
			if(err) {
				throw err
			}
			cb(result);
		});

	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = "INSERT INTO" + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString

	};
	updateOne: function(){

	};
};

module.exports = orm;