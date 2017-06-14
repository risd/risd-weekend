module.exports = function( $ ){

  console.log('ModifierImageSizing initialized.');

  var modifierImage;
  var modifierLineHeight;
  var maxModifierLines = 3;
  var maxImageHeight;

  function resizeModifier() {
    modifierImage = $('.poster-moment__image');
    modifierLineHeight = $('#poster-moment__risd').height();
    maxImageHeight = modifierLineHeight * maxModifierLines;

    modifierImage.height(maxImageHeight);
  }

	//return an object with methods that correspond to above defined functions
	return {
		resizeModifier: resizeModifier
	};

};
