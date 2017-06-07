var $ = global.jQuery;

module.exports = PosterMomentLayout;

function PosterMomentLayout(opts) {
  if (!(this instanceof PosterMomentLayout)) {
    return new PosterMomentLayout(opts);
  }

  console.log('PosterMomentLayout initialized.');

  var containerWidth;
  var itemWidth;
  var maxShift;
  var randomShift;
  var randomShiftPercentage;
  var randomBoolean;

  setInterval(function() {
    itemShift();
  }, 2000);

  function itemShift() {
    containerWidth = $('.poster-moment__container').width()
    $('.poster-moment__item').each(function() {
      itemWidth = $(this).outerWidth();
      maxShift = (containerWidth - itemWidth) / 2;
      randomShift = Math.floor(Math.random() * maxShift);
      randomShiftPercentage = (randomShift / containerWidth) * 100;
      randomBoolean = Math.random() >= 0.5;
      console.dir($(this));
      console.log(itemWidth);
      console.log(maxShift);
      console.log(randomShift);
      console.log(randomShiftPercentage);
      console.log(randomBoolean);
      if (randomBoolean === true) {
        $(this).css('left', (randomShiftPercentage + '%'));
      } else {
        $(this).css('left', (-randomShiftPercentage + '%'));
      }
    });
  }


}
