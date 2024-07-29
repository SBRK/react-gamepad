'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useVibration = exports.layouts = exports.Gamepad = undefined;

var _Gamepad = require('./Gamepad');

var _Gamepad2 = _interopRequireDefault(_Gamepad);

var _layouts = require('./layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _useVibration = require('./useVibration');

var _useVibration2 = _interopRequireDefault(_useVibration);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Gamepad2.default.layouts = _layouts2.default;

exports.Gamepad = _Gamepad2.default;
exports.layouts = _layouts2.default;
exports.useVibration = _useVibration2.default;
exports.default = _Gamepad2.default;