var $ = global.jQuery;
// Modernizr is being used as a global variable

module.exports = ModifierToggle;

function ModifierToggle() {
  if (!(this instanceof ModifierToggle)) {
    return new ModifierToggle();
  }

  console.log('ModifierToggle initialized.');

  var modifierContainer = $('.poster-moment__container');
  var modifiers = JSON.parse($("#modifiers").html());
  console.log(modifiers);
  var modifierLines = JSON.parse($("#modifiers").html());
  var modifierLine;
  var modifierLength = modifiers.length;
  var currentIndex = 0;
  var currentModifier = modifiers[0];
  var nextModifier = modifiers[0];

  switchModifier();

  function switchModifier() {

    $('.poster-moment').click(function() {
      console.log('poster-moment clicked');
      modifierLines = modifiers[currentIndex].modifier_lines;
      console.log(modifierLines);
      $('.poster-moment__item--modifiers').empty();
      for (var j = 0; j < modifierLines.length; j++) {
        modifierLine = modifierLines[j];
        $('.poster-moment__item--modifiers').append('<div class="poster-moment__item poster-moment__modifier">' + modifierLine.line + '</div>');
      }
      // $('#poster-moment__modifier--1').text(modifiers[currentIndex].name);

      if (currentIndex === modifiers.length - 1) {
        currentIndex = 0;
      } else {
        currentIndex ++;
      }
    });
  }
}
