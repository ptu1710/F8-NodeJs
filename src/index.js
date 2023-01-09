const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

const route = require("./routes");

app.use(express.static("./src/public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
// app.use(morgan('short'))

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

// Routes Init
route(app);

// Listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
