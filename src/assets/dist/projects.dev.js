"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _menuItemsImage = _interopRequireDefault(require("../images/menuItemsImage.jpg"));

var _portrait = _interopRequireDefault(require("../images/portrait.jpeg"));

var _menuPic = _interopRequireDefault(require("../images/menu-pic2.jpeg"));

var _menuItemImage = _interopRequireDefault(require("../images/menuItemImage4.jpg"));

var _hoverFaq = _interopRequireDefault(require("../images/hover-faq.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var projects = [{
  id: "01",
  color: "#b5b5b2",
  image: _menuItemsImage["default"],
  name: "Home",
  link: '/'
}, {
  id: "02",
  color: "#b3a8b3",
  image: _portrait["default"],
  name: "Portfolio",
  link: 'works'
}, {
  id: "03",
  color: "#a3b1ae",
  image: _menuPic["default"],
  name: "Services",
  link: 'services'
}, {
  id: "04",
  color: "#a4s1se",
  image: _hoverFaq["default"],
  name: "FAQs",
  link: 'faqs'
}, {
  id: "05",
  color: "#b0aeac",
  image: _menuItemImage["default"],
  name: "Contact",
  link: 'contact'
}];
var _default = projects;
exports["default"] = _default;