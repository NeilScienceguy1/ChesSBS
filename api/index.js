const { default: axios } = require("axios");
const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const getLeaderboard = require("./controllers/leaderboard");
const {
  lichess_login,
  handleLoginCallback,
} = require("./controllers/lichess.login");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({ secret: "ChesSBS2022", saveUninitialized: false, resave: false })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/dashboard/app", (req, res) => {
  res.render("module/app", { token: req.session.lichess_auth_token });
});

app.get("/lichess/login", (req, res) => {
  lichess_login(req, res);
});

app.get("/lichess/login/callback", (req, res) => {
  handleLoginCallback(req, res);
});

app.get("/logout", (req, res) => {
  if (!req.session.lichess_auth_token) {
    res.redirect("/");
  }
  req.session.destroy();
  res.redirect("/");
});

app.get("/get/leaderboard/:timeControl", (req, res) => {
  const { timeControl } = req.params;
  getLeaderboard(timeControl).then((result) => {
    res.json(result);
  });
});

app.get("/dashboard/leaderboard/:timeControl", (req, res) => {
  const {timeControl } = req.params;
  res.render("module/leaderboard", {
    timeControl,
    token: req.session.lichess_auth_token,
  });
});

app.listen("2022", () => {
  console.log("Server started on PORT 2022");
});
