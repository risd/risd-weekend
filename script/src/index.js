global.jQuery = global.$ = require('jquery');

var mobileMenuToggle = require('./mobileMenuToggle.js')();
var scrollAnchor = require('./scrollAnchor.js')();
var activeNav = require('./activeNav.js')();
var scheduleToggle = require('./scheduleToggle.js')();
var scheduleHover = require('./scheduleHover.js')();
var livestream = require('./livestream.js')();
var eventModal = require('./eventModal.js')();
var posterMomentLayout = require('./posterMomentLayout.js')($);
var modifierToggle = require('./modifierToggle.js')($);

$('.poster-moment').click(function() {
  modifierToggle.switchModifier();
  // posterMomentLayout.itemShift($('.poster-moment__item'));
});

setInterval(function() {
  posterMomentLayout.itemShift($('.poster-moment__item'));
}, 2000);
