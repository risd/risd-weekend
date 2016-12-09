var $ = global.jQuery;
// Modernizr is being used as a global variable

module.exports = ScheduleToggle;

function ScheduleToggle() {
    if (!(this instanceof ScheduleToggle)) {
        return new ScheduleToggle();
    }

    console.log('ScheduleToggle initialized.');

    dayToggle('friday');
    dayToggle('saturday');
    dayToggle('sunday');

    function dayToggle(day) {
      console.log(day + " dayToggle intiated.");
      $('#calendar-box__button--' + day).click(function() {
        $(this).addClass('calendar-box__button--active').siblings().removeClass('calendar-box__button--active');
        $('#calendar-box__column--' + day).removeClass('calendar-box__column--hidden').siblings().not('calendar-box__toggle').addClass('calendar-box__column--hidden');
      });
    }

}
