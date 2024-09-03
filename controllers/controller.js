const path = require("path");

exports.home = (req, res) => {
  res.send("usernames will be logged here");
};

exports.new_username = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "usernameForm.html"));
};
exports.submit_new_username = (req, res) => {
  console.log("username to be saved", req.body.username);
};
