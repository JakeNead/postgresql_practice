const express = require("express");
const app = express();
const route = require("./routes/route");

app.use(express.urlencoded({ extended: true }));

app.use(route);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
