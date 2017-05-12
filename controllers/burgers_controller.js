var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//Create routes

//Create home root, using GET method
router.get("/", function(req, res) {
	//Get all data from table
	burger.selectAll(function(data) {
		var burgerObject = {
			burgers: data
		};
		//Render index.handlebars
		res.render("index", burgerObject);
	});
});

//Creat route for adding a new burger
router.post("/add", function(req, res) {
	// console.log("router add: ", req.body)
	//Add data to the table
	burger.selectOne(req.body.burger_name, function(data) {
		// console.log("router add", data)
		//Redirect back to root
		res.redirect("/")
	});
});

//Create route for updating data status
router.post("/eat/:id", function(req, res) {
	// console.log("router eat req.params: ", req.params.id)
	//Update data in the table
	burger.updateOne(req.params.id, function(data) {
		// console.log("ssss", data);
		res.redirect("/")
	})
})
 
//Export the module
module.exports = router;
