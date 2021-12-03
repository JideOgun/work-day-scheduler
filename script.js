let currentDayEl = document.getElementById("currentDay")
const time = moment().format('LLL');

// Add the current date to the screen
 currentDayEl.textContent = time;
 let currentHour = moment().format('LT');
 console.log(currentHour);
 


 //grab each hour 
 $(".hour").each(function(){
     var timediv = $(this).text();
     let timediv1 = moment(timediv)
     console.log(timediv1);
    
    if(currentHour > timediv1 ){
    console.log('it worked and current time is greater than timeblock time');
     $('.timeblock').addClass('past')
 }
     else if (currentHour === timediv1){
 $('.timeblock').addClass('present');
 console.log('it worked and current time is equal to timeblock time');
}
    else if (currentHour < timediv1){
    $('.timeblock').addClass('future');
    console.log('it worked and current time is less than timeblock time');
                }
 })
 