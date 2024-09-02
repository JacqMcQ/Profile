const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

// Set up Handlebars engine
const hbs = exphbs.create({
  extname: ".handlebars",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Serve static files (like CSS, client-side JS)
app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});

// My Work Route
app.get("/my-work", (req, res) => {
  res.render("my-work", { title: "My Work" });
});

// Up and Coming Route
app.get("/up-and-coming", (req, res) => {
  res.render("up-and-coming", { title: "Up and Coming" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
