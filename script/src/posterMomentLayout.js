module.exports = function( $ ){

  console.log('PosterMomentLayout initialized.');

  var containerWidth;
  var $item;
  var itemWidth;
  var maxShift;
  var randomShift;
  var randomShiftPercentage;
  var randomBoolean;

  function itemShift($item) {
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

  //return an object with methods that correspond to above defined functions
	return {
		itemShift: itemShift
	};

};
