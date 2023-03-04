//Setting Variables
var timeBlock = $('.time-block');
var currentDay = $('#current-day');
var currentHour = dayjs().hour();
var date = dayjs().format('dddd, MMMM D, YYYY');
var saveButton = $('.saveBtn');

// Run after window loads fully
$(window).on('load', function() {

  //Displaying date at top of Planner
  currentDay.text(date);

  //Looping to check id with the current hour and setting class to change color
  for (var i = 0; i < timeBlock.length; i++){
    var timeBlockIndex = $(timeBlock)[i];
    var hourCheck = timeBlockIndex.id;
    if (hourCheck == currentHour) {
      $(timeBlockIndex).addClass('present');
    }
    else if (hourCheck > currentHour){
      $(timeBlockIndex).addClass('future');
    }
    else {
      $(timeBlockIndex).addClass('past');
    }
  }
});

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
