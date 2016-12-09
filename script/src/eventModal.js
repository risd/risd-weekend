var $ = global.jQuery;

module.exports = EventModal;

function EventModal(opts) {
  if (!(this instanceof EventModal)) {
    return new EventModal(opts);
  }

    console.log('EventModal initialized.');

    this.$events = opts.$events;
    this.$featuredEvents = opts.$featuredEvents;
    this.$modalContainer = opts.$modalContainer;
    this.$modalToggle = opts.$modalToggle;

    this.$events.on('click', this.openModal);
    this.$featuredEvents.on('click', this.openModal);
    this.$modalToggle.on('click', this.closeModal);
    this.$modalContainer.on('click', this.closeModal);

}

EventModal.prototype.openModal = function () {

  if ($(this).data('modal-source-id')) {
    modalID = $(this).data('modal-source-id');
  } else {
    modalID = window.location.hash.replace('#','');
  }

  modalTarget = $(".modal__item[data-modal-target-id='" + modalID +"']");

  if ($('.modal__container').has(modalTarget).length) {
    $('.modal__container').addClass('modal--fade_in');
    modalTarget.addClass('modal--on');
    $('body').addClass('modal__body--noscroll');
  }

};

EventModal.prototype.closeModal = function (e) {
  if (e.target === this) {
    $('.modal__container').removeClass('modal--fade_in');
    $('.modal__item').removeClass('modal--on');
    $('body').removeClass('modal__body--noscroll');
  }
};
