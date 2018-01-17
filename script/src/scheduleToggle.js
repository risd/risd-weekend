var $ = global.jQuery;
// Modernizr is being used as a global variable

module.exports = ScheduleToggle;

function ScheduleToggle() {
  if (!(this instanceof ScheduleToggle)) {
      return new ScheduleToggle();
  }

  // console.log('ScheduleToggle initialized.');

  var selectedFilter;
  var currentFilter;
  var lastFilter = window.localStorage.getItem('lastFilter');
  var filterHash;
  var $filterButton;
  var $filteredItems;
  var $filteredColumn;


  $('.calendar-box__button').click(function() {
    setAudienceFilter($(this));
    filterAudiences(currentFilter);
  });


  if (lastFilter) {
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
