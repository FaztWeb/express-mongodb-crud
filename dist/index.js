"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

_app["default"].listen(_app["default"].get("port"));

console.log("server on port ".concat(_app["default"].get("port")));