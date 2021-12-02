let currentDayEl = document.getElementById("currentDay")
const m = moment().format('LLL');
 currentDayEl.textContent = m;

 containerEl = $('.container');
 rowEl = $('.row')


 var createTimeBlockRow = function() {
     let timeblock = $("<div>").addClass('row');
     $(timeblock).attr('id', 'timeblock-9');
     return timeblock
 }
 containerEl.append(createTimeBlockRow);

 function createCol(element, colSize){
     const col = document.createElement('div');
     col.classList.add(`col-${colSize}`, 'p-0');
     col.appendChild(element);
     return col;
 }

 var createHourDiv = function(hour) {
    let hourdiv = $("<div>").addClass('hourdiv');
    $(hourdiv).attr('id', 'nineam-div');
    $(hourdiv).text = formatHour (hour)
    return hourdiv;
}

var createTextArea = function() {
    let textDiv = $("<div>").addClass('textarea-div');
    $(textDiv).attr('id', 'textarea-id')
    return textDiv
}

var saveBtn = function() {
    const savebtn = $("button").addClass('button');
    $(savebtn).attr('id', 'button-id')

}



