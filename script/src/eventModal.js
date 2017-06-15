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
  var $modalToggle = $('.modal__item-toggle, .modal__background');
  var $activeEvent;
  var modalID;
  var historyState;
  var onLoadModal = true;

  openModal($(this));

  $events.click(function(e) {
    onLoadModal = false;
    e.preventDefault();
    openModal($(this));
  });

  $featuredEvents.click(function(e) {
    onLoadModal = false;
    e.preventDefault();
    openModal($(this));
  });

  $modalToggle.click(function(e) {
    if (onLoadModal === true) {
      onLoadModal = false;
    } else {
      window.history.back();
    }
    closeModal();
  });

  $(window).on('popstate', function (event) {  //pressed back button
    if(event.state!==null) {
      closeModal();
    }
  });

  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      if ($('.modal--on').length > 0) {
        if (onLoadModal === false) {
          window.history.back();
        }
        closeModal();
      }
    }
  });

  function openModal(activeEvent) {
    /*
      Case 1: Clicked element has a modal source ID
      Case 2: On load, page has a hash value
      Case 3: 1 and 2 are false.
    */
    if (activeEvent.data('modal-source-id') !== undefined) {
      modalID = activeEvent.data('modal-source-id');
      historyState = '#' + activeEvent.data('modal-source-id');
      history.pushState({}, '', historyState);
    } else if(window.location.hash) {
      modalID = window.location.hash.replace('#','');
    } else {
      modalID = false;
    }

    if (modalID !== false) {
      modalTarget = $(".modal__item[data-modal-target-id='" + modalID +"']");

      if ($('.modal__container').has(modalTarget).length) {
        $('.modal__container').addClass('modal--slide_in');
        modalTarget.addClass('modal--on');
        $('body').addClass('modal__body--noscroll');
      }
    }

  }

  function closeModal() {
    $('.modal__container').removeClass('modal--slide_in');
    $('.modal__item').removeClass('modal--on');
    $('body').removeClass('modal__body--noscroll');
  }
}
