const path = require("path");
const query = require("../db/queries");

exports.home = async (req, res) => {
  try {
    const usernames = await query.getAllUserNames();
    const htmlList = `
    <html>
      <head>
        <title>Usernames</title>
      </head>
      <body>
        <h1>List of Usernames</h1>
        <ul style="list-style: none">
          ${usernames
            .map((username) => `<li>${username.username}</li>`)
            .join("")}
        </ul>

        <button><a href='/new'>Add user </a></button>
      </body>
    </html>
  `;
    res.send(htmlList);
  } catch (err) {
    res.send(err);
  }
};

exports.new_username = (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "usernameForm.html"));
};
exports.submit_new_username = async (req, res) => {
  try {
    await query.insertUsername(req.body.username);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};
