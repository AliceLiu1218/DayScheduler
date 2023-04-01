// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeBlock
var currentHr = dayjs().hour();
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
    var text = $(this).siblings("textarea").val(); //save as string
    var hrKey = $(this).parent().attr("id")
    console.log(hrKey)
    localStorage.setItem(hrKey,text);

  });
  

  

  // TODO: Add code to display the current date in the header of the page.
});
