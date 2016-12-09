global.jQuery = global.$ = require('jquery');

var mobileMenuToggle = require('./mobileMenuToggle.js')();
var scrollAnchor = require('./scrollAnchor.js')();
var activeNav = require('./activeNav.js')();
var scheduleToggle = require('./scheduleToggle.js')();
var scheduleHover = require('./scheduleHover.js')();
var livestream = require('./livestream.js')();
var eventModal = require('./eventModal.js')({
  $events: $('.calendar-box__item').has('.calendar-box__item-toggle'),
  $featuredEvents: $('.featured-events__item'),
  $modalContainer: $('.modal__container'),
  $modalToggle: $('.modal__item-toggle')
});

// var modifierToggle = require('./modifierToggle.js')();

eventModal.openModal();
