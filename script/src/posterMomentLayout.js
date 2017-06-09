var $ = global.jQuery;

module.exports = PosterMomentLayout;

function PosterMomentLayout(opts) {
  if (!(this instanceof PosterMomentLayout)) {
    return new PosterMomentLayout(opts);
  }

  console.log('PosterMomentLayout initialized.');

  var containerWidth;
  var $item;
  var itemWidth;
  var maxShift;
  var randomShift;
  var randomShiftPercentage;
  var randomBoolean;

  // $('.poster-moment__container').click(function() {
  //   itemShift();
  // });

  setInterval(function() {
    $item = $('.poster-moment__item');
    itemShift();
  }, 2000);

  function itemShift() {
    containerWidth = $('.poster-moment__container').width();
    $item.each(function() {
      itemWidth = $(this).outerWidth();
      maxShift = itemWidth / 2;
      randomShift = Math.floor(Math.random() * maxShift);
      randomShiftPercentage = (randomShift / containerWidth) * 100;
      randomBoolean = Math.random() >= 0.5;

      if (randomBoolean === true) {
        $(this).css('left', ('calc(' + randomShiftPercentage + '% - 1em)'));
      } else {
        $(this).css('left', ('calc(-' + randomShiftPercentage + '% + 1em)'));
      }
    });
  }


}
