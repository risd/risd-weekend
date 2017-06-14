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

  scrollAnchorUpdate();

  $(window).scroll(function() {
    scrollAnchorUpdate();
  });

  function scrollAnchorUpdate() {

    $('.section__container').each(function() {

      if ($(this).attr('id')) {
        // if the section has an ID, set the hash to the ID
        sectionHash = '#' + $(this).attr('id');
      } else {
        // else set the hash to the page url
        sectionHash = window.location.pathname;
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
        // if the current has is not the same as the current section's hash
        if (window.location.hash != sectionHash) {
          // push the current section's hash to the url
          history.replaceState({}, '', sectionHash);
        }
      }

    });

  }

}
