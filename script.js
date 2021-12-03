let currentDayEl = document.getElementById("currentDay")
const time = moment().format('LLL');

// Add the current date to the screen
 currentDayEl.textContent = time;
 let currentHour = parseInt(moment().format('H'));
 console.log(currentHour);
 
//   var timediv = $(this).text();
// console.log(timediv);
//  //grab each hour 
//  $(".hour").each(function(){ })
   
  
   for(var i = 9; i < 18; i++) {
       var timediv = document.getElementById('hour-' + i);
    //    console.log(timediv)
       if(currentHour > i ){
    console.log('it worked and current time is greater than timeblock time');
    $('.timeblock').removeClass('future');
     $(`#hour-${i}`).addClass('past');
 }
     else if (currentHour < i){
        $(`#hour-${i}`).addClass('future');
        console.log('it worked and current time is less than timeblock time');
}
    else {
        $(`#hour-${i}`).addClass('present');
 console.log('it worked and current time is equal to timeblock time')
   }
   } 
    

  // store items to local storage
$('.saveBtn').click(function() {
   

    var value =  $.trim($('.description').val());
    console.log(value);
    
localStorage.setItem('.description', value);
})


// // retrieve values
 
//   $("#hour-9 .time-block").val(localStorage.getItem("9"));
//   $("#hour-10 .time-block").val(localStorage.getItem("10"));
//   $("#hour-11 .time-block").val(localStorage.getItem("11"));
//   $("#hour-12 .time-block").val(localStorage.getItem("12"));
//   $("#hour-13 .time-block").val(localStorage.getItem("13"));
//   $("#hour-14 .time-block").val(localStorage.getItem("14"));
//   $("#hour-15 .time-block").val(localStorage.getItem("15"));
//   $("#hour-16 .time-block").val(localStorage.getItem("16"));
//   $("#hour-17 .time-block").val(localStorage.getItem("17"));
// })




