var showCurrentDay = $('#currentDay')
var today = moment().format('dddd, MMMM Do');
const startTime = 8; //8AM
const endTime = 17; //5PM

// shows current day on header
showCurrentDay.text(today);

const createTimeBlock = (time) => {
    const timeInAMorPM = time % 12 || 12;
    const timeUnit = (time >= 12) ? 'PM': 'AM';
    const divElement = document.createElement('div');
    divElement.className = 'row time-block';
    divElement.id = `hour${time}`;
    const hourLabel =document.createElement('div');
    hourLabel.className = 'col-sm-1 hour';
    hourLabel.innerText = `${timeInAMorPM} ${timeUnit}`;
    const textArea = document.createElement('textarea');
    textArea.className = 'col-sm-10 description';
    const btn = document.createElement('button');
    btn.className = 'col-sm-1 btn saveBtn';
    const icon = document.createElement('i');
    icon.className = 'fas fa-save';
    btn.appendChild(icon);
    [hourLabel, textArea, btn].forEach(element => {
        divElement.appendChild(element);
    });
    return divElement;
} 

const generateTimeBlocks = () => {
    const container = $('.container');
    for (let i=startTime; i<endTime; i++) {
        const timeBlock = createTimeBlock(i);
        container.append(timeBlock);
    }

}

const getSavedTimeBlockInfo = () => {
    for (let i=startTime; i<endTime; i++) {
        $(`#hour${i} .description`).val(localStorage.getItem(`hour${i}`));
    }
}

function hourCheck() {
    var currentHour = moment().hour(); // get current hour using moment.js

    $('.time-block').toggleClass(function() {
        var hourOfBlock = parseInt($(this).attr('id').split('hour')[1]);
        console.log(hourOfBlock, currentHour)

        if (hourOfBlock < currentHour) {
            return $(this).addClass('past');           
        } else if (hourOfBlock === currentHour) {
            return $(this).addClass('present');
        } else {
            return $(this).addClass('future');
        }
    })
}

const main = () => {
    generateTimeBlocks();
    getSavedTimeBlockInfo();
    hourCheck();
    $('.saveBtn').on('click', function() {
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        
        localStorage.setItem(time, text);
        console.log(time, text);
    });
}

main();
