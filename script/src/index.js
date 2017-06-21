global.jQuery = global.$ = require('jquery');

var mobileMenuToggle = require('./mobileMenuToggle.js')();
var scrollAnchor = require('./scrollAnchor.js')();
var activeNav = require('./activeNav.js')();
var scheduleToggle = require('./scheduleToggle.js')();
var scheduleHover = require('./scheduleHover.js')();
var livestream = require('./livestream.js')();
var eventModal = require('./eventModal.js')();
var posterMomentLayout = require('./posterMomentLayout.js')($);
var preloadImages = require('./preloadImages.js')($);
var modifierToggle = require('./modifierToggle.js')($);
var modifierImageSizing = require('./modifierImageSizing.js')($);

var activateReset = false;
var switchTimeoutID;
var shiftTimeoutID;

modifierToggle.switchModifier();
modifierImageSizing.resizeModifier();

$('.poster-moment').click(function() {
  modifierToggle.switchModifier();
  modifierImageSizing.resizeModifier();
  activateReset = true;
  clearInterval(switchTimeoutID);
  clearInterval(shiftTimeoutID);
  switchInterval();
  shiftInterval();
});

setTimeout(function () {
  shiftInterval();
  switchInterval();
}, 1000);

function shiftInterval() {
  shiftTimeoutID = setTimeout(function () {
    posterMomentLayout.itemShift($('.poster-moment__item'));
    shiftInterval();
  }, 2000);
  return shiftTimeoutID;
}

function switchInterval() {
  console.log(activateReset);
  switchTimeoutID = setTimeout(function () {
    modifierToggle.switchModifier();
    modifierImageSizing.resizeModifier();
    switchInterval();
  }, 4000);
  return switchTimeoutID;
}

$(window).resize(function() {
  modifierImageSizing.resizeModifier();
});
