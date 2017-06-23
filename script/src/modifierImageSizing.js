module.exports = function( $ ){

  console.log('ModifierImageSizing initialized.');

  var modifierImageContainer;
  var modifierImage
  var modifierImageHeight;
  var modifierImageWidth;
  var modifierImageRatio;
  var modifierLineHeight;
  var maxModifierLines = 3;
  var maxImageHeight;
  var imageWidth;

  function resizeModifier() {
    modifierImageContainer = $('.poster-moment__image');
    modifierImage = $('.poster-moment__image > img');
    if (modifierImage.length > 0) {
      modifierImageHeight = modifierImage[0].naturalHeight;
      modifierImageWidth = modifierImage[0].naturalWidth;
      modifierImageRatio = modifierImageWidth / modifierImageHeight;
      modifierLineHeight = $('#poster-moment__risd').height();
      maxImageHeight = modifierLineHeight * maxModifierLines;
      imageWidth = maxImageHeight * modifierImageRatio;

      modifierImageContainer.height(maxImageHeight);
      modifierImageContainer.width(imageWidth);
    } else {
      return;
    }
  }

	//return an object with methods that correspond to above defined functions
	return {
		resizeModifier: resizeModifier
	};

};
