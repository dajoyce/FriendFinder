//DEPENDENCIES
var path = require("path");

//ROUTING
module.exports = function(app) {
  //takes user to survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  //takes user to home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
