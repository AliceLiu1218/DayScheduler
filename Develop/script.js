
var timeBlock
var currentHr = dayjs().hour();
var day = dayjs().format('MMM D, YYYY, hh:mm:ss');
function creatSchedule() {
  for (var i=0; i<24; i++) {
    
    var scheduleCon = $('#schedule-container')

    var timeBlock = $('<div>')
   timeBlock.attr('id', i)
    if (i < currentHr-1) {
      timeBlock.addClass("row time-block past")
    }else if (i == currentHr-1) {
      timeBlock.addClass("row time-block present")
    }else {
      timeBlock.addClass("row time-block future")
    }
    
    var hour = $('<div>')
    hour.addClass("col-2 col-md-1 hour text-center py-3")
    var j = 0
    if (i<11) {
      j = i+1
      hour.text(`${j}AM`)
    }else if (i == 11) {
      j = i+1
      hour.text(`${j}PM`)
    }else if (i == 23) {
      j = i-11
      hour.text(`${j}AM`)
    }
    else {
      j = i-11
      hour.text(`${j}PM`)
    }
    
    var scheduleItem = $('<textarea>')
    scheduleItem.addClass("col-8 col-md-10 description")
    scheduleItem.rows = "3"

    var btn = $('<button>')
    btn.addClass("btn saveBtn col-2 col-md-1")
    btn.ariaLabel = "save"
    var item = $('<i>')
    item.addClass("fas fa-save")
    btn.append(item)


    timeBlock.append(hour)
    timeBlock.append(scheduleItem)
    timeBlock.append(btn)
    scheduleCon.append(timeBlock) 
  }
  
}
creatSchedule()  

$(function () {
  
  var saveBtnEl = $('.saveBtn');
  saveBtnEl.on('click', function () {
    var text = $(this).siblings("textarea").val(); 
    var hrKey = $(this).parent().attr("id")
    localStorage.setItem(hrKey,text);
    var saved = localStorage.getItem(hrKey);
    console.log(saved)
  });
  
  // Populate saved item on to correspinding space
  for (var i=0; i<24; i++) {
    var saved = localStorage.getItem(i);
    console.log(saved)
    $(`#${i} textarea`).val(saved)
    
  }
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').append(day);
});
