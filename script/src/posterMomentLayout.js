var $ = global.jQuery;

module.exports = PosterMomentLayout;

function PosterMomentLayout(opts) {
  if (!(this instanceof PosterMomentLayout)) {
    return new PosterMomentLayout(opts);
  }

  console.log('PosterMomentLayout initialized.');

  var containerWidth = $('.poster-moment__container').width();
  var itemWidth;
  var maxMargin;
  var randomMargin;
  var randomMarginPercentage;
  console.log("containerWidth: " + containerWidth);

  setRandomMargin();

  function setRandomMargin() {
    $('.poster-moment__transition').each(function(index, el) {
      itemWidth = $(this).width();
      maxMargin = containerWidth - itemWidth;
      randomMarginLeft = getRandomInteger(0, maxMargin);
      randomMarginLeftPercentage = randomMarginLeft / containerWidth * 100 + "%";
      randomMarginRight = containerWidth - itemWidth - randomMarginLeft;
      randomMarginRightPercentage = randomMarginRight / containerWidth * 100 + "%";

      console.log(itemWidth + ", " + maxMargin + ", " + randomMarginLeftPercentage);

      $(this).css({
        marginLeft: randomMarginLeftPercentage
      });
    });

    function getRandomInteger(min, max) {
      return Math.random() * (max - min) + min;
    }
  }

}
