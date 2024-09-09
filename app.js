const express = require("express");
const app = express();
const route = require("./routes/route");
const path = require("node:path");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(route);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
