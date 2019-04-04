// Today's date
var now = new Date();

// Create array of days (getDay always starts with Sunday)
var weekday = new Array();
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

// Create array of months
var monthYear = new Array();
monthYear[0] = "January";
monthYear[1] = "February";
monthYear[2] = "March";
monthYear[3] = "April";
monthYear[4] = "May";
monthYear[5] = "June";
monthYear[6] = "July";
monthYear[7] = "August";
monthYear[8] = "September";
monthYear[9] = "October";
monthYear[10] = "November";
monthYear[11] = "December";

// Variables for date, month and time
var checkTime = function() {
  var dayOfWeek = now.getDay();
  var nbDate = now.getDate(); 
  var month = now.getMonth(); 
  var hour = now.getHours(); 
  var minutes = now.getMinutes(); 
  var today = weekday[dayOfWeek]; 
  var thisMonth = monthYear[month];
  // Inserts date and time in div
  var timeDiv = document.getElementById('timeDiv');

// Choose 24h time (not am/pm)
var suffix = hour >= 24 ? "" : "";

  // add 0 to one digit minutes
  if (minutes < 10) {
    minutes = "0" + minutes
  };

// Button and function "close early"
var btn = document.getElementById("close"); 
btn.addEventListener("click", closeEarly);

function closeEarly() {
    timeDiv.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Go to hell, we\'re closing early today ! <br/><br/><img class="picture" src="https://media1.tenor.com/images/34fecae7c3f348f0606c7ad9d5489f48/tenor.gif?itemid=3389550">';
    timeDiv.className = 'open';
  } 

  // Closed on Sunday and Monday
  if ((dayOfWeek == 0 || dayOfWeek == 1) && hour >= 0 && hour <= 23) {
    timeDiv.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Oh crap, we\'re closed ! <br/><br/><img class="picture" src="https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif">';
    timeDiv.className = 'closed';
  } 

  // Open from Tuesday to Saturday 9h-18h
  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5 || dayOfWeek == 6) && hour >= 9 && hour <= 18) {
    timeDiv.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Hooray, we\'re open ! <br/><br/><img class="picture" src="https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif">';
    timeDiv.className = 'open';
  } 

  // Closed from Tuesday to Saturday 0h-9h 
  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5 || dayOfWeek == 6) && hour >= 0 && hour < 9) {
    timeDiv.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Oh crap, we\'re closed ! <br/><br/><img class="picture" src="https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif">';
    timeDiv.className = 'closed';
  } 

  // Closed from Tuesday to Saturday 18h-23h 
  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5 || dayOfWeek == 6) && hour > 18 && hour <= 23) {
    timeDiv.innerHTML = '<b>' + today + ' ' + nbDate + ' ' + thisMonth + ' </b><br/><br/> ' + ' It is ' + hour + 'h' + minutes + suffix + '<br/><br/>Oh crap, we\'re closed ! <br/><br/><img class="picture" src="https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif">';
    timeDiv.className = 'closed';
  } 

  // Closing early when button clicked 
  else if ((dayOfWeek == 2 || dayOfWeek == 3 || dayOfWeek == 4 || dayOfWeek == 5 || dayOfWeek == 6) && hour >= 0 && hour < 9) { closeEarly

  }
};

// Clock updates every 30 seconds
setInterval(checkTime, 30000);
checkTime();


// Creating picture class for border styling in CSS
var picture = document.createElementByClassName("picture")
