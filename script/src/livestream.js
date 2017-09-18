var $ = global.jQuery;

module.exports = Livestream;

function Livestream(opts) {
  if (!(this instanceof Livestream)) {
    return new Livestream(opts);
  }

  // console.log('Livestream initialized.');

  var windowHeight;
  var navHeight = $('.nav').outerHeight();
  var titleHeight;

  resizeVideo();

  $(window).resize(function() {
    resizeVideo();
  });

  function resizeVideo() {
    windowHeight = $(window).height();
    titleHeight = $('.video-module__title-container').outerHeight();
    videoHeight = windowHeight - navHeight - titleHeight;

    $('.video-module__container').css('padding-bottom', videoHeight);
  }

}
