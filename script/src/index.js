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
var modifierImageSizing = require('./modifierImageSizing.js')($);

modifierToggle.switchModifier();
modifierImageSizing.resizeModifier();

$('.poster-moment').click(function() {
  modifierToggle.switchModifier();
  modifierImageSizing.resizeModifier();
});

setInterval(function() {
  posterMomentLayout.itemShift($('.poster-moment__item'));
}, 2000);

$(window).resize(function() {
  modifierImageSizing.resizeModifier();
});
