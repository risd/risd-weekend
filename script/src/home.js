global.jQuery = global.$ = require('jquery');

var consoleInformation = require('./consoleInformation.js')($);
var posterMomentLayout = require('./posterMomentLayout.js')($);

var shiftTimeoutID;

posterMomentLayout.itemShift($('.main-nav__item'), $('.main-nav__container'));

// shiftInterval();
//
// function shiftInterval() {
//   shiftTimeoutID = setTimeout(function () {
//     posterMomentLayout.itemShift($('.main-nav__item'), $('.main-nav__container'));
//     shiftInterval();
//   }, 2000);
//   return shiftTimeoutID;
// }
