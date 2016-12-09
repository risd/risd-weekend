var $ = global.jQuery;
// Modernizr is being used as a global variable

module.exports = ModifierToggle;

function ModifierToggle() {
    if (!(this instanceof ModifierToggle)) {
        return new ModifierToggle();
    }

    console.log('ModifierToggle initialized.');

    switchModifier();

    var modifierContainer = $('.poster-moment__container');
    var modifiers = $('.poster-moment__item--modifiers');
    var modifierLength = modifiers.length;
    var currentModifier;
    var nextModifier;

    function switchModifier() {

      $('.poster-moment').click(function() {
        console.log('poster-moment clicked');

        modifiers.each(function(index, el) {
          currentModifier = $(this);
          nextModifier = currentModifier.next();
          firstModifier = modifiers.first();
          if ($(this).hasClass('poster-moment__item--active') && index === modifierLength - 1) {

            console.log('active item and last item');
            console.log(currentModifier.text() + ', ' + nextModifier.text());
            // firstModifier.addClass('poster-moment__item--active').removeClass('poster-moment__item--inactive').siblings().not(firstModifier).addClass('poster-moment__item--inactive').removeClass('poster-moment__item--active');

          } else if ($(this).hasClass('poster-moment__item--active') && index !== modifierLength - 1) {
            console.log('active item and not last item');
            console.log(currentModifier.text() + ', ' + nextModifier.text());
            // nextModifier.removeClass('poster-moment__item--inactive').addClass('poster-moment__item--active').siblings().not(nextModifier).addClass('poster-moment__item--inactive').removeClass('poster-moment__item--active');
          }

          console.log(currentModifier.text() + ', ' + nextModifier.text());

          // $(this).removeClass('poster-moment__item--active').addClass('poster-moment__item--inactive');
          // nextModifier.removeClass('poster-moment__item--inactive').addClass('poster-moment__item--active').siblings().not(currentModifier).addClass('poster-moment__item--inactive').removeClass('poster-moment__item--active');

        });


      });
    }
}
