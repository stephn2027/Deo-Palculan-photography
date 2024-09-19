"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.services = void 0;

var _portrait = _interopRequireDefault(require("../images/portrait.jpg"));

var _group = _interopRequireDefault(require("../images/group.jpg"));

var _couple = _interopRequireDefault(require("../images/couple.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var services = [{
  name: 'Portrait (Solo or Couple)',
  img: _portrait["default"],
  details: [{
    packageName: '2 hours',
    text: ["<b>¥20,000</b> - 1 location", "50 edited, high resolution images + editorial shots", "<i>Photos delivered within 5-7 days</i>"]
  }, {
    packageName: '3 hours',
    text: ["<b>¥40,000</b> - 2 locations", "75 edited, high resolution images + editorial shots", "<i>Photos delivered within 5-7 days</i>"]
  }, {
    packageName: '4 hours',
    text: ["<b>¥60,000</b> - 3 locations", "100 edited, high resolution images + editorial shots.", "<i>Photos delivered within 5-7 days</i>"]
  }]
}, {
  name: 'Family / Group',
  img: _group["default"],
  details: [{
    packageName: '2 hours',
    text: ["<b>¥23,000</b> - 1 location", "50 edited, high resolution images + editorial shots", "<i>Photos delivered within 5-7 days</i>"]
  }, {
    packageName: '3 hours',
    text: ["<b>¥43,000</b> - 2 locations", "75 edited, high resolution images + editorial shots", "<i>Photos delivered within 5-7 days</i>"]
  }, {
    packageName: '4 hours',
    text: ["<b>¥63,000</b> - 3 locations", "100 edited, high resolution images + editorial shots", "<i>Photos delivered within 5-7 days</i>"]
  }]
}, {
  name: 'Prenup',
  img: _couple["default"],
  details: [{
    packageName: '2 hours',
    text: ["<b>¥25,000</b> - 1 location", "50 edited, high resolution images + editorial shots", "<i>Photos delivered within 5-7 days</i>"]
  }, {
    packageName: '3 hours',
    text: ["<b>¥45,000</b> - 2 locations", "75 edited, high resolution images + editorial shots", "<i>Photos delivered within 5-7 days</i>"]
  }, {
    packageName: '4 hours',
    text: ["<b>¥65,000</b> - 3 locations", "100 edited, high resolution images + editorial shots", "<i>Photos delivered within 5-7 days</i>"]
  }]
}];
exports.services = services;