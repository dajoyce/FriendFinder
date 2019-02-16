//get data from other file
var friends = require("../data/friends.js");

//module to view friends in JSON format
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
};
