var importantEvents = {};
var showCurrentDay = $('#currentDay')
var today = moment().format('dddd, MMMM Do');

// shows current day on header
showCurrentDay.text(today);

$('.saveBtn').on('click', function() {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');
    
    localStorage.setItem(time, text);
});

$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));

function hourCheck() {
    var currentHour = moment().hour(); // get current hour using moment.js

    // time-blocks looped to set status
    $('.time-block').each(function() {
        var hourOfBlock = parseInt($(this).attr('id').split('hour')[1]);
        console.log(hourOfBlock, currentHour)

        if (hourOfBlock < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        } else if (hourOfBlock === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
}

hourCheck();

// var pastEvent = 
// var currentEvent =
// var futureEvent = 

// var createEvent = function (eventText, eventDate, eventList) {
//     // create elemenets that make up a event item
//     var eventLi = $
// }