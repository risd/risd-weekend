var DataUtils = require( './data-utils.js' );
var moment = require('moment');
var htmlToText = require('html-to-text');

module.exports = function sampleTransform ( siteData, callback ) {

  var events = Object.keys(siteData.data.events).map(function(eventKey){
    return siteData.data.events[eventKey];
  }).map(function(event) {
    // get the location name and address from the relationships
    if (event.location && typeof event.location === "string") {
      var relatedContent = event.location.split(' ');
      var location = siteData.data[relatedContent[0]][relatedContent[1]];
      event.locationName = location.name;
      event.locationAddress = location.address;
    }

    // Format the start and end times
    var startTimeString = moment(event.start_time);
    var endTimeString = moment(event.end_time);
    var startTimeFormatted;
    var endTimeFormatted;
    var morningStart;
    var morningEnd;
    if (startTimeString) {
      // Check if it starts in the morning
      if (startTimeString.format('a') === "am") {
        morningStart = true;
      } else if (startTimeString.format('a') === "pm") {
        morningStart = false;
      } else {
        morningStart = undefined;
      }
      // Check if it ends in the morning
      if (endTimeString) {
        if (endTimeString.format('a') === "am") {
          morningEnd = true;
        } else if (endTimeString.format('a') === "pm") {
          morningEnd = false;
        } else {
          morningEnd = undefined;
        }
      }
      // If there is only a start time
      if (morningEnd === undefined) {
        // check if start time has minutes
        if (startTimeString.format('mm') === '00') {
          startTimeFormatted = startTimeString.format('h a');
        } else {
          startTimeFormatted = startTimeString.format('h:mm a');
        }
      // if it starts and ends in the morning
      } else if (morningStart === true && morningEnd === true) {
        // check if start time has minutes
        if (startTimeString.format('mm') === '00') {
          startTimeFormatted = startTimeString.format('h');
        } else {
          startTimeFormatted = startTimeString.format('h:mm');
        }
        // check if end time exists
        if (endTimeString) {
          // check if end time has minutes
          if (endTimeString.format('mm') === '00') {
            endTimeFormatted = ' – ' + endTimeString.format('h a')
          } else {
            endTimeFormatted = ' – ' + endTimeString.format('h:mm a');
          }
        }
      // if it starts and ends in the evening
      } else if (morningStart === false && morningEnd === false) {
        // check if start time has minutes
        if (startTimeString.format('mm') === '00') {
          startTimeFormatted = startTimeString.format('h');
        } else {
          startTimeFormatted = startTimeString.format('h:mm');
        }
        // check if end time exists
        if (endTimeString) {
          // check if end time has minutes
          if (endTimeString.format('mm') === '00') {
            endTimeFormatted = ' – ' + endTimeString.format('h a')
          } else {
            endTimeFormatted = ' – ' + endTimeString.format('h:mm a')
          }
        }
      // if it starts in the morning and ends in the evening
      } else if (morningStart === true && morningEnd === false) {
        // check if start time has minutes
        if (startTimeString.format('mm') === '00') {
          startTimeFormatted = startTimeString.format('h a');
        } else {
          startTimeFormatted = startTimeString.format('h:mm a');
        }
        // check if end time exists
        if (endTimeString) {
          // check if end time has minutes
          if (endTimeString.format('mm') === '00') {
            endTimeFormatted = ' – ' + endTimeString.format('h a')
          } else {
            endTimeFormatted = ' – ' + endTimeString.format('h:mm a')
          }
        }
      }
    }
    event.start_time = startTimeFormatted;
    event.end_time = endTimeFormatted;

    // set description italic tags up for indesign find-replace query
    // convert html to text
    if (event.description) {
      event.description = event.description.replace(/<em>/g, '_').replace(/<\/em>/g, '_').replace(/<\/strong>/g, '*').replace(/<strong>/g, '*');
    }
    event.description = htmlToText.fromString(event.description, {
      wordwrap: false
    });
    return event;
  });

  // We encountered no errors, so `null` is passed
  // as the first argument.
  callback( null, events )
}
