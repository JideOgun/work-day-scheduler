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
       console.log(timediv)
       if(currentHour > i ){
    console.log('it worked and current time is greater than timeblock time');
     $('.timeblock').addClass('past')
 }
     else if (currentHour === i){
 $('.timeblock').addClass('present');
 console.log('it worked and current time is equal to timeblock time');
}
    else if (currentHour < i){
    $('.timeblock').addClass('future');
    console.log('it worked and current time is less than timeblock time');
                }
   } 
    

 