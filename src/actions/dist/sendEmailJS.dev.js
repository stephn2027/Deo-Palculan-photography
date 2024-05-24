"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendEmailJS = void 0;

var _browser = _interopRequireDefault(require("@emailjs/browser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PUBLIC_KEY = process.env.REACT_APP_API_EMAILJS_PUBLIC_KEY;
var TEMPLATE_ID = process.env.REACT_APP_API_EMAILJS_TEMPLATE_ID;
var SERVICE_ID = process.env.REACT_APP_API_EMAILJS_SERVICE_ID;

var sendEmailJS = function sendEmailJS(form) {
  console.log("Public Key:", PUBLIC_KEY);
  console.log("Template ID:", TEMPLATE_ID);
  console.log("Service ID:", SERVICE_ID);

  _browser["default"].sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
    publicKey: PUBLIC_KEY
  }).then(function () {
    console.log('SUCCESS!');
  }, function (error) {
    console.log('FAILED...', error.text);
  });
};

exports.sendEmailJS = sendEmailJS;