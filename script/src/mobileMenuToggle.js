var $ = global.jQuery;
// Modernizr is being used as a global variable

module.exports = MobileMenuToggle;

function MobileMenuToggle() {
    if (!(this instanceof MobileMenuToggle)) {
        return new MobileMenuToggle();
    }

    console.log('MobileMenuToggle initialized.');

    var modernizrState = Modernizr.mq('(min-width: 768px)');
    console.log("modernizr = " + modernizrState);

    $(window).resize(function() {
      modernizrState = Modernizr.mq('(min-width: 768px)');
      console.log("modernizr = " + modernizrState);
    });

    navToggle();
    resizeCheck();

    function navToggle() {
    console.log("nav toggled");
    // Clicking on the Menu button:
    $('.nav__item--activator').click(function(){
      if (modernizrState === false) {
        console.log("activator clicked");
        // shows page nav items, the x
        $('.nav__item--pages, .nav__item--deactivator').addClass('nav__item--show').removeClass('nav__item--hide');
        // hides itself
        $('.nav__item--activator').addClass('nav__item--hide').removeClass('nav__item--show');
        // adds 100% height on the nav
        $('.nav').addClass('nav--toggled');
        //disables body scrolling
        $('body').addClass('body--no-scroll');
      }
    });
    // Clicking on the x button:
    $('.nav__item--deactivator').click(function(){
      if (modernizrState === false) {
        console.log("deactivator clicked");
        // hides page nav items, the x
        $('.nav__item--pages, .nav__item--deactivator').addClass('nav__item--hide').removeClass('nav__item--show');
        // shows the menu button
        $('.nav__item--activator').addClass('nav__item--show').removeClass('nav__item--hide');
        // removes 100% height on the nav
        $('.nav').removeClass('nav--toggled');
        // enables body scrolling
        $('body').removeClass('body--no-scroll');
      }
    });
    $('.nav__item').not('.nav__item--activator').click(function() {
      if (modernizrState === false) {
        console.log("nav item (not activator) clicked");
        // removes 100% height on the nav
        $('.nav').removeClass('nav--toggled');
        // hides page nav items, the x
        $('.nav__item--pages, .nav__item--deactivator').addClass('nav__item--hide').removeClass('nav__item--show');
        // shows the menu button
        $('.nav__item--activator').addClass('nav__item--show').removeClass('nav__item--hide');
        // enables body scrolling
        $('body').removeClass('body--no-scroll');
      }
    });
  }

    function resizeCheck() {
        $(window).resize(function() {
            $('.nav').removeClass('nav--toggled');
            $('body').removeClass('body--no-scroll');
            if (Modernizr.mq('(min-width: 768px)')) {
                $('.nav__item--activator, .nav__item--deactivator').addClass('nav__item--hide').removeClass('nav__item--show');
                $('.nav__item--pages').addClass('nav__item--show').removeClass('nav__item--hide');
            } else {
                $('.nav__item--activator').addClass('nav__item--show').removeClass('nav__item--hide');
                $('.nav__item--pages, .nav__item--deactivator').addClass('nav__item--hide').removeClass('nav__item--show');
            }
        });
    }

}
