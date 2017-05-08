var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("methodOverride");

var port = 3000;
var app = express();

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var exprssHandlebars = require("express-handlebars");

app.engine("handlebars", exprssHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port, function() {
	console.log("listening on port: " + port)
});