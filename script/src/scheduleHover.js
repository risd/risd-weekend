var $ = global.jQuery;
// Modernizr is being used as a global variable

module.exports = ScheduleHover;

function ScheduleHover() {
    if (!(this instanceof ScheduleHover)) {
        return new ScheduleHover();
    }

    // console.log('ScheduleHover initialized.');

    scheduleHover();

    function scheduleHover() {
      $('.calendar-box__item').has('.calendar-box__item-toggle').css('cursor', 'pointer').hover(function() {
        if ($(this).hasClass('calendar-box__item--modal')) {
          $(this).removeClass('calendar-box__item--hover');
        } else {
          $(this).addClass('calendar-box__item--hover');
        }
      }, function() {
        $(this).removeClass('calendar-box__item--hover');
      });
    }

}
