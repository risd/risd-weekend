global.jQuery = global.$ = require('jquery');

var posterMomentLayout = require('./posterMomentLayout.js')($);

var shiftTimeoutID;

shiftInterval();

function shiftInterval() {
  shiftTimeoutID = setTimeout(function () {
    posterMomentLayout.itemShift($('.main-nav__item'), $('.main-nav__container'));
    shiftInterval();
  }, 2000);
  return shiftTimeoutID;
}
