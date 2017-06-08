var $ = global.jQuery;
// Modernizr is being used as a global variable

module.exports = ScheduleToggle;

function ScheduleToggle() {
  if (!(this instanceof ScheduleToggle)) {
      return new ScheduleToggle();
  }

  console.log('ScheduleToggle initialized.');

  var selectedFilter;
  var currentFilter;
  var lastFilter = window.localStorage.getItem('lastFilter');
  var filterHash;
  var $filterButton;
  var $filteredItems;
  var $filteredColumn;

/*
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
*/

  $('.calendar-box__button').click(function() {
    setAudienceFilter($(this));
    filterAudiences(currentFilter);
  });


  if (lastFilter) {
    console.log(lastFilter);
    filterAudiences(lastFilter);
  }

  function setAudienceFilter(element) {

    $(element).addClass('active').siblings().removeClass('active');

    selectedFilter = $(element).data('filter');
    selectedFilter = selectedFilter.replace('\#','');

    window.localStorage.setItem('lastFilter', selectedFilter);
    currentFilter = window.localStorage.getItem('lastFilter');

  }

  function filterAudiences(filter) {

    $filterButton = $('#calendar-box__button--' + filter);
    $filteredColumn = $('#calendar-box__column--' + filter);

    $($filterButton).addClass('active').siblings().removeClass('active');
    $('.calendar__audience').removeClass('initial');
    $('.calendar-box__column').addClass('calendar-box__column--hidden');
    $filteredColumn.removeClass('calendar-box__column--hidden');
  }

}
