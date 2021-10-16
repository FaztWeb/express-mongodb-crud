"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _index = _interopRequireDefault(require("./routes/index.js"));

var app = (0, _express["default"])(); // settings

app.set("port", process.env.PORT || 3000);
app.set("views", _path["default"].join(__dirname, "views"));
app.engine(".hbs", (0, _expressHandlebars["default"])({
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  defaulLayout: "main",
  extname: ".hbs"
}));
app.set("view engine", ".hbs"); // middlewares

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
})); // routes

app.use("/", _index["default"]);
app.use(function (req, res, next) {
  res.status(404).render("404");
});
var _default = app;
exports["default"] = _default;