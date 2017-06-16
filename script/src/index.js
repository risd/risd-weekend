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

var intervalCount = 0;

modifierToggle.switchModifier();
modifierImageSizing.resizeModifier();

$('.poster-moment').click(function() {
  modifierToggle.switchModifier();
  modifierImageSizing.resizeModifier();
});

setTimeout(function () {  
  shiftInterval();
  switchInterval();
}, 1000);

function shiftInterval() {
  setTimeout(function () {
    posterMomentLayout.itemShift($('.poster-moment__item'));
    shiftInterval();
  }, 2000);
}

function switchInterval() {
  setTimeout(function () {
    modifierToggle.switchModifier();
    modifierImageSizing.resizeModifier();
    switchInterval();
  }, 4000);
}

// setInterval(function() {
//   posterMomentLayout.itemShift($('.poster-moment__item'));
// }, 2000);
//
// setInterval(function() {
//   modifierToggle.switchModifier();
//   modifierImageSizing.resizeModifier();
// }, 4000);

$(window).resize(function() {
  modifierImageSizing.resizeModifier();
});

// initial pause then loop
/*
setTimeout(function () {
  setInterval(function () {
    modifierToggle.switchModifier();
    modifierImageSizing.resizeModifier();
  }, 2000);
}, 5000);
*/

// initial slot machine
/*
setInterval(function() {
  if (intervalCount < 15) {
    modifierToggle.switchModifier();
    modifierImageSizing.resizeModifier();
  }
  intervalCount ++;
}, 100);
*/
