
var $ = global.jQuery;

module.exports = EventModal;

function EventModal(opts) {
  if (!(this instanceof EventModal)) {
    return new EventModal(opts);
  }

  console.log('EventModal initialized.');

  var $events = $('.calendar-box__item').has('.calendar-box__item-toggle');
  var $featuredEvents = $('.featured-events__item');
  var $modalContainer = $('.modal__container');
  var $modalToggle = $('.modal__item-toggle');
  var $activeEvent;
  var lastHash;

  openModal($(this));

  $events.click(function() {
    openModal($(this));
  });

  $featuredEvents.click(function() {
    openModal($(this));
  });

  $modalToggle.click(function(e) {
    closeModal();
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      if ($('.modal--on').length > 0) {
        closeModal();
      }
    }
  });

  function openModal(activeEvent) {
    if (activeEvent.data('modal-source-id')) {
      modalID = activeEvent.data('modal-source-id');
    } else {
      modalID = window.location.hash.replace('#','');
    }

    modalTarget = $(".modal__item[data-modal-target-id='" + modalID +"']");

    if ($('.modal__container').has(modalTarget).length) {
      $('.modal__container').addClass('modal--fade_in');
      modalTarget.addClass('modal--on');
      $('body').addClass('modal__body--noscroll');
    }

    lastHash = window.location.hash;
  }

  function closeModal() {
    $('.modal__container').removeClass('modal--fade_in');
    $('.modal__item').removeClass('modal--on');
    $('body').removeClass('modal__body--noscroll');
    history.replaceState({}, '', lastHash);
  }
}
