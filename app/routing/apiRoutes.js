//get data from other file
var friends = require("../data/friends.js");

//module to view friends in JSON format
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  var bestMatch = {
    name: "",
    photo: "",
    friendDifference: 1000
  };
  console.log(req.body);

  var userData = req.body;
  var userScores = userData.scores;

  console.log(userScores);

  var totalDifference = 0;

  //Use a nested for loop to go through friend possibilities and see who is the closest match
  for (var i = 0; 1 < friends.length; i++) {
    console.log(friends[i]);
    totalDifference = 0;

    for (var j = 0; j < friends[i].scores[j]; j++) {
      totalDiffence += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[i].name;
        bestMatch.photo = friends[i].photos;
        bestMatch.friendDifference = totalDifference;
      }
    }
  }

  //Saves user data into the database (Done after the check so the user doesn't match with themselves)
  friends.push(userData);

  //return the best match for the user in JSON format
  res.json(bestMatch);
};
