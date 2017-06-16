module.exports = function( $ ){

  console.log('ModifierToggle initialized.');

  var modifierContainer = $('.poster-moment__container');
  var modifiers = JSON.parse($("#modifiers-json").html());
  var modifierLines;
  var modifierLine;
  var modifierImage;
  var modifierLength = modifiers.length;
  var currentIndex = 0;
  var currentModifier = modifiers[0];
  var nextModifier = modifiers[0];

  function switchModifier() {
    if (modifiers[currentIndex].modifier_lines) {
      modifierLines = modifiers[currentIndex].modifier_lines;
      $('.poster-moment__item--modifiers').empty();

      for (var j = 0; j < modifierLines.length; j++) {
        modifierLine = modifierLines[j];
        $('.poster-moment__item--modifiers').append('<div class="poster-moment__item poster-moment__modifier">' + modifierLine.line + '</div>');
      }
    } else {
      modifierImage = modifiers[currentIndex].modifier_image.resize_url;
      $('.poster-moment__item--modifiers').empty();
      $('.poster-moment__item--modifiers').append('<div class="poster-moment__item poster-moment__modifier poster-moment__image"><img src="' + modifierImage + '"></div>');
    }


    if (currentIndex === modifiers.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex ++;
    }
  }

  function randomModifier() {

  }

	//return an object with methods that correspond to above defined functions
	return {
		switchModifier: switchModifier
	};

};
