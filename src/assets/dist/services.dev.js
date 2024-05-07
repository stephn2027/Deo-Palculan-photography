"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.services = void 0;

var _solo = _interopRequireDefault(require("../images/solo.jpg"));

var _groupRandom = _interopRequireDefault(require("../images/groupRandom.jpeg"));

var _event = _interopRequireDefault(require("../images/event.jpeg"));

var _ride = _interopRequireDefault(require("../images/ride.jpeg"));

var _train = _interopRequireDefault(require("../images/train.jpeg"));

var _ladywaiting = _interopRequireDefault(require("../images/ladywaiting.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var services = [{
  name: 'Portrait Photography',
  img: _solo["default"],
  text: ['Basic Package: - Includes 1-hour session, 25+ edited digital images.', 'Standard Package: - Includes 2-hour session, 35+ edited digital images', 'Premium Package: - Includes 3-hour session, 50+ edited digital images']
}, {
  name: 'Family Photography / Group',
  img: _groupRandom["default"],
  text: ['Basic Package: - Includes 1-hour session, 30+ edited digital images.', 'Standard Package: - Includes 2-hour session, 40+ edited digital images', 'Premium Package:  - Includes 3-hour session, 60+ edited digital images']
}, {
  name: 'Event Photography',
  img: _event["default"],
  text: ['Basic Package: - Includes 1-hour session, 40+ edited digital images.', 'Standard Package: - Includes 2-hour session, 60+ edited digital images', 'Premium Package: - Includes 3-hour session, 80+ edited digital images']
}, {
  name: 'Product Photography',
  img: _ride["default"],
  text: ['Basic Package: - Includes 1-hour session, 10+ edited digital images.', 'Standard Package: Includes 2-hour session, 20+ edited digital images', 'Premium Package: - Includes 3-hour session, 30+ edited digital images']
}, {
  name: 'Others',
  img: _train["default"],
  text: ['Please note that prices may vary depending on location, additional services requested, and any special requirements. Contact us for a personalized quote tailored to your specific needs.', 'Zoom consultation on location, costume and logistics available']
}, {
  name: 'Extras',
  img: _ladywaiting["default"],
  text: ['Additional Hour of Coverage: Extend your session beyond the standard package duration for an additional fee.', 'Additional Edited Images: Request more edited digital images beyond the package limit.']
}];
exports.services = services;