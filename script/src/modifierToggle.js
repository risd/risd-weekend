module.exports = function( $ ){

  // console.log('ModifierToggle initialized.');

  var modifierContainer = $('.poster-moment__container');
  var modifiers = JSON.parse($("#modifiers-json").html());
  var modifierLines;
  var modifierLine;
  var modifierImage;
  var modifierLength = modifiers.length;
  var currentIndex = Math.floor(Math.random() * (modifierLength - 1));
  var currentModifier = modifiers[0];
  var nextModifier = modifiers[0];

  setTimeout(function () {
    $('.poster-moment__item--modifiers').addClass('wiggle');
  }, 2000);

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

	//return an object with methods that correspond to above defined functions
	return {
		switchModifier: switchModifier
	};

};
