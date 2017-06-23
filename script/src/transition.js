global.jQuery = global.$ = require('jquery');

var posterMomentLayout = require('./posterMomentLayout.js')($);

var shiftTimeoutID;

shiftInterval();

function shiftInterval() {
  shiftTimeoutID = setTimeout(function () {
    posterMomentLayout.itemShift($('.poster-moment__item'), $('.poster-moment__container'));
    shiftInterval();
  }, 2000);
  return shiftTimeoutID;
}
