
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

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


app.set('port', (process.env.PORT || port));

//Start Server
app.listen(app.get('port'), function() {
 console.log("Node app is running on port", app.get('port'));
});