const pool = require("./pool");

async function getAllUserNames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsername(username) {
  const { rows } = await pool.query(
    "SELECT id, username FROM usernames WHERE username LIKE $1",
    [username]
  );
  return rows;
}

async function deleteUser(userID) {
  await pool.query("DELETE FROM usernames WHERE id = $1", [userID]);
}

module.exports = {
  getAllUserNames,
  insertUsername,
  searchUsername,
  deleteUser,
};
