var $ = global.jQuery;

module.exports = ScrollAnchorTest;

function ScrollAnchorTest() {
  if (!(this instanceof ScrollAnchorTest)) {
    return new ScrollAnchorTest();
  }
  console.log('ScrollAnchorTest initialized.');


  var sectionStart;
  var sectionEnd;
  var sectionRange;
  var sectionHash;
  var pushHash;

  scrollAnchorUpdate();

  $(window).scroll(function() {
    scrollAnchorUpdate();
  });

  function scrollAnchorUpdate() {

    $('.section__container').each(function() {

      if ($(this).attr('id')) {
        // if the section has an ID, set the hash to the ID
        sectionHash = '#' + $(this).attr('id');
        pushHash = sectionHash;
      } else {
        // else set the hash to the page url
        sectionHash = '';
        pushHash = window.location.pathname;
      }

      // get the height of the section relative to its position on the page
      sectionStart = $(this).offset().top;
      sectionHeight = $(this).outerHeight();
      sectionEnd = sectionStart + sectionHeight;

      if (
        // if the current scroll position is between the top of the section and the bottom of the section
        sectionStart < window.pageYOffset + 10 &&
        sectionEnd > window.pageYOffset + 10
      ) {
        // if the current section's hash is not the same as the current hash
        if (sectionHash !== window.location.hash) {
          // push the current section's hash to the url
          history.replaceState({}, '', pushHash);
          // window.location.hash = pushHash;
        }

      }

    });

  }

}
