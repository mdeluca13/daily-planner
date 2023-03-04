//Setting Variables
var timeBlock = $('.time-block');
var currentDay = $('#current-day');
var currentHour = dayjs().hour();
var date = dayjs().format('dddd, MMMM D, YYYY');
var saveButton = $('.saveBtn');
var localStorageData;

// Run after window loads fully
$(window).on('load', function() {

  //Displaying date at top of Planner
  currentDay.text(date);

  //Looping through each time block
  for (var i = 0; i < timeBlock.length; i++){
    var timeBlockIndex = $(timeBlock)[i];
    var hourCheck = timeBlockIndex.id;

    //pulling from local storage based on the id and displaying stored items
    localStorageData = JSON.parse(localStorage.getItem(hourCheck));
    $(timeBlockIndex.children[1]).text(localStorageData);
    
    //Looping through each time block and checking hour to change color of block by changing class name
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

//click event on save button to save the change in text to the textbox for the clicked save button
saveButton.on('click', function (event) {
  event.preventDefault();

  localStorage.setItem($(this).parent().attr('id'), JSON.stringify($(this).prev().val()));

});