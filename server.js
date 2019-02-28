//Dependencies
var express = require("express");

//Create "express" server
var app = express();

//Set initial port for later use on Heroku
var PORT = process.env.PORT || 8081;

//Set up express App to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
