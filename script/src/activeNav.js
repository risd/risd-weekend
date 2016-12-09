var $ = global.jQuery;

module.exports = activeNav;

function activeNav() {
  if (!(this instanceof activeNav)) {
    return new activeNav();
  }
  console.log('activeNav initialized.');

  var navHash;
  var currentHash;

  clickActiveNavItem();
  loadActiveNavItem();

  $(window).scroll(function() {
    loadActiveNavItem();
  });

  function clickActiveNavItem() {
    $('.nav__item--pages').click(function (event) {
      $(this).addClass('nav__item--active').siblings().removeClass('nav__item--active');
    });
  }

  function loadActiveNavItem() {

    $('.nav__item--pages').each(function() {

      currentHash = window.location.hash;
      navHash = $(this).attr('href');

      if (navHash === currentHash) {
        $(this).addClass('nav__item--active').siblings().removeClass('nav__item--active');
      } else if (navHash !== currentHash) {
        $(this).removeClass('nav__item--active');
      }

    });

  }

}
