const path = require("path");
const query = require("../db/queries");

function deleteUser(id) {
  console.log("id: ", id);
}

exports.home = async (req, res) => {
  try {
    const usernames = await query.getAllUserNames();
    res.render("home", { usernames: usernames, deleteUser: deleteUser });
  } catch (err) {
    res.send(err);
  }
};

exports.new_username = (req, res) => {
  res.render("usernameForm");
};

exports.submit_new_username = async (req, res) => {
  try {
    await query.insertUsername(req.body.username);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

exports.search_username = async (req, res) => {
  try {
    const searchResult = await query.searchUsername(req.query.search);
    res.send(`ID: ${searchResult[0].id} Username: ${searchResult[0].username}`);
  } catch (err) {
    console.log("search_username error", err);
    res.send("search failed");
  }
};

exports.delete_user = async (req, res) => {
  try {
    await query.deleteUser(req.params.id);
    res.redirect("/");
  } catch {}
};
