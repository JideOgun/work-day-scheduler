let currentDayEl = document.getElementById("currentDay")
const m = moment().format('LLL');
 currentDayEl.textContent = m;

 containerEl = $('.container');
 rowEl = $('.row')


 var createTimeBlockRow = function(hourId) {
     let timeblock = $("<div>").addClass('row');
     $(timeblock).attr('id', `timeblock-${hourId}`);
     return timeblock
 }


 for( var i = 9; i <= 18; i++) {
     const timeblock = createTimeBlockRow(i);
     columns = createCol();
     containerEl.append(timeblock);
        
        createCol();
        timeblock.append(createCol())
 }



 function createCol(){
     let collection = []
     for( var i = 0; i < 3; i++){
    let col = $('<div>').addClass(`col-${i + 1}`, 'p-0');
    collection.push(col)
    col.textContent = "dfghjk"
 }
 return collection;
}


 var createHourDiv = function() {
    let hourdiv = $("<div>").addClass('hourdiv');
    $(hourdiv).attr('id', 'nineam-div');
    $(hourdiv).text = formatHour ()
    return hourdiv;
}

var createTextArea = function() {
    let textDiv = $("<div>").addClass('textarea-div');
    $(textDiv).attr('id', 'textarea-id')
    return textDiv
}

var createSaveBtn = function() {
    const savebtn = $("button").addClass('button');
    $(savebtn).attr('id', 'button-id')
}

function appendTimeblockColumns(timeblockRow, hourCol, textAreaCol, saveBtnCol) {
    const innerCols = [hourCol, textAreaCol, saveBtnCol];
    for (let col of innerCols) {
      timeblockRow.appendChild(col);
    }
  }


