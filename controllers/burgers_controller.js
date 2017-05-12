var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var burgerObject = {
			burgers: data
		};
		res.render("index", burgerObject);

	});
});

router.post("/add", function(req, res) {
	console.log("router add: ", req.body)
	burger.selectOne(req.body.burger_name, function(data) {
		console.log("router add", data)
		res.redirect("/")
	});
});

router.post("/eat/:id", function(req, res) {
	console.log("router eat req.params: ", req.params.id)

	burger.updateOne(req.params.id, function(data) {
		// console.log("ssss", data);
		res.redirect("/")
	})
})
 






module.exports = router;
