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

    var value9 =  $.trim($('#ta9').val());
    var value10 =  $.trim($('#ta10').val());
    var value11 =  $.trim($('#ta11').val());
    var value12 =  $.trim($('#ta12').val());
    var value13 =  $.trim($('#ta13').val());
    var value14 =  $.trim($('#ta14').val());
    var value15 =  $.trim($('#ta15').val());
    var value16 =  $.trim($('#ta16').val());
    var value17 =  $.trim($('#ta17').val());
    console.log(value17);
    
localStorage.setItem('description9', value9);
localStorage.setItem('description10', value10);
localStorage.setItem('description11', value11);
localStorage.setItem('description12', value12);
localStorage.setItem('description13', value13);
localStorage.setItem('description14', value14);
localStorage.setItem('description15', value15);
localStorage.setItem('description16', value16);
localStorage.setItem('description17', value17);
})

$("#ta9").val(localStorage.getItem('description9'));
$("#ta10").val(localStorage.getItem('description10'))
$("#ta11").val(localStorage.getItem('description11'))
$("#ta12").val(localStorage.getItem('description12'))
$("#ta13").val(localStorage.getItem('description13'))
$("#ta14").val(localStorage.getItem('description14'))
$("#ta15").val(localStorage.getItem('description15'))
$("#ta16").val(localStorage.getItem('description16'))
$("#ta17").val(localStorage.getItem('description17'))

$('.clearfields').click(function(){
    $('#ta9').val() = '';
    localStorage.clear()
})




